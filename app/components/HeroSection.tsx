"use client";

import Image from "next/image";

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
  return (
    <section
      id="top"
      className="relative flex min-h-dvh flex-col justify-center border-b-[1.5px] border-brand-navy/10 bg-gradient-to-br from-background via-surface-tint to-background px-4 py-12 scroll-mt-16 sm:px-6 sm:py-16"
    >
      <div className="pointer-events-none absolute -top-40 -left-40 h-[28rem] w-[42rem] -rotate-12 rounded-[100%] bg-brand-cyan-bright/25 blur-3xl" />

      <div className="relative mx-auto grid max-w-6xl min-w-0 items-center gap-10 sm:gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(240px,min(380px,36vw))] lg:gap-14">
        {/* Copy + form */}
        <div className="text-center lg:text-left">
          <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand-cyan/35 bg-brand-cyan/10 px-4 py-1.5 text-sm font-medium text-brand-navy">
            <span className="h-2 w-2 rounded-full bg-brand-cyan motion-safe:animate-pulse" />
            Powered by SOFI AI
          </span>

          <h1 className="mx-auto mt-4 max-w-xl text-[1.65rem] leading-[1.15] font-extrabold tracking-tight text-brand-navy sm:text-4xl sm:leading-tight md:text-5xl lg:mx-0 lg:max-w-2xl lg:text-6xl">
            Know what your TikTok audience is actually telling you.
          </h1>

          <p className="mt-6 text-base leading-relaxed text-brand-navy/75 sm:text-lg md:text-xl">
            GIA turns your content into a clear report—what worked, what
            didn&apos;t, and what to post next.
          </p>

          <div className="mt-10 flex w-full min-w-0 justify-center lg:justify-start lg:text-left">
            <a
              href="#early-access"
              className="inline-flex w-full items-center justify-center rounded-xl bg-linear-to-r from-brand-cyan to-brand-cyan-bright px-6 py-3.5 text-center text-[0.9375rem] font-semibold text-white shadow-lg shadow-brand-cyan/30 transition hover:opacity-90 motion-safe:active:scale-[0.98] sm:w-auto sm:py-4 sm:text-base"
            >
              Analyze my TikTok
            </a>
          </div>

          <div className="mt-5 flex flex-col items-center gap-3 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-4 lg:justify-start">
            <a
              href="#sample-report"
              className="text-center text-sm font-medium text-brand-cyan underline-offset-4 hover:text-brand-cyan-bright hover:underline"
            >
              View sample report ↓
            </a>
            <span className="hidden h-1 w-1 rounded-full bg-brand-navy/30 sm:block" />
            <span className="text-center text-sm text-brand-navy/55 sm:text-left lg:text-left">
              Public profiles only
            </span>
          </div>
        </div>

        {/* Gia + speech bubble + product card */}
        <div className="mx-auto flex w-full min-w-0 max-w-[min(100%,20rem)] flex-col items-center sm:max-w-none lg:mx-0 lg:max-w-none lg:items-end">
          <div className="relative w-full">
            <div
              className="motion-safe:animate-[gia-hero-bubble-float_4.5s_ease-in-out_infinite] motion-reduce:animate-none relative z-30 mx-auto mb-3 max-w-[min(100%,19rem)] lg:absolute lg:-top-16 lg:right-0 lg:mx-0 lg:mb-0 lg:max-w-[17.5rem] lg:-translate-x-4"
            >
              <div className="relative rounded-2xl border border-brand-navy/10 bg-white px-4 py-3.5 text-left shadow-xl shadow-brand-navy/10 sm:px-5 sm:py-4">
                <p className="text-[0.95rem] leading-relaxed text-brand-navy sm:text-base">
                  <span className="font-semibold text-brand-navy">Hey — I&apos;m GIA! </span> I'm your honest Tiktok strategist and I&apos;ll walk you through what&apos;s working, what
                  isn&apos;t, and what to post next.
                </p>
              </div>
              <div
                aria-hidden="true"
                className="absolute -bottom-2 left-1/2 h-3.5 w-3.5 -translate-x-1/2 rotate-45 border-b border-r border-brand-navy/10 bg-white lg:left-auto lg:right-[4.5rem] lg:translate-x-0"
              />
            </div>

            <div className="relative z-20 flex w-full flex-col items-center rounded-[2rem] border-[4px] border-white bg-white/50 p-5 shadow-[0_12px_40px_rgba(32,23,71,0.12)] ring-1 ring-brand-navy/5 backdrop-blur-md sm:p-6 lg:mt-6 lg:p-8">
              <figure className="relative z-10 w-full -mb-6">
                <div className="relative mx-auto flex justify-center">
                  <div
                    className="relative h-[300px] w-[300px] shrink-0 motion-safe:transition-transform motion-safe:duration-300 motion-safe:hover:scale-[1.03] sm:h-[350px] sm:w-[350px] lg:h-[400px] lg:w-[400px]"
                  >
                    <Image
                      src="/gia-illustration.png"
                      alt="Gia, the GIA assistant"
                      width={560}
                      height={560}
                      priority
                      sizes="(max-width: 640px) 300px, (max-width: 1024px) 350px, 400px"
                      className="h-full w-full select-none object-cover drop-shadow-xl"
                    />
                  </div>
                </div>
                <figcaption className="sr-only">
                  Gia introduces GIA and invites you to paste your TikTok profile link for an audience
                  breakdown.
                </figcaption>
              </figure>

              <div className="relative z-20 w-full max-w-[min(100%,280px)] rounded-2xl border border-brand-navy/12 bg-white px-4 py-3.5 text-center shadow-sm sm:max-w-[320px] sm:px-5 sm:py-4 lg:max-w-full">
                <p className="text-base leading-snug font-extrabold tracking-tight text-brand-navy sm:text-lg md:text-xl">
                  GIA —{" "}
                  <span className="bg-gradient-to-r from-brand-cyan to-brand-cyan-bright bg-clip-text text-transparent">
                    Generative Influencer Analyst
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
