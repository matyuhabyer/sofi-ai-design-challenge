export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-brand-navy py-10 px-6">
      <div className="mx-auto max-w-5xl">
        <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
          {/* Brand */}
          <div>
            <p className="text-lg font-bold text-white">
              GIA{" "}
              <span className="font-normal text-white/70">by SOFI AI</span>
            </p>
            <p className="mt-1 text-sm text-white/55">
              Helping creators grow with clarity
            </p>
          </div>

          {/* Links */}
          <nav className="flex items-center gap-6 text-sm text-white/65">
            <a href="#" className="hover:text-brand-cyan-bright transition-colors">
              Terms
            </a>
            <a href="#" className="hover:text-brand-cyan-bright transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-brand-cyan-bright transition-colors">
              Contact
            </a>
          </nav>
        </div>

        <div className="mt-8 border-t border-white/10 pt-6 text-center text-xs text-white/45">
          © {new Date().getFullYear()} SOFI AI. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
