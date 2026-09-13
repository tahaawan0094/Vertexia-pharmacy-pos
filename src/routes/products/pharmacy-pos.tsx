import { createFileRoute } from "@tanstack/react-router";
import Navbar from "@/components/Navbar";
import { pharmacyPosPageSchema, buildCanonicalUrl } from "@/lib/seo";
import PharmacyPosHero from "@/components/PharmacyPosHero";
import PharmacyPosFeatures from "@/components/PharmacyPosFeatures";
import FAQSection from "@/components/FAQSection";
import NewsletterSection from "@/components/NewsletterSection";
import FooterSection from "@/components/FooterSection";

export const Route = createFileRoute("/products/pharmacy-pos")({
  head: () => ({
    meta: [
      { title: "Pharmacy POS & Inventory Management Software | Vertexia" },
      {
        name: "description",
        content:
          "Custom Pharmacy POS and inventory management software for medical stores and distributors in Pakistan. Fast billing, batch & expiry tracking, and formula search.",
      },
      { property: "og:title", content: "Pharmacy POS & Inventory Management Software | Vertexia" },
      {
        property: "og:description",
        content:
          "Custom Pharmacy POS and inventory management software for medical stores and distributors in Pakistan. Fast billing, batch & expiry tracking, and formula search.",
      },
      { property: "og:url", content: buildCanonicalUrl("/products/pharmacy-pos") },
      { "script:ld+json": pharmacyPosPageSchema },
    ],
    links: [{ rel: "canonical", href: buildCanonicalUrl("/products/pharmacy-pos") }],
  }),
  component: PharmacyPosPage,
});

function PharmacyPosPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white relative">
      <Navbar />

      <main className="relative z-0">
        <PharmacyPosHero />
        <PharmacyPosFeatures />
        <FAQSection />
        <NewsletterSection />
      </main>

      <FooterSection />
    </div>
  );
}
