import React, { useRef } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { buildCanonicalUrl } from "@/lib/seo";
import Navbar from "@/components/Navbar";
import NewsletterSection from "@/components/NewsletterSection";
import FooterSection from "@/components/FooterSection";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy | Vertexia" },
      {
        name: "description",
        content:
          "Read Vertexia's privacy policy to understand how we collect, use, and protect your information when you use our website and services.",
      },
      { property: "og:title", content: "Privacy Policy | Vertexia" },
      {
        property: "og:description",
        content:
          "Read Vertexia's privacy policy to understand how we collect, use, and protect your information when you use our website and services.",
      },
      { property: "og:url", content: buildCanonicalUrl("/privacy-policy") },
    ],
    links: [{ rel: "canonical", href: buildCanonicalUrl("/privacy-policy") }],
  }),
  component: PrivacyPolicyPage,
});

export default function PrivacyPolicyPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Track overall scroll progress for weighted feel
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Heavy physics spring formula
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 70,
    damping: 25,
    mass: 1.2,
    restDelta: 0.001,
  });

  // Dynamic vertical translation for heavy scroll effect
  const rightColumnY = useTransform(smoothProgress, [0, 1], ["0px", "-40px"]);

  return (
    <div className="min-h-screen w-full bg-[#fafafa] text-[#111111] font-sans" ref={containerRef}>
      <Navbar />

      {/* Main Container */}
      <main className="max-w-7xl mx-auto px-6 sm:px-10 md:px-16 pt-24 md:pt-28 pb-28">
        
        {/* Sticky Header Wrapper with Solid Backdrop Mask */}
        <div className="sticky top-16 md:top-20 z-30 bg-[#fafafa] pt-6 pb-6 mb-10 border-b border-gray-200/60">
          <div className="absolute -top-32 left-[-100px] right-[-100px] h-32 bg-[#fafafa] pointer-events-none" />

          <div className="flex flex-row justify-between items-end relative z-10">
            <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[7rem] font-normal tracking-tighter text-[#222222] leading-none">
              Privacy Policy
            </h1>
            <div className="text-right text-xs sm:text-sm text-gray-400 font-normal leading-tight pb-1 sm:pb-2 shrink-0 ml-4">
              <p>Updated</p>
              <p>March 4, 2026</p>
            </div>
          </div>
        </div>

        {/* 2-Column Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start relative">
          
          {/* LEFT COLUMN — Fixed / Sticky */}
          <div className="lg:col-span-5 lg:sticky lg:top-[260px] lg:self-start">
            <div className="w-7 h-[3px] bg-[#ff4d2d] mb-6" />

            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-[#222222] leading-[1.2] mb-6">
              How we handle and protect your information.
            </h2>

            <div className="space-y-4 text-gray-500 text-sm sm:text-base leading-relaxed font-normal">
              <p>
                Our Privacy Policy outlines how we protect and handle your confidential information, from brand strategies to designs.
              </p>
              <p>
                We comply with data protection laws while ensuring your sensitive information remains secure.
              </p>
            </div>

            <div className="mt-10 w-full h-10 opacity-20 bg-[repeating-linear-gradient(90deg,#000,#000_1px,transparent_1px,transparent_6px)]" />
          </div>

          {/* RIGHT COLUMN — Weighted Heavy Scroll Section */}
          <motion.div 
            style={{ y: rightColumnY }}
            className="lg:col-span-7 space-y-20 sm:space-y-28 pt-1 pb-16 transition-transform ease-out"
          >
            
            {/* Item 1 */}
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-[#222222] mb-4">
                1. Information We Collect
              </h3>
              <ul className="space-y-2 text-gray-500 text-sm sm:text-base leading-relaxed max-w-xl font-normal list-disc list-inside">
                <li>Client contact details</li>
                <li>Project requirements and briefs</li>
                <li>Payment information</li>
                <li>Website usage data</li>
                <li>Communication records</li>
              </ul>
            </div>

            {/* Item 2 */}
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-[#222222] mb-4">
                2. How We Use Information
              </h3>
              <ul className="space-y-2 text-gray-500 text-sm sm:text-base leading-relaxed max-w-xl font-normal list-disc list-inside">
                <li>Project delivery and management</li>
                <li>Client communication</li>
                <li>Service improvement</li>
                <li>Legal compliance</li>
                <li>Marketing with consent</li>
              </ul>
            </div>

            {/* Item 3 */}
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-[#222222] mb-4">
                3. Data Protection
              </h3>
              <ul className="space-y-2 text-gray-500 text-sm sm:text-base leading-relaxed max-w-xl font-normal list-disc list-inside">
                <li>Industry-standard security measures</li>
                <li>Encrypted data transmission</li>
                <li>Secure server storage</li>
                <li>Regular security audits</li>
                <li>Access limited to necessary personnel</li>
              </ul>
            </div>

            {/* Item 4 */}
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-[#222222] mb-4">
                4. Information Sharing
              </h3>
              <ul className="space-y-2 text-gray-500 text-sm sm:text-base leading-relaxed max-w-xl font-normal list-disc list-inside">
                <li>Never sold to third parties</li>
                <li>Shared only with authorized project partners</li>
                <li>Legal requirements when applicable</li>
                <li>Client approval required for case studies</li>
              </ul>
            </div>

            {/* Item 5 */}
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-[#222222] mb-4">
                5. Your Rights
              </h3>
              <ul className="space-y-2 text-gray-500 text-sm sm:text-base leading-relaxed max-w-xl font-normal list-disc list-inside">
                <li>Access your data</li>
                <li>Request corrections</li>
                <li>Delete your information</li>
                <li>Opt out of marketing</li>
                <li>Export your data</li>
              </ul>
            </div>

            {/* Item 6 */}
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-[#222222] mb-4">
                6. Contact
              </h3>
              <div className="text-gray-500 text-sm sm:text-base leading-relaxed max-w-xl font-normal space-y-4">
                <p>For privacy concerns:</p>
                <p>
                  <strong className="text-[#222222] font-medium">Email:</strong>{" "}
                  <a href="mailto:office@vertexiaagency.com" className="hover:underline text-gray-700">
                    office@vertexiaagency.com
                  </a>
                </p>
                <div>
                  <strong className="text-[#222222] font-medium block mb-1">Address:</strong>
                  <p>A St, DHA Phase 5,</p>
                  <p>Defence Housing Authority,</p>
                  <p>Karachi, 75500</p>
                </div>
              </div>
            </div>

          </motion.div>

        </div>
      </main>

      <NewsletterSection />
      <FooterSection />
    </div>
  );
}