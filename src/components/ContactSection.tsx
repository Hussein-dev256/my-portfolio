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
  { label: "CV", detail: "Download resume", href: profile.cvHref, external: false },
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
      className="stage-section bg-[#050505] text-white"
      aria-labelledby="contact-heading"
    >
      <div className="section-container">
        <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <div>
            <p className="section-kicker dark-kicker">Contact</p>
            <h2
              id="contact-heading"
              className="display-type mt-4 max-w-3xl text-balance text-5xl leading-[0.92] text-white sm:text-6xl lg:text-7xl"
            >
              Looking for a software engineer?
            </h2>
            <p className="brand-copy mt-5 max-w-xl font-semibold text-white/68">
              Explore the systems I have built, review my technical work, or
              get in touch to discuss an engineering opportunity.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {contactLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noreferrer" : undefined}
                  className="brand-focus-ring rounded-[1rem] bg-[#141414] px-4 py-4 text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#1c1c1c]"
                >
                  <span className="block text-sm font-black">{item.label}</span>
                  <span className="mt-1 block truncate text-xs text-white/58">{item.detail}</span>
                </a>
              ))}
            </div>
          </div>

          <form
            id="contact-form"
            onSubmit={handleSubmit}
            className="space-y-5 rounded-[1.4rem] border border-white/10 bg-[#080807] p-5 text-white shadow-[0_24px_70px_rgba(0,0,0,0.24)] sm:p-6"
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
                  className="brand-focus-ring h-12 w-full rounded-[0.9rem] border border-white/12 bg-white/[0.06] px-4 text-sm text-white placeholder:text-white/35"
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
                  className="brand-focus-ring h-12 w-full rounded-[0.9rem] border border-white/12 bg-white/[0.06] px-4 text-sm text-white placeholder:text-white/35"
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
                className="brand-focus-ring h-12 w-full rounded-[0.9rem] border border-white/12 bg-white/[0.06] px-4 text-sm text-white placeholder:text-white/35"
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
                className="brand-focus-ring min-h-[150px] w-full rounded-[0.9rem] border border-white/12 bg-white/[0.06] px-4 py-3 text-sm leading-6 text-white placeholder:text-white/35"
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
                className="brand-focus-ring inline-flex min-h-12 items-center justify-center rounded-full bg-yellow-300 px-6 text-sm font-black text-black transition-colors hover:bg-yellow-200 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {isSubmitting ? "Sending..." : "Send message"}
              </motion.button>
              <p className="text-xs leading-5 text-white/50">
                Validation, rate limits, and secure token protection are active.
              </p>
            </div>

            <div aria-live="polite">
              {status.type === "success" && (
                <p className="rounded-[1rem] border border-yellow-300/35 bg-yellow-300/10 px-4 py-3 text-sm text-yellow-100">
                  {status.message}
                </p>
              )}
              {status.type === "error" && (
                <p className="rounded-[1rem] border border-red-300/35 bg-red-500/10 px-4 py-3 text-sm text-red-100">
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
      <label htmlFor={htmlFor} className="text-xs font-black uppercase tracking-[0.16em] text-white/68">
        {label}
      </label>
      {children}
    </div>
  );
}
