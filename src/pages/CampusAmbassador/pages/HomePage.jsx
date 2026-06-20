import HeroSection from "../home/HeroSection";
import CommunitySection from "../home/communitySection";
import { JourneySection } from "../home/JourneySection/JournerySection";
import RewardsBenefitSection from "../home/RewardsBenefitSection";
import ApplicationProcessSection from "../home/ApplicationProcessSection";
import FAQSection from "../home/FAQSection";
import { motion, useScroll, useTransform } from "framer-motion";

export function HomePage() {
  const { scrollYProgress } = useScroll();

  const heroOpacity = useTransform(scrollYProgress, [0, 0.12, 0.25], [1, 1, 0]);

  const heroScale = useTransform(scrollYProgress, [0, 0.25], [1, 0.92]);
  return (
    <div className="bg-[#401d5c28]">
      <motion.section
        style={{
          opacity: heroOpacity,
          scale: heroScale,
        }}
      >
        <HeroSection />
      </motion.section>
      <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <CommunitySection />
      </motion.div>
      <JourneySection />
      <RewardsBenefitSection />
      <ApplicationProcessSection />
      <FAQSection />
    </div>
  );
}
