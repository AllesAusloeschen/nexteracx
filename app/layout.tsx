import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const GTM_ID = "GTM-NTZ7F2Q5";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "NextEraCX | Prevent Contacts, Automate Support, Prove the AI Is Right",
    template: "%s | NextEraCX",
  },
  description:
    "NextEraCX helps DTC, CPG, and subscription brands prevent the contacts that shouldn't happen, let AI answer up to 80% of the rest with every answer checked, and make each customer feel known. On the tools you already have.",
  metadataBase: new URL("https://nexteracx.co"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nexteracx.co",
    siteName: "NextEraCX",
    title: "NextEraCX | Prevent Contacts, Automate Support, Prove the AI Is Right",
    description:
      "NextEraCX helps DTC, CPG, and subscription brands prevent the contacts that shouldn't happen, let AI answer up to 80% of the rest with every answer checked, and make each customer feel known. On the tools you already have.",
  },
  twitter: {
    card: "summary_large_image",
    title: "NextEraCX | Prevent Contacts, Automate Support, Prove the AI Is Right",
    description:
      "NextEraCX helps DTC, CPG, and subscription brands prevent the contacts that shouldn't happen, let AI answer up to 80% of the rest with every answer checked, and make each customer feel known. On the tools you already have.",
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
        <Script id="gtm" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${GTM_ID}');`}
        </Script>
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
