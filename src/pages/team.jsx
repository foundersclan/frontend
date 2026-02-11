import { motion } from "motion/react";
import { ArrowUpRight, Quote } from "lucide-react";

export const TeamIntro = () => {
  const team = [
    { src: "/assets/nishant.png", name: "Nishant Saini", role: "Visionary Lead" },
    { src: "/assets/muskan2.png", name: "Jordan Chen", role: "Strategy Architect" },
  ];

  return (
    <section className="relative bg-zinc-950 py-32 px-6 overflow-hidden">
      
      <div className="absolute top-0 right-0 w-1/2 h-full bg-yellow-500/[0.02] -skew-x-12 translate-x-1/4 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
       
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-24 items-start">
          <div className="md:col-span-8">
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-yellow-500 font-mono tracking-[0.5em] text-xs uppercase mb-4 block"
            >
              The Human Element // 0.1
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-8xl font-bold text-white leading-none tracking-tighter"
            >
              THE <span className="text-zinc-700">ORIGINALS</span> <br />
              BEHIND THE EXTRAORDINARY.
            </motion.h2>
          </div>
          <div className="md:col-span-4 md:pt-20">
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-zinc-500 text-lg leading-relaxed border-l border-yellow-500/30 pl-6"
            >
              We are a collective of thinkers and doers. We don't just follow blueprints; we invent them.
            </motion.p>
          </div>
        </div>

       
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-stretch">
        
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-4 group relative rounded-3xl overflow-hidden aspect-[4/5] bg-zinc-900"
          >
            <motion.img 
              src={team[0].src} 
              className="w-full h-full object-cover grayscale-75 backdrop-grayscale-50 group-hover:grayscale-0 group-hover:scale-110  object-bottom drop-shadow-[0_0_50px_rgba(0,0,0,0.8)] transition-all duration-700 ease-in-out"
              alt={team[0].name}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-100 transition-opacity" />
            <div className="absolute bottom-8 left-8">
              <p className="text-yellow-500 font-bold text-5xl font-extrabold uppercase tracking-widest mb-1">{team[0].role}</p>
              <h4 className="text-2xl font-bold text-white">{team[0].name}</h4>
            </div>
          </motion.div>

         
          <motion.div 
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="md:col-span-4 group relative rounded-3xl overflow-hidden aspect-[4/5] bg-zinc-900 md:translate-y-12 bg-gradient-to-br from-slate-700 to-slate-800"
          >
            <motion.img 
              src={team[1].src} 
              className="w-full h-full object-cover grayscale-75 backdrop-grayscale-50 group-hover:grayscale-0 group-hover:scale-110  object-bottom drop-shadow-[0_0_50px_rgba(0,0,0,0.8)] transition-all duration-700 ease-in-out"
              alt={team[1].name}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-100 transition-opacity" />
            <div className="absolute bottom-8 left-8">
              <p className="text-yellow-500 font-bold text-5xl font-extrabold uppercase tracking-widest mb-1">{team[1].role}</p>
              <h4 className="text-2xl font-bold text-white">{team[1].name}</h4>
            </div>
          </motion.div>

        
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            className="md:col-span-4 p-12 rounded-3xl bg-zinc-900 border border-white/5 flex flex-col justify-between relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-8">
                <Quote className="w-12 h-12 text-yellow-500/20" />
            </div>
            
            <div className="relative z-10">
                <h4 className="text-3xl font-bold text-white mb-6 leading-tight">
                    Engineering <br /> Meaningful <br /> <span className="text-yellow-500">Impact.</span>
                </h4>
                <p className="text-zinc-400 text-lg leading-relaxed mb-8">
                    Excellence isn't an act, it's a habit. We aim for long-term value in every line of code and every brand strategy we touch.
                </p>
            </div>

            <button className="flex items-center gap-3 text-white font-bold uppercase tracking-[0.2em] text-xs group">
                Work With Us 
                <span className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-yellow-500 group-hover:border-yellow-500 transition-all">
                    <ArrowUpRight className="w-4 h-4 group-hover:text-black" />
                </span>
            </button>
          </motion.div>

        </div>
      </div>
    </section>
  );
};