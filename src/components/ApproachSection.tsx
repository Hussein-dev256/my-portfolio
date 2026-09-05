import Link from "next/link";
import { engineeringApproach } from "@/content/portfolio";

export function ApproachSection() {
  return (
    <section
      id="approach"
      className="stage-section bg-[#050505] text-white"
      aria-labelledby="approach-heading"
    >
      <div className="section-container">
        <div className="grid gap-8 lg:grid-cols-[0.7fr_1fr] lg:items-end">
          <div>
            <p className="section-kicker dark-kicker">How I approach software</p>
            <h2 id="approach-heading" className="brand-heading mt-4">
              Structure before{" "}
              <span className="editorial-type font-normal text-yellow-300">
                motion.
              </span>
            </h2>
          </div>
          <p className="brand-copy max-w-2xl text-white/68">
            The strongest engineering signal is not a long list of tools. It is
            whether the system shows boundaries, data thinking, recoverable
            failure paths, and decisions appropriate to its scale.
          </p>
        </div>

        <div className="mt-10 grid gap-3 md:grid-cols-5">
          {engineeringApproach.map((item, index) => (
            <article
              key={item.title}
              className={`rounded-[1.2rem] p-5 ${
                index === 1
                  ? "bg-yellow-300 text-black md:translate-y-8"
                  : "bg-[#141414] text-white"
              }`}
            >
              <p className={`text-3xl font-black ${index === 1 ? "text-black" : "text-yellow-300"}`}>
                0{index + 1}
              </p>
              <h3 className="mt-6 text-xl font-black leading-tight">{item.title}</h3>
              <p className={`mt-3 text-sm leading-6 ${index === 1 ? "text-black/70" : "text-white/62"}`}>
                {item.body}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-16 flex flex-col justify-between gap-5 border-y border-white/10 py-6 sm:flex-row sm:items-center">
          <p className="display-type text-2xl leading-tight sm:text-3xl">
            Architecture <span className="mx-3 text-yellow-300">+</span> Trade-offs{" "}
            <span className="mx-3 text-yellow-300">+</span> Production
          </p>
          <Link
            href="/engineering"
            className="brand-focus-ring inline-flex min-h-11 w-fit items-center justify-center rounded-full bg-yellow-300 px-5 text-sm font-black text-black transition-colors hover:bg-yellow-200"
          >
            Explore Engineering
          </Link>
        </div>
      </div>
    </section>
  );
}
