"use client";

import Image from "next/image";
import { useState } from "react";

function TalkingDots() {
  return (
    <span className="ml-1 inline-flex gap-1 align-middle" aria-hidden="true">
      <span className="motion-safe:animate-bounce inline-block h-1.5 w-1.5 rounded-full bg-brand-cyan [animation-duration:1s]" />
      <span className="motion-safe:animate-bounce inline-block h-1.5 w-1.5 rounded-full bg-brand-cyan [animation-duration:1s] [animation-delay:150ms]" />
      <span className="motion-safe:animate-bounce inline-block h-1.5 w-1.5 rounded-full bg-brand-cyan [animation-duration:1s] [animation-delay:300ms]" />
    </span>
  );
}

export default function HeroSection() {
  const [url, setUrl] = useState("");

  function handleAnalyze(e: React.FormEvent) {
    e.preventDefault();
    alert(`Analyzing: ${url || "https://www.tiktok.com/@example"}`);
  }

  return (
    <section
      id="top"
      className="relative overflow-hidden bg-background px-6 py-16 scroll-mt-16 sm:py-24"
    >
      <div className="pointer-events-none absolute -top-40 -left-40 h-96 w-96 rounded-full bg-brand-cyan-bright/25 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-brand-cyan/20 blur-3xl" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(260px,380px)] lg:gap-14">
        {/* Copy + form */}
        <div className="text-center lg:text-left">
          <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand-cyan/35 bg-brand-cyan/10 px-4 py-1.5 text-sm font-medium text-brand-navy">
            <span className="h-2 w-2 rounded-full bg-brand-cyan motion-safe:animate-pulse" />
            Powered by SOFI AI
          </span>

          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-brand-navy sm:text-5xl lg:text-6xl">
            GIA —{" "}
            <span className="bg-gradient-to-r from-brand-cyan to-brand-cyan-bright bg-clip-text text-transparent">
              Generative Influencer Analyst
            </span>
          </h1>

          <p className="mt-6 text-xl leading-relaxed text-brand-navy/75">
            Know what your TikTok audience is actually telling you.
            <br className="hidden sm:block" />
            Paste your profile link. GIA turns your content into a clear report—what worked, what
            didn&apos;t, and what to post next.
          </p>

          <form
            onSubmit={handleAnalyze}
            className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center lg:justify-start lg:text-left"
          >
            <input
              type="url"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="https://www.tiktok.com/@yourhandle"
              className="w-full rounded-xl border border-brand-navy/15 bg-white px-5 py-4 text-brand-navy placeholder-brand-navy/40 shadow-sm focus:border-brand-cyan focus:outline-none focus:ring-2 focus:ring-brand-cyan/25 sm:max-w-md lg:w-full lg:max-w-md"
            />
            <button
              type="submit"
              className="rounded-xl bg-gradient-to-r from-brand-cyan to-brand-cyan-bright px-8 py-4 font-semibold text-white shadow-lg shadow-brand-cyan/30 transition hover:opacity-90 motion-safe:active:scale-[0.98]"
            >
              Analyze my TikTok
            </button>
          </form>

          <div className="mt-5 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
            <a
              href="#sample-report"
              className="text-sm font-medium text-brand-cyan underline-offset-4 hover:text-brand-cyan-bright hover:underline"
            >
              View sample report ↓
            </a>
            <span className="hidden h-1 w-1 rounded-full bg-brand-navy/30 sm:block" />
            <span className="text-sm text-brand-navy/55">
              No login required · Public profiles only
            </span>
          </div>
        </div>

        {/* Gia + speech bubble */}
        <figure className="relative mx-auto w-full max-w-[320px] justify-self-center lg:max-w-none lg:justify-self-end">
          <div
            className="motion-safe:animate-[gia-hero-bubble-float_4.5s_ease-in-out_infinite] motion-reduce:animate-none relative z-10 mx-auto mb-3 max-w-[min(100%,19rem)] lg:absolute lg:-top-18 lg:right-0 lg:mx-0 lg:mb-0 lg:max-w-[17.5rem] lg:-translate-x-4"
          >
            <div className="relative rounded-2xl border border-brand-navy/10 bg-white px-5 py-4 text-left shadow-lg shadow-brand-navy/10">
              <p className="text-[0.95rem] leading-relaxed text-brand-navy sm:text-base">
                <span className="text-brand-navy">Hey — I&apos;m Gia! </span>
              </p>
            </div>
            <div
              aria-hidden="true"
              className="absolute -bottom-2 left-1/2 h-3.5 w-3.5 -translate-x-1/2 rotate-45 border-b border-r border-brand-navy/10 bg-white lg:left-auto lg:right-[4.5rem] lg:translate-x-0"
            />
          </div>

          <div className="relative mx-auto flex justify-center lg:pt-10">
            <div
              className="relative h-[220px] w-[220px] shrink-0 overflow-hidden rounded-full border-[5px] border-white shadow-[0_12px_40px_rgba(32,23,71,0.2)] ring-[3px] ring-brand-cyan/35 motion-safe:transition-transform motion-safe:duration-300 motion-safe:hover:scale-[1.03] sm:h-[260px] sm:w-[260px] lg:h-[280px] lg:w-[280px]"
            >
              <Image
                src="/gia-image.jpg"
                alt="Gia, the GIA assistant"
                width={560}
                height={560}
                priority
                sizes="(max-width: 640px) 220px, (max-width: 1024px) 260px, 280px"
                className="h-full w-full select-none object-cover object-[center_18%] scale-[1.08]"
              />
            </div>
          </div>
          <figcaption className="sr-only">
            Gia introduces GIA and invites you to paste your TikTok profile link for an audience
            breakdown.
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
