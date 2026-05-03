const features = [
  {
    icon: "📈",
    title: "See which videos actually grab attention",
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
    <section className="bg-surface-tint py-20 px-6">
      <div className="mx-auto max-w-5xl">
        <div className="mb-14 text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-brand-cyan">
            🚀 What GIA does
          </span>
          <h2 className="mt-3 text-3xl font-bold text-brand-navy sm:text-4xl">
            Turn your TikTok data into decisions
          </h2>
          <p className="mt-4 text-lg text-brand-navy/70 max-w-2xl mx-auto">
            Most analytics tools show numbers. GIA tells you what they
            mean—and what to do next.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {features.map((f) => (
            <div
              key={f.title}
              className="group rounded-2xl border border-brand-navy/10 bg-background p-7 shadow-sm transition hover:border-brand-cyan/40 hover:shadow-md"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-cyan/12 text-2xl">
                {f.icon}
              </div>
              <h3 className="text-lg font-semibold text-brand-navy">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-brand-navy/65">
                {f.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
