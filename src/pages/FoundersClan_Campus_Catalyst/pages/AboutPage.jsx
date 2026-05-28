import { Mission } from "../components/about/Mission";
import { Team } from "../components/about/Team";
import { Values } from "../components/about/Values";
import { CTASection } from "../components/shared/CTASection";

export function AboutPage() {
  return (
    <div className="pt-24">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="text-center mb-16">
          <p className="text-[#d4a574] tracking-widest text-sm mb-4">OUR STORY</p>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Built by Founders,
            <br />
            <span className="text-[#d4a574] italic">For Founders</span>
          </h1>
        </div>
      </div>
      <Mission />
      <Values />
      <Team />
      <CTASection />
    </div>
  );
}
