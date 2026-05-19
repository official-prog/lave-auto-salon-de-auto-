import { motion } from "framer-motion";
import { CheckCircle2, Activity, Calendar, Receipt, Zap } from "lucide-react";
import { SectionHeader } from "./Services";

const features = [
  { icon: Calendar, t: "Scheduled Wash Programs", d: "Weekly, bi-weekly, monthly." },
  { icon: Receipt, t: "Commercial Accounts", d: "Monthly billing & PO support." },
  { icon: Zap, t: "Priority Bays", d: "Skip the line — fleet first." },
  { icon: Activity, t: "Wash Reporting", d: "Per-unit logs and timestamps." },
];

export function Fleet() {
  return (
    <section id="fleet" className="relative py-32 sm:py-40">
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-10" />
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="03 · Fleet"
          title="Built for fleets that don't stop."
          sub="A logistics-grade wash partner for Alberta's busiest commercial fleets."
        />

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-12">
          {/* Dashboard mockup */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 glass-panel rounded-3xl p-6 sm:p-8 relative overflow-hidden"
          >
            <div className="flex items-center justify-between border-b border-border pb-4">
              <div className="flex items-center gap-2">
                <div className="flex gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-destructive/60" />
                  <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/60" />
                  <span className="h-2.5 w-2.5 rounded-full bg-primary/60" />
                </div>
                <span className="ml-3 text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                  Fleet Dashboard · Q2 Active
                </span>
              </div>
              <span className="text-[10px] uppercase tracking-[0.3em] text-primary">
                Live
              </span>
            </div>

            <div className="mt-6 grid grid-cols-3 gap-4">
              {[
                { l: "Units Active", v: "84" },
                { l: "Washes This Week", v: "212" },
                { l: "Avg Turnaround", v: "11m" },
              ].map((s) => (
                <div key={s.l} className="rounded-xl bg-background/40 p-4">
                  <div className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                    {s.l}
                  </div>
                  <div className="mt-2 font-display text-3xl font-bold chrome-text">
                    {s.v}
                  </div>
                </div>
              ))}
            </div>

            {/* Fleet rows */}
            <div className="mt-6 space-y-2">
              {[
                { id: "UNIT-2049", t: "Day Cab · Kenworth T880", s: "Washed", c: "text-primary" },
                { id: "UNIT-1187", t: "Reefer · 53 ft", s: "In Bay 03", c: "text-yellow-400" },
                { id: "UNIT-3022", t: "Tanker · Insulated", s: "Scheduled 14:00", c: "text-muted-foreground" },
                { id: "UNIT-0918", t: "Flatbed · Step Deck", s: "Washed", c: "text-primary" },
              ].map((r, i) => (
                <motion.div
                  key={r.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.7,
                    delay: i * 0.08,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="grid grid-cols-12 items-center gap-3 rounded-lg border border-border/40 bg-background/30 px-4 py-3 text-sm"
                >
                  <span className="col-span-3 font-mono text-xs text-muted-foreground">
                    {r.id}
                  </span>
                  <span className="col-span-6 text-foreground/90">{r.t}</span>
                  <span className={`col-span-3 text-right text-xs uppercase tracking-[0.2em] ${r.c}`}>
                    {r.s}
                  </span>
                </motion.div>
              ))}
            </div>

            <div className="pointer-events-none absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
          </motion.div>

          {/* Features */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {features.map((f, i) => (
              <motion.div
                key={f.t}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.9,
                  ease: [0.22, 1, 0.36, 1],
                  delay: i * 0.1,
                }}
                className="group glass-panel rounded-2xl p-5 flex items-start gap-4 transition-all duration-700 hover:bg-card/60"
                style={{ transitionTimingFunction: "cubic-bezier(0.22,1,0.36,1)" }}
              >
                <div className="relative h-11 w-11 shrink-0">
                  <div className="absolute inset-0 metallic-surface rounded-lg" />
                  <div className="absolute inset-[1px] rounded-[7px] bg-background flex items-center justify-center">
                    <f.icon size={18} className="text-primary" />
                  </div>
                </div>
                <div>
                  <h4 className="font-display text-base font-semibold">{f.t}</h4>
                  <p className="mt-1 text-sm text-muted-foreground">{f.d}</p>
                </div>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
              className="rounded-2xl bg-primary/5 border border-primary/20 p-5"
            >
              <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-primary">
                <CheckCircle2 size={14} /> Custom Programs Available
              </div>
              <p className="mt-3 text-sm text-foreground/80">
                Tell us your fleet size and routes — we'll build a wash schedule
                that keeps your trucks clean and compliant.
              </p>
              <a
                href="#contact"
                className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
              >
                Talk to fleet team →
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
