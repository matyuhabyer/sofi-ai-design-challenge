import Image from "next/image";

export default function GiaStorySection() {
  return (
    <section
      id="gia-story"
      className="relative scroll-mt-16 border-b-[1.5px] border-brand-navy/10 bg-gradient-to-br from-surface-tint via-background to-surface-tint px-4 py-16 sm:px-6 sm:py-24 overflow-hidden"
    >
      {/* Decorative background blobs */}
      <div className="pointer-events-none absolute -top-32 -right-24 h-[26rem] w-[38rem] rotate-6 rounded-[100%] bg-brand-cyan/12 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -left-16 h-72 w-[30rem] -rotate-12 rounded-[100%] bg-brand-coral/10 blur-3xl" />

      <div className="relative mx-auto min-w-0 max-w-5xl">
        {/* Top identity block */}
        <div className="mb-14 flex flex-col items-center gap-8 text-center sm:flex-row sm:items-center sm:gap-12 sm:text-left lg:gap-16">
          {/* Illustration */}
          <div className="relative shrink-0">
            <div className="relative h-36 w-36 overflow-hidden rounded-[2rem] border-[3px] border-white shadow-2xl shadow-brand-navy/15 sm:h-44 sm:w-44">
              <Image
                src="/gia-illustration.png"
                alt="GIA — the original TikTok intern"
                fill
                className="object-cover object-top"
                priority
              />
            </div>
            {/* Live dot */}
            <span className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-white shadow-md">
              <span className="h-3 w-3 rounded-full bg-brand-cyan motion-safe:animate-pulse" />
            </span>
          </div>

          {/* Name + tagline */}
          <div>
            <span className="text-sm font-semibold uppercase tracking-widest text-brand-cyan">
              meet the intern
            </span>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-brand-navy sm:text-4xl md:text-5xl">
              GIA
            </h2>
            <p className="mt-1 text-base font-semibold text-brand-navy/55 sm:text-lg">
              the original TikTok intern
            </p>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-brand-navy/65 sm:text-base">
              hired because of her TikTok. now she analyzes yours.{" "}
              <span className="text-brand-coral">🎀</span>
            </p>
          </div>
        </div>

        {/* Story body */}
        <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:gap-16 lg:items-start">
          <div className="space-y-6 text-brand-navy/75 leading-relaxed">
            <div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-brand-cyan">
                the story behind GIA
              </p>
              <h3 className="text-xl font-bold text-brand-navy sm:text-2xl">
                we found our intern on TikTok.
              </h3>
            </div>

            <p className="text-[0.9375rem] sm:text-base">
              SOFI AI founder{" "}
              <span className="font-semibold text-brand-navy">Sophia Sy</span>{" "}
              wasn&apos;t looking for an intern. then she stumbled on a TikTok
              from a girl named Gia — and hired her on the spot. not through
              LinkedIn, not through a referral. through a 60-second video.
            </p>

            <p className="text-[0.9375rem] sm:text-base">
              that moment proved something: in 2025,{" "}
              <span className="font-semibold text-brand-navy">
                your TikTok is your resume
              </span>
              . your content is your personal brand. and most creators have no
              idea how powerful — or how fixable — theirs actually is.
            </p>

            {/* Pull quote */}
            <blockquote className="border-l-[3px] border-brand-cyan pl-5 py-1">
              <p className="text-base font-semibold italic text-brand-navy sm:text-lg">
                &ldquo;attention is currency. and most creators are leaving it
                on the table.&rdquo;
              </p>
            </blockquote>

            <p className="text-[0.9375rem] sm:text-base">
              so we built GIA. the AI version of that intern — the one who
              actually watches your content, reads your comments, and tells you
              the truth.
            </p>
          </div>

          {/* Side card — founder moment */}
          <div className="w-full rounded-2xl border border-brand-navy/12 bg-background p-5 shadow-xl shadow-brand-navy/8 sm:p-7 lg:w-72 xl:w-80 shrink-0">
            <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-brand-navy/45">
              the hiring post 📱
            </p>
            <div className="space-y-3 text-sm text-brand-navy/75 leading-relaxed">
              <div className="rounded-xl bg-surface-tint p-4">
                <p className="font-semibold text-brand-navy text-xs uppercase tracking-wide mb-1">
                  @sophia.sy
                </p>
                <p>
                  &ldquo;I found my next intern through a TikTok. she didn&apos;t
                  even apply. the video said everything.&rdquo;
                </p>
              </div>
              <div className="rounded-xl bg-brand-cyan/8 border border-brand-cyan/25 p-4">
                <p className="font-semibold text-brand-cyan text-xs uppercase tracking-wide mb-1">
                  @gia — hired ✅
                </p>
                <p>
                  &ldquo;wait I&apos;m actually starting next week 🎀&rdquo;
                </p>
              </div>
            </div>
            <div className="mt-5 flex items-center gap-2 border-t border-brand-navy/8 pt-4">
              <div className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-brand-cyan to-brand-cyan-bright text-xs font-bold text-white">
                G
              </div>
              <span className="text-xs text-brand-navy/45">
                the beginning of SOFI AI
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
