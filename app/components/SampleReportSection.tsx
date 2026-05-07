export default function SampleReportSection() {
  return (
    <section
      id="sample-report"
      className="relative scroll-mt-16 bg-gradient-to-b from-background to-surface-tint px-4 py-16 sm:px-6 sm:py-20"
    >


      <div className="relative mx-auto min-w-0 max-w-4xl">
        <div className="mb-12 text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-brand-cyan">
            👀 See what you&apos;ll get
          </span>
          <h2 className="mt-3 text-2xl font-bold text-brand-navy sm:text-3xl md:text-4xl">
            Before you even try it
          </h2>
          <p className="mt-3 px-1 text-sm text-brand-navy/70 sm:text-base">
            Here&apos;s a sample report generated from a real creator&apos;s public profile.
          </p>
        </div>

        <div className="rounded-2xl border border-brand-navy/12 bg-background p-4 shadow-xl shadow-brand-navy/8 sm:p-6 md:p-8">
          <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-brand-cyan to-brand-cyan-bright text-2xl font-bold text-white">
              @
            </div>
            <div className="min-w-0">
              <p className="text-lg font-semibold text-brand-navy">@example_creator</p>
              <p className="text-sm text-brand-navy/55">Report generated • May 2025</p>
            </div>
            <span className="w-fit shrink-0 rounded-full bg-brand-cyan/12 px-3 py-1 text-xs font-medium text-brand-cyan sm:ml-auto sm:text-sm">
              Analysis complete
            </span>
          </div>

          <div className="grid gap-4 md:grid-cols-3 md:gap-6">
            <div className="rounded-xl border border-brand-navy/10 bg-surface-tint/50 p-4 sm:p-5">
              <p className="mb-1 text-xs font-semibold tracking-wider text-brand-navy/55 uppercase">
                📊 Account Score
              </p>
              <div className="flex items-end gap-2">
                <span className="text-4xl font-extrabold text-brand-navy">78</span>
                <span className="mb-1 text-brand-navy/50">/ 100</span>
              </div>
              <div className="mt-3 h-2 w-full rounded-full bg-brand-navy/10">
                <div
                  className="h-2 rounded-full bg-gradient-to-r from-brand-cyan to-brand-cyan-bright"
                  style={{ width: "78%" }}
                />
              </div>
              <p className="mt-3 text-sm text-brand-navy/75">
                Strong content, inconsistent hooks
              </p>
            </div>

            <div className="rounded-xl border border-brand-navy/10 bg-surface-tint/50 p-4 sm:p-5">
              <p className="mb-1 text-xs font-semibold tracking-wider text-brand-navy/55 uppercase">
                🧠 Key Insight
              </p>
              <p className="mt-2 text-sm leading-relaxed text-brand-navy/80">
                Your best-performing videos start with a{" "}
                <span className="font-semibold text-brand-navy">clear problem statement</span>.
                Generic intros cause early drop-off.
              </p>
            </div>

            <div className="rounded-xl border border-brand-cyan/35 bg-brand-cyan/8 p-4 sm:p-5">
              <p className="mb-1 text-xs font-semibold tracking-wider text-brand-cyan uppercase">
                💡 What to post next
              </p>
              <p className="mt-2 text-sm font-medium italic text-brand-navy">
                &ldquo;You&apos;re being productive the wrong way&rdquo;
              </p>
              <p className="mt-3 text-xs text-brand-navy/70">
                → High engagement potential based on audience behavior
              </p>
            </div>
          </div>

          <div className="mt-6 rounded-xl border border-brand-navy/10 bg-surface-tint/50 p-4 sm:p-5">
            <p className="mb-3 text-xs font-semibold tracking-wider text-brand-navy/55 uppercase">
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
                  className="rounded-full bg-brand-navy/8 px-3 py-1 text-xs text-brand-navy/80"
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
