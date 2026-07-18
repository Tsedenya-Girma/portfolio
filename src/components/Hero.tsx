import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-fit items-center overflow-hidden bg-bg-primary pb-10 pt-20 sm:pb-16 sm:pt-28 lg:min-h-screen lg:pb-0 lg:pt-24"
    >
      {/* faint grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
      {/* giant background type */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 flex items-center justify-center"
      >
        <span
          className="font-display font-black leading-none tracking-tighter text-text-primary opacity-[0.02]"
          style={{ fontSize: "20vw" }}
        >
          CODE
        </span>
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-6 sm:gap-10 px-6 py-4 sm:py-8 lg:grid-cols-2 lg:gap-16 lg:px-10 lg:py-20">
        {/* left */}
        <motion.div
          initial={{ opacity: 0, y: -60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-80px" }}
          transition={{ type: "spring", stiffness: 70, damping: 10, mass: 1.2 }}
          className="flex flex-col"
        >
          <div className="mb-8 flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-accent shadow-[0_0_12px_var(--color-accent)]" />
            <span className="text-sm font-semibold uppercase tracking-widest text-text-secondary">
              Software Engineer
            </span>
          </div>
          <h1 className="font-display text-5xl font-black leading-[0.9] tracking-tighter text-text-primary sm:text-6xl md:text-7xl lg:text-[6.5rem]">
            FULL-STACK
            <br />
            <span
              className="text-transparent"
              style={{ WebkitTextStroke: "2px var(--color-accent)" } as React.CSSProperties}
            >
              ENGINEER
            </span>
            <span className="text-accent">.</span>
          </h1>
          <p className="mt-4 sm:mt-8 max-w-md text-sm sm:text-base leading-relaxed text-text-secondary">
            I'm Tsedenya Girma — I build full-stack products end to end, from
            database schema to polished UI, turning real business logic into
            software that actually ships.
          </p>
          <div className="mt-6 sm:mt-10 flex flex-wrap items-center gap-4">
            <motion.a
              href="#work"
              onClick={(e) => {
                e.preventDefault();
                document
                  .querySelector("#work")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="group inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-accent to-[#8b6b48] px-6 py-3 text-sm font-semibold text-black shadow-[0_10px_40px_-10px_rgba(182,138,92,0.35)]"
            >
              View My Work
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-black/20 text-text-primary transition-transform group-hover:rotate-45">
                <ArrowUpRight size={14} />
              </span>
            </motion.a>
            <motion.a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document
                  .querySelector("#contact")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-3 rounded-full border border-accent/25 bg-bg-secondary/60 px-6 py-3 text-sm font-semibold text-text-primary"
            >
              <span className="h-2 w-2 rounded-full bg-accent shadow-[0_0_10px_var(--color-accent)]" />
              Contact Me
            </motion.a>
          </div>
        </motion.div>

        {/* right — ID card */}
        <motion.div
          initial={{ y: -150, rotateZ: 15, opacity: 0 }}
          whileInView={{ y: 0, rotateZ: 0, opacity: 1 }}
          viewport={{ once: false, margin: "-80px" }}
          transition={{ type: "spring", stiffness: 70, damping: 8, mass: 1.5, delay: 0.15 }}
          className="relative flex order-first lg:order-none h-[280px] sm:h-[480px] lg:h-[560px] items-start justify-center"
        >
          {/* lanyard strip */}
          <div className="absolute left-1/2 top-[-70px] h-[110px] w-10 -translate-x-1/2 bg-gradient-to-b from-accent/60 via-accent/30 to-accent/70 sm:top-[-100px] sm:h-[150px] sm:w-12 lg:top-[-120px] lg:h-[180px] lg:w-14" />
          <div className="absolute left-1/2 top-[35px] h-5 w-14 -translate-x-1/2 rounded-md border border-accent/25 bg-bg-secondary sm:top-[45px] sm:h-6 sm:w-16" />

          <motion.div
            drag
            dragElastic={0.2}
            dragConstraints={{ top: -30, bottom: 30, left: -60, right: 60 }}
            dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
            animate={{ y: [0, -15, 0], rotateZ: [-1, 1, -1] }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative z-10 mt-10 sm:mt-16 lg:mt-20 w-48 sm:w-80 cursor-grab overflow-hidden rounded-2xl sm:rounded-3xl border border-accent/25 bg-gradient-to-b from-bg-secondary to-bg-primary p-2 sm:p-3 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.7)] active:cursor-grabbing"
          >
            <div className="rounded-2xl border border-accent/25 bg-bg-primary">
              <div className="relative aspect-[3/4] overflow-hidden rounded-2xl">
                <img
                  src="/images/tsedenya-portrait.jpg"
                  alt="Tsedenya Girma portrait"
                  className="h-full w-full object-cover grayscale-[20%]"
                  draggable={false}
                />
                <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black via-black/70 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-3 sm:p-5">
                  <div className="text-[10px] sm:text-xs font-semibold uppercase tracking-widest text-accent">
                    ID · 2026
                  </div>
                  <div className="mt-0.5 sm:mt-1 font-display text-lg sm:text-2xl font-bold text-text-primary">
                    Tsedenya Girma
                  </div>
                  <div className="text-[10px] sm:text-xs text-text-secondary">
                    Software Engineer
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
