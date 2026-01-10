"use client";

import Link from "next/link";
import { siteConfig } from "@/config/siteConfig";

const navIcons = [
  (
    <span
      key="work"
      className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500 text-[10px] font-semibold text-emerald-950 shadow-[0_0_16px_rgba(34,197,94,0.9)]"
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 20 20"
        className="h-3 w-3 fill-current"
      >
        <path d="M5 4.5v11l10-5.5-10-5.5Z" />
      </svg>
    </span>
  ),
  (
    <span
      key="catalog"
      className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500 text-[10px] font-semibold text-emerald-950 shadow-[0_0_16px_rgba(34,197,94,0.9)]"
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="h-3.5 w-3.5 fill-none stroke-current stroke-[1.8]"
      >
        <path d="M4 5h2l1.2 9h9.6L18 8H7.2" />
        <circle cx="10" cy="18" r="1.3" />
        <circle cx="16" cy="18" r="1.3" />
      </svg>
    </span>
  ),
  (
    <span
      key="hire"
      className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500 text-[10px] font-semibold text-emerald-950 shadow-[0_0_16px_rgba(34,197,94,0.9)]"
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 20 20"
        className="h-3.5 w-3.5 fill-none stroke-current stroke-[2.2]"
      >
        <path d="M4.5 10.5 8.2 14l7.3-8" />
      </svg>
    </span>
  ),
];

export function Navbar() {
  return (
    <nav
      aria-label="Primary actions"
      className="flex items-center justify-center gap-4 md:gap-8"
    >
      {siteConfig.nav.map((item, index) => (
        <Link
          key={item.href}
          href={item.href}
          className="flex items-center gap-2 rounded-full border border-emerald-500/60 bg-[radial-gradient(circle_at_top,_rgba(34,197,94,0.5),_transparent_55%),_rgba(15,23,42,0.96)] px-4 py-1.5 text-xs font-medium text-emerald-50 shadow-[0_0_40px_rgba(34,197,94,0.4)] transition-transform duration-150 hover:-translate-y-0.5 md:px-5 md:text-sm"
        >
          {navIcons[index]}
          <span className="text-emerald-50/90">{item.label}</span>
        </Link>
      ))}
    </nav>
  );
}
