import type { Metadata } from "next";
import ClosingCTA from "../components/ClosingCTA";
import SectionHeading from "../components/SectionHeading";
import ShiftRows from "../components/ShiftRows";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Platform, process, AI and automation, proactive CX, personalization, and CX leadership for DTC, CPG, subscription, and B2B SaaS companies moving to the next era of customer experience.",
  openGraph: {
    title: "Services | NextEraCX",
    description:
      "Customer experience is changing faster than it has in decades. NextEraCX helps companies get there: platform, process, automation, and people, working together.",
    url: "https://nexteracx.co/services",
  },
};

const services = [
  {
    id: "platform",
    title: "Platform",
    headline: "The right help desk, set up right.",
    items: [
      "Help desk selection, setup, and optimization",
      "Platform migrations and integrations (Gorgias, Zendesk, Shopify, Recharge, Klaviyo, and more)",
      "Routing, views, tags, and workflows that scale",
    ],
  },
  {
    id: "process",
    title: "Process",
    headline: "An operating system for your customer experience.",
    items: [
      "CX playbooks and SOPs",
      "Macro libraries and knowledge bases",
      "QA programs and escalation paths",
    ],
  },
  {
    id: "ai-automation",
    title: "AI & Automation",
    headline: "Up to 80% of tickets answered by AI.",
    items: [
      "AI agent setup and tuning",
      "Testing against real, hard cases before customers see it",
      "A smooth handoff from AI to people",
    ],
  },
  {
    id: "proactive-cx",
    title: "Proactive CX",
    headline: "The best ticket is the one that never gets sent.",
    items: [
      "Contact-driver analysis: what customers ask, and why",
      "Proactive messages for delays, stockouts, renewals, and common questions",
      "Root causes routed to product, marketing, and fulfillment",
    ],
  },
  {
    id: "personalization-retention",
    title: "Personalization & Retention",
    headline: "Every customer treated like one.",
    items: [
      "Subscription cancel, pause, and save flows",
      "VIP routing and priority service for your best customers",
      "Service and accommodations shaped by customer history and value",
    ],
  },
  {
    id: "leadership-insights",
    title: "Leadership & Insights",
    headline: "Senior CX leadership, when you need it.",
    items: [
      "Fractional head of CX",
      "KPI dashboards, cost per ticket, and executive reporting",
      "Voice of Customer programs that turn feedback into fixes",
    ],
  },
];

const steps = [
  {
    title: "Discover",
    description:
      "We look at your platform, your data, and what customers are contacting you about.",
  },
  {
    title: "Roadmap",
    description:
      "Where you are, where you could be, and the order to get there.",
  },
  {
    title: "Build",
    description: "Platform, process, and automation, set up and tested.",
  },
  {
    title: "Run and improve",
    description:
      "Ongoing optimization and leadership, as much or as little as you need.",
  },
];

const audience = [
  "DTC and CPG brands",
  "Subscription businesses",
  "B2B SaaS companies",
  "In-house teams, outsourced teams, or both",
];

const faqs = [
  {
    q: "Do we need to switch platforms?",
    a: "Sometimes. Often the best move is optimizing what you have. Sometimes a migration is the better path. We'll tell you which, and handle it either way.",
  },
  {
    q: "Is “up to 80%” realistic?",
    a: "It depends on your ticket mix. Order status, shipping, returns, account, and subscription questions are highly automatable. Complex issues and upset customers need people.",
  },
  {
    q: "What if we're not ready for AI?",
    a: "Then we start with platform and process, so your team is faster now and ready whenever you choose.",
  },
  {
    q: "Will AI replace our team?",
    a: "No. It takes the repetition so your people can focus on retention, proactive outreach, and the conversations that need judgment.",
  },
  {
    q: "What does “proactive” look like in practice?",
    a: "A customer whose order is delayed hears from you before they wonder where it is. A subscriber gets a heads-up before a renewal. A question that keeps coming up gets answered before it's asked.",
  },
  {
    q: "Do you work with SaaS companies?",
    a: "Yes. The same principles apply: onboarding, account and billing questions, and getting ahead of issues before customers notice them.",
  },
  {
    q: "Can you work with our in-house team and outsourcing partners?",
    a: "Yes. Everyone who answers your customers works from the same playbook, knowledge, and handoff rules.",
  },
  {
    q: "What platforms do you work with?",
    a: "Gorgias and Zendesk most deeply, along with Shopify, Recharge, Klaviyo, and marketplace channels. Others we can discuss.",
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
              Where CX is going
            </p>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight">
              Customer experience is changing faster than it has in decades.
            </h1>
          </div>
        </div>
      </section>

      {/* The vision */}
      <section className="bg-white">
        <div className="mx-auto max-w-3xl px-6 lg:px-8 py-20 md:py-24">
          <div className="space-y-5 text-gray-600 text-lg leading-relaxed">
            <p>
              Support is moving from reactive to proactive. Instead of waiting
              for customers to write in, the best companies reach them first: a
              delay explained before anyone asks, a renewal confirmed before it
              ships, a fix on the way before the complaint.
            </p>
            <p>
              AI now answers routine questions instantly, in any channel, at
              any hour. And every customer can be treated as an individual,
              with service shaped by their history and what they mean to the
              business.
            </p>
            <p>
              People don&apos;t disappear in that future. Their role grows:
              designing how the AI behaves, handling the moments that need
              judgment and empathy, and building relationships with the
              customers who matter most.
            </p>
            <p className="font-semibold text-navy">
              That future isn&apos;t years away. Most of it can be built now,
              on platforms that exist today. NextEraCX is here to get you
              there.
            </p>
          </div>
        </div>
      </section>

      {/* The shift */}
      <section className="bg-gray-50">
        <div className="mx-auto max-w-6xl px-6 lg:px-8 py-20 md:py-24">
          <SectionHeading label="The shift" title="The future of CX is already here." />
          <ShiftRows />
        </div>
      </section>

      {/* How we get you there */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 lg:px-8 py-20 md:py-24">
          <SectionHeading
            label="How we get you there"
            title="Platform, process, automation, and people, working together."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                id={service.id}
                className="scroll-mt-24 rounded-xl border border-gray-200 p-6"
              >
                <h2 className="text-2xl font-bold text-navy mb-2">
                  {service.title}
                </h2>
                <p className="font-semibold text-teal mb-4">{service.headline}</p>
                <ul className="space-y-3">
                  {service.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-sm text-gray-600"
                    >
                      <span className="text-teal mt-0.5 flex-shrink-0">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How we work */}
      <section className="bg-gray-50">
        <div className="mx-auto max-w-6xl px-6 lg:px-8 py-20 md:py-24">
          <SectionHeading title="How we work" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <div key={step.title} className="p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-teal/10 text-teal text-lg font-bold mb-4">
                  {i + 1}
                </div>
                <h3 className="text-lg font-semibold text-navy mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who we work with */}
      <section className="bg-white">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 py-20 md:py-24">
          <SectionHeading title="Who we work with" />
          <ul className="space-y-4 max-w-2xl mx-auto">
            {audience.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 text-gray-600 text-lg leading-relaxed"
              >
                <span className="text-teal mt-0.5 flex-shrink-0">✓</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-gray-50">
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

      <ClosingCTA />
    </>
  );
}
