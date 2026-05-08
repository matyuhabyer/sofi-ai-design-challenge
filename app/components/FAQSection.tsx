"use client";

import { useState } from "react";

const faqs = [
  {
    question: "Do I need to connect my Tiktok account?",
    answer:
      "No. GIA only analyzes publicly available TikTok data. No login or account connection is required.",
  },
  {
    question: "Which Tiktok profiles work?",
    answer:
      "Any public TikTok profile. If your account is private, you'll need to make it public first — you can switch back after.",
  },
  {
    question: "Is my data safe?",
    answer:
      "Yes. GIA only uses publicly accessible TikTok content and does not require account access or passwords.",
  },
  {
    question: "How long does it take?",
    answer:
      "Usually 30–60 seconds. The exact time depends on how many videos and comments your profile has.",
  },
  {
    question: "What makes GIA different from Tiktok Analytics?",
    answer:
      "TikTok Analytics shows you numbers. GIA explains why those numbers happened, what patterns exist, and what actions to take next.",
  },
  {
    question: "Is this for beginners or advanced creators?",
    answer:
      "Both. The report is written in plain language so anyone can act on it immediately, but the insights are deep enough to satisfy experienced creators who want to level up.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  function toggle(i: number) {
    setOpenIndex(openIndex === i ? null : i);
  }

  return (
    <section
      id="faq"
      className="relative scroll-mt-16 overflow-hidden border-b-[1.5px] border-brand-navy/10 bg-linear-to-br from-[#121a3c] via-brand-navy to-[#24195a] px-4 py-16 text-white sm:px-6 sm:py-20"
    >
      <div className="relative mx-auto grid min-w-0 max-w-6xl gap-6 justify-items-center lg:gap-8">
        <div className="mx-auto max-w-xl text-center">
          <span className="inline-flex items-center rounded-full border border-brand-cyan/35 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.24em] text-brand-cyan-bright">
            ❓ FAQ
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="mx-auto grid w-full max-w-4xl gap-2 md:grid-cols-2">
          {faqs.map((faq, i) => (
            <div
              key={faq.question}
              className="h-full overflow-hidden rounded-3xl border border-white/10 bg-white/6 shadow-lg shadow-black/10 backdrop-blur-sm"
            >
              <button
                onClick={() => toggle(i)}
                className="flex w-full items-start justify-between gap-3 px-4 py-3 text-left transition hover:bg-white/4 sm:px-5 sm:py-4"
                aria-expanded={openIndex === i}
              >
                <span className="min-w-0 flex-1 text-sm font-semibold text-white sm:text-base">
                  {faq.question}
                </span>
                <span
                  className={`mt-0.5 shrink-0 rounded-full border border-white/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-brand-cyan-bright transition-transform duration-200 ${
                    openIndex === i ? "rotate-45" : ""
                  }`}
                >
                  +
                </span>
              </button>

              {openIndex === i && (
                <div className="border-t border-white/10 px-4 py-3 sm:px-5 sm:py-4">
                  <p className="text-sm leading-relaxed text-white/70">
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
