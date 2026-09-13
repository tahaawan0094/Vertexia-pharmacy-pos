import "./lib/error-capture";

import { consumeLastCapturedError } from "./lib/error-capture";
import { renderErrorPage } from "./lib/error-page";

type ServerEntry = {
  fetch: (request: Request, env: unknown, ctx: unknown) => Promise<Response> | Response;
};

let serverEntryPromise: Promise<ServerEntry> | undefined;

async function getServerEntry(): Promise<ServerEntry> {
  if (!serverEntryPromise) {
    serverEntryPromise = import("@tanstack/react-start/server-entry").then(
      (m) => (m.default ?? m) as ServerEntry,
    );
  }
  return serverEntryPromise;
}

// h3 swallows in-handler throws into a normal 500 Response with body
// {"unhandled":true,"message":"HTTPError"} — try/catch alone never fires for those.
async function normalizeCatastrophicSsrResponse(response: Response): Promise<Response> {
  if (response.status < 500) return response;
  const contentType = response.headers.get("content-type") ?? "";
  if (!contentType.includes("application/json")) return response;

  const body = await response.clone().text();
  if (!isH3SwallowedErrorBody(body)) return response;

  console.error(consumeLastCapturedError() ?? new Error(`h3 swallowed SSR error: ${body}`));
  return new Response(renderErrorPage(), {
    status: 500,
    headers: { "content-type": "text/html; charset=utf-8" },
  });
}

function isH3SwallowedErrorBody(body: string): boolean {
  try {
    const payload = JSON.parse(body) as { unhandled?: unknown; message?: unknown };
    return payload.unhandled === true && payload.message === "HTTPError";
  } catch {
    return false;
  }
}

function getBase64(value: string) {
  if (typeof Buffer !== "undefined") return Buffer.from(value).toString("base64");
  if (typeof btoa !== "undefined") return btoa(value);
  throw new Error("Base64 encoding is not available in this runtime.");
}

async function sendEmailViaMailgun(email: string) {
  const apiKey = process.env.MAILGUN_API_KEY;
  const domain = process.env.MAILGUN_DOMAIN;
  const to = process.env.EMAIL_TO || "office@vertexiaagency.com";

  if (!apiKey || !domain) {
    throw new Error("Mailgun environment variables are not configured.");
  }

  const auth = getBase64(`api:${apiKey}`);
  const body = new URLSearchParams();
  body.append("from", `Vertexia Website <noreply@${domain}>`);
  body.append("to", to);
  body.append("subject", "New Newsletter Signup");
  body.append("text", `Please contact this email:\n${email}`);

  const response = await fetch(`https://api.mailgun.net/v3/${domain}/messages`, {
    method: "POST",
    headers: {
      Authorization: `Basic ${auth}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body,
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Mailgun error: ${response.status} ${errorText}`);
  }
}

async function sendEmailViaSendGrid(email: string) {
  const apiKey = process.env.SENDGRID_API_KEY;
  const to = process.env.EMAIL_TO || "office@vertexiaagency.com";
  const from = process.env.EMAIL_FROM || "noreply@vertexiaagency.com";

  if (!apiKey) {
    throw new Error("SendGrid API key is not configured.");
  }

  const response = await fetch("https://api.sendgrid.com/v3/mail/send", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      personalizations: [{ to: [{ email: to }], subject: "New Newsletter Signup" }],
      from: { email: from, name: "Vertexia Website" },
      content: [{ type: "text/plain", value: `Please contact this email:\n${email}` }],
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`SendGrid error: ${response.status} ${errorText}`);
  }
}

async function handleSendEmailRequest(request: Request) {
  if (request.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method not allowed" }), {
      status: 405,
      headers: { "content-type": "application/json" },
    });
  }

  let data: unknown;
  try {
    data = await request.json();
  } catch {
    return new Response(JSON.stringify({ error: "Invalid JSON" }), {
      status: 400,
      headers: { "content-type": "application/json" },
    });
  }

  if (!data || typeof data !== "object" || !("email" in data)) {
    return new Response(JSON.stringify({ error: "Missing email field" }), {
      status: 400,
      headers: { "content-type": "application/json" },
    });
  }

  const email = String((data as { email?: unknown }).email).trim();
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return new Response(JSON.stringify({ error: "Invalid email address" }), {
      status: 400,
      headers: { "content-type": "application/json" },
    });
  }

  try {
    if (process.env.MAILGUN_API_KEY && process.env.MAILGUN_DOMAIN) {
      await sendEmailViaMailgun(email);
    } else if (process.env.SENDGRID_API_KEY) {
      await sendEmailViaSendGrid(email);
    } else {
      return new Response(
        JSON.stringify({ error: "Email service is not configured on the server." }),
        { status: 500, headers: { "content-type": "application/json" } },
      );
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "content-type": "application/json" },
    });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: "Email send failed" }), {
      status: 500,
      headers: { "content-type": "application/json" },
    });
  }
}

export default {
  async fetch(request: Request, env: unknown, ctx: unknown) {
    try {
      const url = new URL(request.url);
      const host = url.hostname.toLowerCase();
      if (host === "vertexiaagency.com") {
        const redirectUrl = new URL(request.url);
        redirectUrl.hostname = "www.vertexiaagency.com";
        return Response.redirect(redirectUrl.toString(), 301);
      }

      if (url.pathname === "/api/send-email") {
        return await handleSendEmailRequest(request);
      }

      const handler = await getServerEntry();
      const response = await handler.fetch(request, env, ctx);
      return await normalizeCatastrophicSsrResponse(response);
    } catch (error) {
      console.error(error);
      return new Response(renderErrorPage(), {
        status: 500,
        headers: { "content-type": "text/html; charset=utf-8" },
      });
    }
  },
};
