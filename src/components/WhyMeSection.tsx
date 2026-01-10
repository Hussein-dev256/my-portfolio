export function WhyMeSection() {
  return (
    <section
      id="why-me"
      className="section-container"
      aria-labelledby="why-heading"
    >
      <div className="section-inner grid gap-8 md:grid-cols-[1.3fr_minmax(0,1fr)]">
        <div className="space-y-4">
          <h2
            id="why-heading"
            className="text-lg font-semibold uppercase tracking-[0.25em] text-emerald-300/80"
          >
            Why work with me
          </h2>
          <p className="text-sm leading-relaxed text-slate-200/85">
            I don&apos;t just build software — I build solutions that are practical,
            maintainable, and aligned with real-world needs. I communicate
            clearly, work transparently, and focus on delivering value, not just
            features.
          </p>
        </div>
        <ul className="space-y-2 text-sm text-slate-100/85">
          <li className="flex gap-3">
            <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald-400" />
            <span>Problem-solver mindset</span>
          </li>
          <li className="flex gap-3">
            <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald-400" />
            <span>Clean, scalable code</span>
          </li>
          <li className="flex gap-3">
            <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald-400" />
            <span>Business-oriented thinking</span>
          </li>
          <li className="flex gap-3">
            <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald-400" />
            <span>Reliable communication</span>
          </li>
          <li className="flex gap-3">
            <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald-400" />
            <span>Long-term support</span>
          </li>
        </ul>
      </div>
    </section>
  );
}
