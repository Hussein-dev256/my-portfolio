import Link from "next/link";
import { engineeringGateway } from "@/content/portfolio";

export function EngineeringGatewaySection() {
  return (
    <section
      id="deeper"
      className="stage-section bg-[#f6f0df] text-neutral-950"
      aria-labelledby="deeper-heading"
    >
      <div className="section-container">
        <div className="grid gap-10 lg:grid-cols-[0.72fr_1fr] lg:items-start">
          <div>
            <p className="section-kicker light-kicker">05 / Technical Depth</p>
            <h2 id="deeper-heading" className="brand-heading mt-4 max-w-2xl text-3xl sm:text-4xl">
              The technical record is there when a reviewer wants to{" "}
              <span className="editorial-type font-normal text-yellow-700">
                inspect.
              </span>
            </h2>
            <p className="brand-copy mt-5 max-w-xl text-neutral-700 text-sm sm:text-base leading-relaxed">
              The homepage provides an overview; the dedicated Engineering page contains the deeper architectural evidence senior engineers look for: 3-dimensional state machines, PostgreSQL Row-Level Security, idempotent checkout lifecycles, applied ML trade-offs, and live GitHub contribution activity.
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-4">
              <Link
                href="/engineering"
                className="brand-focus-ring inline-flex min-h-12 items-center justify-center rounded-full bg-black px-7 text-sm font-black text-white transition-colors hover:bg-[#1f1f1f]"
              >
                Explore Engineering Case Studies →
              </Link>
              <Link
                href="/engineering#github-activity"
                className="brand-focus-ring inline-flex min-h-12 items-center justify-center rounded-full border border-black/15 bg-white/60 px-5 text-xs font-bold text-neutral-800 transition-colors hover:bg-white"
              >
                View GitHub Activity
              </Link>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {engineeringGateway.map((item, index) => (
              <article
                key={item.title}
                className={`rounded-[1.3rem] p-6 border transition-all duration-200 ${
                  index === 0
                    ? "border-black/10 bg-white text-neutral-950 shadow-sm"
                    : index === 1
                    ? "border-black/10 bg-[#fff5d6] text-neutral-950"
                    : "border-black/10 bg-white text-neutral-950 shadow-sm"
                }`}
              >
                <div className="flex items-center justify-between">
                  <p className="text-[0.68rem] font-bold uppercase tracking-[0.16em] text-neutral-500">
                    Pillar 0{index + 1}
                  </p>
                  <span className="h-1.5 w-1.5 rounded-full bg-yellow-600" />
                </div>
                <h3 className="display-type mt-3 text-xl font-black text-neutral-950">{item.title}</h3>
                <p className="mt-3 text-xs font-medium leading-relaxed text-neutral-700">
                  {item.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
