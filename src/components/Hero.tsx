"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Navbar } from "./Navbar";
import { profile, proofSignals } from "@/content/portfolio";
import { fadeInUp, staggerContainer, transitions } from "@/lib/animations";

export function Hero() {
  return (
    <section
      id="top"
      className="relative bg-[#050505] text-white overflow-hidden lg:min-h-screen lg:max-h-[960px] lg:flex lg:flex-col lg:justify-between"
      aria-labelledby="hero-heading"
    >
      <div className="bg-[#f6f0df] text-[#080807] lg:rounded-b-[3.5rem] lg:flex-1 lg:flex lg:flex-col lg:justify-between">
        <div className="section-container pt-3 sm:pt-4">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="lg:flex lg:flex-col lg:h-full lg:justify-between"
          >
            <motion.div variants={fadeInUp}>
              <Navbar />
            </motion.div>

            <div className="relative grid gap-6 pb-6 pt-4 sm:pb-8 sm:pt-6 lg:grid-cols-[360px_minmax(0,1fr)] xl:grid-cols-[390px_minmax(0,1fr)] lg:items-center lg:gap-8 xl:gap-12 lg:pb-6 lg:pt-2">
              {/* Left Column: Portrait Cutout Image with Liquid Glass Badges */}
              <motion.div
                variants={fadeInUp}
                className="relative mx-auto w-full max-w-[320px] sm:max-w-[360px] lg:mx-0 lg:max-w-[390px] lg:order-1 order-2"
              >
                <div className="relative flex h-[380px] sm:h-[430px] lg:h-[390px] xl:h-[420px] w-full items-end justify-center">
                  {/* Liquid Glass Top Pill Badge */}
                  <div className="absolute left-2 top-2 z-20 flex items-center gap-2 rounded-full border border-white/80 bg-gradient-to-r from-white/85 via-white/60 to-white/75 px-3 py-1.5 sm:px-3.5 sm:py-1.5 text-neutral-950 backdrop-blur-2xl backdrop-saturate-150 shadow-[0_8px_20px_rgba(0,0,0,0.08),inset_0_1.5px_1px_rgba(255,255,255,1)] sm:left-3 sm:top-3">
                    <span className="relative flex h-2 w-2 items-center justify-center">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-yellow-400 opacity-75" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-yellow-500" />
                    </span>
                    <span className="text-[0.64rem] sm:text-[0.68rem] font-black uppercase tracking-[0.14em] text-neutral-900">
                      Software Engineer
                    </span>
                  </div>

                  {/* Cutout Image with natural transparent background */}
                  <div className="relative h-full w-full">
                    <Image
                      src="/My%20image.webp"
                      alt="Mafabi Hussein, software engineer"
                      fill
                      priority
                      sizes="(min-width: 1024px) 390px, (min-width: 640px) 360px, 90vw"
                      className="object-contain object-bottom drop-shadow-[0_14px_28px_rgba(0,0,0,0.12)]"
                    />
                  </div>

                  {/* Liquid Glass Bottom Credibility Panel */}
                  <div className="absolute bottom-2 left-2 right-2 sm:left-0 sm:right-0 z-20 mx-auto flex max-w-[310px] sm:max-w-[340px] items-center justify-between gap-2.5 sm:gap-3 rounded-[1.2rem] border border-white/80 bg-gradient-to-br from-white/90 via-white/65 to-white/45 px-3 py-2 sm:px-4 sm:py-2.5 text-neutral-950 backdrop-blur-2xl backdrop-saturate-200 shadow-[0_12px_30px_rgba(0,0,0,0.1),inset_0_1.5px_1px_rgba(255,255,255,1),inset_0_-1px_1px_rgba(0,0,0,0.04)]">
                    <div className="border-r border-black/10 pr-2.5 sm:pr-3">
                      <span className="text-lg sm:text-2xl font-black leading-none text-neutral-950">3</span>
                      <p className="mt-0.5 text-[0.52rem] sm:text-[0.56rem] font-bold uppercase tracking-[0.12em] text-neutral-600 whitespace-nowrap">
                        Flagship Projects
                      </p>
                    </div>
                    <div className="flex flex-col justify-center min-w-0">
                      <div className="flex items-center gap-1.5">
                        <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald-500 shadow-[0_0_6px_rgba(16,185,129,0.6)]" />
                        <span className="text-[0.62rem] sm:text-[0.66rem] font-black uppercase tracking-[0.12em] text-neutral-950 whitespace-nowrap">
                          4+ Years Experience
                        </span>
                      </div>
                      <p className="mt-0.5 text-[0.55rem] sm:text-[0.6rem] font-medium text-neutral-600 whitespace-nowrap">
                        Backend &amp; Architecture Focus
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Right Column: Information & CTAs */}
              <motion.div variants={fadeInUp} className="relative z-10 min-w-0 lg:py-1 lg:order-2 order-1">
                <h1
                  id="hero-heading"
                  aria-label="Building software from architecture to production."
                  className="display-type max-w-3xl text-balance text-3xl sm:text-5xl lg:text-[3.25rem] xl:text-[3.75rem] leading-[0.96] sm:leading-[0.92] tracking-tight"
                >
                  <span className="block">Building software</span>
                  <span className="block">
                    from{" "}
                    <span className="editorial-type font-normal text-yellow-700">
                      architecture
                    </span>
                  </span>
                  <span className="block">to production.</span>
                </h1>

                <p className="mt-3.5 sm:mt-4 max-w-xl text-pretty text-xs sm:text-sm sm:leading-6 font-semibold text-neutral-700">
                  I build full-stack applications with a backend-oriented focus:
                  APIs, relational data, application boundaries, deployment, and
                  the decisions behind reliable software.
                </p>

                <div className="mt-3.5 sm:mt-4 flex flex-wrap gap-1.5 sm:gap-2 text-[0.65rem] sm:text-[0.7rem] font-black uppercase tracking-[0.12em] text-neutral-700">
                  {profile.stackLine.split(" · ").map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-black/12 bg-white px-2.5 py-1 sm:px-3 sm:py-1.5 shadow-xs"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <div className="mt-5 sm:mt-6 flex flex-col gap-2.5 sm:flex-row sm:items-center">
                  <motion.div whileHover={{ y: -2, transition: transitions.easeOut }} whileTap={{ scale: 0.98 }}>
                    <Link
                      href="/work"
                      className="brand-focus-ring inline-flex min-h-10 sm:min-h-11 w-full sm:w-auto items-center justify-center rounded-full bg-[#080807] px-5 sm:px-6 text-xs sm:text-sm font-black text-white transition-colors hover:bg-[#1a1512] shadow-sm"
                    >
                      Explore My Work
                    </Link>
                  </motion.div>
                  <motion.div whileHover={{ y: -2, transition: transitions.easeOut }} whileTap={{ scale: 0.98 }}>
                    <Link
                      href="/engineering"
                      className="brand-focus-ring inline-flex min-h-10 sm:min-h-11 w-full sm:w-auto items-center justify-center rounded-full bg-yellow-300 px-5 sm:px-6 text-xs sm:text-sm font-black text-black transition-colors hover:bg-yellow-200 shadow-sm"
                    >
                      View Engineering
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="section-container pb-3 sm:pb-4 lg:pb-4">
        <div className="-mt-3.5 sm:-mt-4 grid gap-2 rounded-[1.1rem] bg-[#1b1b1b] p-2 shadow-[0_20px_50px_rgba(0,0,0,0.35)] sm:grid-cols-2 lg:grid-cols-4">
          {proofSignals.map((signal) => (
            <div key={signal.label} className="min-w-0 rounded-[0.85rem] bg-[#101010] px-3.5 py-2.5 sm:px-4 sm:py-3">
              <p className="text-[0.62rem] sm:text-[0.65rem] font-black uppercase tracking-[0.14em] text-yellow-200 truncate">
                {signal.label}
              </p>
              <p className="mt-1 text-xs sm:text-sm font-black leading-5 text-white">{signal.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
