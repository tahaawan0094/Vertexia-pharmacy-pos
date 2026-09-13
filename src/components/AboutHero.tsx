import React, { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";

// Team Members Data for Card 4
interface TeamMember {
  name: string;
  image: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Tobias Neumann",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Amelia Cross",
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Sofia Reyes",
    image:
      "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Lucas Marino",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
  },
];

// Typewriter Component
function TypewriterText({ text, delay = 0 }: { text: string; delay?: number }) {
  const letters = Array.from(text);

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: delay,
      },
    },
  };

  const child = {
    hidden: { opacity: 0, display: "none" },
    visible: { opacity: 1, display: "inline" },
  };

  return (
    <motion.span
      variants={container}
      initial="hidden"
      animate="visible"
      className="inline-block"
    >
      {letters.map((letter, index) => (
        <motion.span variants={child} key={index}>
          {letter}
        </motion.span>
      ))}
    </motion.span>
  );
}

// Scroll Word Reveal Component
function ScrollWord({
  children,
  progress,
  range,
}: {
  children: string;
  progress: MotionValue<number>;
  range: [number, number];
}) {
  const opacity = useTransform(progress, range, [0.2, 1]);

  return (
    <span className="relative mr-[0.28em] my-1 inline-block">
      <span className="absolute opacity-20 text-[#2D2D2D] select-none">
        {children}
      </span>
      <motion.span style={{ opacity }} className="text-[#2D2D2D]">
        {children}
      </motion.span>
    </span>
  );
}

// Dot Matrix Logo
function DotMatrixLogo() {
  return (
    <svg className="w-10 h-10 flex-shrink-0" viewBox="0 0 100 100" fill="none">
      <circle cx="50" cy="50" r="10" fill="#b692ff" />
      <circle cx="50" cy="25" r="7" fill="#b692ff" />
      <circle cx="50" cy="75" r="7" fill="#b692ff" />
      <circle cx="25" cy="50" r="7" fill="#b692ff" />
      <circle cx="75" cy="50" r="7" fill="#b692ff" />
      <circle cx="32" cy="32" r="6" fill="#b692ff" opacity="0.85" />
      <circle cx="68" cy="32" r="6" fill="#b692ff" opacity="0.85" />
      <circle cx="32" cy="68" r="6" fill="#b692ff" opacity="0.85" />
      <circle cx="68" cy="68" r="6" fill="#b692ff" opacity="0.85" />
    </svg>
  );
}

