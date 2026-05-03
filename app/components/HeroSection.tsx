"use client";

import { useState } from "react";

export default function HeroSection() {
  const [url, setUrl] = useState("");

  function handleAnalyze(e: React.FormEvent) {
    e.preventDefault();
    // Placeholder — real analysis would be wired up here
    alert(`Analyzing: ${url || "https://www.tiktok.com/@example"}`);
  }

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-950 to-slate-900 py-24 px-6">
      {/* Decorative blobs */}
      <div className="pointer-events-none absolute -top-40 -left-40 h-96 w-96 rounded-full bg-pink-600/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-purple-600/20 blur-3xl" />

      <div className="relative mx-auto max-w-3xl text-center">
        {/* Badge */}
        <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-purple-500/40 bg-purple-500/10 px-4 py-1.5 text-sm font-medium text-purple-300">
          <span className="h-2 w-2 rounded-full bg-purple-400 animate-pulse" />
          Powered by SOFI AI
        </span>

        <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-white sm:text-6xl">
          GIA —{" "}
          <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
            Generative Influencer Analyst
          </span>
        </h1>

        <p className="mt-6 text-xl text-slate-300 leading-relaxed">
          Know what your TikTok audience is actually telling you.
          <br className="hidden sm:block" />
          Paste your profile link. GIA turns your content into a clear
          report—what worked, what didn&apos;t, and what to post next.
        </p>

        {/* Input form */}
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

        {/* Secondary CTA */}
        <div className="mt-5 flex items-center justify-center gap-4">
          <a
            href="#sample-report"
            className="text-sm font-medium text-purple-300 underline-offset-4 hover:underline"
          >
            View sample report ↓
          </a>
          <span className="h-1 w-1 rounded-full bg-slate-600" />
          <span className="text-sm text-slate-500">
            No login required · Public profiles only
          </span>
        </div>
      </div>
    </section>
  );
}
