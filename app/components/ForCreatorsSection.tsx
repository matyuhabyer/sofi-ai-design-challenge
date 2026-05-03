const insights = [
  { icon: "🎯", label: "Why your videos perform" },
  { icon: "⏱️", label: "Where you lose attention" },
  { icon: "💬", label: "What your audience really wants" },
  { icon: "📝", label: "How to improve your next post" },
];

export default function ForCreatorsSection() {
  return (
    <section className="bg-slate-900 py-20 px-6">
      <div className="mx-auto max-w-5xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* Text side */}
          <div>
            <span className="text-sm font-semibold uppercase tracking-widest text-pink-400">
              🔍 Built for creators
            </span>
            <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
              You don&apos;t need to understand metrics
            </h2>
            <p className="mt-5 text-lg text-slate-400 leading-relaxed">
              GIA explains your content like a strategist would—in plain
              language, without the jargon.
            </p>

            <ul className="mt-8 space-y-4">
              {insights.map((item) => (
                <li key={item.label} className="flex items-center gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-purple-500/15 text-lg">
                    {item.icon}
                  </span>
                  <span className="text-slate-200">{item.label}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Visual side — decorative "strategist card" */}
          <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-purple-950/60 to-slate-900 p-8 shadow-xl shadow-black/30">
            <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-slate-400">
              GIA says…
            </p>
            <div className="space-y-4 text-sm text-slate-300 leading-relaxed">
              <p>
                <span className="font-semibold text-white">Hook analysis:</span>{" "}
                You open 60% of your videos with a question—that&apos;s good. But 3
                of your top-5 drops happen in the first 2 seconds when you skip
                straight to information. Try tension first.
              </p>
              <p>
                <span className="font-semibold text-white">
                  Audience signal:
                </span>{" "}
                Comments on your productivity videos show high curiosity. People
                want the &quot;how,&quot; not just the &quot;what.&quot; Your
                next video should go deeper.
              </p>
              <p>
                <span className="font-semibold text-white">
                  Content opportunity:
                </span>{" "}
                Your niche is underserved on this topic this week. A 45–60s
                video with a strong hook could outperform your recent average by
                2–3×.
              </p>
            </div>
            <div className="mt-6 flex items-center gap-2">
              <div className="h-8 w-8 rounded-full bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center text-xs font-bold text-white">
                G
              </div>
              <span className="text-xs text-slate-400">
                GIA by SOFI AI • Analyzed just now
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
