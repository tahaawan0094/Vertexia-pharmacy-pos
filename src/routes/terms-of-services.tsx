import React, { useRef } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { buildCanonicalUrl } from "@/lib/seo";
import Navbar from "@/components/Navbar";
import NewsletterSection from "@/components/NewsletterSection";
import FooterSection from "@/components/FooterSection";

export const Route = createFileRoute("/terms-of-services")({
  head: () => ({
    meta: [
      { title: "Terms of Service | Vertexia" },
      {
        name: "description",
        content:
          "Review the terms and conditions governing use of the Vertexia website and web development services.",
      },
      { property: "og:title", content: "Terms of Service | Vertexia" },
      {
        property: "og:description",
        content:
          "Review the terms and conditions governing use of the Vertexia website and web development services.",
      },
      { property: "og:url", content: buildCanonicalUrl("/terms-of-services") },
    ],
    links: [{ rel: "canonical", href: buildCanonicalUrl("/terms-of-services") }],
  }),
  component: TermsPage,
});

export default function TermsPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Track overall scroll progress for weighted feel
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Heavy physics spring formula (high mass & damping = heavy physical resistance)
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
              Terms of Service
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
              Essential guidelines for working with Vertexia® Creative Agency
            </h2>

            <div className="space-y-4 text-gray-500 text-sm sm:text-base leading-relaxed font-normal">
              <p>
                Our Terms of Service outlines our client agreement, setting clear guidelines for deliverables, payments, and intellectual property rights.
              </p>
              <p>
                This protects both parties and prevents misunderstandings in creative projects.
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
              <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-[#222222] mb-3">
                1. Service Scope
              </h3>
              <p className="text-gray-500 text-sm sm:text-base leading-relaxed max-w-xl font-normal">
                We provide digital product design, branding, web development, and creative consulting services. Project specifics are defined in individual agreements.
              </p>
            </div>

            {/* Item 2 */}
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-[#222222] mb-3">
                2. Project Terms
              </h3>
              <p className="text-gray-500 text-sm sm:text-base leading-relaxed max-w-xl font-normal">
                All projects require a signed agreement, 50% upfront deposit, and clearly defined deliverables. Changes to scope require written approval and may affect pricing.
              </p>
            </div>

            {/* Item 3 */}
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-[#222222] mb-3">
                3. Intellectual Property
              </h3>
              <p className="text-gray-500 text-sm sm:text-base leading-relaxed max-w-xl font-normal">
                Clients retain ownership of their original materials and final deliverables upon full payment. Vertexia retains rights to unused concepts and portfolio usage unless otherwise agreed.
              </p>
            </div>

            {/* Item 4 */}
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-[#222222] mb-3">
                4. Payment Structure
              </h3>
              <p className="text-gray-500 text-sm sm:text-base leading-relaxed max-w-xl font-normal">
                Project fees are outlined in individual agreements. Final payment is due before file delivery. Additional costs for third-party services, rush fees, or scope changes will be billed separately.
              </p>
            </div>

            {/* Item 5 */}
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-[#222222] mb-3">
                5. Timeline & Communication
              </h3>
              <p className="text-gray-500 text-sm sm:text-base leading-relaxed max-w-xl font-normal">
                Project timelines are established in agreements. Response time during business hours is within 24 hours. Delays due to client feedback may affect project completion.
              </p>
            </div>

            {/* Item 6 */}
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-[#222222] mb-3">
                6. Liability
              </h3>
              <p className="text-gray-500 text-sm sm:text-base leading-relaxed max-w-xl font-normal">
                Services are provided "as is" with no guarantee of specific results. Liability is limited to project fees paid. We operate under applicable jurisdiction laws.
              </p>
            </div>

          </motion.div>

        </div>
      </main>

      <NewsletterSection />
      <FooterSection />
    </div>
  );
}