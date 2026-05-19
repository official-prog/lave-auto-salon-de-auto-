import { motion } from "framer-motion";
import {
  Truck,
  Car,
  Container,
  Wrench,
  Droplets,
  Gauge,
  Layers,
  HardHat,
} from "lucide-react";

const services = [
  {
    icon: Truck,
    title: "Truck Wash",
    desc: "Full exterior cleaning for semi-trucks, day cabs, and sleepers   built for Ontario highways.",
    spec: "Cycle · 12 min",
  },
  {
    icon: Layers,
    title: "Fleet Washing",
    desc: "Scheduled wash programs for commercial fleets with volume pricing and dedicated bays.",
    spec: "Volume · 5–500 units",
  },
  {
    icon: Container,
    title: "Trailer Cleaning",
    desc: "Interior and exterior trailer wash for reefers, dry vans, and flatbeds.",
    spec: "Sanitized · Food-grade",
  },
  {
    icon: Car,
    title: "Car Wash",
    desc: "Touchless and soft-cloth wash bays with spot-free rinse for daily drivers.",
    spec: "Cycle · 6 min",
  },
  {
    icon: HardHat,
    title: "Heavy Equipment",
    desc: "Loaders, dozers, excavators   degreased and degunked for site-ready return.",
    spec: "Pressure · 4000 PSI",
  },
  {
    icon: Wrench,
    title: "Commercial Vehicles",
    desc: "Service vans, work trucks, utility rigs   kept clean and professional.",
    spec: "Custom · Recurring",
  },
  {
    icon: Droplets,
    title: "Undercarriage Wash",
    desc: "High-pressure undercarriage flush removes corrosive salt, mud, and oilfield grit.",
    spec: "Rust · Prevention",
  },
  {
    icon: Gauge,
    title: "High-Pressure Detail",
    desc: "Industrial-grade pressure cleaning for stuck-on bitumen, mud, and oilfield deposits.",
    spec: "Up to · 4500 PSI",
  },
];

export function Services() {
  return (
    <section id="services" className="relative py-32 sm:py-40">
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-primary/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="01 · Services"
          title="Built for every vehicle on the road."
          sub="From single-cab pickups to 53-foot reefers, we wash it cleaner   faster."
        />

        <div className="mt-16 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.9,
                ease: [0.22, 1, 0.36, 1],
                delay: (i % 4) * 0.08,
              }}
              className="group relative overflow-hidden rounded-2xl glass-panel p-6 light-sweep transition-all duration-700 hover:-translate-y-1 hover:shadow-[var(--shadow-neon)]"
              style={{ transitionTimingFunction: "cubic-bezier(0.22,1,0.36,1)" }}
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
              <div className="relative flex items-start justify-between">
                <div className="relative h-12 w-12">
                  <div className="absolute inset-0 metallic-surface rounded-lg" />
                  <div className="absolute inset-[1px] rounded-[7px] bg-background/80 flex items-center justify-center">
                    <s.icon
                      size={20}
                      className="text-primary transition-transform duration-700 group-hover:scale-110"
                      style={{
                        transitionTimingFunction: "cubic-bezier(0.22,1,0.36,1)",
                      }}
                    />
                  </div>
                </div>
                <span className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                  {s.spec}
                </span>
              </div>
              <h3 className="mt-8 font-display text-xl font-semibold">
                {s.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {s.desc}
              </p>
              <div className="mt-6 flex items-center gap-2 text-[10px] uppercase tracking-[0.25em] text-primary opacity-0 transition-opacity duration-700 group-hover:opacity-100">
                Learn more →
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  sub,
}: {
  eyebrow: string;
  title: string;
  sub?: string;
}) {
  return (
    <div className="max-w-3xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="flex items-center gap-3 text-[10px] uppercase tracking-[0.35em] text-muted-foreground"
      >
        <span className="h-px w-10 bg-primary" />
        {eyebrow}
      </motion.div>
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
        className="mt-6 font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl"
      >
        <span className="chrome-text">{title}</span>
      </motion.h2>
      {sub && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="mt-5 max-w-2xl text-base text-muted-foreground sm:text-lg"
        >
          {sub}
        </motion.p>
      )}
    </div>
  );
}
