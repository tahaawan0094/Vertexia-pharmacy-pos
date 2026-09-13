import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

export default function ImageRevealSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const baseProgress = useSpring(scrollYProgress, { stiffness: 140, damping: 32 });

  const opacity = useTransform(baseProgress, [0, 0.1], [0, 1]);
  const y = useTransform(baseProgress, [0, 0.1], [140, 0]);
  const zoom = useTransform(baseProgress, [0, 0.5, 1], [1.2, 1, 0.9]);
  const zoomImage3 = useTransform(baseProgress, [0, 0.5, 1], [1.08, 1, 0.95]);

  const smoothOpacity = useSpring(opacity, { stiffness: 90, damping: 24 });
  const smoothY = useSpring(y, { stiffness: 90, damping: 24 });
  const smoothZoom = useSpring(zoom, { stiffness: 100, damping: 24 });
  const smoothZoom3 = useSpring(zoomImage3, { stiffness: 100, damping: 24 });

  const images = [
    { src: "/section1.jpg", alt: "Section one", title: "We Build Brands", subtitle: "Creative Digital Agency" },
    { src: "/section2.jpg", alt: "Section two", title: "We Design Experiences", subtitle: "Motion & Interaction" },
    { src: "/section3.jpg", alt: "Section three", title: "We Help You Grow", subtitle: "Strategy & Growth" },
  ];

  return (
    <section ref={ref} className="relative m-0 p-0 w-full overflow-hidden bg-[#0a0a0a]">
      {images.map((image, index) => (
        <motion.div
          key={image.alt}
          style={{
            opacity: useTransform(baseProgress, [0, 0.08 + index * 0.03], [0, 1]),
            y: useTransform(baseProgress, [0, 0.08 + index * 0.03], [120, 0]),
            scale: index === 2 ? smoothZoom3 : smoothZoom,
            transformOrigin: "center center",
            willChange: "transform, opacity",
            zIndex: images.length - index,
          }}
          className="relative m-0 p-0 w-full aspect-square sm:aspect-auto sm:h-screen"
        >
          <img
            src={image.src}
            alt={image.alt}
            className={`block h-full w-full object-cover ${index === 1 ? "opacity-90" : ""}`}
          />

          {/* dark overlay to improve text contrast */}
          <div className="absolute inset-0 bg-black/50 pointer-events-none z-10" />

          <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20 px-4 sm:px-6">
            <div className="text-center">
              <h2 className="text-[42px] sm:text-[54px] md:text-[72px] leading-[0.95] font-semibold text-white drop-shadow-md">{image.title}</h2>
              <p className="mt-5 text-[10px] sm:text-[12px] uppercase tracking-[0.35em] text-white/85 font-medium">{image.subtitle}</p>
            </div>
          </div>

          {/* Per-image left list and right year overlays */}
          <div className="hidden md:flex absolute left-4 sm:left-8 bottom-12 flex-col gap-3 text-white text-[10px] sm:text-[12px] tracking-[0.15em] uppercase font-semibold opacity-95 z-30 pointer-events-none">
            <span>Framer</span>
            <span>Next .js</span>
            <span>GSAP</span>
            <span>WebGL</span>
            <span>META ADS INTEGRATION</span>
          </div>

          <div className="hidden md:block absolute right-4 sm:right-8 bottom-12 text-white text-[10px] sm:text-[12px] tracking-[0.2em] uppercase font-semibold opacity-95 z-30 pointer-events-none">YR/2025</div>
        </motion.div>
      ))}

      <div className="w-full relative flex items-center justify-center py-6 px-4 sm:px-8">
        <div className="w-full max-w-6xl flex flex-col sm:flex-row items-center gap-4">
          <div className="text-white font-semibold tracking-[0.12em]">2025-2026</div>
          <div className="flex-1 h-px bg-white/10" />
          <button
            aria-label="Next"
            className="ml-0 sm:ml-4 inline-flex items-center justify-center w-10 h-10 bg-[#b692ff] text-white rounded-full sm:rounded-md shadow-sm"
          >
            <span className="text-lg leading-none">→</span>
          </button>
        </div>
      </div>
    </section>
  );
}

