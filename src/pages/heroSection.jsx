import { motion, useScroll, useTransform } from "motion/react";
import { ReactTyped } from "react-typed";
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
    <div ref={containerRef} className="relative w-full h-screen flex items-center justify-center bg-zinc-950 overflow-hidden">
      
     
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-yellow-600/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-yellow-900/10 blur-[120px] rounded-full" />
        
       
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      
      <motion.div 
        style={{ y: textY }}
        className="absolute inset-0 flex flex-col items-center justify-center z-10 pointer-events-none select-none"
      >
        <h2 className="text-[20vw] font-black text-white/[0.1] leading-none">
          CLAN
        </h2>
      </motion.div>

     
      <motion.div 
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="relative  flex flex-col items-center text-center px-4"
      >
        <motion.p
          initial={{ opacity: 0, letterSpacing: "0.5em" }}
          animate={{ opacity: 1, letterSpacing: "1em" }}
          transition={{ duration: 1.5 }}
          className="uppercase text-yellow-500/60 text-[10px] md:text-xs font-mono mb-8"
        >
          Established // 2024
        </motion.p>

        <h1 className="font-diplomata-sc text-5xl md:text-8xl lg:text-[10rem] text-white leading-none tracking-tighter mb-10">
          THE <br />
        </h1>
          <div className="bg-gradient-to-b font-diplomata-sc text-5xl md:text-8xl from-yellow-100 via-yellow-500 to-yellow-900 bg-clip-text text-transparent italic z-40">
            ELITE
          </div>
        
        {/* <div className="h-20 mt-4 ">
            <span className="text-zinc-500 font-light text-2xl md:text-4xl tracking-widest uppercase">
                Are You A <br className="md:hidden" />
                <span className="text-white border-b border-yellow-500/50 pb-1">
                    <ReactTyped
                    strings={["Founder?", "Architect?", "Visionary?"]}
                    typeSpeed={80}
                    backSpeed={50}
                    loop
                    />
                </span>
            </span>
        </div> */}
      </motion.div>

      
      <div className="absolute inset-0 flex justify-center items-end z-20 pointer-events-none">
        <motion.img 
          style={{ y: imageY }}
          src="/assets/manwithnobackground.png" 
          className="h-[85vh] md:h-[95vh] w-auto object-contain object-bottom drop-shadow-[0_0_50px_rgba(0,0,0,0.8)]"
          alt="Brand Character"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
        />
      </div>

      
      <div className="absolute inset-0 z-40 pointer-events-none">
       
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent" />
        
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.05] contrast-150" />
      </div>

     
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        className="absolute bottom-10 z-50 flex flex-col items-center gap-2"
      >
        <div className="w-[1px] h-12 bg-gradient-to-b from-yellow-500 to-transparent" />
        <span className="text-yellow-500/50 font-mono text-[8px] uppercase tracking-[0.4em] rotate-90 mt-4">Scroll</span>
      </motion.div>

    </div>
  );
};