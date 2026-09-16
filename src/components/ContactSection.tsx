"use client";

import { FormEvent, useEffect, useState } from "react";
import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { profile } from "@/content/portfolio";
import { transitions } from "@/lib/animations";
import { validatePayload } from "@/lib/validate";

type Status =
  | { type: "idle" }
  | { type: "submitting" }
  | { type: "success"; message: string }
  | { type: "error"; message: string };

const contactLinks = [
  { label: "Email", detail: profile.email, href: `mailto:${profile.email}`, external: false },
  { label: "GitHub", detail: "Public repositories", href: profile.social.github, external: true },
  { label: "LinkedIn", detail: "Professional profile", href: profile.social.linkedin, external: true },
  { label: "CV", detail: "Download resume", href: profile.cvHref, external: true },
] as const;

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export function ContactSection() {
  const [status, setStatus] = useState<Status>({ type: "idle" });
  const [csrfToken, setCsrfToken] = useState<string | null>(null);

  useEffect(() => {
    let active = true;
    (async () => {
      try {
        const res = await fetch("/api/contact", { method: "GET" });
        const data = await res.json();
        if (active && typeof data?.csrfToken === "string") setCsrfToken(data.csrfToken);
      } catch {
        if (active) setCsrfToken(null);
      }
    })();
    return () => {
      active = false;
    };
  }, []);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: String(formData.get("name") || "").trim(),
      email: String(formData.get("email") || "").trim(),
      message: String(formData.get("message") || "").trim(),
      company: String(formData.get("company") || "").trim() || undefined,
      _honeypot: String(formData.get("website") || "").trim(),
      csrf: csrfToken ?? "",
    };

    const validationError = validatePayload({
      name: payload.name,
      email: payload.email,
      message: payload.message,
    });
    if (validationError) {
      setStatus({ type: "error", message: validationError });
      return;
    }

    if (!isValidEmail(payload.email)) {
      setStatus({ type: "error", message: "Please provide a valid email address." });
      return;
    }

    if (!csrfToken) {
      setStatus({
        type: "error",
        message: "The secure form session is still preparing. Please wait a moment and try again.",
      });
      return;
    }

    setStatus({ type: "submitting" });

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = (await res.json()) as { ok: boolean; message: string };

      if (!res.ok || !data.ok) {
        setStatus({
          type: "error",
          message: data.message || "Something went wrong while sending your message. Please try again.",
        });
        return;
      }

      form.reset();
      setStatus({ type: "success", message: data.message });
    } catch (error) {
      console.error("Contact form submit error", error);
      setStatus({
        type: "error",
        message: "Something went wrong while sending your message. Please try again.",
      });
    }
  }

  const isSubmitting = status.type === "submitting";

  return (
    <section
      id="contact"
      className="stage-section bg-[#050505] text-white border-t border-white/10"
      aria-labelledby="contact-heading"
    >
      <div className="section-container">
        <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <div>
            <p className="section-kicker dark-kicker">Contact</p>
            <h2
              id="contact-heading"
              className="brand-heading mt-4 max-w-2xl text-balance text-3xl sm:text-5xl lg:text-6xl text-white"
            >
              Looking for a{" "}
              <span className="editorial-type font-normal text-yellow-300">
                software engineer?
              </span>
            </h2>
            <p className="mt-4 max-w-xl text-sm sm:text-base font-medium leading-relaxed text-white/75 border-l-2 border-yellow-300/30 pl-4">
              Explore the systems I have built, review my technical work, or
              get in touch to discuss an engineering opportunity or collaboration.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {contactLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noreferrer" : undefined}
                  className="brand-focus-ring group rounded-[1.1rem] border border-white/10 bg-white/[0.04] p-4 text-white shadow-xs transition duration-300 hover:-translate-y-0.5 hover:border-white/25 hover:bg-white/[0.08] hover:shadow-sm"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-black text-white">{item.label}</span>
                    <span className="text-xs text-white/40 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                      ↗
                    </span>
                  </div>
                  <span className="mt-1 block truncate text-xs font-medium text-white/60">{item.detail}</span>
                </a>
              ))}
            </div>
          </div>

          <form
            id="contact-form"
            onSubmit={handleSubmit}
            className="space-y-5 rounded-[1.4rem] border border-white/10 bg-white/[0.03] p-6 sm:p-7 text-white shadow-sm"
            noValidate
          >
            <div className="grid gap-4 md:grid-cols-2">
              <FormField label="Name" htmlFor="name">
                <input
                  id="name"
                  name="name"
                  required
                  minLength={2}
                  maxLength={120}
                  autoComplete="name"
                  className="brand-focus-ring h-12 w-full rounded-[0.9rem] border border-white/12 bg-white/[0.05] px-4 text-sm font-medium text-white placeholder:text-white/40 transition-colors focus:bg-white/[0.08] focus:border-yellow-400"
                  placeholder="Your name"
                />
              </FormField>
              <FormField label="Email" htmlFor="email">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  maxLength={160}
                  autoComplete="email"
                  className="brand-focus-ring h-12 w-full rounded-[0.9rem] border border-white/12 bg-white/[0.05] px-4 text-sm font-medium text-white placeholder:text-white/40 transition-colors focus:bg-white/[0.08] focus:border-yellow-400"
                  placeholder="you@example.com"
                />
              </FormField>
            </div>

            <FormField label="Company / Team" htmlFor="company">
              <input
                id="company"
                name="company"
                maxLength={160}
                autoComplete="organization"
                className="brand-focus-ring h-12 w-full rounded-[0.9rem] border border-white/12 bg-white/[0.05] px-4 text-sm font-medium text-white placeholder:text-white/40 transition-colors focus:bg-white/[0.08] focus:border-yellow-400"
                placeholder="Company, team, or hiring context"
              />
            </FormField>

            <FormField label="Message" htmlFor="message">
              <textarea
                id="message"
                name="message"
                required
                minLength={10}
                maxLength={5000}
                className="brand-focus-ring min-h-[145px] w-full rounded-[0.9rem] border border-white/12 bg-white/[0.05] px-4 py-3 text-sm font-medium leading-6 text-white placeholder:text-white/40 transition-colors focus:bg-white/[0.08] focus:border-yellow-400"
                placeholder="Share the opportunity, role context, technical question, or next step."
              />
            </FormField>

            <div className="hidden" aria-hidden="true">
              <label htmlFor="website">Website</label>
              <input id="website" name="website" type="text" autoComplete="off" tabIndex={-1} />
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <motion.button
                whileHover={{ y: -2, transition: transitions.easeOut }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={isSubmitting}
                className="brand-focus-ring inline-flex min-h-12 items-center justify-center rounded-full bg-yellow-300 px-7 text-sm font-black text-black transition-colors hover:bg-yellow-200 disabled:cursor-not-allowed disabled:opacity-70 shadow-sm"
              >
                {isSubmitting ? "Sending..." : "Send message →"}
              </motion.button>
              <p className="text-xs leading-5 text-white/50">
                Validation, rate limits, and secure token protection are active.
              </p>
            </div>

            <div aria-live="polite">
              {status.type === "success" && (
                <p className="rounded-[1rem] border border-emerald-400/30 bg-emerald-950/40 px-4 py-3 text-sm font-semibold text-emerald-300">
                  {status.message}
                </p>
              )}
              {status.type === "error" && (
                <p className="rounded-[1rem] border border-red-400/30 bg-red-950/40 px-4 py-3 text-sm font-semibold text-red-300">
                  {status.message}
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

function FormField({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: ReactNode;
}) {
  return (
    <div className="space-y-2">
      <label htmlFor={htmlFor} className="text-xs font-black uppercase tracking-[0.16em] text-white/70">
        {label}
      </label>
      {children}
    </div>
  );
}
