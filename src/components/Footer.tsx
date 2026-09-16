import Image from "next/image";
import type { ReactNode } from "react";
import { navItems, profile, technicalProfile } from "@/content/portfolio";

const socialLinks = [
  { label: "GitHub", href: profile.social.github },
  { label: "LinkedIn", href: profile.social.linkedin },
  { label: "X", href: profile.social.x },
] as const;

export function Footer() {
  return (
    <footer className="bg-[#050505] text-sm text-white" aria-label="Footer">
      <div className="bg-yellow-300 py-6 sm:py-8 lg:py-9 text-black">
        <div className="section-container">
          <div className="mb-6 flex flex-col gap-4 border-b border-black/18 pb-6 sm:flex-row sm:items-end sm:justify-between">
            <p className="display-type max-w-3xl text-2xl sm:text-4xl lg:text-5xl leading-[0.96]">
              Architecture
              <span className="editorial-type mx-1.5 sm:mx-2.5 font-normal">to</span>
              production.
            </p>
            <a
              href={profile.cvHref}
              target="_blank"
              rel="noopener noreferrer"
              className="brand-focus-ring inline-flex min-h-10 w-fit items-center rounded-full bg-black px-5 text-xs font-black text-white transition-colors hover:bg-[#181818]"
            >
              View CV ↗
            </a>
          </div>

          <div className="grid gap-6 sm:gap-8 lg:grid-cols-[0.9fr_1.4fr] lg:items-start">
            <div className="min-w-0">
              <div className="flex min-w-0 items-center gap-3">
                <span className="relative h-12 w-12 flex-shrink-0 overflow-hidden rounded-full bg-black">
                  <Image
                    src="/my%20logo.svg"
                    alt=""
                    fill
                    sizes="48px"
                    className="object-cover object-left"
                  />
                </span>
                <div className="min-w-0">
                  <p className="display-type text-lg sm:text-xl leading-tight truncate">{profile.name}</p>
                  <p className="mt-0.5 text-xs sm:text-sm font-bold text-black/75 break-words">
                    {profile.role} · {profile.focus}
                  </p>
                </div>
              </div>

              <p className="mt-4 max-w-md text-xs sm:text-sm font-semibold leading-relaxed text-black/75">
                Fast project evidence for recruiters. Deeper engineering
                reasoning for technical reviewers.
              </p>
              <div className="mt-4 flex flex-wrap gap-1.5 sm:gap-2">
                {["Full-stack", "Backend-oriented", "TypeScript", "PostgreSQL"].map((item) => (
                  <span key={item} className="rounded-full bg-black px-2.5 py-1 text-[0.7rem] sm:text-xs font-black text-white">
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid gap-6 grid-cols-2 sm:grid-cols-[0.8fr_1.1fr_1.3fr] min-w-0">
              <FooterList title="Navigate">
                {navItems.map((item) => (
                  <a key={item.href} href={item.href} className="footer-link">
                    {item.label}
                  </a>
                ))}
              </FooterList>
              <FooterList title="Core Stack">
                {technicalProfile[0]?.items.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </FooterList>
              <div className="col-span-2 sm:col-span-1 min-w-0">
                <FooterList title="Contact">
                  <a href={`mailto:${profile.email}`} className="footer-link break-all">
                    {profile.email}
                  </a>
                  <a
                    href={profile.cvHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-link"
                  >
                    Resume / CV ↗
                  </a>
                  <a
                    href={profile.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-link"
                  >
                    LinkedIn ↗
                  </a>
                </FooterList>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section-container">
        <div className="grid gap-3 py-4 sm:py-5 lg:grid-cols-[1fr_auto] lg:items-center">
          <p className="text-xs leading-5 text-white/60">
            (c) 2026 {profile.name}. Built in Uganda.
          </p>
          <div className="flex flex-wrap gap-2 lg:justify-end">
            {socialLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="brand-focus-ring rounded-full bg-white/[0.06] px-3 py-1.5 text-xs font-black text-white/80 transition-colors hover:text-yellow-100"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterList({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div>
      <p className="text-[0.68rem] font-black uppercase tracking-[0.16em] text-black/58">
        {title}
      </p>
      <div className="mt-3 grid gap-2 text-xs sm:text-sm font-bold leading-5 text-black/76">
        {children}
      </div>
    </div>
  );
}

