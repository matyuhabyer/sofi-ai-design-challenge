export default function SampleReportSection() {
  return (
    <section
      id="sample-report"
      className="bg-slate-950 py-20 px-6 scroll-mt-16"
    >
      <div className="mx-auto max-w-4xl">
        {/* Section header */}
        <div className="mb-12 text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-purple-400">
            👀 See what you'll get
          </span>
          <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
            Before you even try it
          </h2>
          <p className="mt-3 text-slate-400">
            Here's a sample report generated from a real creator&apos;s public
            profile.
          </p>
        </div>

        {/* Report card */}
        <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm shadow-xl shadow-black/30">
          {/* Creator header */}
          <div className="mb-8 flex items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-pink-500 to-purple-600 text-2xl font-bold text-white">
              @
            </div>
            <div>
              <p className="text-lg font-semibold text-white">
                @example_creator
              </p>
              <p className="text-sm text-slate-400">Report generated • May 2025</p>
            </div>
            <span className="ml-auto rounded-full bg-emerald-500/15 px-3 py-1 text-sm font-medium text-emerald-400">
              Analysis complete
            </span>
          </div>

          <div className="grid gap-6 sm:grid-cols-3">
            {/* Account Score */}
            <div className="rounded-xl border border-white/10 bg-white/5 p-5">
              <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-slate-400">
                📊 Account Score
              </p>
              <div className="flex items-end gap-2">
                <span className="text-4xl font-extrabold text-white">78</span>
                <span className="mb-1 text-slate-400">/ 100</span>
              </div>
              {/* Progress bar */}
              <div className="mt-3 h-2 w-full rounded-full bg-white/10">
                <div
                  className="h-2 rounded-full bg-gradient-to-r from-pink-500 to-purple-500"
                  style={{ width: "78%" }}
                />
              </div>
              <p className="mt-3 text-sm text-slate-300">
                Strong content, inconsistent hooks
              </p>
            </div>

            {/* Key Insight */}
            <div className="rounded-xl border border-white/10 bg-white/5 p-5">
              <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-slate-400">
                🧠 Key Insight
              </p>
              <p className="mt-2 text-sm leading-relaxed text-slate-200">
                Your best-performing videos start with a{" "}
                <span className="font-semibold text-white">
                  clear problem statement
                </span>
                . Generic intros cause early drop-off.
              </p>
            </div>

            {/* What to post next */}
            <div className="rounded-xl border border-purple-500/30 bg-purple-500/10 p-5">
              <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-purple-400">
                💡 What to post next
              </p>
              <p className="mt-2 text-sm font-medium italic text-white">
                &ldquo;You&apos;re being productive the wrong way&rdquo;
              </p>
              <p className="mt-3 text-xs text-purple-300">
                → High engagement potential based on audience behavior
              </p>
            </div>
          </div>

          {/* Bottom callout */}
          <div className="mt-6 rounded-xl border border-white/10 bg-white/5 p-5">
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">
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
                  className="rounded-full bg-white/10 px-3 py-1 text-xs text-slate-300"
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
