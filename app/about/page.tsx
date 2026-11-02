import type { Metadata } from "next";
import Image from "next/image";
import SectionHeading from "../components/SectionHeading";
import CTAButton from "../components/CTAButton";

export const metadata: Metadata = {
  title: "About",
  description:
    "Mathias Dorr, Principal at NextEraCX. 10+ years in CX and ecommerce operations, including five years running CX at Every Man Jack. Gorgias Certified Admin, MBA.",
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
    <>I&apos;ve spent 10+ years in CX and ecommerce operations, and I&apos;ve built CX functions from the ground up. I know what breaks at scale and what holds.</>,
    <>At Every Man Jack, a national DTC grooming brand, I ran CX operations for five years through 40% year-over-year growth. I took CSAT from 75% to the 99th percentile of Gorgias&apos;s benchmark in six months, cut full resolution time from 40+ hours to under 10, and reduced ticket volume 40% through automation and AI. I led an in-house team alongside a six-agent outsourced team, owned subscription retention flows and marketplace support across Amazon, Walmart, Target, and TikTok Shop, and presented CX reporting to the executive team every month.</>,
    <>Some of the work I&apos;m proudest of happened outside the inbox: a direct reporting line from support to our quality control team, weekly sessions with marketing to catch issues before promotions launched, and a trip to our 3PL to retrain how they packed our products based on what customers were telling us.</>,
    <>Before that, I spent four years at B-Stock supporting buyers and sellers on a B2B marketplace serving Fortune 500 retailers.</>,
    <>Today I build with AI hands-on: production LLM systems with evaluation frameworks that measure quality before customers ever see an answer.</>,
  ],
  credentials: [
    "MBA, Healthcare Administration, Gonzaga University",
    "B.A., Business Management, magna cum laude, Lewis-Clark State College",
    "Gorgias Certified Admin",
    "Zendesk Customer Service Professional",
    "Google Analytics Certification",
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
              <div className="pt-2">
                <h3 className="text-base font-semibold text-navy mb-2">
                  Credentials
                </h3>
                <ul className="space-y-2">
                  {principal.credentials.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="text-teal mt-0.5 flex-shrink-0">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="pt-2">
                <h3 className="text-base font-semibold text-navy mb-2">
                  Off the clock
                </h3>
                <p>
                  Recharging looks like: travel (mostly Europe and the
                  Caribbean, and also Costa Rica has my heart), chess,
                  pickleball and tennis, lifting heavy things on a schedule,
                  and an ongoing search for the perfect potato (French
                  Bulldog).
                </p>
              </div>
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
            <div className="text-center p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-teal/10 text-teal mx-auto mb-4">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-navy mb-2">
                Close the loop
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Support sees problems first. Route what customers tell you to
                the teams that can fix it, with owners and follow-up.
              </p>
            </div>
          </div>
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
