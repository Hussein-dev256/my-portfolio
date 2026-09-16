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
      className="stage-section bg-[#f6f0df] text-neutral-950 border-t border-black/10"
      aria-labelledby="approach-heading"
    >
      <div className="section-container">
        {/* Section Header */}
        <div className="border-b border-black/10 pb-8">
          <p className="section-kicker light-kicker">How I approach software</p>
          <h2
            id="approach-heading"
            className="display-type mt-4 text-3xl sm:text-4xl lg:text-[3.25rem] font-bold leading-[0.95] text-neutral-950 tracking-tight"
          >
            <span className="block">Reasoning from ambiguity</span>
            <span className="block">
              to{" "}
              <span className="editorial-type font-normal text-yellow-700">
                working systems.
              </span>
            </span>
          </h2>
          <p className="mt-5 max-w-2xl text-sm sm:text-[0.95rem] font-medium leading-relaxed text-neutral-700 border-l-2 border-neutral-900/20 pl-4">
            I do not start with &ldquo;which framework should I use?&rdquo; I begin by understanding the problem,
            isolating constraints, defining system boundaries, modeling relational state, designing defensive failure
            modes, and closing the loop with continuous observability.
          </p>
        </div>

        {/* Stages Strip - Exactly 1 Line Above, All 7 Stages Fit Completely On One Line */}
        <div className="mt-7 w-full overflow-x-auto no-scrollbar pb-1.5 pt-0.5">
          <div className="flex items-center justify-between min-w-[560px] sm:min-w-0 w-full gap-1 sm:gap-1.5 lg:gap-2 text-[0.62rem] sm:text-[0.72rem] md:text-xs font-bold">
            <span className="whitespace-nowrap rounded-xl border border-black/10 bg-white px-2 sm:px-3 py-1.5 text-neutral-950 flex-1 text-center shadow-xs">
              01. Understand
            </span>
            <span className="text-neutral-400 text-[0.65rem] sm:text-xs shrink-0 select-none">➔</span>
            <span className="whitespace-nowrap rounded-xl border border-black/10 bg-white px-2 sm:px-3 py-1.5 text-neutral-950 flex-1 text-center shadow-xs">
              02. Constraints
            </span>
            <span className="text-neutral-400 text-[0.65rem] sm:text-xs shrink-0 select-none">➔</span>
            <span className="whitespace-nowrap rounded-xl border border-black/10 bg-white px-2 sm:px-3 py-1.5 text-neutral-950 flex-1 text-center shadow-xs">
              03. Architecture
            </span>
            <span className="text-neutral-400 text-[0.65rem] sm:text-xs shrink-0 select-none">➔</span>
            <span className="whitespace-nowrap rounded-xl border border-black/10 bg-white px-2 sm:px-3 py-1.5 text-neutral-950 flex-1 text-center shadow-xs">
              04. Data &amp; State
            </span>
            <span className="text-neutral-400 text-[0.65rem] sm:text-xs shrink-0 select-none">➔</span>
            <span className="whitespace-nowrap rounded-xl border border-black/10 bg-white px-2 sm:px-3 py-1.5 text-neutral-950 flex-1 text-center shadow-xs">
              05. Defensive Contracts
            </span>
            <span className="text-neutral-400 text-[0.65rem] sm:text-xs shrink-0 select-none">➔</span>
            <span className="whitespace-nowrap rounded-xl border border-black/10 bg-white px-2 sm:px-3 py-1.5 text-neutral-950 flex-1 text-center shadow-xs">
              06. Build &amp; Validate
            </span>
            <span className="text-neutral-400 text-[0.65rem] sm:text-xs shrink-0 select-none">➔</span>
            <span className="whitespace-nowrap rounded-xl border border-yellow-600/40 bg-yellow-100 px-2 sm:px-3 py-1.5 text-yellow-900 flex-1 text-center shadow-xs font-black">
              07. Observe &amp; Iterate
            </span>
          </div>
        </div>

        {/* ALTERNATING CARD / NO-CARD STAGES GRID */}
        <div className="mt-10 grid gap-6 md:grid-cols-2 items-stretch">
          {/* Stage 01: CARD */}
          <article className="h-full flex flex-col justify-between rounded-[1.3rem] border border-black/10 bg-white p-6 sm:p-7 transition-all duration-300 hover:border-black/25 shadow-xs">
            <div>
              <div className="flex items-center justify-between border-b border-black/8 pb-3">
                <span className="text-[0.68rem] font-black uppercase tracking-[0.16em] text-neutral-500">
                  STAGE 01 · PROBLEM SCOPE
                </span>
                <span className="text-xs font-semibold text-neutral-400">Deconstruction</span>
              </div>
              <h3 className="display-type text-xl sm:text-2xl font-black text-neutral-950 mt-3">
                {stage1.title}
              </h3>
              <p className="mt-1.5 text-xs font-semibold text-yellow-800">
                &ldquo;{stage1.coreQuestion}&rdquo;
              </p>
              <p className="mt-3 text-sm text-neutral-700 leading-relaxed">
                {stage1.summary}
              </p>
              <ul className="mt-4 space-y-2 border-t border-black/8 pt-3.5 text-xs text-neutral-600 leading-relaxed">
                {stage1.keyInquiries.map((inquiry) => (
                  <li key={inquiry} className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-neutral-900" />
                    <span>{inquiry}</span>
                  </li>
                ))}
              </ul>
            </div>
          </article>

          {/* Stage 02: NO CARD */}
          <div className="h-full flex flex-col justify-between p-6 sm:p-7">
            <div>
              <div className="flex items-center justify-between border-b border-black/8 pb-3">
                <span className="text-[0.68rem] font-black uppercase tracking-[0.16em] text-neutral-500">
                  STAGE 02 · HARD CONSTRAINTS
                </span>
                <span className="text-xs font-semibold text-neutral-400">Requirements</span>
              </div>
              <h3 className="display-type text-xl sm:text-2xl font-black text-neutral-950 mt-3">
                {stage2.title}
              </h3>
              <p className="mt-1.5 text-xs font-semibold text-yellow-800">
                &ldquo;{stage2.coreQuestion}&rdquo;
              </p>
              <p className="mt-3 text-sm text-neutral-700 leading-relaxed">
                {stage2.summary}
              </p>
              <ul className="mt-4 space-y-2 border-t border-black/8 pt-3.5 text-xs text-neutral-600 leading-relaxed">
                {stage2.keyInquiries.map((inquiry) => (
                  <li key={inquiry} className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-neutral-900" />
                    <span>{inquiry}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Stage 03: CARD */}
          <article className="h-full flex flex-col justify-between rounded-[1.3rem] border border-black/10 bg-white p-6 sm:p-7 transition-all duration-300 hover:border-black/25 shadow-xs">
            <div>
              <div className="flex items-center justify-between border-b border-black/8 pb-3">
                <span className="text-[0.68rem] font-black uppercase tracking-[0.16em] text-neutral-500">
                  STAGE 03 · SYSTEM ARCHITECTURE
                </span>
                <span className="text-xs font-semibold text-neutral-400">Boundaries</span>
              </div>
              <h3 className="display-type text-xl sm:text-2xl font-black text-neutral-950 mt-3">
                {stage3.title}
              </h3>
              <p className="mt-1.5 text-xs font-semibold text-yellow-800">
                &ldquo;{stage3.coreQuestion}&rdquo;
              </p>
              <p className="mt-3 text-sm text-neutral-700 leading-relaxed">
                {stage3.summary}
              </p>
              <ul className="mt-4 space-y-2 border-t border-black/8 pt-3.5 text-xs text-neutral-600 leading-relaxed">
                {stage3.keyInquiries.map((inquiry) => (
                  <li key={inquiry} className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-neutral-900" />
                    <span>{inquiry}</span>
                  </li>
                ))}
              </ul>
            </div>
            {stage3.groundingDecision ? (
              <div className="mt-5 rounded-xl border border-black/10 bg-[#faf7f0] p-3.5 text-xs">
                <span className="text-[0.65rem] font-black uppercase tracking-[0.14em] text-neutral-700 block">
                  Applied Decision ({stage3.groundingDecision.project}):
                </span>
                <p className="mt-1 text-[0.72rem] text-neutral-600 leading-snug">
                  {stage3.groundingDecision.tradeoff}
                </p>
              </div>
            ) : null}
          </article>

          {/* Stage 04: NO CARD */}
          <div className="h-full flex flex-col justify-between p-6 sm:p-7">
            <div>
              <div className="flex items-center justify-between border-b border-black/8 pb-3">
                <span className="text-[0.68rem] font-black uppercase tracking-[0.16em] text-neutral-500">
                  STAGE 04 · DATA &amp; STATE
                </span>
                <span className="text-xs font-semibold text-neutral-400">Invariants</span>
              </div>
              <h3 className="display-type text-xl sm:text-2xl font-black text-neutral-950 mt-3">
                {stage4.title}
              </h3>
              <p className="mt-1.5 text-xs font-semibold text-yellow-800">
                &ldquo;{stage4.coreQuestion}&rdquo;
              </p>
              <p className="mt-3 text-sm text-neutral-700 leading-relaxed">
                {stage4.summary}
              </p>
              <ul className="mt-4 space-y-2 border-t border-black/8 pt-3.5 text-xs text-neutral-600 leading-relaxed">
                {stage4.keyInquiries.map((inquiry) => (
                  <li key={inquiry} className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-neutral-900" />
                    <span>{inquiry}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Stage 05: CARD */}
          <article className="h-full flex flex-col justify-between rounded-[1.3rem] border border-black/10 bg-white p-6 sm:p-7 transition-all duration-300 hover:border-black/25 shadow-xs">
            <div>
              <div className="flex items-center justify-between border-b border-black/8 pb-3">
                <span className="text-[0.68rem] font-black uppercase tracking-[0.16em] text-neutral-500">
                  STAGE 05 · DEFENSIVE CONTRACTS
                </span>
                <span className="text-xs font-semibold text-neutral-400">Failure Paths</span>
              </div>
              <h3 className="display-type text-xl sm:text-2xl font-black text-neutral-950 mt-3">
                {stage5.title}
              </h3>
              <p className="mt-1.5 text-xs font-semibold text-yellow-800">
                &ldquo;{stage5.coreQuestion}&rdquo;
              </p>
              <p className="mt-3 text-sm text-neutral-700 leading-relaxed">
                {stage5.summary}
              </p>
              <ul className="mt-4 space-y-2 border-t border-black/8 pt-3.5 text-xs text-neutral-600 leading-relaxed">
                {stage5.keyInquiries.map((inquiry) => (
                  <li key={inquiry} className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-neutral-900" />
                    <span>{inquiry}</span>
                  </li>
                ))}
              </ul>
            </div>
            {stage5.groundingDecision ? (
              <div className="mt-5 rounded-xl border border-black/10 bg-[#faf7f0] p-3.5 text-xs">
                <span className="text-[0.65rem] font-black uppercase tracking-[0.14em] text-neutral-700 block">
                  Applied Decision ({stage5.groundingDecision.project}):
                </span>
                <p className="mt-1 text-[0.72rem] text-neutral-600 leading-snug">
                  {stage5.groundingDecision.tradeoff}
                </p>
              </div>
            ) : null}
          </article>

          {/* Stage 06: NO CARD */}
          <div className="h-full flex flex-col justify-between p-6 sm:p-7">
            <div>
              <div className="flex items-center justify-between border-b border-black/8 pb-3">
                <span className="text-[0.68rem] font-black uppercase tracking-[0.16em] text-neutral-500">
                  STAGE 06 · EXECUTION &amp; VALIDATION
                </span>
                <span className="text-xs font-semibold text-neutral-400">Verification</span>
              </div>
              <h3 className="display-type text-xl sm:text-2xl font-black text-neutral-950 mt-3">
                {stage6.title}
              </h3>
              <p className="mt-1.5 text-xs font-semibold text-yellow-800">
                &ldquo;{stage6.coreQuestion}&rdquo;
              </p>
              <p className="mt-3 text-sm text-neutral-700 leading-relaxed">
                {stage6.summary}
              </p>
              <ul className="mt-4 space-y-2 border-t border-black/8 pt-3.5 text-xs text-neutral-600 leading-relaxed">
                {stage6.keyInquiries.map((inquiry) => (
                  <li key={inquiry} className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-neutral-900" />
                    <span>{inquiry}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Stage 07: CARD (Spanning full width across the 2-column grid) */}
          <article className="md:col-span-2 rounded-[1.3rem] border border-black/10 bg-white p-6 sm:p-8 transition-all duration-300 hover:border-black/25 shadow-xs">
            <div className="flex items-center justify-between border-b border-black/8 pb-3">
              <span className="text-[0.68rem] font-black uppercase tracking-[0.16em] text-neutral-500">
                STAGE 07 · OPERATE &amp; ITERATE
              </span>
              <span className="text-xs font-semibold text-yellow-800">Continuous Loop ↻</span>
            </div>
            <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-start mt-4">
              <div>
                <h3 className="display-type text-xl sm:text-2xl font-black text-neutral-950">
                  {stage7.title}
                </h3>
                <p className="mt-1.5 text-xs font-semibold text-yellow-800">
                  &ldquo;{stage7.coreQuestion}&rdquo;
                </p>
                <p className="mt-3 text-sm text-neutral-700 leading-relaxed">
                  {stage7.summary}
                </p>
              </div>
              <div className="lg:border-l lg:border-black/10 lg:pl-6">
                <ul className="space-y-2 text-xs sm:text-sm text-neutral-600 leading-relaxed">
                  {stage7.keyInquiries.map((inquiry) => (
                    <li key={inquiry} className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-neutral-900" />
                      <span>{inquiry}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </article>
        </div>

        {/* BOTTOM OF SECTION: THE ENGINEERING SYNTHESIS & GATEWAY (NO CARD) */}
        <div className="mt-12 border-t border-black/12 pt-8 sm:pt-10">
          <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <div>
              <p className="section-kicker light-kicker">The Engineering Synthesis</p>
              <h3 className="display-type mt-2.5 text-2xl sm:text-3xl font-black text-neutral-950">
                Architecture <span className="text-yellow-700">+</span> Trade-Offs{" "}
                <span className="text-yellow-700">+</span> Production Invariants
              </h3>
              <p className="mt-3 text-sm text-neutral-700 leading-relaxed max-w-2xl">
                Inspect the verified technical record on the Engineering page: multi-dimensional state machines, PostgreSQL Row-Level Security policies, idempotent checkout lifecycles, and live GitHub contribution activity.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 lg:justify-end">
              <Link
                href="/engineering"
                className="brand-focus-ring inline-flex min-h-11 items-center justify-center rounded-full bg-neutral-950 px-6 text-xs font-black text-white transition-colors hover:bg-neutral-800 shadow-sm"
              >
                Explore Engineering Record ↗
              </Link>
              <Link
                href="/work"
                className="brand-focus-ring inline-flex min-h-11 items-center justify-center rounded-full border border-black/15 bg-white px-5 text-xs font-bold text-neutral-800 transition-colors hover:bg-neutral-100"
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
