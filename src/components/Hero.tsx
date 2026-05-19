import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight, MapPin } from "lucide-react";
import { ParticleField } from "./ParticleField";
import heroTruck from "@/assets/hero-truck.jpg";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const blur = useTransform(scrollYProgress, [0, 1], ["0px", "8px"]);

  return (
    <section
      id="top"
      ref={ref}
      className="relative h-[100svh] min-h-[720px] w-full overflow-hidden noise"
    >
      {/* Cinematic image plate */}
      <motion.div
        style={{ y, scale, filter: blur }}
        className="absolute inset-0"
      >
        <img
          src={heroTruck}
          alt="Massive semi-truck entering 1st Choice futuristic wash bay"
          className="h-full w-full object-cover"
          fetchPriority="high"
          width={1920}
          height={1280}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/60 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/70 via-transparent to-background/50" />
      </motion.div>

      <ParticleField density={500} />

      {/* Scan line */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[200vh] overflow-hidden">
        <div
          className="absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent"
          style={{ animation: "scan 6s cubic-bezier(0.22,1,0.36,1) infinite" }}
        />
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 grid-bg opacity-30" />

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-end px-6 pb-24 pt-32"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="flex items-center gap-3 text-xs uppercase tracking-[0.35em] text-muted-foreground"
        >
          <span className="h-2 w-2 rounded-full bg-primary shadow-[0_0_12px_var(--electric)] animate-[pulse-glow_2s_infinite]" />
          Whitecourt · Alberta · Established Local
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1], delay: 0.35 }}
          className="mt-6 max-w-5xl font-display text-5xl font-bold leading-[0.95] tracking-tight sm:text-7xl lg:text-[7.5rem]"
        >
          <span className="block chrome-text">Heavy-Duty Cleaning.</span>
          <span className="block neon-text">Premium Results.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.55 }}
          className="mt-8 max-w-2xl text-base text-muted-foreground sm:text-lg"
        >
          Professional truck and car wash services built for Alberta roads,
          commercial fleets, and drivers who care about every detail.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.75 }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <a
            href="#services"
            className="group light-sweep glass-panel inline-flex items-center gap-3 rounded-full px-7 py-4 text-sm uppercase tracking-[0.2em] transition-all duration-700 hover:shadow-[var(--shadow-neon)]"
            style={{ transitionTimingFunction: "cubic-bezier(0.22,1,0.36,1)" }}
          >
            View Services
            <ArrowUpRight
              size={18}
              className="transition-transform duration-700 group-hover:translate-x-1 group-hover:-translate-y-1"
              style={{ transitionTimingFunction: "cubic-bezier(0.22,1,0.36,1)" }}
            />
          </a>
          <a
            href="#location"
            className="group inline-flex items-center gap-3 rounded-full bg-primary px-7 py-4 text-sm uppercase tracking-[0.2em] text-primary-foreground transition-all duration-700 hover:bg-primary/90 hover:shadow-[var(--shadow-neon)]"
            style={{ transitionTimingFunction: "cubic-bezier(0.22,1,0.36,1)" }}
          >
            <MapPin size={16} />
            Get Directions
          </a>
        </motion.div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1], delay: 1 }}
          className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-2xl glass-panel sm:grid-cols-4"
        >
          {[
            { v: "15+", l: "Years Serving Alberta" },
            { v: "2,400+", l: "Trucks Cleaned / Mo" },
            { v: "12 min", l: "Average Wash Cycle" },
            { v: "24/7", l: "Fleet Bookings" },
          ].map((s) => (
            <div key={s.l} className="bg-background/40 px-6 py-5">
              <div className="font-display text-2xl font-bold chrome-text">
                {s.v}
              </div>
              <div className="mt-1 text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                {s.l}
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Bottom fade */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
