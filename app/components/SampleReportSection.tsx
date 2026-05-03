export default function SampleReportSection() {
  return (
    <section
      id="sample-report"
      className="bg-background py-20 px-6 scroll-mt-16"
    >
      <div className="mx-auto max-w-4xl">
        {/* Section header */}
        <div className="mb-12 text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-brand-cyan">
            👀 See what you'll get
          </span>
          <h2 className="mt-3 text-3xl font-bold text-brand-navy sm:text-4xl">
            Before you even try it
          </h2>
          <p className="mt-3 text-brand-navy/70">
            Here's a sample report generated from a real creator&apos;s public
            profile.
          </p>
        </div>

        {/* Report card */}
        <div className="rounded-2xl border border-brand-navy/12 bg-background p-8 shadow-xl shadow-brand-navy/8">
          {/* Creator header */}
          <div className="mb-8 flex items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-brand-cyan to-brand-cyan-bright text-2xl font-bold text-white">
              @
            </div>
            <div>
              <p className="text-lg font-semibold text-brand-navy">
                @example_creator
              </p>
              <p className="text-sm text-brand-navy/55">Report generated • May 2025</p>
            </div>
            <span className="ml-auto rounded-full bg-brand-cyan/12 px-3 py-1 text-sm font-medium text-brand-cyan">
              Analysis complete
            </span>
          </div>

          <div className="grid gap-6 sm:grid-cols-3">
            {/* Account Score */}
            <div className="rounded-xl border border-brand-navy/10 bg-surface-tint/50 p-5">
              <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-brand-navy/55">
                📊 Account Score
              </p>
              <div className="flex items-end gap-2">
                <span className="text-4xl font-extrabold text-brand-navy">78</span>
                <span className="mb-1 text-brand-navy/50">/ 100</span>
              </div>
              {/* Progress bar */}
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

            {/* Key Insight */}
            <div className="rounded-xl border border-brand-navy/10 bg-surface-tint/50 p-5">
              <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-brand-navy/55">
                🧠 Key Insight
              </p>
              <p className="mt-2 text-sm leading-relaxed text-brand-navy/80">
                Your best-performing videos start with a{" "}
                <span className="font-semibold text-brand-navy">
                  clear problem statement
                </span>
                . Generic intros cause early drop-off.
              </p>
            </div>

            {/* What to post next */}
            <div className="rounded-xl border border-brand-cyan/35 bg-brand-cyan/8 p-5">
              <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-brand-cyan">
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

          {/* Bottom callout */}
          <div className="mt-6 rounded-xl border border-brand-navy/10 bg-surface-tint/50 p-5">
            <p className="text-xs font-semibold uppercase tracking-wider text-brand-navy/55 mb-3">
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
