export default function SampleReportSection() {
  return (
    <section
      id="sample-report"
      className="relative scroll-mt-16 overflow-hidden border-b border-brand-navy/10 bg-linear-to-br from-[#0f1738] via-brand-navy to-[#24195a] px-4 py-16 text-white sm:px-6 sm:py-20"
    >
      <div className="relative mx-auto min-w-0 max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center rounded-full border border-brand-cyan/35 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.24em] text-brand-cyan-bright">
            👀 See what you&apos;ll get
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Before you even try it
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-white/72 sm:text-lg">
            Here&apos;s a sample report generated from a real creator&apos;s public profile.
          </p>
        </div>

        <div className="mt-12 overflow-hidden rounded-4xl border border-white/10 bg-white/6 shadow-2xl shadow-black/15 backdrop-blur-md">
          <div className="border-b border-white/10 px-5 py-5 sm:px-6 sm:py-6">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-linear-to-br from-brand-cyan to-brand-cyan-bright text-2xl font-bold text-white shadow-lg shadow-brand-cyan/30">
                @
              </div>
              <div className="min-w-0">
                <p className="text-lg font-semibold text-white">@example_creator</p>
                <p className="text-sm text-white/55">Report generated • May 2025</p>
              </div>
              <span className="w-fit shrink-0 rounded-full border border-brand-cyan/35 bg-brand-cyan/10 px-3 py-1 text-xs font-medium text-brand-cyan-bright sm:ml-auto sm:text-sm">
                Analysis complete
              </span>
            </div>
          </div>

          <div className="grid gap-4 px-5 py-5 sm:px-6 sm:py-6 md:grid-cols-3 md:gap-6">
            <div className="rounded-3xl border border-white/10 bg-black/10 p-4 sm:p-5">
              <p className="mb-1 text-xs font-semibold uppercase tracking-[0.2em] text-brand-cyan-bright/80">
                📊 Account Score
              </p>
              <div className="flex items-end gap-2">
                <span className="text-4xl font-extrabold text-white">78</span>
                <span className="mb-1 text-white/55">/ 100</span>
              </div>
              <div className="mt-3 h-2 w-full rounded-full bg-white/10">
                <div
                  className="h-2 rounded-full bg-linear-to-r from-brand-cyan to-brand-cyan-bright"
                  style={{ width: "78%" }}
                />
              </div>
              <p className="mt-3 text-sm text-white/72">
                Strong content, inconsistent hooks
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-black/10 p-4 sm:p-5">
              <p className="mb-1 text-xs font-semibold uppercase tracking-[0.2em] text-brand-cyan-bright/80">
                🧠 Key Insight
              </p>
              <p className="mt-2 text-sm leading-relaxed text-white/72">
                Your best-performing videos start with a <span className="font-semibold text-white">clear problem statement</span>. Generic intros cause early drop-off.
              </p>
            </div>

            <div className="rounded-3xl border border-brand-cyan/25 bg-brand-cyan/10 p-4 sm:p-5">
              <p className="mb-1 text-xs font-semibold uppercase tracking-[0.2em] text-brand-cyan-bright">
                💡 What to post next
              </p>
              <p className="mt-2 text-sm font-medium italic text-white">
                &ldquo;You&apos;re being productive the wrong way&rdquo;
              </p>
              <p className="mt-3 text-xs text-white/65">
                High engagement potential based on audience behavior
              </p>
            </div>
          </div>

          <div className="border-t border-white/10 px-5 py-5 sm:px-6 sm:py-6">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-brand-cyan-bright/80">
              🔍 Top comment themes
            </p>
            <div className="flex flex-wrap gap-2">
              {[
                "💬 Asking for part 2",
                "🔥 Relatable content",
                "📌 Saved for later",
                "❓ Questions about method",
                "👏 Motivation",
              ].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/10 bg-white/6 px-3 py-1 text-xs text-white/75"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
