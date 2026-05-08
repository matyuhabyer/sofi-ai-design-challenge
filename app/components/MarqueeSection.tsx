export default function MarqueeSection() {
  const items = [
    "Hook Scores",
    "Audience Signals",
    "Comment Insights",
    "Viral Patterns",
    "What To Post Next",
    "Growth Recommendations",
    "Better Hooks",
    "Smarter Content",
    "AI-Powered Creator Analysis",
  ];

  const Group = () => (
    <div className="flex shrink-0 items-center justify-around gap-8 px-4 sm:gap-12 sm:px-6">
      {items.map((item, i) => (
        <span key={i} className="flex items-center gap-8 sm:gap-12">
          <span className="text-sm font-semibold uppercase tracking-widest text-brand-cyan sm:text-[0.95rem]">
            {item}
          </span>
          <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-brand-cyan/40" />
        </span>
      ))}
    </div>
  );

  return (
    <div className="relative flex w-full overflow-hidden border-b border-brand-navy/10 bg-brand-navy py-5">
      <div className="flex w-max min-w-full shrink-0 animate-[marquee_40s_linear_infinite] motion-reduce:animate-none">
        <Group />
        <Group />
      </div>
    </div>
  );
}
