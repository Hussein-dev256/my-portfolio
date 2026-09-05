import type { Metadata } from "next";
import { RouteHeader } from "@/components/RouteHeader";
import { engineeringCaseStudies } from "@/content/portfolio";

export const metadata: Metadata = {
  title: "Engineering | Mafabi Hussein",
  description:
    "Engineering case studies for Mafabi Hussein's portfolio, covering architecture, decisions, constraints, trade-offs, and future improvements.",
};

export default function EngineeringPage() {
  return (
    <main className="overflow-x-clip bg-[#070707] text-white">
      <RouteHeader
        kicker="Engineering"
        title={
          <>
            How the systems were{" "}
            <span className="editorial-type font-normal text-yellow-700">engineered.</span>
          </>
        }
      >
        This section goes deeper than project screenshots: architecture,
        responsibilities, constraints, decisions, trade-offs, and what would
        change in future iterations.
      </RouteHeader>

      <section className="stage-section bg-[#070707]">
        <div className="section-container">
          <div className="grid gap-4 md:grid-cols-2">
            {engineeringCaseStudies.map((study) => (
              <a
                key={study.slug}
                href={`#${study.slug}`}
                className="brand-focus-ring rounded-[1.25rem] border border-yellow-200/24 bg-white/[0.055] p-5 transition duration-300 hover:-translate-y-1 hover:border-yellow-200/52"
              >
                <p className="text-[0.68rem] font-black uppercase tracking-[0.16em] text-yellow-200">
                  Case study
                </p>
                <h2 className="mt-3 text-2xl font-black">{study.projectName}</h2>
                <p className="mt-2 text-sm leading-6 text-white/64">{study.headline}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {engineeringCaseStudies.map((study, index) => (
        <section
          key={study.slug}
          id={study.slug}
          className={`stage-section ${index % 2 === 0 ? "bg-[#070707]" : "bg-[#f7efd9] text-neutral-950"}`}
          aria-labelledby={`${study.slug}-heading`}
        >
          <div className="section-container">
            <article>
              <div className="grid gap-7 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
                <div>
                  <p className={`section-kicker ${index % 2 === 0 ? "dark-kicker" : "light-kicker"}`}>
                    {index + 1 < 10 ? `0${index + 1}` : index + 1} / {study.projectName}
                  </p>
                  <h2
                    id={`${study.slug}-heading`}
                    className={`brand-heading mt-4 ${index % 2 === 0 ? "text-white" : "text-neutral-950"}`}
                  >
                    {study.headline}
                  </h2>
                  <p className={`brand-copy mt-5 ${index % 2 === 0 ? "text-white/70" : "text-neutral-700"}`}>
                    {study.context}
                  </p>
                  <div className={`mt-5 rounded-[1.15rem] border p-4 ${
                    index % 2 === 0
                      ? "border-yellow-200/22 bg-yellow-300/10 text-yellow-100"
                      : "border-black/12 bg-[#fff7df] text-neutral-800"
                  }`}>
                    <p className="text-[0.68rem] font-black uppercase tracking-[0.16em]">
                      My responsibility
                    </p>
                    <p className="mt-2 text-sm font-semibold leading-6">{study.responsibility}</p>
                  </div>
                </div>

                <ArchitectureDiagram items={study.architecture} dark={index % 2 === 0} />
              </div>

              <div className="mt-8 grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
                <div>
                  <h3 className={`text-2xl font-black ${index % 2 === 0 ? "text-white" : "text-neutral-950"}`}>
                    Key technical decisions
                  </h3>
                  <div className="mt-4 grid gap-4">
                    {study.decisions.map((decision) => (
                      <section
                        key={decision.title}
                        className={`rounded-[1.15rem] border p-4 ${
                          index % 2 === 0
                            ? "border-white/12 bg-black/34"
                            : "border-black/12 bg-white"
                        }`}
                      >
                        <h4 className="text-lg font-black">{decision.title}</h4>
                        <DecisionLine label="Decision" text={decision.decision} />
                        <DecisionLine label="Alternatives" text={decision.alternatives} />
                        <DecisionLine label="Reasoning" text={decision.reasoning} />
                        <DecisionLine label="Outcome" text={decision.outcome} />
                      </section>
                    ))}
                  </div>
                </div>

                <div className="grid gap-4">
                  <EvidenceList title="Constraints" items={study.constraints} dark={index % 2 === 0} />
                  <div className={`rounded-[1.15rem] border p-4 ${
                    index % 2 === 0
                      ? "border-yellow-200/22 bg-yellow-300/10"
                      : "border-black/12 bg-[#fff7df]"
                  }`}>
                    <h3 className="text-xl font-black">Trade-offs</h3>
                    <div className="mt-4 grid gap-3">
                      {study.tradeOffs.map((tradeOff) => (
                        <div key={tradeOff.gained} className="grid gap-2 text-sm leading-6">
                          <p>
                            <span className="font-black">Gained:</span> {tradeOff.gained}
                          </p>
                          <p>
                            <span className="font-black">Sacrificed:</span> {tradeOff.sacrificed}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <EvidenceList title="What I would improve" items={study.future} dark={index % 2 === 0} />
                </div>
              </div>
            </article>
          </div>
        </section>
      ))}
    </main>
  );
}

function ArchitectureDiagram({
  items,
  dark,
}: {
  items: readonly string[];
  dark: boolean;
}) {
  return (
    <div className={`rounded-[1.25rem] border p-4 ${
      dark ? "border-yellow-200/24 bg-black/38" : "border-black/12 bg-white"
    }`}>
      <p className={`text-[0.68rem] font-black uppercase tracking-[0.16em] ${dark ? "text-yellow-200" : "text-neutral-500"}`}>
        System at a glance
      </p>
      <div className="mt-5 grid gap-3">
        {items.map((item, itemIndex) => (
          <div key={item} className="grid gap-3">
            <div className={`rounded-[1rem] border px-4 py-3 text-sm font-black ${
              dark
                ? "border-yellow-200/20 bg-white/[0.06] text-white"
                : "border-black/12 bg-[#fff7df] text-neutral-950"
            }`}>
              {item}
            </div>
            {itemIndex < items.length - 1 ? (
              <div className="flex justify-center" aria-hidden="true">
                <span className={`h-8 w-px ${dark ? "bg-yellow-200/34" : "bg-black/18"}`} />
              </div>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
}

function DecisionLine({ label, text }: { label: string; text: string }) {
  return (
    <p className="mt-3 text-sm leading-6 opacity-80">
      <span className="font-black">{label}:</span> {text}
    </p>
  );
}

function EvidenceList({
  title,
  items,
  dark,
}: {
  title: string;
  items: readonly string[];
  dark: boolean;
}) {
  return (
    <section className={`rounded-[1.15rem] border p-4 ${
      dark ? "border-white/12 bg-black/34" : "border-black/12 bg-white"
    }`}>
      <h3 className="text-xl font-black">{title}</h3>
      <ul className="mt-4 grid gap-3 text-sm leading-6 opacity-80">
        {items.map((item) => (
          <li key={item} className="grid grid-cols-[0.7rem_1fr] gap-3">
            <span className="mt-2 h-2 w-2 rounded-full bg-yellow-300" aria-hidden="true" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
