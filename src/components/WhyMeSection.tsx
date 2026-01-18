"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

type Testimonial = {
  name: string;
  role: string;
  organization: string;
  quote: string;
};

const testimonials: Testimonial[] = [
  {
    name: "Mayambala Pius",
    role: "CEO",
    organization: "Oakyverse Store",
    quote:
      "Working with Hussein was one of the best decisions we made for our business. He understood our vision clearly and translated it into a reliable, well-structured system. His professionalism, communication, and technical depth stood out from day one.",
  },
  {
    name: "Assad Bashir",
    role: "Director",
    organization: "Al-Birr Charity Organization",
    quote:
      "Hussein delivered beyond our expectations. He approached our project with care, responsibility, and strong problem-solving skills. The system he built improved our operations and gave us better visibility and control.",
  },
  {
    name: "Akuma Jamaldeen",
    role: "Director",
    organization: "Pamoja Outreach Foundation",
    quote:
      "What impressed us most was Hussein’s ability to understand real organizational needs and turn them into practical solutions. He is detail-oriented, reliable, and deeply committed to quality.",
  },
  {
    name: "Muhsin Munir",
    role: "Project Partner",
    organization: "ObjectID",
    quote:
      "Partnering with Hussein on ObjectID was a smooth and productive experience. His technical decisions were solid, his architecture choices were thoughtful, and his ability to reason through complex problems made collaboration easy.",
  },
  {
    name: "Makoha Moses",
    role: "Online Business Owner",
    organization: "Email Automation Client",
    quote:
      "Hussein automated our email workflows and significantly improved our customer engagement. He explains things clearly, delivers on time, and builds solutions that actually work in real business environments.",
  },
];

