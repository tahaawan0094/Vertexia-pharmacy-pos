import { createFileRoute } from "@tanstack/react-router";
import Hero from "@/components/Hero";
import { buildCanonicalUrl, DEFAULT_DESCRIPTION, DEFAULT_TITLE } from "@/lib/seo";
import ScrollReveal from "@/components/ScrollReveal";
import ImageRevealSection from "@/components/ImageRevealSection";
import StatsSection from "@/components/StatsSection";
import ServicesSection from "@/components/ServicesSection";
import ProcessSection from "@/components/ProcessSection";
import ProcessFollowUpSection from "@/components/ProcessFollowUpSection";
import ProcessSummarySection from "@/components/ProcessSummarySection";
import FAQSection from "@/components/FAQSection";
import InspireSection from "@/components/InspireSection";
import NewsletterSection from "@/components/NewsletterSection";
import FooterSection from "@/components/FooterSection";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: DEFAULT_TITLE },
      { name: "description", content: DEFAULT_DESCRIPTION },
      { property: "og:title", content: DEFAULT_TITLE },
      { property: "og:description", content: DEFAULT_DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: buildCanonicalUrl("/") },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: buildCanonicalUrl("/") }],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <ScrollReveal />
      <ImageRevealSection />
      <StatsSection />
      <ServicesSection />
      <ProcessSection />
      <ProcessFollowUpSection />
      <ProcessSummarySection />
      <FAQSection />
      <InspireSection />
      <NewsletterSection />
      <FooterSection />
    </>
  );
}
