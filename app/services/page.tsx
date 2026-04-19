import type { Metadata } from "next";
import SectionHeading from "../components/SectionHeading";
import CTAButton from "../components/CTAButton";

export const metadata: Metadata = {
  title: "Services",
  description:
    "AI-Ready CX Audit, AI Transition Implementation, and Ongoing Advisory for DTC brands moving from human-only to AI-augmented support operations.",
  openGraph: {
    title: "Services | NextEraCX",
    description:
      "AI tools are commodities. The strategy is the value. CX transition services for DTC brands.",
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
      "Knowledge base audit - coverage gaps, outdated content, structure for AI agent consumption",
      "Automation rule review - what is working, what is conflicting, what is missing",
      "Ticket pattern analysis - which categories are automatable, which need humans, and why",
      "Escalation path mapping - current state vs. what AI handoff logic requires",
      "AI readiness scorecard with prioritized recommendations",
      "Gorgias/Zendesk configuration review",
    ],
    pricing: "Fixed fee: $2-3K | Timeline: 2 weeks | Deliverable: AI Readiness Report with prioritized roadmap",
  },
  {
    id: "implementation",
    title: "AI Transition Implementation",
    description:
      "Once you know what is ready, we build it. Hands-on work inside your Gorgias instance - restructuring your knowledge base so AI agents can actually use it, designing automation rules that route correctly, and building the handoff logic that determines when a conversation gets escalated to a human. The goal is not to replace your team. It is to let them focus on the conversations that actually need a person.",
    deliverables: [
      "Knowledge base restructuring and content rewriting for AI agent consumption",
      "Gorgias Automate configuration and rule design",
      "Handoff logic - triggers, sentiment thresholds, and escalation criteria",
      "Macro and template updates for human agents handling escalated conversations",
      "QA framework for monitoring AI agent accuracy and tone",
      "Integration testing and soft launch support",
    ],
  },
  {
    id: "advisory",
    title: "Ongoing Advisory & Optimization",
    description:
      "AI agent performance is not set-and-forget. Ticket patterns shift, products change, customers ask new questions. We stay embedded on a monthly retainer to tune automation rules, expand AI coverage into new ticket categories, retrain on knowledge base updates, and make sure the handoff between AI and human agents stays clean.",
    deliverables: [
      "Monthly AI agent performance review - resolution rate, escalation rate, CSAT impact",
      "Knowledge base maintenance and expansion",
      "New automation opportunity identification",
      "Escalation logic tuning based on real ticket data",
      "Team alignment - keeping human agents informed and effective as AI coverage expands",
      "Quarterly strategy review and roadmap update",
    ],
  },
];

const faqs = [
  {
    q: "Do we need to be on Gorgias?",
    a: "We are deepest on Gorgias, which is where most Shopify-native DTC brands live. We also work with Zendesk. If you are on something else, we can discuss whether we are the right fit on a call.",
  },
  {
    q: "What size companies do you work with?",
    a: "DTC ecommerce brands doing roughly $5M-$100M in revenue. Big enough that CX volume is a real operational challenge, but not so big that you need enterprise multi-agent architecture.",
  },
  {
    q: "Are you going to replace our CX team with AI?",
    a: "No. We design the transition so your human agents handle the conversations that actually need a person - complex issues, emotional moments, high-value customers. AI handles the repetitive tier 1 volume. Your team gets better work, not no work.",
  },
  {
    q: "How current is your AI agent expertise?",
    a: "We are practitioners, not theorists. The AI agent landscape - especially Gorgias Automate - has evolved significantly in 2025. We stay current because we are actively building with these tools, not just advising from the sidelines.",
  },
  {
    q: "What does the audit actually deliver?",
    a: "A written AI Readiness Report covering your knowledge base, automation rules, escalation paths, and ticket patterns - all scored against what modern AI agents need to function well. Plus a prioritized roadmap. 2 weeks, $2-3K.",
  },
  {
    q: "What if we already have automation set up?",
    a: "Most brands do. And most of it was built before modern AI agents existed. The audit evaluates what you have, identifies what is helping vs. what is creating conflicts, and shows you what needs to change.",
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
              Everyone can buy Gorgias Automate. The hard part is knowing what
              to automate, where to keep humans, and how to design the handoff
              between them. That is what we do.
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
