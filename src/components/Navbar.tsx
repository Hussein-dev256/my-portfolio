"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import type { MouseEvent } from "react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { siteConfig } from "@/config/siteConfig";
import { buttonInteraction } from "@/lib/animations";

export function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  function handleClick(href: string, event: MouseEvent<HTMLAnchorElement>) {
    if (!href.startsWith("#")) return;
    event.preventDefault();
    document.getElementById(href.slice(1))?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  return (
    <nav aria-label="Primary navigation" className="relative z-30 mx-auto w-full max-w-[830px]">
      <div className="flex items-center justify-between gap-3 rounded-full border border-black/10 bg-[#070707] px-2.5 py-2 shadow-[0_18px_45px_rgba(0,0,0,0.22)] sm:px-3">
      <Link
        href="/"
        className="brand-focus-ring flex min-w-0 items-center gap-2 rounded-full pr-2 text-white"
        aria-label="Mafabi Hussein home"
      >
        <span className="relative h-10 w-14 flex-shrink-0 overflow-hidden rounded-full border border-yellow-300/30 bg-black sm:w-16">
          <Image
            src="/my%20logo.svg"
            alt=""
            fill
            sizes="64px"
            className="object-cover object-left"
            priority
          />
        </span>
        <span className="hidden min-w-0 leading-none sm:block">
          <span className="block text-[0.78rem] font-black">
            Mafabi <span className="text-yellow-300">Hussein</span>
          </span>
          <span className="mt-1 block truncate text-[0.62rem] font-medium text-white/54">
            Software engineering portfolio
          </span>
        </span>
      </Link>

      <button
        type="button"
        className="brand-focus-ring inline-flex min-h-10 items-center gap-2 rounded-full bg-yellow-300 px-4 text-xs font-black text-black md:hidden"
        aria-expanded={menuOpen}
        aria-controls="mobile-navigation"
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span>{menuOpen ? "Close" : "Menu"}</span>
        <span className="grid gap-1" aria-hidden="true">
          <span className="block h-0.5 w-4 bg-black" />
          <span className="block h-0.5 w-4 bg-black" />
        </span>
      </button>

      <div className="hidden min-w-0 items-center justify-end gap-1.5 md:flex">
        {siteConfig.nav.map((item) => {
          const isPrimary = item.href === "/contact";
          const isActive =
            item.href === "/"
              ? pathname === "/"
              : pathname === item.href || pathname.startsWith(`${item.href}/`);
          return (
            <motion.div
              key={item.href}
              whileHover={buttonInteraction.hover}
              whileTap={buttonInteraction.tap}
            >
              <Link
                href={item.href}
                onClick={(event) => handleClick(item.href, event)}
                aria-current={isActive ? "page" : undefined}
                className={`brand-focus-ring inline-flex min-h-9 items-center justify-center rounded-full border px-2.5 text-[0.68rem] font-black transition-colors sm:px-4 sm:text-xs ${
                  isPrimary || isActive
                    ? "border-yellow-300 bg-yellow-300 text-black hover:bg-yellow-200"
                    : "border-transparent bg-white/[0.045] text-white/78 hover:border-yellow-300/40 hover:text-yellow-100"
                }`}
              >
                <span className="sm:hidden">{item.shortLabel}</span>
                <span className="hidden sm:inline">{item.label}</span>
              </Link>
            </motion.div>
          );
        })}
      </div>
      </div>

      {menuOpen ? (
        <div
          id="mobile-navigation"
          className="absolute left-0 right-0 top-[calc(100%+0.5rem)] rounded-[1.2rem] bg-[#070707] p-2 shadow-[0_18px_45px_rgba(0,0,0,0.28)] md:hidden"
        >
          <div className="grid gap-1">
            {siteConfig.nav.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname === item.href || pathname.startsWith(`${item.href}/`);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  aria-current={isActive ? "page" : undefined}
                  className={`brand-focus-ring min-h-11 rounded-[0.9rem] px-4 py-3 text-sm font-black transition-colors ${
                    isActive
                      ? "bg-yellow-300 text-black"
                      : "bg-white/[0.045] text-white/78 hover:text-yellow-100"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </div>
      ) : null}
    </nav>
  );
}
