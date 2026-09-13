import { cn } from "@/lib/utils";

type AnimatedGridPatternProps = {
  className?: string;
  numSquares?: number;
  maxOpacity?: number;
  duration?: number;
  repeatDelay?: number;
};

export function AnimatedGridPattern({
  className,
  numSquares = 30,
  maxOpacity = 0.1,
  duration = 3,
  repeatDelay = 1,
}: AnimatedGridPatternProps) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 opacity-80 animate-grid-fade",
        className
      )}
      style={{
        backgroundImage: `linear-gradient(rgba(255,255,255,${maxOpacity}) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,${maxOpacity}) 1px, transparent 1px)`,
        backgroundSize: `calc(100% / ${numSquares}) calc(100% / ${numSquares})`,
        animationDuration: `${duration + repeatDelay}s`,
      }}
    />
  );
}
