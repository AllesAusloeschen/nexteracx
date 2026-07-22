import type { Metadata } from "next";
import CTAButton from "../components/CTAButton";

export const metadata: Metadata = {
  title: "Writing",
  description:
    "Essays on AI in CX - what actually works when you put AI agents in front of customers.",
  openGraph: {
    title: "Writing | NextEraCX",
    description:
      "Essays on AI in CX - what actually works when you put AI agents in front of customers.",
    url: "https://nexteracx.co/writing",
  },
};

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

      {/* Empty state */}
      <section className="bg-white">
        <div className="mx-auto max-w-3xl px-6 lg:px-8 py-20 md:py-24 text-center">
          <p className="text-gray-600 text-lg leading-relaxed mb-8">
            First essays coming soon. In the meantime, the best way to see how
            I think is to start a conversation.
          </p>
          <CTAButton href="/contact">Get in Touch</CTAButton>
        </div>
      </section>
    </>
  );
}
