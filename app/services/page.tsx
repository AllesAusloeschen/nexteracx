import type { Metadata } from "next";
import ClosingCTA from "../components/ClosingCTA";
import CTAButton from "../components/CTAButton";
import SectionHeading from "../components/SectionHeading";
import {
  AI_CARE_PRICE,
  GUARANTEE_ON,
  PRIMARY_CTA,
  SECONDARY_CTA,
  SPRINT_PRICE,
} from "../offer";

export const metadata: Metadata = {
  title: "Services",
  description:
    "A free AI Spot Check, the four-week CX Optimization Sprint, and monthly AI Care. Prevent avoidable contacts, let AI answer up to 80% of the rest, and prove the answers are right. On the tools you already have.",
  openGraph: {
    title: "Services | NextEraCX",
    description:
      "Prevent. Automate. Personalize. Three ways to work together, from a free look under the hood to ongoing care.",
    url: "https://nexteracx.co/services",
  },
};

const spotCheckSteps = [
  "You share 50 recent conversations (an export or read-only access)",
  "I grade each AI answer (right, wrong, or guessing) and flag every contact that could have been prevented",
  "You get a short report within a week: your real accuracy, your most preventable contact reasons, and the top three fixes",
];

const sprintIncludes = [
  "Help desk review: rules, macros, routing, views, and tags",
  "Contact-reason analysis: what customers ask, what can be prevented, and what can be automated",
  "Proactive messages for your most preventable contacts (shipping delays, stockouts, subscription renewals), built in the email, SMS, and help desk tools you already use",
  "Root-cause handoffs to product, marketing, and fulfillment, with owners",
  "Personalized handling: routing and accommodations based on order history and customer value, and a priority lane for your best customers",
  "Knowledge rewrite so your AI and your agents work from the same answers",
  "AI agent configuration and tuning on your existing platform",
  "Handoff design: when the AI steps aside, and what your agent sees when it does",
  "A test suite of hard cases your AI must pass before launch",
  "Subscription flows: AI makes the first save offer, a person handles the rest",
  "Launch support and a results report: contacts per order, automation rate, and accuracy",
];

const aiCareIncludes = [
  "Weekly review of AI conversations, with fixes before they become patterns",
  "A monthly contact-driver review, with new proactive messages for anything trending up",
  "Knowledge kept in sync when prices, shipping, products, or policies change",
  "New automation as your contact reasons shift",
  "Promotion and peak-season readiness",
  "A monthly report: contacts prevented, what the AI resolved, what it got right, and what's next",
];

const notIncluded = [
  "Supply agents or staffing",
  "Sell software or take vendor commissions",
  "Lock you into long contracts. AI Care is month to month.",
];

const faqs = [
  {
    q: "What does “proactive” look like in practice?",
    a: "A customer whose order is delayed hears from you before they wonder where it is. A subscriber gets a heads-up before a renewal ships. A product question that keeps coming up gets answered on the product page and in the post-purchase email. Each one is a ticket that never arrives.",
  },
  {
    q: "What does “personalized” mean here?",
    a: "Your best customers shouldn't wait in the same line as everyone else. Routing, save offers, and make-goods are shaped by order history and customer value, so a loyal subscriber gets treated like one.",
  },
  {
    q: "Do we need to switch help desks or AI tools?",
    a: "No. Most brands already have what they need. The tools have nearly the same features. The difference is how they're set up.",
  },
  {
    q: "Is “up to 80%” realistic?",
    a: "It depends on your ticket mix. Order status, shipping, returns, and subscription changes are highly automatable. Product issues and upset customers need people. The Spot Check tells you your real ceiling before you spend anything.",
  },
  {
    q: "What if we don't want AI yet?",
    a: "Then the Sprint focuses on cleaning up your help desk and knowledge so your team is faster, and you're ready whenever you choose.",
  },
  {
    q: "Will AI replace our team?",
    a: "No. It takes the repetition so your people can focus on retention, proactive outreach, and the conversations that need judgment.",
  },
  {
    q: "What platforms do you work with?",
    a: "Gorgias and Zendesk most deeply, alongside Shopify, Recharge, Klaviyo, and marketplace channels. Others we can discuss on a call.",
  },
  {
    q: "Can you work with our outsourcing partner?",
    a: "Yes. Whoever answers your tickets, in-house or outsourced, works from the same improved knowledge and handoff rules.",
  },
  {
    q: "Do you provide support agents?",
    a: "No. NextEraCX is independent: no staffing, no software resale.",
  },
  {
    q: "What does the Spot Check need from us?",
    a: "50 recent AI-handled conversations, as an export or read-only access. Nothing else.",
  },
];

