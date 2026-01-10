import { siteConfig } from "@/config/siteConfig";

export function ValueSection() {
  return (
    <section
      id="value"
      className="section-container"
      aria-labelledby="value-heading"
    >
      <div className="section-inner space-y-4 text-center md:text-left">
        <h2
          id="value-heading"
          className="text-2xl font-semibold leading-tight text-emerald-50 md:text-3xl lg:text-4xl"
        >
          {siteConfig.heroTagline}
        </h2>
        <p className="mx-auto max-w-3xl text-sm leading-relaxed text-slate-200/80 md:text-base">
          Software engineering is not just about writing code. It&apos;s about
          solving real problems, improving processes, and building systems that
          are fast, secure, maintainable, and scalable. I focus on creating
          solutions that make businesses more efficient, visible, and
          profitable.
        </p>
      </div>
    </section>
  );
}
