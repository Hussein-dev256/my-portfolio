"use client";

import { useState } from "react";
import Image from "next/image";

type Service = {
  id: string;
  title: string;
  imageSrc: string;
  imageAlt: string;
  description: string;
};

const services: Service[] = [
  {
    id: "web-development",
    title: "WEB DEVELOPMENT",
    imageSrc: "/webdev icon.svg",
    imageAlt: "Modern responsive website layout on laptop and mobile screens",
    description:
      "Designing and building fast, responsive websites that look premium and turn visitors into clients.",
  },
  {
    id: "progressive-web-apps",
    title: "PROGRESSIVE WEB APPS",
    imageSrc: "/PWA.svg",
    imageAlt: "Progressive web app interface with install prompt on mobile device",
    description:
      "Installable, offline-capable web apps that behave like native apps while staying lightweight and easy to ship.",
  },
  {
    id: "app-development",
    title: "APP DEVELOPMENT",
    imageSrc: "/app dev.svg",
    imageAlt: "Developer building a mobile app with code and phone preview",
    description:
      "End-to-end development of mobile and web applications, from MVPs to production-ready products.",
  },
  {
    id: "maintenance",
    title: "WEBSITE / APP MAINTENANCE",
    imageSrc: "/maintenance.svg",
    imageAlt: "Dashboard showing website uptime, updates, and performance metrics",
    description:
      "Ongoing updates, bug fixes, performance tuning, and monitoring to keep your site or app healthy.",
  },
  {
    id: "seo",
    title: "SEO",
    imageSrc: "/SEO.svg",
    imageAlt: "Analytics graph with upward trend representing SEO growth",
    description:
      "Technical and on-page SEO so your content loads fast, ranks better, and reaches the right audience.",
  },
  {
    id: "automations",
    title: "AUTOMATIONS",
    imageSrc: "/Automation.svg",
    imageAlt: "Workflow automation diagram connecting different apps and services",
    description:
      "Automating repetitive workflows, integrations, and notifications to save time and reduce manual errors.",
  },
];

export function ServicesSection() {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <section
      id="services"
      className="section-container py-12 md:py-16"
      aria-labelledby="services-heading"
    >
      <header className="mb-8">
        <div className="h-px w-16 bg-emerald-500/80" />
        <h2
          id="services-heading"
          className="mt-3 text-2xl font-medium tracking-wide text-slate-100 md:text-[1.7rem]"
        >
          What I Do
        </h2>
      </header>

      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => {
          const isOpen = openId === service.id;

          return (
            <div
              key={service.id}
              className="group flex flex-col items-stretch rounded-2xl border border-emerald-500/15 bg-slate-900/70 px-3 py-3 text-left shadow-[0_0_26px_rgba(0,0,0,0.8)] transition-transform duration-200 hover:-translate-y-0.5 hover:border-emerald-400/40"
            >
              <div className="flex items-center gap-4">
                <div className="relative h-16 w-28 flex-shrink-0 overflow-hidden rounded-xl bg-slate-900/80">
                  <Image
                    src={service.imageSrc}
                    alt={service.imageAlt}
                    fill
                    sizes="112px"
                    className="object-cover object-center opacity-95"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/45 via-transparent to-transparent" />
                </div>

                <div className="flex-1">
                  <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-50 md:text-base">
                    {service.title}
                  </h3>
                </div>

                <button
                  type="button"
                  onClick={() => setOpenId(isOpen ? null : service.id)}
                  className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-emerald-500 text-emerald-950 shadow-[0_0_22px_rgba(34,197,94,0.85)] transition duration-200 group-hover:scale-105 group-hover:shadow-[0_0_30px_rgba(34,197,94,1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/70"
                  aria-expanded={isOpen}
                  aria-label={
                    isOpen
                      ? `Hide description for ${service.title.toLowerCase()}`
                      : `Show description for ${service.title.toLowerCase()}`
                  }
                >
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 20 20"
                    className={`h-3.5 w-3.5 fill-none stroke-current stroke-[2.2] transition-transform duration-200 ${
                      isOpen ? "rotate-90" : "group-hover:translate-x-0.5"
                    }`}
                  >
                    <path d="M5 4.5 11.5 10 5 15.5" />
                  </svg>
                </button>
              </div>

              {isOpen && (
                <div className="mt-3 border-t border-emerald-500/15 pt-3 text-sm leading-relaxed text-slate-100/85">
                  {service.description}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
