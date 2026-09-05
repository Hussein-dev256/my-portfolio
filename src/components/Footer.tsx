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
      <div className="bg-yellow-300 py-10 text-black">
        <div className="section-container">
          <div className="mb-10 flex flex-col gap-5 border-b border-black/18 pb-8 lg:flex-row lg:items-end lg:justify-between">
            <p className="display-type max-w-4xl text-5xl leading-[0.9] sm:text-6xl lg:text-7xl">
              Architecture
              <span className="editorial-type mx-3 font-normal">to</span>
              production.
            </p>
            <a
              href={profile.cvHref}
              className="brand-focus-ring inline-flex min-h-12 w-fit items-center rounded-full bg-black px-6 text-sm font-black text-white transition-colors hover:bg-[#181818]"
            >
              View CV
            </a>
          </div>

          <div className="grid gap-8 lg:grid-cols-[1fr_1.35fr]">
            <div>
              <div className="flex min-w-0 items-center gap-3">
                <span className="relative h-14 w-14 flex-shrink-0 overflow-hidden rounded-full bg-black">
                  <Image
                    src="/my%20logo.svg"
                    alt=""
                    fill
                    sizes="56px"
                    className="object-cover object-left"
                  />
                </span>
                <div className="min-w-0">
                  <p className="display-type text-xl leading-tight">{profile.name}</p>
                  <p className="mt-1 text-sm font-bold text-black/65">
                    {profile.role} / {profile.focus}
                  </p>
                </div>
              </div>

              <p className="mt-6 max-w-md text-sm font-semibold leading-7 text-black/72">
                Fast project evidence for recruiters. Deeper engineering
                reasoning for technical reviewers.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {["Full-stack", "Backend-oriented", "TypeScript", "PostgreSQL"].map((item) => (
                  <span key={item} className="rounded-full bg-black px-3 py-2 text-xs font-black text-white">
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-3">
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
              <FooterList title="Contact">
                <a href={`mailto:${profile.email}`} className="footer-link">
                  {profile.email}
                </a>
                <a href={profile.cvHref} className="footer-link">
                  CV
                </a>
                <a href={`https://${profile.website}`} className="footer-link">
                  {profile.website}
                </a>
              </FooterList>
            </div>
          </div>
        </div>
      </div>

      <div className="section-container">
        <div className="grid gap-4 py-5 lg:grid-cols-[1fr_auto] lg:items-center">
          <p className="text-xs leading-5 text-white/56">
            (c) 2026 {profile.name}. Built in Uganda.
          </p>
          <div className="flex flex-wrap gap-2 lg:justify-end">
            {socialLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="brand-focus-ring rounded-full bg-white/[0.06] px-3 py-2 text-xs font-black text-white/76 transition-colors hover:text-yellow-100"
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
      <div className="mt-3 grid gap-2 text-sm font-bold leading-5 text-black/76">
        {children}
      </div>
    </div>
  );
}
