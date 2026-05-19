import { motion } from "framer-motion";
import { MapPin, Phone, Clock, Truck, Navigation } from "lucide-react";
import { SectionHeader } from "./Services";

export function Location() {
  return (
    <section id="location" className="relative py-32 sm:py-40">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="07 · Location"
          title="6771 Columbus Road, Mississauga."
          sub="Easy truck access. Unit 12, Mississauga, ON. Open early   open late."
        />

        <div className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-12">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-8 relative overflow-hidden rounded-3xl glass-panel"
          >
            <iframe
              title="Pierson Carwash location"
              src="https://www.google.com/maps?q=6771+Columbus+Road+Unit+12+Mississauga+Ontario&output=embed"
              className="h-[460px] w-full sm:h-[560px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              style={{ filter: "invert(0.92) hue-rotate(180deg) saturate(0.4) brightness(0.95)" }}
            />
            <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-border/60 rounded-3xl" />

            {/* Floating info panel */}
            <div className="absolute left-6 top-6 max-w-xs glass-panel rounded-2xl p-5">
              <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-primary">
                <span className="h-1.5 w-1.5 rounded-full bg-primary animate-[pulse-glow_2s_infinite]" />
                Now Open
              </div>
              <div className="mt-3 font-display text-lg font-semibold">
                Pierson Carwash
              </div>
              <div className="mt-1 text-sm text-muted-foreground">
                6771 Columbus Road, Unit 12
                <br />
                Mississauga, ON L5T2J9
              </div>
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=6771+Columbus+Road+Mississauga+Ontario"
                target="_blank"
                rel="noopener"
                className="mt-4 inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-xs uppercase tracking-[0.2em] text-primary-foreground transition-all duration-700 hover:shadow-[var(--shadow-neon)]"
                style={{ transitionTimingFunction: "cubic-bezier(0.22,1,0.36,1)" }}
              >
                <Navigation size={14} /> Get Directions
              </a>
            </div>
          </motion.div>

          <div className="lg:col-span-4 flex flex-col gap-4">
            {[
              {
                icon: MapPin,
                t: "Address",
                d: "6771 Columbus Road, Unit 12\nMississauga, ON L5T2J9",
              },
              {
                icon: Phone,
                t: "Contact",
                d: "905-672-1635\njasjitchohan@gmail.com",
              },
              {
                icon: Clock,
                t: "Hours",
                d: "Mon–Fri · 7:00 – 21:00\nSat · 8:00 – 18:00\nSun · 9:00 – 17:00",
              },
              {
                icon: Truck,
                t: "Truck Access",
                d: "Full pull-through bays. 53 ft trailers welcome.",
              },
            ].map((c, i) => (
              <motion.div
                key={c.t}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.8,
                  ease: [0.22, 1, 0.36, 1],
                  delay: i * 0.08,
                }}
                className="glass-panel rounded-2xl p-5 flex gap-4"
              >
                <div className="relative h-10 w-10 shrink-0">
                  <div className="absolute inset-0 metallic-surface rounded-lg" />
                  <div className="absolute inset-[1px] rounded-[7px] bg-background flex items-center justify-center">
                    <c.icon size={16} className="text-primary" />
                  </div>
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                    {c.t}
                  </div>
                  <div className="mt-1.5 whitespace-pre-line text-sm text-foreground/90">
                    {c.d}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
