import Link from "next/link";
import ClosingCTA from "./components/ClosingCTA";
import CTAButton from "./components/CTAButton";
import SectionHeading from "./components/SectionHeading";
import ShiftRows from "./components/ShiftRows";
import { CTA } from "./cta";

const services = [
  {
    id: "platform",
    title: "Platform",
    description: "Help desk selection, setup, migrations, and integrations.",
  },
  {
    id: "process",
    title: "Process",
    description: "Playbooks, SOPs, macros, knowledge bases, and QA.",
  },
  {
    id: "ai-automation",
    title: "AI & Automation",
    description:
      "AI that answers routine tickets, with a smooth handoff to people.",
  },
  {
    id: "proactive-cx",
    title: "Proactive CX",
    description:
      "Get ahead of delays, renewals, and the questions customers shouldn't have to ask.",
  },
  {
    id: "personalization-retention",
    title: "Personalization & Retention",
    description:
      "Save flows, VIP routing, and service shaped by customer history.",
  },
  {
    id: "leadership-insights",
    title: "Leadership & Insights",
    description:
      "Fractional head of CX, KPI dashboards, and Voice of Customer reporting.",
  },
];

const reasons = [
  {
    title: "Senior and hands-on",
    description: "The person you talk to is the person doing the work.",
  },
  {
    title: "Built from the ground up",
    description:
      "More than 10 years building CX operations for DTC, CPG, subscription, and B2B SaaS companies. We know what breaks at scale and what holds.",
  },
  {
    title: "Future-focused",
    description:
      "We build with AI every day, and we test it before your customers ever see it.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy text-white">
        <div className="mx-auto max-w-6xl px-6 lg:px-8 py-24 md:py-32">
          <div className="max-w-3xl">
            <p className="text-teal text-sm font-semibold uppercase tracking-wider mb-4">
              For DTC, CPG, subscription, and SaaS companies
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight mb-6">
              The best support ticket is{" "}
              <span className="text-teal">the one that never gets sent.</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-400 leading-relaxed mb-8 max-w-2xl">
              Customer experience is moving from reactive to proactive, from
              manual to automated, from generic to personal. NextEraCX helps
              companies make that shift now, with the right platform, clean
              processes, AI that answers up to 80% of tickets, and service that
              gets ahead of the customer.
            </p>
            <CTAButton href={CTA.href}>{CTA.label}</CTAButton>
          </div>
        </div>
      </section>

      {/* Where CX is going */}
      <section className="bg-gray-50">
        <div className="mx-auto max-w-6xl px-6 lg:px-8 py-20 md:py-24">
          <SectionHeading
            label="Where CX is going"
            title="The future of CX is already here."
          />
          <ShiftRows />
          <p className="mt-10 text-center">
            <Link
              href="/services"
              className="font-semibold text-teal hover:text-teal-dark transition-colors"
            >
              See how we get you there &rarr;
            </Link>
          </p>
        </div>
      </section>

      {/* What we do */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 lg:px-8 py-20 md:py-24">
          <SectionHeading
            label="What we do"
            title="Everything it takes to get there."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Link
                key={service.id}
                href={`/services#${service.id}`}
                className="group rounded-xl border border-gray-200 p-6 transition-all hover:border-teal/30 hover:shadow-lg"
              >
                <h3 className="text-lg font-semibold text-navy group-hover:text-teal transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mt-3">
                  {service.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why NextEraCX */}
      <section className="bg-gray-50">
        <div className="mx-auto max-w-6xl px-6 lg:px-8 py-20 md:py-24">
          <SectionHeading title="Why NextEraCX" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reasons.map((reason) => (
              <div
                key={reason.title}
                className="rounded-xl border border-gray-200 bg-white p-6"
              >
                <h3 className="text-lg font-semibold text-navy mb-2">
                  {reason.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What your team gets back */}
      <section className="bg-white">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 py-20 md:py-24 text-center">
          <SectionHeading
            label="What your team gets back"
            title="AI takes the repetition. Your people take the relationships."
          />
          <p className="text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto">
            When AI handles the routine questions, your agents don&apos;t
            disappear. They move to the work that keeps customers: reaching out
            before problems land, retention calls with your best
            subscribers, personal check-ins with your top customers, reviews,
            and the problems that need judgment.
          </p>
        </div>
      </section>

      <ClosingCTA />
    </>
  );
}
