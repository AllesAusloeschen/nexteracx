import type { Metadata } from "next";
import ContactForm from "../components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Book a free CX operations strategy call or send a message. Let's discuss how to improve your customer experience operations.",
  openGraph: {
    title: "Contact | NextEraCX",
    description:
      "Book a free strategy call or get in touch to discuss your CX operations.",
    url: "https://nexteracx.co/contact",
  },
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy text-white">
        <div className="mx-auto max-w-6xl px-6 lg:px-8 py-20 md:py-28">
          <div className="max-w-3xl">
            <p className="text-teal text-sm font-semibold uppercase tracking-wider mb-4">
              Contact
            </p>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight mb-6">
              Let&apos;s talk.
            </h1>
            <p className="text-lg text-gray-400 leading-relaxed max-w-2xl">
              Book a free strategy call or send us a message. No sales pitch
               - just an honest conversation about your CX operations.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 lg:px-8 py-20 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Calendly Embed Placeholder */}
            <div>
              <h2 className="text-2xl font-bold text-navy mb-2">
                Book a Strategy Call
              </h2>
              <p className="text-gray-600 mb-6">
                Pick a time that works for you. Calls are 30 minutes, free, and
                focused on understanding your CX challenges.
              </p>

              <iframe
                src="https://calendly.com/mathias-nexteracx/30min?hide_gdpr_banner=1"
                width="100%"
                height="700"
                frameBorder="0"
                title="Schedule a strategy call"
                className="rounded-lg border border-gray-200"
              />
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold text-navy mb-2">
                Send a Message
              </h2>
              <p className="text-gray-600 mb-6">
                Prefer to write? Send us the details and we will get back to you
                within one business day.
              </p>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Additional contact info */}
      <section className="bg-gray-50 border-t border-gray-200">
        <div className="mx-auto max-w-6xl px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-navy mb-2">
                Response Time
              </h3>
              <p className="text-gray-600 text-sm">
                Within one business day for all inquiries.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-navy mb-2">
                Location
              </h3>
              <p className="text-gray-600 text-sm">
                Remote / US-based
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