export function WhyMeSection() {
  const [isCvOpen, setIsCvOpen] = useState(false);

  return (
    <section
      id="why-me"
      className="section-container"
      aria-labelledby="why-heading"
    >
      <div className="section-inner space-y-8">
        <div className="space-y-4">
          <h2
            id="why-heading"
            className="text-lg font-semibold uppercase tracking-[0.25em] text-emerald-300/80"
          >
            Why work with me
          </h2>
          <p className="max-w-3xl text-sm leading-relaxed text-slate-200/85">
            I combine clear thinking, reliable delivery, and business-focused
            engineering. I take ownership from understanding your problem, to
            designing the architecture, to shipping and iterating on
            production-grade systems.
          </p>
          <ul className="mt-3 grid gap-2 text-sm text-slate-100/85 sm:grid-cols-2">
            <li className="flex gap-3">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald-400" />
              <span>Deep problem-solving mindset</span>
            </li>
            <li className="flex gap-3">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald-400" />
              <span>Reliable, transparent communication</span>
            </li>
            <li className="flex gap-3">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald-400" />
              <span>Business-focused engineering, not just code</span>
            </li>
            <li className="flex gap-3">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald-400" />
              <span>End-to-end delivery from idea to production</span>
            </li>
          </ul>
        </div>

        <div className="rounded-2xl border border-emerald-500/25 bg-slate-900/50 p-4 shadow-[0_0_24px_rgba(15,23,42,0.9)] md:p-5">
          <div className="flex w-full items-center justify-between gap-3">
            <button
              type="button"
              onClick={() => setIsCvOpen((prev) => !prev)}
              className="flex flex-1 items-center justify-between gap-3 text-sm font-medium text-emerald-100 text-left"
              aria-expanded={isCvOpen}
            >
              <span>My CV</span>
              <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/60 bg-emerald-500/10 px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-emerald-200">
                <span>{isCvOpen ? "Hide" : "View"}</span>
              </span>
            </button>
            <a
              href="/my_CV.pdf"
              download="Mafabi_Hussein_CV.pdf"
              className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-emerald-400/50 bg-emerald-500/10 text-emerald-200 shadow-[0_0_14px_rgba(34,197,94,0.35)] transition-colors hover:bg-emerald-500/20 hover:text-emerald-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
              aria-label="Download CV (PDF)"
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 20 20"
                className="h-3.5 w-3.5 fill-current"
              >
                <path d="M10 3.5a.75.75 0 0 1 .75.75v6.19l2.22-2.22a.75.75 0 0 1 1.06 1.06l-3.5 3.5a.75.75 0 0 1-1.06 0l-3.5-3.5a.75.75 0 1 1 1.06-1.06l2.22 2.22V4.25A.75.75 0 0 1 10 3.5Zm-4.5 9.75a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5a.75.75 0 0 1-.75-.75Z" />
              </svg>
            </a>
          </div>

          <AnimatePresence initial={false}>
            {isCvOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="overflow-hidden"
              >
                <div className="mt-4 space-y-4 text-sm text-slate-100/90">
                  <div className="flex flex-col justify-between gap-3 md:flex-row md:items-baseline">
                    <div>
                      <p className="text-base font-semibold text-emerald-50">
                        Mafabi Hussein
                      </p>
                      <p className="text-xs uppercase tracking-[0.2em] text-emerald-300/80">
                        Software Engineer
                      </p>
                    </div>
                    <div className="space-y-1 text-xs text-slate-300 md:text-right">
                      <p>
                        <a
                          href="mailto:husseintech256@gmail.com"
                          className="hover:text-emerald-300"
                        >
                          husseintech256@gmail.com
                        </a>
                      </p>
                      <p>Phone: +256 760 305 803</p>
                      <p>
                        <a
                          href="https://github.com/Hussein-dev256"
                          target="_blank"
                          rel="noreferrer"
                          className="hover:text-emerald-300"
                        >
                          github.com/Hussein-dev256
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-emerald-300/80">
                      Professional summary
                    </p>
                    <p className="text-sm leading-relaxed text-slate-200/90">
                      Results-driven Software Engineer with 3 years of experience
                      designing and building reliable, scalable, and user-focused
                      digital systems. Strong background in full-stack web
                      development, backend architecture, and mobile applications,
                      with hands-on experience across modern JavaScript ecosystems,
                      databases, and AI-powered solutions.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-emerald-300/80">
                      Technical skills
                    </p>
                    <div className="space-y-1 text-sm leading-relaxed text-slate-200/90">
                      <p>
                        <span className="font-semibold text-emerald-100">
                          Programming &amp; Frameworks:
                        </span>{" "}
                        HTML, CSS, JavaScript, TypeScript, React, Next.js, Node.js,
                        NestJS, Express.js, Python, FastAPI
                      </p>
                      <p>
                        <span className="font-semibold text-emerald-100">
                          Databases &amp; Backend:
                        </span>{" "}
                        PostgreSQL, Supabase, REST APIs, RDBMS principles
                      </p>
                      <p>
                        <span className="font-semibold text-emerald-100">
                          Tools &amp; Engineering Practices:
                        </span>{" "}
                        Git &amp; GitHub, version control, basic DevOps, API design,
                        system architecture
                      </p>
                      <p>
                        <span className="font-semibold text-emerald-100">
                          Specialized Experience:
                        </span>{" "}
                        Image processing (C++), Kotlin (Android), AI-powered image recognition,
                        on-device inference systems
                      </p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-emerald-300/80">
                      Professional experience
                    </p>
                    <div className="space-y-1 text-sm leading-relaxed text-slate-200/90">
                      <p className="font-semibold text-emerald-100">
                        Freelance Software Developer
                      </p>
                      <p className="text-xs text-slate-400">2022 – Present</p>
                      <ul className="mt-1 list-disc space-y-1 pl-5">
                        <li>
                          Design and develop full-stack web and mobile applications for
                          businesses, organizations, and individuals.
                        </li>
                        <li>
                          Build scalable backend systems using Node.js, NestJS,
                          PostgreSQL, and Supabase.
                        </li>
                        <li>
                          Deliver production-ready solutions including ecommerce
                          platforms, APIs, automation systems, and PWAs.
                        </li>
                        <li>
                          Work closely with clients to understand requirements, propose
                          solutions, and deliver measurable business value.
                        </li>
                      </ul>
                    </div>
                    <div className="space-y-1 text-sm leading-relaxed text-slate-200/90">
                      <p className="font-semibold text-emerald-100">Data Annotator</p>
                      <p className="text-xs text-slate-400">
                        Samasource Uganda Ltd, Gulu · July 2021 – November 2021
                      </p>
                      <ul className="mt-1 list-disc space-y-1 pl-5">
                        <li>
                          Performed data annotation and cleaning for machine learning
                          and AI model training.
                        </li>
                        <li>
                          Ensured high data quality and accuracy for computer vision
                          datasets.
                        </li>
                        <li>
                          Gained practical exposure to real-world AI workflows and
                          data pipelines.
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-emerald-300/80">
                      Key projects
                    </p>
                    <ul className="space-y-2 text-sm leading-relaxed text-slate-200/90">
                      <li>
                        <p className="font-semibold text-emerald-100">
                          ObjectID – Android Mobile Application
                        </p>
                        <p>
                          Image identification app using Region of Interest (ROI)
                          processing, built for efficient inference and optimized
                          performance on mobile devices.
                        </p>
                      </li>
                      <li>
                        <p className="font-semibold text-emerald-100">
                          Oakley Store – Full Ecommerce PWA
                        </p>
                        <p>
                          Multi-role e-commerce platform with client PWA, vendor PWA &
                          a single backend.
                          <br />
                          Complete online shopping system with product listings, cart,
                          and checkout, including separate vendor and client PWAs with
                          role-based functionality.
                        </p>
                      </li>
                      <li>
                        <p className="font-semibold text-emerald-100">
                          Visual AI – Open-Source Image Identification system
                        </p>
                        <p>
                          An AI powered system that identifies items from images using
                          Mobile Net V3 TF-lite image classification model locally on
                          device.
                          <br />
                          This image recognition system capable of on-device
                          inference, designed for performance, efficiency, and
                          offline-friendly usage was developed as a research project
                          into on-device inference and has been made an open source
                          project with future iterations.
                        </p>
                      </li>
                      <li>
                        <p className="font-semibold text-emerald-100">
                          Websites for organizations &amp; personal brands
                        </p>
                        <p>
                          Designed and deployed multiple professional websites with
                          modern UI, responsive layouts, and optimized performance.
                        </p>
                      </li>
                    </ul>
                  </div>

                  <div className="space-y-2">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-emerald-300/80">
                      Education
                    </p>
                    <div className="space-y-1 text-sm leading-relaxed text-slate-200/90">
                      <p className="font-semibold text-emerald-100">
                        Bachelor of Science in Computer Science
                      </p>
                      <p className="text-xs text-slate-400">
                        Kampala International University · 2022 – 2025
                      </p>
                    </div>
                    <div className="space-y-1 text-sm leading-relaxed text-slate-200/90">
                      <p className="font-semibold text-emerald-100">
                        Higher Education Access Certificate (Mathematics &amp;
                        Chemistry)
                      </p>
                      <p className="text-xs text-slate-400">
                        Gulu University · 2020 – 2021
                      </p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-emerald-300/80">
                      Certifications
                    </p>
                    <ul className="list-disc space-y-1 pl-5 text-sm leading-relaxed text-slate-200/90">
                      <li>
                        Certificate in Database Management Systems – Great Learning
                        Schools (Online)
                      </li>
                    </ul>
                  </div>

                  <div className="space-y-2">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-emerald-300/80">
                      Soft skills
                    </p>
                    <ul className="list-disc space-y-1 pl-5 text-sm leading-relaxed text-slate-200/90">
                      <li>Critical thinking &amp; analytical problem solving</li>
                      <li>Clear and professional communication</li>
                      <li>AI-assisted development &amp; productivity optimization</li>
                      <li>Strong ownership &amp; accountability</li>
                      <li>
                        Ability to translate business needs into technical solutions
                      </li>
                    </ul>
                  </div>

                  <div className="space-y-1">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-emerald-300/80">
                      Availability
                    </p>
                    <p className="text-sm leading-relaxed text-slate-200/90">
                      Open to freelance work, contract opportunities, and long-term
                      collaborations.
                    </p>
                  </div>

                  <div className="pt-2">
                    <a
                      href="/my_CV.pdf"
                      download="Mafabi_Hussein_CV.pdf"
                      className="inline-flex items-center justify-center rounded-full bg-emerald-500 px-4 py-2 text-xs font-semibold text-emerald-950 shadow-[0_0_24px_rgba(34,197,94,0.6)] transition-colors hover:bg-emerald-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
                    >
                      Download CV (PDF)
                    </a>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="space-y-4">
          <h3 className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-300/80">
            Testimonials
          </h3>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {testimonials.map((testimonial) => (
              <article
                key={testimonial.name}
                className="card-glow flex h-full flex-col justify-between rounded-2xl border border-slate-700/70 bg-slate-900/70 p-4 text-sm text-slate-100/90"
              >
                <p className="text-[13px] leading-relaxed text-slate-100/90">
                  “{testimonial.quote}”
                </p>
                <div className="mt-4 text-xs font-medium text-slate-200">
                  <p>{testimonial.name}</p>
                  <p className="text-slate-400">
                    {testimonial.role}, {testimonial.organization}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
