import Link from 'next/link';

export default function ProductFlowPage() {
  const steps = [
    {
      number: '01',
      title: 'Entry',
      description:
        'Creators land on the homepage and immediately understand what GIA does and why it matters.',
      highlights: [
        'Clear call-to-action: Analyze my TikTok',
        'Strong value proposition above the fold',
        'No login required',
      ],
      insight:
        'The experience should feel instant and approachable — creators should never feel intimidated by analytics.',
    },
    {
      number: '02',
      title: 'Input',
      description:
        'A lightweight intake form gathers essential context while keeping friction low.',
      highlights: [
        'TikTok profile link',
        'Creator goal (views, followers, engagement)',
        'Optional niche/category',
        'Optional analysis depth',
      ],
      insight:
        'Speed is part of the product promise. The form should feel fast, clean, and effortless.',
    },
    {
      number: '03',
      title: 'Permissions & Context',
      description:
        'Before analysis begins, GIA explains exactly what data is being analyzed.',
      highlights: [
        'Public videos and engagement only',
        'No DMs or private information',
        'Estimated processing time',
        'Privacy assurance',
      ],
      insight:
        'Transparency builds trust. Users should feel safe before they submit anything.',
    },
    {
      number: '04',
      title: 'Processing',
      description:
        'The system feels alive through transparent progress updates and real-time feedback.',
      highlights: [
        'Pulling posts...',
        'Reading comments...',
        'Scoring hooks...',
        'Detecting patterns...',
        'Generating recommendations...',
      ],
      insight:
        'Showing progress reduces abandonment and makes the AI feel more credible.',
    },
    {
      number: '05',
      title: 'Results Dashboard',
      description:
        'The core product experience — a creator-friendly dashboard with actionable insights.',
      highlights: [
        'Account score',
        'Hook analysis',
        'Audience signals',
        'Comment intelligence',
        'Content ideas',
        'Growth roadmap',
      ],
      insight:
        'The dashboard focuses on decisions, not raw metrics. Every section answers: “What should I do next?”',
    },
    {
      number: '06',
      title: 'Export & Sharing',
      description:
        'Creators can save, export, and share insights with collaborators or teams.',
      highlights: [
        'Download PDF summary',
        'Shareable report link',
        'Save reports for tracking',
        'Optional recurring analysis',
      ],
      insight:
        'The export layer extends product value beyond a single session.',
    },
  ];

  return (
    <main className="min-h-screen bg-brand-navy">
      {/* HEADER */}
      <section className="border-b border-white/10 bg-brand-navy">
        <div className="mx-auto max-w-5xl px-6 py-20 text-center lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-cyan">
            Product Flow
          </p>

          <h1 className="mt-6 text-5xl font-bold tracking-tight text-white sm:text-6xl">
            How GIA works
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-white/65">
            From TikTok profile input to actionable creator insights, every step
            is designed to reduce friction, build trust, and help creators make
            smarter content decisions.
          </p>
        </div>
      </section>

      {/* FLOW */}
      <section className="border-b border-white/10 bg-brand-navy">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="relative">
            {/* Vertical timeline line */}
            <div className="absolute left-7 top-0 hidden h-full w-px bg-white/10 lg:block" />

            <div className="space-y-24">
              {steps.map((step) => (
                <div
                  key={step.number}
                  className="relative grid gap-8 lg:grid-cols-[120px_1fr]"
                >
                  {/* STEP NUMBER */}
                  <div className="relative z-10 flex lg:justify-center">
                    <div className="sticky top-24 flex h-14 w-14 items-center justify-center rounded-2xl border border-brand-cyan/20 bg-brand-navy shadow-sm">
                      <span className="text-lg font-bold text-brand-cyan">
                        {step.number}
                      </span>
                    </div>
                  </div>

                  {/* CONTENT CARD */}
                  <div className="rounded-4xl border border-white/10 bg-white/5 p-8 shadow-[0_1px_2px_rgba(0,0,0,0.04)] sm:p-10">
                    <div className="max-w-3xl">
                      <h2 className="text-3xl font-bold tracking-tight text-white">
                        {step.title}
                      </h2>

                      <p className="mt-4 text-lg leading-8 text-white/65">
                        {step.description}
                      </p>
                    </div>

                    {/* Highlights */}
                    <div className="mt-10 grid gap-4 sm:grid-cols-2">
                      {step.highlights.map((item, i) => (
                        <div
                          key={i}
                          className="rounded-2xl bg-white/5 p-5"
                        >
                          <div className="flex items-start gap-3">
                            <div className="mt-1.5 h-2 w-2 rounded-full bg-brand-cyan" />

                            <p className="text-sm leading-7 text-white/75">
                              {item}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Design Insight */}
                    <div className="mt-8 rounded-3xl border border-brand-cyan/10 bg-brand-cyan/4 p-6">
                      <p className="text-sm font-semibold uppercase tracking-wide text-brand-cyan">
                        Design Insight
                      </p>

                      <p className="mt-3 text-base leading-8 text-white/75">
                        {step.insight}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="border-t border-white/10 bg-brand-navy">
        <div className="mx-auto max-w-5xl px-6 py-24 text-center lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-cyan">
            Core Philosophy
          </p>

          <h2 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Built for creators,
            <br />
            not analysts
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-white/65">
            GIA reduces complexity and surfaces only the insights that matter.
            Every interaction is designed around clarity, speed, and actionable
            guidance.
          </p>
        </div>
      </section>
    </main>
  );
}