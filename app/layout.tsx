import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "NextEraCX | CX Operations Consulting",
    template: "%s | NextEraCX",
  },
  description:
    "Strategic CX operations consulting for DTC and SaaS brands. Audits, systems optimization, and team scaling by Mathias Dorr and Alyssa Provitt.",
  metadataBase: new URL("https://nexteracx.co"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nexteracx.co",
    siteName: "NextEraCX",
    title: "NextEraCX | CX Operations Consulting",
    description:
      "Strategic CX operations consulting for DTC and SaaS brands. Audits, systems optimization, and team scaling.",
  },
  twitter: {
    card: "summary_large_image",
    title: "NextEraCX | CX Operations Consulting",
    description:
      "Strategic CX operations consulting for DTC and SaaS brands.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full`}>
      <body className="min-h-full flex flex-col antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
