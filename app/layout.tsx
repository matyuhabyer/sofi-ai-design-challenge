import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import ChatWidget from "./components/ChatWidget";
import SiteHeader from "./components/SiteHeader";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  title: "GIA — Generative Influencer Analyst | Know what your TikTok audience is actually telling you",
  description:
    "GIA turns your TikTok content into a clear report—what worked, what didn't, and what to post next. No login required. Works with public profiles only.",
  icons: {
    icon: "/gia-logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`h-full overflow-x-clip antialiased ${inter.variable} ${montserrat.variable}`} suppressHydrationWarning>
      <body className="min-h-full min-w-0 flex flex-col overflow-x-clip font-sans" suppressHydrationWarning>
        <SiteHeader />
        {children}
        <ChatWidget />
      </body>
    </html>
  );
}
