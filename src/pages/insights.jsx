import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export const Insights = () => {
  const insights = [
    {
      head: "Start your business strong",
      body: "Key steps to launch and scale your startup with clarity.",
      image: "https://cdn.prod.website-files.com/68ce3566df7b04e58e85e3a7/68ce3605ecf408940f00ed8d_ecea630f-0511-47ea-ae0e-aa1b49b9cceb.avif",
      category: "Strategy"
    },
    {
      head: "Think like an entrepreneur",
      body: "Build resilience and adaptability for business growth.",
      image: "https://cdn.prod.website-files.com/68ce3566df7b04e58e85e3a7/68ce3605fafa92df42137585_b2540603-e387-43e1-b3a5-ccb33202f6b8.avif",
      category: "Mindset"
    },
    {
      head: "Lead teams with confidence",
      body: "Actionable guidance for effective team leadership.",
      image: "https://cdn.prod.website-files.com/68ce3566df7b04e58e85e3a7/68ce3605b73c4e5c19b56d15_32aad5b5-dfbe-4234-9c09-de3004b2a964.avif",
      category: "Leadership"
    },
    {
      head: "Grow as a founder",
      body: "Practical tips for personal and professional growth.",
      image: "https://cdn.prod.website-files.com/68ce3566df7b04e58e85e3a7/68ce3605da95556b8f997721_22387c8b-e312-4f03-a534-d23b0862e642.avif",
      category: "Evolution"
    },
  ];

  return (
    <section className="bg-zinc-950 py-32 px-6">
      <div className="max-w-7xl mx-auto">
        
      
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-yellow-500 font-mono text-sm tracking-[0.4em] uppercase mb-4"
            >
              Knowledge Base // Archive
            </motion.p>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-bold text-white leading-tight tracking-tighter"
            >
              Insights for Founders, <br />
              <span className="text-zinc-600 italic font-light">by Founders.</span>
            </motion.h2>
          </div>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            className="text-white border-b border-yellow-500 pb-2 flex items-center gap-4 font-bold uppercase tracking-widest text-xs"
          >
            View All Articles <ArrowRight size={16} />
          </motion.button>
        </div>

       
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-20">
          {insights.map((ele, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
            
              <div className="relative overflow-hidden rounded-sm aspect-[16/10] bg-zinc-900">
                <motion.img 
                  src={ele.image} 
                  alt={ele.head}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 group-hover:opacity-70" 
                />
                <div className="absolute top-6 left-6">
                  <span className="px-3 py-1 bg-black/50 backdrop-blur-md text-yellow-500 text-[10px] font-bold uppercase tracking-widest border border-yellow-500/20">
                    {ele.category}
                  </span>
                </div>
              </div>

             
              <div className="mt-8 flex justify-between items-start gap-4">
                <div className="max-w-md">
                  <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-yellow-500 transition-colors duration-300">
                    {ele.head}
                  </h3>
                  <p className="text-zinc-500 text-lg leading-relaxed group-hover:text-zinc-300 transition-colors">
                    {ele.body}
                  </p>
                </div>
                <div className="pt-2 opacity-0 group-hover:opacity-100 transition-all transform translate-x-[-10px] group-hover:translate-x-0">
                  <ArrowRight className="text-yellow-500" size={32} strokeWidth={1} />
                </div>
              </div>

              
              <div className="mt-10 h-[1px] w-full bg-zinc-800 group-hover:bg-yellow-500/30 transition-colors" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};