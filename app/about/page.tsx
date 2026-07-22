import type { Metadata } from "next";
import Image from "next/image";
import SectionHeading from "../components/SectionHeading";
import CTAButton from "../components/CTAButton";

export const metadata: Metadata = {
  title: "About",
  description:
    "Mathias Dorr, Principal - 10+ years across CX and ecommerce operations. Helping DTC brands transition to AI-augmented support.",
  openGraph: {
    title: "About | NextEraCX",
    description:
      "I built CX the old way. Now I help brands cross to what is next.",
    url: "https://nexteracx.co/about",
  },
};

const principal = {
  name: "Mathias Dorr",
  title: "Principal",
  photo: "/mathias-headshot.png",
  bio: [
    <>10+ years across CX and ecommerce operations, from DTC brands to enterprise marketplaces. Led the work that sounds boring but makes everything else possible - knowledge base architecture, automation rule design, QA scoring systems, escalation path logic. Drove a 40% reduction in ticket volume through automation while maintaining 99th percentile CSAT.</>,
    <>That operational foundation - the SOPs, the knowledge structures, the escalation logic - turns out to be exactly what AI agents need to perform. An AI agent reading a well-structured knowledge base with clear escalation rules is a different animal than one reading a mess. That realization is what led to NextEraCX. These days that work is hands-on with the AI itself: shipping production LLM-powered systems, including a custom evaluation framework that measures output quality before customers ever see it.</>,
    <>Now focused on helping DTC brands make the transition from human-only to AI-augmented CX without losing the customer relationships they have spent years building.</>,
  ],
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy text-white">
        <div className="mx-auto max-w-6xl px-6 lg:px-8 py-20 md:py-28">
          <div className="max-w-3xl">
            <p className="text-teal text-sm font-semibold uppercase tracking-wider mb-4">
              About
            </p>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight mb-6">
              I built CX the old way. Now I help brands cross to what&apos;s next.
            </h1>
            <p className="text-lg text-gray-400 leading-relaxed max-w-2xl">
              10+ years building support operations from scratch - SOPs, QA
              frameworks, knowledge bases, Gorgias configurations, seasonal
              teams. That foundation is exactly what AI agents need to work.
              I am the bridge.
            </p>
          </div>
        </div>
      </section>

      {/* Principal */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 lg:px-8 py-20 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
            <div className="lg:col-span-2 flex justify-center">
              <div className="w-full max-w-xs aspect-[3/4] rounded-lg overflow-hidden bg-gray-100 border border-gray-200">
                <Image
                  src={principal.photo}
                  alt={principal.name}
                  width={320}
                  height={427}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="lg:col-span-3 space-y-5 text-gray-600 leading-relaxed">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-navy mb-1">
                  {principal.name}
                </h2>
                <p className="text-teal font-medium">{principal.title}</p>
              </div>
              {principal.bio.map((paragraph, j) => (
                <p key={j}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* The Story */}
      <section className="bg-gray-50">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 py-20 md:py-24 text-center">
          <SectionHeading
            label="The Story"
            title="From operator to architect."
          />
          <p className="text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto">
            I spent years building CX operations the traditional way -
            knowledge base architecture, escalation logic, QA frameworks, the
            unglamorous systems that make support work at scale. When AI
            agents started to mature, I realized that work was exactly the
            foundation they need: an AI agent is only as good as the knowledge
            it reads and the rules it follows. NextEraCX is that realization
            turned into a practice. I help brands build the foundation and
            make the transition without breaking what is already working.
          </p>
        </div>
      </section>

      {/* Philosophy */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 lg:px-8 py-20 md:py-24">
          <SectionHeading
            label="Approach"
            title="How I think about the transition."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-teal/10 text-teal mx-auto mb-4">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-navy mb-2">
                Foundations first
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                AI agents are only as good as the knowledge base they read, the
                rules they follow, and the escalation logic they trigger. I
                build that foundation before anything gets turned on.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-teal/10 text-teal mx-auto mb-4">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-navy mb-2">
                Design the handoff
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                The moment a conversation shifts from AI to human is where most
                implementations break. I design that handoff with specific
                triggers, sentiment awareness, and clear routing.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-teal/10 text-teal mx-auto mb-4">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-navy mb-2">
                Measure what matters
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                AI agent accuracy, escalation rates, CSAT during transition,
                resolution quality. I build the QA frameworks that tell you
                whether the transition is working.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Off the clock */}
      <section className="bg-gray-50">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 py-20 md:py-24 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-navy mb-6">
            Off the clock
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto">
            Recharging looks like: travel (mostly Europe and the Caribbean,
            and also Costa Rica has my heart), chess, pickleball and tennis,
            lifting heavy things on a schedule, and an ongoing search for the
            perfect potato (French Bulldog).
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy text-white">
        <div className="mx-auto max-w-6xl px-6 lg:px-8 py-20 md:py-24 text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Ready to see what the transition looks like for your brand?
          </h2>
          <p className="text-gray-400 text-lg mb-8 max-w-xl mx-auto">
            Start with the AI-Ready CX Audit. Two weeks, fixed fee, clear
            deliverables.
          </p>
          <CTAButton href="/contact">Get Your AI-Ready Audit</CTAButton>
        </div>
      </section>
    </>
  );
}
