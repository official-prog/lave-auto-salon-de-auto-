import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SectionHeader } from "./Services";

const steps = [
  {
    n: "01",
    t: "Arrival",
    d: "Pull up to bay. Our team meets you for a quick walk-around and intake.",
  },
  {
    n: "02",
    t: "Pre-Rinse",
    d: "Hot-water pre-soak loosens road salt, mud, and oilfield grime.",
  },
  {
    n: "03",
    t: "High-Pressure Wash",
    d: "4500 PSI lance work — wheels, undercarriage, body, trailer.",
  },
  {
    n: "04",
    t: "Spot-Free Rinse",
    d: "Reverse-osmosis water for a streak-free, mineral-free finish.",
  },
  {
    n: "05",
    t: "Final Dry & Shine",
    d: "Air dry plus hand finish on chrome, glass, and polished aluminum.",
  },
];

export function Process() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray<HTMLElement>(".process-step");
      items.forEach((el, i) => {
        gsap.fromTo(
          el,
          { autoAlpha: 0, y: 80 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              end: "top 50%",
              scrub: 0.6,
            },
          },
        );
      });

      gsap.fromTo(
        ".process-line",
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 60%",
            end: "bottom 60%",
            scrub: true,
          },
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="process" ref={sectionRef} className="relative py-32 sm:py-40">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="04 · Process"
          title="Five steps. Spotless finish."
          sub="Every wash follows the same cinematic precision sequence."
        />

        <div className="relative mt-20 grid grid-cols-1 gap-12 lg:grid-cols-12">
          {/* Vertical line */}
          <div className="hidden lg:block lg:col-span-1 relative">
            <div className="sticky top-1/2 mx-auto h-[400px] w-px overflow-hidden">
              <div className="process-line absolute inset-0 origin-top bg-gradient-to-b from-primary via-primary/50 to-transparent" />
              <div className="absolute inset-0 bg-border/40" />
            </div>
          </div>

          <div className="lg:col-span-11 flex flex-col gap-6">
            {steps.map((s, i) => (
              <div
                key={s.n}
                className={`process-step group relative glass-panel rounded-3xl p-8 sm:p-10 overflow-hidden ${
                  i % 2 === 1 ? "lg:ml-24" : "lg:mr-24"
                }`}
              >
                <div className="grid grid-cols-12 items-center gap-6">
                  <div className="col-span-12 sm:col-span-2">
                    <div className="font-display text-6xl font-bold chrome-text">
                      {s.n}
                    </div>
                  </div>
                  <div className="col-span-12 sm:col-span-7">
                    <h3 className="font-display text-3xl font-bold sm:text-4xl">
                      {s.t}
                    </h3>
                    <p className="mt-3 text-base text-muted-foreground">
                      {s.d}
                    </p>
                  </div>
                  <div className="col-span-12 sm:col-span-3">
                    <div className="metallic-surface rounded-xl p-px">
                      <div className="rounded-[11px] bg-background/80 px-4 py-3">
                        <div className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                          Stage
                        </div>
                        <div className="mt-1 font-mono text-sm text-primary">
                          {String(i + 1).padStart(2, "0")} / 05
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100"
                  style={{ transitionTimingFunction: "cubic-bezier(0.22,1,0.36,1)" }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
