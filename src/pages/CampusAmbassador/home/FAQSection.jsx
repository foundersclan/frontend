import { useState } from "react";
import { ChevronDown, HelpCircle, MessagesSquare } from "lucide-react";
import AnnoucementFaq from "/assets/AnnoucementFaq.svg";
import { AnimatePresence, motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const faqData = [
  {
    question: "Who all are eligible?",
    answer:
      "The community is explicitly curated for high-signal campus leaders, technical builders, and early-stage startup founders who are actively building or orchestrating technical ecosystems.",
  },
  {
    question: "Can I apply if I’m already part of other campus clubs?",
    answer:
      "Absolutely. We view our network as a sovereign layer that supercharges your execution capacity. We don't demand exclusivity, we demand high-caliber action.",
  },
  {
    question: "Will this help in my placements or internships?",
    answer:
      "Yes! The hyper-accelerated leadership experience, verifiable execution credentials, and Founder's network of elite recruiters give your profile a massive competitive edge.",
  },
  {
    question: "Do I need prior experience to apply?",
    answer:
      "Prior domain mastery is highly valued, but we weigh velocity and raw execution capability above a stagnant pedigree. Prove to us that you can ship features or run high-stakes events.",
  },
  {
    question: "What kind of events do we need to host?",
    answer:
      "You will architect technical hackathons, sovereign pitch arenas, founder mixers, and high-stakes builder sprints backed by global resources.",
  },
  {
    question: "Do I have to form a team, or can I apply solo?",
    answer:
      "Initial applications are fully independent. Once you clear the vetting process, you will be deeply integrated into regional operational node clusters with other top-tier builders.",
  },
  {
    question: "I have more questions. Who can I reach out to?",
    answer:
      "Our core operator dispatch is available 24/7. You can ping the triage channel inside the community portal or fire an dispatch wire directly to our ecosystem lead.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(2);
  const navigate = useNavigate();


  return (
    <section className="relative w-full text-white font-sans overflow-hidden py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="relative max-w-7xl mx-auto bg-[#4c454537] rounded-3xl lg:rounded-[36px] border border-white/5 px-5 py-8 sm:px-8 sm:py-10 lg:px-10 lg:py-14 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start z-10 hover:border-white/10">
        <div className="absolute top-1/5 -left-40 -translate-y-1/2 h-48 w-48 sm:h-72 sm:w-72 lg:h-[450px] lg:w-[450px] bg-amber-500/8 rounded-full blur-[50px] pointer-events-none animate-pulse" />
        <div className="absolute -bottom-10 -right-20 h-40 w-40 sm:h-56 sm:w-56 lg:h-[350px] lg:w-[350px] bg-purple-600/10 rounded-[70px] blur-[60px] pointer-events-none animate-pulse" />
        <img
          src={AnnoucementFaq}
          alt="AnnoucementFaq.svg"
          aria-hidden="true"
          loading="lazy"
          className="absolute   -top-[30%] -left-[30%] w-36 md:w-[60%] md:h-[60%] z-0"
        />
        {/* LEFT COLUMN: Visual Brand Accent & Header (Corresponds to Left Column in image_f492e0.png) */}
        <div className="lg:col-span-5 flex flex-col space-y-6 lg:space-y-8 lg:sticky lg:top-8">
          <div>
            <h2 className="font-black tracking-tighter text-3xl sm:text-5xl lg:text-6xl max-w-md leading-[0.95] text-white text-center lg:text-left">
              FREQUENTLY <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-zinc-200 via-white to-zinc-500">
                ASKED INFO.
              </span>
            </h2>
          </div>

          {/* Premium Glassmorphic Visual Container*/}
          <div className="relative group w-full min-h-[280px] sm:min-h-[300px] lg:aspect-[4/3] rounded-[28px] border border-white/10 bg-zinc-950/40 backdrop-blur-xl p-5 sm:p-6 lg:p-8 flex flex-col overflow-hidden shadow-2xl">
            {/* Ambient Corner Light Streak */}
            <div className="absolute -top-px left-10 right-10 h-px bg-gradient-to-r from-transparent via-amber-400/20 to-transparent" />

            <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
              <HelpCircle className="w-5 w-5 sm:w-6 h-6 animate-pulse" />
            </div>

            <div >
              <h4 className="text-xl font-black tracking-tight text-white mt-4 mb-2 uppercase">
                Still have friction?
              </h4>
              <p className="text-sm text-zinc-400 leading-relaxed max-w-sm">
                Get zero-latency clearance straight from our core community.
              </p>
            </div>

            <div className="mt-auto">
              <button
                onClick={() => navigate("/support", { state: { scrollToContact: true } })}
                className="w-full mt-4 py-3 text-xs sm:text-sm bg-zinc-900 hover:bg-zinc-850 border border-white/10 rounded-xl font-bold text-xs tracking-wider uppercase transition-all duration-300 flex items-center justify-center gap-2 group-hover:border-amber-400/30"
              >
                <MessagesSquare className="w-4 h-4 text-zinc-400 group-hover:text-amber-400" />
                Contact Support
              </button>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Premium Interactive Accordion List (Corresponds to Right Accordions in image_f492e0.png) */}
        <div className="lg:col-span-7 space-y-4">
          {faqData.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`group relative rounded-[24px] border transition-all duration-300 overflow-hidden ${isOpen
                  ? "bg-zinc-900/90 border-amber-400/30 shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
                  : "bg-zinc-950/40 border-white/5 hover:border-white/10"
                  }`}
              >
                {/* Active Ambient Inner Glow Overlay */}
                {isOpen && (
                  <div className="absolute top-0 left-0 w-32 h-32 bg-amber-500/5 rounded-full blur-xl pointer-events-none" />
                )}

                {/* Accordion Trigger Header */}
                <button
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className="w-full flex items-center justify-between p-6 text-left cursor-pointer transition-colors duration-200"
                >
                  <span
                    className={`text-sm sm:text-base font-bold tracking-tight pr-4 transition-colors duration-200 ${isOpen
                      ? "text-amber-400"
                      : "text-zinc-200 group-hover:text-white"
                      }`}
                  >
                    {faq.question}
                  </span>

                  <div
                    className={`p-1.5 rounded-xl border transition-all duration-300 flex items-center justify-center ${isOpen
                      ? "bg-amber-500/10 border-amber-500/30 text-amber-400 rotate-180"
                      : "bg-zinc-900 border-white/5 text-zinc-400 group-hover:text-zinc-200"
                      }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {/* Expanding Content Container */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
                    >
                      <div className="px-4 pb-4 sm:px-6 sm:pb-6 pt-1 text-sm text-zinc-400">
                        {faq.answer}
                      </div>
                    </motion.div>)}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
