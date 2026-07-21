import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const LandingPage = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <div ref={containerRef} className="relative w-full h-[80svh] md:h-[110svh] overflow-hidden bg-zinc-950 flex items-center justify-center">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute -top-10 -left-20 w-72 h-72 md:w-[60%] md:h-[40%] bg-yellow-600/10 blur-[80px] md:blur-[120px] rounded-full" />
        <div className="absolute -bottom-10 -right-20 w-72 h-72 md:w-[60%] md:h-[40%] bg-yellow-900/10 blur-[80px] md:blur-[120px] rounded-full" />
      </div>

      {/* Background Text */}
      <motion.div
        style={{ y: textY }}
        className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none select-none z-10"
      >
        <h2 className="text-[19vw] sm:text-[15vw] md:text-[19vw] font-black leading-none text-white/[0.04]">
          FOUNDERS
        </h2>
        <h2 className="text-[22vw] md:text-[19vw] font-black leading-none text-white/[0.04]">
          CLAN
        </h2>
      </motion.div>

      {/* Hero Text */}
      <motion.div
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="relative z-30 flex flex-col items-center text-center px-4 pt-10 sm:pt-16"
      >
        <h1 className="font-diplomata-sc text-4xl sm:text-5xl md:text-8xl lg:text-[8rem] leading-none text-white tracking-tight blur-[0.3px] md:blur-[0.4px]">
          THE
        </h1>

        <h2 className="font-diplomata-sc bg-gradient-to-b from-yellow-100 via-yellow-500 to-yellow-900 bg-clip-text text-transparent italic leading-none text-5xl sm:text-7xl md:text-9xl blur-[0.3px] md:blur-[0.4px]">
          ELITE
        </h2>
      </motion.div>

      {/* Character */}
      <div className="absolute inset-0 flex items-end justify-center z-20 pointer-events-none">
        <motion.img
          style={{ y: imageY }}
          src="/assets/removeBGManWithBlack1.webp"
          alt="Brand Character"
          fetchPriority="high"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
          className="h-[58vh] sm:h-[68vh] md:h-[89vh] lg:h-[96vh] w-auto object-contain object-bottom drop-shadow-[0_0_40px_rgba(0,0,0,0.8)]"
        />
      </div>

      {/* Overlays */}
      <div className="absolute inset-0 z-40 pointer-events-none">
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-zinc-950 via-zinc-950/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-yellow-200/3 to-transparent mix-blend-overlay" />
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        className="absolute bottom-5 md:bottom-10 z-50 flex flex-col items-center gap-2"
      >
        <div className="w-px h-8 md:h-12 bg-gradient-to-b from-yellow-500 to-transparent" />
        <span className="mt-3 rotate-90 text-[8px] uppercase tracking-[0.35em] text-yellow-500/50">
          Scroll
        </span>
      </motion.div>
    </div>
  );
};