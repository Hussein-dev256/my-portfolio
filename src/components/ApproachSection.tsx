import Link from "next/link";
import { engineeringApproachStages } from "@/content/portfolio";

export function ApproachSection() {
  const stage1 = engineeringApproachStages[0];
  const stage2 = engineeringApproachStages[1];
  const stage3 = engineeringApproachStages[2];
  const stage4 = engineeringApproachStages[3];
  const stage5 = engineeringApproachStages[4];
  const stage6 = engineeringApproachStages[5];
  const stage7 = engineeringApproachStages[6];

  return (
    <section
      id="approach"
      className="stage-section bg-[#050505] text-white border-b border-white/10"
      aria-labelledby="approach-heading"
    >
      <div className="section-container">
        {/* Section Header */}
        <div className="border-b border-white/10 pb-8">
          <p className="section-kicker dark-kicker">How I approach software</p>
          <h2
            id="approach-heading"
            className="display-type mt-4 text-3xl sm:text-4xl lg:text-[3.25rem] font-bold leading-[0.95] text-white tracking-tight"
          >
            <span className="block">Reasoning from ambiguity</span>
            <span className="block">
              to{" "}
              <span className="editorial-type font-normal text-yellow-300">
                working systems.
              </span>
            </span>
          </h2>
          <p className="mt-5 max-w-2xl text-sm sm:text-[0.95rem] font-medium leading-relaxed text-white/75 border-l-2 border-yellow-300/30 pl-4">
            I do not start with &ldquo;which framework should I use?&rdquo; I begin by understanding the problem,
            isolating constraints, defining system boundaries, modeling relational state, designing defensive failure
            modes, and closing the loop with continuous observability.
          </p>
        </div>

        {/* Stages Strip - Exactly 1 Line Above, All 7 Stages Fit Completely On One Line */}
        <div className="mt-7">
          <div className="flex items-center justify-between w-full gap-1 sm:gap-1.5 lg:gap-2 text-[0.62rem] sm:text-[0.72rem] md:text-xs font-bold">
            <span className="whitespace-nowrap rounded-xl border border-white/15 bg-[#111111] px-2 sm:px-3 py-1.5 text-white flex-1 text-center shadow-xs">
              01. Understand
            </span>
            <span className="text-yellow-400/70 text-[0.65rem] sm:text-xs shrink-0 select-none">➔</span>
            <span className="whitespace-nowrap rounded-xl border border-white/15 bg-[#111111] px-2 sm:px-3 py-1.5 text-white flex-1 text-center shadow-xs">
              02. Constraints
            </span>
            <span className="text-yellow-400/70 text-[0.65rem] sm:text-xs shrink-0 select-none">➔</span>
            <span className="whitespace-nowrap rounded-xl border border-white/15 bg-[#111111] px-2 sm:px-3 py-1.5 text-white flex-1 text-center shadow-xs">
              03. Architecture
            </span>
            <span className="text-yellow-400/70 text-[0.65rem] sm:text-xs shrink-0 select-none">➔</span>
            <span className="whitespace-nowrap rounded-xl border border-white/15 bg-[#111111] px-2 sm:px-3 py-1.5 text-white flex-1 text-center shadow-xs">
              04. Data &amp; State
            </span>
            <span className="text-yellow-400/70 text-[0.65rem] sm:text-xs shrink-0 select-none">➔</span>
            <span className="whitespace-nowrap rounded-xl border border-white/15 bg-[#111111] px-2 sm:px-3 py-1.5 text-white flex-1 text-center shadow-xs">
              05. Defensive Contracts
            </span>
            <span className="text-yellow-400/70 text-[0.65rem] sm:text-xs shrink-0 select-none">➔</span>
            <span className="whitespace-nowrap rounded-xl border border-white/15 bg-[#111111] px-2 sm:px-3 py-1.5 text-white flex-1 text-center shadow-xs">
              06. Build &amp; Validate
            </span>
            <span className="text-yellow-400/70 text-[0.65rem] sm:text-xs shrink-0 select-none">➔</span>
            <span className="whitespace-nowrap rounded-xl border border-yellow-400/80 bg-yellow-400/10 px-2 sm:px-3 py-1.5 text-yellow-300 flex-1 text-center shadow-xs">
              07. Observe &amp; Iterate
            </span>
          </div>
        </div>

        {/* ALTERNATING CARD / NO-CARD STAGES GRID */}
        <div className="mt-10 grid gap-6 md:grid-cols-2 items-stretch">
          {/* Stage 01: CARD */}
          <article className="h-full flex flex-col justify-between rounded-[1.3rem] border border-white/12 bg-[#0e0e0e] p-6 sm:p-7 transition-all duration-300 hover:border-white/20 hover:bg-[#131313] shadow-sm">
            <div>
              <div className="flex items-center justify-between border-b border-white/8 pb-3">
                <span className="text-[0.68rem] font-black uppercase tracking-[0.16em] text-yellow-300">
                  STAGE 01 · PROBLEM SCOPE
                </span>
                <span className="text-xs font-semibold text-white/50">Deconstruction</span>
              </div>
              <h3 className="display-type text-xl sm:text-2xl font-black text-white mt-3">
                {stage1.title}
              </h3>
              <p className="mt-1.5 text-xs font-semibold text-yellow-200/90">
                &ldquo;{stage1.coreQuestion}&rdquo;
              </p>
              <p className="mt-3 text-sm text-white/75 leading-relaxed">
                {stage1.summary}
              </p>
              <ul className="mt-4 space-y-2 border-t border-white/5 pt-3.5 text-xs text-white/65 leading-relaxed">
                {stage1.keyInquiries.map((inquiry) => (
                  <li key={inquiry} className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-yellow-400" />
                    <span>{inquiry}</span>
                  </li>
                ))}
              </ul>
            </div>
          </article>

          {/* Stage 02: NO CARD */}
          <div className="h-full flex flex-col justify-between p-6 sm:p-7">
            <div>
              <div className="flex items-center justify-between border-b border-white/8 pb-3">
                <span className="text-[0.68rem] font-black uppercase tracking-[0.16em] text-yellow-300">
                  STAGE 02 · HARD CONSTRAINTS
                </span>
                <span className="text-xs font-semibold text-white/50">Requirements</span>
              </div>
              <h3 className="display-type text-xl sm:text-2xl font-black text-white mt-3">
                {stage2.title}
              </h3>
              <p className="mt-1.5 text-xs font-semibold text-yellow-200/90">
                &ldquo;{stage2.coreQuestion}&rdquo;
              </p>
              <p className="mt-3 text-sm text-white/75 leading-relaxed">
                {stage2.summary}
              </p>
              <ul className="mt-4 space-y-2 border-t border-white/5 pt-3.5 text-xs text-white/65 leading-relaxed">
                {stage2.keyInquiries.map((inquiry) => (
                  <li key={inquiry} className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-yellow-400" />
                    <span>{inquiry}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Stage 03: CARD */}
          <article className="h-full flex flex-col justify-between rounded-[1.3rem] border border-white/12 bg-[#0e0e0e] p-6 sm:p-7 transition-all duration-300 hover:border-white/20 hover:bg-[#131313] shadow-sm">
            <div>
              <div className="flex items-center justify-between border-b border-white/8 pb-3">
                <span className="text-[0.68rem] font-black uppercase tracking-[0.16em] text-yellow-300">
                  STAGE 03 · SYSTEM ARCHITECTURE
                </span>
                <span className="text-xs font-semibold text-white/50">Boundaries</span>
              </div>
              <h3 className="display-type text-xl sm:text-2xl font-black text-white mt-3">
                {stage3.title}
              </h3>
              <p className="mt-1.5 text-xs font-semibold text-yellow-200/90">
                &ldquo;{stage3.coreQuestion}&rdquo;
              </p>
              <p className="mt-3 text-sm text-white/75 leading-relaxed">
                {stage3.summary}
              </p>
              <ul className="mt-4 space-y-2 border-t border-white/5 pt-3.5 text-xs text-white/65 leading-relaxed">
                {stage3.keyInquiries.map((inquiry) => (
                  <li key={inquiry} className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-yellow-400" />
                    <span>{inquiry}</span>
                  </li>
                ))}
              </ul>
            </div>
            {stage3.groundingDecision ? (
              <div className="mt-5 rounded-xl border border-white/10 bg-black/50 p-3.5 text-xs">
                <span className="text-[0.65rem] font-black uppercase tracking-[0.14em] text-yellow-300 block">
                  Applied Decision ({stage3.groundingDecision.project}):
                </span>
                <p className="mt-1 text-[0.72rem] text-white/75 leading-snug">
                  {stage3.groundingDecision.tradeoff}
                </p>
              </div>
            ) : null}
          </article>

          {/* Stage 04: NO CARD */}
          <div className="h-full flex flex-col justify-between p-6 sm:p-7">
            <div>
              <div className="flex items-center justify-between border-b border-white/8 pb-3">
                <span className="text-[0.68rem] font-black uppercase tracking-[0.16em] text-yellow-300">
                  STAGE 04 · DATA &amp; STATE
                </span>
                <span className="text-xs font-semibold text-white/50">Invariants</span>
              </div>
              <h3 className="display-type text-xl sm:text-2xl font-black text-white mt-3">
                {stage4.title}
              </h3>
              <p className="mt-1.5 text-xs font-semibold text-yellow-200/90">
                &ldquo;{stage4.coreQuestion}&rdquo;
              </p>
              <p className="mt-3 text-sm text-white/75 leading-relaxed">
                {stage4.summary}
              </p>
              <ul className="mt-4 space-y-2 border-t border-white/5 pt-3.5 text-xs text-white/65 leading-relaxed">
                {stage4.keyInquiries.map((inquiry) => (
                  <li key={inquiry} className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-yellow-400" />
                    <span>{inquiry}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Stage 05: CARD */}
          <article className="h-full flex flex-col justify-between rounded-[1.3rem] border border-white/12 bg-[#0e0e0e] p-6 sm:p-7 transition-all duration-300 hover:border-white/20 hover:bg-[#131313] shadow-sm">
            <div>
              <div className="flex items-center justify-between border-b border-white/8 pb-3">
                <span className="text-[0.68rem] font-black uppercase tracking-[0.16em] text-yellow-300">
                  STAGE 05 · DEFENSIVE CONTRACTS
                </span>
                <span className="text-xs font-semibold text-white/50">Failure Paths</span>
              </div>
              <h3 className="display-type text-xl sm:text-2xl font-black text-white mt-3">
                {stage5.title}
              </h3>
              <p className="mt-1.5 text-xs font-semibold text-yellow-200/90">
                &ldquo;{stage5.coreQuestion}&rdquo;
              </p>
              <p className="mt-3 text-sm text-white/75 leading-relaxed">
                {stage5.summary}
              </p>
              <ul className="mt-4 space-y-2 border-t border-white/5 pt-3.5 text-xs text-white/65 leading-relaxed">
                {stage5.keyInquiries.map((inquiry) => (
                  <li key={inquiry} className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-yellow-400" />
                    <span>{inquiry}</span>
                  </li>
                ))}
              </ul>
            </div>
            {stage5.groundingDecision ? (
              <div className="mt-5 rounded-xl border border-white/10 bg-black/50 p-3.5 text-xs">
                <span className="text-[0.65rem] font-black uppercase tracking-[0.14em] text-yellow-300 block">
                  Applied Decision ({stage5.groundingDecision.project}):
                </span>
                <p className="mt-1 text-[0.72rem] text-white/75 leading-snug">
                  {stage5.groundingDecision.tradeoff}
                </p>
              </div>
            ) : null}
          </article>

          {/* Stage 06: NO CARD */}
          <div className="h-full flex flex-col justify-between p-6 sm:p-7">
            <div>
              <div className="flex items-center justify-between border-b border-white/8 pb-3">
                <span className="text-[0.68rem] font-black uppercase tracking-[0.16em] text-yellow-300">
                  STAGE 06 · EXECUTION &amp; VALIDATION
                </span>
                <span className="text-xs font-semibold text-white/50">Verification</span>
              </div>
              <h3 className="display-type text-xl sm:text-2xl font-black text-white mt-3">
                {stage6.title}
              </h3>
              <p className="mt-1.5 text-xs font-semibold text-yellow-200/90">
                &ldquo;{stage6.coreQuestion}&rdquo;
              </p>
              <p className="mt-3 text-sm text-white/75 leading-relaxed">
                {stage6.summary}
              </p>
              <ul className="mt-4 space-y-2 border-t border-white/5 pt-3.5 text-xs text-white/65 leading-relaxed">
                {stage6.keyInquiries.map((inquiry) => (
                  <li key={inquiry} className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-yellow-400" />
                    <span>{inquiry}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Stage 07: CARD (Spanning full width across the 2-column grid) */}
          <article className="md:col-span-2 rounded-[1.3rem] border border-white/12 bg-[#0e0e0e] p-6 sm:p-8 transition-all duration-300 hover:border-white/20 hover:bg-[#131313] shadow-sm">
            <div className="flex items-center justify-between border-b border-white/8 pb-3">
              <span className="text-[0.68rem] font-black uppercase tracking-[0.16em] text-yellow-300">
                STAGE 07 · OPERATE &amp; ITERATE
              </span>
              <span className="text-xs font-semibold text-yellow-300/80">Continuous Loop ↻</span>
            </div>
            <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-start mt-4">
              <div>
                <h3 className="display-type text-xl sm:text-2xl font-black text-white">
                  {stage7.title}
                </h3>
                <p className="mt-1.5 text-xs font-semibold text-yellow-200/90">
                  &ldquo;{stage7.coreQuestion}&rdquo;
                </p>
                <p className="mt-3 text-sm text-white/75 leading-relaxed">
                  {stage7.summary}
                </p>
              </div>
              <div className="lg:border-l lg:border-white/10 lg:pl-6">
                <ul className="space-y-2 text-xs sm:text-sm text-white/65 leading-relaxed">
                  {stage7.keyInquiries.map((inquiry) => (
                    <li key={inquiry} className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-yellow-400" />
                      <span>{inquiry}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </article>
        </div>

        {/* BOTTOM OF SECTION: THE ENGINEERING SYNTHESIS & GATEWAY (NO CARD) */}
        <div className="mt-12 border-t border-white/12 pt-8 sm:pt-10">
          <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <div>
              <p className="section-kicker dark-kicker">The Engineering Synthesis</p>
              <h3 className="display-type mt-2.5 text-2xl sm:text-3xl font-black text-white">
                Architecture <span className="text-yellow-300">+</span> Trade-Offs{" "}
                <span className="text-yellow-300">+</span> Production Invariants
              </h3>
              <p className="mt-3 text-sm text-white/75 leading-relaxed max-w-2xl">
                Inspect the verified technical record on the Engineering page: multi-dimensional state machines, PostgreSQL Row-Level Security policies, idempotent checkout lifecycles, and live GitHub contribution activity.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 lg:justify-end">
              <Link
                href="/engineering"
                className="brand-focus-ring inline-flex min-h-11 items-center justify-center rounded-full bg-yellow-300 px-6 text-xs font-black text-black transition-colors hover:bg-yellow-200 shadow-sm"
              >
                Explore Engineering Record ↗
              </Link>
              <Link
                href="/work"
                className="brand-focus-ring inline-flex min-h-11 items-center justify-center rounded-full border border-white/20 bg-white/5 px-5 text-xs font-bold text-white transition-colors hover:bg-white/10"
              >
                Work Inventory
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