export default function AboutHero() {
  const containerRef = useRef<HTMLDivElement>(null);

  const statementText =
    "Every project is personal to us, shaped by real conversations, thoughtful decisions, and the belief that great work comes from collaboration, not hierarchy.";
  const statementWords = statementText.split(" ");

  const { scrollYProgress: statementScroll } = useScroll({
    target: containerRef,
    offset: ["0.2 start", "0.45 start"],
  });

  return (
    <div ref={containerRef} className="relative w-full bg-black text-white">
      {/* ================= CARD 1: HERO SECTION ================= */}
      <div className="sticky top-0 h-screen w-full z-10 overflow-hidden bg-black pt-20">
        <section className="w-full h-full flex flex-col md:flex-row">
          {/* Left Column */}
          <div className="relative w-full md:w-1/2 h-full flex flex-col justify-end p-8 sm:p-12 md:p-16 bg-black overflow-hidden border-b md:border-b-0 md:border-r border-white/10">
            <div className="absolute inset-0 h-full w-full overflow-hidden">
              <motion.img
                initial={{ y: "100%" }}
                animate={{ y: "0%" }}
                transition={{
                  duration: 1.2,
                  ease: [0.16, 1, 0.3, 1],
                }}
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1600&q=80"
                alt="Team working"
                className="h-full w-full object-cover grayscale brightness-50 contrast-125"
              />
            </div>

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent pointer-events-none" />

            <div className="relative z-10 max-w-lg">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight text-white lowercase">
                <div>
                  <TypewriterText text="we listen." delay={0.4} />
                </div>
                <div>
                  <TypewriterText text="we imagine." delay={0.9} />
                </div>
                <div className="text-[#b692ff]">
                  <TypewriterText text="we create." delay={1.4} />
                </div>
              </h2>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.8, duration: 0.6 }}
                className="mt-10 flex gap-[6px] sm:gap-[7px] items-center"
              >
                {Array.from({ length: 24 }).map((_, i) => (
                  <span
                    key={i}
                    className="inline-block h-8 sm:h-10 w-[1.5px] bg-white/30"
                  />
                ))}
              </motion.div>
            </div>
          </div>

          {/* Right Column */}
          <div className="relative w-full md:w-1/2 h-full bg-white text-gray-900 flex flex-col justify-between p-8 sm:p-12 md:p-16">
            <div className="pt-8 md:pt-12">
              <div className="w-6 h-[3px] bg-[#b692ff] mb-3" />
              <motion.h1
                initial={{ opacity: 0, y: -15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold tracking-tight text-black leading-none"
              >
                The Studio
              </motion.h1>
            </div>

            <div className="mt-16 md:mt-0 max-w-lg pb-10">
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-lg sm:text-xl md:text-2xl text-gray-500 font-normal leading-snug tracking-tight mb-12"
              >
                We help ambitious teams turn good ideas into strong digital
                experiences and products.
              </motion.p>

              <div className="flex gap-[6px] sm:gap-[7px] items-center">
                {Array.from({ length: 36 }).map((_, i) => (
                  <span
                    key={i}
                    className="inline-block h-8 sm:h-10 w-[1.5px] bg-gray-200"
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* ================= CARD 2: STATEMENT TEXT REVEAL ================= */}
      <div className="sticky top-0 h-screen w-full z-20 overflow-hidden bg-[#f4f4f5] text-[#2D2D2D] shadow-[0_-30px_60px_rgba(0,0,0,0.3)] pt-20">
        <div className="w-full h-full flex items-center justify-center px-6 sm:px-12 lg:px-20">
          <div className="max-w-6xl mx-auto">
            <p className="flex flex-wrap text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight leading-[1.18]">
              {statementWords.map((word, i) => {
                const start = i / statementWords.length;
                const end = start + 1 / statementWords.length;
                return (
                  <ScrollWord
                    key={i}
                    progress={statementScroll}
                    range={[start, end]}
                  >
                    {word}
                  </ScrollWord>
                );
              })}
            </p>
          </div>
        </div>
      </div>

      {/* ================= CARD 3: WE ARE CREATE SECTION ================= */}
      <div className="sticky top-0 h-screen w-full z-30 overflow-hidden bg-white text-gray-900 shadow-[0_-30px_60px_rgba(0,0,0,0.4)]">
        <div className="w-full h-full flex flex-col md:flex-row">
          {/* Left Workspace Image */}
          <div className="relative w-full md:w-1/2 h-full bg-[#F3F3F3] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1600&q=80"
              alt="Designers working together"
              className="h-full w-full object-cover grayscale brightness-105 contrast-105"
            />
          </div>

          {/* Right Details */}
          <div className="w-full md:w-1/2 h-full bg-white flex flex-col justify-between p-8 sm:p-14 lg:p-20 pt-28 sm:pt-32 pb-16">
            <div className="flex items-start gap-4 max-w-sm">
              <DotMatrixLogo />
              <p className="text-sm md:text-base text-gray-600 font-medium leading-snug">
                Vertexia® design, build, and launch digital products that connect
                clarity with character.
              </p>
            </div>

            <div className="mt-16 md:mt-0 max-w-xl">
              <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-[#4A4B4E] leading-[1.05]">
                we are
                <br />
                <span className="text-[#b692ff]">vertexia®</span>
              </h2>

              <p className="mt-8 text-base sm:text-lg md:text-xl text-gray-500 font-normal leading-relaxed max-w-md">
                Amazing group of designers, developers, and strategists who
                enjoy the process as much as the final product.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ================= CARD 4: TEAM SECTION WITH DISCOVER TEAM FOOTER ================= */}
      <div className="sticky top-0 h-screen w-full z-40 overflow-hidden bg-[#121212] text-white shadow-[0_-40px_80px_rgba(0,0,0,0.6)] pt-24 sm:pt-28 pb-10 px-6 sm:px-12 lg:px-20 flex flex-col justify-between overflow-y-auto">
        <div className="max-w-7xl mx-auto w-full flex flex-col justify-between h-full gap-8">
          {/* Top Header Row */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
            <div className="lg:col-span-8">
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-semibold tracking-tight leading-[1.15] text-white">
                Get to know the team behind the work. Makers, thinkers, and
                problem-solvers.
              </h2>
            </div>

            <div className="lg:col-span-4 flex items-start gap-4">
              <div className="w-[3px] h-10 bg-[#b692ff] flex-shrink-0 mt-1" />
              <p className="text-xs sm:text-sm text-gray-300 font-normal leading-relaxed">
                We're a happy creative bunch who take ideas seriously. Just not
                ourselves.
              </p>
            </div>
          </div>

          {/* Middle Grid: 4 Portrait Team Cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {teamMembers.map((member, idx) => (
              <div
                key={idx}
                className="group relative flex flex-col justify-end bg-[#1e1e1e] rounded-2xl overflow-hidden aspect-[3/3.8] max-h-[320px]"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="absolute inset-0 w-full h-full object-cover grayscale contrast-110 brightness-90 group-hover:scale-105 transition-transform duration-700 ease-out"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

                <div className="relative z-10 p-3 sm:p-4">
                  <h3 className="text-xs sm:text-sm md:text-base font-medium tracking-tight text-white">
                    {member.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Row: Leadership Statement & Discover team LinkedIn */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center pt-6 border-t border-white/10">
            {/* Left Column Text */}
            <div className="lg:col-span-6">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-white leading-tight">
                Our leadership team involved from
                <br />
                <span className="text-[#b692ff]">
                  first kickoff to final delivery.
                </span>
              </h3>
            </div>

            {/* Right Column Text & LinkedIn CTA */}
            <div className="lg:col-span-6 flex flex-col justify-start">
              <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white">
                Discover team Vertexia®
              </h3>
              <p className="text-xs sm:text-sm text-gray-400 font-normal mt-2 max-w-md leading-relaxed">
                Meet the people, culture, and energy that keep our work sharp
                and our days fun.
              </p>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-flex items-center gap-3 group text-white font-medium text-sm w-fit"
              >
                <span className="w-9 h-9 rounded-xl bg-[#b692ff] flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </span>
                <span className="group-hover:text-[#b692ff] transition-colors">
                  Follow us on LinkedIn
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}