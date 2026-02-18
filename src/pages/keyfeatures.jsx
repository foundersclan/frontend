import { CheckCircle, Heart, MessageCircle, RefreshCcw, Users, ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";

export const Features = () => {
  const features = [
    { head: "Startup Essentials", body: "Master the blueprint for launching ventures with confidence.", svg: RefreshCcw },
    { head: "Personal Development", body: "Build the elite mindset required to scale and adapt.", svg: MessageCircle },
    { head: "Effective Leadership", body: "Practical tools for leading teams at every growth stage.", svg: CheckCircle },
    { head: "Networking Strategies", body: "Proven approaches to expand high-value connections.", svg: Heart },
    { head: "Seminar Insights", body: "Direct takeaways from our exclusive high-level business summits.", svg: Users },
    { head: "Team Success", body: "The science of building motivated, high-performance cultures.", svg: Users },
  ];

  return (
    <section className="relative bg-zinc-950 py-32 px-6 overflow-hidden">
      
      
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-yellow-500/20 to-transparent" />
      <div className="absolute top-40 left-1/4 w-64 h-64 bg-yellow-600/5 blur-[120px] rounded-full pointer-events-none" />

     
      <div className="max-w-7xl mx-auto mb-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="max-w-2xl"
          >
            <span className="text-yellow-500 font-bold uppercase tracking-[0.4em] text-xs mb-4 block">
              Capabilities
            </span>
            <h2 className="text-5xl md:text-7xl font-bold text-white leading-tight">
              Fueling your <br />
              <span className="text-zinc-500">Competitive Edge.</span>
            </h2>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-zinc-400 max-w-xs text-lg pb-2 border-b border-zinc-800"
          >
            A curated ecosystem of resources designed for the modern architect of business.
          </motion.p>
        </div>
      </div>

     
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0 },
          show: { opacity: 1, transition: { staggerChildren: 0.1 } }
        }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-zinc-800/50 border border-zinc-800 max-w-7xl mx-auto rounded-3xl overflow-hidden shadow-2xl"
      >
        {features.map((ele, i) => (
          <motion.div
            key={i}
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: { opacity: 1, y: 0 }
            }}
            className="group relative bg-zinc-950 p-10 flex flex-col hover:bg-zinc-900/50 transition-all duration-500 h-full"
          >
          
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            
            <div className="relative z-10">
              <div className="mb-8 w-12 h-12 flex items-center justify-center rounded-xl bg-zinc-900 border border-zinc-800 text-yellow-500 group-hover:scale-110 group-hover:border-yellow-500/50 transition-all duration-500">
                <ele.svg size={24} strokeWidth={1.5} />
              </div>
              
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-yellow-500 transition-colors">
                {ele.head}
              </h3>
              
              <p className="text-zinc-500 leading-relaxed group-hover:text-zinc-300 transition-colors">
                {ele.body}
              </p>
            </div>

          
            {/* <div className="mt-auto pt-8 flex justify-end opacity-0 group-hover:opacity-100 transition-opacity">
              <ArrowUpRight className="text-yellow-500 w-5 h-5" />
            </div> */}
          </motion.div>
        ))}
      </motion.div>

     
      <div className="mt-16 text-center">
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-zinc-600 text-sm font-mono tracking-tighter"
        >
          © BRAND_SYSTEM // 2025_RESOURCES
        </motion.p>
      </div>

    </section>
  );
};