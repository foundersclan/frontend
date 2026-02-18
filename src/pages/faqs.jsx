import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Plus, Minus } from "lucide-react";

export const Faqs = () => {
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
    <section className="bg-zinc-950 py-32 px-6 overflow-hidden">
      <div className="max-w-5xl mx-auto">


        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-20 items-end">
          <div className="md:col-span-8">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-yellow-500 font-mono tracking-[0.4em] text-xs uppercase mb-4 block"
            >
              Curated Support // FAQ
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-bold text-white tracking-tighter leading-none"
            >
              YOU HAVE <br />
              <span className="text-zinc-700">QUESTIONS.</span>
            </motion.h2>
          </div>
          <div className="md:col-span-4">
            <p className="text-zinc-500 text-lg border-l border-yellow-500/30 pl-6">
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
                  className="w-full py-8 flex items-center justify-between text-left group transition-all"
                >
                  <span className={`text-xl md:text-2xl font-bold transition-colors duration-500 ${isActive ? 'text-yellow-500' : 'text-zinc-300 group-hover:text-white'}`}>
                    {faq.question}
                  </span>

                  <div className={`p-2 rounded-full transition-all duration-500 ${isActive ? 'bg-yellow-500 text-black rotate-180' : 'bg-zinc-900 text-zinc-500 group-hover:text-white'}`}>
                    {isActive ? <Minus size={20} /> : <Plus size={20} />}
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
                      <div className="pb-10 pr-12">
                        <p className="text-zinc-400 text-lg md:text-xl leading-relaxed max-w-3xl">
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
          className="mt-20 flex flex-col items-center p-12 bg-zinc-900/50 rounded-3xl border border-white/5 text-center"
        >
          <p className="text-zinc-400 mb-6">Still have a specific inquiry?</p>
          <button className="px-8 py-4 bg-white text-black font-black uppercase tracking-widest text-xs hover:bg-yellow-500 transition-colors duration-300">
            Contact Concierge
          </button>
        </motion.div>
      </div>
    </section>
  );
};