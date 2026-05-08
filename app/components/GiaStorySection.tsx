import Image from "next/image";

export default function GiaStorySection() {
  return (
    <section
      id="gia-story"
      className="relative scroll-mt-16 overflow-hidden border-b border-brand-navy/10 bg-linear-to-br from-[#0f1738] via-brand-navy to-[#24195a] px-4 py-16 text-white sm:px-6 sm:py-20"
    >
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-start gap-4 text-left">
          <span className="inline-flex items-center rounded-full border border-brand-cyan/35 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.24em] text-brand-cyan-bright">
            meet the intern
          </span>
          <div>
            <p className="mt-1 text-xs font-semibold uppercase tracking-[0.28em] text-white/45 sm:text-sm lg:hidden">
              The story behind GIA
            </p>
          </div>
        </div>

        <div className="mt-6 grid min-w-0 gap-8 lg:grid-cols-[minmax(320px,0.75fr)_minmax(0,1fr)] lg:items-start lg:gap-10">
          <div className="space-y-6">
            <div className="flex flex-col items-center gap-6 text-center sm:flex-row sm:items-center sm:gap-8 sm:text-left">
              <div className="relative shrink-0">
                <div className="relative h-32 w-32 overflow-hidden rounded-4xl border border-white/10 bg-white/6 shadow-2xl shadow-black/20 sm:h-40 sm:w-40">
                  <Image
                    src="/gia-illustration.png"
                    alt="GIA — the original TikTok intern"
                    fill
                    className="object-cover object-top"
                    priority
                  />
                </div>
                <span className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-white shadow-md shadow-black/15">
                  <span className="h-3 w-3 rounded-full bg-brand-cyan motion-safe:animate-pulse" />
                </span>
              </div>

              <div>
                <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
                  GIA
                </h2>
                <p className="mt-1 text-base font-semibold text-white/60 sm:text-lg">
                  The Original TikTok intern
                </p>
                <p className="mt-3 max-w-md text-sm leading-relaxed text-white/72 sm:text-base">
                  Hired because of her TikTok. Now she analyzes yours.
                </p>
              </div>
            </div>

            <aside className="h-fit w-full rounded-4xl border border-white/10 bg-white/6 p-5 shadow-xl shadow-black/15 backdrop-blur-md sm:p-7 lg:self-start">
              <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-white/50">
                The hiring post 📱
              </p>

              <div className="space-y-3 text-sm leading-relaxed text-white/72">
                <div className="rounded-2xl bg-white/6 p-4">
                  <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-brand-cyan-bright">
                    @sophia.sy
                  </p>
                  <p>
                    &ldquo;I found my next intern through a TikTok. She didn&apos;t even apply. The video said everything.&rdquo;
                  </p>
                </div>

                <div className="rounded-2xl border border-brand-cyan/25 bg-brand-cyan/10 p-4">
                  <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-brand-cyan-bright">
                    @gia — hired ✅
                  </p>
                  <p>
                    &ldquo;Wait, I&apos;m actually starting next week?! &rdquo;
                  </p>
                </div>
              </div>
            </aside>
          </div>

          <div className="rounded-4xl border border-white/10 bg-white/6 p-5 shadow-2xl shadow-black/15 backdrop-blur-md sm:p-7 lg:mt-0">
            <p className="hidden text-xs font-semibold uppercase tracking-[0.24em] text-brand-cyan-bright lg:block">
              The story behind GIA
            </p>
            <h3 className="mt-2 text-2xl font-bold text-white sm:text-[2rem]">
              we found our intern on TikTok.
            </h3>

            <div className="mt-4 space-y-4 text-sm leading-relaxed text-white/72 sm:space-y-5 sm:text-base">
              <p>
                SOFI AI founder <span className="font-semibold text-white">Sophia Sy </span> wasn&apos;t looking for an intern. then she stumbled on a TikTok from a girl named Gia — and hired her on the spot. not through LinkedIn, not through a referral. through a 60-second video.
              </p>

              <p>
                that moment proved something: in 2025, <span className="font-semibold text-white">your TikTok is your resume</span>. your content is your personal brand. and most creators have no idea how powerful — or how fixable — theirs actually is.
              </p>

              <blockquote className="border-l-[3px] border-brand-cyan pl-5 py-1">
                <p className="text-base font-semibold italic text-white sm:text-lg">
                  &ldquo;attention is currency. and most creators are leaving it on the table.&rdquo;
                </p>
              </blockquote>

              <p>
                so we built GIA. the AI version of that intern — the one who actually watches your content, reads your comments, and tells you the truth.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}