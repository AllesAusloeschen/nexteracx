import type { Metadata } from "next";
import SectionHeading from "../components/SectionHeading";
import CTAButton from "../components/CTAButton";

export const metadata: Metadata = {
  title: "Services",
  description:
    "AI-Ready CX Audit, Implementation & Build-Out, Fractional Head of CX, and Ongoing AI Advisory for DTC and subscription brands. Fixed-fee audit first, independent and hands-on.",
  openGraph: {
    title: "Services | NextEraCX",
    description:
      "AI tools are commodities. The strategy is the value. CX operations services for DTC and subscription brands, starting with a fixed-fee audit.",
    url: "https://nexteracx.co/services",
  },
};

const services = [
  {
    id: "audit",
    title: "AI-Ready CX Audit",
    description:
      "Before you deploy AI agents, you need to know what they are walking into. Most DTC brands have knowledge bases full of outdated articles, automation rules built on top of each other, and escalation paths that exist in someone's head. This audit surfaces all of it and tells you exactly what needs to change before AI can take over tier 1.",
    deliverables: [
      "Ticket and contact-driver analysis: what customers contact you about, and why",
      "Knowledge base audit: gaps, outdated content, structure for AI",
      "Automation and AI agent review: what works, what conflicts, what's missing",
      "Escalation and handoff mapping",
      "Subscription, returns, and marketplace workflow review",
      "Cost per ticket and staffing coverage",
      "Quality program and Voice of Customer review",
      "Gorgias or Zendesk configuration review",
      "AI readiness scorecard with prioritized recommendations",
    ],
    pricing: "Fixed fee: $2,000 to $3,000 | Timeline: 2 weeks | Deliverable: CX Operations & AI Readiness Report with a prioritized 30/60/90 roadmap",
  },
  {
    id: "implementation",
    title: "Implementation & Build-Out",
    headline: "Once you know what's ready, I build it.",
    description:
      "Hands-on work inside your stack. The goal is an operation your team runs confidently without me.",
    deliverables: [
      "Knowledge base restructuring and rewriting for agents and AI",
      "Gorgias Automate or Zendesk AI agent configuration and rule design",
      "Handoff logic: triggers, sentiment thresholds, escalation criteria",
      "Macro library and escalation playbooks",
      "QA scorecards and a framework for monitoring AI accuracy and tone",
      "Subscription cancel, pause, and save flows",
      "Chargeback, fraud review, and returns processes",
      "SOPs and training materials for in-house and outsourced agents",
      "Integration testing and soft launch support",
    ],
    pricing: "From $3,000 per project",
  },
  {
    id: "fractional",
    title: "Fractional Head of CX",
    headline: "Senior CX leadership, without the full-time hire.",
    description:
      "For brands that need someone to own CX week to week but aren't ready for a full-time director.",
    deliverables: [
      "Weekly operations leadership with your in-house team and outsourcing partners",
      "Vendor management: SLAs, QA standards, staffing and capacity planning",
      "A monthly Voice of Customer review with accountable owners across teams",
      "Executive reporting: contact trends, cost per ticket, and investment recommendations",
      "Peak season and promotion readiness with marketing",
      "Fulfillment and 3PL partnership to cut delivery-related contacts",
    ],
    pricing: "From $3,000 per month",
  },
  {
    id: "advisory",
    title: "Ongoing Advisory & Optimization",
    description:
      "AI agent performance is not set-and-forget. Ticket patterns shift, products change, customers ask new questions. I stay embedded on a monthly retainer to tune automation rules, expand AI coverage into new ticket categories, retrain on knowledge base updates, and make sure the handoff between AI and human agents stays clean.",
    deliverables: [
      "Monthly AI agent performance review - resolution rate, escalation rate, CSAT impact",
      "Knowledge base maintenance and expansion",
      "New automation opportunity identification",
      "Escalation logic tuning based on real ticket data",
      "Team alignment - keeping human agents informed and effective as AI coverage expands",
      "Quarterly strategy review and roadmap update",
    ],
    pricing: "From $1,500 per month",
  },
];

const notIncluded = [
  "Supply support agents or staffing",
  "Resell software or take vendor commissions",
  "Lock you into a long-term contract",
];

