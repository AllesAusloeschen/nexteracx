import CTAButton from "./CTAButton";
import { CTA } from "../cta";

export default function ClosingCTA() {
  return (
    <section className="bg-navy text-white">
      <div className="mx-auto max-w-6xl px-6 lg:px-8 py-20 md:py-24 text-center">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
          Ready to build what&apos;s next?
        </h2>
        <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
          Tell us where your customer experience is today. We&apos;ll show you
          what it could be.
        </p>
        <CTAButton href={CTA.href}>{CTA.label}</CTAButton>
      </div>
    </section>
  );
}
