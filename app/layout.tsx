import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GIA — Generative Influencer Analyst | Know what your TikTok audience is actually telling you",
  description:
    "GIA turns your TikTok content into a clear report—what worked, what didn't, and what to post next. No login required. Works with public profiles only.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
