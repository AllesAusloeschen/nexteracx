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
              CX Operations Consulting
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight mb-6">
              Build CX operations that{" "}
              <span className="text-teal">scale with your brand.</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-400 leading-relaxed mb-8 max-w-2xl">
              We help DTC and SaaS companies reduce ticket volume, improve CSAT,
              and build support operations that grow without breaking.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <CTAButton href="/contact">Book a Strategy Call</CTAButton>
              <CTAButton href="/services" variant="outline">
                View Services
              </CTAButton>
            </div>
          </div>
        </div>
      </section>

      {/* Results / Stats */}
      <section className="border-b border-gray-200">
        <div className="mx-auto max-w-6xl px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <StatCard value="40%" label="Ticket volume reduction" />
            <StatCard value="99th" label="Percentile CSAT" />
            <StatCard value="9+" label="Years in CX operations" />
          </div>
        </div>
      </section>

      {/* Intro / Dual Expertise */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 lg:px-8 py-20 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading
                label="Why NextEraCX"
                title="DTC agility meets enterprise rigor."
                centered={false}
              />
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Most CX consultants know one world. We have operated in two.
                  We have scaled DTC support operations from the ground up -
                  cutting ticket volume by 40% through automation and
                  self-service while maintaining 99th percentile CSAT scores.
                </p>
                <p>
                  We have also managed CX for dual-sided SaaS marketplaces
                  serving Fortune 500 enterprise clients and international
                  buyer bases across complex operations.
                </p>
                <p>
                  That combination - DTC speed plus enterprise discipline - is
                  what we bring to every engagement.
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
                  <Image src="/alyssa-headshot.jpg" alt="Alyssa Provitt" width={160} height={192} className="w-full h-full object-cover" />
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
            title="How we help brands scale CX."
            description="From diagnostic audits to hands-on optimization, we deliver actionable strategies that reduce costs and improve customer satisfaction."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ServiceCard
              icon={
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15a2.25 2.25 0 012.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V19.5a2.25 2.25 0 002.25 2.25h.75" />
                </svg>
              }
              title="CX Operations Audit"
              description="Comprehensive review of your tech stack, workflows, and team structure with an actionable recommendations report."
            />
            <ServiceCard
              icon={
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.1-5.1m0 0L11.42 4.97m-5.1 5.1H21M3 3v18" />
                </svg>
              }
              title="Systems Optimization"
              description="Gorgias and Zendesk setup, automation workflows, AI agent implementation, and knowledge management systems."
            />
            <ServiceCard
              icon={
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                </svg>
              }
              title="Team & Process Scaling"
              description="Hiring frameworks, QA systems, offshore team management, escalation paths, and international support operations."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-navy text-white">
        <div className="mx-auto max-w-6xl px-6 lg:px-8 py-20 md:py-24 text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Ready to transform your CX operations?
          </h2>
          <p className="text-gray-400 text-lg mb-8 max-w-xl mx-auto">
            Book a free strategy call to discuss your challenges and explore how
            we can work together.
          </p>
          <CTAButton href="/contact">Book a Strategy Call</CTAButton>
        </div>
      </section>
    </>
  );
}
