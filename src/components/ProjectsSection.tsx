type Project = {
  name: string;
  description: string;
  tech: string[];
  status: "Live" | "In Progress";
  linkLabel: string;
  href: string;
};

const projects: Project[] = [
  {
    name: "FeastFlow",
    description:
      "A multi-role food delivery system with real-time order tracking and admin dashboard.",
    tech: ["Next.js", "Node.js", "PostgreSQL"],
    status: "Live",
    linkLabel: "Live Project →",
    href: "https://example.com/feastflow",
  },
  {
    name: "InsightHub Analytics",
    description:
      "A business analytics dashboard for tracking KPIs, reports, and team performance.",
    tech: ["React", "Python", "FastAPI"],
    status: "In Progress",
    linkLabel: "GitHub Repo →",
    href: "https://github.com/your-handle/insighthub",
  },
  {
    name: "SwiftBookings",
    description:
      "Booking platform for service-based businesses with calendar integration and automation.",
    tech: ["Next.js", "MongoDB"],
    status: "Live",
    linkLabel: "Live Project →",
    href: "https://example.com/swiftbookings",
  },
  {
    name: "OpsAutomation Suite",
    description:
      "Internal automation suite to streamline repetitive business operations.",
    tech: ["Node.js", "TypeScript"],
    status: "In Progress",
    linkLabel: "GitHub Repo →",
    href: "https://github.com/your-handle/ops-automation-suite",
  },
  {
    name: "DevPortfolio System",
    description:
      "A portfolio + CMS system for developers to showcase projects and case studies.",
    tech: ["Next.js", "Tailwind CSS"],
    status: "Live",
    linkLabel: "Live Project →",
    href: "https://example.com/devportfolio",
  },
];

export function ProjectsSection() {
  return (
    <section
      id="work"
      className="section-container"
      aria-labelledby="projects-heading"
    >
      <div className="section-inner">
        <header className="mb-6 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
          <div>
            <h2
              id="projects-heading"
              className="text-lg font-semibold uppercase tracking-[0.25em] text-emerald-300/80"
            >
              Selected projects
            </h2>
            <p className="mt-2 text-sm text-slate-200/80">
              A few examples of systems and products I&apos;ve helped design and
              build.
            </p>
          </div>
        </header>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.name}
              className="card-glow flex flex-col justify-between p-4 text-sm text-slate-100/90"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between gap-2">
                  <h3 className="text-sm font-semibold text-emerald-50">
                    {project.name}
                  </h3>
                  <span
                    className={`rounded-full px-2 py-0.5 text-[11px] font-medium ${
                      project.status === "Live"
                        ? "bg-emerald-500/20 text-emerald-200"
                        : "bg-yellow-500/20 text-yellow-100"
                    }`}
                  >
                    {project.status}
                  </span>
                </div>
                <p className="text-[11px] leading-relaxed text-slate-200/85">
                  {project.description}
                </p>
              </div>

              <div className="mt-4 flex flex-wrap items-center gap-1.5 text-[10px] text-slate-200/80">
                {project.tech.map((item) => (
                  <span
                    key={item}
                    className="rounded-full bg-emerald-500/15 px-2 py-0.5"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="mt-4">
                <a
                  href={project.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-[11px] font-medium text-emerald-300 hover:text-emerald-200"
                >
                  {project.linkLabel}
                  <span aria-hidden="true">↗</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
