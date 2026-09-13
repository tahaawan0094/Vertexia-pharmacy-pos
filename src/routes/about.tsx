import { createFileRoute } from "@tanstack/react-router";
import Navbar from "@/components/Navbar";
import { aboutPageSchema, buildCanonicalUrl } from "@/lib/seo";
import AboutHero from "@/components/AboutHero";
import HowWeWork from "@/components/HowWeWork";
import VideoSection from "@/components/VideoSection";
import InspireSection from "@/components/InspireSection";
import NewsletterSection from "@/components/NewsletterSection";
import FooterSection from "@/components/FooterSection";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Vertexia | Custom Web Development Agency, Karachi" },
      {
        name: "description",
        content:
          "Learn how Vertexia helps local businesses, manufacturers, and exporters in Pakistan grow online with custom-built, SEO-optimized websites and long-term support.",
      },
      { property: "og:title", content: "About Vertexia | Custom Web Development Agency, Karachi" },
      {
        property: "og:description",
        content:
          "Learn how Vertexia helps local businesses, manufacturers, and exporters in Pakistan grow online with custom-built, SEO-optimized websites and long-term support.",
      },
      { property: "og:url", content: buildCanonicalUrl("/about") },
      { "script:ld+json": aboutPageSchema },
    ],
    links: [{ rel: "canonical", href: buildCanonicalUrl("/about") }],
  }),
  component: About,
});

function About() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white relative">
      {/* Global Master Navbar */}
      <Navbar />

      {/* Main Page Content */}
      <main className="relative z-0">
        <AboutHero />
        <HowWeWork />
        <VideoSection />
        <InspireSection />
        <NewsletterSection />
      </main>

      <FooterSection />
    </div>
  );
}