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
    "Tribridge is a global BPO and remote operations firm helping businesses scale with trained remote teams and streamlined outsourced operations. 48-hour deployment, flexible pricing, vetted talent.",
  keywords: [
    "BPO",
    "business process outsourcing",
    "remote teams",
    "customer support",
    "IT helpdesk",
    "back office",
    "sales outsourcing",
    "Tribridge",
  ],
  openGraph: {
    title: "Tribridge — Smart Outsourcing. Real Results.",
    description:
      "Scale your business with trained remote teams and streamlined outsourced operations.",
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
