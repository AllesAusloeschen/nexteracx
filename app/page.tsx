import ClosingCTA from "./components/ClosingCTA";
import CTAButton from "./components/CTAButton";
import SectionHeading from "./components/SectionHeading";
import ServiceCard from "./components/ServiceCard";
import StatCard from "./components/StatCard";
import { AI_CARE_PRICE, PRIMARY_CTA, SECONDARY_CTA, SPRINT_PRICE } from "./offer";

const pillars = [
  {
    title: "Prevent",
    description:
      "Reach customers before they reach you. Proactive updates on shipping delays, stockouts, and subscription renewals, and root causes fixed with product, marketing, and fulfillment so the same questions stop coming.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
  {
    title: "Automate",
    description:
      "AI answers up to 80% of routine tickets, tested against the hard cases before customers see it, with a clean handoff to your team.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
      </svg>
    ),
  },
  {
    title: "Personalize",
    description:
      "Treat a first-time buyer and a five-year subscriber differently. Routing, offers, and accommodations shaped by who the customer is and what they're worth to you.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
      </svg>
    ),
  },
];

const offers = [
  {
    title: "Free AI Spot Check",
    description:
      "Send me 50 recent conversations. Within a week, you'll see how many your AI actually got right, which contacts you could have prevented, and the three fixes that matter most.",
    tag: "Free. No obligation.",
    cta: SECONDARY_CTA,
  },
  {
    title: "The CX Optimization Sprint",
    description:
      "Four weeks, fixed fee. I find and prevent your avoidable contacts, clean up your help desk, retrain your AI, design the handoff to your team, and set up testing so you know it's working.",
    tag: `${SPRINT_PRICE} fixed`,
    cta: PRIMARY_CTA,
  },
  {
    title: "AI Care",
    description:
      "Monthly. New proactive messages as issues appear, your AI and agents kept in sync as products, policies, and promotions change, and a monthly report on contacts prevented and answers the AI got right.",
    tag: AI_CARE_PRICE,
    cta: PRIMARY_CTA,
  },
];

const steps = [
  {
    title: "Open the black box",
    timing: "Week 1",
    description:
      "Review your setup, your top contact reasons, and a sample of real AI conversations. Find what's broken, outdated, guessing, or preventable.",
  },
  {
    title: "Prevent and fix the foundation",
    timing: "Weeks 1 to 2",
    description:
      "Set up proactive messages for your most preventable contacts, hand root causes to the teams that own them, rewrite the knowledge your AI and agents rely on, and clean up rules and macros.",
  },
  {
    title: "Tune and test",
    timing: "Weeks 2 to 3",
    description:
      "Retrain the AI and test it against the hard cases (the vague questions, the angry customers, the ones where a wrong answer costs you) before customers see it.",
  },
  {
    title: "Hand off and measure",
    timing: "Week 4",
    description:
      "Design the AI-to-human handoff, launch, and give you a simple report on what the AI resolves and what it gets right.",
  },
];

const alternatives = [
  "Software vendors sell the tool, then grade their own homework.",
  "Staffing agencies sell more people.",
  "NextEraCX makes what you already have work, and proves it.",
];

