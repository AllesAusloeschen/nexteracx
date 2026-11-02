import type { Metadata } from "next";
import Link from "next/link";
import CTAButton from "../components/CTAButton";

export const metadata: Metadata = {
  title: "Writing",
  description:
    "Essays on CX operations and AI in support, including why deflection rate is the most misleading number in AI support.",
  openGraph: {
    title: "Writing | NextEraCX",
    description:
      "Essays on CX operations and AI in support: what actually works when you put AI agents in front of customers.",
    url: "https://nexteracx.co/writing",
  },
};

const essays = [
  {
    href: "/writing/the-quiet-wrong-answer",
    title: "The quiet wrong answer",
    subtitle: "Why deflection rate is the most misleading number in AI support.",
  },
];

export default function WritingPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy text-white">
        <div className="mx-auto max-w-6xl px-6 lg:px-8 py-20 md:py-28">
          <div className="max-w-3xl">
            <p className="text-teal text-sm font-semibold uppercase tracking-wider mb-4">
              Writing
            </p>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight mb-6">
              Notes on AI in CX.
            </h1>
            <p className="text-lg text-gray-400 leading-relaxed max-w-2xl">
              Essays on what actually works when you put AI agents in front of
              customers - written from building, not theorizing.
            </p>
          </div>
        </div>
      </section>

      {/* Essays */}
      <section className="bg-white">
        <div className="mx-auto max-w-3xl px-6 lg:px-8 py-20 md:py-24">
          <div className="space-y-6">
            {essays.map((essay) => (
              <Link
                key={essay.href}
                href={essay.href}
                className="group block rounded-xl border border-gray-200 p-6 transition-all hover:border-teal/30 hover:shadow-lg"
              >
                <h2 className="text-xl font-semibold text-navy group-hover:text-teal transition-colors">
                  {essay.title}
                </h2>
                <p className="mt-2 text-gray-600 leading-relaxed">
                  {essay.subtitle}
                </p>
                <p className="mt-4 text-sm font-semibold text-teal">
                  Read the essay
                </p>
              </Link>
            ))}
          </div>
          <div className="mt-16 text-center">
            <CTAButton href="/contact">Get Your AI-Ready Audit</CTAButton>
          </div>
        </div>
      </section>
    </>
  );
}
