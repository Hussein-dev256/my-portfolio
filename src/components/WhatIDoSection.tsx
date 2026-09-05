import { whatIDo } from "@/content/portfolio";

export function WhatIDoSection() {
  return (
    <section
      id="capability"
      className="stage-section bg-[#f6f0df] text-neutral-950"
      aria-labelledby="capability-heading"
    >
      <div className="section-container">
        {/* Top Section Kicker */}
        <div className="mb-6 sm:mb-8">
          <p className="section-kicker light-kicker">What I do</p>
        </div>

        {/* 2-Column Balanced Header Layout */}
        <div className="grid gap-6 lg:grid-cols-[1.12fr_0.88fr] lg:items-end lg:gap-14">
          <div>
            <h2 id="capability-heading" className="brand-heading text-balance">
              I build software systems from{" "}
              <span className="editorial-type font-normal text-yellow-700">
                interface to implementation.
              </span>
            </h2>
          </div>

          <div className="lg:pb-1.5">
            <p className="border-l-2 border-neutral-900/20 pl-4 text-sm font-medium leading-relaxed text-neutral-700 sm:text-[0.95rem] sm:leading-7">
              I work across the stack to turn product requirements into functional software—connecting user interfaces, backend services, data models, and, where appropriate, AI-powered capabilities.
            </p>
          </div>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {whatIDo.map((item, index) => (
            <article
              key={item.title}
              className={`flex flex-col justify-between rounded-[1.25rem] p-5 sm:p-6 ${
                index === 0
                  ? "bg-[#080807] text-white"
                  : index === 3
                    ? "bg-yellow-300 text-black"
                    : "bg-white text-neutral-950"
              }`}
            >
              <div>
                <p
                  className={`text-[0.68rem] font-black uppercase tracking-[0.16em] ${
                    index === 0 ? "text-yellow-200" : "text-neutral-500"
                  }`}
                >
                  0{index + 1}
                </p>
                <h3 className="mt-3 text-2xl font-black leading-tight">
                  {item.title}
                </h3>
                <p
                  className={`mt-4 text-sm font-medium leading-6 sm:leading-7 ${
                    index === 0 ? "text-white/70" : "text-neutral-700"
                  }`}
                >
                  {item.body}
                </p>
              </div>

              <div
                className={`mt-6 border-t pt-4 ${
                  index === 0 ? "border-white/12" : "border-black/10"
                }`}
              >
                <p
                  className={`text-[0.62rem] font-black uppercase tracking-[0.16em] ${
                    index === 0
                      ? "text-yellow-200"
                      : index === 3
                        ? "text-black/60"
                        : "text-neutral-500"
                  }`}
                >
                  Built in practice
                </p>
                <p
                  className={`mt-1.5 text-xs font-semibold leading-5 ${
                    index === 0
                      ? "text-white/85"
                      : index === 3
                        ? "text-neutral-950"
                        : "text-neutral-800"
                  }`}
                >
                  {item.evidence}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
