import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { RouteHeader } from "@/components/RouteHeader";
import { GitHubContributionGraph } from "@/components/GitHubContributionGraph";
import { EngineeringIndexScroller } from "@/components/EngineeringIndexScroller";
import { OakleyArchitectureDiagram } from "@/components/OakleyArchitectureDiagram";
import { ObjectIDArchitectureDiagram } from "@/components/ObjectIDArchitectureDiagram";
import { AWIHFArchitectureDiagram } from "@/components/AWIHFArchitectureDiagram";
import {
  engineeringCapabilities,
  technicalFoundations,
  oakleyCaseStudy,
  objectIDCaseStudy,
  awihfCaseStudy,
  additionalSystems,
  decisionRecords,
  reliabilityPillars,
  publicRepositories,
} from "@/content/portfolio";

export const metadata: Metadata = {
  title: "Engineering Record & Case Studies | Mafabi Hussein",
  description:
    "In-depth technical record of software systems engineered by Mafabi Hussein: architecture diagrams, state machines, PostgreSQL RLS policies, applied ML trade-offs, and live GitHub contribution activity.",
};

export default function EngineeringPage() {
  return (
    <main className="overflow-x-clip bg-[#050505]">
      {/* Route Header matching site styling with original brown/cream accent */}
      <RouteHeader
        kicker="Engineering Record"
        title={
          <>
            How the systems were{" "}
            <span className="editorial-type font-normal text-yellow-700">
              engineered.
            </span>
          </>
        }
      >
        A rigorous technical record for engineering reviewers: system architecture,
        multi-dimensional state machines, relational data modeling, Row-Level Security,
        defensive reliability patterns, and trade-offs made under real-world constraints.
      </RouteHeader>

      {/* TECHNICAL INDEX / QUICK NAVIGATION (HORIZONTALLY SCROLLABLE CARDS MATCHING HOMEPAGE HERO FOOTER) */}
      <EngineeringIndexScroller />

      {/* 01 — ENGINEERING IDENTITY & THESIS (DARK SECTION) */}
      <section id="identity" className="stage-section border-b border-white/10 bg-[#070707] text-white">
        <div className="section-container">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div>
              <p className="section-kicker dark-kicker">01 / Engineering Identity</p>
              <h2 className="brand-heading mt-3.5 text-white">
                Technical Center of{" "}
                <span className="editorial-type font-normal text-yellow-300">
                  Gravity.
                </span>
              </h2>
            </div>
            <div className="space-y-4 text-white/80 text-sm sm:text-base leading-relaxed">
              <p>
                I am a full-stack software engineer with a Computer Science foundation whose primary
                technical center of gravity is in <strong className="text-white font-semibold">backend engineering, APIs, relational databases, and system architecture</strong>.
              </p>
              <p className="text-white/70">
                While my deepest professional experience is in the JavaScript and TypeScript ecosystem, my engineering capability is not bounded by a single framework or runtime. I design software systems around underlying engineering principles: transactional consistency, database-enforced Row-Level Security, deterministic state machines, idempotent API workflows, and defensible architectural trade-offs.
              </p>
              
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-3">
                <div className="rounded-xl border border-white/10 bg-white/[0.04] p-3 text-center">
                  <p className="text-[0.65rem] uppercase tracking-wider text-white/50 font-bold">Role</p>
                  <p className="mt-1 text-xs sm:text-sm font-bold text-white">Full-Stack SWE</p>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/[0.04] p-3 text-center">
                  <p className="text-[0.65rem] uppercase tracking-wider text-white/50 font-bold">Core Depth</p>
                  <p className="mt-1 text-xs sm:text-sm font-bold text-white">TypeScript / Node</p>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/[0.04] p-3 text-center">
                  <p className="text-[0.65rem] uppercase tracking-wider text-white/50 font-bold">Data &amp; Security</p>
                  <p className="mt-1 text-xs sm:text-sm font-bold text-white">PostgreSQL / RLS</p>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/[0.04] p-3 text-center">
                  <p className="text-[0.65rem] uppercase tracking-wider text-white/50 font-bold">Ownership</p>
                  <p className="mt-1 text-xs sm:text-sm font-bold text-white">End-to-End</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 02 — TECHNICAL CAPABILITIES (WARM CREAM SECTION) */}
      <section id="capabilities" className="stage-section border-b border-black/10 bg-[#f6f0df] text-neutral-950">
        <div className="section-container">
          <div className="max-w-2xl">
            <p className="section-kicker light-kicker">02 / Capabilities</p>
            <h2 className="brand-heading mt-3.5 text-neutral-950">
              What I actually{" "}
              <span className="editorial-type font-normal text-yellow-700">
                engineer.
              </span>
            </h2>
            <p className="brand-copy mt-3 text-neutral-700">
              Core engineering disciplines backed by verified implementations in production and flagship projects.
            </p>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {engineeringCapabilities.map((cap, index) => (
              <div
                key={cap.id}
                className="flex flex-col justify-between rounded-[1.25rem] border border-black/10 bg-white p-5 sm:p-6 shadow-sm transition-all duration-300 hover:border-black/25 hover:-translate-y-0.5"
              >
                <div>
                  <div className="flex items-center justify-between text-[0.65rem] font-bold uppercase tracking-wider text-neutral-500">
                    <span>0{index + 1}</span>
                    <span className="text-yellow-700 font-bold">{cap.id}</span>
                  </div>
                  <h3 className="display-type mt-2.5 text-lg sm:text-xl font-bold text-neutral-950">{cap.title}</h3>
                  <p className="mt-1 text-xs font-semibold text-yellow-800">{cap.tagline}</p>
                  <p className="mt-2.5 text-xs leading-relaxed text-neutral-700">{cap.description}</p>
                  
                  <ul className="mt-4 space-y-1.5 border-t border-black/8 pt-3.5 text-xs text-neutral-800">
                    {cap.points.map((pt) => (
                      <li key={pt} className="flex items-start gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-yellow-500" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-5 rounded-xl border border-black/8 bg-[#fbf7ed] p-3 text-[0.72rem] text-neutral-700">
                  <span className="font-bold uppercase tracking-wider text-neutral-500 block mb-1">
                    Verified Evidence:
                  </span>
                  {cap.evidence}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 03 — ENGINEERING FOUNDATIONS (DARK SECTION) */}
      <section id="foundations" className="stage-section border-b border-white/10 bg-[#070707] text-white">
        <div className="section-container">
          <div className="max-w-2xl">
            <p className="section-kicker dark-kicker">03 / Stack Foundations</p>
            <h2 className="brand-heading mt-3.5 text-white">
              Stack foundations &amp;{" "}
              <span className="editorial-type font-normal text-yellow-300">
                capabilities.
              </span>
            </h2>
            <p className="brand-copy mt-3 text-white/70">
              Structured around engineering depth and responsibility rather than an unranked list of keywords.
            </p>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {technicalFoundations.map((group) => (
              <div
                key={group.category}
                className="rounded-[1.25rem] border border-white/10 bg-[#111111] p-5 sm:p-6 flex flex-col justify-between"
              >
                <div>
                  <h3 className="display-type text-lg font-bold text-white">{group.category}</h3>
                  <p className="mt-1 text-xs text-white/50 leading-relaxed">{group.roleInStack}</p>
                  
                  <div className="mt-4 space-y-3">
                    {group.items.map((item) => (
                      <div key={item.name} className="border-b border-white/5 pb-2.5 last:border-0 last:pb-0">
                        <div className="flex items-center justify-between gap-2">
                          <p className="text-xs sm:text-sm font-bold text-white">{item.name}</p>
                          {item.badge ? (
                            <span className="rounded-full bg-yellow-300/10 px-2 py-0.5 text-[0.6rem] font-bold text-yellow-200 border border-yellow-300/20">
                              {item.badge}
                            </span>
                          ) : null}
                        </div>
                        <p className="text-xs text-white/65 leading-normal mt-0.5">{item.role}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 04 — FLAGSHIP SYSTEM: OAKLEY COMMERCE PLATFORM (WARM CREAM SECTION) */}
      <section id="oakley" className="stage-section border-b border-black/10 bg-[#f6f0df] text-neutral-950">
        <div className="section-container">
          {/* Section Heading */}
          <div className="max-w-3xl">
            <p className="section-kicker light-kicker">04 / Flagship System 01</p>
            <h2 className="brand-heading mt-3.5 text-neutral-950">
              Multi-app commerce &amp;{" "}
              <span className="editorial-type font-normal text-yellow-700">
                relational persistence.
              </span>
            </h2>
            <p className="brand-copy mt-3 text-neutral-700">
              {oakleyCaseStudy.headline}
            </p>
          </div>

          {/* LEVEL 1: EXECUTIVE OVERVIEW & LIVE PREVIEW VIEWPORT */}
          <div className="mt-8 grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            {/* Live Preview Viewport */}
            <div>
              <a
                href={oakleyCaseStudy.livePreview.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open live storefront for Oakley Commerce Platform"
                className="group/screen relative block w-full overflow-hidden rounded-xl border border-black/15 bg-black transition-all duration-300 hover:border-black/30 hover:shadow-xl"
              >
                <div className="flex h-8 items-center justify-between border-b border-white/12 bg-[#171717] px-3 text-white">
                  <div className="flex items-center gap-1.5" aria-hidden="true">
                    <span className="h-2 w-2 rounded-full bg-yellow-400" />
                    <span className="h-2 w-2 rounded-full bg-white/30" />
                    <span className="h-2 w-2 rounded-full bg-white/15" />
                  </div>
                  <div className="flex items-center gap-1.5 truncate px-2 text-[0.65rem] font-bold tracking-wider text-white/70 group-hover/screen:text-yellow-200">
                    <span className="truncate">{oakleyCaseStudy.livePreview.label}</span>
                    <span aria-hidden="true">↗</span>
                  </div>
                  <span className="rounded-full bg-emerald-500/20 px-2 py-0.5 text-[0.55rem] font-bold uppercase tracking-wider text-emerald-300">
                    Live
                  </span>
                </div>

                <div className="relative aspect-[16/10] w-full overflow-hidden bg-black">
                  <Image
                    src={oakleyCaseStudy.livePreview.imageSrc}
                    alt={oakleyCaseStudy.livePreview.imageAlt}
                    fill
                    sizes="(min-width: 1024px) 560px, 100vw"
                    className="object-cover object-top transition-transform duration-500 ease-out group-hover/screen:scale-[1.02]"
                  />
                  <div className="absolute inset-0 bg-black/10 opacity-0 transition-opacity duration-300 group-hover/screen:opacity-100 flex items-center justify-center pointer-events-none">
                    <span className="rounded-full bg-black/80 px-3.5 py-1.5 text-xs font-bold text-yellow-200 backdrop-blur-md border border-yellow-300/40 shadow-lg">
                      Open Live Project ↗
                    </span>
                  </div>
                </div>
              </a>
            </div>

            {/* Executive Overview Box */}
            <div className="rounded-[1.35rem] border border-black/10 bg-white p-6 sm:p-7 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between border-b border-black/8 pb-3">
                  <span className="text-[0.65rem] font-bold uppercase tracking-wider text-yellow-800">
                    Executive Overview (20-Second Read)
                  </span>
                  <span className="text-xs font-semibold text-neutral-600">
                    Role: {oakleyCaseStudy.role}
                  </span>
                </div>

                <div className="mt-4 space-y-3 text-xs leading-relaxed text-neutral-800">
                  <p>
                    <strong className="text-neutral-950 block font-bold mb-0.5">System &amp; Problem:</strong>
                    {oakleyCaseStudy.overview.systemDefinition} {oakleyCaseStudy.overview.problemSolved}
                  </p>
                  <p>
                    <strong className="text-neutral-950 block font-bold mb-0.5">What I Engineered:</strong>
                    {oakleyCaseStudy.overview.whatIEngineered}
                  </p>
                  <p>
                    <strong className="text-neutral-950 block font-bold mb-0.5">What It Proves:</strong>
                    {oakleyCaseStudy.overview.whatItProves}
                  </p>
                </div>
              </div>

              <div className="mt-5 pt-3 border-t border-black/8 flex items-center justify-between">
                <a
                  href={oakleyCaseStudy.livePreview.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-neutral-950 hover:text-yellow-700 transition-colors"
                >
                  <span>Visit live storefront</span>
                  <span aria-hidden="true">↗</span>
                </a>
                <span className="text-[0.65rem] text-neutral-500">Verified Production Deployment</span>
              </div>
            </div>
          </div>

          {/* LEVEL 2: DEEP TECHNICAL EVIDENCE */}
          {/* Architecture Diagram with Directional Boundary Topology */}
          <OakleyArchitectureDiagram />

          {/* 3-Dimensional State Machines */}
          <div className="mt-8">
            <h3 className="display-type text-xl font-bold text-neutral-950">3-Dimensional State Management</h3>
            <p className="mt-1.5 text-xs sm:text-sm text-neutral-700 max-w-2xl">
              Rather than collapsing business workflows into a single generic status column, the backend tracks three orthogonal dimensions to maintain invariants:
            </p>

            <div className="mt-4 grid gap-4 md:grid-cols-3">
              {oakleyCaseStudy.stateMachines.map((sm) => (
                <div key={sm.dimension} className="rounded-xl border border-black/10 bg-white p-4 sm:p-5 shadow-sm">
                  <h4 className="text-sm font-bold text-yellow-800">{sm.dimension}</h4>
                  <div className="mt-2.5 flex flex-wrap gap-1">
                    {sm.states.map((st) => (
                      <span key={st} className="rounded border border-black/10 bg-[#fbf7ed] px-2 py-0.5 text-[0.65rem] text-neutral-800 font-mono">
                        {st}
                      </span>
                    ))}
                  </div>
                  <p className="mt-3 text-xs leading-relaxed text-neutral-700">{sm.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Reliability & Security */}
          <div className="mt-6 grid gap-5 lg:grid-cols-2">
            <div className="rounded-xl border border-black/10 bg-white p-5 sm:p-6 shadow-sm">
              <h3 className="display-type text-lg font-bold text-neutral-950">Reliability &amp; Invariant Enforcement</h3>
              <div className="mt-3.5 space-y-3 text-xs">
                {oakleyCaseStudy.reliabilityHighlights.map((rel) => (
                  <div key={rel.title} className="border-b border-black/5 pb-2.5 last:border-0 last:pb-0">
                    <p className="font-bold text-yellow-800">{rel.title}</p>
                    <p className="mt-0.5 text-neutral-700 leading-relaxed">{rel.detail}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-xl border border-black/10 bg-white p-5 sm:p-6 shadow-sm flex flex-col justify-between">
              <div>
                <h3 className="display-type text-lg font-bold text-neutral-950">Security &amp; Row-Level Security (RLS)</h3>
                <p className="mt-2 text-xs leading-relaxed text-neutral-700">
                  {oakleyCaseStudy.securityModel}
                </p>

                <h4 className="mt-4 text-xs font-bold uppercase tracking-wider text-yellow-800">
                  Engineering Retrospective
                </h4>
                <div className="mt-2 space-y-1.5 text-xs text-neutral-700">
                  <p><strong className="text-neutral-950">What Worked:</strong> {oakleyCaseStudy.retrospective.whatWorked}</p>
                  <p><strong className="text-neutral-950">Real Constraint:</strong> {oakleyCaseStudy.retrospective.constraints}</p>
                  <p><strong className="text-neutral-950">What I Would Change:</strong> {oakleyCaseStudy.retrospective.whatIWouldChange}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 05 — FLAGSHIP SYSTEM: OBJECTID (DARK SECTION) */}
      <section id="objectid" className="stage-section border-b border-white/10 bg-[#070707] text-white">
        <div className="section-container">
          {/* Section Heading */}
          <div className="max-w-3xl">
            <p className="section-kicker dark-kicker">05 / Flagship System 02</p>
            <h2 className="brand-heading mt-3.5 text-white">
              Applied computer vision &amp;{" "}
              <span className="editorial-type font-normal text-yellow-300">
                pragmatic ML.
              </span>
            </h2>
            <p className="brand-copy mt-3 text-white/75">
              {objectIDCaseStudy.headline}
            </p>
          </div>

          {/* LEVEL 1: EXECUTIVE OVERVIEW & LIVE DEMO VIEWPORT */}
          <div className="mt-8 grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            {/* Live Demo Viewport */}
            <div>
              <a
                href={objectIDCaseStudy.livePreview.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open live interactive demo for ObjectID"
                className="group/screen relative block w-full overflow-hidden rounded-xl border border-white/20 bg-[#0c0c0c] transition-all duration-300 hover:border-yellow-300/60 hover:shadow-[0_12px_45px_rgba(0,0,0,0.9)]"
              >
                <div className="flex h-8 items-center justify-between border-b border-white/12 bg-[#171717] px-3">
                  <div className="flex items-center gap-1.5" aria-hidden="true">
                    <span className="h-2 w-2 rounded-full bg-yellow-400" />
                    <span className="h-2 w-2 rounded-full bg-white/30" />
                    <span className="h-2 w-2 rounded-full bg-white/15" />
                  </div>
                  <div className="flex items-center gap-1.5 truncate px-2 text-[0.65rem] font-bold tracking-wider text-white/60 group-hover/screen:text-yellow-200">
                    <span className="truncate">{objectIDCaseStudy.livePreview.label}</span>
                    <span aria-hidden="true">↗</span>
                  </div>
                  <span className="rounded-full bg-emerald-500/20 px-2 py-0.5 text-[0.55rem] font-bold uppercase tracking-wider text-emerald-300">
                    Live Demo
                  </span>
                </div>

                <div className="relative aspect-[16/10] w-full overflow-hidden bg-black">
                  <iframe
                    src={objectIDCaseStudy.livePreview.url}
                    title="ObjectID Live Web Demo"
                    loading="lazy"
                    className="pointer-events-none absolute top-0 left-0 h-[250%] w-[250%] origin-top-left scale-[0.4] border-0 select-none"
                  />
                  <div className="absolute inset-0 bg-black/10 opacity-0 transition-opacity duration-300 group-hover/screen:opacity-100 flex items-center justify-center pointer-events-none">
                    <span className="rounded-full bg-black/80 px-3.5 py-1.5 text-xs font-bold text-yellow-200 backdrop-blur-md border border-yellow-300/40 shadow-lg">
                      Open Interactive Demo ↗
                    </span>
                  </div>
                </div>
              </a>
            </div>

            {/* Executive Overview Box */}
            <div className="rounded-[1.35rem] border border-white/12 bg-[#111111] p-6 sm:p-7 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <span className="text-[0.65rem] font-bold uppercase tracking-wider text-yellow-300">
                    Executive Overview (20-Second Read)
                  </span>
                  <span className="text-xs font-semibold text-white/50">
                    Role: {objectIDCaseStudy.role}
                  </span>
                </div>

                <div className="mt-4 space-y-3 text-xs leading-relaxed text-white/80">
                  <p>
                    <strong className="text-white block font-bold mb-0.5">System &amp; Problem:</strong>
                    {objectIDCaseStudy.overview.systemDefinition} {objectIDCaseStudy.overview.problemSolved}
                  </p>
                  <p>
                    <strong className="text-white block font-bold mb-0.5">What I Engineered:</strong>
                    {objectIDCaseStudy.overview.whatIEngineered}
                  </p>
                  <p>
                    <strong className="text-white block font-bold mb-0.5">What It Proves:</strong>
                    {objectIDCaseStudy.overview.whatItProves}
                  </p>
                </div>
              </div>

              <div className="mt-5 pt-3 border-t border-white/10 flex items-center justify-between">
                <a
                  href={objectIDCaseStudy.livePreview.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-yellow-300 hover:text-yellow-200 transition-colors"
                >
                  <span>Open interactive web demo</span>
                  <span aria-hidden="true">↗</span>
                </a>
                <span className="text-[0.65rem] text-white/40">Verified Interactive UI</span>
              </div>
            </div>
          </div>

          {/* LEVEL 2: DEEP TECHNICAL EVIDENCE */}
          {/* Applied Computer Vision & ML Architecture Diagram with Dual Engine Routing */}
          <ObjectIDArchitectureDiagram />

          {/* Trade-offs & Defensive Handling */}
          <div className="mt-6 grid gap-5 lg:grid-cols-2">
            <div className="rounded-xl border border-white/10 bg-[#111111] p-5 sm:p-6">
              <h3 className="display-type text-lg font-bold text-white">Pragmatic ML Scope Trade-Off</h3>
              <div className="mt-3.5 space-y-3 text-xs">
                {objectIDCaseStudy.keyDecisions.map((dec) => (
                  <div key={dec.title} className="border-b border-white/5 pb-2.5 last:border-0 last:pb-0">
                    <p className="font-bold text-yellow-200">{dec.title}</p>
                    <p className="mt-0.5 text-white/80"><strong className="text-white">Decision:</strong> {dec.decision}</p>
                    <p className="mt-0.5 text-white/65"><strong className="text-white/80">Reasoning:</strong> {dec.reasoning}</p>
                    <p className="mt-0.5 text-white/65"><strong className="text-white/80">Outcome:</strong> {dec.outcome}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-xl border border-white/10 bg-[#111111] p-5 sm:p-6 flex flex-col justify-between">
              <div>
                <h3 className="display-type text-lg font-bold text-white">Defensive Engineering &amp; Android Lifecycle</h3>
                <ul className="mt-3.5 space-y-1.5 text-xs text-white/70">
                  {objectIDCaseStudy.errorHandlingAndSecurity.map((err) => (
                    <li key={err} className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-yellow-300" />
                      <span>{err}</span>
                    </li>
                  ))}
                </ul>

                <h4 className="mt-4 text-xs font-bold uppercase tracking-wider text-yellow-300">
                  Engineering Retrospective
                </h4>
                <div className="mt-2 space-y-1.5 text-xs text-white/70">
                  <p><strong className="text-white">What Worked:</strong> {objectIDCaseStudy.retrospective.whatWorked}</p>
                  <p><strong className="text-white">Constraint:</strong> {objectIDCaseStudy.retrospective.constraints}</p>
                  <p><strong className="text-white">Next Iteration:</strong> {objectIDCaseStudy.retrospective.whatIWouldChange}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 06 — PRODUCTION WEB SYSTEM: AWIHF (WARM CREAM SECTION) */}
      <section id="awihf" className="stage-section border-b border-black/10 bg-[#f6f0df] text-neutral-950">
        <div className="section-container">
          <div className="max-w-3xl">
            <p className="section-kicker light-kicker">06 / Production Web System</p>
            <h2 className="brand-heading mt-3.5 text-neutral-950">
              Separation of responsibilities in{" "}
              <span className="editorial-type font-normal text-yellow-700">
                production.
              </span>
            </h2>
            <p className="brand-copy mt-3 text-neutral-700">
              {awihfCaseStudy.headline}
            </p>
          </div>

          {/* LEVEL 1: EXECUTIVE OVERVIEW & LIVE PREVIEW VIEWPORT */}
          <div className="mt-8 grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            {/* Live Preview Viewport */}
            <div>
              <a
                href={awihfCaseStudy.livePreview.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open official live platform for Acholi Women in Health Foundation"
                className="group/screen relative block w-full overflow-hidden rounded-xl border border-black/15 bg-black transition-all duration-300 hover:border-black/30 hover:shadow-xl"
              >
                <div className="flex h-8 items-center justify-between border-b border-white/12 bg-[#171717] px-3 text-white">
                  <div className="flex items-center gap-1.5" aria-hidden="true">
                    <span className="h-2 w-2 rounded-full bg-yellow-400" />
                    <span className="h-2 w-2 rounded-full bg-white/30" />
                    <span className="h-2 w-2 rounded-full bg-white/15" />
                  </div>
                  <div className="flex items-center gap-1.5 truncate px-2 text-[0.65rem] font-bold tracking-wider text-white/70 group-hover/screen:text-yellow-200">
                    <span className="truncate">{awihfCaseStudy.livePreview.label}</span>
                    <span aria-hidden="true">↗</span>
                  </div>
                  <span className="rounded-full bg-emerald-500/20 px-2 py-0.5 text-[0.55rem] font-bold uppercase tracking-wider text-emerald-300">
                    Live in Production
                  </span>
                </div>

                <div className="relative aspect-[16/10] w-full overflow-hidden bg-black">
                  <iframe
                    src={awihfCaseStudy.livePreview.url}
                    title="AWIHF Official Live Platform Preview"
                    loading="lazy"
                    className="pointer-events-none absolute top-0 left-0 h-[250%] w-[250%] origin-top-left scale-[0.4] border-0 select-none"
                  />
                  <div className="absolute inset-0 bg-black/10 opacity-0 transition-opacity duration-300 group-hover/screen:opacity-100 flex items-center justify-center pointer-events-none">
                    <span className="rounded-full bg-black/80 px-3.5 py-1.5 text-xs font-bold text-yellow-200 backdrop-blur-md border border-yellow-300/40 shadow-lg">
                      Open Official Website ↗
                    </span>
                  </div>
                </div>
              </a>
            </div>

            {/* Executive Overview Box */}
            <div className="rounded-[1.35rem] border border-black/10 bg-white p-6 sm:p-7 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between border-b border-black/8 pb-3">
                  <span className="text-[0.65rem] font-bold uppercase tracking-wider text-yellow-800">
                    Executive Overview (20-Second Read)
                  </span>
                  <span className="text-xs font-semibold text-neutral-600">
                    Role: {awihfCaseStudy.role}
                  </span>
                </div>

                <div className="mt-4 space-y-3 text-xs leading-relaxed text-neutral-800">
                  <p>
                    <strong className="text-neutral-950 block font-bold mb-0.5">System &amp; Problem:</strong>
                    {awihfCaseStudy.overview.systemDefinition} {awihfCaseStudy.overview.problemSolved}
                  </p>
                  <p>
                    <strong className="text-neutral-950 block font-bold mb-0.5">What I Engineered:</strong>
                    {awihfCaseStudy.overview.whatIEngineered}
                  </p>
                  <p>
                    <strong className="text-neutral-950 block font-bold mb-0.5">What It Proves:</strong>
                    {awihfCaseStudy.overview.whatItProves}
                  </p>
                </div>
              </div>

              <div className="mt-5 pt-3 border-t border-black/8 flex items-center justify-between">
                <a
                  href={awihfCaseStudy.livePreview.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-neutral-950 hover:text-yellow-700 transition-colors"
                >
                  <span>Visit official live site</span>
                  <span aria-hidden="true">↗</span>
                </a>
                <span className="text-[0.65rem] font-bold text-emerald-800">● Active Organization Deployment</span>
              </div>
            </div>
          </div>

          {/* LEVEL 2: DEEP TECHNICAL EVIDENCE */}
          {/* Decoupled System Architecture & Service Topology */}
          <AWIHFArchitectureDiagram />

          {/* Responsibility Breakdown Grid */}
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {awihfCaseStudy.responsibilitySeparation.map((layer) => (
              <div key={layer.layer} className="rounded-xl border border-black/10 bg-white p-4 sm:p-5 shadow-sm flex flex-col justify-between">
                <div>
                  <p className="text-[0.65rem] font-bold uppercase tracking-wider text-yellow-800">
                    {layer.layer}
                  </p>
                  <h4 className="mt-1.5 text-sm font-bold text-neutral-950">{layer.technology}</h4>
                  <p className="mt-2 text-xs leading-relaxed text-neutral-700">{layer.responsibility}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-xl border border-black/10 bg-white p-4 sm:p-5 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
            <div>
              <span className="font-bold text-neutral-950 block">Production Invariants:</span>
              <span className="text-neutral-700">
                Automated Prisma schema typechecks before compile, canonical environment variable templates, and strict boundary isolation.
              </span>
            </div>
            <a
              href={awihfCaseStudy.livePreview.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-950 font-bold hover:text-yellow-700 whitespace-nowrap"
            >
              Open acholiwomeninhealth.org ↗
            </a>
          </div>
        </div>
      </section>

      {/* 07 — ADDITIONAL SYSTEMS (DARK SECTION WITH INDIVIDUAL LIVE PREVIEWS) */}
      <section id="additional-systems" className="stage-section border-b border-white/10 bg-[#070707] text-white">
        <div className="section-container">
          <div className="max-w-2xl">
            <p className="section-kicker dark-kicker">07 / Additional Systems</p>
            <h2 className="brand-heading mt-3.5 text-white">
              Interactive PWAs &amp;{" "}
              <span className="editorial-type font-normal text-yellow-300">
                web platforms.
              </span>
            </h2>
            <p className="brand-copy mt-3 text-white/70">
              Supporting projects demonstrating stateful client interactions, installable PWAs, and high-density information architecture.
            </p>
          </div>

          <div className="mt-8 space-y-10">
            {additionalSystems.map((sys) => (
              <div
                key={sys.slug}
                className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center rounded-2xl border border-white/10 bg-[#111111] p-5 sm:p-7"
              >
                {/* Live Preview Viewport for each system */}
                <div>
                  <a
                    href={sys.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Open live project for ${sys.name}`}
                    className="group/screen relative block w-full overflow-hidden rounded-xl border border-white/20 bg-[#0c0c0c] transition-all duration-300 hover:border-yellow-300/60 hover:shadow-[0_12px_45px_rgba(0,0,0,0.9)]"
                  >
                    <div className="flex h-8 items-center justify-between border-b border-white/12 bg-[#171717] px-3">
                      <div className="flex items-center gap-1.5" aria-hidden="true">
                        <span className="h-2 w-2 rounded-full bg-yellow-400" />
                        <span className="h-2 w-2 rounded-full bg-white/30" />
                        <span className="h-2 w-2 rounded-full bg-white/15" />
                      </div>
                      <div className="flex items-center gap-1.5 truncate px-2 text-[0.65rem] font-bold tracking-wider text-white/60 group-hover/screen:text-yellow-200">
                        <span className="truncate">{sys.livePreview.label}</span>
                        <span aria-hidden="true">↗</span>
                      </div>
                      <span className="rounded-full bg-emerald-500/20 px-2 py-0.5 text-[0.55rem] font-bold uppercase tracking-wider text-emerald-300">
                        Live
                      </span>
                    </div>

                    <div className="relative aspect-[16/10] w-full overflow-hidden bg-black">
                      {sys.livePreview.useScreenshot && sys.livePreview.imageSrc ? (
                        <Image
                          src={sys.livePreview.imageSrc}
                          alt={sys.livePreview.imageAlt}
                          fill
                          sizes="(min-width: 1024px) 500px, 100vw"
                          className="object-cover object-top transition-transform duration-500 ease-out group-hover/screen:scale-[1.02]"
                        />
                      ) : (
                        <iframe
                          src={sys.livePreview.url}
                          title={`${sys.name} Live Preview`}
                          loading="lazy"
                          className="pointer-events-none absolute top-0 left-0 h-[250%] w-[250%] origin-top-left scale-[0.4] border-0 select-none"
                        />
                      )}
                      <div className="absolute inset-0 bg-black/10 opacity-0 transition-opacity duration-300 group-hover/screen:opacity-100 flex items-center justify-center pointer-events-none">
                        <span className="rounded-full bg-black/80 px-3.5 py-1.5 text-xs font-bold text-yellow-200 backdrop-blur-md border border-yellow-300/40 shadow-lg">
                          Open Live Project ↗
                        </span>
                      </div>
                    </div>
                  </a>
                </div>

                {/* System Details & Engineering Points */}
                <div className="flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between text-[0.65rem] font-bold text-yellow-300 uppercase">
                      <span>{sys.type}</span>
                      <span className="text-white/50">{sys.role}</span>
                    </div>
                    <h3 className="display-type mt-2 text-xl font-bold text-white">{sys.name}</h3>
                    <p className="mt-2 text-xs text-white/75 leading-relaxed">{sys.overview}</p>
                    
                    <div className="mt-3.5 flex flex-wrap gap-1">
                      {sys.stack.map((t) => (
                        <span key={t} className="rounded border border-white/10 bg-black/50 px-2 py-0.5 text-[0.65rem] text-white/70">
                          {t}
                        </span>
                      ))}
                    </div>

                    <ul className="mt-4 space-y-1.5 border-t border-white/5 pt-3.5 text-xs text-white/80">
                      {sys.engineeringPoints.map((pt) => (
                        <li key={pt} className="flex items-start gap-2">
                          <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-yellow-300" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-5 pt-3.5 border-t border-white/10 flex items-center justify-between">
                    <a
                      href={sys.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-yellow-300 hover:text-yellow-200 transition-colors"
                    >
                      <span>View project live</span>
                      <span aria-hidden="true">↗</span>
                    </a>
                    <span className="text-[0.65rem] text-white/40">Verified Live Platform</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 08 — FORMAL DECISION RECORDS (WARM CREAM SECTION) */}
      <section id="decisions" className="stage-section border-b border-black/10 bg-[#f6f0df] text-neutral-950">
        <div className="section-container">
          <div className="max-w-3xl">
            <p className="section-kicker light-kicker">08 / Decision Records</p>
            <h2 className="brand-heading mt-3.5 text-neutral-950">
              Architectural decisions &amp;{" "}
              <span className="editorial-type font-normal text-yellow-700">
                trade-offs.
              </span>
            </h2>
            <p className="brand-copy mt-3 text-neutral-700">
              Senior engineers evaluate technical reasoning. Major system choices are documented as:
              <span className="text-yellow-800 font-bold block sm:inline sm:ml-2">Problem → Options → Decision → Reasoning → Trade-Off</span>
            </p>
          </div>

          <div className="mt-8 space-y-5">
            {decisionRecords.map((rec) => (
              <div
                key={rec.id}
                className="rounded-2xl border border-black/10 bg-white p-5 sm:p-7 shadow-sm transition-all hover:border-black/25"
              >
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-black/8 pb-3.5">
                  <div className="flex items-center gap-2.5">
                    <span className="text-xs font-bold text-yellow-800 uppercase">{rec.id}</span>
                    <h3 className="display-type text-base sm:text-lg font-bold text-neutral-950">{rec.title}</h3>
                  </div>
                  <span className="rounded-full border border-black/10 bg-[#fbf7ed] px-3 py-0.5 text-[0.65rem] font-semibold text-neutral-700">
                    {rec.system}
                  </span>
                </div>

                <div className="mt-5 grid gap-5 md:grid-cols-2 text-xs leading-relaxed text-neutral-800">
                  <div className="space-y-3">
                    <div>
                      <p className="uppercase text-neutral-500 font-bold tracking-wider text-[0.65rem]">The Problem</p>
                      <p className="mt-1 text-neutral-900">{rec.problem}</p>
                    </div>
                    <div>
                      <p className="uppercase text-neutral-500 font-bold tracking-wider text-[0.65rem]">Evaluated Options</p>
                      <ul className="mt-1 space-y-1">
                        {rec.options.map((opt) => (
                          <li key={opt} className="flex items-start gap-2">
                            <span className="text-yellow-700 font-bold">•</span>
                            <span>{opt}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="space-y-3 rounded-xl bg-[#fbf7ed] p-4 border border-black/5">
                    <div>
                      <p className="uppercase text-yellow-900 font-bold tracking-wider text-[0.65rem]">Decision &amp; Reasoning</p>
                      <p className="mt-1 text-neutral-950 font-bold">{rec.decision}</p>
                      <p className="mt-1 text-neutral-700">{rec.reasoning}</p>
                    </div>
                    <div className="border-t border-black/8 pt-2.5">
                      <p className="uppercase text-neutral-500 font-bold tracking-wider text-[0.65rem]">Trade-Off Accepted</p>
                      <p className="mt-1 text-neutral-900 font-semibold">{rec.tradeOff}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 09 — RELIABILITY & PRODUCTION THINKING (DARK SECTION) */}
      <section id="reliability" className="stage-section border-b border-white/10 bg-[#070707] text-white">
        <div className="section-container">
          <div className="max-w-2xl">
            <p className="section-kicker dark-kicker">09 / Production Invariants</p>
            <h2 className="brand-heading mt-3.5 text-white">
              Reliability &amp;{" "}
              <span className="editorial-type font-normal text-yellow-300">
                production invariants.
              </span>
            </h2>
            <p className="brand-copy mt-3 text-white/70">
              Defensive engineering practices implemented across codebases to ensure stability beyond the happy path:
            </p>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {reliabilityPillars.map((pillar) => (
              <div
                key={pillar.title}
                className="rounded-xl border border-white/10 bg-[#111111] p-5 flex flex-col justify-between"
              >
                <div>
                  <h3 className="display-type text-base font-bold text-yellow-300">{pillar.title}</h3>
                  <p className="mt-1.5 text-xs font-semibold text-white/90">{pillar.principle}</p>
                  <p className="mt-2.5 text-xs leading-relaxed text-white/65">{pillar.implementation}</p>
                </div>
                <div className="mt-4 rounded-lg bg-black/50 p-3 border border-white/5 text-[0.7rem] text-white/55">
                  <span className="text-yellow-300 font-bold block mb-0.5">Implemented In:</span>
                  {pillar.projectEvidence}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10 — LIVE GITHUB CONTRIBUTION GRAPH (WARM CREAM SECTION) */}
      <section id="github-activity" className="stage-section border-b border-black/10 bg-[#f6f0df] text-neutral-950">
        <div className="section-container">
          <div className="max-w-2xl mb-6">
            <p className="section-kicker light-kicker">10 / Public Activity</p>
            <h2 className="brand-heading mt-3.5 text-neutral-950">
              Public commit &amp;{" "}
              <span className="editorial-type font-normal text-yellow-700">
                contribution record.
              </span>
            </h2>
            <p className="brand-copy mt-3 text-neutral-700">
              An authentic public record of ongoing development and engineering iterations behind the projects.
            </p>
          </div>

          {/* GitHub Graph Component embedded as a focal artifact */}
          <GitHubContributionGraph />
        </div>
      </section>

      {/* 11 — TECHNICAL RECORD & REPOSITORIES (DARK SECTION) */}
      <section id="repositories" className="stage-section bg-[#070707] text-white">
        <div className="section-container">
          <div className="max-w-2xl">
            <p className="section-kicker dark-kicker">11 / Repositories</p>
            <h2 className="brand-heading mt-3.5 text-white">
              Source code &amp;{" "}
              <span className="editorial-type font-normal text-yellow-300">
                public repositories.
              </span>
            </h2>
            <p className="brand-copy mt-3 text-white/70">
              Inspectable repository references and codebase foundations available on GitHub.
            </p>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {publicRepositories.map((repo) => (
              <div
                key={repo.name}
                className="rounded-2xl border border-white/10 bg-[#111111] p-5 sm:p-6 flex flex-col justify-between hover:border-yellow-300/40 transition-all"
              >
                <div>
                  <div className="flex items-center justify-between text-[0.65rem] font-bold text-yellow-300 uppercase">
                    <span>{repo.category}</span>
                  </div>
                  <h3 className="display-type mt-2 text-lg sm:text-xl font-bold text-white">{repo.name}</h3>
                  <p className="mt-1 text-xs text-white/50">{repo.repo}</p>
                  <p className="mt-2.5 text-xs leading-relaxed text-white/70">{repo.description}</p>
                  
                  <div className="mt-3.5 flex flex-wrap gap-1">
                    {repo.highlights.map((h) => (
                      <span key={h} className="rounded border border-white/10 bg-black/50 px-2 py-0.5 text-[0.65rem] text-white/80">
                        {h}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-5 pt-3.5 border-t border-white/10 flex items-center justify-between">
                  <a
                    href={repo.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-yellow-300 hover:text-yellow-200 transition-colors"
                  >
                    <span>View on GitHub</span>
                    <span aria-hidden="true">↗</span>
                  </a>
                  <span className="text-[0.65rem] text-white/40">Public Codebase</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
