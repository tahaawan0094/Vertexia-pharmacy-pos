"use client";

import React from "react";

export default function FooterSection() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full bg-[#F2F2F2] text-[#4b4b4b] py-12 sm:py-16 px-6 sm:px-12 lg:px-20 font-sans">
      <div className="max-w-7xl mx-auto flex flex-col lg:grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">

        {/* RIGHT COLUMNS (Contact Info) - Mobile pe pehle aayega (order-1) */}
        <div className="order-1 lg:order-2 lg:col-span-6 flex flex-col gap-8 sm:gap-10 items-start w-full">
          
          {/* OFFLINE Section */}
          <div className="space-y-3 w-full">
            <span className="text-[11px] text-[#9a9a9a] uppercase tracking-widest font-semibold block">
              OFFLINE
            </span>
            <div className="w-full h-[1px] bg-slate-300" />
            <div className="text-xs sm:text-sm text-[#6b6b6b] leading-relaxed">
              A St, DHA Phase 5.
              <br />Defence Housing Authority
              <br />Karachi, 75500
            </div>
          </div>

          {/* ONLINE Section */}
          <div className="space-y-3 w-full">
            <span className="text-[11px] text-[#9a9a9a] uppercase tracking-widest font-semibold block">
              ONLINE
            </span>
            <div className="w-full h-[1px] bg-slate-300" />
            <div>
              <a href="mailto:office@vertexiaagency.com" className="text-xs sm:text-sm text-[#b692ff] hover:underline font-medium">
                office@vertexiaagency.com
              </a>
            </div>
          </div>

          {/* PHONE Section */}
          <div className="space-y-3 w-full">
            <span className="text-[11px] text-[#9a9a9a] uppercase tracking-widest font-semibold block">
              PHONE
            </span>
            <div className="w-full h-[1px] bg-slate-300" />
            <div className="flex items-center justify-between gap-2 pt-1">
              <a 
                href="tel:+923172981931" 
                className="text-3xl xs:text-4xl sm:text-6xl font-bold tracking-tight text-[#555b66] hover:text-[#b692ff] transition-colors leading-tight"
              >
                (92) 317-2981931
              </a>

              {/* Scroll to top button */}
              <button 
                onClick={scrollToTop}
                className="text-[#b692ff] hover:opacity-70 transition-opacity cursor-pointer shrink-0"
                aria-label="Scroll to top"
              >
                <svg width="42" height="42" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="sm:w-12 sm:h-12">
                  <line x1="12" y1="21" x2="12" y2="3"></line>
                  <polyline points="5 10 12 3 19 10"></polyline>
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Divider before Branding */}
          <div className="w-full h-[1px] bg-slate-300 block lg:hidden my-2" />

        </div>

        {/* LEFT COLUMN (Branding & Logo) - Mobile pe baad me aayega (order-2) */}
        <div className="order-2 lg:order-1 lg:col-span-6 flex flex-col justify-between h-full space-y-8 lg:space-y-12 w-full">
          <div>
            <p className="text-sm sm:text-base text-[#6b6b6b] mb-6 max-w-md font-normal leading-relaxed">
              Digital experiences that connect, scale and perform.
            </p>

            {/* Brand Logo */}
            <div className="flex items-center gap-1 mb-6">
              <h1 className="text-4xl xs:text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight">
                <span className="text-[#b692ff]">Vertexia</span>
                <span className="text-slate-400 font-light mx-1.5">\</span>
                <span className="text-[#555b66]">Agency</span>
              </h1>
            </div>

            {/* Description */}
            <div className="flex items-center gap-3.5 max-w-sm">
              <p className="text-xs sm:text-sm text-[#6b6b6b] leading-snug">
                A creative agency for design, strategy, marketing, and scalable premium websites.
              </p>
            </div>
          </div>

          <div className="space-y-4 sm:space-y-6 pt-4 lg:pt-0">
            <p className="text-xs text-[#8b8b8b]">
              © 2026 Vertexia Agency — All work, all rights.
            </p>

            <div className="w-full h-[1px] bg-slate-300" />

            {/* Bottom template credits */}
            <div className="flex items-center gap-6 text-xs text-[#7b7b7b]">
              <span className="text-[#9a9a9a]">Developed by Vertexia Agency</span>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}