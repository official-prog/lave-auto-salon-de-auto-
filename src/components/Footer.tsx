import { Facebook, Instagram, Linkedin } from "lucide-react";

const cols = [
  {
    h: "Services",
    l: ["Carwash", "Fleet Washing", "Trailer Cleaning", "Car Wash", "Undercarriage", "Heavy Equipment"],
  },
  { h: "Company", l: ["About", "Process", "Technology", "Gallery", "Contact"] },
  { h: "Visit", l: ["6771 Pierson Rd, Unit 12", "Mississauga, ON L5T2J9", "905-672-1635"] },
];

export function Footer() {
  return (
    <footer className="relative border-t border-border bg-background pt-20 pb-10">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="flex items-center gap-3">
              <div className="relative h-10 w-10">
                <div className="absolute inset-0 rounded-md metallic-surface" />
                <div className="absolute inset-[2px] rounded-[6px] bg-background flex items-center justify-center">
                  <span className="font-display text-sm font-bold neon-text">CT</span>
                </div>
              </div>
              <div>
                <div className="font-display text-base font-bold tracking-widest uppercase">
                  Pierson
                </div>
                <div className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                  Carwash
                </div>
              </div>
            </div>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-muted-foreground">
              Heavy-duty truck wash and premium car care in Mississauga,
              Ontario. Built for fleets, drivers, and equipment that work
              Ontario's hardest miles.
            </p>
            <div className="mt-6 flex gap-3">
              {[
              { Icon: Facebook, href: "https://www.facebook.com/profile.php?id=61575704648068&locale=nn_NO", label: "Facebook" },
              { Icon: Instagram, href: "#", label: "Instagram" },
              { Icon: Linkedin, href: "#", label: "LinkedIn" },
            ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative h-10 w-10 rounded-full glass-panel flex items-center justify-center transition-all duration-700 hover:shadow-[var(--shadow-neon)]"
                  style={{ transitionTimingFunction: "cubic-bezier(0.22,1,0.36,1)" }}
                >
                  <Icon size={15} className="text-muted-foreground group-hover:text-primary transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {cols.map((c) => (
            <div key={c.h} className="md:col-span-2">
              <div className="text-[10px] uppercase tracking-[0.3em] text-primary">
                {c.h}
              </div>
              <ul className="mt-5 space-y-3">
                {c.l.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="md:col-span-1" />
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-border pt-8 text-xs text-muted-foreground sm:flex-row sm:items-center">
          <div>
            © {new Date().getFullYear()} Pierson Carwash · Mississauga, ON
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-foreground">Privacy</a>
            <a href="#" className="hover:text-foreground">Terms</a>
            <a href="#contact" className="hover:text-foreground">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
