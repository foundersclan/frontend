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
    <section className="relative w-full min-h-screen flex items-center bg-zinc-950 overflow-hidden py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8">


      <div className="absolute inset-0 flex items-center justify-center opacity-[0.02] pointer-events-none">
        <h2 className="text-[38vw] sm:text-[32vw] md:text-[26vw] lg:text-[20vw] xl:text-[18vw] font-black leading-none select-none">VOICE</h2>
      </div>

      <div className="max-w-7xl mx-auto w-full px-2 sm:px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-16 items-center">


          <div className="lg:col-span-5 flex flex-col items-center lg:items-start text-center lg:text-left order-1">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="flex items-center gap-3 text-yellow-500 font-mono tracking-[0.25em] sm:tracking-[0.4em] text-[10px] sm:text-xs uppercase mb-6"
            >
              <span className="w-8 h-px bg-yellow-500" /> Testimonials // Proof of Value
            </motion.span>

            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tighter leading-[0.95] mb-8">
              Words from <br />
              <span className="bg-gradient-to-r from-yellow-200 to-yellow-600 bg-clip-text text-transparent">The Core.</span>
            </h2>


            <div className="flex gap-4 mt-4">
              <button
                onClick={prev}
                className="group w-11 h-11 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full border border-white/10 flex items-center justify-center hover:border-yellow-500 transition-all duration-500"
              >
                <ArrowLeft className="text-zinc-500 group-hover:text-yellow-500 transition-colors" />
              </button>
              <button
                onClick={next}
                className="group w-11 h-11 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full border border-white/10 flex items-center justify-center hover:border-yellow-500 transition-all duration-500"
              >
                <ArrowRight className="text-zinc-500 group-hover:text-yellow-500 transition-colors" />
              </button>
            </div>


            <div className="flex gap-2 mt-6 sm:mt-8 lg:mt-10">
              {reviews.map((_, i) => (
                <div
                  key={i}
                  className={`h-1 transition-all duration-500 rounded-full ${i === index ? 'w-8 bg-yellow-500' : 'w-2 bg-zinc-800'}`}
                />
              ))}
            </div>
          </div>


          <div className="lg:col-span-7 relative flex items-center min-h-[260px] sm:min-h-[320px] md:min-h-[400px] order-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50, filter: "blur(10px)" }}
                animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, x: -50, filter: "blur(10px)" }}
                transition={{ duration: 0.6, ease: "circOut" }}
                className="relative"
              >
                <QuoteIcon className="text-yellow-500/10 absolute w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 -top-6 -left-2 sm:-top-8 sm:-left-6 md:-top-12 md:-left-12" />

                <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-relaxed sm:leading-snug font-medium text-zinc-100 tracking-tight italic">
                  &ldquo;{reviews[index].experience}&rdquo;
                </p>

                <div className="mt-8 sm:mt-10 md:mt-12 flex items-center gap-6">
                  <div className="w-10 sm:w-12 md:w-16 h-[1px] bg-yellow-500/50" />
                  <div className="flex flex-row gap-4 md:gap-8">
                    <img src={reviews[index].image} alt={reviews[index].name} className="h-18 w-16 rounded-full border" />
                    <h4 className="text-lg sm:text-xl font-bold text-white tracking-wide mt-6">
                      {reviews[index].name}
                    </h4>
                    <p className="text-yellow-500/60 font-mono text-[10px] sm:text-xs uppercase tracking-widest mt-6 md:mt-8">
                      {reviews[index].designation}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>


      {/* <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] pointer-events-none" /> */}
    </section>
  );
};