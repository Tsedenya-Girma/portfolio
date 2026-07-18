import { motion } from "framer-motion";

const skills = [
  "React (Vite)",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "Node.js",
  "Express",
  "MongoDB / Mongoose",
  "PostgreSQL (Supabase)",
  "MySQL",
  "Prisma",
  "Tailwind CSS",
  "Framer Motion",
  "TanStack Query",
  "TanStack Router",
  "Redux / Zustand",
  "Git & GitHub",
  "x86/8086 Assembly",
  "Docker",
  "Figma",
  "Vercel",
  "Netlify",
  "Stripe",
  "Clerk / Auth0",
  "AWS / S3",
  "GraphQL",
  "WebSockets",
];

export default function About() {
  return (
    <section id="about" className="relative bg-bg-primary py-32">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-16 px-6 lg:grid-cols-2 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1] }}
        >
          <div className="mb-6 flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-accent" />
            <span className="text-sm font-semibold uppercase tracking-widest text-text-secondary">
              About Me
            </span>
          </div>
          <h2 className="font-display text-4xl font-black leading-[0.9] tracking-tighter text-text-primary sm:text-5xl lg:text-6xl">
            BUILDING WITH
            <br />
            PURPOSE<span className="text-accent">.</span>
          </h2>
          <div className="mt-8 space-y-5 text-base leading-relaxed text-text-secondary">
            <p>
              I'm a full-stack software engineer who moves fluently between
              traditional decoupled stacks (React/Vite + Node/Express) and
              modern unified meta-frameworks like Next.js — shipping products
              from database schema to finished interface.
            </p>
            <p>
              I care about translating real-world business logic — inventory
              systems, automated workflows, payment flows — into clean,
              well-modeled software, whether the data lives in a relational
              schema or a document store.
            </p>
          </div>
          <div className="mt-12 flex items-stretch gap-10">
            <div>
              <div className="font-display text-5xl font-black text-text-primary">
                15<span className="text-accent">+</span>
              </div>
              <div className="mt-2 text-xs font-semibold uppercase tracking-widest text-text-secondary/70">
                Completed Projects
              </div>
            </div>
            <div className="w-px bg-accent/10" />
            <div>
              <div className="font-display text-5xl font-black text-text-primary">
                100<span className="text-accent">%</span>
              </div>
              <div className="mt-2 text-xs font-semibold uppercase tracking-widest text-text-secondary/70">
                Commitment
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1] }}
          className="rounded-3xl border border-accent/25 bg-bg-secondary/70 p-8 backdrop-blur-md"
        >
          <div className="mb-8 text-sm font-semibold uppercase tracking-widest text-text-secondary">
Tech Stack & Tools
          </div>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill, i) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.5 }}
                className="cursor-default rounded-full border border-accent/25 bg-bg-secondary/60 px-4 py-2 text-sm text-text-primary/85 transition-all hover:border-accent hover:text-accent hover:shadow-[0_0_15px_rgba(182,138,92,0.25)]"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
