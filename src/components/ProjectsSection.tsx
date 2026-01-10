"use client";

import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

type ProjectCategory = "website" | "pwa" | "app" | "automation";

type Project = {
  name: string;
  description: string;
  tech: string[];
  status: "Live" | "In Progress";
  linkLabel: string;
  href: string;
  category: ProjectCategory;
  previewUrl: string;
  screenshotSrc?: string;
};

const projects: Project[] = [
  {
    name: "Al-Birr Charity Organization",
    description:
      "A donation and information website for a charity NGO serving underserved Muslim families in Northern Uganda.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    status: "Live",
    linkLabel: "Visit Website →",
    href: "https://al-birr-website.vercel.app/",
    category: "website",
    previewUrl: "https://al-birr-website.vercel.app/",
  },
  {
    name: "Pamoja Outreach Foundation",
    description:
      "A storytelling and fundraising site for a charity working with less privileged families in the ghettos of Kampala.",
    tech: ["HTML", "CSS", "JavaScript"],
    status: "Live",
    linkLabel: "Visit Website →",
    href: "https://pamoja-outreach-foundation.netlify.app",
    category: "website",
    previewUrl: "https://pamoja-outreach-foundation.netlify.app",
  },
  {
    name: "Oakley Store Kampala (PWA)",
    description:
      "An ecommerce Progressive Web App with product listings, cart, and checkout designed for a local eyewear store.",
    tech: ["React", "TypeScript", "PostgreSQL", "Node.js", "Express"],
    status: "In Progress",
    linkLabel: "GitHub Repo →",
    href: "https://github.com/Hussein-dev256/oakley-frontend",
    category: "pwa",
    previewUrl: "https://github.com/Hussein-dev256/oakley-frontend",
  },
  {
    name: "Object ID (Android App)",
    description:
      "A region-of-interest based image identification app for Android that helps users detect and identify objects.",
    tech: ["Kotlin", "Android", "Python", "Computer Vision"],
    status: "In Progress",
    linkLabel: "GitHub Repo →",
    href: "https://github.com/Hussein-dev256/ROI-Based-Image-ID-Android-App",
    category: "app",
    previewUrl:
      "https://github.com/Hussein-dev256/ROI-Based-Image-ID-Android-App",
  },
];

const FILTERS = [
  { id: "all", label: "All" },
  { id: "website", label: "Websites" },
  { id: "pwa", label: "PWAs" },
  { id: "app", label: "Apps" },
] as const;

type FilterId = (typeof FILTERS)[number]["id"];

export function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState<FilterId>("all");

  const visibleProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <section
      id="work"
      className="section-container"
      aria-labelledby="projects-heading"
    >
      <div className="section-inner">
        <header className="mb-6 space-y-4">
          <div>
            <h2
              id="projects-heading"
              className="text-lg font-semibold uppercase tracking-[0.25em] text-emerald-300/80"
            >
              Selected projects
            </h2>
            <p className="mt-2 text-sm text-slate-200/80">
              A few examples of systems and products I&apos;ve helped design and
              build. Only personal & public projects are displayed, other
              projects are private since they belong to clients.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-2 text-xs md:justify-center md:text-[13px]">
            {FILTERS.map((filter) => {
              const isActive = activeFilter === filter.id;
              return (
                <button
                  key={filter.id}
                  type="button"
                  onClick={() => setActiveFilter(filter.id)}
                  className={`rounded-full border px-3 py-1 transition-colors duration-150 ${
                    isActive
                      ? "border-emerald-400 bg-emerald-500 text-emerald-950 shadow-[0_0_24px_rgba(34,197,94,0.7)]"
                      : "border-emerald-500/25 bg-slate-900/70 text-slate-200 hover:border-emerald-400/60"
                  }`}
                >
                  {filter.label}
                </button>
              );
            })}
          </div>
        </header>

        <AnimatePresence mode="popLayout">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {visibleProjects.map((project) => (
              <motion.article
                key={project.name}
                layout
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="card-glow group relative flex flex-col justify-between overflow-hidden p-4 text-sm text-slate-100/90"
              >
                {/* Live preview frame */}
                <div className="relative mb-4 overflow-hidden rounded-xl border border-slate-700/60 bg-black/60">
                  <div className="relative h-40 w-full overflow-hidden rounded-[0.9rem] bg-slate-900">
                    {/* Desktop: scaled iframe preview */}
                    <div className="hidden h-full w-full md:block">
                      <div className="pointer-events-none relative h-full w-full origin-top-left scale-[0.22]">
                        <iframe
                          src={project.previewUrl}
                          title={`${project.name} live preview`}
                          loading="lazy"
                          scrolling="no"
                          className="pointer-events-none h-[900px] w-[1440px] border-none"
                        />
                      </div>
                    </div>

                    {/* Mobile: static screenshot if available, otherwise a live iframe preview */}
                    <div className="block h-full w-full md:hidden">
                      {project.screenshotSrc ? (
                        <Image
                          src={project.screenshotSrc}
                          alt={`${project.name} preview screenshot`}
                          fill
                          sizes="100vw"
                          className="object-cover object-top"
                        />
                      ) : (
                        <iframe
                          src={project.previewUrl}
                          title={`${project.name} live preview`}
                          loading="lazy"
                          scrolling="no"
                          className="pointer-events-none h-full w-full border-none"
                        />
                      )}
                    </div>
                  </div>
                </div>

                {/* Text content */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="text-sm font-semibold text-emerald-50">
                      {project.name}
                    </h3>
                    <span
                      className={`rounded-full px-2 py-0.5 text-[11px] font-medium whitespace-nowrap ${
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

                <div className="mt-3 flex flex-wrap items-center gap-1.5 text-[10px] text-slate-200/80">
                  {project.tech.map((item) => (
                    <span
                      key={item}
                      className="rounded-full bg-emerald-500/15 px-2 py-0.5"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <div className="mt-3 text-[11px] font-medium text-emerald-300">
                  <span>{project.linkLabel}</span>
                  <span aria-hidden="true" className="ml-1">
                    ↗
                  </span>
                </div>

                {/* Clickable overlay for the whole card */}
                <a
                  href={project.href}
                  target="_blank"
                  rel="noreferrer"
                  className="absolute inset-0 z-10"
                  aria-label={`Open ${project.name} in a new tab`}
                />
              </motion.article>
            ))}
          </div>
        </AnimatePresence>
      </div>
    </section>
  );
}
