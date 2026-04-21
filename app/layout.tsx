import type { Metadata, Viewport } from "next";
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
    default: "NextEraCX | AI-Ready CX for DTC Brands",
    template: "%s | NextEraCX",
  },
  description:
    "We help DTC brands transition from human-only to AI-augmented CX operations. AI-Ready CX Audits, transition implementation, and ongoing advisory.",
  metadataBase: new URL("https://nexteracx.co"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nexteracx.co",
    siteName: "NextEraCX",
    title: "NextEraCX | AI-Ready CX for DTC Brands",
    description:
      "We help DTC brands transition from human-only to AI-augmented CX operations. AI-Ready CX Audits, transition implementation, and ongoing advisory.",
  },
  twitter: {
    card: "summary_large_image",
    title: "NextEraCX | AI-Ready CX for DTC Brands",
    description:
      "We help DTC brands transition from human-only to AI-augmented CX operations. AI-Ready CX Audits, transition implementation, and ongoing advisory.",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/favicon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/favicon-180.png", sizes: "180x180" }],
  },
};

export const viewport: Viewport = {
  themeColor: "#111827",
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
