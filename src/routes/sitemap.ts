import { createFileRoute } from "@tanstack/react-router";
import { SITE_URL } from "@/lib/seo";

export const Route = createFileRoute("/sitemap")({
  component: () => null,
  loader: async () => {
    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>${SITE_URL}/</loc><lastmod>${new Date().toISOString()}</lastmod></url>
  <url><loc>${SITE_URL}/about</loc><lastmod>${new Date().toISOString()}</lastmod></url>
  <url><loc>${SITE_URL}/contact</loc><lastmod>${new Date().toISOString()}</lastmod></url>
  <url><loc>${SITE_URL}/privacy-policy</loc><lastmod>${new Date().toISOString()}</lastmod></url>
  <url><loc>${SITE_URL}/terms-of-services</loc><lastmod>${new Date().toISOString()}</lastmod></url>
  <url><loc>${SITE_URL}/work</loc><lastmod>${new Date().toISOString()}</lastmod></url>
</urlset>`;

    return new Response(xml, {
      headers: {
        "content-type": "application/xml; charset=utf-8",
      },
    });
  },
});
