import Image from "next/image";
import Link from "next/link";
import CTAButton from "./components/CTAButton";
import SectionHeading from "./components/SectionHeading";
import ServiceCard from "./components/ServiceCard";
import StatCard from "./components/StatCard";

const stats = [
  { value: "75% to 99th percentile", label: "CSAT in six months (Gorgias benchmark)" },
  { value: "40+ hrs to under 10", label: "Full resolution time" },
  { value: "40%", label: "Ticket volume reduced through automation" },
  { value: "10+ years", label: "CX and ecommerce operations" },
];

const coverage = [
  {
    title: "Helpdesk & AI Automation",
    description:
      "Gorgias and Zendesk configuration, AI agents, routing, macros, and the handoff from AI to a human.",
  },
  {
    title: "Quality & Knowledge",
    description:
      "QA scorecards, help center and SOPs written so both agents and AI read them correctly.",
  },
  {
    title: "Subscription & Retention",
    description:
      "Cancel, pause, and save flows that keep customers without trapping them.",
  },
  {
    title: "Marketplace & Omnichannel",
    description:
      "Consistent support across your site, Amazon, Walmart, Target, and TikTok Shop.",
  },
  {
    title: "Voice of Customer",
    description:
      "Contact drivers turned into fixes, with owners in product, marketing, and fulfillment.",
  },
  {
    title: "Revenue Protection",
    description:
      "Chargeback and fraud review processes, returns, and replacement policies.",
  },
  {
    title: "Reporting & Cost",
    description:
      "Cost per ticket, staffing models, and executive reporting that drives decisions.",
  },
  {
    title: "Vendor & Outsourcing Oversight",
    description:
      "SLAs, QA standards, and performance management for the partners you already use.",
  },
];

const selectedWork = [
  {
    href: "/work#every-man-jack",
    title: "Every Man Jack",
    meta: "In-house, 2020 to 2025",
    description:
      "CSAT from 75% to the 99th percentile in six months, resolution time from 40+ hours to under 10, through 40% year-over-year growth.",
  },
  {
    href: "/work#llm-evaluation",
    title: "LLM Parsing + Evaluation Framework",
    description:
      "AI features that ship only after passing a test suite of hard cases written in advance.",
  },
  {
    href: "/work#referral-pipeline",
    title: "AI-Assisted Referral Partner Pipeline",
    description:
      "Research, personalized outreach, a three-touch cadence, and a shared leadership tracker for a multi-state nutrition practice.",
  },
  {
    href: "/work#subscription-saas",
    title: "Two-Brand Subscription SaaS",
    description:
      "Launched and operated end to end, from Stripe billing to customer support workflows.",
  },
];

