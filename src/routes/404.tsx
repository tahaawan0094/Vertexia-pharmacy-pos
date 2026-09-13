import React from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { buildCanonicalUrl } from "@/lib/seo";
import Navbar from "@/components/Navbar";
import NewsletterSection from "@/components/NewsletterSection";
import FooterSection from "@/components/FooterSection";

export const Route = createFileRoute("/404")({
  head: () => ({
    meta: [
      { title: "Page Not Found | Vertexia" },
      { name: "robots", content: "noindex,follow" },
      { property: "og:title", content: "Page Not Found | Vertexia" },
    ],
    links: [{ rel: "canonical", href: buildCanonicalUrl("/404") }],
  }),
  component: NotFoundPage,
});

export default function NotFoundPage() {
  return (
    <div className="min-h-screen w-full bg-[#fafafa] text-[#111111] font-sans flex flex-col justify-between overflow-x-hidden">
      <Navbar />

      {/* Main Section */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 pt-28 md:pt-36 pb-20 flex-1 flex flex-col items-center justify-center text-center">
        
        {/* Heading */}
        <h1 className="text-xl sm:text-2xl md:text-3xl font-normal text-[#111111] tracking-tight leading-snug mb-2 max-w-md">
          We’ve got the <span className="font-bold">pencil</span>,<br />
          just no page to draw on.
        </h1>

        {/* Hero Graphic Container */}
        <div className="relative w-full max-w-5xl h-[450px] sm:h-[550px] flex items-center justify-center my-8">
          
          {/* Giant Light Gray 404 Watermark */}
          <span className="absolute text-[16rem] sm:text-[25rem] md:text-[32rem] font-extrabold text-[#f0f0f0] select-none tracking-tighter leading-none z-0">
            404
          </span>

          {/* SVG Animated Text Path - Seamless Looping with Zero Gap */}
          <svg
            className="absolute z-10 w-[400px] h-[400px] sm:w-[550px] sm:h-[550px] pointer-events-none overflow-visible"
            viewBox="0 0 500 500"
          >
            <defs>
              <path
                id="arcCirclePath"
                d="M 250, 250 m -180, 0 a 180,180 0 1,1 360,0 a 180,180 0 1,1 -360,0"
                fill="none"
              />
            </defs>

            <motion.g
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
              style={{ transformOrigin: "250px 250px" }}
            >
              <text
                fill="#111111"
                className="text-xl sm:text-2xl font-black"
              >
                <textPath
                  href="#arcCirclePath"
                  startOffset="0%"
                  textLength="1131"
                  lengthAdjust="spacing"
                >
                  404 &nbsp;&nbsp; 404 &nbsp;&nbsp; 404 &nbsp;&nbsp; 404 &nbsp;&nbsp; 404 &nbsp;&nbsp; 404 &nbsp;&nbsp; 404 &nbsp;&nbsp; 404 &nbsp;&nbsp; 404 &nbsp;&nbsp; 404 &nbsp;&nbsp; 404 &nbsp;&nbsp; 404 &nbsp;&nbsp;
                </textPath>
              </text>
            </motion.g>
          </svg>

          {/* PENCIL GRAPHIC */}
          <div className="absolute z-20 w-[600px] flex items-center justify-center pointer-events-none">
            <svg
              viewBox="0 0 800 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full filter drop-shadow-[0_12px_16px_rgba(0,0,0,0.15)]"
            >
              {/* Eraser */}
              <rect x="10" y="25" width="45" height="50" rx="8" fill="#E27474" />
              
              {/* Metal Ferrule Ring */}
              <rect x="55" y="25" width="30" height="50" fill="#D3D3D3" />
              <line x1="70" y1="25" x2="70" y2="75" stroke="#B0B0B0" strokeWidth="4" />
              <line x1="60" y1="25" x2="60" y2="75" stroke="#E0E0E0" strokeWidth="2" />
              
              {/* Main Yellow Body */}
              <path d="M 85 25 L 650 25 L 650 75 L 85 75 Z" fill="#F4B01A" />
              
              {/* Highlights */}
              <line x1="85" y1="50" x2="650" y2="50" stroke="#D39209" strokeWidth="5" />
              <line x1="85" y1="35" x2="650" y2="35" stroke="#FCE28A" strokeWidth="4" />

              {/* Wooden Tip */}
              <polygon points="650,25 760,50 650,75" fill="#E3C39D" />

              {/* Graphite Tip */}
              <polygon points="727,42.5 760,50 727,57.5" fill="#1C1C1C" />
            </svg>
          </div>

        </div>

        {/* Action Button */}
        <div className="mt-8 z-30">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white border border-gray-200 shadow-md rounded-xl text-sm font-bold tracking-widest text-gray-800 uppercase hover:bg-gray-50 hover:shadow-lg transition-all duration-300"
          >
            <span>Back to home</span>
            <span className="text-[#ff4d2d] text-lg leading-none">→</span>
          </Link>
        </div>

      </main>

      <NewsletterSection />
      <FooterSection />
    </div>
  );
}