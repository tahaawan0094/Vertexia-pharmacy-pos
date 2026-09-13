import React, { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Search, ChevronDown, ArrowRight } from "lucide-react";

import Navbar from "@/components/Navbar";
import InspireSection from "@/components/InspireSection";
import NewsletterSection from "@/components/NewsletterSection";
import FooterSection from "@/components/FooterSection";
import { buildCanonicalUrl, workPageSchema } from "@/lib/seo";

// Types Definition
interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  date: string;
  logoName: string;
  subTag1: string;
  subTag2: string;
  image: string;
  link?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Shelby Cosmetic",
    category: "Cosmetics & Skincare E-Commerce",
    description: "Luxury cosmetic branding, digital shopping experience, and modern beauty website.",
    date: "SEPTEMBER 02, 2026",
    logoName: "shelby",
    subTag1: "cosmetic",
    subTag2: "beauty",
    image: "/work/vertexia-work-image-1.png",
    link: "https://www.shelbycosmetic.com/",
  },
  {
    id: 2,
    title: "Neotro Fits",
    category: "Apparel & Activewear E-Commerce",
    description: "Modern fitness wear branding, dynamic online storefront, and activewear collection.",
    date: "SEPTEMBER 02, 2026",
    logoName: "neotro",
    subTag1: "fits",
    subTag2: "apparel",
    image: "/work/vertexia-work-image-2.PNG",
    link: "https://www.neotrofits.com/",
  },
  {
    id: 3,
    title: "Fabricovic",
    category: "Textiles & Premium Fabrics E-Commerce",
    description: "High-end textile showcase, custom fabric store, and digital brand experience.",
    date: "SEPTEMBER 02, 2026",
    logoName: "fabricovic",
    subTag1: "textile",
    subTag2: "fabrics",
    image: "/work/vertexia-work-image-3.PNG",
    link: "https://www.fabricovic.com/",
  },
  {
    id: 4,
    title: "TIPTOP GARMENTS",
    category: "Fashion & Retail E-Commerce",
    description: "Trendsetting garment branding, retail online shopping, and apparel showcase.",
    date: "SEPTEMBER 02, 2026",
    logoName: "tiptop",
    subTag1: "garments",
    subTag2: "fashion",
    image: "/work/vertexia-work-image-4.PNG",
    link: "https://www.shopbytiptop.com/",
  },
  {
    id: 5,
    title: "Project Pegasus",
    category: "Global Tech & Web Platform",
    description: "Immersive digital platform, custom web experience, and futuristic brand showcase.",
    date: "SEPTEMBER 02, 2026",
    logoName: "pegasus",
    subTag1: "tech",
    subTag2: "world",
    image: "/work/vertexia-work-image-6.PNG",
    link: "https://projectpegasus.world/",
  },
  {
    id: 6,
    title: "Pre-OwnedWatches",
    category: "Luxury Watches & Horology E-Commerce",
    description: "Certified pre-owned luxury timepiece store, authentication platform, and horology showcase.",
    date: "SEPTEMBER 02, 2026",
    logoName: "preowned",
    subTag1: "watches",
    subTag2: "luxury",
    image: "/work/vertexia-work-image-7.PNG",
    link: "https://preownedwatches.net/",
  },
  {
    id: 7,
    title: "NcCollection",
    category: "Fashion & Lifestyle E-Commerce",
    description: "Curated fashion collection, trendy outfit store, and online clothing brand experience.",
    date: "SEPTEMBER 02, 2026",
    logoName: "nccollection",
    subTag1: "fashion",
    subTag2: "lifestyle",
    image: "/work/vertexia-work-image-8.PNG",
    link: "https://nccollection.pk/",
  },
  
];

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title: "Work | Vertexia | Custom Web Development Portfolio" },
      {
        name: "description",
        content:
          "Explore Vertexia's portfolio of custom websites, digital experiences, and growth-focused solutions for Pakistani businesses.",
      },
      { property: "og:title", content: "Work | Vertexia | Custom Web Development Portfolio" },
      {
        property: "og:description",
        content:
          "Explore Vertexia's portfolio of custom websites, digital experiences, and growth-focused solutions for Pakistani businesses.",
      },
      { property: "og:url", content: buildCanonicalUrl("/work") },
      { "script:ld+json": workPageSchema },
    ],
    links: [{ rel: "canonical", href: buildCanonicalUrl("/work") }],
  }),
  component: WorkPage,
});

