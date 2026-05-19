import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Star, Quote } from "lucide-react";
import { SectionHeader } from "./Services";

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    const dur = 1800;
    let raf: number;
    const tick = (t: number) => {
      const p = Math.min((t - start) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 4);
      setN(Math.round(to * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to]);
  return (
    <span ref={ref}>
      {n.toLocaleString()}
      {suffix}
    </span>
  );
}

const reviews = [
  {
    quote:
      "Best truck wash between Edmonton and Grande Prairie. They get our reefers turned around fast and they actually do the wheels right.",
    name: "Derek M.",
    role: "Fleet Manager · Edson Logistics",
  },
  {
    quote:
      "We run 40+ units through here every week. Consistent quality, easy invoicing, and the team treats our drivers right.",
    name: "Sandra K.",
    role: "Operations · Northstar Hauling",
  },
  {
    quote:
      "Pulled in covered in oilfield mud from a week up north. Came out looking factory-fresh. These guys know heavy duty.",
    name: "Mike R.",
    role: "Owner-Operator",
  },
];

export function Trust() {
  return (
    <section className="relative py-32 sm:py-40">
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-10" />
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="06 · Trust"
          title="Earned by Alberta's hardest miles."
          sub="Numbers that matter to the people who pay for clean equipment."
        />

        <div className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-3xl glass-panel md:grid-cols-4">
          {[
            { v: 15, s: "+", l: "Years Local" },
            { v: 28000, s: "+", l: "Trucks Washed" },
            { v: 92, s: "%", l: "Repeat Customers" },
            { v: 12, s: " min", l: "Avg Wash Time" },
          ].map((s) => (
            <div key={s.l} className="bg-background/40 p-8 text-center">
              <div className="font-display text-4xl font-bold neon-text sm:text-5xl">
                <Counter to={s.v} suffix={s.s} />
              </div>
              <div className="mt-2 text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                {s.l}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-3">
          {reviews.map((r, i) => (
            <motion.figure
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.9,
                ease: [0.22, 1, 0.36, 1],
                delay: i * 0.1,
              }}
              className="glass-panel rounded-2xl p-6 relative"
            >
              <Quote
                size={28}
                className="absolute right-5 top-5 text-primary/30"
              />
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, k) => (
                  <Star
                    key={k}
                    size={14}
                    fill="currentColor"
                    className="text-primary"
                  />
                ))}
              </div>
              <blockquote className="mt-4 text-sm leading-relaxed text-foreground/90">
                "{r.quote}"
              </blockquote>
              <figcaption className="mt-6 border-t border-border pt-4">
                <div className="font-display text-sm font-semibold">{r.name}</div>
                <div className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                  {r.role}
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
