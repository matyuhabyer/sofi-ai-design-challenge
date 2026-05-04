"use client";

import { useState } from "react";

const faqs = [
  {
    question: "Do I need to log in?",
    answer:
      "No. Just paste your TikTok profile link and GIA gets to work immediately. No account, no permissions, no data stored.",
  },
  {
    question: "What data do you analyze?",
    answer:
      "We only use publicly available TikTok data—your videos, captions, and comments. We never access private information or require any credentials.",
  },
  {
    question: "How long does it take?",
    answer:
      "Usually 30–60 seconds. The exact time depends on how many videos and comments your profile has.",
  },
  {
    question: "Is this for beginners or advanced creators?",
    answer:
      "Both. The report is written in plain language so anyone can act on it immediately, but the insights are deep enough to satisfy experienced creators who want to level up.",
  },
  {
    question: "Which TikTok profiles work?",
    answer:
      "Any public TikTok profile. If your account is private, you'll need to make it public first (you can switch back after).",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  function toggle(i: number) {
    setOpenIndex(openIndex === i ? null : i);
  }

  return (
    <section id="faq" className="scroll-mt-16 bg-surface-tint py-20 px-6">
      <div className="mx-auto max-w-2xl">
        <div className="mb-12 text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-brand-cyan">
            ❓ FAQ
          </span>
          <h2 className="mt-3 text-3xl font-bold text-brand-navy sm:text-4xl">
            Frequently asked questions
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={faq.question}
              className="overflow-hidden rounded-xl border border-brand-navy/10 bg-background shadow-sm"
            >
              <button
                onClick={() => toggle(i)}
                className="flex w-full items-center justify-between px-6 py-5 text-left"
                aria-expanded={openIndex === i}
              >
                <span className="font-medium text-brand-navy">{faq.question}</span>
                <span
                  className={`ml-4 shrink-0 text-brand-cyan transition-transform duration-200 ${
                    openIndex === i ? "rotate-45" : ""
                  }`}
                >
                  ✚
                </span>
              </button>

              {openIndex === i && (
                <div className="border-t border-brand-navy/10 px-6 py-5">
                  <p className="text-sm leading-relaxed text-brand-navy/75">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
