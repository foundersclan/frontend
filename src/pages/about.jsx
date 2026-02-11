import { RefreshCcw, Sparkle, User, ArrowUpRight } from "lucide-react";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export const AboutUs = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

 
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <section ref={targetRef} className="relative bg-zinc-950 py-24 md:py-40 px-6 overflow-hidden">
      
     
      <motion.div 
        style={{ y }}
        className="absolute top-20 left-0 text-[20vw] font-black text-white/[0.02] select-none pointer-events-none whitespace-nowrap font-diplomata-sc"
      >
        EVOLVE EVOLVE EVOLVE
      </motion.div>

      <div className="max-w-7xl mx-auto relative z-10">
        
    
        <div className="flex flex-col md:flex-row gap-12 mb-32 items-end">
          <div className="md:w-2/3">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-6xl md:text-8xl font-bold leading-[0.9] tracking-tighter text-white mb-8">
                WE BUILD <br /> 
                <span className="text-yellow-500">LEGACIES</span> NOT <br />
                JUST BUSINESSES.
              </h2>
            </motion.div>
          </div>
          <div className="md:w-1/3 pb-4">
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-zinc-400 text-lg border-l border-yellow-500/50 pl-6 leading-relaxed"
            >
              The difference between a trend and a brand is <b>vision</b>. We provide the ecosystem for founders to transition from creators to industry leaders.
            </motion.p>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-6">
          
         
          <motion.div 
            whileHover={{ y: -10 }}
            className="col-span-12 md:col-span-7 group relative aspect-video md:aspect-auto h-[400px] bg-zinc-900 rounded-3xl overflow-hidden border border-white/5"
          >
             <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
             <div className="relative h-full p-10 flex flex-col justify-between">
                <Sparkle className="w-12 h-12 text-yellow-500" />
                <div>
                    <h3 className="text-3xl font-bold text-white mb-2">Startup Launchpad</h3>
                    <p className="text-zinc-400 max-w-sm">The ultimate catalyst for turning disruptive ideas into market-ready ventures with expert mentorship.</p>
                </div>
                <button className="flex items-center gap-2 text-yellow-500 font-bold uppercase tracking-widest text-xs">
                    Get Funded <ArrowUpRight className="w-4 h-4" />
                </button>
             </div>
          </motion.div>

         
          <motion.div 
            whileHover={{ y: -10 }}
            className="col-span-12 md:col-span-5 group p-10 bg-zinc-900 rounded-3xl border border-white/5 flex flex-col justify-between h-[400px]"
          >
            <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center group-hover:bg-yellow-500/10 transition-colors">
                <RefreshCcw className="w-6 h-6 text-yellow-500" />
            </div>
            <div>
                <h3 className="text-2xl font-bold text-white mb-2">Business Essentials</h3>
                <p className="text-zinc-400">Blueprint for scaling operations and brand architecture.</p>
            </div>
            <div className="h-[1px] w-full bg-white/10 group-hover:bg-yellow-500/50 transition-colors" />
          </motion.div>

          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="col-span-12 bg-gradient-to-r from-yellow-600 to-yellow-800 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 mt-6"
          >
            <div className="flex items-center gap-6">
                <div className="p-4 bg-black/20 rounded-full backdrop-blur-md">
                    <User className="w-8 h-8 text-white" />
                </div>
                <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white">Growth Mindset</h3>
                    <p className="text-yellow-100/80">Personal mastery for elite performance.</p>
                </div>
            </div>
            <button className="w-full md:w-auto px-8 py-4 bg-white text-black font-bold rounded-xl hover:bg-zinc-100 transition-colors">
                Join the Elite
            </button>
          </motion.div>

        </div>
      </div>

 
      <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-black to-transparent pointer-events-none" />
    </section>
  );
};