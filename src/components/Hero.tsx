"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Navbar } from "./Navbar";
import { profile, proofSignals } from "@/content/portfolio";
import { fadeInUp, staggerContainer, transitions } from "@/lib/animations";

export function Hero() {
  return (
    <section id="top" className="relative bg-[#050505] text-white overflow-hidden" aria-labelledby="hero-heading">
      <div className="bg-[#f6f0df] text-[#080807] lg:rounded-b-[4rem]">
        <div className="section-container pt-4">
          <motion.div variants={staggerContainer} initial="hidden" animate="visible">
            <motion.div variants={fadeInUp}>
              <Navbar />
            </motion.div>

            <div className="relative grid gap-8 pb-8 pt-6 sm:pb-10 sm:pt-8 lg:grid-cols-[400px_minmax(0,1fr)] lg:items-center lg:gap-12 lg:pb-10 lg:pt-6">
              {/* Left Column: Portrait Cutout Image with Liquid Glass Badges */}
              <motion.div
                variants={fadeInUp}
                className="relative mx-auto w-full max-w-[340px] sm:max-w-[400px] lg:mx-0 lg:max-w-[400px] lg:order-1 order-2"
              >
                <div className="relative flex h-[430px] sm:h-[490px] lg:h-[530px] w-full items-end justify-center">
                  {/* Liquid Glass Top Pill Badge */}
                  <div className="absolute left-2 top-3 z-20 flex items-center gap-2 rounded-full border border-white/80 bg-gradient-to-r from-white/85 via-white/60 to-white/75 px-3.5 py-1.5 sm:px-4 sm:py-2 text-neutral-950 backdrop-blur-2xl backdrop-saturate-150 shadow-[0_10px_25px_rgba(0,0,0,0.08),inset_0_1.5px_1px_rgba(255,255,255,1)] sm:left-4 sm:top-5">
                    <span className="relative flex h-2 w-2 items-center justify-center">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-yellow-400 opacity-75" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-yellow-500" />
                    </span>
                    <span className="text-[0.66rem] sm:text-[0.7rem] font-black uppercase tracking-[0.14em] text-neutral-900">
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
                      sizes="(min-width: 1024px) 400px, (min-width: 640px) 400px, 90vw"
                      className="object-contain object-bottom drop-shadow-[0_16px_30px_rgba(0,0,0,0.12)]"
                    />
                  </div>

                  {/* Liquid Glass Bottom Credibility Panel */}
                  <div className="absolute bottom-2 left-2 right-2 sm:left-0 sm:right-0 z-20 mx-auto flex max-w-[340px] sm:max-w-[360px] items-center justify-between gap-2.5 sm:gap-3 rounded-[1.3rem] border border-white/80 bg-gradient-to-br from-white/90 via-white/65 to-white/45 px-3.5 py-2.5 sm:px-5 sm:py-3.5 text-neutral-950 backdrop-blur-2xl backdrop-saturate-200 shadow-[0_16px_36px_rgba(0,0,0,0.1),inset_0_1.5px_1px_rgba(255,255,255,1),inset_0_-1px_1px_rgba(0,0,0,0.04)]">
                    <div className="border-r border-black/10 pr-2.5 sm:pr-4">
                      <span className="text-xl sm:text-3xl font-black leading-none text-neutral-950">3</span>
                      <p className="mt-0.5 text-[0.55rem] sm:text-[0.58rem] font-bold uppercase tracking-[0.12em] text-neutral-600 whitespace-nowrap">
                        Flagship Projects
                      </p>
                    </div>
                    <div className="flex flex-col justify-center min-w-0">
                      <div className="flex items-center gap-1.5">
                        <span className="h-2 w-2 flex-shrink-0 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.6)]" />
                        <span className="text-[0.64rem] sm:text-[0.7rem] font-black uppercase tracking-[0.12em] text-neutral-950 whitespace-nowrap">
                          4+ Years Experience
                        </span>
                      </div>
                      <p className="mt-0.5 text-[0.58rem] sm:text-[0.64rem] font-medium text-neutral-600 whitespace-nowrap">
                        Backend &amp; Architecture Focus
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Right Column: Information & CTAs */}
              <motion.div variants={fadeInUp} className="relative z-10 min-w-0 lg:py-6 lg:order-2 order-1">
                <h1
                  id="hero-heading"
                  aria-label="Building software from architecture to production."
                  className="display-type max-w-4xl text-balance text-3xl sm:text-5xl lg:text-[4.25rem] leading-[0.96] sm:leading-[0.92] tracking-tight"
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

                <p className="mt-5 sm:mt-6 max-w-xl text-pretty text-sm sm:text-base font-semibold leading-relaxed sm:leading-7 text-neutral-700">
                  I build full-stack applications with a backend-oriented focus:
                  APIs, relational data, application boundaries, deployment, and
                  the decisions behind reliable software.
                </p>

                <div className="mt-5 sm:mt-6 flex flex-wrap gap-2 text-[0.68rem] sm:text-[0.72rem] font-black uppercase tracking-[0.12em] text-neutral-700">
                  {profile.stackLine.split(" · ").map((item) => (
                    <span key={item} className="rounded-full border border-black/12 bg-white px-3 py-1.5 sm:py-2 shadow-xs">
                      {item}
                    </span>
                  ))}
                </div>

                <div className="mt-7 sm:mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <motion.div whileHover={{ y: -2, transition: transitions.easeOut }} whileTap={{ scale: 0.98 }}>
                    <Link
                      href="/work"
                      className="brand-focus-ring inline-flex min-h-12 w-full sm:w-auto items-center justify-center rounded-full bg-[#080807] px-6 text-sm font-black text-white transition-colors hover:bg-[#1a1512] shadow-sm"
                    >
                      Explore My Work
                    </Link>
                  </motion.div>
                  <motion.div whileHover={{ y: -2, transition: transitions.easeOut }} whileTap={{ scale: 0.98 }}>
                    <Link
                      href="/engineering"
                      className="brand-focus-ring inline-flex min-h-12 w-full sm:w-auto items-center justify-center rounded-full bg-yellow-300 px-6 text-sm font-black text-black transition-colors hover:bg-yellow-200 shadow-sm"
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

      <div className="section-container">
        <div className="-mt-6 grid gap-2 rounded-[1.2rem] bg-[#1b1b1b] p-2 shadow-[0_22px_60px_rgba(0,0,0,0.35)] sm:grid-cols-2 lg:grid-cols-4">
          {proofSignals.map((signal) => (
            <div key={signal.label} className="min-w-0 rounded-[0.95rem] bg-[#101010] px-4 py-3">
              <p className="text-[0.67rem] font-black uppercase tracking-[0.14em] text-yellow-200 truncate">
                {signal.label}
              </p>
              <p className="mt-2 text-xs sm:text-sm font-black leading-5 text-white">{signal.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
