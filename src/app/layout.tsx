import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Tribridge — Smart Outsourcing. Real Results.",
  description:
    "Tribridge is a BPO and remote operations firm based in Addis Ababa, Ethiopia, helping businesses globally scale with trained dedicated teams. Proposal delivered within 48 hours. Flexible pricing, no lock-in.",
  keywords: [
    "BPO",
    "business process outsourcing",
    "remote teams",
    "virtual admin",
    "legal admin",
    "customer support",
    "back office",
    "Ethiopia in-country support",
    "Tribridge",
  ],
  openGraph: {
    title: "Tribridge — Smart Outsourcing. Real Results.",
    description:
      "Scale your business with dedicated trained remote teams — based in Ethiopia, serving clients globally.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} scroll-smooth`}
    >
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
