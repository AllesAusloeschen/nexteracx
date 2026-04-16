import type { Metadata } from "next";
import SectionHeading from "../components/SectionHeading";
import CTAButton from "../components/CTAButton";

export const metadata: Metadata = {
  title: "About",
  description:
    "Mathias Dorr is a CX operations strategist with 9+ years of experience across DTC and SaaS. MBA from Gonzaga University.",
  openGraph: {
    title: "About Mathias Dorr | NextEraCX",
    description:
      "CX operations strategist with 9+ years across DTC ecommerce and enterprise SaaS.",
    url: "https://nexteracx.co/about",
  },
};

const timeline = [
  {
    role: "CX Operations Consultant",
    company: "NextEraCX",
    period: "Present",
    description:
      "Helping DTC and SaaS brands build scalable, efficient CX operations through audits, systems optimization, and team development.",
  },
  {
    role: "CX Operations Manager",
    company: "Every Man Jack",
    period: "5+ years",
    description:
      "Built and scaled the entire DTC customer support operation. Drove a 40% reduction in ticket volume through automation and self-service initiatives. Achieved and maintained 99th percentile CSAT scores. Implemented Gorgias automation workflows, QA frameworks, and offshore team management.",
  },
  {
    role: "CX Operations Lead",
    company: "B-Stock Solutions",
    period: "4 years",
    description:
      "Managed customer experience for a dual-sided SaaS marketplace platform. Supported Fortune 500 enterprise seller clients and a global buyer base across online auction operations for overstock and returns inventory. Built cross-border support processes for international markets.",
  },
  {
    role: "MBA",
    company: "Gonzaga University",
    period: "",
    description:
      "Master of Business Administration with focus on operations and strategy.",
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
              About
            </p>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight mb-6">
              Mathias Dorr
            </h1>
            <p className="text-lg text-gray-400 leading-relaxed max-w-2xl">
              CX operations strategist. 9+ years building and scaling support
              operations for DTC and SaaS companies. MBA from Gonzaga.
            </p>
          </div>
        </div>
      </section>

      {/* Bio + Photo */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 lg:px-8 py-20 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
            {/* Photo placeholder */}
            <div className="lg:col-span-2 flex justify-center">
              <div className="w-full max-w-xs aspect-[3/4] rounded-lg bg-gray-100 border border-gray-200 flex items-center justify-center">
                <span className="text-sm text-gray-400 font-medium">
                  Photo
                </span>
              </div>
            </div>

            {/* Bio */}
            <div className="lg:col-span-3 space-y-5 text-gray-600 leading-relaxed">
              <p className="text-lg">
                I started in CX before it was a buzzword. Over the past decade, I
                have built support operations from scratch, managed teams across
                time zones, and turned customer service from a cost center into a
                growth driver.
              </p>
              <p>
                At <strong className="text-navy">Every Man Jack</strong>, I
                owned the full DTC support operation for one of the
                fastest-growing men&apos;s grooming brands. I built automation
                systems that cut ticket volume by 40%, implemented QA frameworks
                that drove CSAT to the 99th percentile, and managed both
                in-house and offshore teams.
              </p>
              <p>
                At <strong className="text-navy">B-Stock Solutions</strong>, I
                operated in a fundamentally different environment: a dual-sided
                SaaS marketplace serving Fortune 500 enterprise sellers and
                thousands of international buyers. I learned how to navigate
                enterprise stakeholder dynamics, build cross-border support
                processes, and manage the complexity of a platform where every
                ticket has two customers.
              </p>
              <p>
                That range  - from scrappy DTC operations to
                enterprise-grade SaaS  - gives me a perspective most CX
                consultants simply do not have. I know what good looks like at
                every stage of growth.
              </p>
              <p>
                I hold an <strong className="text-navy">MBA from Gonzaga University</strong>,
                which grounds my operational instincts in strategic thinking. I
                believe the best CX operations combine empathy with engineering:
                the systems have to work for both the customer and the business.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="bg-gray-50">
        <div className="mx-auto max-w-6xl px-6 lg:px-8 py-20 md:py-24">
          <SectionHeading
            label="Approach"
            title="How I think about CX operations."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-teal/10 text-teal mx-auto mb-4">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-navy mb-2">
                Data-driven decisions
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Every recommendation is grounded in actual ticket data, handle
                times, and resolution patterns. No guesswork.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-teal/10 text-teal mx-auto mb-4">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-navy mb-2">
                Systems over headcount
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                The best CX operations scale through better systems, not just
                more people. Automation and process design come first.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-teal/10 text-teal mx-auto mb-4">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-navy mb-2">
                Built to last
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                I build operations that your team can own and maintain long after
                the engagement ends. No consultant dependency.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Career Timeline */}
      <section className="bg-white">
        <div className="mx-auto max-w-3xl px-6 lg:px-8 py-20 md:py-24">
          <SectionHeading label="Experience" title="Career timeline." />
          <div className="space-y-10">
            {timeline.map((item) => (
              <div
                key={item.company}
                className="relative pl-8 border-l-2 border-gray-200"
              >
                <div className="absolute -left-[9px] top-1 h-4 w-4 rounded-full bg-teal" />
                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 mb-2">
                  <h3 className="text-lg font-semibold text-navy">
                    {item.role}
                  </h3>
                  <span className="text-gray-400 hidden sm:inline">/</span>
                  <span className="text-teal font-medium">{item.company}</span>
                  {item.period && (
                    <>
                      <span className="text-gray-400 hidden sm:inline">/</span>
                      <span className="text-sm text-gray-400">
                        {item.period}
                      </span>
                    </>
                  )}
                </div>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy text-white">
        <div className="mx-auto max-w-6xl px-6 lg:px-8 py-20 md:py-24 text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Let&apos;s work together.
          </h2>
          <p className="text-gray-400 text-lg mb-8 max-w-xl mx-auto">
            If your CX operations need strategic attention, I would like to hear
            about it.
          </p>
          <CTAButton href="/contact">Book a Strategy Call</CTAButton>
        </div>
      </section>
    </>
  );
}
