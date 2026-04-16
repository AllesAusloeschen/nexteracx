import type { Metadata } from "next";
import SectionHeading from "../components/SectionHeading";
import CTAButton from "../components/CTAButton";

export const metadata: Metadata = {
  title: "Services",
  description:
    "CX operations consulting services: audits, Gorgias/Zendesk optimization, automation, QA frameworks, and team scaling for DTC and SaaS brands.",
  openGraph: {
    title: "Services | NextEraCX",
    description:
      "CX operations consulting services: audits, systems optimization, and team scaling.",
    url: "https://nexteracx.co/services",
  },
};

const services = [
  {
    id: "audit",
    title: "CX Operations Audit",
    description:
      "A thorough diagnostic of your current support operations, technology stack, and team workflows. You get a clear picture of what is working, what is not, and exactly where the leverage points are.",
    deliverables: [
      "Full review of current CX tech stack and tool configuration",
      "Workflow mapping and bottleneck identification",
      "Ticket categorization and volume analysis",
      "Team structure and capacity assessment",
      "Actionable recommendations report with prioritized roadmap",
    ],
  },
  {
    id: "optimization",
    title: "Systems Optimization",
    description:
      "Hands-on implementation to get maximum value from your CX platform. Whether you are on Gorgias, Zendesk, or evaluating a migration, I configure and optimize your systems for efficiency and scale.",
    deliverables: [
      "Gorgias or Zendesk setup, configuration, and migration",
      "Automation workflows (macros, rules, triggers)",
      "AI agent implementation and training",
      "Knowledge base architecture and content strategy",
      "Reporting dashboards and KPI tracking",
      "Integration with ecommerce and internal systems",
    ],
  },
  {
    id: "scaling",
    title: "Team & Process Scaling",
    description:
      "Build the people systems and processes that let your CX operation grow without proportionally growing headcount. From hiring to QA to international expansion.",
    deliverables: [
      "Hiring frameworks and interview processes for CX roles",
      "QA scoring systems and agent performance management",
      "Offshore and nearshore team sourcing and management",
      "Escalation path design and tier structuring",
      "International and cross-border support operations",
      "Training programs and onboarding documentation",
    ],
  },
];

const faqs = [
  {
    q: "What types of companies do you work with?",
    a: "Primarily DTC ecommerce brands and SaaS companies doing $5M-$100M+ in revenue. I work with companies that have outgrown their initial CX setup and need to professionalize operations.",
  },
  {
    q: "How long does a typical engagement last?",
    a: "An audit is typically 2-3 weeks. Implementation projects range from 4-12 weeks depending on scope. I also offer ongoing advisory retainers for companies that want sustained strategic support.",
  },
  {
    q: "Do you replace our existing team?",
    a: "No. I work alongside your existing team to elevate their capabilities and build better systems. The goal is to make your team more effective, not to replace them.",
  },
  {
    q: "What is your pricing model?",
    a: "Engagements are scoped and priced on a project basis. I provide a detailed proposal after an initial strategy call so you know exactly what you are getting and what it costs.",
  },
  {
    q: "Can you help us choose between Gorgias and Zendesk?",
    a: "Yes. I have deep experience with both platforms and can make a recommendation based on your specific needs, volume, budget, and growth trajectory.",
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
              CX operations consulting, end to end.
            </h1>
            <p className="text-lg text-gray-400 leading-relaxed max-w-2xl">
              From diagnostic audits to hands-on system optimization to scaling
              your team  - I cover the full lifecycle of CX operations
              improvement.
            </p>
          </div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 lg:px-8 py-20 md:py-24">
          <div className="space-y-20">
            {services.map((service, i) => (
              <div
                key={service.id}
                id={service.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-start ${
                  i > 0 ? "pt-20 border-t border-gray-200" : ""
                }`}
              >
                <div>
                  <span className="text-teal text-sm font-semibold uppercase tracking-wider">
                    0{i + 1}
                  </span>
                  <h2 className="text-3xl font-bold text-navy tracking-tight mt-2 mb-4">
                    {service.title}
                  </h2>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    {service.description}
                  </p>
                </div>
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-navy mb-4">
                    What you get
                  </h3>
                  <ul className="space-y-3">
                    {service.deliverables.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <svg
                          className="h-5 w-5 text-teal mt-0.5 shrink-0"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={2}
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4.5 12.75l6 6 9-13.5"
                          />
                        </svg>
                        <span className="text-gray-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing note */}
      <section className="bg-gray-50">
        <div className="mx-auto max-w-6xl px-6 lg:px-8 py-16 text-center">
          <h2 className="text-2xl font-bold text-navy mb-3">
            Pricing tailored to your needs.
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto mb-6">
            Every engagement is scoped based on your specific challenges, team
            size, and goals. Book a call to discuss your situation and receive a
            detailed proposal.
          </p>
          <CTAButton href="/contact">Request a Quote</CTAButton>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white">
        <div className="mx-auto max-w-3xl px-6 lg:px-8 py-20 md:py-24">
          <SectionHeading
            label="FAQ"
            title="Common questions."
          />
          <div className="space-y-8">
            {faqs.map((faq) => (
              <div key={faq.q}>
                <h3 className="text-lg font-semibold text-navy mb-2">
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
            Let&apos;s talk about your CX operations.
          </h2>
          <p className="text-gray-400 text-lg mb-8 max-w-xl mx-auto">
            Book a free strategy call. No pitch decks, no pressure  - just
            an honest conversation about where your CX ops stand and where they
            could go.
          </p>
          <CTAButton href="/contact">Book a Strategy Call</CTAButton>
        </div>
      </section>
    </>
  );
}
