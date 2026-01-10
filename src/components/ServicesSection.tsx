"use client";

import { useState } from "react";

type Service = {
  id: string;
  title: string;
  thumbnailClass: string;
  description: string;
};

const services: Service[] = [
  {
    id: "web-development",
    title: "WEB DEVELOPMENT",
    thumbnailClass:
      "bg-[radial-gradient(circle_at_top,_rgba(248,250,252,0.15),_transparent_60%),_linear-gradient(to-br,_#020617,_#1f2937)]",
    description:
      "Designing and building fast, responsive websites that look premium and turn visitors into clients.",
  },
  {
    id: "progressive-web-apps",
    title: "PROGRESSIVE WEB APPS",
    thumbnailClass:
      "bg-[radial-gradient(circle_at_top,_rgba(52,211,153,0.18),_transparent_60%),_linear-gradient(to-br,_#020617,_#052e16)]",
    description:
      "Installable, offline-capable web apps that behave like native apps while staying lightweight and easy to ship.",
  },
  {
    id: "app-development",
    title: "APP DEVELOPMENT",
    thumbnailClass:
      "bg-[radial-gradient(circle_at_top,_rgba(250,204,21,0.22),_transparent_60%),_linear-gradient(to-br,_#020617,_#78350f)]",
    description:
      "End-to-end development of mobile and web applications, from MVPs to production-ready products.",
  },
  {
    id: "maintenance",
    title: "WEBSITE / APP MAINTENANCE",
    thumbnailClass:
      "bg-[radial-gradient(circle_at_top,_rgba(251,113,133,0.2),_transparent_60%),_linear-gradient(to-br,_#020617,_#4a044e)]",
    description:
      "Ongoing updates, bug fixes, performance tuning, and monitoring to keep your site or app healthy.",
  },
  {
    id: "seo",
    title: "SEO",
    thumbnailClass:
      "bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.2),_transparent_60%),_linear-gradient(to-br,_#020617,_#0f172a)]",
    description:
      "Technical and on-page SEO so your content loads fast, ranks better, and reaches the right audience.",
  },
  {
    id: "automations",
    title: "AUTOMATIONS",
    thumbnailClass:
      "bg-[radial-gradient(circle_at_top,_rgba(129,140,248,0.2),_transparent_60%),_linear-gradient(to-br,_#020617,_#1e1b4b)]",
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
          className="mt-4 text-lg font-medium lowercase text-slate-100 md:text-xl"
        >
          what I do
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
                <div
                  className={`relative h-16 w-24 flex-shrink-0 overflow-hidden rounded-xl ${service.thumbnailClass}`}
                >
                  <ServiceThumbnail serviceId={service.id} />
                </div>

                <div className="flex-1">
                  <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-50 sm:text-sm">
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
                <div className="mt-3 border-t border-emerald-500/15 pt-3 text-xs leading-relaxed text-slate-100/85">
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

type ServiceThumbnailProps = {
  serviceId: string;
};

function ServiceThumbnail({ serviceId }: ServiceThumbnailProps) {
  switch (serviceId) {
    case "web-development":
      return (
        <svg
          viewBox="0 0 96 64"
          aria-hidden="true"
          className="h-full w-full text-slate-100/85"
        >
          <rect width="96" height="64" rx="8" fill="url(#wd-bg)" opacity="0.9" />
          <rect
            x="10"
            y="14"
            width="76"
            height="40"
            rx="4"
            fill="#020617"
            opacity="0.9"
          />
          <rect x="14" y="18" width="12" height="4" rx="2" fill="#22c55e" />
          <rect x="30" y="18" width="8" height="4" rx="2" fill="#4b5563" />
          <rect x="40" y="18" width="8" height="4" rx="2" fill="#4b5563" />
          <rect x="50" y="26" width="28" height="4" rx="2" fill="#e5e7eb" />
          <rect x="50" y="34" width="20" height="3" rx="1.5" fill="#9ca3af" />
          <rect x="50" y="41" width="16" height="3" rx="1.5" fill="#6b7280" />
          <rect x="16" y="26" width="26" height="22" rx="3" fill="#0f172a" />
          <path
            d="M22 32h14l-7 10z"
            fill="#22c55e"
          />
          <defs>
            <linearGradient id="wd-bg" x1="0" y1="0" x2="96" y2="64">
              <stop offset="0" stopColor="#020617" />
              <stop offset="1" stopColor="#111827" />
            </linearGradient>
          </defs>
        </svg>
      );
    case "progressive-web-apps":
      return (
        <svg
          viewBox="0 0 96 64"
          aria-hidden="true"
          className="h-full w-full text-slate-100/85"
        >
          <rect width="96" height="64" rx="8" fill="#022c22" />
          <rect x="12" y="10" width="40" height="44" rx="8" fill="#020617" />
          <rect x="18" y="18" width="28" height="18" rx="3" fill="#22c55e" />
          <circle cx="32" cy="42" r="3" fill="#e5e7eb" />
          <rect x="54" y="16" width="26" height="4" rx="2" fill="#22c55e" />
          <rect x="54" y="24" width="20" height="3" rx="1.5" fill="#a7f3d0" />
          <rect x="54" y="31" width="22" height="3" rx="1.5" fill="#6ee7b7" />
          <rect x="54" y="38" width="18" height="3" rx="1.5" fill="#4ade80" />
        </svg>
      );
    case "app-development":
      return (
        <svg
          viewBox="0 0 96 64"
          aria-hidden="true"
          className="h-full w-full text-slate-100/85"
        >
          <rect width="96" height="64" rx="8" fill="#1f2937" />
          <rect x="18" y="8" width="24" height="48" rx="8" fill="#020617" />
          <rect x="22" y="16" width="16" height="16" rx="4" fill="#22c55e" />
          <rect x="22" y="36" width="16" height="3" rx="1.5" fill="#9ca3af" />
          <circle cx="30" cy="46" r="2.2" fill="#e5e7eb" />
          <rect x="48" y="16" width="26" height="4" rx="2" fill="#e5e7eb" />
          <rect x="48" y="24" width="20" height="3" rx="1.5" fill="#9ca3af" />
          <rect x="48" y="31" width="18" height="3" rx="1.5" fill="#6b7280" />
          <rect x="48" y="38" width="22" height="3" rx="1.5" fill="#22c55e" />
        </svg>
      );
    case "maintenance":
      return (
        <svg
          viewBox="0 0 96 64"
          aria-hidden="true"
          className="h-full w-full text-slate-100/85"
        >
          <rect width="96" height="64" rx="8" fill="#111827" />
          <rect x="12" y="16" width="32" height="24" rx="4" fill="#020617" />
          <rect x="16" y="20" width="24" height="4" rx="2" fill="#e5e7eb" />
          <rect x="16" y="27" width="18" height="3" rx="1.5" fill="#6b7280" />
          <path
            d="M64 20a6 6 0 0 1 5.4 3.5l4.6-1.7-3.4 8.7-8.9-2.9 4.1-1.5A3.9 3.9 0 0 0 62 24a4 4 0 1 0 2 7.5v5.5h4V31a6 6 0 0 1-4-11z"
            fill="#22c55e"
          />
          <circle cx="60" cy="42" r="5" fill="#020617" />
          <path
            d="M60 38.5 61.8 41l3 .6-2.1 2.4.4 3.1L60 46l-3.1 1 .4-3.1-2.1-2.4 3-.6z"
            fill="#a7f3d0"
          />
        </svg>
      );
    case "seo":
      return (
        <svg
          viewBox="0 0 96 64"
          aria-hidden="true"
          className="h-full w-full text-slate-100/85"
        >
          <rect width="96" height="64" rx="8" fill="#020617" />
          <rect x="14" y="18" width="60" height="28" rx="4" fill="#020617" stroke="#22c55e" strokeWidth="1.4" />
          <polyline
            points="20,38 30,32 40,35 52,25 66,28"
            fill="none"
            stroke="#22c55e"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="66" cy="28" r="3" fill="#22c55e" />
          <rect x="20" y="22" width="10" height="3" rx="1.5" fill="#6b7280" />
          <rect x="32" y="22" width="12" height="3" rx="1.5" fill="#6b7280" />
        </svg>
      );
    case "automations":
      return (
        <svg
          viewBox="0 0 96 64"
          aria-hidden="true"
          className="h-full w-full text-slate-100/85"
        >
          <rect width="96" height="64" rx="8" fill="#020617" />
          <circle cx="26" cy="24" r="6" fill="#22c55e" />
          <circle cx="64" cy="20" r="5" fill="#0ea5e9" />
          <circle cx="70" cy="40" r="6" fill="#a855f7" />
          <circle cx="30" cy="42" r="5" fill="#e5e7eb" />
          <path
            d="M32 27l26-5m4 26-7-19m-21 12 9-18"
            fill="none"
            stroke="#e5e7eb"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    default:
      return null;
  }
}
