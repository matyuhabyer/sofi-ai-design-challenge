"use client";

import Image from "next/image";
import { useState } from "react";

const muted = "text-white/60";
const columnHeading =
  "text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-cyan-bright";
const footerLink =
  "block w-fit text-sm text-white/90 transition-colors hover:text-brand-cyan-bright";
const fieldBase =
  "rounded-lg border border-white/15 bg-white/5 px-4 py-2.5 text-sm text-white outline-none transition-colors placeholder:text-white/45 focus-visible:border-brand-cyan focus-visible:ring-2 focus-visible:ring-brand-cyan/25";

function IconTikTok({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
    </svg>
  );
}

function IconInstagram({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

function IconX({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function IconLinkedin({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

const socialPillClass =
  "inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-sm text-white/90 transition-colors hover:border-brand-cyan/45 hover:bg-white/10 hover:text-brand-cyan-bright";

export default function Footer() {
  const [waitlistEmail, setWaitlistEmail] = useState("");
  const year = new Date().getFullYear();

  function handleWaitlist(e: React.FormEvent) {
    e.preventDefault();
    alert(`Waitlist sign-up (demo): ${waitlistEmail || "your@email.com"}`);
  }

  return (
    <footer className="border-t border-white/10 bg-brand-navy px-4 py-14 font-sans text-white sm:px-6 sm:py-16 lg:py-20">
      <div className="mx-auto min-w-0 max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-3 lg:gap-10 xl:gap-16">
          {/* Brand + waitlist */}
          <div className="min-w-0 lg:max-w-sm">
            <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
              <Image
                src="/gia-logo.png"
                alt="GIA logo"
                width={1080}
                height={1080}
                className="h-10 w-10 object-contain sm:h-12 sm:w-12"
              />
              <span className={`text-sm ${muted}`}>by SOFI AI</span>
            </div>
            <p className={`mt-4 text-sm leading-relaxed sm:text-[15px] ${muted}`}>
              Your TikTok&apos;s most brutally honest strategist. No fluff, just what&apos;s
              actually working.
            </p>
            <form
              onSubmit={handleWaitlist}
              className="mt-6 flex min-w-0 flex-col gap-2 sm:flex-row sm:items-stretch"
            >
              <label htmlFor="footer-waitlist-email" className="sr-only">
                Email for waitlist
              </label>
              <input
                id="footer-waitlist-email"
                type="email"
                autoComplete="email"
                value={waitlistEmail}
                onChange={(e) => setWaitlistEmail(e.target.value)}
                placeholder="your@email.com"
                className={`min-w-0 flex-1 ${fieldBase}`}
              />
              <button
                type="submit"
                className="shrink-0 cursor-pointer rounded-lg bg-gradient-to-r from-brand-cyan to-brand-cyan-bright px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-brand-cyan/25 transition hover:opacity-95"
              >
                Join waitlist
              </button>
            </form>
          </div>

          {/* Product */}
          <nav className="min-w-0" aria-labelledby="footer-product-heading">
            <h2 id="footer-product-heading" className={columnHeading}>
              Product
            </h2>
            <ul className="mt-5 flex flex-col gap-3">
              <li>
                <a href="#how-it-works" className={footerLink}>
                  How it works
                </a>
              </li>
              <li>
                <a href="#features" className={footerLink}>
                  Features
                </a>
              </li>
              <li>
                <a href="#pricing" className={footerLink}>
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className={footerLink}>
                  Changelog
                </a>
              </li>
            </ul>
          </nav>

          {/* Company */}
          <nav className="min-w-0" aria-labelledby="footer-company-heading">
            <h2 id="footer-company-heading" className={columnHeading}>
              Company
            </h2>
            <ul className="mt-5 flex flex-col gap-3">
              <li>
                <a href="#" className={footerLink}>
                  About
                </a>
              </li>
              <li>
                <a href="#" className={footerLink}>
                  Privacy policy
                </a>
              </li>
              <li>
                <a href="#" className={footerLink}>
                  Terms of use
                </a>
              </li>
              <li>
                <a href="mailto:hello@sofiai.ai" className={footerLink}>
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div className="my-10 border-t border-white/10 sm:my-12" />

        <div className="flex flex-col items-center gap-8 sm:flex-row sm:items-center sm:justify-between">
          <p className={`flex items-center gap-2 text-sm ${muted}`}>
            <span
              className="h-2 w-2 shrink-0 rounded-full bg-brand-cyan motion-safe:animate-pulse"
              aria-hidden
            />
            © {year} SOFI AI. All rights reserved.
          </p>
          <div className="flex w-full flex-wrap items-center justify-center gap-3 sm:w-auto sm:justify-end">
            <a
              href="https://www.tiktok.com/"
              target="_blank"
              rel="noopener noreferrer"
              className={socialPillClass}
            >
              <IconTikTok className="h-4 w-4" />
              TikTok
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className={socialPillClass}
            >
              <IconInstagram className="h-4 w-4" />
              Instagram
            </a>
            <a
              href="https://x.com/"
              target="_blank"
              rel="noopener noreferrer"
              className={socialPillClass}
            >
              <IconX className="h-4 w-4" />
              Twitter / X
            </a>
            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className={socialPillClass}
            >
              <IconLinkedin className="h-4 w-4" />
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