const audience = [
  "DTC and subscription brands doing roughly $5M to $100M",
  "Health, wellness, supplement, and other regulated consumer products",
  "Teams on Gorgias or Zendesk, in-house, outsourced, or both",
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy text-white">
        <div className="mx-auto max-w-6xl px-6 lg:px-8 py-24 md:py-32">
          <div className="max-w-3xl">
            <p className="text-teal text-sm font-semibold uppercase tracking-wider mb-4">
              CX operations for DTC and subscription brands
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight mb-6">
              Customer experience operations{" "}
              <span className="text-teal">that hold up at scale.</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-400 leading-relaxed mb-8 max-w-2xl">
              NextEraCX audits, builds, and runs the systems behind great
              support: helpdesk and AI automation, quality programs,
              subscription retention, and the reporting leadership actually
              uses. Senior, hands-on, and independent.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <CTAButton href="/contact">Get Your AI-Ready Audit</CTAButton>
              <CTAButton href="/services" variant="outline">
                See Services
              </CTAButton>
            </div>
          </div>
        </div>
      </section>

      {/* Results / Stats */}
      <section className="border-b border-gray-200">
        <div className="mx-auto max-w-6xl px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <StatCard key={stat.label} value={stat.value} label={stat.label} />
            ))}
          </div>
          <p className="mt-6 text-center text-xs text-gray-600">
            Results from in-house CX leadership at Every Man Jack, a national
            DTC grooming brand.
          </p>
        </div>
      </section>

      {/* What we cover */}
      <section className="bg-gray-50">
        <div className="mx-auto max-w-6xl px-6 lg:px-8 py-20 md:py-24">
          <SectionHeading
            label="What we cover"
            title="The whole CX operation, not just the bot."
            description="AI is one layer. The results come from the operation underneath it."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {coverage.map((area) => (
              <div
                key={area.title}
                className="rounded-xl border border-gray-200 bg-white p-6"
              >
                <h3 className="text-base font-semibold text-navy mb-2">
                  {area.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {area.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Independent by design */}
      <section className="bg-white">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 py-20 md:py-24 text-center">
          <SectionHeading
            label="Independent by design"
            title="No staffing contract. No software resale."
          />
          <p className="text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto">
            NextEraCX doesn&apos;t sell agents, seats, or software. Every
            recommendation is about what your operation needs, not what fills a
            contract. If you already work with an outsourcing partner, I hold
            them to clear SLAs and QA standards. If you&apos;re deciding
            whether to outsource at all, you get the honest math.
          </p>
        </div>
      </section>

      {/* Why NextEraCX */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 lg:px-8 py-20 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading
                label="Why NextEraCX"
                title="The bridge between old-school CX and what&apos;s next."
                centered={false}
              />
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Every DTC brand on Shopify is about to face the same decision:
                  keep scaling support the old way - more agents, more cost,
                  same problems - or figure out how to deploy AI agents without
                  alienating your best customers. Most AI vendors will sell you
                  tools. Nobody is designing the transition.
                </p>
                <p>
                  I have spent 10+ years building CX operations the
                  traditional way - SOPs, QA frameworks, escalation paths,
                  Gorgias configurations, knowledge bases. That foundation is
                  exactly what AI agents need to work. An AI agent is only as
                  good as the knowledge base it reads and the escalation logic
                  it follows. I know how to build both.
                </p>
                <p>
                  The real skill is not deploying the AI. It is designing the
                  handoff - the exact moment a conversation needs a human. Get
                  that wrong, and your automation becomes a customer churn
                  machine. Get it right, and your team handles the moments that
                  matter while AI handles the rest.
                </p>
                <p>
                  I&apos;ve built CX functions from the ground up. I know what
                  breaks at scale and what holds, and that pattern recognition
                  is what I bring to every engagement.
                </p>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="text-center">
                <div className="w-48 h-60 rounded-lg overflow-hidden border border-gray-200 mb-3">
                  <Image src="/mathias-headshot.png" alt="Mathias Dorr" width={192} height={240} className="w-full h-full object-cover" />
                </div>
                <p className="text-sm font-semibold text-navy">Mathias Dorr</p>
                <p className="text-xs text-gray-600">Principal</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="bg-gray-50">
        <div className="mx-auto max-w-6xl px-6 lg:px-8 py-20 md:py-24">
          <SectionHeading
            label="Services"
            title="How I help brands make the transition."
            description="Every engagement starts with understanding where you are today and what needs to be true before AI agents can handle your tier 1 volume."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ServiceCard
              icon={
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15a2.25 2.25 0 012.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V19.5a2.25 2.25 0 002.25 2.25h.75" />
                </svg>
              }
              title="AI-Ready CX Audit"
              description="A 2-week diagnostic of your CX operation - knowledge base, automation rules, escalation paths, ticket patterns - scored against what modern AI agents need to perform. Fixed fee. Clear deliverables."
            />
            <ServiceCard
              icon={
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.1-5.1m0 0L11.42 4.97m-5.1 5.1H21M3 3v18" />
                </svg>
              }
              title="Implementation & Build-Out"
              description="Hands-on buildout: knowledge base restructuring, automation rule design, handoff logic between AI and human agents, QA frameworks. Gorgias-native."
            />
            <ServiceCard
              icon={
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
                </svg>
              }
              title="Ongoing Advisory"
              description="Monthly retainer for brands mid-transition. Continuous optimization of AI agent performance, escalation tuning, and keeping your team aligned as the operation evolves."
            />
          </div>
        </div>
      </section>

      {/* Selected work */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 lg:px-8 py-20 md:py-24">
          <SectionHeading label="Selected work" title="Not just advising. Building." />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {selectedWork.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group rounded-xl border border-gray-200 p-6 transition-all hover:border-teal/30 hover:shadow-lg"
              >
                <h3 className="text-lg font-semibold text-navy group-hover:text-teal transition-colors">
                  {item.title}
                </h3>
                {item.meta && (
                  <p className="text-xs font-semibold uppercase tracking-wider text-teal mt-1">
                    {item.meta}
                  </p>
                )}
                <p className="text-gray-600 text-sm leading-relaxed mt-3">
                  {item.description}
                </p>
              </Link>
            ))}
          </div>
          <div className="mt-10 text-center">
            <CTAButton href="/work" variant="outline">
              See all work
            </CTAButton>
          </div>
        </div>
      </section>

      {/* Who it's for */}
      <section className="bg-gray-50">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 py-20 md:py-24">
          <SectionHeading title="Who it's for." />
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

      {/* CTA Section */}
      <section className="bg-navy text-white">
        <div className="mx-auto max-w-6xl px-6 lg:px-8 py-20 md:py-24 text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Find out if your CX operation is ready for AI agents.
          </h2>
          <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
            The AI-Ready CX Audit is a fixed-fee, 2-week engagement. You get a
            clear picture of what is ready to automate, what needs human hands,
            and exactly how to design the transition. No ongoing commitment
            required.
          </p>
          <CTAButton href="/contact">Get Your AI-Ready Audit</CTAButton>
        </div>
      </section>
    </>
  );
}