function CheckList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3 text-sm text-gray-600">
          <span className="text-teal mt-0.5 flex-shrink-0">✓</span>
          {item}
        </li>
      ))}
    </ul>
  );
}

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
              Prevent. Automate. Personalize.
            </h1>
            <p className="text-lg text-gray-400 leading-relaxed max-w-2xl">
              Three ways to work together, from a free look under the hood to
              ongoing care. All on the tools you already have.
            </p>
          </div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="bg-white">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 py-20 md:py-24">
          <div className="space-y-20">
            {/* Free AI Spot Check */}
            <div id="spot-check-offer" className="scroll-mt-24">
              <h2 className="text-2xl md:text-3xl font-bold text-navy mb-4">
                Free AI Spot Check
              </h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                A no-cost look at how your AI is actually performing, and how
                many of your contacts never needed to happen.
              </p>
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-navy mb-4">
                  How it works
                </h3>
                <CheckList items={spotCheckSteps} />
              </div>
              <p className="mt-6 text-gray-600 leading-relaxed">
                <span className="font-semibold text-navy">Who it&apos;s for:</span>{" "}
                Any brand already running an AI agent on Gorgias, Zendesk, or a
                similar help desk.
              </p>
              <div className="mt-6">
                <CTAButton href={SECONDARY_CTA.href}>{SECONDARY_CTA.label}</CTAButton>
              </div>
            </div>

            {/* The CX Optimization Sprint */}
            <div id="sprint" className="scroll-mt-24">
              <h2 className="text-2xl md:text-3xl font-bold text-navy mb-4">
                The CX Optimization Sprint
              </h2>
              <p className="text-lg font-semibold text-teal mb-3">
                {SPRINT_PRICE} fixed. Four weeks.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Fewer contacts in the first place, up to 80% of the rest
                answered by AI, a clean handoff to your team, and proof the
                answers are right.
              </p>
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-navy mb-4">
                  What&apos;s included
                </h3>
                <CheckList items={sprintIncludes} />
              </div>
              <div className="mt-6 rounded-xl bg-teal/10 border border-teal/20 p-6 text-center">
                <p className="text-sm font-semibold text-navy">
                  What you don&apos;t need: a new help desk, a new AI vendor, or
                  more headcount.
                </p>
              </div>

              {GUARANTEE_ON && (
                <div className="mt-6 rounded-xl border-2 border-teal p-6">
                  <h3 className="text-lg font-semibold text-navy mb-2">
                    The Sprint guarantee
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    If your automation rate hasn&apos;t improved 30 days after
                    launch, I keep working at no charge until it does.
                  </p>
                </div>
              )}

              <div className="mt-6">
                <CTAButton href={PRIMARY_CTA.href}>{PRIMARY_CTA.label}</CTAButton>
              </div>
            </div>

            {/* AI Care */}
            <div id="ai-care" className="scroll-mt-24">
              <h2 className="text-2xl md:text-3xl font-bold text-navy mb-4">
                AI Care
              </h2>
              <p className="text-lg font-semibold text-teal mb-8">
                {AI_CARE_PRICE}
              </p>
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-navy mb-4">
                  What&apos;s included
                </h3>
                <CheckList items={aiCareIncludes} />
              </div>
              <div className="mt-6">
                <CTAButton href={PRIMARY_CTA.href}>{PRIMARY_CTA.label}</CTAButton>
              </div>
            </div>
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
                <li key={item} className="flex items-start gap-3 text-gray-600">
                  <span className="text-gray-400 mt-0.5 flex-shrink-0">✕</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
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
