import type { Metadata } from "next";
import Image from "next/image";
import ClosingCTA from "../components/ClosingCTA";
import SectionHeading from "../components/SectionHeading";

export const metadata: Metadata = {
  title: "About",
  description:
    "Mathias Dorr, Principal at NextEraCX. 10+ years running support operations for DTC, CPG, and B2B SaaS. Independent, hands-on with AI, and focused on proving the answers are right.",
  openGraph: {
    title: "About | NextEraCX",
    description:
      "I built CX the old way. Now I make AI earn its place.",
    url: "https://nexteracx.co/about",
  },
};

const principal = {
  name: "Mathias Dorr",
  title: "Principal",
  photo: "/mathias-headshot.png",
  bio: [
    <>I&apos;ve spent more than 10 years running support operations for DTC and CPG brands and B2B SaaS: help desks, knowledge bases, QA programs, outsourced teams, subscription flows, and the reporting leadership relies on. I&apos;ve built CX functions from the ground up. I know what breaks at scale and what holds.</>,
    <>Today I build with AI hands-on, and I hold it to a simple rule: nothing reaches a customer until it passes a test of the hard cases. That rule came from watching AI dashboards celebrate numbers that hid wrong answers.</>,
    <>NextEraCX is the practice built on that idea. I&apos;m independent, so my only job is making the tools you already pay for work, and proving it.</>,
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
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight">
              I built CX the old way. Now I make AI earn its place.
            </h1>
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

      {/* Philosophy */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 lg:px-8 py-20 md:py-24">
          <SectionHeading
            label="Approach"
            title="How I work."
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
                AI only amplifies what&apos;s underneath it. Clean knowledge and
                clear rules come before automation.
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
                The moment AI steps aside is where customers decide whether to
                trust you.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-teal/10 text-teal mx-auto mb-4">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-navy mb-2">
                Test, don&apos;t trust
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Measure whether answers were right, not just whether they were
                sent.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-teal/10 text-teal mx-auto mb-4">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-navy mb-2">
                Get ahead of the customer
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                The best experience is the one where they never have to ask.
                What customers tell support should reach the teams that can fix
                it, so the same question doesn&apos;t come twice.
              </p>
            </div>
          </div>
        </div>
      </section>

      <ClosingCTA />
    </>
  );
}
