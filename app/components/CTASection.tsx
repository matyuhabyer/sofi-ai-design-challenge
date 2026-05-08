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
      className="relative scroll-mt-16 overflow-hidden border-b-[1.5px] border-brand-navy/10 bg-linear-to-br from-brand-navy via-[#1a1240] to-[#0e1737] px-4 py-16 text-white sm:px-6 sm:py-24"
    >
      <div className="pointer-events-none absolute -top-40 -left-20 h-96 w-xl rotate-12 rounded-[100%] bg-brand-cyan-bright/18 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -right-20 h-128 w-160 -rotate-6 rounded-[100%] bg-brand-cyan/16 blur-3xl" />

      <div className="relative mx-auto min-w-0 max-w-4xl text-center">
        <div className="mx-auto max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-cyan/35 bg-white/5 px-4 py-1.5 text-xs font-semibold tracking-[0.24em] text-brand-cyan-bright">
            <span
              className="h-2 w-2 shrink-0 rounded-full bg-brand-cyan motion-safe:animate-pulse"
              aria-hidden
            />
            Now in Early Access
          </span>

          <h2 className="mt-5 text-balance text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-[2.9rem] lg:leading-tight">
            Stop guessing.
            <br />
            Start posting{" "}
            <span className="bg-linear-to-r from-brand-cyan to-brand-cyan-bright bg-clip-text text-transparent">
              what works.
            </span>
          </h2>

          <div className="mx-auto mt-8 max-w-2xl rounded-4xl border border-white/10 bg-white/6 p-6 shadow-2xl shadow-black/15 backdrop-blur-md sm:p-8">
            <div className="mx-auto max-w-xl">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-cyan-bright">
                Try it now
              </p>
              <h3 className="mt-3 text-2xl font-bold text-white">
                Analyze your account in seconds
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-white/70">
                Paste your public TikTok handle and get a quick preview of what GIA can surface.
              </p>

              <form onSubmit={handleSubmit} className="mt-8 flex w-full flex-col gap-3">
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
                  className="w-full rounded-xl border border-white/10 bg-white/95 px-4 py-3.5 text-[15px] text-brand-navy outline-none ring-0 placeholder:text-brand-navy/40 shadow-sm focus-visible:border-brand-cyan focus-visible:ring-2 focus-visible:ring-brand-cyan/25"
                />
                <button
                  type="submit"
                  className="w-full rounded-xl bg-linear-to-r from-brand-cyan to-brand-cyan-bright py-3.5 text-[15px] font-semibold text-white shadow-lg shadow-brand-cyan/30 transition hover:opacity-95 motion-safe:active:scale-[0.99]"
                >
                  Analyze my account →
                </button>
              </form>

              <p className="mt-4 text-xs text-white/55 sm:text-sm">
                Free for your first analysis. No credit card needed.
              </p>

              <div className="mt-6 border-t border-white/10 pt-6">
                <div className="flex flex-col items-center gap-4 sm:flex-row sm:items-center sm:gap-6">
                  <div className="flex shrink-0 justify-center sm:justify-end">
                    <div className="flex">
                      {AVATARS.map((a, i) => (
                        <span
                          key={a.initials}
                          className={`flex h-11 w-11 items-center justify-center rounded-full border-2 border-brand-navy text-[11px] font-bold text-white shadow-sm ${a.className} ${i > 0 ? "-ml-3" : ""}`}
                          aria-hidden
                        >
                          {a.initials}
                        </span>
                      ))}
                    </div>
                  </div>
                  <p className="max-w-[16rem] text-center text-sm leading-snug text-white/68 sm:max-w-none sm:text-left">
                    Join the <span className="font-semibold text-white">1,200+ Filipino creators</span> getting early access to GIA!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
