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
                        Backend-Focused Full Stack Software Engineer
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
                      <p>Contact: +256 760 305 803</p>
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
                      <p>
                        <a
                          href="https://www.linkedin.com/in/mafabi-hussein-7a8a2436b"
                          target="_blank"
                          rel="noreferrer"
                          className="hover:text-emerald-300"
                        >
                          linkedin.com/in/mafabi-hussein-7a8a2436b
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-emerald-300/80">
                      Professional summary
                    </p>
                    <p className="text-sm leading-relaxed text-slate-200/90">
                      Backend-focused Full Stack Software Engineer with hands-on
                      experience designing, building, and deploying web and
                      mobile applications through freelance work and academic
                      projects. Strong foundation in backend development,
                      RESTful API design, and relational database modeling using
                      JavaScript, TypeScript, and Python. Comfortable working
                      across the full development lifecycle from requirements
                      gathering and system design to implementation, testing,
                      and deployment. Experienced with applied image
                      recognition concepts, mobile performance constraints, and
                      data-driven systems. Highly adaptable, self-driven, and
                      committed to continuous improvement as an engineer.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-emerald-300/80">
                      Technical skills
                    </p>
                    <div className="space-y-2 text-sm leading-relaxed text-slate-200/90">
                      <div>
                        <p className="font-semibold text-emerald-100">
                          Backend Development
                        </p>
                        <p>
                          Node.js, NestJS, Express.js, FastAPI, Django,
                          JavaScript, TypeScript, Python
                        </p>
                        <ul className="mt-1 list-disc space-y-1 pl-5">
                          <li>API development, request validation, authentication, authorization</li>
                          <li>Modular backend structure and maintainable code practices</li>
                        </ul>
                      </div>
                      <div>
                        <p className="font-semibold text-emerald-100">
                          Databases &amp; APIs
                        </p>
                        <p>PostgreSQL, Supabase, SQL, RESTful API design</p>
                        <ul className="mt-1 list-disc space-y-1 pl-5">
                          <li>Relational database modeling and schema design</li>
                          <li>Data integrity, query optimization basics, CRUD operations</li>
                          <li>Performance optimization</li>
                        </ul>
                      </div>
                      <div>
                        <p className="font-semibold text-emerald-100">
                          Frontend
                        </p>
                        <p>React, Next.js, HTML, CSS</p>
                        <ul className="mt-1 list-disc space-y-1 pl-5">
                          <li>Building responsive UIs and handling client-side state</li>
                          <li>Integrating frontend apps with third-party and custom APIs</li>
                        </ul>
                      </div>
                      <div>
                        <p className="font-semibold text-emerald-100">
                          Tools &amp; Engineering Practices
                        </p>
                        <p>
                          Git, GitHub, version control workflows, basic
                          deployment practices
                        </p>
                        <ul className="mt-1 list-disc space-y-1 pl-5">
                          <li>Feature branching, issue tracking, and collaborative development</li>
                          <li>Introductory system design and backend architecture concepts</li>
                        </ul>
                      </div>
                      <div>
                        <p className="font-semibold text-emerald-100">
                          Applied Image Recognition (Project-Based)
                        </p>
                        <ul className="mt-1 list-disc space-y-1 pl-5">
                          <li>Image annotation workflows and region-of-interest (ROI) processing</li>
                          <li>Mobile image handling and performance-aware processing</li>
                          <li>Introductory on-device inference concepts and constraints</li>
                        </ul>
                      </div>
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
                          Designed, developed, and maintained web and mobile
                          applications for small businesses, academic use
                          cases, and individual clients.
                        </li>
                        <li>
                          Built backend services using Node.js, NestJS,
                          PostgreSQL, and Supabase with a focus on clean API
                          structure and data consistency.
                        </li>
                        <li>
                          Designed RESTful APIs implementing authentication,
                          role-based access control, and request validation.
                        </li>
                        <li>
                          Worked on full application flows including user
                          onboarding, data persistence, and backend-driven
                          business logic.
                        </li>
                        <li>
                          Collaborated closely with clients to gather
                          requirements, clarify expectations, and iteratively
                          deliver functional solutions.
                        </li>
                        <li>
                          Managed projects end-to-end, including system design,
                          development, testing, deployment, and post-delivery
                          fixes.
                        </li>
                      </ul>
                    </div>
                    <div className="space-y-1 text-sm leading-relaxed text-slate-200/90">
                      <p className="font-semibold text-emerald-100">
                        Data Annotator
                      </p>
                      <p className="text-xs text-slate-400">
                        Samasource Uganda Ltd – Gulu · July 2021 – November 2021
                      </p>
                      <ul className="mt-1 list-disc space-y-1 pl-5">
                        <li>
                          Annotated, reviewed, and cleaned datasets used for
                          computer vision and machine learning models.
                        </li>
                        <li>
                          Followed structured annotation guidelines and quality
                          assurance processes to maintain high data accuracy.
                        </li>
                        <li>
                          Worked within established data pipelines, gaining
                          exposure to production-level AI workflows.
                        </li>
                        <li>
                          Developed attention to detail and consistency critical
                          for data-driven systems.
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-emerald-300/80">
                      Projects
                    </p>
                    <ul className="space-y-2 text-sm leading-relaxed text-slate-200/90">
                      <li>
                        <p className="font-semibold text-emerald-100">
                          ObjectID – Android Image Identification Application
                        </p>
                        <ul className="mt-1 list-disc space-y-1 pl-5">
                          <li>
                            Developed an Android application that allows users
                            to capture or upload images for object
                            identification.
                          </li>
                          <li>
                            Implemented region-of-interest (ROI) annotation to
                            isolate specific objects within an image.
                          </li>
                          <li>
                            Focused on efficient image handling and performance
                            optimization for low-end mobile devices.
                          </li>
                          <li>
                            Gained practical experience with mobile constraints,
                            image processing workflows, and API integration.
                          </li>
                        </ul>
                      </li>
                      <li>
                        <p className="font-semibold text-emerald-100">
                          Oakley Store – Ecommerce Progressive Web Application
                          (PWA)
                        </p>
                        <ul className="mt-1 list-disc space-y-1 pl-5">
                          <li>
                            Built a full-featured ecommerce platform with
                            product catalog, shopping cart, and checkout
                            workflows.
                          </li>
                          <li>
                            Implemented role-based access control supporting
                            vendor and customer roles across separate
                            interfaces.
                          </li>
                          <li>
                            Integrated backend APIs with a relational database
                            to manage products, orders, and user data.
                          </li>
                          <li>
                            Focused on reliability, usability, and maintainable
                            application structure.
                          </li>
                        </ul>
                      </li>
                      <li>
                        <p className="font-semibold text-emerald-100">
                          Visual AI – Image Recognition Backend System
                        </p>
                        <ul className="mt-1 list-disc space-y-1 pl-5">
                          <li>
                            Designed and implemented a backend API for image
                            recognition using a Mobile Net V3 TF-lite model as
                            a personal project.
                          </li>
                          <li>
                            Focused on efficient image handling, performance
                            considerations, and offline-friendly concepts.
                          </li>
                          <li>
                            Documented design decisions and released the project
                            as open source to demonstrate learning progress.
                          </li>
                        </ul>
                      </li>
                      <li>
                        <p className="font-semibold text-emerald-100">
                          Professional Websites
                        </p>
                        <ul className="mt-1 list-disc space-y-1 pl-5">
                          <li>
                            Designed and deployed responsive websites for
                            businesses, organizations, and personal brands.
                          </li>
                          <li>
                            Applied frontend best practices including
                            performance optimization, accessibility, and
                            SEO-friendly structure.
                          </li>
                          <li>
                            Delivered complete solutions from layout design to
                            deployment.
                          </li>
                        </ul>
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
                        Certificate in Database Management Systems – Great
                        Learning Academy (Online)
                      </li>
                      <li>
                        Certificate in Data Science Foundations – Great
                        Learning Academy (Online)
                      </li>
                    </ul>
                  </div>

                  <div className="space-y-2">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-emerald-300/80">
                      Soft skills
                    </p>
                    <ul className="list-disc space-y-1 pl-5 text-sm leading-relaxed text-slate-200/90">
                      <li>Strong problem-solving and analytical thinking</li>
                      <li>
                        Clear communication with both technical and
                        non-technical stakeholders
                      </li>
                      <li>
                        Ownership, accountability, and reliability in task
                        execution
                      </li>
                      <li>
                        Adaptability and commitment to continuous learning
                      </li>
                      <li>Teamwork and collaboration</li>
                    </ul>
                  </div>

                  <div className="space-y-1">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-emerald-300/80">
                      Availability
                    </p>
                    <p className="text-sm leading-relaxed text-slate-200/90">
                      Open to freelance, contract, and full-time software
                      engineering opportunities.
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
