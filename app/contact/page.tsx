import type { Metadata } from "next";
import ContactForm from "../components/ContactForm";

export const metadata: Metadata = {
  title: "Get Started",
  description:
    "Book an AI-Ready CX Audit scoping call or send us a message. Find out if your CX operation is ready for AI agents.",
  openGraph: {
    title: "Get Started | NextEraCX",
    description:
      "Start with the AI-Ready CX Audit. 2 weeks, fixed fee, clear deliverables.",
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
              Get Started
            </p>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight mb-6">
              Start with the AI-Ready CX Audit.
            </h1>
            <p className="text-lg text-gray-400 leading-relaxed max-w-2xl">
              Book a call to scope the audit for your brand, or send us a
              message with details about your current setup. No pitch - just an
              honest conversation about whether your CX operation is ready for
              AI agents.
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
                Book an Audit Scoping Call
              </h2>
              <p className="text-gray-600 mb-6">
                Pick a time that works. We will walk through your current CX
                setup, ticket volume, and tech stack to scope the audit. 30
                minutes, free.
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
                Prefer to write? Send us the details and we will get back to you
                within one business day.
              </p>
              <ContactForm />

              {/* Info */}
              <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6">
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
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-navy mb-2">
                    Audit Timeline
                  </h3>
                  <p className="text-gray-600 text-sm">
                    2 weeks from kickoff to AI Readiness Report.
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
