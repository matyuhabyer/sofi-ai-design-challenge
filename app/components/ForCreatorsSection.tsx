const insights = [
  { icon: "🎯", label: "Why your videos perform" },
  { icon: "⏱️", label: "Where you lose attention" },
  { icon: "💬", label: "What your audience really wants" },
  { icon: "📝", label: "How to improve your next post" },
];

export default function ForCreatorsSection() {
  return (
    <section
      id="creators"
      className="relative scroll-mt-16 overflow-hidden border-b border-brand-navy/10 bg-linear-to-br from-[#0f1738] via-brand-navy to-[#24195a] px-4 py-16 text-white sm:px-6 sm:py-20"
    >
      <div className="relative mx-auto grid min-w-0 max-w-6xl gap-10 lg:grid-cols-[minmax(0,0.84fr)_minmax(320px,0.56fr)] lg:gap-12">
        <div>
          <div className="max-w-2xl">
            <span className="inline-flex items-center rounded-full border border-brand-cyan/35 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.24em] text-brand-cyan-bright">
              🔍 Built for creators
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              You don&apos;t need to understand metrics
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-white/72 sm:text-lg">
              GIA explains your content like a strategist would, in plain language, without the jargon.
            </p>
          </div>

          <ul className="mt-10 grid gap-4 sm:grid-cols-2">
            {insights.map((item, index) => (
              <li
                key={item.label}
                className={`flex items-center gap-4 rounded-3xl border p-4 shadow-lg shadow-black/10 backdrop-blur-sm transition motion-safe:duration-300 motion-safe:hover:-translate-y-1 ${
                  index % 2 === 0
                    ? "border-white/10 bg-white/6"
                    : "border-brand-cyan/20 bg-brand-cyan/10"
                }`}
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/10 text-xl">
                  {item.icon}
                </span>
                <span className="text-sm font-medium leading-snug text-white sm:text-base">
                  {item.label}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <aside className="relative self-start rounded-4xl border border-white/10 bg-white/6 p-6 shadow-2xl shadow-black/15 backdrop-blur-md sm:p-8 lg:sticky lg:top-6">
          <div className="absolute inset-x-6 top-0 h-px bg-linear-to-r from-transparent via-brand-cyan/70 to-transparent" />

          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-brand-cyan-bright">
            GIA says…
          </p>
          <div className="space-y-4 text-sm leading-relaxed text-white/72">
            <p>
              <span className="font-semibold text-white">Hook analysis:</span>{" "}
              You open 60% of your videos with a question, which is strong. But 3 of your top-5 drops happen in the first 2 seconds when you skip straight to information. Try tension first.
            </p>
            <p>
              <span className="font-semibold text-white">Audience signal:</span>{" "}
              Comments on your productivity videos show high curiosity. People want the &quot;how,&quot; not just the &quot;what.&quot; Your next video should go deeper.
            </p>
            <p>
              <span className="font-semibold text-white">Content opportunity:</span>{" "}
              Your niche is underserved on this topic this week. A 45–60s video with a strong hook could outperform your recent average by 2–3×.
            </p>
          </div>

          <div className="mt-6 flex items-center gap-3 border-t border-white/10 pt-5">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-linear-to-br from-brand-cyan to-brand-cyan-bright text-xs font-bold text-white shadow-lg shadow-brand-cyan/30">
              G
            </div>
            <span className="text-xs text-white/55">
              GIA by SOFI AI • Analyzed just now
            </span>
          </div>
        </aside>
      </div>
    </section>
  );
}
