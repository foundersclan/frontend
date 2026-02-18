import { ArrowLeft, ArrowRight, QuoteIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import reviews from '../api/reviews.json'
export const Testimonial = () => {

  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % reviews.length);
  const prev = () => setIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));

  useEffect(() => {
    const timer = setInterval(next, 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full min-h-screen flex items-center bg-zinc-950 py-32 px-6 overflow-hidden">
      
      
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.02] pointer-events-none">
        <h2 className="text-[30vw] font-black leading-none select-none">VOICE</h2>
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          
          <div className="lg:col-span-5 flex flex-col items-center lg:items-start text-center lg:text-left">
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-yellow-500 font-mono tracking-[0.4em] text-xs uppercase mb-6"
            >
              Testimonials // Proof of Value
            </motion.span>
            
            <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tighter leading-tight mb-8">
              Words from <br /> 
              <span className="bg-gradient-to-r from-yellow-200 to-yellow-600 bg-clip-text text-transparent">The Core.</span>
            </h2>

    
            <div className="flex gap-4 mt-4">
              <button 
                onClick={prev}
                className="group w-14 h-14 rounded-full border border-white/10 flex items-center justify-center hover:border-yellow-500 transition-all duration-500"
              >
                <ArrowLeft className="text-zinc-500 group-hover:text-yellow-500 transition-colors" />
              </button>
              <button 
                onClick={next}
                className="group w-14 h-14 rounded-full border border-white/10 flex items-center justify-center hover:border-yellow-500 transition-all duration-500"
              >
                <ArrowRight className="text-zinc-500 group-hover:text-yellow-500 transition-colors" />
              </button>
            </div>
            
       
            <div className="flex gap-2 mt-10">
              {reviews.map((_, i) => (
                <div 
                  key={i} 
                  className={`h-1 transition-all duration-500 rounded-full ${i === index ? 'w-8 bg-yellow-500' : 'w-2 bg-zinc-800'}`}
                />
              ))}
            </div>
          </div>

        
          <div className="lg:col-span-7 relative min-h-[400px] flex items-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50, filter: "blur(10px)" }}
                animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, x: -50, filter: "blur(10px)" }}
                transition={{ duration: 0.6, ease: "circOut" }}
                className="relative"
              >
                <QuoteIcon className="w-20 h-20 text-yellow-500/10 absolute -top-12 -left-12" />
                
                <p className="text-2xl md:text-4xl font-medium text-zinc-100 leading-snug tracking-tight italic">
                  &ldquo;{reviews[index].experience}&rdquo;
                </p>

                <div className="mt-12 flex items-center gap-6">
                  <div className="w-16 h-[1px] bg-yellow-500/50" />
                  <div>
                    <h4 className="text-xl font-bold text-white tracking-wide">
                      {reviews[index].name}
                    </h4>
                    <p className="text-yellow-500/60 font-mono text-xs uppercase tracking-widest mt-1">
                      {reviews[index].designation}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

     
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] pointer-events-none" />
    </section>
  );
};