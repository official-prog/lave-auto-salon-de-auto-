import { motion } from "framer-motion";
import { useState } from "react";
import { z } from "zod";
import { Send } from "lucide-react";
import { SectionHeader } from "./Services";

const schema = z.object({
  name: z.string().trim().min(1, "Required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  company: z.string().trim().max(120).optional(),
  vehicle: z.string().trim().min(1, "Required").max(120),
  message: z.string().trim().min(1, "Required").max(1000),
});

const fields = [
  { name: "name", label: "Your Name", type: "text", col: "sm:col-span-1" },
  { name: "email", label: "Email Address", type: "email", col: "sm:col-span-1" },
  { name: "company", label: "Company (optional)", type: "text", col: "sm:col-span-1" },
  { name: "vehicle", label: "Vehicle Type", type: "text", col: "sm:col-span-1" },
] as const;

function Field({
  name,
  label,
  type,
  value,
  onChange,
  error,
}: {
  name: string;
  label: string;
  type: string;
  value: string;
  onChange: (v: string) => void;
  error?: string;
}) {
  const [focused, setFocused] = useState(false);
  const float = focused || value.length > 0;
  return (
    <label className="relative block">
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        className="peer h-14 w-full rounded-xl border border-border bg-background/40 px-4 pt-4 text-sm text-foreground outline-none transition-all duration-500 focus:border-primary focus:shadow-[var(--shadow-neon)]"
        style={{ transitionTimingFunction: "cubic-bezier(0.22,1,0.36,1)" }}
        aria-label={label}
      />
      <span
        className={`pointer-events-none absolute left-4 transition-all duration-500 ${
          float
            ? "top-1.5 text-[10px] uppercase tracking-[0.25em] text-primary"
            : "top-1/2 -translate-y-1/2 text-sm text-muted-foreground"
        }`}
        style={{ transitionTimingFunction: "cubic-bezier(0.22,1,0.36,1)" }}
      >
        {label}
      </span>
      {error && (
        <span className="mt-1 block text-[11px] text-destructive">{error}</span>
      )}
    </label>
  );
}

export function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    vehicle: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = schema.safeParse(form);
    if (!parsed.success) {
      const errs: Record<string, string> = {};
      parsed.error.issues.forEach((i) => {
        errs[i.path[0] as string] = i.message;
      });
      setErrors(errs);
      return;
    }
    setErrors({});
    setStatus("sent");
    setForm({ name: "", email: "", company: "", vehicle: "", message: "" });
    setTimeout(() => setStatus("idle"), 4000);
  };

  return (
    <section id="contact" className="relative py-32 sm:py-40">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-[140px]" />

      <div className="mx-auto max-w-5xl px-6">
        <SectionHeader
          eyebrow="08 · Contact"
          title="Tell us what needs washing."
          sub="Fleet quote, walk-in booking, or just a question — we'll respond fast."
        />

        <motion.form
          onSubmit={submit}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="mt-16 glass-panel rounded-3xl p-6 sm:p-10"
          noValidate
        >
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {fields.map((f) => (
              <div key={f.name} className={f.col}>
                <Field
                  name={f.name}
                  label={f.label}
                  type={f.type}
                  value={form[f.name as keyof typeof form]}
                  onChange={(v) => setForm((s) => ({ ...s, [f.name]: v }))}
                  error={errors[f.name]}
                />
              </div>
            ))}
            <div className="sm:col-span-2">
              <label className="relative block">
                <textarea
                  value={form.message}
                  onChange={(e) =>
                    setForm((s) => ({ ...s, message: e.target.value }))
                  }
                  rows={5}
                  placeholder=" "
                  className="peer w-full rounded-xl border border-border bg-background/40 px-4 pt-6 pb-3 text-sm text-foreground outline-none transition-all duration-500 focus:border-primary focus:shadow-[var(--shadow-neon)]"
                  style={{ transitionTimingFunction: "cubic-bezier(0.22,1,0.36,1)" }}
                  aria-label="Message"
                />
                <span className="pointer-events-none absolute left-4 top-2 text-[10px] uppercase tracking-[0.25em] text-primary">
                  Message
                </span>
                {errors.message && (
                  <span className="mt-1 block text-[11px] text-destructive">
                    {errors.message}
                  </span>
                )}
              </label>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
            <p className="text-xs text-muted-foreground">
              We typically respond within 1 business hour.
            </p>
            <button
              type="submit"
              className="group inline-flex items-center gap-3 rounded-full bg-primary px-7 py-3.5 text-sm uppercase tracking-[0.2em] text-primary-foreground transition-all duration-700 hover:shadow-[var(--shadow-neon)] disabled:opacity-50"
              style={{ transitionTimingFunction: "cubic-bezier(0.22,1,0.36,1)" }}
            >
              {status === "sent" ? "Message Sent ✓" : "Send Message"}
              <Send
                size={16}
                className="transition-transform duration-700 group-hover:translate-x-1"
                style={{ transitionTimingFunction: "cubic-bezier(0.22,1,0.36,1)" }}
              />
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}
