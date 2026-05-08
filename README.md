# SOFI AI Design Challenge

An editorial landing page for GIA, the SOFI AI TikTok strategist. The site presents GIA as a productized creator-analysis experience: a bold hero, animated social proof strip, sample report preview, feature highlights, a how-it-works walkthrough, creator-focused positioning, GIA's story, pricing, FAQ, and a final call to action.

## What’s Included

- Hero section with a TikTok logo lockup and primary calls to action
- Marquee strip highlighting core product themes
- Sample report preview
- Feature cards explaining what GIA does
- Step-by-step how-it-works section
- Creator-focused insights section
- GIA origin story section
- Pricing cards
- FAQ accordion
- Early-access CTA form
- Footer with social links and brand mark

## Tech Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS v4
- ESLint

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open the local site in your browser at:

```text
http://localhost:3000
```

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the site for production
- `npm run start` - Start the production server
- `npm run lint` - Run ESLint

## Project Structure

```text
app/
	page.tsx
	globals.css
	layout.tsx
	components/
		CTASection.tsx
		FAQSection.tsx
		FeaturesSection.tsx
		Footer.tsx
		ForCreatorsSection.tsx
		GiaStorySection.tsx
		HeroSection.tsx
		HowItWorksSection.tsx
		MarqueeSection.tsx
		PricingSection.tsx
		Reveal.tsx
		SampleReportSection.tsx
		SiteHeader.tsx
public/
	gia-logo-v2.png
	gia-illustration.png
	tiktok-logo.png
```

## Notes

- Sections are assembled in `app/page.tsx`.
- The site uses a reusable `Reveal` wrapper for section entry behavior.
- Static images live in `public/` and are optimized through Next.js `Image`.
- The design is intentionally bold and content-heavy to showcase the brand story and product value quickly.