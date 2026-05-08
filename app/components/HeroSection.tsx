"use client";

import Image from "next/image";

export default function HeroSection() {
  return (
    <section
      id="top"
      className="relative flex min-h-dvh flex-col justify-center overflow-hidden border-b-[1.5px] border-brand-navy/10 bg-linear-to-br from-[#0f1738] via-brand-navy to-[#24195a] px-4 py-12 text-white scroll-mt-16 sm:px-6 sm:py-16"
    >
      <div className="pointer-events-none absolute -top-40 -left-40 h-112 w-2xl -rotate-12 rounded-[100%] bg-brand-cyan/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -right-32 h-96 w-120 rounded-[100%] bg-brand-cyan-bright/10 blur-3xl" />

      <div className="relative mx-auto grid max-w-6xl min-w-0 items-center gap-10 sm:gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(240px,min(380px,36vw))] lg:items-start lg:gap-14">
        {/* Copy + form */}
        <div className="text-center lg:text-left">
          <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand-cyan/35 bg-white/5 px-4 py-1.5 text-sm font-medium text-brand-cyan-bright">
            <span className="h-2 w-2 rounded-full bg-green-400 motion-safe:animate-pulse" />
            Now Analyzing TikTok Profiles
          </span>

          <h1 className="mx-auto max-w-xl text-2xl leading-[1.15] font-extrabold tracking-tight text-white sm:text-3xl sm:leading-tight md:text-5xl lg:mx-0 lg:max-w-2xl lg:text-6xl">
            Know what your{' '}
            <span className="inline-flex align-baseline">
              <Image
                src="/tiktok-logo.png"
                alt="TikTok"
                width={240}
                height={64}
                className="h-[0.92em] w-auto object-contain align-baseline"
              />
            </span>{' '}
            audience is actually telling you.
          </h1>

          <p className="mt-6 text-lg leading-relaxed text-white/72 sm:text-xl md:text-2xl">
            GIA turns your content into a clear report—what worked, what
            didn&apos;t, and what to post next.
          </p>

          <div className="mt-10 flex w-full min-w-0 justify-center lg:justify-start lg:text-left">
            <a
              href="#early-access"
              className="inline-flex w-full items-center justify-center rounded-xl bg-linear-to-r from-brand-cyan to-brand-cyan-bright px-7 py-4 text-center text-base font-semibold text-white shadow-lg shadow-brand-cyan/30 transition hover:opacity-90 motion-safe:active:scale-[0.98] sm:w-auto sm:py-5 sm:text-lg"
            >
              Analyze My TikTok
            </a>
            <a
              href="#sample-report"
              className="ml-4 inline-flex w-full items-center justify-center rounded-xl bg-linear-to-r from-brand-cyan to-brand-cyan-bright px-7 py-4 text-center text-base font-semibold text-white shadow-lg shadow-brand-cyan/30 transition hover:opacity-90 motion-safe:active:scale-[0.98] sm:w-auto sm:py-5 sm:text-lg"
            >
              View Sample Report
            </a>
          </div>
        </div>

        {/* Gia + speech bubble + product card */}
        <div className="mx-auto flex w-full min-w-0 max-w-[min(100%,20rem)] flex-col items-center sm:max-w-none lg:mx-0 lg:max-w-none lg:items-start">
          <div className="relative w-full">
            <div
              className="motion-safe:animate-[gia-hero-bubble-float_4.5s_ease-in-out_infinite] motion-reduce:animate-none relative z-30 mx-auto mb-3 max-w-[min(100%,22rem)] lg:absolute lg:-top-16 lg:right-0 lg:mx-0 lg:mb-0 lg:max-w-80 lg:-translate-x-4"
            >
              <div className="relative rounded-2xl border border-brand-navy/10 bg-white px-4 py-3.5 text-left shadow-xl shadow-black/15 sm:px-5 sm:py-4">
                <p className="text-[0.95rem] leading-relaxed text-brand-navy sm:text-base">
                  <span className="font-semibold text-brand-navy">Hey — I&apos;m GIA! </span> I&apos;m your honest Tiktok strategist and I&apos;ll walk you through what&apos;s working, what
                  isn&apos;t, and what to post next.
                </p>
              </div>
              <div
                aria-hidden="true"
                className="absolute -bottom-2 left-1/2 h-3.5 w-3.5 -translate-x-1/2 rotate-45 border-b border-r border-brand-navy/10 bg-white lg:left-auto lg:right-18 lg:translate-x-0"
              />
            </div>

            <div className="relative z-20 flex w-full flex-col items-center rounded-4xl border border-brand-navy/10 bg-brand-navy p-5 shadow-[0_12px_40px_rgba(0,0,0,0.2)] ring-1 ring-brand-navy/5 sm:p-6 lg:p-8">
              <figure className="relative z-10 w-full -mb-6">
                <div className="relative mx-auto flex justify-center">
                  <div
                    className="relative h-80 w-80 shrink-0 motion-safe:transition-transform motion-safe:duration-300 motion-safe:hover:scale-[1.03] sm:h-96 sm:w-96 lg:h-112 lg:w-md"
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

              <div className="relative z-20 w-full max-w-[min(100%,280px)] rounded-2xl border border-brand-navy/10 bg-linear-to-r from-brand-cyan to-brand-cyan-bright px-4 py-3.5 text-center shadow-sm sm:max-w-[320px] sm:px-5 sm:py-4 lg:max-w-full">
                <p className="text-base leading-snug font-extrabold tracking-tight text-white sm:text-lg md:text-xl">
                  GIA —{" "}
                  <span className="text-white">
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
