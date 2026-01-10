"use client";

import { FormEvent, useState } from "react";
import { siteConfig } from "@/config/siteConfig";

type Status =
  | { type: "idle" }
  | { type: "submitting" }
  | { type: "success"; message: string }
  | { type: "error"; message: string };

export function ContactSection() {
  const [status, setStatus] = useState<Status>({ type: "idle" });

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
    };

    if (!payload.name || !payload.email || !payload.message) {
      setStatus({ type: "error", message: "Please fill in all required fields." });
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
      <div className="section-inner grid gap-10 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
        <div>
          <h2
            id="contact-heading"
            className="text-lg font-semibold uppercase tracking-[0.25em] text-emerald-300/80"
          >
            Contact
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-slate-200/85">
            Let&apos;s build something meaningful together. Share a bit about your
            project, timeline, and goals — I&apos;ll get back to you with next
            steps.
          </p>

          <form
            onSubmit={handleSubmit}
            className="mt-6 space-y-4 text-sm"
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

            <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
              <button
                type="submit"
                disabled={isSubmitting}
                className="gradient-pill px-8 py-2 text-sm disabled:cursor-not-allowed disabled:opacity-70"
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

        <div className="flex flex-col items-center justify-between gap-6 text-center md:items-start md:text-left">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-emerald-300/80">
              Direct links
            </p>
            <p className="mt-2 text-sm text-slate-200/85">
              Prefer to reach out directly? Use any of the channels below. Each
              icon opens the official account in a new tab.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <ContactIcon
              label="Email"
              href={`mailto:${siteConfig.emailFallback}`}
              initials="M"
            />
            <ContactIcon
              label="WhatsApp"
              href={siteConfig.social.whatsapp}
              initials="W"
            />
            <ContactIcon
              label="GitHub"
              href={siteConfig.social.github}
              initials="G"
            />
            <ContactIcon
              label="LinkedIn"
              href={siteConfig.social.linkedin}
              initials="in"
            />
            <ContactIcon
              label="X (Twitter)"
              href={siteConfig.social.x}
              initials="X"
            />
          </div>

          <p className="text-[11px] text-slate-400">
            Let&apos;s build something meaningful together.
          </p>
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
