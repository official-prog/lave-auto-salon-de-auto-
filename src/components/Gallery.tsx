import { motion } from "framer-motion";
import { SectionHeader } from "./Services";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";
import g6 from "@/assets/gallery-6.jpg";

const items = [
  { src: g2, alt: "Black sleeper cab at night", span: "lg:col-span-7 lg:row-span-2 aspect-[16/11] lg:aspect-auto" },
  { src: g1, alt: "Pressure wash water spray", span: "lg:col-span-5 aspect-[4/5]" },
  { src: g4, alt: "Water beads on black paint", span: "lg:col-span-5 aspect-[4/5]" },
  { src: g3, alt: "Reefer trailer in wash bay", span: "lg:col-span-7 aspect-[16/9]" },
  { src: g6, alt: "Undercarriage wash jets", span: "lg:col-span-7 aspect-[16/10]" },
  { src: g5, alt: "Heavy equipment at night", span: "lg:col-span-5 aspect-[4/5]" },
];

export function Gallery() {
  return (
    <section id="gallery" className="relative py-32 sm:py-40">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="05 · Gallery"
          title="From mud-covered to spotless."
          sub="Real trucks, real results — captured in our Whitecourt bay."
        />

        <div className="mt-16 grid grid-cols-1 gap-4 lg:grid-cols-12 lg:auto-rows-[280px]">
          {items.map((it, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 1,
                ease: [0.22, 1, 0.36, 1],
                delay: (i % 3) * 0.08,
              }}
              className={`group relative overflow-hidden rounded-2xl glass-panel ${it.span}`}
            >
              <img
                src={it.src}
                alt={it.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-[1400ms] group-hover:scale-110"
                style={{ transitionTimingFunction: "cubic-bezier(0.22,1,0.36,1)" }}
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5">
                <div className="text-[10px] uppercase tracking-[0.3em] text-primary">
                  Bay · {String(i + 1).padStart(2, "0")}
                </div>
                <div className="mt-1 font-display text-sm text-foreground/90">
                  {it.alt}
                </div>
              </div>
              <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-border/40 rounded-2xl" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
