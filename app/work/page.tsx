import type { Metadata } from "next";
import CTAButton from "../components/CTAButton";

export const metadata: Metadata = {
  title: "Selected Work",
  description:
    "Results from in-house CX leadership at Every Man Jack and current client work: LLM evaluation, AI-assisted referral pipelines, lifecycle automation, and subscription SaaS.",
  openGraph: {
    title: "Selected Work | NextEraCX",
    description:
      "Results from in-house leadership and current client work. Client names are kept confidential.",
    url: "https://nexteracx.co/work",
  },
};

const emjWork = [
  "Rebuilt workflows, routing, macros, and self-service in Zendesk and Gorgias, then layered in AI agents and AI routing",
  "Led an in-house team and a six-agent outsourced team, plus seasonal staff at peak",
  "Owned Recharge subscription support, including cancel, pause, and save flows",
  "Built a direct reporting line to the quality control team for product issues, with monthly reviews",
  "Met weekly with marketing to catch customer-facing issues before promotions launched",
  "Retrained our 3PL's packing on-site based on customer feedback",
  "Ran chargeback and fraud review and presented cost-per-ticket reporting to the executive team",
];

const emjResults = [
  "CSAT from 75% to the 99th percentile (Gorgias benchmark) in six months",
  "Full resolution time from 40+ hours to under 10",
  "40% less ticket volume through automation and AI",
  "About 25% fewer repeat tickets",
];

const projects = [
  {
    id: "llm-evaluation",
    title: "LLM Parsing + Evaluation Framework",
    body: [
      "Built AI data-entry parsing for a consumer subscription product, with a custom evaluation battery that tests output quality against real-world cases before anything reaches a customer.",
      "No change ships until it passes a test suite of hard cases written in advance. The suite has blocked changes that looked great in the demo.",
    ],
  },
  {
    id: "referral-pipeline",
    title: "AI-Assisted Referral Partner Pipeline",
    body: [
      "For a multi-state nutrition practice: AI-assisted contact research and briefings, personalized outreach in the clinician's voice, a three-touch follow-up cadence, a shared tracker for leadership, and standardized meeting setup.",
    ],
  },
  {
    id: "lifecycle-automation",
    title: "Lifecycle Automation and Deliverability",
    body: [
      "Quiz-driven segmentation routing four customer personas through tailored email journeys, plus email infrastructure for a clinical brand with wave-based physician outreach and zero spam complaints.",
    ],
  },
  {
    id: "subscription-saas",
    title: "Two-Brand Subscription SaaS",
    body: [
      "Launched and operate a two-brand subscription product end to end - billing, auth, database, and support workflows.",
    ],
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

export default function WorkPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy text-white">
        <div className="mx-auto max-w-6xl px-6 lg:px-8 py-20 md:py-28">
          <div className="max-w-3xl">
            <p className="text-teal text-sm font-semibold uppercase tracking-wider mb-4">
              Work
            </p>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight mb-6">
              Selected work
            </h1>
            <p className="text-lg text-gray-400 leading-relaxed max-w-2xl">
              Results from in-house leadership and current client work. Client
              names are kept confidential.
            </p>
          </div>
        </div>
      </section>

      {/* Every Man Jack */}
      <section className="bg-white">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 py-20 md:py-24">
          <div id="every-man-jack" className="scroll-mt-24">
            <h2 className="text-2xl md:text-3xl font-bold text-navy mb-1">
              Every Man Jack
            </h2>
            <p className="text-teal font-medium mb-6">
              In-house CX operations, 2020 to 2025
            </p>
            <div className="space-y-4 text-gray-600 leading-relaxed mb-8">
              <p>
                <span className="font-semibold text-navy">Context: </span>
                National DTC grooming brand selling direct, on subscription,
                and through Amazon, Walmart, Target, TikTok Shop, and retail.
              </p>
              <p>
                <span className="font-semibold text-navy">Challenge: </span>
                CSAT at 75% and resolution times above 40 hours while the
                company grew 40% year over year across a growing list of
                channels.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-navy mb-4">
                  What I did
                </h3>
                <CheckList items={emjWork} />
              </div>
              <div className="rounded-xl bg-teal/10 border border-teal/20 p-6">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-navy mb-4">
                  Results
                </h3>
                <CheckList items={emjResults} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client and product work */}
      <section className="bg-gray-50">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 py-20 md:py-24">
          <div className="space-y-16">
            {projects.map((project) => (
              <div key={project.id} id={project.id} className="scroll-mt-24">
                <h2 className="text-2xl md:text-3xl font-bold text-navy mb-4">
                  {project.title}
                </h2>
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  {project.body.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy text-white">
        <div className="mx-auto max-w-6xl px-6 lg:px-8 py-20 md:py-24 text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Find out if your CX operation is ready for AI agents.
          </h2>
          <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
            The AI-Ready CX Audit is a fixed-fee, 2-week engagement. You get a
            clear picture of what is ready to automate, what needs human hands,
            and exactly how to design the transition.
          </p>
          <CTAButton href="/contact">Get Your AI-Ready Audit</CTAButton>
        </div>
      </section>
    </>
  );
}
