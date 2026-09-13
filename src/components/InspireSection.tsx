"use client";

import React from "react";
import { Link } from "@tanstack/react-router";

export default function InspireSection() {
  return (
    <section className="relative w-full min-h-[680px] lg:min-h-[750px] overflow-hidden bg-white text-[#797D82] font-sans flex items-center justify-center py-16 px-6 sm:px-12 lg:px-20">
      {/* BACKGROUND VIDEO (FULL CLEAN COVER) */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none"
        src="/white%20background%20video.mp4"
        autoPlay
        muted
        loop
        playsInline
      />

      {/* MAIN INNER CONTAINER */}
      <div className="relative z-10 max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        
        {/* LEFT COLUMN */}
        <div className="flex flex-col justify-between h-full space-y-12 lg:space-y-20">
          
          {/* Top Divider Line & Years Heading */}
          <div className="space-y-4 max-w-md">
            <div className="w-12 h-[1.5px] bg-[#797D82]/30" />
            
            <h3 className="text-4xl sm:text-5xl font-medium tracking-tight text-[#797D82]">
              2 <span className="font-normal text-[#797D82]/80">years</span>
            </h3>

            <p className="text-xs sm:text-sm text-[#797D82]/90 leading-relaxed font-normal">
              Building lasting partnerships, scaling brands, and shipping work that stands out.
            </p>
          </div>

          {/* Stats List with Orange Plus Icons */}
          <ul className="space-y-3 max-w-md pt-4">
            {[
              "26+ projects delivered",
              "99% on-time launches",
              "84% average boost in engagement",
            ].map((stat, index) => (
              <li key={index} className="flex items-center gap-2.5 text-xs sm:text-sm text-[#797D82] font-medium">
                <span className="w-3.5 h-3.5 rounded-[3px] bg-[#b692ff] text-white flex items-center justify-center text-[10px] font-bold shrink-0">
                  +
                </span>
                {stat}
              </li>
            ))}
          </ul>

          {/* Timeline Divider & Large Watermark Year */}
          <div className="space-y-4 pt-2">
            <div className="w-10 h-[1.5px] bg-[#797D82]/30" />
            <div className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tighter text-[#797D82]/15 select-none">
              2025 — 2026
            </div>
          </div>

        </div>

        {/* RIGHT COLUMN */}
        <div className="flex flex-col space-y-10 lg:pl-6">
          
          {/* Main Headline (Increased Size) */}
          <h2 className="text-5xl sm:text-7xl lg:text-[5rem] font-medium tracking-tight leading-[1.05] text-[#797D82]">
            Let us <span className="text-[#b692ff]">inspire</span> <br />
            your next <br />
            project
          </h2>

          {/* Card / Author Section (Without Image) */}
          <div className="space-y-6 pt-2 max-w-md">
            <div className="space-y-3 py-1">
              <p className="text-xs sm:text-sm text-[#797D82]/90 italic leading-relaxed">
                "We listen first, stay transparent, and deliver what we promise. Every project matters to us."
              </p>

              <div className="text-xs text-[#797D82]">
                <span className="font-semibold block text-[#797D82]">Taha Awan</span>
                <span className="text-[#797D82]/70 font-normal text-[11px]">CEO of Vertexia®</span>
              </div>
            </div>

            {/* Book Intro Call Button */}
            <div className="pt-2">
              <Link
                to="/contact"
                className="bg-[#b692ff] hover:bg-[#d0b7ff] text-white text-[11px] font-bold tracking-wider px-6 py-3.5 rounded-xl transition-all shadow-sm active:scale-95 flex items-center gap-2 justify-center"
              >
                BOOK AN INTRO CALL <span className="text-sm leading-none">→</span>
              </Link>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}