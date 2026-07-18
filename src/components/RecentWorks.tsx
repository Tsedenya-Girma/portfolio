import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useState, useRef } from "react";

const projects = [
  {
    category: "E-Commerce",
    title: "Toco Specialty Coffee Hub",
    description:
      "A visual, content-rich e-commerce and brand platform for Toco Specialty Coffee in Ethiopia. Showcases regional bean origins, flavor profiles, and processing methods — built to drive online retail, wholesale supply tracking, and future roastery cafe bookings.",
    tags: ["Next.js", "Tailwind CSS", "MongoDB / Supabase", "Subscriptions"],
    images: [
      "/images/toco1.jpg",
      "/images/toco2.jpg",
      "/images/toco3.jpg",
    ],
    link: "https://tocospecality.vercel.app/",
  },
  {
    category: "Premium Retail E-Commerce",
    title: "African Mosaic Digital Storefront",
    description:
      "A high-performance e-commerce platform for African Mosaic, a monumental brand in Ethiopia's fashion sector. Features secure checkout, fluid interactive catalogs of cultural and contemporary apparel, and dynamic stock-level synchronization.",
    tags: ["React (Vite)", "Shopify Integration", "Payment Gateways"],
    images: [
      "/images/african1.jpg",
      "/images/african2.jpg",
      "/images/african3.jpg",
    ],
    link: "https://africanmosaique.com/",
  },
  {
    category: "NGO & Non-Profit",
    title: "FidelBirhan Charitable Organization Portal",
    description:
      "A secure, multi-functional admin portal for FidelBirhan Charitable Organization, a volunteer-backed NGO in Ethiopia. Tracks one-time donations, automates monthly subscription reminders via background cron jobs, and manages a full volunteer roster with Role-Based Access Control.",
    tags: ["Admin Dashboards", "Cron Jobs", "MongoDB", "RBAC"],
    images: [
      "/images/fidel-1.jpg",
      "/images/fidel-2.jpg",
      "/images/fidel-3.jpg",
    ],
    link: "https://fidel-birhan-charitable-organaization-3mhyre9ll.vercel.app/",
  },
  {
    category: "Full-Stack Web App",
    title: "Hibret Baltina ERP",
    description:
      "A robust, localized retail inventory management application built for Hibret Baltina, a bulk Ethiopian spice and traditional food supplier. Dynamically calculates profits and transitions inventory tracking seamlessly from fixed pack sizes to variable bulk/weight measurements, with a localized Amharic interface.",
    tags: ["Next.js", "MongoDB", "State Management", "Amharic Localization"],
    images: [
      "/images/hibret-1.jpg",
      "/images/hibret-2.jpg",
      "/images/hibret-3.jpg",
    ],
  },
  {
    category: "Interactive Web App",
    title: "Maggs Coffee Self-Service App",
    description:
      "A fast, responsive self-service web app and digital menu for Maggs Coffee in Addis Ababa. Lets patrons browse specialized drink configurations, custom-build orders with real-time price updates, and submit kitchen-ticket requests instantly.",
    tags: ["React (Vite)", "Next.js", "Real-time State", "F&B Tech"],
    images: [
      "/images/maggs1.jpg",
      "/images/maggs2.jpg",
      "/images/maggs3.jpg",
    ],
    link: "https://stalwart-kleicha-5389d8.netlify.app/",
  },
  {
    category: "Education · Multi-Tenant Platform",
    title: "School Portals Network (Sumeya, Kegna, Ardi, Atlas)",
    description:
      "A shared multi-tenant institutional platform powering individually branded portals for Sumeya School, Kegna Academy, Ardi Youth Academy, and Atlas School (founded 1994 E.C.). Each school gets its own branding, academic calendar, and localized curriculum announcements — all from a single scalable codebase.",
    tags: ["Next.js / React", "Multi-Tenant", "Tailwind CSS", "Educational Tech"],
    images: [
      "/images/school1.jpg",
      "/images/school2.jpg",
      "/images/school3.jpg",
    ],
    link: "https://ardiyouthacademy.com/",
  },
];


