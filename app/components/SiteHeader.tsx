import Image from "next/image";

const NAV_LINKS = [
  { href: "#sample-report", label: "Sample Analysis" },
  { href: "#how-it-works", label: "How It Works" },
  { href: "#gia-story", label: "Gia's Story" },
  { href: "#pricing", label: "Pricing" },
] as const;

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-linear-to-b from-[#0f1738]/95 to-[#0f1738]/80 backdrop-blur-xl supports-backdrop-filter:bg-[#0f1738]/85">
      <div className="mx-auto flex max-w-6xl min-w-0 items-center gap-3 px-3 py-2.5 sm:gap-4 sm:px-6 sm:py-3">
        <a
          href="#top"
          className="flex shrink-0 items-center gap-2 transition-opacity duration-200 hover:opacity-85"
          aria-label="GIA home"
        >
          <Image
            src="/gia-logo-v2.png"
            alt="GIA logo"
            width={1080}
            height={1080}
            className="h-9 w-9 object-contain"
            priority
          />
          <span className="font-heading inline-flex items-baseline gap-1 text-xl font-extrabold tracking-tight text-white">
            <span className="text-[0.7rem] font-semibold tracking-[0.22em] text-white/60 sm:text-[0.75rem]">
              by SOFI AI
            </span>
          </span>
        </a>

        <nav
          className="flex min-w-0 flex-1 flex-wrap items-center justify-end gap-2 sm:gap-3"
          aria-label="Primary"
        >
          {NAV_LINKS.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="shrink-0 rounded-lg px-2 py-1.5 text-xs font-medium text-white/70 underline decoration-transparent decoration-2 underline-offset-4 transition-[color,background-color,text-decoration-color,transform] duration-200 hover:bg-white/6 hover:text-white hover:decoration-brand-cyan/80 motion-safe:hover:-translate-y-px sm:px-3 sm:text-sm"
            >
              {label}
            </a>
          ))}
          <a
            href="#get-started"
            className="shrink-0 rounded-xl bg-linear-to-r from-brand-cyan to-brand-cyan-bright px-3 py-2 text-xs font-semibold text-white shadow-md shadow-brand-cyan/25 transition hover:opacity-95 motion-safe:active:scale-[0.98] sm:px-4 sm:py-2.5 sm:text-sm"
          >
            Get started
          </a>
        </nav>
      </div>
    </header>
  );
}
