const features = [
  {
    icon: "📈",
    title: "Find out why your best video worked",
    description:
      "GIA identifies your top-performing content and explains exactly why it resonated with viewers.",
  },
  {
    icon: "🧠",
    title: "Understand what your audience is thinking",
    description:
      "Go beyond likes and views. GIA reads the sentiment behind your comments to surface real opinions.",
  },
  {
    icon: "🔍",
    title: "Discover what people keep asking",
    description:
      "Surface the recurring questions and requests hidden in your comments—your next content ideas are already there.",
  },
  {
    icon: "💡",
    title: "Get content ideas that are likely to perform",
    description:
      "GIA generates data-backed video concepts tailored to your niche and your audience's interests.",
  },
];

export default function FeaturesSection() {
  return (
    <section
      id="features"
      className="relative scroll-mt-16 overflow-hidden border-b border-brand-navy/10 bg-linear-to-br from-[#0f1738] via-brand-navy to-[#24195a] px-4 py-16 text-white sm:px-6 sm:py-20"
    >

      <div className="relative mx-auto min-w-0 max-w-6xl">
        <div className="mx-auto mb-12 max-w-2xl text-center sm:mb-14">
          <span className="inline-flex items-center rounded-full border border-brand-cyan/35 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.24em] text-brand-cyan-bright">
            🚀 What GIA does
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            Turn your TikTok data into decisions
          </h2>
          <p className="mx-auto mt-4 max-w-2xl px-1 text-base leading-relaxed text-white/72 sm:text-lg">
            Most analytics tools show numbers. GIA tells you what they
            mean—and what to do next.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <div
              key={f.title}
              className="group rounded-3xl border border-white/10 bg-white/6 p-5 shadow-lg shadow-black/10 transition motion-safe:duration-300 motion-safe:hover:-translate-y-1 motion-safe:hover:border-brand-cyan/35 sm:p-7"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/10 text-2xl">
                {f.icon}
              </div>
              <h3 className="text-lg font-semibold text-white">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/68">
                {f.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
