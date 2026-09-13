import ScrambleText from "@/components/ScrambleText";

export default function ProcessSection() {
  return (
    <section className="relative w-full h-[85vh] sm:min-h-screen overflow-hidden bg-[#050505] text-white">
      <div className="pointer-events-none absolute inset-x-0 top-6 z-20 flex items-center justify-between px-6 sm:px-8 lg:px-12">
        <div className="h-px w-full bg-white/10" />
        <div className="absolute left-1/2 top-1/2 h-0.5 w-14 -translate-x-1/2 rounded-full bg-[#b692ff] shadow-[0_0_10px_rgba(182,146,255,0.35)]" />
        <div className="text-right text-[10px] uppercase tracking-[0.35em] text-[#b692ff] font-medium">
          Vertexia
        </div>
      </div>

      <div className="absolute left-6 top-24 flex flex-col gap-2 text-left lg:left-12">
        <ScrambleText text="HOW WE WORK" />
        <div className="space-y-2">
          {Array.from({ length: 6 }).map((_, index) => (
            <div key={index} className="h-px w-16 bg-white/10" />
          ))}
        </div>
      </div>

      <div className="relative mx-auto flex min-h-screen max-w-7xl items-center px-4 py-20 sm:px-6 lg:px-12">
        <div className="grid w-full gap-16">
          <div className="relative">
            <div className="max-w-3xl">
              <h1 className="text-[clamp(1.75rem,5vw,8rem)] font-semibold leading-[0.9] tracking-[-0.04em] text-[#9ca1aa]">
                <span className="inline-block">The process behind</span>
                <br />
                our success
              </h1>

              <div className="mt-10 flex items-start gap-4">
                <div className="mt-2 h-px w-16 bg-white/60" />
                <p className="max-w-2xl text-base leading-8 text-white/60 sm:text-lg">
                  We work with clarity, precision. Every step designed to move your project forward with confidence.
                </p>
              </div>

              <div className="mt-16 flex flex-wrap items-center gap-2">
                {Array.from({ length: 28 }).map((_, index) => (
                  <span
                    key={index}
                    className="inline-block h-5 w-[2px] bg-white/10"
                    style={{ opacity: index % 2 === 0 ? 1 : 0.35 }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
