import { ArrowRight } from "lucide-react";

export default function HowWeWork() {
  const steps = [
    {
      title: "DISCOVER AND DEFINE",
      desc: "We start with a focused workshop to clarify goals, audiences, and metrics — delivering a sharp brief and shared timeline of record.",
      num: "/01",
    },
    {
      title: "CONCEPT AND CREATIVE DIRECTION",
      desc: "We explore options, pressure-test top ideas, and align quickly with visual check-ins — so momentum starts early.",
      num: "/02",
    },
    {
      title: "DESIGN AND PROTOTYPE",
      desc: "We turn concepts into tangible experiences. Interactive prototypes speed decisions, with feedback cycles built in and documented.",
      num: "/03",
    },
    {
      title: "BUILD AND LAUNCH",
      desc: "Our design and dev ship together — clear sprints, no surprises, and a launch plan for QA, accessibility, and performance.",
      num: "/04",
    },
  ];

  return (
    <section className="bg-white py-20 text-gray-900 text-left">
      <div className="max-w-[1200px] mx-auto px-6 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-start">
        {/* Left Column: Heading, Description & Compact Images */}
        <div className="flex flex-col items-start text-left">
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#797D82] leading-none">
            How We Work
          </h2>
          <p className="mt-6 text-gray-500 max-w-lg text-lg sm:text-xl leading-relaxed">
            Every project moves through clear stages where design, development, and
            communication stay aligned.
          </p>

          {/* Compact Left Images */}
          <div className="mt-8 space-y-5 w-full max-w-md">
            <div className="overflow-hidden rounded-2xl shadow-sm">
              <img
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1400&q=80"
                alt="Office workspace"
                className="w-full h-36 sm:h-40 object-cover hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>

            <div className="overflow-hidden rounded-2xl shadow-sm">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1400&q=80"
                alt="Team collaboration"
                className="w-full h-36 sm:h-40 object-cover hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>
          </div>
        </div>

        {/* Right Column: Larger Text Steps List */}
        <div className="flex flex-col justify-start">
          <div className="divide-y divide-gray-200">
            {steps.map((s) => (
              <div key={s.title} className="py-8 first:pt-0 last:pb-0">
                <div className="flex items-center justify-between gap-6">
                  <h4 className="text-base sm:text-lg font-bold tracking-[0.16em] text-[#b692ff]">
                    {s.title}
                  </h4>
                  <span className="text-gray-300 font-semibold text-base sm:text-lg tracking-widest select-none">
                    {s.num}
                  </span>
                </div>
                <p className="mt-4 text-gray-600 text-base sm:text-lg leading-relaxed max-w-xl">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12">
            <a
              href="#case-studies"
              className="inline-flex items-center gap-4 group text-gray-900 font-semibold text-base sm:text-lg w-fit"
            >
              <span className="w-12 h-12 rounded-2xl bg-[#b692ff] flex items-center justify-center transition-transform duration-300 group-hover:scale-110 shadow-sm">
                <ArrowRight className="w-5 h-5 text-white" />
              </span>
              <span className="group-hover:text-[#b692ff] transition-colors">
                Explore Case Studies
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}