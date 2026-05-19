import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Services", href: "#services" },
  { label: "Technology", href: "#technology" },
  { label: "Fleet", href: "#fleet" },
  { label: "Process", href: "#process" },
  { label: "Gallery", href: "#gallery" },
  { label: "Location", href: "#location" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-700 ${
        scrolled
          ? "py-3 backdrop-blur-xl bg-background/60 border-b border-border"
          : "py-5"
      }`}
      style={{ transitionTimingFunction: "cubic-bezier(0.22,1,0.36,1)" }}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
        <a href="#top" className="group flex items-center gap-3">
          <div className="relative h-9 w-9">
            <div className="absolute inset-0 rounded-md metallic-surface" />
            <div className="absolute inset-[2px] rounded-[6px] bg-background flex items-center justify-center">
              <span className="font-display text-sm font-bold neon-text">CT</span>
            </div>
          </div>
          <div className="flex flex-col leading-none">
            <span className="font-display text-sm font-bold tracking-widest uppercase">
              Pierson
            </span>
            <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
              Carwash
            </span>
          </div>
        </a>

        <nav className="hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="relative px-4 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <span className="relative z-10">{l.label}</span>
              <span className="absolute inset-x-4 bottom-1 h-px scale-x-0 bg-primary transition-transform duration-500 group-hover:scale-x-100 origin-left" />
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden lg:inline-flex items-center gap-2 rounded-full glass-panel px-5 py-2.5 text-xs uppercase tracking-[0.2em] text-foreground transition-all duration-500 hover:shadow-[var(--shadow-neon)]"
          style={{ transitionTimingFunction: "cubic-bezier(0.22,1,0.36,1)" }}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-primary animate-[pulse-glow_2s_infinite]" />
          Book a Wash
        </a>

        <button
          aria-label="Menu"
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden glass-panel rounded-md p-2"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="lg:hidden overflow-hidden border-t border-border bg-background/95 backdrop-blur-xl"
          >
            <div className="flex flex-col gap-1 px-6 py-4">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="py-3 text-sm text-muted-foreground hover:text-foreground border-b border-border/40"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-3 inline-flex items-center justify-center rounded-full bg-primary px-5 py-3 text-xs uppercase tracking-[0.2em] text-primary-foreground"
              >
                Book a Wash
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
