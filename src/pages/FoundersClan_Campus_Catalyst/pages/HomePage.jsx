import { HeroSection } from "../components/home/HeroSection";
import { TestimonialSection } from "../components/home/TestimonialSection";
import { CoreMottoSection } from "../components/home/CoreMottoSection";
import { BenefitsSection } from "../components/home/BenefitsSection";
import { StatsSection } from "../components/home/StatsSection";
import { CTASection } from "../components/shared/CTASection";

export function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <TestimonialSection />
      <CoreMottoSection />
      <BenefitsSection />
      <CTASection />
    </>
  );
}
