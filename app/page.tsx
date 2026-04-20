import Image from "next/image";
import CTAButton from "./components/CTAButton";
import SectionHeading from "./components/SectionHeading";
import ServiceCard from "./components/ServiceCard";
import StatCard from "./components/StatCard";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy text-white">
        <div className="mx-auto max-w-6xl px-6 lg:px-8 py-24 md:py-32">
          <div className="max-w-3xl">
            <p className="text-teal text-sm font-semibold uppercase tracking-wider mb-4">
              AI-Ready CX Operations
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight mb-6">
              Your competitors&apos; customers{" "}
              <span className="text-teal">aren&apos;t waiting on hold.</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-400 leading-relaxed mb-8 max-w-2xl">
              AI agents are already handling tier 1 support at the brands you
              compete with. The question is not whether to deploy them - it is
              whether your CX operation is ready for the transition. We help
              DTC brands move from human-only to AI-augmented support without
              losing the customer relationships you have built.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <CTAButton href="/contact">Get Your AI-Ready Audit</CTAButton>
              <CTAButton href="/services" variant="outline">
                See How It Works
              </CTAButton>
            </div>
          </div>
        </div>
      </section>

      {/* Results / Stats */}
      <section className="border-b border-gray-200">
        <div className="mx-auto max-w-6xl px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <StatCard value="40%" label="Ticket volume reduced through automation" />
            <StatCard value="99th" label="Percentile CSAT - during the transition" />
            <StatCard value="20+" label="Combined years in CX ops" />
          </div>
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
                  We have spent a combined 20 years building CX operations the
                  traditional way - SOPs, QA frameworks, escalation paths,
                  Gorgias configurations, knowledge bases. That foundation is
                  exactly what AI agents need to work. An AI agent is only as
                  good as the knowledge base it reads and the escalation logic
                  it follows. We know how to build both.
                </p>
                <p>
                  The real skill is not deploying the AI. It is designing the
                  handoff - the exact moment a conversation needs a human. Get
                  that wrong, and your automation becomes a customer churn
                  machine. Get it right, and your team handles the moments that
                  matter while AI handles the rest.
                </p>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end gap-6">
              <div className="text-center">
                <div className="w-40 h-48 rounded-lg overflow-hidden border border-gray-200 mb-3">
                  <Image src="/mathias-headshot.png" alt="Mathias Dorr" width={160} height={192} className="w-full h-full object-cover" />
                </div>
                <p className="text-sm font-semibold text-navy">Mathias Dorr</p>
              </div>
              <div className="text-center">
                <div className="w-40 h-48 rounded-lg overflow-hidden border border-gray-200 mb-3">
                  <Image src="/alyssa-headshot.png" alt="Alyssa Provitt" width={160} height={192} className="w-full h-full object-cover" />
                </div>
                <p className="text-sm font-semibold text-navy">Alyssa Provitt</p>
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
            title="How we help brands make the transition."
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
              title="AI Transition Implementation"
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