export default function RecentWorks() {
  const [activeIdx, setActiveIdx] = useState(0);
  const active = projects[activeIdx];

  const isWheeling = useRef(false);

  const cycleForward = () => setActiveIdx((i) => (i + 1) % projects.length);
  const cycleBackward = () => setActiveIdx((i) => (i - 1 + projects.length) % projects.length);

  const handleWheel = (e: React.WheelEvent) => {
    if (isWheeling.current) return;
    isWheeling.current = true;
    setTimeout(() => {
      isWheeling.current = false;
    }, 500); // Throttling

    if (e.deltaY > 0) {
      cycleForward();
    } else if (e.deltaY < 0) {
      cycleBackward();
    }
  };

  return (
    <section id="work" className="relative bg-bg-primary py-16 sm:py-32 overflow-hidden">
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-10">
        <div className="mb-8 sm:mb-16 flex flex-wrap items-end justify-between gap-6">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-accent" />
              <span className="text-sm font-semibold uppercase tracking-widest text-text-secondary">
                Recent Works
              </span>
            </div>
            <h2 className="font-display text-4xl font-black leading-[0.9] tracking-tighter text-text-primary sm:text-5xl lg:text-6xl">
              SELECTED
              <br />
              PROJECTS<span className="text-accent">.</span>
            </h2>
          </div>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document
                .querySelector("#contact")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="group inline-flex items-center gap-3 rounded-full border border-accent/25 bg-bg-secondary/60 px-5 py-3 text-sm font-semibold text-text-primary transition-colors hover:border-accent hover:text-accent"
          >
            Contact Me
            <ArrowUpRight
              size={16}
              className="transition-transform group-hover:rotate-45"
            />
          </a>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:gap-12 lg:grid-cols-12 lg:gap-16 items-center">
          {/* Stack - Horizontal Cover Flow */}
          <div className="lg:col-span-7">
            <div
              className="relative h-[200px] w-full sm:h-[360px] md:h-[420px]"
              style={{ perspective: "1200px" }}
            >
              {projects.map((p, i) => {
                // Normalize diff to be between -N/2 and N/2 for a circular cover flow
                let diff = i - activeIdx;
                if (diff > projects.length / 2) diff -= projects.length;
                if (diff < -projects.length / 2) diff += projects.length;
                
                const isFront = diff === 0;
                
                return (
                  <motion.button
                    key={p.title}
                    onClick={() =>
                      isFront ? cycleForward() : setActiveIdx(i)
                    }
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={0.2}
                    onDragEnd={(_, info) => {
                      if (info.offset.x < -50) cycleForward();
                      if (info.offset.x > 50) cycleBackward();
                    }}
                    animate={{
                      x: diff * (typeof window !== "undefined" && window.innerWidth < 640 ? 60 : 110), // Adjusted spacing for wider cards
                      z: Math.abs(diff) * -140, // Push backwards into the screen
                      rotateY: diff * -25,      // Cover Flow tilt
                      opacity: Math.abs(diff) > 2 ? 0 : 1,
                      filter: `blur(${Math.abs(diff) * 3}px) brightness(${1 - Math.abs(diff) * 0.4})`,
                    }}
                    transition={{
                      duration: 0.6,
                      ease: [0.32, 0.72, 0, 1],
                    }}
                    style={{
                      zIndex: projects.length - Math.abs(diff),
                      transformStyle: "preserve-3d",
                      transformOrigin: "center center",
                    }}
                    className="absolute inset-x-0 mx-auto top-0 h-full w-[95%] sm:w-[92%] overflow-hidden rounded-2xl sm:rounded-3xl border border-accent/20 bg-bg-secondary text-left shadow-[0_20px_60px_-20px_rgba(0,0,0,0.8)] focus:outline-none group cursor-grab active:cursor-grabbing"
                  >
                    {/* 3-photo collage */}
                    <div className="absolute inset-0 grid grid-cols-2 gap-[2px] sm:gap-[3px] bg-black/80">
                      {/* Hero image — left, full height */}
                      <div className="relative overflow-hidden">
                        <img
                          src={p.images[0]}
                          alt={`${p.title} — preview 1`}
                          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                          draggable={false}
                        />
                      </div>
                      {/* Two stacked images — right column */}
                      <div className="flex flex-col gap-[2px] sm:gap-[3px]">
                        <div className="relative flex-1 overflow-hidden">
                          <img
                            src={p.images[1]}
                            alt={`${p.title} — preview 2`}
                            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                            draggable={false}
                          />
                        </div>
                        <div className="relative flex-1 overflow-hidden">
                          <img
                            src={p.images[2]}
                            alt={`${p.title} — preview 3`}
                            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                            draggable={false}
                          />
                        </div>
                      </div>
                    </div>
                    {/* Subtle inner shadow/gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                    
                    {isFront && (
                      <div className="absolute inset-x-0 bottom-4 flex justify-center pointer-events-none">
                        <span className="rounded-full border border-accent/30 bg-black/60 px-3 py-1.5 text-[10px] sm:text-xs font-semibold uppercase tracking-widest text-text-primary backdrop-blur-md">
                          Swipe / Click
                        </span>
                      </div>
                    )}
                  </motion.button>
                );
              })}
            </div>

            {/* Dots navigation */}
            <div className="mt-6 sm:mt-10 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
              {projects.map((p, i) => (
                <button
                  key={p.title}
                  onClick={() => setActiveIdx(i)}
                  aria-label={`Show ${p.title}`}
                  className={`h-1.5 sm:h-2 rounded-full transition-all duration-300 ${
                    i === activeIdx
                      ? "w-8 sm:w-10 bg-accent shadow-[0_0_12px_var(--color-accent)]"
                      : "w-1.5 sm:w-2 bg-white/15 hover:bg-white/30"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Details Section - Fixed Height to prevent jumping */}
          <div className="relative h-[280px] sm:h-[380px] lg:h-[420px] w-full lg:col-span-5 flex items-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.title}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
                className="absolute inset-0 flex flex-col justify-center"
              >
                <div className="inline-flex items-center gap-2">
                  <span className="h-[1px] w-6 bg-accent" />
                  <span className="text-xs font-semibold uppercase tracking-widest text-accent">
                    {active.category}
                  </span>
                </div>
                <h3 className="mt-3 sm:mt-5 font-display text-2xl font-black leading-[1.05] tracking-tighter text-text-primary sm:text-4xl lg:text-5xl">
                  {active.title}
                </h3>
                <p className="mt-3 sm:mt-5 text-xs sm:text-base leading-relaxed text-text-secondary line-clamp-4 sm:line-clamp-none">
                  {active.description}
                </p>
                <div className="mt-4 sm:mt-8 flex flex-wrap gap-1.5 sm:gap-2">
                  {active.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-accent/20 bg-bg-secondary/60 px-3 py-1.5 text-[11px] sm:text-xs font-medium text-text-primary/90 backdrop-blur-sm"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                {active.link && (
                  <div className="mt-auto pt-4 sm:pt-8">
                    <a
                      href={active.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-2 sm:gap-3 rounded-full border border-accent/25 bg-bg-secondary/80 px-5 sm:px-6 py-2.5 sm:py-3.5 text-xs sm:text-sm font-semibold text-text-primary transition-all hover:border-accent hover:bg-accent/10 hover:text-accent hover:shadow-[0_0_20px_rgba(182,138,92,0.15)]"
                    >
                      Explore Project
                      <ArrowUpRight
                        size={18}
                        className="transition-transform group-hover:rotate-45"
                      />
                    </a>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
