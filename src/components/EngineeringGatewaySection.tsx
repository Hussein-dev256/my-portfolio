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
            <p className="section-kicker light-kicker">Deeper engineering exploration</p>
            <h2 id="deeper-heading" className="brand-heading mt-4 max-w-2xl">
              The technical record is there when a reviewer wants to{" "}
              <span className="editorial-type font-normal text-yellow-700">
                inspect.
              </span>
            </h2>
            <p className="brand-copy mt-5 max-w-xl text-neutral-700">
              The homepage should not become a complete technical case study.
              The Engineering section exists for the deeper questions a
              skeptical reviewer is likely to ask.
            </p>
            <Link
              href="/engineering"
              className="brand-focus-ring mt-7 inline-flex min-h-12 items-center rounded-full bg-black px-6 text-sm font-black text-white transition-colors hover:bg-[#181818]"
            >
              Open Engineering
            </Link>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {engineeringGateway.map((item, index) => (
              <article
                key={item.title}
                className={`rounded-[1.2rem] p-5 ${
                  index === 1 ? "bg-yellow-300 text-black" : "bg-white text-neutral-950"
                }`}
              >
                <p className="text-[0.68rem] font-black uppercase tracking-[0.16em] text-neutral-500">
                  0{index + 1}
                </p>
                <h3 className="mt-3 text-2xl font-black">{item.title}</h3>
                <p className="mt-3 text-sm font-semibold leading-7 text-neutral-700">
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
