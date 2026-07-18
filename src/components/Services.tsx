import { AnimatePresence, motion } from "framer-motion";
import { Minus, Plus } from "lucide-react";
import { useState } from "react";

const stages = [
  {
    n: "01",
    title: "BRIEFING",
    body: "We start with a deep-dive session — goals, audience, constraints, and the story you want to tell. Every project begins with alignment.",
  },
  {
    n: "02",
    title: "ANALYTICS",
    body: "Research, audits and competitive teardown. We turn assumptions into evidence before a single pixel is placed.",
  },
  {
    n: "03",
    title: "PROTOTYPING",
    body: "Low-fi flows and interactive prototypes. We test the shape of the product with real hands before committing to a visual direction.",
  },
  {
    n: "04",
    title: "DESIGN",
    body: "Where the craft lives — typography, motion, systems and detail. Every screen is built to be shipped, not just presented.",
  },
  {
    n: "05",
    title: "ADAPTIVE",
    body: "Responsive design pushed to every breakpoint. From ultra-wide monitors to the smallest phones, the experience holds.",
  },
  {
    n: "06",
    title: "THE FINAL",
    body: "Handoff, launch, and post-launch iteration. We stay on to make sure the product lands — and grows — the way it should.",
  },
];

export default function Services() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="relative bg-bg-primary py-32">
      <div className="mx-auto w-full max-w-4xl px-6">
        <motion.div
          initial={{ opacity: 0, y: -80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ type: "spring", stiffness: 70, damping: 10, mass: 1.2 }}
          className="mb-16 text-center"
        >
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-2 w-2 rounded-full bg-accent" />
            <span className="text-sm font-semibold uppercase tracking-widest text-text-secondary">
              Process
            </span>
          </div>
          <h2 className="font-display text-4xl font-black leading-[0.9] tracking-tighter text-text-primary sm:text-5xl lg:text-6xl">
            STAGES OF WEBSITE
            <br />
            <span
              className="text-transparent"
              style={{ WebkitTextStroke: "2px var(--color-accent)" } as React.CSSProperties}
            >
              DEVELOPMENT
            </span>
            <span className="text-accent">.</span>
          </h2>
        </motion.div>

        <ul className="divide-y divide-[#b68a5c]/20 border-y border-accent/25">
          {stages.map((s, i) => {
            const isOpen = open === i;
            return (
              <motion.li
                key={s.n}
                initial={{ opacity: 0, y: -40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, margin: "-80px" }}
                transition={{ type: "spring", stiffness: 80, damping: 12, delay: i * 0.08 }}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  onMouseEnter={() => setOpen(i)}
                  className="group flex w-full items-center gap-6 py-8 text-left"
                >
                  <span className="w-12 text-sm font-semibold text-text-secondary/70">
                    {s.n}
                  </span>
                  <span className="flex-1 font-display text-2xl font-black tracking-tighter text-text-primary transition-colors group-hover:text-accent sm:text-3xl md:text-4xl">
                    {s.title}
                  </span>
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-accent/25 text-text-primary transition-colors group-hover:border-accent group-hover:text-accent">
                    {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="pb-8 pl-4 pr-4 text-base leading-relaxed text-text-secondary sm:pl-[4.5rem] sm:pr-16">
                        {s.body}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
