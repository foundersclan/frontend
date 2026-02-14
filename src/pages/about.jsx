import { RefreshCcw, Sparkle, User, ArrowUpRight } from "lucide-react";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { Link } from "react-router-dom";

export const AboutUs = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  // Reduced travel distance for mobile to keep background text visible but contained
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return (
    <section ref={targetRef} className="relative bg-zinc-950 py-20 md:py-40 px-6 overflow-hidden">
      
      {/* 1. BACKGROUND PARALLAX - Optimized for mobile width */}
      <motion.div 
        style={{ y }}
        className="absolute top-10 md:top-20 left-0 text-[18vw] md:text-[20vw] font-black text-white/[0.02] select-none pointer-events-none whitespace-nowrap font-diplomata-sc leading-none"
      >
        EVOLVE EVOLVE EVOLVE
      </motion.div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* 2. HEADER SECTION - Flex to Column on Mobile */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 mb-16 md:mb-32 md:items-end">
          <div className="w-full md:w-2/3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-[12vw] sm:text-6xl md:text-8xl font-bold leading-[0.95] tracking-tighter text-white mb-6">
                WE BUILD <br /> 
                <span className="text-yellow-500">LEGACIES</span> <br className="md:hidden" /> NOT <br />
                JUST BUSINESSES.
              </h2>
            </motion.div>
          </div>
          
          <div className="w-full md:w-1/3">
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-zinc-400 text-base md:text-lg border-l-2 border-yellow-500/50 pl-6 leading-relaxed"
            >
              The difference between a trend and a brand is <b className="text-white">vision</b>. We provide the ecosystem for founders to transition from creators to industry leaders.
            </motion.p>
          </div>
        </div>

        {/* 3. CARDS GRID - Stacking logic fixed */}
        <div className="grid grid-cols-12 gap-4 md:gap-6">
          
          {/* Card 01 - Startup Launchpad */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="col-span-12 md:col-span-7 group relative h-[350px] md:h-[450px] bg-zinc-900/50 rounded-3xl overflow-hidden border border-white/5"
          >
             <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
             <div className="relative h-full p-8 md:p-12 flex flex-col justify-between">
                <Sparkle className="w-10 h-10 text-yellow-500" />
                <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">Startup Launchpad</h3>
                    <p className="text-zinc-400 text-sm md:text-base max-w-sm">The ultimate catalyst for turning disruptive ideas into market-ready ventures with expert mentorship.</p>
                </div>
                {/* <Link>
                <button className="flex items-center gap-2 text-yellow-500 font-bold uppercase tracking-widest text-[10px] md:text-xs">
                     <ArrowUpRight className="w-4 h-4" />
                </button>
                </Link> */}
             </div>
          </motion.div>

          {/* Card 02 - Business Essentials */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="col-span-12 md:col-span-5 group p-8 md:p-12 bg-zinc-900/50 rounded-3xl border border-white/5 flex flex-col justify-between h-[300px] md:h-[450px]"
          >
            <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-white/5 flex items-center justify-center group-hover:bg-yellow-500/10 transition-colors">
                <RefreshCcw className="w-5 h-5 md:w-6 md:h-6 text-yellow-500" />
            </div>
            <div>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2">Business Essentials</h3>
                <p className="text-zinc-400 text-sm md:text-base">Blueprint for scaling operations and brand architecture.</p>
            </div>
            <div className="h-px w-full bg-white/10 group-hover:bg-yellow-500/40 transition-colors" />
          </motion.div>

          {/* Card 03 - Growth Mindset (Banner) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="col-span-12 bg-gradient-to-r from-yellow-600 to-yellow-800 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8 mt-2"
          >
            <div className="flex flex-col md:flex-row items-center text-center md:text-left gap-4 md:gap-6">
                <div className="p-4 bg-black/20 rounded-full backdrop-blur-md shrink-0">
                    <User className="w-6 h-6 md:w-8 md:h-8 text-white" />
                </div>
                <div>
                    <h3 className="text-xl md:text-3xl font-bold text-white">Growth Mindset</h3>
                    <p className="text-yellow-100/80 text-sm md:text-base">Personal mastery for elite performance.</p>
                </div>
            </div>
            <Link to={'/request-invitation'}>
            <button className="w-full md:w-auto px-10 py-4 bg-white text-black font-black uppercase tracking-widest text-[10px] rounded-xl hover:bg-zinc-100 transition-all active:scale-95 shadow-xl shadow-black/20">
                Join the Elite
            </button>
            </Link>
          </motion.div>

        </div>
      </div>

      {/* 4. BOTTOM FADE OUT */}
      <div className="absolute bottom-0 left-0 w-full h-32 md:h-64 bg-gradient-to-t from-black to-transparent pointer-events-none" />
    </section>
  );
};