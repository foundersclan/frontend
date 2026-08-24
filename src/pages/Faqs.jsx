import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Plus, Minus, ArrowDown } from "lucide-react";
import { useNavigate } from "react-router-dom";


/* eslint-disable react/prop-types */
export const Faqs = ({ onButtonClick }) => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    if (onButtonClick) {
      onButtonClick();
    } else {
      navigate("/support", { state: { scrollToContact: true } });
    }
  };

  const faqsData = [
    { id: 1, question: "What is the primary focus of the clan?", answer: "We focus on accelerating early-stage founders by providing expert mentorship, actionable resources, and a strong peer-to-peer network." },
    { id: 2, question: "How often are the networking events held?", answer: "Networking events, both virtual and in-person, featuring key industry speakers and investor pitch opportunities." },
    {
      id: 3, question: "Is there a cost to join the clan?", answer: "No, right now there are no charges Or subscription fee for a limited slots"
    },
    { id: 4, question: "Do you offer direct investment opportunities?", answer: "We provide direct access to a syndicate of VCs and angel investors who frequently attend and sponsor our private events." },
    { id: 5, question: "What is the typical size of a founding team in the clan?", answer: "Our community primarily supports teams of 1-5 members, focusing on pre-seed and seed-stage companies." },
  ];

  const [activeItem, setActiveItem] = useState(null);

  return (
    <section className="bg-zinc-950 overflow-hidden py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto w-full">


        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 mb-16 sm:mb-20 lg:mb-24 items-start lg:items-end">
          <div className="md:col-span-8">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="flex items-center gap-3 text-yellow-500 font-mono text-[10px] sm:text-xs tracking-[0.25em] sm:tracking-[0.4em] uppercase mb-4"
            >
              <span className="w-8 h-px bg-yellow-500" /> Curated Support // FAQ
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[0.95] tracking-tight font-bold text-white"
            >
              YOU HAVE <br />
              <span className="text-zinc-700">QUESTIONS.</span>
            </motion.h2>
          </div>
          <div className="md:col-span-4">
            <p className="text-zinc-500 text-base sm:text-lg leading-relaxed border-t lg:border-t-0 lg:border-l border-yellow-500/30 pt-6 lg:pt-0 lg:pl-6">
              Everything you need to know about the architecture of our exclusive founder community.
            </p>
          </div>
        </div>


        <div className="mt-12">
          {faqsData.map((faq, i) => {
            const isActive = activeItem === faq.id;
            return (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="border-t border-zinc-800 last:border-b"
              >
                <button
                  onClick={() => setActiveItem(isActive ? null : faq.id)}
                  className="w-full py-5 sm:py-6 lg:py-8 flex items-center justify-between gap-4 text-left group transition-all"
                >
                  <span className={`text-lg sm:text-xl md:text-2xl leading-snug font-bold transition-colors duration-500 ${isActive ? 'text-yellow-500' : 'text-zinc-300 group-hover:text-white'}`}>
                    {faq.question}
                  </span>

                  <div className={`p-1.5 sm:p-2 rounded-full transition-all duration-500 ${isActive ? 'bg-yellow-500 text-black rotate-180' : 'bg-zinc-900 text-zinc-500 group-hover:text-white'}`}>
                    {isActive ? <Minus className="w-4 h-4 sm:w-5 sm:h-5" /> : <Plus className="w-4 h-4 sm:w-5 sm:h-5" />}
                  </div>
                </button>

                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="pb-6 sm:pb-8 lg:pb-10 pr-0 sm:pr-6 lg:pr-12">
                        <p className="text-zinc-400 text-base sm:text-lg md:text-xl leading-relaxed max-w-3xl">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>


        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-16 sm:mt-20 flex flex-col items-center text-center p-6 sm:p-8 md:p-10 lg:p-12 bg-zinc-900/50 rounded-2xl lg:rounded-3xl border border-white/5 text-base sm:text-lg lg:text-xl"
        >
          <p className="text-zinc-400 mb-6">Still have a specific inquiry?</p>
          <button onClick={handleButtonClick} >
            <h1 className="px-5 sm:px-6 lg:px-8 py-3 sm:py-4 flex items-center gap-3 text-zinc-200 font-black uppercase tracking-[0.15em] sm:tracking-widest transition-colors duration-300 hover:text-yellow-500">
              Fill out the form below <ArrowDown />
            </h1>
          </button>
        </motion.div>
      </div>
    </section>
  );
};