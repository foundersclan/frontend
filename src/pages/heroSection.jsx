import { motion, useScroll, useTransform } from "motion/react";
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
    <div ref={containerRef} className="relative w-full h-[100svh] flex flex-col md:flex-row items-center justify-center bg-zinc-950 overflow-hidden">
      
      {/* 1. BACKGROUND LAYER */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-5%] left-[-10%] w-[60%] h-[40%] bg-yellow-600/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[40%] bg-yellow-900/10 blur-[120px] rounded-full" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:3rem_3rem] md:bg-[size:4rem_4rem]" />
      </div>

      {/* 2. BACKGROUND TEXT (CLAN) - Adjusted for mobile position */}
      <motion.div 
        style={{ y: textY }}
        className="absolute inset-0 flex flex-col items-center justify-center z-10 pointer-events-none select-none"
      >
        <h2 className="text-[25vw] md:text-[20vw] font-black text-white/[0.05] leading-none mt-[-20vh] md:mt-0">
          CLAN
        </h2>
      </motion.div>

      {/* 3. HERO TEXT CONTENT - Adjusted margins */}
      <motion.div 
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="relative flex flex-col items-center text-center px-4 z-30 mt-[-15vh] md:mt-0"
      >
        <motion.p
          initial={{ opacity: 0, letterSpacing: "0.2em" }}
          animate={{ opacity: 1, letterSpacing: "0.8em" }}
          transition={{ duration: 1.5 }}
          className="uppercase text-yellow-500/60 text-[8px] md:text-xs font-mono mb-4 md:mb-8"
        >
          Established // 2025
        </motion.p>

        <h1 className="font-diplomata-sc -z-50 text-4xl md:text-8xl lg:text-[10rem] text-white leading-none tracking-tighter">
          THE
        </h1>
        <div className="bg-gradient-to-b font-diplomata-sc text-5xl md:text-9xl from-yellow-100 via-yellow-500 to-yellow-900 bg-clip-text text-transparent italic leading-tight">
          ELITE
        </div>
      </motion.div>

      {/* 4. BRAND CHARACTER IMAGE - Balanced for mobile height */}
      <div className="absolute inset-0 flex justify-center items-end z-20 pointer-events-none">
        <motion.img 
          style={{ y: imageY }}
          src="/assets/manwithnobackground.png" 
          className="h-[65vh] sm:h-[75vh] md:h-[95vh] w-auto object-contain object-bottom drop-shadow-[0_0_50px_rgba(0,0,0,0.8)]"
          alt="Brand Character"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
        />
      </div>

      {/* 5. OVERLAYS */}
      <div className="absolute inset-0 z-40 pointer-events-none">
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-zinc-950 via-zinc-950/60 to-transparent" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.05] contrast-150" />
      </div>

      {/* 6. SCROLL INDICATOR */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        className="absolute bottom-6 md:bottom-10 z-50 flex flex-col items-center gap-2"
      >
        <div className="w-[1px] h-8 md:h-12 bg-gradient-to-b from-yellow-500 to-transparent" />
        <span className="text-yellow-500/50 font-mono text-[7px] md:text-[8px] uppercase tracking-[0.4em] rotate-90 mt-4">Scroll</span>
      </motion.div>

    </div>
  );
};