"use client";

import { motion, Variants } from "framer-motion";
import { 
  ArrowRight, 
  Telescope, 
  Target, 
  PenTool, 
  Rocket,
  LucideIcon 
} from "lucide-react";
import { Link } from "@tanstack/react-router";
import ScrambleText from "@/components/ScrambleText";

interface SectionItem {
  title: string;
  description: string;
  code: string;
  icon: LucideIcon;
}

const sections: SectionItem[] = [
  {
    title: "DISCOVERY",
    description: "We start by listening. Goals, challenges, and vision are mapped out clearly, setting the foundation for everything that follows.",
    code: "//01",
    icon: Telescope,
  },
  {
    title: "STRATEGY",
    description: "With insights in place, we define the roadmap. Positioning, priorities, and the best way to align design and execution.",
    code: "//02",
    icon: Target,
  },
  {
    title: "DESIGN & BUILD",
    description: "Ideas take shape. From visuals to digital experiences, we design and develop with sharp attention to detail.",
    code: "//03",
    icon: PenTool,
  },
  {
    title: "LAUNCH & GROW",
    description: "Delivery is just the beginning. We measure, refine, and scale to ensure your project continues to perform.",
    code: "//04",
    icon: Rocket,
  },
];

// Typed Animation Variants
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1.0] } 
  }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1
    }
  }
};

interface ProcessCardProps {
  title: string;
  description: string;
  code: string;
  icon: LucideIcon;
}

function ProcessCard({ title, description, code, icon: Icon }: ProcessCardProps) {
  return (
    <motion.article 
      variants={fadeInUp}
      whileHover={{ y: -6, transition: { duration: 0.25, ease: "easeOut" } }}
      className="group overflow-hidden rounded-2xl sm:rounded-[1rem] bg-[#08080a] p-6 sm:p-4 md:p-7 transition duration-300 hover:-translate-y-1 w-full sm:max-w-[320px] flex flex-col justify-between border border-white/5 shadow-lg"
    >
      <div>
        {/* Top Header: Icon Left, Code Right */}
        <div className="flex items-center justify-between mb-3">
          <motion.div
            whileHover={{ rotate: 12, scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Icon className="h-6 w-6 sm:h-6 sm:w-6 text-[#b692ff]" />
          </motion.div>
          <span className="text-[11px] sm:text-[10px] uppercase tracking-[0.2em] text-[#b692ff] font-semibold">
            {code}
          </span>
        </div>

        {/* Short Underline accent on Mobile (Image 1 jaisa), full width line on Desktop */}
        <div className="h-[2px] w-8 bg-[#b692ff]/40 mb-6 sm:mb-5 sm:w-full sm:h-[1px] sm:bg-white/10" />

        {/* Title */}
        <h3 className="text-sm uppercase tracking-[0.08em] text-white font-bold mb-3">
          <ScrambleText text={title} className="text-white" />
        </h3>

        {/* Description */}
        <p className="text-xs sm:text-sm leading-relaxed text-white/60 font-normal">
          {description}
        </p>
      </div>
    </motion.article>
  );
}

export default function ProcessFollowUpSection() {
  return (
    <section className="relative w-full overflow-hidden bg-[#050505] text-white font-sans">
      
      {/* Exact Original Background Gradients Restored */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-[65%] bg-gradient-to-r from-[#003c4f] via-[#05111f] to-[#3a0026] opacity-90" />
        <div className="absolute top-[65%] w-full h-[35%] bg-gradient-to-b from-black to-[#050505]" />
        <div className="absolute top-[65%] w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent blur-[1px]" />
      </div>

      <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 py-12 sm:py-16 lg:py-24 lg:px-12">
        
        {/* Top Section */}
        <div className="flex flex-col gap-8 sm:gap-12 lg:gap-16 lg:grid lg:grid-cols-2 lg:items-center">
          
          {/* Left Heading Content */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
            className="space-y-4 sm:space-y-8 max-w-full lg:max-w-xl"
          >
            <motion.h2 
              variants={fadeInUp} 
              className="text-2xl sm:text-3xl md:text-4xl lg:text-[56px] font-medium tracking-[-0.02em] leading-[1.05] text-white"
            >
              Services built on process, precision, and people.
            </motion.h2>

            <motion.p 
              variants={fadeInUp} 
              className="text-xs sm:text-sm md:text-base leading-relaxed text-white/80"
            >
              We combine strategy, design, content, and technology, giving you a single partner for every stage of your brand's growth.
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-col xs:flex-row items-start xs:items-center gap-2 xs:gap-4 pt-2">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#b692ff] text-white transition-transform"
              >
                <ArrowRight className="h-4 w-4 xs:h-5 xs:w-5" />
              </motion.button>
              <span className="text-xs xs:text-sm font-medium tracking-wide">Chat with our Operations Manager</span>
            </motion.div>
          </motion.div>

          {/* Right Cards Grid */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
            className="w-full lg:flex lg:justify-end"
          >
            <div className="w-full grid gap-4 sm:gap-5 grid-cols-1 sm:grid-cols-2">
              {sections.map((section) => (
                <ProcessCard key={section.title} {...section} />
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          className="mt-16 sm:mt-24 lg:mt-32 flex flex-col gap-8 sm:gap-12 lg:grid lg:grid-cols-[1fr_1fr_1fr] lg:items-center lg:gap-16"
        >
          
          {/* Image Block */}
          <motion.div 
            variants={fadeInUp}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.4 }}
            className="relative overflow-hidden rounded-2xl h-[220px] w-full shadow-2xl group"
          >
            <img
              src="/section3.jpg" 
              alt="Blackwell Motors"
              className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6">
              <h3 className="text-lg sm:text-2xl font-medium text-white tracking-tight">Work With Us</h3>
            </div>
          </motion.div>

          {/* Middle Text */}
          <motion.div variants={fadeInUp} className="max-w-[340px]">
            <p className="text-sm sm:text-[15px] leading-7 text-white/90">
              Step inside one of our featured projects. From first brief to launch, follow the process that shows what makes Vertexia® different.
            </p>
          </motion.div>

          {/* Right Content - Clean Left Border Line (No Card/Box Background) */}
          <motion.div 
            variants={fadeInUp}
            className="space-y-3 sm:space-y-5 border-l border-white/10 pl-4 sm:pl-8 lg:pl-10"
          >
            <h3 className="text-base sm:text-lg md:text-xl lg:text-[32px] font-medium tracking-tight text-white leading-tight">
              Our process in motion
            </h3>
            <p className="text-sm sm:text-[15px] leading-7 text-white/70 max-w-[340px]">
              Explore a real case where strategy, design, and delivery lined up exactly as we work today.
            </p>
            <div className="flex items-center gap-4 pt-2">
              <Link
                to="/about"
                className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl bg-[#b692ff] text-white transition-transform hover:scale-105 active:scale-95"
              >
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                to="/about"
                className="text-xs sm:text-sm font-medium tracking-wide text-white hover:text-[#d0b7ff]"
              >
                Explore Case Studies
              </Link>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}