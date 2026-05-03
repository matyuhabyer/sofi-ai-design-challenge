"use client";

import { useState } from "react";

export default function CTASection() {
  const [url, setUrl] = useState("");

  function handleAnalyze(e: React.FormEvent) {
    e.preventDefault();
    alert(`Analyzing: ${url || "https://www.tiktok.com/@example"}`);
  }

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-purple-950 via-slate-900 to-slate-950 py-24 px-6">
      <div className="pointer-events-none absolute -top-32 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-pink-600/15 blur-3xl" />

      <div className="relative mx-auto max-w-2xl text-center">
        <span className="text-sm font-semibold uppercase tracking-widest text-pink-400">
          💡 Stop guessing what works
        </span>
        <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
          Your audience is already giving you signals.
          <br />
          <span className="text-slate-400">GIA helps you understand them.</span>
        </h2>
        <p className="mt-5 text-lg text-slate-400">
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
            className="w-full rounded-xl border border-white/10 bg-white/5 px-5 py-4 text-white placeholder-slate-500 backdrop-blur-sm focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-400/30 sm:w-96"
          />
          <button
            type="submit"
            className="rounded-xl bg-gradient-to-r from-pink-500 to-purple-600 px-8 py-4 font-semibold text-white shadow-lg shadow-purple-900/40 transition hover:opacity-90 active:scale-95"
          >
            Analyze my TikTok
          </button>
        </form>

        <p className="mt-5 text-sm text-slate-500">
          No login required · Public profiles only · Results in 30–60 seconds
        </p>
      </div>
    </section>
  );
}
