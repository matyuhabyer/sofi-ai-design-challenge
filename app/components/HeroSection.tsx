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
    <section className="relative overflow-hidden bg-background py-24 px-6">
      {/* Decorative blobs */}
      <div className="pointer-events-none absolute -top-40 -left-40 h-96 w-96 rounded-full bg-brand-cyan-bright/25 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-brand-cyan/20 blur-3xl" />

      <div className="relative mx-auto max-w-3xl text-center">
        {/* Badge */}
        <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand-cyan/35 bg-brand-cyan/10 px-4 py-1.5 text-sm font-medium text-brand-navy">
          <span className="h-2 w-2 rounded-full bg-brand-cyan animate-pulse" />
          Powered by SOFI AI
        </span>

        <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-brand-navy sm:text-6xl">
          GIA —{" "}
          <span className="bg-gradient-to-r from-brand-cyan to-brand-cyan-bright bg-clip-text text-transparent">
            Generative Influencer Analyst
          </span>
        </h1>

        <p className="mt-6 text-xl text-brand-navy/75 leading-relaxed">
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
            className="w-full rounded-xl border border-brand-navy/15 bg-white px-5 py-4 text-brand-navy placeholder-brand-navy/40 shadow-sm focus:border-brand-cyan focus:outline-none focus:ring-2 focus:ring-brand-cyan/25 sm:w-96"
          />
          <button
            type="submit"
            className="rounded-xl bg-gradient-to-r from-brand-cyan to-brand-cyan-bright px-8 py-4 font-semibold text-white shadow-lg shadow-brand-cyan/30 transition hover:opacity-90 active:scale-95"
          >
            Analyze my TikTok
          </button>
        </form>

        {/* Secondary CTA */}
        <div className="mt-5 flex items-center justify-center gap-4">
          <a
            href="#sample-report"
            className="text-sm font-medium text-brand-cyan underline-offset-4 hover:text-brand-cyan-bright hover:underline"
          >
            View sample report ↓
          </a>
          <span className="h-1 w-1 rounded-full bg-brand-navy/30" />
          <span className="text-sm text-brand-navy/55">
            No login required · Public profiles only
          </span>
        </div>
      </div>
    </section>
  );
}
