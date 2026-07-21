import { motion } from "motion/react";
import team from "../assets/team-insights.webp"
import lead from "../assets/think-insight.jpeg"
import grow from "../assets/grow-insight.jpeg"
import strong from "../assets/strong-insight.jpeg"
import { ArrowRight } from "lucide-react";
export const Insights = () => {
  const insights = [
    {
      head: "Start your business strong",
      body: "Key steps to launch and scale your startup with clarity.",
      image: strong,
      category: "Strategy"
    },
    {
      head: "Think like an entrepreneur",
      body: "Build resilience and adaptability for business growth.",
      image: team,
      category: "Mindset"
    },
    {
      head: "Lead teams with confidence",
      body: "Actionable guidance for effective team leadership.",
      image: lead,
      category: "Leadership"
    },
    {
      head: "Grow as a founder",
      body: "Practical tips for personal and professional growth.",
      image: grow,
      category: "Evolution"
    },
  ];

  return (
    <section className="bg-zinc-950 py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        <div className="flex flex-col lg:flex-row justify-between lg:items-end gap-8 lg:gap-12 mb-16 sm:mb-20 lg:mb-24">
          <div className="max-w-2xl">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="flex items-center gap-3 text-yellow-500 font-mono text-[10px] sm:text-xs md:text-sm tracking-[0.25em] sm:tracking-[0.4em] uppercase mb-4"
            >
              <span className="w-8 h-px bg-yellow-500" /> Knowledge Base // Archive
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[0.95] tracking-tighter"
            >
              Insights for Founders, <br />
              <span className="text-zinc-600 italic font-light">by Founders.</span>
            </motion.h2>
          </div>
          {/* <motion.button 
            whileHover={{ scale: 1.05 }}
            className="text-white border-b border-yellow-500 pb-2 flex items-center gap-4 font-bold uppercase tracking-widest text-xs"
          >
            View All Articles <ArrowRight size={16} />
          </motion.button> */}
        </div>


        <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-14 sm:gap-y-16 lg:gap-y-20 gap-x-8 lg:gap-x-12">
          {insights.map((ele, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >

              <div className="relative overflow-hidden rounded-xl sm:rounded-2xl aspect-[16/10] bg-zinc-900">
                <motion.img
                  src={ele.image}
                  alt={ele.head}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 group-hover:opacity-70"
                />
                <div className="absolute top-4 left-4 sm:top-6 sm:left-6">
                  <span className="px-2.5 sm:px-3 py-1 bg-black/50 backdrop-blur-md text-yellow-500 text-[9px] sm:text-[10px] font-bold uppercase tracking-widest border border-yellow-500/20">
                    {ele.category}
                  </span>
                </div>
              </div>


              <div className="mt-5 sm:mt-6 lg:mt-8 flex justify-between items-start gap-4">
                <div className="max-w-md">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-yellow-500 leading-tight transition-colors duration-300">
                    {ele.head}
                  </h3>
                  <p className="text-zinc-500 text-sm sm:text-base lg:text-lg leading-relaxed group-hover:text-zinc-300 transition-colors">
                    {ele.body}
                  </p>
                </div>
                {/* <div className="pt-2 hidden lg:block opacity-0 group-hover:opacity-100 group-hover:opacity-100 transition-all transform translate-x-[-10px] group-hover:translate-x-0">
                  <ArrowRight className="text-yellow-500" size={32} strokeWidth={1} />
                </div> */}
              </div>
              <div className="mt-6 sm:mt-8 lg:mt-10 h-[1px] w-full bg-zinc-800 group-hover:bg-yellow-500/30 transition-colors" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};