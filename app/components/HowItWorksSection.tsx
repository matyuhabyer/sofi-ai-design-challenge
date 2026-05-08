const steps = [
  {
    number: "01",
    title: "Paste your TikTok profile link",
    description:
      "Just copy the URL from your browser—no account connection or permissions needed. We ask for your link, your goal, and nothing else.",
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
    <section
      id="how-it-works"
      className="relative scroll-mt-16 overflow-hidden border-b border-brand-navy/10 bg-linear-to-br from-brand-navy via-[#24195a] to-[#0e1737] px-4 py-16 text-white sm:px-6 sm:py-20"
    >
      <div className="relative mx-auto min-w-0 max-w-7xl">
        <div className="w-full text-center">
          <div className="mx-auto max-w-4xl text-center px-4">
            <span className="inline-flex items-center rounded-full border border-brand-cyan/35 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.24em] text-brand-cyan-bright">
              ⚙️ Process
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              How it works
            </h2>
            <p className="mt-4 text-base leading-relaxed text-white/72 sm:text-lg">
              A fast, public-profile workflow designed to turn your TikTok activity into clear actions, not another dashboard to decode.
            </p>
          </div>

          <ol className="mt-10 grid justify-items-center gap-6 sm:grid-cols-2">
            {steps.map((step, index) => (
              <li
                key={step.number}
                className={`group relative w-full max-w-xl overflow-hidden rounded-3xl border p-5 shadow-lg shadow-black/10 transition motion-safe:duration-300 motion-safe:hover:-translate-y-1 motion-safe:hover:border-brand-cyan/40 sm:p-6 ${
                  index % 2 === 0
                    ? "border-white/12 bg-white/6"
                    : "border-brand-cyan/20 bg-linear-to-br from-brand-cyan/14 to-white/6"
                }`}
              >
                <div className="absolute inset-x-0 top-0 h-1 bg-linear-to-r from-brand-cyan via-brand-cyan-bright to-white/30 opacity-80" />

                <div className="flex flex-col items-center gap-4 text-center">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/10 text-sm font-bold text-white shadow-inner shadow-black/15">
                    {step.number}
                  </div>

                  <div className="min-w-0">
                    <h3 className="text-lg font-semibold text-white sm:text-xl">{step.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/68 sm:text-[0.95rem]">
                      {step.description}
                    </p>
                  </div>
                </div>

                <div className="mt-5 flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-brand-cyan-bright/80">
                  <span className="h-px flex-1 bg-white/10" />
                  Step {step.number}
                  <span className="h-px flex-1 bg-white/10" />
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