const faqs = [
  {
    q: "Do we need to be on Gorgias?",
    a: "I am deepest on Gorgias, which is where most Shopify-native DTC brands live. I also work with Zendesk. If you are on something else, we can discuss whether I am the right fit on a call.",
  },
  {
    q: "What size companies do you work with?",
    a: "DTC ecommerce brands doing roughly $5M-$100M in revenue. Big enough that CX volume is a real operational challenge, but not so big that you need enterprise multi-agent architecture.",
  },
  {
    q: "Are you going to replace our CX team with AI?",
    a: "No. I design the transition so your human agents handle the conversations that actually need a person - complex issues, emotional moments, high-value customers. AI handles the repetitive tier 1 volume. Your team gets better work, not no work.",
  },
  {
    q: "How current is your AI agent expertise?",
    a: "I am a practitioner, not a theorist. The AI agent landscape - especially Gorgias Automate - has evolved significantly in 2025-2026. I stay current because I am actively building with these tools, not just advising from the sidelines.",
  },
  {
    q: "What does the audit actually deliver?",
    a: "A written AI Readiness Report covering your knowledge base, automation rules, escalation paths, and ticket patterns - all scored against what modern AI agents need to function well. Plus a prioritized roadmap. 2 weeks, $2-3K.",
  },
  {
    q: "What if we already have automation set up?",
    a: "Most brands do. And most of it was built before modern AI agents existed. The audit evaluates what you have, identifies what is helping vs. what is creating conflicts, and shows you what needs to change.",
  },
  {
    q: "Do you provide support agents?",
    a: "No. NextEraCX is independent. I help you build, run, and manage your team and any outsourcing partner you choose, but I don't staff it.",
  },
  {
    q: "Can you work with our outsourcing partner?",
    a: "Yes. I've managed outsourced teams directly: setting SLAs, running QA, and handling escalations.",
  },
  {
    q: "Is this only about AI?",
    a: "No. AI is one layer. The audit covers the whole operation: quality, retention flows, marketplaces, reporting, and cost.",
  },
  {
    q: "What tools do you work with?",
    a: "Gorgias and Zendesk most deeply, plus Shopify, Recharge, Klaviyo, and marketplace channels like Amazon and TikTok Shop. Other platforms we can discuss on a call.",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy text-white">
        <div className="mx-auto max-w-6xl px-6 lg:px-8 py-20 md:py-28">
          <div className="max-w-3xl">
            <p className="text-teal text-sm font-semibold uppercase tracking-wider mb-4">
              Services
            </p>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight mb-6">
              AI tools are commodities. The strategy is the value.
            </h1>
            <p className="text-lg text-gray-400 leading-relaxed max-w-2xl">
              Every engagement starts with a fixed-fee audit. From there, I
              build what&apos;s needed and, if you want, run it with you.
            </p>
          </div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="bg-white">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 py-20 md:py-24">
          <div className="space-y-20">
            {services.map((service) => (
              <div key={service.id} id={service.id}>
                <h2 className="text-2xl md:text-3xl font-bold text-navy mb-4">
                  {service.title}
                </h2>
                {service.headline && (
                  <p className="text-lg font-semibold text-teal mb-3">
                    {service.headline}
                  </p>
                )}
                <p className="text-gray-600 leading-relaxed mb-8">
                  {service.description}
                </p>
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-navy mb-4">
                    What you get
                  </h3>
                  <ul className="space-y-3">
                    {service.deliverables.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 text-sm text-gray-600"
                      >
                        <span className="text-teal mt-0.5 flex-shrink-0">
                          ✓
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                {service.pricing && (
                  <div className="mt-6 rounded-xl bg-teal/10 border border-teal/20 p-6 text-center">
                    <p className="text-sm font-semibold text-navy">
                      {service.pricing}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's not included */}
      <section className="bg-white border-t border-gray-200">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 py-20 md:py-24">
          <SectionHeading label="Independent" title="What NextEraCX doesn't do" />
          <div className="bg-gray-50 rounded-xl p-6 max-w-2xl mx-auto">
            <ul className="space-y-3">
              {notIncluded.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-gray-600"
                >
                  <span className="text-gray-400 mt-0.5 flex-shrink-0">✕</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <p className="mt-8 text-center text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Need agents? I&apos;ll help you choose and manage the right
            partner. I just won&apos;t be the one selling them to you.
          </p>
        </div>
      </section>

      {/* Pricing */}
      <section className="bg-gray-50">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 py-20 md:py-24">
          <SectionHeading
            label="Pricing"
            title="Start with the audit."
          />
          <p className="text-center text-gray-600 leading-relaxed max-w-2xl mx-auto mb-8">
            Every engagement begins with the AI-Ready CX Audit. It is a
            standalone deliverable - you get a complete AI readiness report
            whether or not you continue to implementation. Most brands that see
            their audit results want to keep going, but there is no pressure
            and no lock-in.
          </p>
          <div className="text-center">
            <CTAButton href="/contact">Get Your AI-Ready Audit</CTAButton>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white">
        <div className="mx-auto max-w-3xl px-6 lg:px-8 py-20 md:py-24">
          <SectionHeading label="FAQ" title="Common questions." />
          <div className="space-y-8">
            {faqs.map((faq) => (
              <div key={faq.q}>
                <h3 className="text-base font-semibold text-navy mb-2">
                  {faq.q}
                </h3>
                <p className="text-gray-600 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy text-white">
        <div className="mx-auto max-w-6xl px-6 lg:px-8 py-20 md:py-24 text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Your next hire might not be human.
          </h2>
          <p className="text-gray-400 text-lg mb-8 max-w-xl mx-auto">
            But it still needs someone to design its job. Start with the
            AI-Ready CX Audit.
          </p>
          <CTAButton href="/contact">Get Your AI-Ready Audit</CTAButton>
        </div>
      </section>
    </>
  );
}
