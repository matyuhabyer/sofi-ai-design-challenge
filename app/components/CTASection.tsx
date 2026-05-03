"use client";

import { useState } from "react";

export default function CTASection() {
  const [url, setUrl] = useState("");

  function handleAnalyze(e: React.FormEvent) {
    e.preventDefault();
    alert(`Analyzing: ${url || "https://www.tiktok.com/@example"}`);
  }

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand-cyan via-brand-cyan to-brand-cyan-bright py-24 px-6">
      <div className="pointer-events-none absolute -top-32 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-white/20 blur-3xl" />

      <div className="relative mx-auto max-w-2xl text-center">
        <span className="text-sm font-semibold uppercase tracking-widest text-white/90">
          💡 Stop guessing what works
        </span>
        <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
          Your audience is already giving you signals.
          <br />
          <span className="text-brand-navy/90">GIA helps you understand them.</span>
        </h2>
        <p className="mt-5 text-lg text-white/85">
          Stop relying on guesswork. Start making informed content decisions.
        </p>

        <form
          onSubmit={handleAnalyze}
          className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-center"
        >
          <input
            type="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="https://www.tiktok.com/@yourhandle"
            className="w-full rounded-xl border border-white/35 bg-white/15 px-5 py-4 text-white placeholder-white/55 backdrop-blur-sm focus:border-white focus:outline-none focus:ring-2 focus:ring-white/35 sm:w-96"
          />
          <button
            type="submit"
            className="rounded-xl bg-brand-navy px-8 py-4 font-semibold text-white shadow-lg shadow-brand-navy/40 transition hover:opacity-95 active:scale-95"
          >
            Analyze my TikTok
          </button>
        </form>

        <p className="mt-5 text-sm text-white/75">
          No login required · Public profiles only · Results in 30–60 seconds
        </p>
      </div>
    </section>
  );
}
