"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

type FaqGroupId = "getting-started" | "quality" | "communication";

type FaqItem = {
  id: string;
  question: string;
  answer: string;
};

type FaqGroup = {
  id: FaqGroupId;
  title: string;
  items: FaqItem[];
};

const FAQ_GROUPS: FaqGroup[] = [
  {
    id: "getting-started",
    title: "Getting Started",
    items: [
      {
        id: "getting-started-q1",
        question: "What services do you offer?",
        answer:
          "I design and build modern websites, web applications, and custom software solutions. This includes UI/UX design, frontend and backend development, API integrations, performance optimization, and deployment.",
      },
      {
        id: "getting-started-q2",
        question: "How much do you charge for a project?",
        answer:
          "Pricing depends on the scope, complexity, and timeline of the project. After discussing your requirements, I’ll provide a clear and transparent quote with no hidden costs.",
      },
      {
        id: "getting-started-q3",
        question: "How long does a project usually take?",
        answer:
          "Most websites take between 1–3 weeks, while web applications may take 3–6 weeks depending on features and integrations. A clear timeline is provided before we begin.",
      },
      {
        id: "getting-started-q4",
        question: "What do you need from me to get started?",
        answer:
          "I’ll need a brief description of your idea or business, your goals, and any existing content or references. I’ll guide you step by step if you’re not sure.",
      },
    ],
  },
  {
    id: "quality",
    title: "Quality & Reliability",
    items: [
      {
        id: "quality-q5",
        question: "Will my website be fast, secure, and mobile-friendly?",
        answer:
          "Yes. Every project is built with performance, security, SEO, and mobile responsiveness as core priorities.",
      },
      {
        id: "quality-q6",
        question: "Can you redesign or improve an existing website?",
        answer:
          "Yes. I can redesign, optimize, or completely rebuild existing websites to improve performance, usability, and conversion.",
      },
      {
        id: "quality-q7",
        question: "Will I be able to manage or update the site myself?",
        answer:
          "Yes. Where applicable, I build systems that are easy to manage, and I can provide guidance or documentation if needed.",
      },
      {
        id: "quality-q8",
        question: "What if I'm not satisfied with the result?",
        answer:
          "I work closely with clients throughout the project and allow reasonable revisions to ensure the final result meets expectations.",
      },
    ],
  },
  {
    id: "communication",
    title: "Communication & Support",
    items: [
      {
        id: "communication-q9",
        question: "Do you work with clients outside your country?",
        answer:
          "Yes. I work with both local and international clients. Communication is handled via email, WhatsApp, Zoom, or Google Meet.",
      },
      {
        id: "communication-q10",
        question: "Do you provide maintenance and support after delivery?",
        answer:
          "Yes. I offer optional maintenance and support packages that cover updates, bug fixes, and performance monitoring.",
      },
      {
        id: "communication-q11",
        question: "How do we communicate during the project?",
        answer:
          "We’ll have regular updates and check-ins using the communication method you’re most comfortable with.",
      },
    ],
  },
];

export function FaqSection() {
  const [openGroupId, setOpenGroupId] = useState<FaqGroupId | null>(
    "getting-started",
  );
  const [openQuestionId, setOpenQuestionId] = useState<string | null>(
    "getting-started-q1",
  );

  const handleGroupChange = (groupId: FaqGroupId) => {
    // If clicking the already-open group, collapse it entirely
    if (groupId === openGroupId) {
      setOpenGroupId(null);
      setOpenQuestionId(null);
      return;
    }

    // Open a new group and default to its first question
    setOpenGroupId(groupId);
    const group = FAQ_GROUPS.find((g) => g.id === groupId);
    const firstQuestion = group?.items[0];
    setOpenQuestionId(firstQuestion ? firstQuestion.id : null);
  };

  const handleQuestionChange = (groupId: FaqGroupId, questionId: string) => {
    if (groupId !== openGroupId) {
      setOpenGroupId(groupId);
      setOpenQuestionId(questionId);
      return;
    }

    // If clicking the same open question, collapse it
    if (questionId === openQuestionId) {
      setOpenQuestionId(null);
      return;
    }

    // Otherwise switch to the newly selected question within this group
    setOpenQuestionId(questionId);
  };

  return (
    <section id="faq" className="section-container" aria-labelledby="faq-heading">
      <div className="section-inner space-y-8">
        <header className="space-y-2 text-center md:text-left">
          <h2
            id="faq-heading"
            className="text-lg font-semibold uppercase tracking-[0.25em] text-emerald-300/80"
          >
            Questions you might have
          </h2>
          <p className="text-sm text-slate-200/80">Quick answers to help you decide.</p>
        </header>
        <div className="space-y-3">
          {FAQ_GROUPS.map((group) => {
            const isOpen = openGroupId === group.id;
            return (
              <div
                key={group.id}
                className="rounded-2xl bg-slate-900/60 px-4 py-3 shadow-[0_0_24px_rgba(15,23,42,0.9)] ring-1 ring-slate-800/80"
              >
                <button
                  type="button"
                  onClick={() => handleGroupChange(group.id)}
                  className="flex w-full items-center justify-between gap-3 text-left text-sm font-medium text-emerald-100"
                  aria-expanded={isOpen}
                >
                  <span>{group.title}</span>
                  <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-slate-800 text-emerald-300">
                    <svg aria-hidden="true" viewBox="0 0 20 20" className="h-3.5 w-3.5 fill-none stroke-current stroke-2">
                      <path d="M5 8l5 5 5-5" />
                    </svg>
                  </span>
                </button>
                {isOpen && (
                  <div className="overflow-hidden">
                    <div className="mt-3 divide-y divide-slate-800/80 text-sm text-slate-100/90">
                      {group.items.map((item) => {
                        const isItemOpen = isOpen && openQuestionId === item.id;
                        return (
                          <div key={item.id} className="py-2 first:pt-0 last:pb-0">
                            <button
                              type="button"
                              onClick={() => handleQuestionChange(group.id, item.id)}
                              className="flex w-full items-center justify-between gap-3 text-left text-[13px] font-medium text-slate-50"
                              aria-expanded={isItemOpen}
                            >
                              <span>{item.question}</span>
                              <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-slate-800 text-emerald-300">
                                <svg aria-hidden="true" viewBox="0 0 20 20" className="h-3 w-3 fill-none stroke-current stroke-2">
                                  <path d="M5 8l5 5 5-5" />
                                </svg>
                              </span>
                            </button>
                            {isItemOpen && (
                              <div className="overflow-hidden">
                                <p className="pt-1 text-[13px] leading-relaxed text-slate-200/85">
                                  {item.answer}
                                </p>
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

