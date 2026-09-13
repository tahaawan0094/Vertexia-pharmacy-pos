import React from "react";
import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { buildCanonicalUrl, contactPageSchema } from "@/lib/seo";
import Navbar from "@/components/Navbar";
import InspireSection from "@/components/InspireSection";
import NewsletterSection from "@/components/NewsletterSection";
import FooterSection from "@/components/FooterSection";

// TanStack Router Registration
export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Vertexia | Get a Custom Website Quote in Karachi" },
      {
        name: "description",
        content:
          "Contact Vertexia for a custom Next.js website built for speed, SEO, and conversions — based in Karachi, serving businesses across Pakistan.",
      },
      { property: "og:title", content: "Contact Vertexia | Get a Custom Website Quote in Karachi" },
      {
        property: "og:description",
        content:
          "Contact Vertexia for a custom Next.js website built for speed, SEO, and conversions — based in Karachi, serving businesses across Pakistan.",
      },
      { property: "og:url", content: buildCanonicalUrl("/contact") },
      { "script:ld+json": contactPageSchema },
    ],
    links: [{ rel: "canonical", href: buildCanonicalUrl("/contact") }],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <div className="relative min-h-screen w-full flex flex-col md:flex-row font-sans bg-black overflow-hidden">
        {/* Import Figtree Font directly */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Figtree:wght@400;500;600;700&display=swap');
      `}</style>

      {/* Global Solid Master Navbar */}
      <Navbar />

      {/* Left Side: Dark Theme with Heading & Image Reveal */}
      <div className="relative w-full md:w-1/2 min-h-[65vh] md:min-h-screen bg-[#111111] text-white flex flex-col justify-end p-8 sm:p-12 md:p-14 lg:p-16 pt-36 pb-20 overflow-hidden text-left">
        
        {/* Animated Image Reveal (Bottom to Top) */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: "0%", opacity: 1 }}
            transition={{
              duration: 1.2,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="w-full h-full relative"
          >
            {/* Background Image */}
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1600&q=80"
              alt="Contact Background"
              className="w-full h-full object-cover opacity-25 grayscale brightness-75 contrast-125"
            />
            {/* Texture Overlay */}
            <div className="absolute inset-0 opacity-40 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] mix-blend-screen" />
            {/* Gradient Mask */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-[#111111]/70" />
          </motion.div>
        </div>

        {/* Left Side Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative z-10 w-full text-left"
        >
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] xl:text-[6.5rem] font-bold tracking-tighter leading-[0.95] text-white text-left mb-8">
            <span className="block">Thinking about</span>
            <span className="block">your next move?</span>
          </h1>

          <p className="text-gray-400 text-lg sm:text-xl md:text-2xl font-light tracking-tight max-w-lg text-left">
            Let's discuss how Vertexia® can help make it real.
          </p>
        </motion.div>
      </div>

      {/* Right Side: Light Theme with Form */}
      <div className="w-full md:w-1/2 min-h-[65vh] md:min-h-screen bg-white text-black flex flex-col justify-center p-8 sm:p-12 md:p-14 lg:p-20 pt-36 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="w-full max-w-2xl text-left"
        >
          {/* Figtree Font - Weight 600 */}
          <h1
            style={{ fontFamily: "'Figtree', sans-serif", fontWeight: 600 }}
            className="text-7xl sm:text-8xl md:text-[7rem] lg:text-[8.5rem] xl:text-[10rem] tracking-tighter mb-4 text-[#111111] leading-[0.88] text-left"
          >
            Let's talk!
          </h1>
          <p className="text-gray-500 mb-14 text-lg md:text-xl font-normal tracking-tight text-left">
            We'd love to hear from you and your team.
          </p>

          <form className="space-y-10 flex flex-col w-full" onSubmit={(e) => e.preventDefault()}>
            <input
              type="text"
              placeholder="Your name"
              className="border-b border-gray-200 pb-3 outline-none focus:border-[#b692ff] transition-colors w-full text-gray-500 placeholder-gray-400 text-sm md:text-base bg-transparent font-normal"
            />
            <input
              type="text"
              placeholder="Company"
              className="border-b border-gray-200 pb-3 outline-none focus:border-[#b692ff] transition-colors w-full text-gray-500 placeholder-gray-400 text-sm md:text-base bg-transparent font-normal"
            />
            <input
              type="email"
              placeholder="Email"
              className="border-b border-gray-200 pb-3 outline-none focus:border-[#b692ff] transition-colors w-full text-gray-500 placeholder-gray-400 text-sm md:text-base bg-transparent font-normal"
            />
            <textarea
              placeholder="Your message"
              rows={5}
              className="border-b border-gray-200 pb-12 outline-none focus:border-[#b692ff] transition-colors w-full text-gray-500 placeholder-gray-400 text-sm md:text-base resize-none bg-transparent font-normal"
            />

            <div className="flex flex-col sm:flex-row sm:items-center gap-6 pt-8">
              <button
                type="submit"
                className="bg-[#b692ff] hover:bg-[#a378f7] text-white px-9 py-3.5 rounded-lg font-bold text-xs sm:text-sm tracking-wider transition-all duration-200 shrink-0 shadow-md active:scale-95"
              >
                SUBMIT &rarr;
              </button>
              <p className="text-xs text-gray-500 leading-relaxed text-left">
                By submitting, you agree to our{" "}
                <a href="#" className="text-[#b692ff] hover:underline font-semibold">
                  Terms &amp; Service
                </a>
                .
              </p>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
      <InspireSection />
      <NewsletterSection />
      <FooterSection />
    </>
  );
}

export default ContactPage;