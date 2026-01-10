"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Navbar } from "./Navbar";

const techLogos = [
  { name: "html", label: "HTML5", src: "/logos/html.svg" },
  { name: "css", label: "CSS3", src: "/logos/css.svg" },
  { name: "javascript", label: "JavaScript", src: "/logos/js.svg" },
  { name: "typescript", label: "TypeScript / TSX", src: "/logos/tsx.svg" },
  { name: "cpp", label: "C++", src: "/logos/cpp.svg" },
  { name: "python", label: "Python", src: "/logos/python.svg" },
  { name: "sql", label: "SQL", src: "/logos/sql.svg" },
  { name: "postgresql", label: "PostgreSQL", src: "/logos/postgres.svg" },
];

export function Hero() {
  return (
    <section
      id="top"
      className="relative pt-10 pb-16 lg:pt-16 lg:pb-24"
      aria-labelledby="hero-heading"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[520px] bg-[radial-gradient(circle_at_center,_rgba(34,197,94,0.6),_transparent_60%)]" />
      <div className="section-container">
        <Navbar />
        <div className="mt-10 flex flex-col gap-10 lg:flex-row lg:items-center">
          {/* Left headline column */}
          <div className="flex-1 space-y-6">
            <div className="h-px w-16 bg-emerald-500/70" />
            <p className="text-sm uppercase tracking-[0.3em] text-emerald-300/80">
              Software Engineer & Freelancer
            </p>
            <p className="max-w-xs text-sm text-emerald-100/80">
              I design, build, and maintain production-grade digital products
              for individuals, startups, and growing businesses.
            </p>
          </div>

          {/* Center image + name, embedded into background with soft edge fade */}
          <div className="flex flex-1 flex-col items-center gap-6">
            <motion.div
              className="relative flex items-center justify-center"
              initial={{ opacity: 0.7 }}
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="pointer-events-none absolute h-72 w-72 rounded-full bg-[radial-gradient(circle_at_center,_rgba(34,197,94,0.85),_transparent_70%)]" />
              <Image
                src="/my-pfp.webp"
                alt="Portrait of Mafabi Hussein working on a laptop"
                width={260}
                height={320}
                priority
                className="relative z-10 h-[320px] w-[240px] rounded-[2.5rem] object-cover"
                style={{
                  WebkitMaskImage:
                    "radial-gradient(circle at 50% 35%, black 0%, black 65%, transparent 100%)",
                  maskImage:
                    "radial-gradient(circle at 50% 35%, black 0%, black 65%, transparent 100%)",
                }}
              />
            </motion.div>
            <div className="relative -mt-6 text-center leading-none">
              <p className="text-[11px] uppercase tracking-[0.5em] text-emerald-300/80">
                HUSSEIN
              </p>
              <h1
                id="hero-heading"
                className="bg-gradient-to-r from-slate-100 via-emerald-100 to-slate-50 bg-clip-text text-[40px] font-semibold lowercase tracking-tight text-transparent sm:text-[52px] md:text-[64px] lg:text-[72px]"
              >
                mafabi
              </h1>
            </div>
          </div>

          {/* Right intro copy */}
          <div className="flex-1 max-w-sm text-sm leading-relaxed text-slate-200/80">
            <p>
              Hi, I&apos;m Mafabi Hussein — a software engineer and freelancer
              dedicated to building fast, scalable, and reliable digital
              solutions.
            </p>
            <p className="mt-4">
              I help individuals, businesses, and organizations turn ideas into
              high-performing websites, applications, automations, and software
              systems that actually deliver results.
            </p>
          </div>
        </div>

        {/* Tech logos row under hero: muted by default, full brand color on hover */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-6">
          {techLogos.map((tool) => (
            <div
              key={tool.name}
              className="group inline-flex items-center justify-center"
              title={tool.label}
            >
              <Image
                src={tool.src}
                alt={`${tool.label} logo`}
                width={40}
                height={40}
                className="h-8 w-8 opacity-60 grayscale transition-all duration-300 ease-out group-hover:opacity-100 group-hover:grayscale-0"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
