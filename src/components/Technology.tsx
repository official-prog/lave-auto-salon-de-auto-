import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { SectionHeader } from "./Services";
import techScene from "@/assets/tech-scene.jpg";

const specs = [
  { label: "Pressure", value: "4500", unit: "PSI" },
  { label: "Flow Rate", value: "18.5", unit: "GPM" },
  { label: "Water Temp", value: "82", unit: "°C" },
  { label: "Cycle Time", value: "12", unit: "MIN" },
];

export function Technology() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const x = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);
  const y = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"]);

  return (
    <section id="technology" ref={ref} className="relative py-32 sm:py-40">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="02 · Technology"
          title="Power Clean Technology."
          sub="High-pressure precision systems engineered for the dirtiest jobs Alberta can throw at us."
        />

        <div className="mt-20 grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">
          <motion.div
            style={{ x }}
            className="lg:col-span-7 relative overflow-hidden rounded-3xl glass-panel"
          >
            <img
              src={techScene}
              alt="Split-screen power clean technology"
              className="h-[480px] w-full object-cover sm:h-[600px]"
              loading="lazy"
              width={1600}
              height={1024}
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-background/80 via-transparent to-background/40" />

            {/* HUD overlay */}
            <div className="absolute left-6 top-6 flex flex-col gap-2 text-[10px] uppercase tracking-[0.3em] text-primary/80">
              <div className="flex items-center gap-2 glass-panel px-3 py-1.5 rounded">
                <span className="h-1.5 w-1.5 rounded-full bg-primary animate-[pulse-glow_1.6s_infinite]" />
                System · Active
              </div>
              <div className="glass-panel px-3 py-1.5 rounded text-muted-foreground">
                BAY 04 · 4500 PSI
              </div>
            </div>

            {/* Corner brackets */}
            {[
              "top-4 left-4 border-t border-l",
              "top-4 right-4 border-t border-r",
              "bottom-4 left-4 border-b border-l",
              "bottom-4 right-4 border-b border-r",
            ].map((c) => (
              <span
                key={c}
                className={`absolute h-6 w-6 border-primary/60 ${c}`}
              />
            ))}
          </motion.div>

          <motion.div style={{ y }} className="lg:col-span-5 flex flex-col gap-6">
            {[
              {
                t: "Industrial Pressure",
                d: "Triple-stage high-pressure system penetrates baked-on mud, road salt, and oilfield grit without damaging factory paint or chrome.",
              },
              {
                t: "Spot-Free Finish",
                d: "Reverse osmosis filtration delivers a streak-free, mineral-free dry that protects polished aluminum, glass, and clear coat.",
              },
              {
                t: "Climate Engineered",
                d: "Heated water and freeze-resistant bay design keeps cycles running at -30°C — every day Alberta throws at us.",
              },
            ].map((b, i) => (
              <motion.div
                key={b.t}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.9,
                  ease: [0.22, 1, 0.36, 1],
                  delay: i * 0.1,
                }}
                className="glass-panel rounded-2xl p-6"
              >
                <div className="text-[10px] uppercase tracking-[0.3em] text-primary">
                  0{i + 1}
                </div>
                <h3 className="mt-3 font-display text-xl font-semibold">{b.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {b.d}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Spec rail */}
        <div className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-2xl glass-panel sm:grid-cols-4">
          {specs.map((s) => (
            <div key={s.label} className="bg-background/40 p-6">
              <div className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                {s.label}
              </div>
              <div className="mt-2 flex items-baseline gap-1">
                <span className="font-display text-4xl font-bold chrome-text">
                  {s.value}
                </span>
                <span className="text-xs uppercase tracking-[0.2em] text-primary">
                  {s.unit}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
