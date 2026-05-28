import { useState } from "react";
import { ChevronDown } from "lucide-react";

export function PricingFAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "Can I switch plans later?",
      answer: "Absolutely! You can upgrade or downgrade your membership at any time. Changes take effect at the start of your next billing cycle."
    },
    {
      question: "Is there a commitment period?",
      answer: "No long-term contracts. All paid memberships are month-to-month, and you can cancel anytime. We believe in earning your membership every month."
    },
    {
      question: "What's included in mentorship sessions?",
      answer: "1-on-1 mentorship sessions connect you with experienced founders who've scaled successful companies. Sessions cover strategy, fundraising, team building, product development, and more."
    },
    {
      question: "How does the application process work?",
      answer: "Submit your application through our form. We review all applications within 48 hours. We're looking for founders who are committed to giving back and growing together."
    },
    {
      question: "Do you offer refunds?",
      answer: "We offer a 30-day money-back guarantee on all paid plans. If you're not satisfied within the first month, we'll issue a full refund, no questions asked."
    },
    {
      question: "Can companies join, or just individuals?",
      answer: "Memberships are individual-based, but we offer team discounts for companies with multiple founders. Contact us for custom team pricing."
    }
  ];

  return (
    <section className="bg-black py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-[#d4a574] tracking-widest text-sm mb-4">FAQ</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Common Questions
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] border border-white/10 rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
              >
                <span className="text-white font-semibold pr-4">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-[#d4a574] flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`transition-all duration-300 overflow-hidden ${
                  openIndex === index ? "max-h-96" : "max-h-0"
                }`}
              >
                <div className="px-6 pb-5 text-gray-400 leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
