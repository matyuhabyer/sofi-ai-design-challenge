const PLANS = [
  {
    name: "Starter",
    price: "₱3,500",
    cadence: "one-time report",
    badge: null as string | null,
    highlights: [
      "10 video analysis",
      "Hook scoring + breakdown",
      "Comment sentiment",
      "3 video ideas",
      "Shareable story card",
    ],
    cta: "Get started",
    ctaHref: "#get-started",
    variant: "default" as const,
  },
  {
    name: "Deep dive",
    price: "₱6,500",
    cadence: "one-time report",
    badge: "Most popular",
    highlights: [
      "30 video analysis",
      "Full hook + comment deep dive",
      "GIA account score",
      "5 video ideas + hook scripts",
      "30-day content roadmap",
      "Shareable story card",
    ],
    cta: "Get your report",
    ctaHref: "#get-started",
    variant: "featured" as const,
  },
  {
    name: "Monthly",
    price: "₱12,000",
    cadence: "per month",
    badge: null as string | null,
    highlights: [
      "Weekly mini-reports",
      "Monthly full deep dive",
      "Strategy calls included",
      "Priority turnaround",
      "4 story cards/month",
      "Slack access to GIA",
    ],
    cta: "Let's talk",
    ctaHref: "#get-started",
    variant: "default" as const,
  },
];

function CheckIcon() {
  return (
    <svg
      className="mt-0.5 h-5 w-5 shrink-0 text-brand-cyan"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
      aria-hidden="true"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}

export default function PricingSection() {
  return (
    <section id="pricing" className="scroll-mt-16 bg-background px-4 py-16 sm:px-6 sm:py-20">
      <div className="mx-auto min-w-0 max-w-6xl">
        <div className="mb-14 text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-brand-cyan">
            Pricing
          </span>
          <h2 className="mt-3 text-2xl font-bold text-brand-navy sm:text-3xl md:text-4xl">
            Pick the depth that fits your growth
          </h2>
          <p className="mx-auto mt-4 max-w-2xl px-1 text-base text-brand-navy/70 sm:text-lg">
            Clear one-time reports or ongoing partnership—all priced in PHP,
            no mystery tiers.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-3 lg:items-start">
          {PLANS.map((plan) => {
            const featured = plan.variant === "featured";
            return (
              <article
                key={plan.name}
                className={`relative flex min-w-0 flex-col rounded-2xl border bg-background p-5 shadow-sm transition motion-safe:duration-300 motion-safe:hover:-translate-y-1 motion-safe:hover:shadow-lg sm:p-8 ${
                  featured
                    ? "border-brand-cyan shadow-brand-cyan/15 ring-2 ring-brand-cyan/35"
                    : "border-brand-navy/10 hover:border-brand-cyan/25"
                }`}
              >
                {plan.badge ? (
                  <span className="absolute -top-3 left-1/2 max-w-[calc(100%-2rem)] -translate-x-1/2 rounded-full bg-gradient-to-r from-brand-cyan to-brand-cyan-bright px-3 py-1 text-center text-[10px] font-bold uppercase tracking-wide text-white shadow-md sm:max-w-none sm:whitespace-nowrap sm:px-4 sm:text-xs">
                    {plan.badge}
                  </span>
                ) : null}

                <div className="mb-6 text-center lg:text-left">
                  <h3 className="text-xl font-bold text-brand-navy">{plan.name}</h3>
                  <p className="mt-4 flex flex-col items-center gap-1 lg:items-start">
                    <span className="text-3xl font-extrabold tracking-tight text-brand-navy sm:text-4xl">
                      {plan.price}
                    </span>
                    <span className="text-sm font-medium text-brand-navy/55">{plan.cadence}</span>
                  </p>
                </div>

                <ul className="mb-8 flex flex-1 flex-col gap-3 text-sm text-brand-navy/80">
                  {plan.highlights.map((line) => (
                    <li key={line} className="flex gap-3">
                      <CheckIcon />
                      <span className="leading-snug">{line}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={plan.ctaHref}
                  className={`mt-auto inline-flex w-full items-center justify-center rounded-xl px-5 py-3.5 text-center text-sm font-semibold transition motion-safe:active:scale-[0.98] ${
                    featured
                      ? "bg-gradient-to-r from-brand-cyan to-brand-cyan-bright text-white shadow-lg shadow-brand-cyan/30 hover:opacity-95"
                      : "border border-brand-navy/15 bg-background text-brand-navy hover:border-brand-cyan/40 hover:bg-surface-tint"
                  }`}
                >
                  {plan.cta}
                </a>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
