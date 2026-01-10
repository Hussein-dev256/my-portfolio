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
          Software engineering is not just about writing code. It’s about solving real problems, improving processes, and building systems that are fast, secure, maintainable, and scalable. I focus on creating solutions that make businesses more efficient, visible, and profitable.<br />
          My core stack—PostgreSQL, TypeScript with NestJS, React, and Node.js—is chosen for reliability, clarity, and scale. PostgreSQL ensures data integrity, TypeScript enforces correctness, NestJS enables well-structured backend systems, and React delivers responsive, modern user experiences.<br />
          I also work with Python and C++, which strengthens my analytical thinking, performance awareness, and problem-solving depth. This cross-stack experience allows me to understand systems beyond frameworks and make sound technical decisions.<br />
          I think in systems, not just features. I break down complex problems, evaluate trade-offs, and build solutions that are efficient, maintainable, and production-ready.
        </p>
      </div>
    </section>
  );
}
