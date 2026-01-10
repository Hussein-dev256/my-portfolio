"use client";

import { useState } from "react";

type Service = {
  id: number;
  title: string;
  iconLabel: string;
  summary: string;
  details: string[];
};

const services: Service[] = [
  {
    id: 1,
    title: "Website Design & Development",
    iconLabel: "Web",
    summary:
      "Modern, fast, responsive websites that convert visitors into customers.",
    details: [
      "Landing pages, business sites, and personal brands built with performance and SEO in mind.",
      "Responsive layouts that look premium on desktop, tablet, and mobile.",
      "Admin dashboards and custom frontends tailored to your workflows.",
    ],
  },
  {
    id: 2,
    title: "App Development",
    iconLabel: "Apps",
    summary:
      "Functional, scalable mobile and web applications tailored to your needs.",
    details: [
      "MVPs and production apps built with clean architecture.",
      "Android and web applications focused on performance and maintainability.",
      "Internal tools that streamline operations and decision-making.",
    ],
  },
  {
    id: 3,
    title: "Website & App Maintenance",
    iconLabel: "Care",
    summary:
      "Ongoing maintenance, updates, and performance improvements.",
    details: [
      "Bug fixing, refactoring, and dependency updates.",
      "Performance optimization and uptime focus.",
      "Security checks and proactive improvements.",
    ],
  },
  {
    id: 4,
    title: "SEO Optimization",
    iconLabel: "SEO",
    summary:
      "Technical optimization to rank better, load faster, and attract the right audience.",
    details: [
      "Technical SEO, on-page optimization, and structured data.",
      "Core Web Vitals and page speed improvements.",
      "Clean semantic markup for strong search visibility.",
    ],
  },
  {
    id: 5,
    title: "Business Automations",
    iconLabel: "Auto",
    summary:
      "Automating repetitive processes to save time and reduce errors.",
    details: [
      "Workflow and marketing automations tied to your existing tools.",
      "Custom API integrations and data pipelines.",
      "Internal systems that remove manual, error-prone tasks.",
    ],
  },
];

export function ServicesSection() {
  const [openId, setOpenId] = useState<number | null>(1);

  return (
    <section
      id="services"
      className="section-container"
      aria-labelledby="services-heading"
    >
      <div className="section-inner">
        <header className="mb-6 flex items-center justify-between gap-4">
          <div className="space-y-2">
            <h2
              id="services-heading"
              className="text-lg font-semibold uppercase tracking-[0.25em] text-emerald-300/80"
            >
              What I do
            </h2>
            <p className="text-sm text-slate-200/80">
              Services designed to move the needle for your business.
            </p>
          </div>
        </header>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const isOpen = openId === service.id;
            return (
              <button
                key={service.id}
                type="button"
                onClick={() => setOpenId(isOpen ? null : service.id)}
                className={
                  "card-glow group flex flex-col items-stretch text-left transition-transform duration-200 hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/80"
                }
              >
                <div className="flex items-center justify-between gap-3 px-4 pt-4 pb-3">
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-500/20 text-[11px] font-semibold uppercase tracking-wide text-emerald-100/90">
                      {service.iconLabel}
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-emerald-50">
                        {service.title}
                      </h3>
                      <p className="mt-1 text-[11px] text-slate-300/80">
                        {service.summary}
                      </p>
                    </div>
                  </div>
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-100 shadow-[0_0_18px_rgba(34,197,94,0.6)] group-hover:bg-emerald-500 group-hover:text-emerald-950">
                    <span
                      aria-hidden="true"
                      className="transition-transform duration-200 group-hover:translate-x-0.5"
                    >
                      {isOpen ? "−" : "→"}
                    </span>
                  </div>
                </div>
                {isOpen && (
                  <div className="border-t border-emerald-500/15 px-4 pb-4 pt-3 text-[11px] leading-relaxed text-slate-100/85">
                    <ul className="space-y-1.5">
                      {service.details.map((item) => (
                        <li key={item} className="flex gap-2">
                          <span className="mt-[3px] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald-400" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
