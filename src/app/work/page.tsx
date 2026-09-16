import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { RouteHeader } from "@/components/RouteHeader";
import { featuredProjects, secondaryProjects } from "@/content/portfolio";

export const metadata: Metadata = {
  title: "Complete Work Inventory | Mafabi Hussein",
  description:
    "Complete portfolio case studies by Mafabi Hussein: flagship systems, live web platforms, interactive PWAs, and engineering architectural decisions.",
};

export default function WorkPage() {
  return (
    <main className="overflow-x-clip bg-[#070707] text-white">
      <RouteHeader
        kicker="Complete Work Inventory"
        title={
          <>
            Projects with evidence, not just{" "}
            <span className="editorial-type font-normal text-yellow-700">screenshots.</span>
          </>
        }
      >
        A comprehensive, engineering-level inventory of software systems, applications, and
        production web platforms—complete with live interfaces, technical rationale, constraints,
        and delivered outcomes.
      </RouteHeader>

      {/* 1. FLAGSHIP SYSTEMS SECTION */}
      <section className="stage-section bg-[#070707]">
        <div className="section-container">
          <div className="mb-8 flex items-center gap-4 border-b border-white/15 pb-4">
            <div>
              <p className="section-kicker dark-kicker">Tier 1 — Flagship Systems</p>
              <h2 className="display-type mt-2 text-2xl font-black text-white sm:text-3xl">
                Multi-Application &amp; Image Identification Architectures
              </h2>
            </div>
          </div>

          <div className="space-y-16 lg:space-y-20">
            {featuredProjects.map((project, index) => {
              const isReversed = index % 2 === 1;
              const liveLink = project.links.find((l) => l.external) ?? project.links[0];

              return (
                <article
                  key={project.slug}
                  id={project.slug}
                  className={`grid gap-8 lg:gap-12 lg:items-start ${
                    isReversed ? "lg:grid-cols-[1fr_0.95fr]" : "lg:grid-cols-[0.95fr_1fr]"
                  }`}
                >
                  {/* Live Viewport Column */}
                  <div className={isReversed ? "lg:order-2" : "lg:order-1"}>
                    <a
                      href={liveLink.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/screen relative block w-full overflow-hidden rounded-xl border border-white/20 bg-[#0c0c0c] transition-all duration-300 hover:border-yellow-300/60 hover:shadow-[0_12px_45px_rgba(0,0,0,0.9)]"
                    >
                      <div className="flex h-8 items-center justify-between border-b border-white/12 bg-[#171717] px-3">
                        <div className="flex items-center gap-1.5" aria-hidden="true">
                          <span className="h-2 w-2 rounded-full bg-yellow-400" />
                          <span className="h-2 w-2 rounded-full bg-white/30" />
                          <span className="h-2 w-2 rounded-full bg-white/15" />
                        </div>
                        <div className="flex items-center gap-1.5 truncate px-2 text-[0.6rem] font-bold uppercase tracking-[0.14em] text-white/60 group-hover/screen:text-yellow-200">
                          <span className="truncate">{project.slug}.vercel.app</span>
                          <span aria-hidden="true">↗</span>
                        </div>
                        <span className="rounded-full bg-emerald-500/20 px-2 py-0.5 text-[0.55rem] font-bold uppercase tracking-wider text-emerald-300">
                          Live
                        </span>
                      </div>

                      <div
                        className="relative aspect-[16/10] w-full max-w-full overflow-hidden bg-[#0c0c0c]"
                        style={{ contain: "paint", isolation: "isolate" }}
                      >
                        {!project.useScreenshot && (
                          <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-[#0c0c0c] text-white/40 select-none">
                            <div className="h-4 w-4 animate-spin rounded-full border-2 border-yellow-300/30 border-t-yellow-300" />
                            <span className="text-[0.6rem] font-bold tracking-wider uppercase text-white/50">
                              Connecting to live system...
                            </span>
                          </div>
                        )}
                        {project.useScreenshot ? (
                          <Image
                            src={project.imageSrc}
                            alt={project.imageAlt}
                            fill
                            sizes="(min-width: 1024px) 520px, 100vw"
                            className="object-contain object-center transition-transform duration-500 ease-out group-hover/screen:scale-[1.02]"
                          />
                        ) : (
                          <iframe
                            src={liveLink.href}
                            title={`${project.name} live preview`}
                            loading="lazy"
                            style={{
                              width: "250%",
                              height: "250%",
                              transform: "scale(0.4)",
                              transformOrigin: "top left",
                            }}
                            className="pointer-events-none absolute top-0 left-0 border-0 select-none max-w-none"
                          />
                        )}
                        <div className="absolute inset-0 bg-black/10 opacity-0 transition-opacity duration-300 group-hover/screen:opacity-100 flex items-center justify-center pointer-events-none">
                          <span className="rounded-full bg-black/80 px-3.5 py-1.5 text-xs font-bold text-yellow-200 backdrop-blur-md border border-yellow-300/40 shadow-lg">
                            Open Live Project ↗
                          </span>
                        </div>
                      </div>
                    </a>

                    <div className="mt-3.5 flex flex-wrap items-center gap-x-2.5 gap-y-1 text-xs text-white/70">
                      <span className="text-[0.62rem] font-bold uppercase tracking-wider text-white/40">
                        Stack:
                      </span>
                      {project.stack.map((item, idx) => (
                        <span key={item} className="font-semibold text-white/85">
                          {item}{idx < project.stack.length - 1 ? " ·" : ""}
                        </span>
                      ))}
                    </div>

                    <div className="mt-4 flex flex-wrap items-center gap-3">
                      {project.links.map((link, lIdx) =>
                        link.external ? (
                          <a
                            key={link.label}
                            href={link.href}
                            target="_blank"
                            rel="noreferrer"
                            className={`brand-focus-ring inline-flex min-h-9 items-center justify-center rounded-full px-4 text-xs font-black transition-colors ${
                              lIdx === 0
                                ? "bg-yellow-300 text-black hover:bg-yellow-200"
                                : "border border-white/20 text-white hover:border-yellow-300/50 hover:text-yellow-200"
                            }`}
                          >
                            {link.label} ↗
                          </a>
                        ) : (
                          <Link
                            key={link.label}
                            href={link.href}
                            className="brand-focus-ring inline-flex min-h-9 items-center justify-center rounded-full border border-white/20 px-4 text-xs font-bold text-white transition-colors hover:border-yellow-300/50 hover:text-yellow-200"
                          >
                            {link.label}
                          </Link>
                        ),
                      )}
                    </div>
                  </div>

                  {/* Information & Architecture Column */}
                  <div className={`space-y-3 ${isReversed ? "lg:order-1" : "lg:order-2"}`}>
                    <p className="text-[0.65rem] font-black uppercase tracking-[0.2em] text-yellow-300">
                      {project.number} / {project.category}
                    </p>
                    <h3 className="display-type text-2xl font-black leading-tight text-white sm:text-3xl">
                      {project.name}
                    </h3>
                    <p className="text-sm font-bold text-yellow-100">{project.role}</p>
                    <p className="text-sm leading-relaxed text-white/75">{project.summary}</p>

                    <div className="border-t border-white/10 pt-2.5">
                      <p className="text-[0.62rem] font-black uppercase tracking-[0.16em] text-white/45">
                        Delivered Engineering Signal
                      </p>
                      <p className="mt-1 text-xs font-medium leading-relaxed text-white/85">
                        {project.signal}
                      </p>
                    </div>

                    <div className="border-t border-white/10 pt-2.5">
                      <p className="text-[0.62rem] font-black uppercase tracking-[0.16em] text-white/45">
                        Concrete Evidence &amp; Decisions
                      </p>
                      <ul className="mt-1.5 grid gap-1.5 text-xs leading-relaxed text-white/70">
                        {project.evidence.map((item) => (
                          <li key={item} className="grid grid-cols-[0.5rem_1fr] items-start gap-2">
                            <span
                              className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-yellow-300"
                              aria-hidden="true"
                            />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {project.engineeringContext && (
                      <div className="border-t border-white/15 pt-3">
                        <p className="text-[0.62rem] font-black uppercase tracking-[0.18em] text-yellow-200">
                          Engineering Context
                        </p>
                        <p className="mt-1 text-xs leading-relaxed text-white/75">
                          {project.engineeringContext}
                        </p>
                      </div>
                    )}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* 2. PRODUCTION WEB PLATFORMS & INTERACTIVE PWAS */}
      <section className="stage-section border-t border-white/15 bg-[#090909] text-white">
        <div className="section-container">
          <div className="mb-8 flex items-center gap-4 border-b border-white/15 pb-4">
            <div>
              <p className="section-kicker dark-kicker">Tier 2 — Web Platforms &amp; PWAs</p>
              <h2 className="display-type mt-2 text-2xl font-black text-white sm:text-3xl">
                Production Websites, Information Systems &amp; Client Apps
              </h2>
            </div>
          </div>

          <div className="space-y-16 lg:space-y-20">
            {secondaryProjects.map((project, index) => {
              const isReversed = index % 2 === 1;

              return (
                <article
                  key={project.name}
                  id={project.slug}
                  className={`grid gap-8 lg:gap-12 lg:items-start ${
                    isReversed ? "lg:grid-cols-[1fr_0.95fr]" : "lg:grid-cols-[0.95fr_1fr]"
                  }`}
                >
                  {/* Live Viewport Column */}
                  <div className={isReversed ? "lg:order-2" : "lg:order-1"}>
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/screen relative block w-full overflow-hidden rounded-xl border border-white/20 bg-[#0c0c0c] transition-all duration-300 hover:border-yellow-300/60 hover:shadow-[0_12px_45px_rgba(0,0,0,0.9)]"
                    >
                      <div className="flex h-8 items-center justify-between border-b border-white/12 bg-[#171717] px-3">
                        <div className="flex items-center gap-1.5" aria-hidden="true">
                          <span className="h-2 w-2 rounded-full bg-yellow-400" />
                          <span className="h-2 w-2 rounded-full bg-white/30" />
                          <span className="h-2 w-2 rounded-full bg-white/15" />
                        </div>
                        <div className="flex items-center gap-1.5 truncate px-2 text-[0.6rem] font-bold uppercase tracking-[0.14em] text-white/60 group-hover/screen:text-yellow-200">
                          <span className="truncate">{project.name}</span>
                          <span aria-hidden="true">↗</span>
                        </div>
                        <span className="rounded-full bg-emerald-500/20 px-2 py-0.5 text-[0.55rem] font-bold uppercase tracking-wider text-emerald-300">
                          Live
                        </span>
                      </div>

                      <div
                        className="relative aspect-[16/10] w-full max-w-full overflow-hidden bg-[#0c0c0c]"
                        style={{ contain: "paint", isolation: "isolate" }}
                      >
                        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-[#0c0c0c] text-white/40 select-none">
                          <div className="h-4 w-4 animate-spin rounded-full border-2 border-yellow-300/30 border-t-yellow-300" />
                          <span className="text-[0.6rem] font-bold tracking-wider uppercase text-white/50">
                            Connecting to live system...
                          </span>
                        </div>
                        <iframe
                          src={project.href}
                          title={`${project.name} live preview`}
                          loading="lazy"
                          style={{
                            width: "250%",
                            height: "250%",
                            transform: "scale(0.4)",
                            transformOrigin: "top left",
                          }}
                          className="pointer-events-none absolute top-0 left-0 border-0 select-none max-w-none"
                        />
                        <div className="absolute inset-0 bg-black/10 opacity-0 transition-opacity duration-300 group-hover/screen:opacity-100 flex items-center justify-center pointer-events-none">
                          <span className="rounded-full bg-black/80 px-3.5 py-1.5 text-xs font-bold text-yellow-200 backdrop-blur-md border border-yellow-300/40 shadow-lg">
                            Open Live Project ↗
                          </span>
                        </div>
                      </div>
                    </a>

                    <div className="mt-3.5 flex flex-wrap items-center gap-x-2.5 gap-y-1 text-xs text-white/70">
                      <span className="text-[0.62rem] font-bold uppercase tracking-wider text-white/40">
                        Stack:
                      </span>
                      {project.stack.map((item, idx) => (
                        <span key={item} className="font-semibold text-white/85">
                          {item}{idx < project.stack.length - 1 ? " ·" : ""}
                        </span>
                      ))}
                    </div>

                    <div className="mt-4 flex flex-wrap items-center gap-3">
                      <a
                        href={project.href}
                        target="_blank"
                        rel="noreferrer"
                        className="brand-focus-ring inline-flex min-h-9 items-center justify-center rounded-full bg-yellow-300 px-4 text-xs font-black text-black transition-colors hover:bg-yellow-200"
                      >
                        Visit Live Platform ↗
                      </a>
                    </div>
                  </div>

                  {/* Information & Architecture Column */}
                  <div className={`space-y-3 ${isReversed ? "lg:order-1" : "lg:order-2"}`}>
                    <p className="text-[0.65rem] font-black uppercase tracking-[0.2em] text-yellow-300">
                      {project.category}
                    </p>
                    <h3 className="display-type text-2xl font-black leading-tight text-white sm:text-3xl">
                      {project.name}
                    </h3>
                    <p className="text-sm font-bold text-yellow-100 sm:text-base">{project.type}</p>
                    <p className="text-sm leading-relaxed text-white/75">{project.detail}</p>

                    {/* Engineering Highlights */}
                    <div className="border-t border-white/10 pt-2.5">
                      <p className="text-[0.62rem] font-black uppercase tracking-[0.16em] text-white/45">
                        Technical Highlights &amp; Decisions
                      </p>
                      <ul className="mt-1.5 grid gap-1.5 text-xs leading-relaxed text-white/70">
                        {project.highlights.map((item) => (
                          <li key={item} className="grid grid-cols-[0.5rem_1fr] items-start gap-2">
                            <span
                              className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-yellow-300"
                              aria-hidden="true"
                            />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
