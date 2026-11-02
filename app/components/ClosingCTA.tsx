import CTAButton from "./CTAButton";
import { PRIMARY_CTA, SECONDARY_CTA } from "../offer";

export default function ClosingCTA() {
  return (
    <section className="bg-navy text-white">
      <div className="mx-auto max-w-6xl px-6 lg:px-8 py-20 md:py-24 text-center">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
          Find out what your AI is really saying to customers.
        </h2>
        <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
          Start with a free spot check, or book a 30-minute call to talk
          through your setup.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <CTAButton href={SECONDARY_CTA.href} variant="outline">
            {SECONDARY_CTA.label}
          </CTAButton>
          <CTAButton href={PRIMARY_CTA.href}>{PRIMARY_CTA.label}</CTAButton>
        </div>
      </div>
    </section>
  );
}
