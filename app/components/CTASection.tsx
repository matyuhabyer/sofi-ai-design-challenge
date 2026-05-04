"use client";

import { useState } from "react";

const AVATARS = [
  { initials: "KL", className: "bg-brand-navy" },
  { initials: "MR", className: "bg-brand-cyan" },
  { initials: "JT", className: "bg-brand-cyan-bright" },
  { initials: "AC", className: "bg-brand-navy/85" },
  {
    initials: "SB",
    className: "bg-gradient-to-br from-brand-cyan to-brand-cyan-bright",
  },
] as const;

export default function CTASection() {
  const [handle, setHandle] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const cleaned = handle.trim().replace(/^@/, "") || "yourtiktokhandle";
    alert(`Analyze account (demo): @${cleaned}`);
  }

  return (
    <section
      id="early-access"
      className="relative scroll-mt-16 overflow-hidden bg-background px-4 py-16 sm:px-6 sm:py-24"
    >
      <div className="pointer-events-none absolute -top-40 left-1/2 h-80 w-[28rem] -translate-x-1/2 rounded-full bg-brand-cyan-bright/20 blur-3xl sm:w-[36rem]" />
      <div className="pointer-events-none absolute -bottom-32 right-0 h-72 w-72 rounded-full bg-brand-cyan/15 blur-3xl" />

      <div className="relative mx-auto max-w-2xl text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-brand-cyan/35 bg-brand-cyan/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-brand-navy">
          <span
            className="h-2 w-2 shrink-0 rounded-full bg-brand-cyan motion-safe:animate-pulse"
            aria-hidden
          />
          Now in early access
        </span>

        <h2 className="mt-8 text-balance text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl lg:text-[2.75rem] lg:leading-tight">
          Stop guessing.
          <br />
          Start posting{" "}
          <span className="bg-gradient-to-r from-brand-cyan to-brand-cyan-bright bg-clip-text text-transparent">
            what works.
          </span>
        </h2>

        <p className="mx-auto mt-5 max-w-lg text-pretty text-base leading-relaxed text-brand-navy/75 sm:text-lg">
          GIA analyzes your whole account and tells you exactly what to film next. Takes 60 seconds to
          set up.
        </p>

        <form
          onSubmit={handleSubmit}
          className="mx-auto mt-10 flex w-full max-w-md flex-col gap-3 sm:max-w-lg"
        >
          <label htmlFor="cta-tiktok-handle" className="sr-only">
            TikTok handle
          </label>
          <input
            id="cta-tiktok-handle"
            type="text"
            value={handle}
            onChange={(e) => setHandle(e.target.value)}
            placeholder="@yourtiktokhandle"
            autoComplete="username"
            className="w-full rounded-xl border border-brand-navy/15 bg-white px-4 py-3.5 text-[15px] text-brand-navy outline-none ring-0 placeholder:text-brand-navy/40 shadow-sm focus-visible:border-brand-cyan focus-visible:ring-2 focus-visible:ring-brand-cyan/25"
          />
          <button
            type="submit"
            className="w-full rounded-xl bg-gradient-to-r from-brand-cyan to-brand-cyan-bright py-3.5 text-[15px] font-semibold text-white shadow-lg shadow-brand-cyan/30 transition hover:opacity-95 motion-safe:active:scale-[0.99]"
          >
            Analyze my account →
          </button>
        </form>

        <p className="mt-4 text-xs text-brand-navy/55 sm:text-sm">
          Free for your first analysis. No credit card needed.
        </p>

        <div className="mx-auto my-12 max-w-lg border-t border-brand-navy/12" />

        <div className="flex flex-col items-center gap-5 sm:flex-row sm:justify-center sm:gap-8">
          <div className="flex shrink-0 justify-center sm:justify-end">
            <div className="flex">
              {AVATARS.map((a, i) => (
                <span
                  key={a.initials}
                  className={`flex h-11 w-11 items-center justify-center rounded-full border-2 border-background text-[11px] font-bold text-white shadow-sm ${a.className} ${i > 0 ? "-ml-3" : ""}`}
                  aria-hidden
                >
                  {a.initials}
                </span>
              ))}
            </div>
          </div>
          <p className="max-w-[16rem] text-center text-sm leading-snug text-brand-navy/65 sm:max-w-none sm:text-left">
            <span className="font-semibold text-brand-navy">1,200+ Filipino creators</span>{" "}
            already on the waitlist
          </p>
        </div>
      </div>
    </section>
  );
}
