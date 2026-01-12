"use client";

import Image from "next/image";
import { FormEvent, useEffect, useState } from "react";
import { siteConfig } from "@/config/siteConfig";

type Status =
  | { type: "idle" }
  | { type: "submitting" }
  | { type: "success"; message: string }
  | { type: "error"; message: string };

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
        if (active && typeof data?.csrfToken === "string") {
          setCsrfToken(data.csrfToken);
        }
      } catch {}
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

    if (!payload.name || !payload.email || !payload.message) {
      setStatus({ type: "error", message: "Please fill in all required fields." });
      return;
    }

    if (!isValidEmail(payload.email)) {
      setStatus({ type: "error", message: "Please provide a valid email address." });
      return;
    }

    if (
      payload.name.length > 120 ||
      payload.email.length > 160 ||
      payload.message.length > 5000
    ) {
      setStatus({ type: "error", message: "One or more fields are too long." });
      return;
    }

    setStatus({ type: "submitting" });

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = (await res.json()) as { ok: boolean; message: string };

      if (!res.ok || !data.ok) {
        setStatus({
          type: "error",
          message:
            data.message ||
            "Something went wrong while sending your message. Please try again.",
        });
        return;
      }

      form.reset();
      setStatus({ type: "success", message: data.message });
    } catch (error) {
      console.error("Contact form submit error", error);
      setStatus({
        type: "error",
        message:
          "Something went wrong while sending your message. Please try again.",
      });
    }
  }

  const isSubmitting = status.type === "submitting";

  return (
    <section
      id="contact"
      className="section-container"
      aria-labelledby="contact-heading"
    >
      <div className="section-inner flex flex-col items-center gap-10">
        <div className="w-full max-w-xl text-center">
          <h2
            id="contact-heading"
            className="text-lg font-semibold uppercase tracking-[0.25em] text-emerald-300/80"
          >
            TALK TO ME
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-slate-200/85">
            Let&apos;s build something meaningful together. Share a bit about your
            project, timeline, and goals — I&apos;ll get back to you with next
            steps.
          </p>

          <form
            id="contact-form"
            onSubmit={handleSubmit}
            className="mt-6 space-y-4 text-sm text-left"
            noValidate
          >
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-1.5">
                <label htmlFor="name" className="text-xs uppercase tracking-[0.18em] text-slate-300">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  required
                  minLength={2}
                  maxLength={120}
                  className="h-10 w-full rounded-full border border-emerald-500/20 bg-black/40 px-4 text-sm text-emerald-50 outline-none ring-emerald-500/60 placeholder:text-slate-500 focus:border-emerald-400 focus:ring"
                  placeholder="Your name"
                />
              </div>
              <div className="space-y-1.5">
                <label htmlFor="email" className="text-xs uppercase tracking-[0.18em] text-slate-300">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  maxLength={160}
                  className="h-10 w-full rounded-full border border-emerald-500/20 bg-black/40 px-4 text-sm text-emerald-50 outline-none ring-emerald-500/60 placeholder:text-slate-500 focus:border-emerald-400 focus:ring"
                  placeholder="you@example.com"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label htmlFor="company" className="text-xs uppercase tracking-[0.18em] text-slate-300">
                Company / Organization (optional)
              </label>
              <input
                id="company"
                name="company"
                maxLength={160}
                className="h-10 w-full rounded-full border border-emerald-500/20 bg-black/40 px-4 text-sm text-emerald-50 outline-none ring-emerald-500/60 placeholder:text-slate-500 focus:border-emerald-400 focus:ring"
                placeholder="Where you work or who this is for"
              />
            </div>

            <div className="space-y-1.5">
              <label htmlFor="message" className="text-xs uppercase tracking-[0.18em] text-slate-300">
                Project details
              </label>
              <textarea
                id="message"
                name="message"
                required
                minLength={10}
                maxLength={5000}
                className="min-h-[120px] w-full rounded-2xl border border-emerald-500/20 bg-black/40 px-4 py-3 text-sm text-emerald-50 outline-none ring-emerald-500/60 placeholder:text-slate-500 focus:border-emerald-400 focus:ring"
                placeholder="Share what you want to build, your timeline, and what success looks like."
              />
            </div>

            {/* Honeypot field for spam bots */}
            <div className="hidden" aria-hidden="true">
              <label htmlFor="website">Website</label>
              <input id="website" name="website" type="text" autoComplete="off" tabIndex={-1} />
            </div>

            <div className="mt-4 flex flex-col items-center gap-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center gap-2 rounded-full border border-emerald-400/40 bg-[#02050e] px-8 py-2 text-sm font-medium tracking-wide text-emerald-100 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {isSubmitting ? "Sending..." : "Send message"}
              </button>
              {status.type === "success" && (
                <p className="text-xs text-emerald-300">{status.message}</p>
              )}
              {status.type === "error" && (
                <p className="text-xs text-red-300">{status.message}</p>
              )}
            </div>
          </form>
        </div>

        <div className="mt-16 flex w-full flex-col items-center gap-6">
          <h3 className="text-base font-medium text-emerald-50 md:text-lg">Contact me</h3>

          <div className="inline-flex flex-nowrap items-center justify-center gap-2 rounded-2xl border border-emerald-500/70 bg-[#0b0f14]/80 px-2 py-2 sm:gap-4 sm:rounded-3xl sm:px-4 sm:py-3 md:gap-6 md:px-6 md:py-4">
            {/* Gmail -> scroll to contact form */}
            <a
              href="#contact-form"
              className="flex w-8 flex-col items-center gap-1 text-[11px] text-slate-200 transition-colors hover:text-emerald-300 sm:w-9 md:w-10"
              aria-label="Go to contact form"
            >
              <Image src="/Gmail icon.svg" alt="Gmail icon" width={40} height={40} className="h-7 w-7 sm:h-8 sm:w-8 md:h-9 md:w-9" />
              <span className="hidden text-[10px] text-slate-400 sm:block sm:text-[11px]">Gmail</span>
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/256760305803"
              target="_blank"
              rel="noreferrer"
              className="flex w-8 flex-col items-center gap-1 text-[11px] text-slate-200 transition-colors hover:text-emerald-300 sm:w-9 md:w-10"
              aria-label="Chat on WhatsApp"
            >
              <Image src="/WhatsApp Icon.svg" alt="WhatsApp icon" width={40} height={40} className="h-7 w-7 sm:h-8 sm:w-8 md:h-9 md:w-9" />
              <span className="hidden text-[10px] text-slate-400 sm:block sm:text-[11px]">WhatsApp</span>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/hussein-hussein-7a8a2436b/"
              target="_blank"
              rel="noreferrer"
              className="flex w-8 flex-col items-center gap-1 text-[11px] text-slate-200 transition-colors hover:text-emerald-300 sm:w-9 md:w-10"
              aria-label="View LinkedIn profile"
            >
              <Image src="/LinkedIn icon.svg" alt="LinkedIn icon" width={40} height={40} className="h-7 w-7 sm:h-8 sm:w-8 md:h-9 md:w-9" />
              <span className="hidden text-[10px] text-slate-400 sm:block sm:text-[11px]">LinkedIn</span>
            </a>

            {/* X (Twitter) */}
            <a
              href="https://x.com/son_of_antonn"
              target="_blank"
              rel="noreferrer"
              className="flex w-8 flex-col items-center gap-1 text-[11px] text-slate-200 transition-colors hover:text-emerald-300 sm:w-9 md:w-10"
              aria-label="View X profile"
            >
              <Image src="/X icon.svg" alt="X icon" width={40} height={40} className="h-7 w-7 sm:h-8 sm:w-8 md:h-9 md:w-9" />
              <span className="hidden text-[10px] text-slate-400 sm:block sm:text-[11px]">X</span>
            </a>

            {/* Call */}
            <a
              href="tel:+256760305803"
              className="flex w-8 flex-col items-center gap-1 text-[11px] text-slate-200 transition-colors hover:text-emerald-300 sm:w-9 md:w-10"
              aria-label="Call Hussein"
            >
              <Image src="/call icon.svg" alt="Phone call icon" width={40} height={40} className="h-7 w-7 sm:h-8 sm:w-8 md:h-9 md:w-9" />
              <span className="hidden text-[10px] text-slate-400 sm:block sm:text-[11px]">Call</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

type ContactIconProps = {
  label: string;
  href: string;
  initials: string;
};

function ContactIcon({ label, href, initials }: ContactIconProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      title={label}
      className="card-glow flex h-11 w-11 items-center justify-center rounded-full text-xs font-semibold uppercase tracking-wide text-emerald-50 transition-transform duration-150 hover:-translate-y-0.5"
    >
      {initials}
    </a>
  );
}
