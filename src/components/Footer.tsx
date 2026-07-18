import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const menu = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Contact", href: "#contact" },
  { label: "Journal", href: "#" },
];

const socials = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/tsedenya-girma/" },
  { label: "GitHub", href: "https://github.com/Tsedenya-Girma" },
];

export default function Footer() {
  return (
    <footer
      id="contact"
      className="relative overflow-hidden border-t border-accent/25 bg-bg-primary px-6 pb-10 pt-32 lg:px-10"
    >
      {/* massive backdrop word */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-[-4vw] flex justify-center"
      >
        <span
          className="font-display font-black leading-none tracking-tighter text-text-primary opacity-[0.05]"
          style={{ fontSize: "25vw" }}
        >
          CONTACT
        </span>
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: -80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ type: "spring", stiffness: 70, damping: 10, mass: 1.2 }}
          >
            <div className="mb-6 flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-accent" />
              <span className="text-sm font-semibold uppercase tracking-widest text-text-secondary">
                Let's Talk
              </span>
            </div>
            <h2 className="font-display text-4xl font-black leading-[0.9] tracking-tighter text-text-primary sm:text-5xl lg:text-6xl">
              HOW CAN I
              <br />
              HELP<span className="text-accent">?</span>
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-text-secondary">
              Have a product to build, a system to design, or a problem worth
              solving? I'm currently open to new opportunities and projects.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="mailto:girmatsedenya@gmail.com"
                className="group inline-flex items-center gap-3 rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition-transform hover:scale-105"
              >
                girmatsedenya@gmail.com
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-black/10 transition-transform group-hover:rotate-45">
                  <ArrowUpRight size={14} />
                </span>
              </a>
              <a
                href="tel:+251985679901"
                className="group inline-flex items-center gap-3 rounded-full border border-accent/25 bg-bg-secondary/80 px-6 py-3 text-sm font-semibold text-text-primary transition-all hover:border-accent hover:bg-accent/10 hover:text-accent"
              >
                +251 98 567 9901
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-accent/10 transition-transform group-hover:rotate-45">
                  <ArrowUpRight size={14} />
                </span>
              </a>
              <a
                href="https://wa.me/251985679901"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 rounded-full border border-accent/25 bg-bg-secondary/80 px-6 py-3 text-sm font-semibold text-text-primary transition-all hover:border-accent hover:bg-accent/10 hover:text-accent"
              >
                WhatsApp
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-accent/10 transition-transform group-hover:rotate-45">
                  <ArrowUpRight size={14} />
                </span>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ type: "spring", stiffness: 70, damping: 10, mass: 1.2, delay: 0.15 }}
            className="grid grid-cols-2 gap-8 lg:justify-self-end"
          >
            <div>
              <div className="mb-6 text-xs font-semibold uppercase tracking-widest text-text-secondary/70">
                Menu
              </div>
              <ul className="space-y-3">
                {menu.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="text-base text-text-primary/85 transition-colors hover:text-accent"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div className="mb-6 text-xs font-semibold uppercase tracking-widest text-text-secondary/70">
                Socials
              </div>
              <ul className="space-y-3">
                {socials.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="text-base text-text-primary/85 transition-colors hover:text-accent"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        <div className="mt-24 flex flex-col items-start justify-between gap-4 border-t border-accent/25 pt-8 text-xs text-text-secondary/70 sm:flex-row sm:items-center">
          <p>© 2026 Tsedenya Girma. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-text-primary/85">
              Privacy
            </a>
            <a href="#" className="hover:text-text-primary/85">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
