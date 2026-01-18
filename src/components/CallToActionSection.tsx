import Link from "next/link";
import type { MouseEvent } from "react";

export function CallToActionSection() {
  return (
    <section
      id="cta"
      className="section-container"
      aria-labelledby="cta-heading"
    >
      <div className="section-inner flex flex-col items-center gap-4 text-center md:flex-row md:items-center md:justify-between md:text-left">
        <div className="space-y-2">
          <h2
            id="cta-heading"
            className="text-2xl font-semibold text-emerald-50 md:text-3xl"
          >
            Have a project in mind or looking to hire a software engineer?
          </h2>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <Link
            href="#contact"
            onClick={(event: MouseEvent<HTMLAnchorElement>) => {
              event.preventDefault();
              const target = document.getElementById("contact");
              if (target) {
                target.scrollIntoView({ behavior: "smooth", block: "start" });
              }
            }}
            className="gradient-pill text-sm"
          >
            Hire me
          </Link>
          <Link
            href="#work"
            onClick={(event: MouseEvent<HTMLAnchorElement>) => {
              event.preventDefault();
              const target = document.getElementById("work");
              if (target) {
                target.scrollIntoView({ behavior: "smooth", block: "start" });
              }
            }}
            className="rounded-full border border-emerald-500/40 px-5 py-2 text-sm font-medium text-emerald-100 transition-colors hover:bg-emerald-500 hover:text-emerald-950"
          >
            View my work
          </Link>
        </div>
      </div>
    </section>
  );
}