const stats = [
  { value: "40%", label: "Tickets automated" },
  { value: "75% to 99th percentile", label: "CSAT in six months" },
  { value: "40+ hrs to under 10", label: "Resolution time" },
  { value: "10+ years", label: "DTC, CPG, and B2B SaaS support operations" },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy text-white">
        <div className="mx-auto max-w-6xl px-6 lg:px-8 py-24 md:py-32">
          <div className="max-w-3xl">
            <p className="text-teal text-sm font-semibold uppercase tracking-wider mb-4">
              For DTC, CPG, and subscription brands
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight mb-6">
              The best support ticket is{" "}
              <span className="text-teal">the one that never gets sent.</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-400 leading-relaxed mb-8 max-w-2xl">
              NextEraCX helps brands get ahead of their customers: prevent the
              contacts that shouldn&apos;t happen, let AI answer up to 80% of
              the rest with every answer checked, and make each customer feel
              known. Using the tools you already have. No new platform. No
              staffing contract.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <CTAButton href={PRIMARY_CTA.href}>{PRIMARY_CTA.label}</CTAButton>
              <CTAButton href={SECONDARY_CTA.href} variant="outline">
                {SECONDARY_CTA.label}
              </CTAButton>
            </div>
          </div>
        </div>
      </section>

      {/* Prevent. Automate. Personalize. */}
      <section className="bg-gray-50">
        <div className="mx-auto max-w-6xl px-6 lg:px-8 py-20 md:py-24">
          <SectionHeading title="Prevent. Automate. Personalize." />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pillars.map((pillar) => (
              <ServiceCard
                key={pillar.title}
                icon={pillar.icon}
                title={pillar.title}
                description={pillar.description}
              />
            ))}
          </div>
          <p className="mt-10 text-center text-lg font-semibold text-navy">
            We measure contacts per order, not just tickets closed.
          </p>
        </div>
      </section>

      {/* The problem */}
      <section className="bg-white">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 py-20 md:py-24 text-center">
          <SectionHeading label="The problem" title="Your AI is a black box." />
          <div className="space-y-4 text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto">
            <p>
              Most brands turn on an AI agent, watch the deflection rate climb,
              and stop looking. But deflection only tells you the bot answered.
              It can&apos;t tell you whether the answer was right.
            </p>
            <p>
              A customer who got helped and a customer who gave up look
              identical on the dashboard. Both count as &ldquo;resolved.&rdquo;
              That&apos;s the quiet wrong answer, and it&apos;s the most
              expensive number in support because no one ever sees it.
            </p>
          </div>
          <p className="mt-8 text-xl md:text-2xl font-semibold text-navy max-w-2xl mx-auto">
            Your vendor reports how many tickets the AI touched.{" "}
            <span className="text-teal">I report how many it got right.</span>
          </p>
        </div>
      </section>

      {/* The offer */}
      <section className="bg-gray-50">
        <div className="mx-auto max-w-6xl px-6 lg:px-8 py-20 md:py-24">
          <SectionHeading label="The offer" title="Three ways to start" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {offers.map((offer) => (
              <div
                key={offer.title}
                className="flex flex-col rounded-lg border border-gray-200 bg-white p-8 transition-all hover:border-teal/30 hover:shadow-lg"
              >
                <p className="text-xs font-semibold uppercase tracking-wider text-teal mb-2">
                  {offer.tag}
                </p>
                <h3 className="text-xl font-semibold text-navy mb-3">
                  {offer.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6 flex-1">
                  {offer.description}
                </p>
                <CTAButton
                  href={offer.cta.href}
                  variant={offer.cta === SECONDARY_CTA ? "outline" : "primary"}
                >
                  {offer.cta.label}
                </CTAButton>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How the Sprint works */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 lg:px-8 py-20 md:py-24">
          <SectionHeading label="Four weeks" title="How the Sprint works" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <div key={step.title} className="p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-teal/10 text-teal text-lg font-bold mb-4">
                  {i + 1}
                </div>
                <p className="text-xs font-semibold uppercase tracking-wider text-teal mb-1">
                  {step.timing}
                </p>
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

      {/* What your team gets back */}
      <section className="bg-gray-50">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 py-20 md:py-24 text-center">
          <SectionHeading
            label="What your team gets back"
            title="AI takes the repetition. Your people take the relationships."
          />
          <p className="text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto">
            When AI handles the routine questions, your agents don&apos;t
            disappear. They move to the work that keeps customers: reaching out
            before problems land, save conversations with your best
            subscribers, personal check-ins with your top customers, reviews,
            and the problems that need judgment.
          </p>
        </div>
      </section>

      {/* Not another tool. Not a staffing agency. */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 lg:px-8 py-20 md:py-24">
          <SectionHeading
            label="Independent by design"
            title="Not another tool. Not a staffing agency."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {alternatives.map((item, i) => (
              <div
                key={item}
                className={`rounded-xl border p-6 ${
                  i === alternatives.length - 1
                    ? "border-teal/30 bg-teal/10"
                    : "border-gray-200 bg-white"
                }`}
              >
                <p
                  className={`leading-relaxed ${
                    i === alternatives.length - 1
                      ? "font-semibold text-navy"
                      : "text-gray-600"
                  }`}
                >
                  {item}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-10 text-center text-gray-600 leading-relaxed">
            Independent by design. No platform to sell you, no agents to place,
            no commissions.
          </p>
        </div>
      </section>

      {/* Proof strip */}
      <section className="border-y border-gray-200">
        <div className="mx-auto max-w-6xl px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <StatCard key={stat.label} value={stat.value} label={stat.label} />
            ))}
          </div>
          <p className="mt-6 text-center text-xs text-gray-600">
            Results from CX operations I&apos;ve led.
          </p>
        </div>
      </section>

      <ClosingCTA />
    </>
  );
}
