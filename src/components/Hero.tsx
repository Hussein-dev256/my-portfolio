"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Navbar } from "./Navbar";
import { profile, proofSignals } from "@/content/portfolio";
import { fadeInUp, staggerContainer, transitions } from "@/lib/animations";

export function Hero() {
  return (
    <section id="top" className="relative bg-[#050505] text-white" aria-labelledby="hero-heading">
      <div className="bg-[#f6f0df] text-[#080807] lg:rounded-b-[4rem]">
        <div className="section-container pt-4">
          <motion.div variants={staggerContainer} initial="hidden" animate="visible">
            <motion.div variants={fadeInUp}>
              <Navbar />
            </motion.div>

            <div className="relative grid gap-8 pb-8 pt-6 sm:pb-10 sm:pt-8 lg:grid-cols-[minmax(0,1fr)_410px] lg:items-center lg:gap-12 lg:pb-10 lg:pt-6">
              {/* Left Information Layer */}
              <motion.div variants={fadeInUp} className="relative z-10 lg:py-6">
                <h1
                  id="hero-heading"
                  aria-label="Building software from architecture to production."
                  className="display-type max-w-4xl leading-[0.92]"
                  style={{ fontSize: "clamp(2.5rem, 5.2vw, 4.85rem)" }}
                >
                  <span className="block whitespace-nowrap">Building software</span>
                  <span className="block whitespace-nowrap">
                    from{" "}
                    <span className="editorial-type font-normal text-yellow-700">
                      architecture
                    </span>
                  </span>
                  <span className="block whitespace-nowrap">to production.</span>
                </h1>

                <p className="mt-6 max-w-xl text-pretty text-base font-semibold leading-7 text-neutral-700">
                  I build full-stack applications with a backend-oriented focus:
                  APIs, relational data, application boundaries, deployment, and
                  the decisions behind reliable software.
                </p>

                <div className="mt-6 flex flex-wrap gap-2 text-[0.72rem] font-black uppercase tracking-[0.12em] text-neutral-700">
                  {profile.stackLine.split(" - ").map((item) => (
                    <span key={item} className="rounded-full border border-black/12 bg-white px-3 py-2">
                      {item}
                    </span>
                  ))}
                </div>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <motion.div whileHover={{ y: -2, transition: transitions.easeOut }} whileTap={{ scale: 0.98 }}>
                    <Link
                      href="/work"
                      className="brand-focus-ring inline-flex min-h-12 items-center justify-center rounded-full bg-[#080807] px-6 text-sm font-black text-white transition-colors hover:bg-[#1a1512]"
                    >
                      Explore My Work
                    </Link>
                  </motion.div>
                  <motion.div whileHover={{ y: -2, transition: transitions.easeOut }} whileTap={{ scale: 0.98 }}>
                    <Link
                      href="/engineering"
                      className="brand-focus-ring inline-flex min-h-12 items-center justify-center rounded-full bg-yellow-300 px-6 text-sm font-black text-black transition-colors hover:bg-yellow-200"
                    >
                      View Engineering
                    </Link>
                  </motion.div>
                </div>
              </motion.div>

              {/* Right Integrated Visual Region (Anchored to the right end, minimal crisp blending) */}
              <motion.div
                variants={fadeInUp}
                className="relative mx-auto w-full max-w-[380px] sm:max-w-[420px] lg:ml-auto lg:mr-0 lg:max-w-[410px]"
              >
                <div className="relative flex h-[440px] w-full items-end justify-center overflow-hidden rounded-[2.5rem] sm:h-[490px] lg:h-[520px]">
                  {/* Glass UI Top Pill Badge */}
                  <div className="absolute left-4 top-4 z-20 flex items-center gap-2 rounded-full border border-white/20 bg-black/45 px-4 py-2 text-white shadow-[0_8px_24px_rgba(0,0,0,0.2)] backdrop-blur-md sm:left-6 sm:top-6">
                    <span className="h-2 w-2 flex-shrink-0 rounded-full bg-yellow-400" />
                    <span className="text-[0.68rem] font-black uppercase tracking-[0.14em] text-white">
                      Software Engineer
                    </span>
                  </div>

                  {/* Portrait Image with Minimal, Crisp Transition */}
                  <div
                    className="relative h-full w-full"
                    style={{
                      WebkitMaskImage:
                        "linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 90%, rgba(0,0,0,0) 100%)",
                      maskImage:
                        "linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 90%, rgba(0,0,0,0) 100%)",
                    }}
                  >
                    <Image
                      src="/My image.webp"
                      alt="Mafabi Hussein, software engineer"
                      fill
                      priority
                      sizes="(min-width: 1024px) 410px, (min-width: 640px) 420px, 90vw"
                      className="object-cover object-[52%_15%]"
                    />
                  </div>

                  {/* Glass UI Bottom Credibility Panel */}
                  <div className="absolute bottom-4 left-3 right-3 z-20 flex items-center justify-between gap-3 rounded-2xl border border-white/18 bg-black/50 px-4 py-3 text-white shadow-[0_16px_36px_rgba(0,0,0,0.25)] backdrop-blur-md sm:bottom-6 sm:left-4 sm:right-4 sm:px-5 sm:py-3.5">
                    <div className="border-r border-white/15 pr-3 sm:pr-4">
                      <span className="text-2xl font-black leading-none text-yellow-300 sm:text-3xl">3</span>
                      <p className="mt-0.5 text-[0.58rem] font-bold uppercase tracking-[0.12em] text-white/75 whitespace-nowrap">
                        Flagship Projects
                      </p>
                    </div>
                    <div className="flex flex-col justify-center">
                      <div className="flex items-center gap-1.5">
                        <span className="h-2 w-2 flex-shrink-0 rounded-full bg-emerald-400" />
                        <span className="text-[0.66rem] font-black uppercase tracking-[0.12em] text-white whitespace-nowrap sm:text-[0.7rem]">
                          4+ Years Experience
                        </span>
                      </div>
                      <p className="mt-0.5 text-[0.6rem] font-medium text-white/75 whitespace-nowrap sm:text-[0.64rem]">
                        Backend & Architecture Focus
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="section-container">
        <div className="-mt-6 grid gap-2 rounded-[1.2rem] bg-[#1b1b1b] p-2 shadow-[0_22px_60px_rgba(0,0,0,0.35)] sm:grid-cols-2 lg:grid-cols-4">
          {proofSignals.map((signal) => (
            <div key={signal.label} className="rounded-[0.95rem] bg-[#101010] px-4 py-3">
              <p className="text-[0.67rem] font-black uppercase tracking-[0.14em] text-yellow-200">
                {signal.label}
              </p>
              <p className="mt-2 text-sm font-black leading-5 text-white">{signal.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
