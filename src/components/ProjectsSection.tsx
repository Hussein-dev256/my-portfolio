import Image from "next/image";
import Link from "next/link";
import { featuredProjects, secondaryProjects } from "@/content/portfolio";

type FeaturedProject = (typeof featuredProjects)[number];

export function ProjectsSection() {
  const [primary, secondary] = featuredProjects;

  return (
    <section
      id="work"
      className="stage-section border-t border-white/10 bg-[#050505] text-white"
      aria-labelledby="projects-heading"
    >
      <div className="section-container">
        {/* 1. SECTION HEADER */}
        <header className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end lg:gap-10">
          <div className="max-w-3xl">
            <p className="section-kicker dark-kicker">Selected work</p>
            <h2 id="projects-heading" className="brand-heading mt-3.5 text-white text-balance">
              Work that makes{" "}
              <span className="editorial-type font-normal text-yellow-300">
                the engineering visible.
              </span>
            </h2>
            <p className="brand-copy mt-3.5 max-w-2xl text-white/70">
              These flagship systems make earlier capabilities concrete through real implementation:
              product architecture, backend decisions, data modeling, deployment constraints, and
              the trade-offs required to get working software across the line.
            </p>
          </div>

          <div className="lg:pb-1">
            <Link
              href="/work"
              className="brand-focus-ring inline-flex min-h-10 w-fit items-center justify-center rounded-full bg-yellow-300 px-5 text-xs font-black text-black transition-colors hover:bg-yellow-200"
            >
              View all work
            </Link>
          </div>
        </header>

        {/* DELIBERATE STARTING BOUNDARY FOR FLAGSHIP PROJECTS */}
        <div className="mt-8 flex items-center gap-4 border-t border-white/20 pt-3">
          <span className="text-[0.62rem] font-bold uppercase tracking-[0.24em] text-white/45">
            01 / Flagship Software Systems
          </span>
          <div className="h-px flex-1 bg-white/10" />
        </div>

        {/* FLAGSHIP PROJECTS (Open Editorial Composition with Deliberate Boundaries) */}
        <div className="mt-8">
          {primary ? <FlagshipProject project={primary} /> : null}

          {/* DELIBERATE BOUNDARY BETWEEN FLAGSHIP PROJECTS */}
          <div className="my-10 border-t border-white/12" aria-hidden="true" />

          {secondary ? <FlagshipProject project={secondary} isReversed /> : null}
        </div>

        {/* 2. ADDITIONAL PUBLIC WORK (Moved before 'What This Proves') */}
        <div className="mt-12 border-t border-white/20 pt-8 lg:mt-14">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="section-kicker dark-kicker">Additional Public Work</p>
              <h3 className="display-type mt-2.5 text-2xl font-black text-white sm:text-3xl">
                Production platforms &amp; client websites
              </h3>
            </div>
            <Link
              href="/work"
              className="text-xs font-bold uppercase tracking-wider text-yellow-300 transition-colors hover:text-yellow-200"
            >
              See complete inventory →
            </Link>
          </div>

          {/* Editorial Grid with Subtle Vertical Separators */}
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {secondaryProjects.map((project, idx) => (
              <div
                key={project.name}
                className={`flex flex-col justify-between pt-1 ${
                  idx > 0 ? "lg:border-l lg:border-white/15 lg:pl-5" : ""
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <p className="text-[0.6rem] font-black uppercase tracking-[0.16em] text-yellow-200/85">
                      {project.type}
                    </p>
                    <span className="text-xs text-white/40">↗</span>
                  </div>
                  <h4 className="mt-1.5 text-base font-bold text-white">
                    {project.name}
                  </h4>
                  <p className="mt-2 text-xs font-normal leading-relaxed text-white/70">
                    {project.description}
                  </p>
                </div>

                <div className="mt-4 border-t border-white/10 pt-3">
                  <div className="flex flex-wrap gap-1 text-[0.65rem] font-semibold text-white/50">
                    {project.stack.map((t, sIdx) => (
                      <span key={t}>
                        {t}{sIdx < project.stack.length - 1 ? " ·" : ""}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="brand-focus-ring mt-3 inline-flex items-center text-xs font-bold text-yellow-300 transition-colors hover:text-yellow-200"
                  >
                    <span>Visit live platform</span>
                    <span className="ml-1" aria-hidden="true">↗</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3. WHAT THIS PROVES (Moved after Additional Public Work) */}
        <div className="mt-12 border-t border-white/20 pt-8 lg:mt-14">
          <div className="grid gap-6 lg:grid-cols-[0.45fr_1fr] lg:items-start lg:gap-10">
            <div>
              <p className="section-kicker dark-kicker">What this proves</p>
              <h3 className="display-type mt-2.5 text-2xl font-black leading-tight text-white sm:text-3xl">
                Evidence a reviewer can question.
              </h3>
              <p className="mt-2 text-xs font-normal leading-relaxed text-white/65">
                Real software engineering isn't just about code that executes on localhost—it is
                about architectural boundaries, navigating real infrastructure limits, and
                managing delivery scope.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-3">
              {[
                {
                  title: "Boundaries",
                  body:
                    "Oakley separates customer and vendor workflows around a shared backend and PostgreSQL data layer.",
                },
                {
                  title: "Constraints",
                  body:
                    "The payment flow is presented as a practical workaround, not a fictional direct payment API integration.",
                },
                {
                  title: "Scope control",
                  body:
                    "ObjectID explains why the delivered version used an external recognition API after local inference proved too broad for the timeline.",
                },
              ].map((item) => (
                <div key={item.title} className="border-l border-white/20 pl-4">
                  <h4 className="text-base font-bold text-yellow-200">{item.title}</h4>
                  <p className="mt-1.5 text-xs font-normal leading-relaxed text-white/65">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* DELIBERATE SECTION DEMARCATION (Clear separation before next major section) */}
        <div className="mt-12 border-b-2 border-white/20 pb-3" aria-hidden="true" />
      </div>
    </section>
  );
}

function FlagshipProject({
  project,
  isReversed = false,
}: {
  project: FeaturedProject;
  isReversed?: boolean;
}) {
  const liveProjectLink = project.links.find((l) => l.external) ?? project.links[0];
  const liveUrl = liveProjectLink.href;

  return (
    <article
      id={project.slug}
      className={`grid gap-6 lg:gap-10 lg:items-center ${
        isReversed
          ? "lg:grid-cols-[1fr_0.95fr]"
          : "lg:grid-cols-[0.95fr_1fr]"
      }`}
    >
      {/* COLUMN 1: Live Project Preview Viewport */}
      <div className={isReversed ? "lg:order-2" : "lg:order-1"}>
        <a
          href={liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Open live project for ${project.name}`}
          className="group/screen relative block w-full overflow-hidden rounded-xl border border-white/20 bg-[#0c0c0c] transition-all duration-300 hover:border-yellow-300/60 hover:shadow-[0_12px_45px_rgba(0,0,0,0.9)]"
        >
          {/* Device / Browser Top Chrome */}
          <div className="flex h-8 items-center justify-between border-b border-white/12 bg-[#171717] px-3">
            <div className="flex items-center gap-1.5" aria-hidden="true">
              <span className="h-2 w-2 rounded-full bg-yellow-400" />
              <span className="h-2 w-2 rounded-full bg-white/30" />
              <span className="h-2 w-2 rounded-full bg-white/15" />
            </div>
            <div className="flex items-center gap-1.5 truncate px-2 text-[0.6rem] font-bold uppercase tracking-[0.14em] text-white/60 group-hover/screen:text-yellow-200">
              <span className="truncate">{project.slug}.vercel.app</span>
              <span aria-hidden="true">↗</span>
            </div>
            <span className="rounded-full bg-emerald-500/20 px-2 py-0.5 text-[0.55rem] font-bold uppercase tracking-wider text-emerald-300">
              Live
            </span>
          </div>

          {/* Screen Live Viewport (Uncropped Natural Presentation) */}
          <div className="relative aspect-[16/10] w-full overflow-hidden bg-black">
            {project.useScreenshot ? (
              <Image
                src={project.imageSrc}
                alt={project.imageAlt}
                fill
                sizes="(min-width: 1024px) 520px, 100vw"
                className="object-cover object-top transition-transform duration-500 ease-out group-hover/screen:scale-[1.02]"
              />
            ) : (
              <iframe
                src={liveUrl}
                title={`${project.name} live preview`}
                loading="lazy"
                className="pointer-events-none absolute top-0 left-0 h-[250%] w-[250%] origin-top-left scale-[0.4] border-0 select-none"
              />
            )}
            {/* Subtle interactive hover overlay */}
            <div className="absolute inset-0 bg-black/10 opacity-0 transition-opacity duration-300 group-hover/screen:opacity-100 flex items-center justify-center pointer-events-none">
              <span className="rounded-full bg-black/80 px-3.5 py-1.5 text-xs font-bold text-yellow-200 backdrop-blur-md border border-yellow-300/40 shadow-lg">
                Open Live Project ↗
              </span>
            </div>
          </div>
        </a>

        {/* Integrated Technologies Stack Row */}
        <div className="mt-3.5 flex flex-wrap items-center gap-x-2.5 gap-y-1 text-xs text-white/70">
          <span className="text-[0.62rem] font-bold uppercase tracking-wider text-white/40">
            Stack:
          </span>
          {project.stack.map((item, idx) => (
            <span key={item} className="font-semibold text-white/85">
              {item}{idx < project.stack.length - 1 ? " ·" : ""}
            </span>
          ))}
        </div>

        {/* Direct Action Links */}
        <div className="mt-4 flex flex-wrap items-center gap-3">
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="brand-focus-ring inline-flex min-h-9 items-center justify-center rounded-full bg-yellow-300 px-4 text-xs font-black text-black transition-colors hover:bg-yellow-200"
          >
            View live project ↗
          </a>
          <Link
            href={`/engineering#${project.slug}`}
            className="brand-focus-ring inline-flex min-h-9 items-center justify-center rounded-full border border-white/20 bg-transparent px-4 text-xs font-bold text-white transition-colors hover:border-yellow-300/50 hover:text-yellow-200"
          >
            Explore engineering
          </Link>
        </div>
      </div>

      {/* COLUMN 2: Open Editorial Information & Engineering Context */}
      <div className={`space-y-3 ${isReversed ? "lg:order-1" : "lg:order-2"}`}>
        <p className="text-[0.65rem] font-black uppercase tracking-[0.2em] text-yellow-300">
          {project.number} / {project.category}
        </p>

        <h3 className="display-type text-2xl font-black leading-tight text-white sm:text-3xl lg:text-4xl">
          {project.name}
        </h3>

        <p className="text-sm font-bold text-yellow-100 sm:text-base">
          {project.role}
        </p>

        <p className="text-sm font-normal leading-relaxed text-white/75 sm:text-base">
          {project.summary}
        </p>

        <p className="text-sm font-medium leading-relaxed text-white/85">
          {project.signal}
        </p>

        <ul className="grid gap-2 pt-0.5 text-sm leading-relaxed text-white/70">
          {project.evidence.map((item) => (
            <li key={item} className="grid grid-cols-[0.6rem_1fr] items-start gap-2.5">
              <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-yellow-300" aria-hidden="true" />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        {/* Engineering Context Subsection */}
        {project.engineeringContext && (
          <div className="border-t border-white/15 pt-3 mt-3.5">
            <p className="text-[0.62rem] font-black uppercase tracking-[0.18em] text-yellow-200">
              Engineering Context
            </p>
            <p className="mt-1.5 text-xs font-normal leading-relaxed text-white/75 sm:text-sm">
              {project.engineeringContext}
            </p>
          </div>
        )}
      </div>
    </article>
  );
}
