import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  type MotionValue,
} from "framer-motion";

type LineRange = {
  enter: number;
  big: number;
  shrink: number;
  done: number;
};

function Line({
  progress,
  range,
  bigSize,
  smallSize,
  color,
  children,
}: {
  progress: MotionValue<number>;
  range: LineRange;
  bigSize: number;
  smallSize: number;
  color: string;
  children: React.ReactNode;
}) {
  const { enter, big, shrink, done } = range;

  const opacity = useTransform(
    progress,
    [Math.max(0, enter - 0.01), enter + 0.02],
    [0, 1]
  );
  const y = useTransform(progress, [enter, big], [220, 0]);

  const postEnd = Math.min(done + 0.08, 1);
  const sizeNum = useTransform(
    progress,
    [big, shrink, done, postEnd],
    [bigSize, bigSize, smallSize, smallSize * 1.05]
  );

  const smoothOpacity = useSpring(opacity, { stiffness: 80, damping: 22 });
  const smoothY = useSpring(y, { stiffness: 80, damping: 22 });
  const smoothSize = useSpring(sizeNum, { stiffness: 80, damping: 22 });

  const fontSize = useTransform(smoothSize, (v) => `${v}px`);

  return (
    <motion.h2
      style={{ opacity: smoothOpacity, y: smoothY, fontSize, color, willChange: "transform, opacity" }}
      className="font-bold tracking-tight leading-[1.02] text-center"
    >
      {children}
    </motion.h2>
  );
}

export default function ScrollReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
  });

  return (
    <section ref={ref} className="hidden md:block relative h-[500vh] bg-white">
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center px-6 overflow-hidden">
        <div className="w-full flex flex-col items-center gap-2 md:gap-3">
          <Line
            progress={smoothProgress}
            range={{ enter: 0, big: 0.08, shrink: 0.22, done: 0.3 }}
            bigSize={160}
            smallSize={120}
            color="#0a0a0a"
          >
            we listen
          </Line>
          <Line
            progress={smoothProgress}
            range={{ enter: 0.22, big: 0.32, shrink: 0.44, done: 0.52 }}
            bigSize={160}
            smallSize={120}
            color="#0a0a0a"
          >
            we imagine
          </Line>
          <Line
            progress={smoothProgress}
            range={{ enter: 0.44, big: 0.54, shrink: 0.66, done: 0.74 }}
            bigSize={160}
            smallSize={120}
            color="#b692ff"
          >
            we create
          </Line>
          <Line
            progress={smoothProgress}
            range={{ enter: 0.66, big: 0.82, shrink: 1, done: 1 }}
            bigSize={170}
            smallSize={170}
            color="#0a0a0a"
          >
            beautiful things
          </Line>
        </div>
      </div>
    </section>
  );
}
