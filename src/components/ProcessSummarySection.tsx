"use client";

import { motion } from "framer-motion";
import ScrambleText from "@/components/ScrambleText";

// ============================================================================
// HIGH VISIBILITY PARTICLE GLOBE (PURE TEXT OVERLAY - NO BG CARD)
// ============================================================================
function ParticleGlobe() {
  // Generate 140 spiral particles with higher density & contrast
  const particles = Array.from({ length: 140 }).map((_, i) => {
    const angle = i * 0.38;
    const radius = Math.sqrt(i) * 5.6 + 8;
    const x = 100 + radius * Math.cos(angle);
    const y = 100 + radius * Math.sin(angle);

    // Darker colors & higher opacity for sharp visibility
    const opacity = Math.max(0.35, 1 - radius / 75);
    const size = Math.max(1.4, 3.4 - radius * 0.022);
    const isCross = i % 7 === 0 && radius > 22;

    return { id: i, x, y, size, opacity, isCross };
  });

  return (
    <div className="relative w-52 h-52 flex items-center justify-center select-none">
      {/* Rotating Particle Sphere */}
      <motion.svg
        viewBox="0 0 200 200"
        className="w-full h-full"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
      >
        {particles.map((p) => (
          <g key={p.id}>
            {p.isCross ? (
                <text
                x={p.x}
                y={p.y}
                fontSize="6"
                textAnchor="middle"
                dominantBaseline="middle"
                fill="#b692ff"
                opacity={p.opacity}
                fontWeight="bold"
              >
                +
              </text>
            ) : (
              <circle
                cx={p.x}
                cy={p.y}
                r={p.size}
                fill="#b692ff"
                opacity={p.opacity}
              />
            )}
          </g>
        ))}
      </motion.svg>

      {/* Pure Text Overlay (Card/Pill Background Completely Removed) */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <span className="text-[#b692ff] font-bold text-2xl sm:text-[1.65rem] tracking-tight">
          vertexia<sup className="text-xs font-semibold pl-0.5">®</sup>
        </span>
      </div>
    </div>
  );
}

// ============================================================================
// MAIN PROCESS SUMMARY SECTION
// ============================================================================
export default function ProcessSummarySection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section className="relative w-full overflow-hidden bg-[#f8f9fa] text-slate-800 py-20 sm:py-24 font-sans">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 space-y-16">
        
        {/* TOP CORNER HEADER LINE & VERTEXIA LOGO */}
        <div className="relative flex items-center justify-between gap-4">
          <div className="flex flex-1 items-center">
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: 48 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="h-[2px] bg-[#b692ff]" 
            />
            <div className="h-px flex-1 bg-slate-200" />
          </div>

          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="pl-4 text-[#b692ff] font-bold text-lg sm:text-xl tracking-tight leading-none select-none shrink-0 cursor-pointer"
          >
            vertexia<sup className="text-[10px] font-normal pl-0.5">®</sup>
          </motion.div>
        </div>

        {/* MAIN TWO-COLUMN GRID */}
        <div className="grid gap-12 lg:grid-cols-[220px_1fr] lg:items-start pt-2">
          
          {/* LEFT SIDE */}
          <div className="flex flex-col space-y-8">
            <div className="space-y-3">
              <ScrambleText 
                text="WHY CHOOSE US" 
                className="text-[11px] uppercase tracking-[0.35em] text-slate-400 font-semibold block" 
              />
              <div className="flex items-center gap-1">
                <div className="h-[2px] w-4 bg-slate-400" />
                <div className="h-px w-16 bg-slate-200" />
              </div>
            </div>

            <div 
              className="h-5 w-24 rounded-sm border border-slate-200/60 opacity-60"
              style={{
                backgroundImage: `repeating-linear-gradient(-45deg, #94a3b8, #94a3b8 1px, transparent 1px, transparent 4px)`
              }}
            />
          </div>

          {/* RIGHT SIDE */}
          <div className="space-y-8">
            <h2 className="text-5xl sm:text-6xl lg:text-[5.2rem] font-medium tracking-tight leading-[1.05] text-[#6c727e]">
              Designed to Make
              <br />
              Your Life Easier
            </h2>

            <div className="flex items-start gap-4 max-w-2xl pt-1">
              <span className="mt-3 h-px w-8 bg-slate-400 shrink-0" />
              <p className="text-base sm:text-lg leading-relaxed text-[#6c727e] font-normal">
                Clear process, quick reviews, and a clean launch at the end. We keep the steps simple so projects never get stuck.
              </p>
            </div>
          </div>

        </div>

        {/* 6 CARDS GRID SECTION */}
        <motion.div 
          className="relative pt-6 max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            
            {/* CARD 1 */}
            <motion.div 
              variants={cardVariants}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="bg-white rounded-2xl p-6 border border-slate-200/60 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between min-h-[320px] group cursor-pointer"
            >
              <div>
                <h3 className="text-2xl font-medium tracking-tight text-slate-800 leading-snug">
                  we listen. <br />
                  we imagine. <br />
                  <span className="text-[#b692ff] font-semibold">we vertexia.</span>
                </h3>
              </div>

              <div className="py-4 flex items-center justify-center gap-5">
                <div className="w-3.5 h-3.5 rounded-full bg-slate-900 group-hover:scale-110 transition-transform" />
                <div className="w-3.5 h-3.5 rounded-full bg-slate-900 group-hover:scale-110 transition-transform delay-75" />
                
                <motion.div 
                  animate={{ scale: [1, 1.06, 1] }}
                  transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
                  className="w-14 h-14 rounded-full bg-white shadow-md border border-slate-100 flex items-center justify-center"
                >
                  <motion.div 
                    animate={{ scale: [1, 1.15, 1] }}
                    transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
                    className="w-7 h-7 rounded-full bg-[#b692ff]" 
                  />
                </motion.div>
              </div>

              <div className="flex items-center gap-3 pt-3 border-t border-slate-100">
                <div 
                  className="h-3 w-14 rounded border border-slate-200/60 opacity-60" 
                  style={{ backgroundImage: `repeating-linear-gradient(-45deg, #94a3b8, #94a3b8 1px, transparent 1px, transparent 4px)` }} 
                />
                <p className="text-[11px] text-slate-600 font-medium">
                  <span className="text-[#b692ff] font-semibold">Ideas</span> that start with you
                </p>
              </div>
            </motion.div>

            {/* CARD 2 */}
            <motion.div 
              variants={cardVariants}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="bg-[#f0f1f3] rounded-2xl p-6 flex flex-col justify-between min-h-[320px] group border border-transparent hover:border-slate-300/50 transition-all cursor-pointer"
            >
              <div className="flex items-start justify-between">
                <h3 className="text-xl font-medium text-slate-800 leading-tight">
                  Client <br /> Satisfaction <br /> Rate
                </h3>
                <motion.span 
                  whileHover={{ scale: 1.1 }}
                  className="text-2xl font-semibold text-[#b692ff] inline-block origin-right"
                >
                  99.9%
                </motion.span>
              </div>

              <div className="my-3 p-3 rounded-xl bg-slate-200/40 relative overflow-hidden space-y-1.5">
                {[
                  { num: "12+", label: "Industries Served" },
                  { num: "24H", label: "Average Response Time" },
                  { num: "96%", label: "First Draft Approved" },
                  { num: "99%", label: "Ship On-Time" },
                ].map((badge, idx) => (
                  <motion.div 
                    key={idx}
                    whileHover={{ x: 4 }}
                    transition={{ type: "spring", stiffness: 400 }}
                    className="flex items-center gap-1.5 text-[10px] font-mono"
                  >
                    <span className="bg-slate-800 text-white px-1.5 py-0.5 rounded font-bold">{badge.num}</span>
                    <span className="bg-white/80 border border-slate-200 text-slate-600 px-1.5 py-0.5 rounded uppercase tracking-wider text-[9px]">{badge.label}</span>
                  </motion.div>
                ))}
              </div>

              <div className="space-y-0.5">
                <div className="flex items-center gap-1.5">
                  <span className="text-[#b692ff] text-xs">★★★★★</span>
                  <span className="text-xs font-semibold text-slate-700">4.5 / 5 (30 reviews)</span>
                </div>
                <p className="text-[10px] text-slate-500">
                  Backed by feedback from 120+ brands we've worked with.
                </p>
              </div>
            </motion.div>

            {/* CARD 3 */}
            <motion.div 
              variants={cardVariants}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="bg-white rounded-2xl p-6 border border-slate-200/60 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between min-h-[320px] group cursor-pointer overflow-hidden"
            >
              <div className="space-y-1">
                <span className="text-xs text-slate-400 font-normal">No reheated or pre-made.</span>
                <h3 className="text-xl font-medium text-slate-800 leading-snug">
                  Every project starts fresh.
                </h3>
              </div>

              {/* Particle Globe Element */}
              <div className="py-1 flex items-center justify-center">
                <ParticleGlobe />
              </div>

              {/* Bottom Footer */}
              <div className="flex items-center gap-3 pt-3 border-t border-slate-100">
                <div 
                  className="h-3 w-14 rounded border border-slate-200/60 opacity-60" 
                  style={{ backgroundImage: `repeating-linear-gradient(-45deg, #94a3b8, #94a3b8 1px, transparent 1px, transparent 4px)` }} 
                />
                <p className="text-[11px] text-slate-600 font-medium">
                  <span className="text-[#b692ff] font-semibold">Custom work</span> from day one.
                </p>
              </div>
            </motion.div>

            {/* CARD 4 */}
            <motion.div 
              variants={cardVariants}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="bg-white rounded-2xl p-6 border border-slate-200/60 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between min-h-[340px] group cursor-pointer"
            >
              <div className="space-y-1.5">
                <div className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-slate-200/80 text-slate-600 flex items-center justify-center text-xs font-bold group-hover:bg-[#b692ff] group-hover:text-white transition-colors">
                    %
                  </span>
                  <h3 className="text-xl font-medium text-slate-800">Simple Pricing</h3>
                </div>
                <p className="text-[11px] text-slate-500 leading-relaxed">
                  Plans that scale with your project and give you room for unlimited creative opportunities.
                </p>
              </div>

              <div className="my-2 p-3 rounded-xl bg-slate-100/70 border border-slate-200/50 flex items-center justify-center">
                <motion.div 
                  whileHover={{ rotate: 0, scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="transform -rotate-6 bg-[#b692ff] text-white p-2.5 rounded-xl shadow-md w-36 space-y-1.5"
                >
                  <span className="text-[6px] uppercase tracking-wider bg-white/20 px-1 py-0.5 rounded font-mono">FOR STARTUPS AND FIRST LAUNCHES</span>
                  <div className="font-bold text-xs">Plus Plan +</div>
                </motion.div>
              </div>

              <div className="space-y-2 pt-1">
                <p className="text-[10px] text-slate-500">
                  Pick a plan that grows with you and keeps creative costs predictable.
                </p>
                <button className="flex items-center gap-2 text-xs font-semibold text-slate-800 group-hover:text-[#b692ff] transition-colors">
                  <span className="w-6 h-6 rounded-full bg-[#b692ff] text-white flex items-center justify-center text-xs shadow-sm group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                  Explore plans
                </button>
              </div>
            </motion.div>

            {/* CARD 5 (UPDATED: LARGER WHITE INFINITY SYMBOL) */}
            <motion.div 
              variants={cardVariants}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="bg-[#f0f1f3] rounded-2xl p-6 flex flex-col justify-between min-h-[340px] group border border-transparent hover:border-slate-300/50 transition-all cursor-pointer"
            >
              <div className="space-y-1">
                <span className="text-[11px] text-slate-400 font-normal">Built for the long run</span>
                <h3 className="text-xl font-medium text-slate-800 leading-snug">
                  With You <br /> Beyond Launch
                </h3>
              </div>

              {/* Large White Infinity Symbol */}
              <div className="py-2 flex items-center justify-center">
                <motion.svg 
                  animate={{ scale: [1, 1.06, 1] }}
                  transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                  className="w-36 h-20 sm:w-44 sm:h-24 drop-shadow-md" 
                  viewBox="0 0 64 50" 
                  fill="none" 
                  stroke="#ffffff" 
                  strokeWidth="5.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M 32,25 C 20,11 8,11 8,25 C 8,39 20,39 32,25 C 44,11 56,11 56,25 C 56,39 44,39 32,25 Z" />
                </motion.svg>
              </div>

              <div className="space-y-1.5 pt-1">
                {["Ongoing support", "Long-term partnership", "Future-ready builds"].map((item, idx) => (
                  <motion.div 
                    key={idx}
                    whileHover={{ x: 3 }}
                    className="flex items-center gap-2 text-xs text-slate-700 font-medium"
                  >
                    <span className="w-3.5 h-3.5 rounded-full bg-slate-300/80 text-slate-700 flex items-center justify-center text-[9px] group-hover:bg-[#b692ff] group-hover:text-white transition-colors">✓</span>
                    {item}
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* CARD 6 */}
            <motion.div 
              variants={cardVariants}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="bg-[#f0f1f3] rounded-2xl p-6 flex flex-col justify-between min-h-[340px] relative overflow-hidden group border border-transparent hover:border-slate-300/50 transition-all cursor-pointer"
            >
              <div className="space-y-1 z-10">
                <span className="text-[11px] text-slate-400 font-normal">Quick intro call, no strings attached.</span>
                <h3 className="text-xl font-medium text-slate-800 leading-snug">
                  Let's chat or just say hello.
                </h3>
              </div>

              <div className="relative my-2 min-h-[130px] flex items-end justify-center z-10">
                <motion.div 
                  animate={{ y: [0, -7, 0] }}
                  transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
                  className="absolute right-0 bottom-1 text-5xl select-none"
                >
                  👷🏼‍♂️
                </motion.div>

                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  className="w-full bg-white/90 backdrop-blur-sm p-3 rounded-xl border border-slate-200/80 shadow-sm space-y-1.5"
                >
                  <div className="flex items-center gap-1.5 text-[10px] text-slate-500 font-medium">
                    <span className="w-3.5 h-3.5 rounded-full bg-slate-100 flex items-center justify-center text-[9px] animate-pulse">⏱</span>
                    Next Availability
                  </div>
                  <p className="text-xs font-semibold text-slate-800">
                    from 14 September 2025
                  </p>
                  <button className="flex items-center gap-2 text-xs font-medium text-slate-800 group-hover:text-[#b692ff] transition-colors">
                    <span className="w-5 h-5 rounded-md bg-[#b692ff] text-white flex items-center justify-center text-[10px] group-hover:translate-x-0.5 transition-transform">
                      →
                    </span>
                    Book now
                  </button>
                </motion.div>
              </div>
            </motion.div>

          </div>

          {/* RIGHT SIDE VERTICAL WATERMARK */}
          <div className="hidden lg:block absolute -right-16 bottom-0 select-none pointer-events-none opacity-15 rotate-90 origin-bottom-right">
            <span className="text-8xl font-bold tracking-tighter text-slate-400">
              vertexia<sup className="text-3xl">®</sup>
            </span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}