import { PricingTiers } from "../components/pricing/PricingTiers";
import { PricingFAQ } from "../components/pricing/PricingFAQ";
import { CTASection } from "../components/shared/CTASection";

export function PricingPage() {
  return (
    <div className="pt-24">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="text-center mb-16">
          <p className="text-[#d4a574] tracking-widest text-sm mb-4">MEMBERSHIP PLANS</p>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Choose Your Path
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Select the membership tier that aligns with your goals and growth stage
          </p>
        </div>
      </div>
      <PricingTiers />
      <PricingFAQ />
      <CTASection />
    </div>
  );
}
