import type { Metadata } from "next";
import Link from "next/link";
import CTAButton from "../../components/CTAButton";

export const metadata: Metadata = {
  title: "The quiet wrong answer",
  description:
    "Why deflection rate is the most misleading number in AI support, and what to measure instead.",
  openGraph: {
    type: "article",
    title: "The quiet wrong answer | NextEraCX",
    description:
      "Why deflection rate is the most misleading number in AI support.",
    url: "https://nexteracx.co/writing/the-quiet-wrong-answer",
  },
};

const paragraphs = [
  "Every AI support dashboard has a favorite number.",
  "Deflection rate. Tickets the bot “resolved” without a human.",
  "Number goes up, everyone celebrates. I’ve been in those celebrations.",
  "But here’s the question almost nobody in the room can answer: how many of those deflected customers got a wrong answer and just gave up?",
  "Your dashboard can’t tell the difference. A customer who got helped and a customer who quit in frustration look identical in the data. Both count as a win.",
  "I call this the quiet wrong answer. It’s the most expensive metric in support, because it’s invisible: no reopened ticket, no escalation, no angry CSAT survey. Just a customer who trusts you a little less, filed under “resolved.”",
  "So on my own product, I made a rule: no change to the AI ships until it passes a test suite written in advance. Not happy-path demos. The hard cases: the ambiguous asks, the messy real-world inputs, the questions where a confident wrong answer does actual damage.",
  "That suite has killed changes that looked great in the demo. More than once, the version everyone liked best was the one that failed.",
  "Deflection tells you the bot answered. Testing tells you whether it was right.",
  "If your AI vendor reports the first number but can’t show you the second, you don’t have automation. You have a customer-churn machine with a great dashboard.",
];

export default function QuietWrongAnswerPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy text-white">
        <div className="mx-auto max-w-3xl px-6 lg:px-8 py-20 md:py-28">
          <Link
            href="/writing"
            className="text-teal text-sm font-semibold uppercase tracking-wider hover:text-white transition-colors"
          >
            Writing
          </Link>
          <h1 className="mt-4 text-4xl md:text-5xl font-bold tracking-tight leading-tight mb-6">
            The quiet wrong answer
          </h1>
          <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
            Why deflection rate is the most misleading number in AI support.
          </p>
          <p className="mt-6 text-sm text-gray-400">By Mathias Dorr</p>
        </div>
      </section>

      {/* Body */}
      <article className="bg-white">
        <div className="mx-auto max-w-3xl px-6 lg:px-8 py-16 md:py-20 space-y-6 text-lg text-gray-600 leading-relaxed">
          {paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </article>

      {/* CTA */}
      <section className="bg-navy text-white">
        <div className="mx-auto max-w-6xl px-6 lg:px-8 py-20 md:py-24 text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Find out if your CX operation is ready for AI agents.
          </h2>
          <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
            The AI-Ready CX Audit is a fixed-fee, 2-week engagement. You get a
            clear picture of what is ready to automate, what needs human hands,
            and exactly how to design the transition.
          </p>
          <CTAButton href="/contact">Get Your AI-Ready Audit</CTAButton>
        </div>
      </section>
    </>
  );
}
