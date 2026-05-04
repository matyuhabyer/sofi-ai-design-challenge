const steps = [
  {
    number: "01",
    title: "Paste your TikTok profile link",
    description:
      "Just copy the URL from your browser—no account connection or permissions needed.",
  },
  {
    number: "02",
    title: "GIA analyses your videos and comments",
    description:
      "Our AI scans your public content, engagement patterns, and comment sentiment.",
  },
  {
    number: "03",
    title: "Get your report in minutes",
    description:
      "Usually 30–60 seconds. You'll see your score, top insights, and content recommendations.",
  },
  {
    number: "04",
    title: "Start posting smarter content",
    description:
      "Use your personalised insights to plan your next video and grow your audience.",
  },
];

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="scroll-mt-16 bg-brand-navy py-20 px-6">
      <div className="mx-auto max-w-4xl">
        <div className="mb-14 text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-brand-cyan-bright">
            ⚙️ Process
          </span>
          <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
            How it works
          </h2>
        </div>

        <ol className="relative space-y-0">
          {steps.map((step, i) => (
            <li key={step.number} className="relative flex gap-8 pb-12 last:pb-0">
              {/* Vertical connector line */}
              {i < steps.length - 1 && (
                <div className="absolute left-7 top-14 h-full w-px bg-white/15" />
              )}

              {/* Step number bubble */}
              <div className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-brand-cyan to-brand-cyan-bright text-sm font-bold text-white shadow-lg shadow-brand-cyan/35">
                {step.number}
              </div>

              {/* Content */}
              <div className="pt-2">
                <h3 className="text-lg font-semibold text-white">{step.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-white/65">
                  {step.description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
