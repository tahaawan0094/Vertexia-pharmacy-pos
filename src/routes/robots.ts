import { createFileRoute } from "@tanstack/react-router";
import { SITE_URL } from "@/lib/seo";

export const Route = createFileRoute("/robots")({
  component: () => null,
  loader: async () => {
    const body = `User-agent: *
Allow: /

Sitemap: ${SITE_URL}/sitemap.xml
`;

    return new Response(body, {
      headers: {
        "content-type": "text/plain; charset=utf-8",
      },
    });
  },
});
