import { animate, motion } from "framer-motion";
import ScrambleText from "@/components/ScrambleText";
import { useEffect, useState } from "react";

const stats = [
  { value: "86+", label: "PROJECTS SHIPPED", code: "//001" },
  { value: "80%", label: "REPEAT COLLABORATIONS", code: "//002" },
  { value: "32", label: "INDUSTRY AWARDS", code: "//003" },
  { value: "89%", label: "CLIENT RETENTION RATE", code: "//004" },
];

const scrambleChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

function AnimatedStatValue({ value }: { value: string }) {
  const [count, setCount] = useState(0);
  const [hasEntered, setHasEntered] = useState(false);
  const target = Number(value.replace(/[^0-9.-]/g, ""));
  const suffix = value.replace(/[0-9.-]/g, "");

  useEffect(() => {
    if (!hasEntered) return;
    const controls = animate(0, target, {
      duration: 1.2,
      ease: "easeOut",
      onUpdate(latest) {
        setCount(Math.round(latest));
      },
    });

    return () => controls.stop();
  }, [hasEntered, target]);

  return (
    <motion.div
      onViewportEnter={() => setHasEntered(true)}
      viewport={{ once: true }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="flex flex-col items-start justify-end"
    >
      <div className="text-8xl md:text-9xl lg:text-[160px] font-bold text-[#b692ff] mb-4 leading-none">
        {count}
        {suffix}
      </div>
    </motion.div>
  );
}

export default function StatsSection() {
  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-[#050505] text-white">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/black ribbon.jpg"
          alt="Performance background"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Top Header Line */}
      <div className="pointer-events-none absolute inset-x-0 top-6 z-20 flex items-center px-6 sm:px-8 lg:px-12">
        <div className="h-px flex-1 bg-white/10" />
        <div className="absolute left-1/2 top-1/2 h-0.5 w-14 -translate-x-1/2 rounded-full bg-[#b692ff] shadow-[0_0_10px_rgba(182,146,255,0.35)]" />
        <div 
          className="text-right text-[10px] uppercase tracking-[0.35em] text-[#b692ff] font-medium pl-6"
          style={{ 
            fontFamily: "'Segoe UI', sans-serif",
            fontWeight: 400
          }}
        >
          VERTEXIA
        </div>
      </div>

      {/* Side Label */}
      <div className="absolute left-6 top-24 hidden flex-col gap-2 text-left sm:flex lg:left-12 z-20 pointer-events-none">
        <ScrambleText text="HOW WE WORK" />
        <div className="space-y-2">
          {Array.from({ length: 6 }).map((_, index) => (
            <div key={index} className="h-px w-16 bg-white/10" />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full min-h-screen flex flex-col px-8 lg:px-12 py-12 pt-32">
        
        {/* Center Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-col items-start justify-start flex-1 text-left mt-8 lg:mt-12"
        >
          <div className="mb-8 h-px w-24 bg-white/30" />
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-300 leading-[1.05] max-w-3xl mb-6">
            The proof behind our work
          </h2>
          <p className="text-white/70 text-base md:text-lg max-w-2xl leading-relaxed">
            From first launches to lasting collaborations, we're trusted to deliver on time and at quality.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-4 gap-y-12 gap-x-10 mt-auto pt-24 pb-4 md:pb-8"
        >
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-start justify-end">
              <AnimatedStatValue value={stat.value} />
              <div className="text-[10px] md:text-xs tracking-[0.2em] text-white/80 font-medium text-left mb-2">
                {stat.label}
              </div>
              <div className="text-[9px] tracking-[0.15em] text-white/40 font-mono">
                {stat.code}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}