import type { Metadata } from "next";
import ContactForm from "../components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Tell us where your customer experience is today and where you want it to go. Book a time or send a message to NextEraCX.",
  openGraph: {
    title: "Contact | NextEraCX",
    description:
      "Let's talk. Tell us where your customer experience is today and where you want it to go.",
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
              Tell us where your customer experience is today and where you
              want it to go. Book a time below, or send a message.
            </p>
            <p className="mt-4 text-gray-400">
              Prefer email? Write to{" "}
              <a
                href="mailto:mathias@nexteracx.co"
                className="text-teal hover:text-white transition-colors"
              >
                mathias@nexteracx.co
              </a>
              .
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 lg:px-8 py-20 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Calendly Embed */}
            <div>
              <h2 className="text-2xl font-bold text-navy mb-2">
                Book a time
              </h2>
              <p className="text-gray-600 mb-6">
                Pick a time that works. We&apos;ll talk through your platform,
                your team, and what customers are contacting you about.
              </p>

              <iframe
                src="https://calendly.com/mathias-nexteracx/30min?hide_gdpr_banner=1"
                width="100%"
                height="700"
                frameBorder="0"
                title="Schedule an audit scoping call"
                className="rounded-lg border border-gray-200"
              />
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold text-navy mb-2">
                Send a Message
              </h2>
              <p className="text-gray-600 mb-6">
                Prefer to write? Send me the details and I will get back to you
                within one business day.
              </p>
              <ContactForm />

              {/* Info */}
              <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
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
          </div>
        </div>
      </section>
    </>
  );
}
