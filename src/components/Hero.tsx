import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import ScrambleText from "@/components/ScrambleText";
import { ArrowRight, Code2, Award } from "lucide-react";

import Navbar from "@/components/Navbar";

export default function Hero() {
  const [timeStr, setTimeStr] = useState("");

  useEffect(() => {
    const update = () => {
      try {
        const now = new Date();
        const opts: Intl.DateTimeFormatOptions = {
          hour: "numeric",
          minute: "2-digit",
          second: "2-digit",
          hour12: true,
          timeZone: "Asia/Karachi",
        };
        setTimeStr(new Intl.DateTimeFormat("en-US", opts).format(now));
      } catch (e) {
        // fallback to local time
        const now = new Date();
        setTimeStr(now.toLocaleTimeString());
      }
    };

    update();
    const id = window.setInterval(update, 1000);
    return () => window.clearInterval(id);
  }, []);
  return (
    <div className="relative isolate min-h-screen w-full overflow-hidden bg-[#0a0a0a] text-white">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src="/flower-bg..png"
          alt="Flower background"
          className="h-full w-full object-cover opacity-45"
        />
        <div className="absolute inset-0 bg-black/45" />
      </div>

      {/* Decorative grid removed as requested */}

      {/* Master Navbar */}
      <Navbar />

      {/* Hero content */}
      <div className="relative z-20">
        {/* Left side ticks */}
        <div className="hidden md:flex flex-col absolute left-4 sm:left-8 lg:left-12 top-36 lg:top-44 space-y-24 sm:space-y-40 text-[10px] tracking-widest text-white/40 font-mono z-20">
          {["00.01°", "00.02°", "00.03°"].map((tick, i) => (
            <motion.div
              key={tick}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 + i * 0.15, duration: 0.5 }}
              className="flex items-center gap-2"
            >
              <span className="inline-block w-8 h-px bg-white/30" />
              <span>// {tick}</span>
            </motion.div>
          ))}
        </div>

        {/* Right stat */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="hidden lg:block absolute right-4 lg:right-12 top-28 text-right z-20"
        >
          <div className="text-[#b692ff] text-5xl font-semibold tracking-tight">26+</div>
          <div className="text-[11px] tracking-widest text-white/70 font-semibold mt-1 leading-relaxed">
            QUIETLY MAKING NOISE FOR<br />BRANDS NATIONWIDE
          </div>
          <div className="mt-3 h-px w-16 bg-white/20 ml-auto" />
        </motion.div>

        {/* Left main copy */}
        <div className="relative z-20 px-4 sm:px-6 lg:px-12 pt-28 lg:pt-36 pb-24 max-w-[1600px]">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="text-2xl sm:text-4xl md:text-5xl lg:text-[38px] font-semibold leading-[1.2] max-w-full md:ml-16 lg:ml-24 xl:ml-28"
          >
            Digital experiences that <br />
            connect, scale and perform
            <span className="text-[#b692ff]">.</span>
          </motion.h2>

          {/* Big Create\Studio wordmark */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.9, ease: "easeOut" }}
            className="mt-16 lg:mt-24 flex items-baseline flex-wrap md:ml-12 lg:ml-20 xl:ml-24"
          >
            <span className="font-bold tracking-tighter bg-gradient-to-r from-[#b692ff] via-white to-[#b692ff] bg-clip-text text-transparent text-[48px] sm:text-[72px] md:text-[110px] lg:text-[170px] leading-none">
              Vertexia
            </span>
            <span className="font-bold tracking-tighter text-white text-[48px] sm:text-[72px] md:text-[110px] lg:text-[170px] leading-none">
              \ Agency
            </span>
          </motion.div>

          {/* Description + CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="mt-12 max-w-full md:max-w-md md:ml-16 lg:ml-24 xl:ml-28"
          >
            <p className="text-xs tracking-[0.15em] leading-relaxed text-white/90">
              <ScrambleText
                text="A DIGITAL AGENCY TRUSTED BY STARTUPS AND LEADING BRANDS. WE CREATE STORIES PEOPLE REMEMBER."
                className="text-xs tracking-[0.15em] leading-relaxed text-white/90"
              />
            </p>

            <div className="mt-8 pt-4 border-t border-white/20 inline-block pr-16">
                <div className="text-[11px] tracking-widest text-white/70 leading-relaxed">
                  OUR TIME {timeStr || "--:--:--"}<br />
                  UTC+5 KARACHI - PAKISTAN
                </div>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Link
                to="/work"
                className="group w-full sm:w-auto rounded-lg flex items-center justify-center gap-3 bg-[#b692ff] hover:bg-[#d0b7ff] transition-colors px-6 py-4 text-xs tracking-[0.2em] font-medium text-white no-underline"
              >
                SEE WORK
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/contact"
                className="group w-full sm:w-auto rounded-lg flex items-center justify-center gap-3 bg-white text-black hover:bg-white/90 transition-colors px-6 py-4 text-xs tracking-[0.2em] font-medium no-underline"
              >
                LET'S CHAT
                <ArrowRight className="w-4 h-4 text-[#b692ff] group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Right showreel card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="hidden lg:block absolute right-8 lg:right-12 bottom-8 w-[280px] z-20"
        >
          <div className="flex items-center justify-between text-[10px] tracking-widest text-white/60 mb-2">
            <span>SHOWVIDEO</span>
            <span className="flex-1 mx-3 h-px bg-white/20" />
            <span>\\2026</span>
          </div>
          <div className="relative aspect-video rounded-sm overflow-hidden border border-white/10 bg-black">
            <video
              className="h-full w-full object-cover"
              src="/video.mp4"
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              aria-hidden="true"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/40 via-transparent to-emerald-950/60" />
            <div className="relative z-10 w-14 h-14 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center mx-auto top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <Code2 className="w-5 h-5 text-white/80" />
            </div>
          </div>
          <div className="mt-3 flex items-center gap-2 text-[10px] tracking-widest text-white/80">
            <Award className="w-3 h-3 text-[#b692ff]" />
            <span>BEST DIGITAL CAMPAIGN,WOBBLY AWARDS</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}