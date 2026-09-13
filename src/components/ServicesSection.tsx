import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

type ServiceItem = {
  eyebrow: string;
  title: string;
  description: string;
  features: string[];
  image: string;
  number: string;
};

const defaultServices: ServiceItem[] = [
  {
    eyebrow: "FOUNDATION",
    title: "Brand Identity",
    description: "The foundation of every project — how your brand looks, feels, and communicates.",
    features: [
      "Custom Website Development",
      "Search Engine Optimization (SEO)",
      "WordPress Website Development",
      "ADS & Marketing Campaigns",
      "Social Media Management",
    ],
    image: "/services/brand%20identity.avif",
    number: "/01",
  },
];

function FeatureItem({
  feature,
}: {
  feature: string;
}) {
  return (
    <li className="flex items-start gap-3 text-base leading-8 text-gray-700 sm:text-lg">
      <span className="mt-1 text-base font-semibold text-[#b692ff] sm:text-lg">+</span>
      <span>{feature}</span>
    </li>
  );
}

export default function ServicesSection({ services = defaultServices }: { services?: ServiceItem[] }) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 32 });

  const headingY = useTransform(progress, [0, 0.35, 0.72], [0, -90, -180]);
  const headingOpacity = useTransform(progress, [0, 0.2, 0.62], [1, 0.9, 0]);
  const headingBlur = useTransform(progress, [0, 0.24, 0.62], [0, 20, 44]);
  const headingBlurStyle = useTransform(headingBlur, (value) => `blur(${value}px)`);

  const contentOpacity = useTransform(progress, [0.2, 0.4, 0.72], [0, 1, 1]);
  const contentY = useTransform(progress, [0.2, 0.4, 0.72], [40, 0, 0]);
  const titleOpacity = useTransform(progress, [0.28, 0.46, 0.7], [0, 1, 1]);
  const titleY = useTransform(progress, [0.28, 0.46, 0.7], [22, 0, 0]);
  const descriptionOpacity = useTransform(progress, [0.36, 0.54, 0.74], [0, 1, 1]);
  const descriptionY = useTransform(progress, [0.36, 0.54, 0.74], [24, 0, 0]);
  const lineWidth = useTransform(progress, [0.42, 0.62], [0, 1]);
  const imageY = useTransform(progress, [0.2, 0.44, 0.74], [70, 0, 0]);
  const imageScale = useTransform(progress, [0.2, 0.44, 0.74], [1.08, 1, 0.98]);

  const smoothHeadingY = useSpring(headingY, { stiffness: 90, damping: 26 });
  const smoothHeadingOpacity = useSpring(headingOpacity, { stiffness: 90, damping: 24 });
  const smoothContentOpacity = useSpring(contentOpacity, { stiffness: 90, damping: 24 });
  const smoothContentY = useSpring(contentY, { stiffness: 90, damping: 24 });
  const smoothTitleOpacity = useSpring(titleOpacity, { stiffness: 90, damping: 24 });
  const smoothTitleY = useSpring(titleY, { stiffness: 90, damping: 24 });
  const smoothDescriptionOpacity = useSpring(descriptionOpacity, { stiffness: 90, damping: 24 });
  const smoothDescriptionY = useSpring(descriptionY, { stiffness: 90, damping: 24 });
  const smoothLineWidth = useSpring(lineWidth, { stiffness: 90, damping: 24 });
  const smoothImageY = useSpring(imageY, { stiffness: 90, damping: 24 });
  const smoothImageScale = useSpring(imageScale, { stiffness: 90, damping: 24 });

  const service = services[0];

  return (
    <section ref={ref} className="relative h-[260vh] bg-white text-gray-900">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden px-6 py-10 sm:px-8 lg:px-12">
        <div className="absolute inset-x-0 top-6 flex items-center justify-between px-6 text-[10px] uppercase tracking-[0.35em] text-gray-500 sm:px-8 lg:px-12">
          <span>{service.eyebrow}</span>
          <div className="mx-4 h-px flex-1 bg-gray-200" />
          <span>{service.number}</span>
        </div>

        <motion.h1
          style={{
            y: smoothHeadingY,
            opacity: smoothHeadingOpacity,
            filter: headingBlurStyle,
          }}
          className="pointer-events-none absolute left-1/2 -translate-x-1/2 top-[1%] w-screen text-left text-[clamp(4rem,27vw,32rem)] font-normal leading-[0.9] tracking-[-0.01em] text-[#141414]"
        >
          <span
            className="block px-6 md:px-8 lg:px-12 lowercase"
            style={{ fontFamily: "Figtree, ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial", fontWeight: 600 }}
          >
            services
          </span>
          <span className="block px-6 md:px-8 lg:px-12 mt-4 text-[14px] md:text-[16px] uppercase tracking-[0.35em] text-gray-500 font-medium">WHAT WE DO BEST, AND WHAT YOUR NEXT PROJECT NEEDS MOST.</span>
        </motion.h1>

        <motion.div
          style={{
            opacity: smoothContentOpacity,
            y: smoothContentY,
          }}
          className="relative z-10 w-full"
        >
          <div className="grid w-full max-w-7xl gap-10 lg:grid-cols-[minmax(320px,1fr)_minmax(320px,440px)] lg:items-start">
            <div className="space-y-8 max-w-full">
              <motion.h2
                style={{ opacity: smoothTitleOpacity, y: smoothTitleY }}
                className="whitespace-nowrap text-6xl font-semibold tracking-[-0.03em] text-gray-900 sm:text-[5.5rem] lg:text-[6.5rem]"
              >
                {service.title}
              </motion.h2>

              <motion.div
                style={{ y: smoothImageY, scale: smoothImageScale, opacity: smoothContentOpacity }}
                className="max-w-[420px] overflow-hidden rounded-[1.75rem] border border-gray-200 bg-white shadow-[0_30px_90px_rgba(0,0,0,0.08)]"
              >
                <div className="aspect-[16/9] overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
              </motion.div>

              <motion.p
                style={{ opacity: smoothDescriptionOpacity, y: smoothDescriptionY }}
                className="max-w-lg text-base leading-7 text-gray-700 sm:text-lg"
              >
                {service.description}
              </motion.p>
            </div>

            <div className="space-y-8 pt-24 lg:pt-28">
              <div className="space-y-4">
                <ul className="space-y-4">
                  {service.features.map((feature) => (
                    <FeatureItem key={feature} feature={feature} />
                  ))}
                </ul>
              </div>

              <motion.div
                style={{ width: smoothLineWidth }}
                className="h-px bg-gray-200"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
