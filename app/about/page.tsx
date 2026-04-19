import type { Metadata } from "next";
import Image from "next/image";
import SectionHeading from "../components/SectionHeading";
import CTAButton from "../components/CTAButton";

export const metadata: Metadata = {
  title: "About",
  description:
    "Mathias Dorr and Alyssa Provitt - 20+ combined years building CX operations. Now helping DTC brands transition to AI-augmented support.",
  openGraph: {
    title: "About | NextEraCX",
    description:
      "We built CX the old way. Now we help brands cross to what is next.",
    url: "https://nexteracx.co/about",
  },
};

const founders = [
  {
    name: "Mathias Dorr",
    title: "Co-Founder",
    photo: "/mathias-headshot.png",
    bio: [
      <>10+ years building CX operations across DTC ecommerce and enterprise environments. Led the work that sounds boring but makes everything else possible - knowledge base architecture, automation rule design, QA scoring systems, escalation path logic. Drove a 40% reduction in ticket volume through automation while maintaining 99th percentile CSAT.</>,
      <>That operational foundation - the SOPs, the knowledge structures, the escalation logic - turns out to be exactly what AI agents need to perform. An AI agent reading a well-structured knowledge base with clear escalation rules is a different animal than one reading a mess. That realization is what led to NextEraCX.</>,
      <>Now focused on helping DTC brands make the transition from human-only to AI-augmented CX without losing the customer relationships they have spent years building.</>,
    ],
  },
  {
    name: "Alyssa Provitt",
    title: "Co-Founder",
    photo: "/alyssa-headshot.jpg",
    bio: [
      <>10+ years in CX and operations leadership at high-growth DTC brands. Built scalable support workflows, led cross-functional teams, and managed end-to-end operational transformations. Deep expertise in Gorgias, Zendesk, and the knowledge base systems that power modern CX.</>,
      <>Her approach has always been systems-first - build repeatable processes that scale without adding complexity. That same thinking applies directly to AI transition: you do not just turn on an AI agent. You design the system it operates within - what it can access, when it escalates, how you measure its performance.</>,
      <>Based in Houston, TX. Focused on the operational side of AI transition - making sure implementations actually work in production, not just in demos.</>,
    ],
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy text-white">
        <div className="mx-auto max-w-6xl px-6 lg:px-8 py-20 md:py-28">
          <div className="max-w-3xl">
            <p className="text-teal text-sm font-semibold uppercase tracking-wider mb-4">
              About Us
            </p>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight mb-6">
              We built CX the old way. Now we help brands cross to what&apos;s next.
            </h1>
            <p className="text-lg text-gray-400 leading-relaxed max-w-2xl">
              20+ combined years building support operations from scratch -
              SOPs, QA frameworks, knowledge bases, Gorgias configurations,
              offshore teams. That foundation is exactly what AI agents need
              to work. We are the bridge.
            </p>
          </div>
        </div>
      </section>

      {/* Founders */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 lg:px-8 py-20 md:py-24">
          <div className="space-y-24">
            {founders.map((founder, i) => (
              <div
                key={founder.name}
                className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start"
              >
                <div className={`lg:col-span-2 flex justify-center ${i % 2 === 1 ? "lg:order-2" : ""}`}>
                  <div className="w-full max-w-xs aspect-[3/4] rounded-lg overflow-hidden bg-gray-100 border border-gray-200">
                    <Image
                      src={founder.photo}
                      alt={founder.name}
                      width={320}
                      height={427}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                <div className={`lg:col-span-3 space-y-5 text-gray-600 leading-relaxed ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-navy mb-1">
                      {founder.name}
                    </h2>
                    <p className="text-teal font-medium">{founder.title}</p>
                  </div>
                  {founder.bio.map((paragraph, j) => (
                    <p key={j}>{paragraph}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="bg-gray-50">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 py-20 md:py-24 text-center">
          <SectionHeading
            label="Our Story"
            title="From operators to architects."
          />
          <p className="text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto">
            We spent years working side by side, building one of the
            highest-performing CX operations in DTC ecommerce. When we saw AI
            agents start to mature in 2024-2025, we realized two things: first,
            that most brands were going to adopt these tools whether they were
            ready or not. Second, that the operational work we had spent a
            decade doing - knowledge bases, SOPs, escalation logic, QA
            frameworks - was the exact foundation that determined whether AI
            agents succeed or fail. NextEraCX exists to help brands build that
            foundation and make the transition without breaking what is already
            working.
          </p>
        </div>
      </section>

      {/* Philosophy */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 lg:px-8 py-20 md:py-24">
          <SectionHeading
            label="Approach"
            title="How we think about the transition."
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
                rules they follow, and the escalation logic they trigger. We
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
                implementations break. We design that handoff with specific
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
                resolution quality. We build the QA frameworks that tell you
                whether the transition is working.
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
