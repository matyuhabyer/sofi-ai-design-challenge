const NAV_LINKS = [
  { href: "#sample-report", label: "Sample report" },
  { href: "#pricing", label: "Pricing" },
] as const;

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-brand-navy/10 bg-background/85 backdrop-blur-md supports-[backdrop-filter]:bg-background/75">
      <div className="mx-auto flex max-w-6xl min-w-0 items-center gap-3 px-3 py-2.5 sm:gap-4 sm:px-6 sm:py-3">
        <a
          href="#top"
          className="shrink-0 text-lg font-bold tracking-tight text-brand-navy transition-colors duration-200 hover:text-brand-cyan motion-safe:hover:translate-x-0.5"
        >
          GIA
        </a>

        <nav
          className="flex min-w-0 flex-1 flex-wrap items-center justify-end gap-2 sm:gap-3"
          aria-label="Primary"
        >
          {NAV_LINKS.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="shrink-0 rounded-lg px-2 py-1.5 text-xs font-medium text-brand-navy/70 underline decoration-transparent decoration-2 underline-offset-4 transition-[color,background-color,text-decoration-color,transform] duration-200 hover:bg-brand-navy/5 hover:text-brand-navy hover:decoration-brand-cyan/80 motion-safe:hover:-translate-y-px sm:px-3 sm:text-sm"
            >
              {label}
            </a>
          ))}
          <a
            href="#get-started"
            className="shrink-0 rounded-xl bg-gradient-to-r from-brand-cyan to-brand-cyan-bright px-3 py-2 text-xs font-semibold text-white shadow-md shadow-brand-cyan/25 transition hover:opacity-95 motion-safe:active:scale-[0.98] sm:px-4 sm:py-2.5 sm:text-sm"
          >
            Get started
          </a>
        </nav>
      </div>
    </header>
  );
}
