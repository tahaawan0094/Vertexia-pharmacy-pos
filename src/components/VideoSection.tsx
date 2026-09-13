import React, { useRef, useEffect } from "react";
import { motion, useInView, useSpring, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";

// Animated Counter Component for Statistics
function CounterNumber({ value, suffix = "%" }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const springValue = useSpring(0, {
    stiffness: 45,
    damping: 18,
    duration: 2,
  });

  const displayValue = useTransform(springValue, (current) =>
    Math.floor(current)
  );

  useEffect(() => {
    if (isInView) {
      springValue.set(value);
    }
  }, [isInView, springValue, value]);

  return (
    <span ref={ref} className="inline-flex items-center">
      <motion.span>{displayValue}</motion.span>
      {suffix}
    </span>
  );
}

// Custom Minimal SVG Logos
function AurelisLogo() {
  return (
    <div className="flex items-center gap-1 text-gray-800 font-semibold tracking-wider text-lg opacity-80 hover:opacity-100 transition-opacity">
      <span className="tracking-tight text-xl font-bold">aurelis</span>
      <div className="flex flex-col text-[8px] leading-tight text-gray-500 font-normal uppercase pl-0.5">
        <span>beach</span>
        <span>resort</span>
      </div>
    </div>
  );
}

function LindholmLogo() {
  return (
    <div className="flex items-center gap-2 text-gray-800 font-bold text-xl tracking-tight opacity-80 hover:opacity-100 transition-opacity">
      <svg className="w-5 h-5 text-gray-800" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
      <span>Lindholm</span>
    </div>
  );
}

function TahoLogo() {
  return (
    <div className="text-gray-900 font-extrabold text-2xl tracking-widest uppercase opacity-80 hover:opacity-100 transition-opacity">
      TAHO<span className="text-xs align-super ml-0.5">®</span>
    </div>
  );
}

function WendrichLogo() {
  return (
    <div className="flex items-center gap-2 text-gray-800 font-bold text-xl opacity-80 hover:opacity-100 transition-opacity">
      <div className="w-5 h-5 rounded-full border-4 border-gray-800 border-t-transparent -rotate-45" />
      <span>Wendrich</span>
    </div>
  );
}

function ObliqonLogo() {
  return (
    <div className="flex items-center gap-2 text-gray-800 font-bold text-xl tracking-tight opacity-80 hover:opacity-100 transition-opacity">
      <div className="w-6 h-3 rounded-full border-2 border-gray-800" />
      <span>Obliqon</span>
      <span className="text-xs align-super">®</span>
    </div>
  );
}

function LogisyncLogo() {
  return (
    <div className="flex items-center gap-1.5 text-gray-800 font-bold text-xl opacity-80 hover:opacity-100 transition-opacity">
      <svg className="w-6 h-6 text-gray-800" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
        <path d="M8 12h8M12 8l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <span>Logisync</span>
    </div>
  );
}

export default function VideoAndClients() {
  return (
    <div className="relative w-full bg-black">
      
      {/* SECTION 1: FULLSCREEN VIDEO (STICKY) */}
      <div className="sticky top-0 h-screen w-full z-10 overflow-hidden bg-black">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full h-full"
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            src="/video.mp4"
            poster="/background%20vertexia.jfif"
            className="w-full h-full object-cover block"
          >
            Your browser does not support the video tag.
          </video>
        </motion.div>
      </div>

      {/* SECTION 2: CLIENTS & PARTNERS (STICKY CARD) */}
      <div className="sticky top-0 min-h-screen w-full z-20 overflow-hidden bg-white text-gray-900 shadow-[0_-40px_80px_rgba(0,0,0,0.7)] flex flex-col justify-between">
        
        {/* Top Pinstripe Barcode Lines Header */}
        <div className="w-full h-16 sm:h-20 bg-white relative overflow-hidden border-b border-gray-100 flex-shrink-0">
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `repeating-linear-gradient(90deg, #000 0, #000 1px, transparent 0, transparent 16px)`,
            }}
          />
        </div>

        {/* Main Section Content */}
        <div className="flex-1 w-full bg-white px-6 sm:px-12 py-12 sm:py-16 flex flex-col justify-between items-center">
          <div className="max-w-5xl mx-auto w-full text-center">
            
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-[#4A4B4E] leading-none">
              Clients & Partners
            </h2>
            <p className="mt-4 text-gray-500 text-base sm:text-xl font-normal max-w-xl mx-auto leading-relaxed">
              Brands who trusted us to help shape their next chapter.
            </p>

            {/* Logos Grid */}
            <div className="mt-12 sm:mt-16 grid grid-cols-2 md:grid-cols-3 gap-8 sm:gap-12 lg:gap-16 items-center justify-items-center pb-12">
              <AurelisLogo />
              <LindholmLogo />
              <TahoLogo />
              <WendrichLogo />
              <ObliqonLogo />
              <LogisyncLogo />
            </div>

            {/* "Be our next partner" Block */}
            <div className="mt-8 pt-12 sm:pt-16 border-t border-gray-200/80 grid grid-cols-1 md:grid-cols-2 gap-8 items-center text-left">
              <div>
                <h3 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-[#4A4B4E]">
                  Be our next partner
                </h3>
              </div>

              <div className="flex flex-col items-start gap-5">
                <p className="text-gray-500 text-sm sm:text-base leading-relaxed max-w-md">
                  We’re open to new ideas, conversations, and collaborations. Let’s find what we can build together.
                </p>

                <a
                  href="#contact"
                  className="inline-flex items-center gap-3 group text-gray-900 font-medium text-sm sm:text-base mt-1"
                >
                  <span className="w-10 h-10 rounded-xl bg-[#b692ff] flex items-center justify-center transition-transform duration-300 group-hover:scale-110 shadow-sm">
                    <ArrowRight className="w-4 h-4 text-white" />
                  </span>
                  <span className="group-hover:text-[#b692ff] transition-colors">
                    Book an Intro Call
                  </span>
                </a>
              </div>
            </div>

          </div>
        </div>

      </div>

      {/* SECTION 3: ACHIEVEMENTS SECTION (PURPLE ACCENT THEME #b692ff) */}
      <div className="relative z-30 w-full bg-[#141414] text-white py-24 sm:py-32 px-6 sm:px-12 lg:px-20 border-t border-white/10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          
          {/* Left Side: Title & Paragraphs */}
          <div className="lg:col-span-7 flex flex-col justify-between h-full">
            <div>
              {/* Top Purple Accent Line */}
              <div className="w-10 h-[3px] bg-[#b692ff] mb-8" />
              
              <h2 className="text-4xl sm:text-6xl md:text-7xl font-semibold tracking-tight leading-none text-white mb-10">
                Achievements
              </h2>

              <p className="text-gray-300 text-lg sm:text-2xl font-normal leading-relaxed mb-6 max-w-xl">
                Since launch, Create® has partnered with forward-thinking brands and startups across design, technology, and strategy.
              </p>

              <p className="text-gray-400 text-sm sm:text-base leading-relaxed max-w-xl mb-12">
                Our work has grown from independent projects to large-scale collaborations, earning recognition for clarity, precision, and performance. We keep our process lean, our goals measurable, and our results visible.
              </p>
            </div>

            {/* Watch Showreel Button */}
            <div>
              <a
                href="#showreel"
                className="inline-flex items-center gap-4 text-white font-medium text-base group"
              >
                <span className="w-12 h-12 rounded-2xl bg-[#b692ff] flex items-center justify-center transition-transform duration-300 group-hover:scale-105 shadow-md">
                  <ArrowRight className="w-5 h-5 text-white" />
                </span>
                <span className="group-hover:text-[#b692ff] transition-colors">
                  Watch Showreel 2025
                </span>
              </a>
            </div>
          </div>

          {/* Right Side: Statistics Grid with Purple Numbers (#b692ff) */}
          <div className="lg:col-span-5 flex flex-col gap-12 lg:pl-8">
            
            {/* Stat 1 */}
            <div className="border-b border-gray-800/80 pb-8">
              <h3 className="text-6xl sm:text-7xl md:text-8xl font-bold text-[#b692ff] tracking-tight leading-none">
                <CounterNumber value={48} />
              </h3>
              <div className="flex items-center justify-between mt-4">
                <p className="text-xs sm:text-sm font-mono tracking-widest text-gray-300 uppercase">
                  NEW CLIENTS ONBOARDED
                </p>
                <span className="text-xs font-mono text-gray-600">//001</span>
              </div>
            </div>

            {/* Stat 2 */}
            <div className="border-b border-gray-800/80 pb-8">
              <h3 className="text-6xl sm:text-7xl md:text-8xl font-bold text-[#b692ff] tracking-tight leading-none">
                <CounterNumber value={120} />
              </h3>
              <div className="flex items-center justify-between mt-4">
                <p className="text-xs sm:text-sm font-mono tracking-widest text-gray-300 uppercase">
                  PROJECTS DELIVERED
                </p>
                <span className="text-xs font-mono text-gray-600">//002</span>
              </div>
            </div>

            {/* Stat 3 */}
            <div className="border-b border-gray-800/80 pb-8">
              <h3 className="text-6xl sm:text-7xl md:text-8xl font-bold text-[#b692ff] tracking-tight leading-none">
                <CounterNumber value={87} />
              </h3>
              <div className="flex items-center justify-between mt-4">
                <p className="text-xs sm:text-sm font-mono tracking-widest text-gray-300 uppercase">
                  REPEAT COLLABORATIONS
                </p>
                <span className="text-xs font-mono text-gray-600">//003</span>
              </div>
            </div>

          </div>

        </div>
      </div>

    </div>
  );
}