function WorkPage() {
  const [mousePosition, setMousePosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    setMousePosition({
      x: e.clientX,
      y: e.clientY,
    });
  };

  const hoveredProject = projects.find((p) => p.id === hoveredId);

  return (
    <div className="min-h-screen bg-[#FDFDFD] text-gray-900 overflow-x-hidden selection:bg-[#b692ff] selection:text-white relative">
      {/* Master Global Navbar */}
      <Navbar />

      {/* Floating Custom Hover Cursor (z-50 guarantees Navbar stays on top) */}
      <motion.div
        className="fixed top-0 left-0 w-36 h-36 bg-[#b692ff] rounded-full flex flex-col items-center justify-center text-white pointer-events-none z-50 shadow-xl"
        animate={{
          x: mousePosition.x - 72,
          y: mousePosition.y - 72,
          scale: hoveredId !== null ? 1 : 0,
          opacity: hoveredId !== null ? 1 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 150,
          damping: 15,
          mass: 0.5,
          opacity: { duration: 0.2 },
          scale: { duration: 0.2 },
        }}
      >
        <ArrowRight className="w-8 h-8 mb-2 font-light stroke-[1.5]" />
        <span className="text-[10px] tracking-[0.15em] font-medium uppercase font-mono">
          {hoveredProject?.link ? "Visit Website" : "View Case Study"}
        </span>
      </motion.div>

      {/* Content wrapper padded to avoid clipping under fixed Navbar */}
      <main className="px-4 pt-28 sm:pt-36 pb-24 sm:px-6 lg:px-8 max-w-[1920px] mx-auto">

        {/* Header Title */}
        <div className="w-full flex justify-center items-center">
          <h1 className="text-[15.5vw] leading-[0.85] font-bold text-[#7E8085] tracking-[-0.05em] lowercase whitespace-nowrap select-none">
            selected work
          </h1>
        </div>

        {/* Subheader & Search Section */}
        <div className="mt-16 px-2 sm:px-4 flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
          <div className="max-w-xl">
            <h2 className="text-2xl md:text-3xl text-gray-900 font-medium leading-tight tracking-tight mb-4">
              Alongside the result, you’ll see the process behind our project.
            </h2>
            <p className="text-[#888A8F] text-sm md:text-base leading-relaxed max-w-md">
              Each project began with a challenge and delivered measurable results. Discover how we turn complex problems into clear solutions.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-8 w-full md:w-auto">
            <div className="flex items-center gap-3 border-b border-gray-200 pb-2 w-full sm:w-48 group">
              <Search className="w-4 h-4 text-[#b692ff] group-focus-within:text-[#b692ff] transition-colors" />
              <input
                type="text"
                placeholder="Project Name"
                className="text-sm outline-none w-full text-gray-800 placeholder-gray-400 bg-transparent"
              />
            </div>

            <div className="flex items-center justify-between gap-3 border-b border-gray-200 pb-2 w-full sm:w-48 cursor-pointer hover:border-gray-300 transition-colors">
              <span className="text-sm text-gray-700">Category</span>
              <ChevronDown className="w-4 h-4 text-[#b692ff]" />
            </div>
          </div>
        </div>

        {/* Case Studies Stack */}
        <div className="mt-20 flex flex-col gap-16">
          {projects.map((project) => {
            const cardContent = (
              <section
                onMouseMove={handleMouseMove}
                onMouseEnter={() => setHoveredId(project.id)}
                onMouseLeave={() => setHoveredId(null)}
                className="group relative overflow-hidden rounded-[12px] bg-white border border-gray-100 shadow-[0_4px_40px_rgba(0,0,0,0.04)] cursor-none transition-all duration-300 hover:shadow-[0_8px_50px_rgba(182,146,255,0.15)]"
              >
                <div className="absolute bottom-3 right-4 sm:bottom-4 sm:right-6 text-right z-0 pointer-events-none select-none whitespace-nowrap">
                  <p className="text-[8px] sm:text-[9px] text-[#A3A3A3] uppercase tracking-[0.15em] font-medium mb-0.5">
                    RELEASE DATE
                  </p>
                  <p className="text-[8px] sm:text-[9px] text-[#b692ff] uppercase tracking-[0.12em] font-medium font-mono">
                    {project.date}
                  </p>
                </div>

                <div className="relative z-10 grid md:grid-cols-[45%_55%] h-full min-h-[480px] pointer-events-none">

                  {/* Left Column */}
                  <div className="flex flex-col justify-between p-10 md:p-14 h-full bg-white relative z-10">
                    <div>
                      <div className="flex flex-col w-full mb-10">
                        <div className="flex items-center gap-[6px] mb-4">
                          <span className="font-bold text-[#55565A] tracking-tight text-xl leading-none">
                            {project.logoName}
                          </span>
                          <div className="flex flex-col">
                            <span className="text-[6px] text-[#A3A3A3] uppercase leading-[1.1] font-semibold tracking-wider">
                              {project.subTag1}
                            </span>
                            <span className="text-[6px] text-[#A3A3A3] uppercase leading-[1.1] font-semibold tracking-wider">
                              {project.subTag2}
                            </span>
                          </div>
                        </div>
                        <div className="flex items-center w-full">
                          <div className="h-[2px] w-8 bg-[#b692ff]"></div>
                          <div className="h-[1px] flex-1 bg-gray-100 ml-4"></div>
                        </div>
                      </div>

                      <h2 className="text-[2rem] md:text-[2.5rem] font-medium tracking-tight text-[#5A5C61] leading-[1.1]">
                        {project.title}
                      </h2>
                      <p className="mt-4 text-[15px] text-[#A3A3A3]">
                        {project.category}
                      </p>
                    </div>

                    <div className="mt-24 md:mt-0 pt-6">
                      <div
                        className="w-full h-[6px] mb-6 opacity-40"
                        style={{
                          backgroundImage: 'repeating-linear-gradient(to right, #D1D5DB 0, #D1D5DB 2px, transparent 2px, transparent 4px)',
                          backgroundSize: '100% 100%'
                        }}
                      ></div>
                      <p className="text-[13px] text-[#6B7280]">
                        {project.description}
                      </p>
                    </div>
                  </div>

                  {/* Right Column */}
                  <div className="relative h-72 md:h-full w-full bg-transparent overflow-hidden">
                    <div className="absolute inset-0 transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] md:group-hover:rounded-br-[280px] overflow-hidden bg-slate-100">
                      <div
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 ease-out group-hover:scale-[1.04]"
                        style={{
                          backgroundImage: `url('${project.image}')`,
                        }}
                      />
                    </div>
                  </div>

                </div>
              </section>
            );

            if (project.link) {
              return (
                <a
                  key={project.id}
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block cursor-none no-underline focus:outline-none"
                >
                  {cardContent}
                </a>
              );
            }

            return <React.Fragment key={project.id}>{cardContent}</React.Fragment>;
          })}
        </div>

        {/* Decorative Background Pattern */}
        <div
          className="mt-24 w-full h-32 border-t border-gray-100 opacity-60"
          style={{
            backgroundImage: 'repeating-linear-gradient(to right, transparent, transparent 15px, #E5E7EB 15px, #E5E7EB 16px)'
          }}
        ></div>
      </main>

      <InspireSection />
      <NewsletterSection />
      <FooterSection />
    </div>
  );
}