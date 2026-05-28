import { Check, Star } from "lucide-react";
import { Link } from "react-router-dom";

export function PricingTiers() {
  const tiers = [
    {
      name: "Explorer",
      price: "Free",
      period: "Forever",
      description: "Perfect for founders starting their journey",
      features: [
        "Access to community forums",
        "Monthly newsletter",
        "Public event access",
        "Resource library",
        "Networking opportunities"
      ],
      cta: "Get Started",
      highlighted: false
    },
    {
      name: "Builder",
      price: "$99",
      period: "per month",
      description: "For founders ready to scale and grow",
      features: [
        "Everything in Explorer",
        "1-on-1 mentorship sessions",
        "Exclusive workshops",
        "Priority support",
        "Private community channels",
        "Early access to events",
        "Collaboration opportunities"
      ],
      cta: "Start Building",
      highlighted: true
    },
    {
      name: "Visionary",
      price: "$299",
      period: "per month",
      description: "For established founders seeking elite networks",
      features: [
        "Everything in Builder",
        "Unlimited mentorship",
        "Executive roundtables",
        "Investment connections",
        "Strategic partnerships",
        "Personal brand building",
        "VIP event access",
        "Custom growth plan"
      ],
      cta: "Go Visionary",
      highlighted: false
    }
  ];

  return (
    <section className="bg-black py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          {tiers.map((tier, index) => (
            <div
              key={index}
              className={`relative rounded-2xl p-8 transition-all duration-300 ${
                tier.highlighted
                  ? "bg-gradient-to-br from-[#d4a574] to-[#b8895f] scale-105 shadow-2xl shadow-[#d4a574]/20"
                  : "bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] border border-white/10 hover:border-[#d4a574]/30"
              }`}
            >
              {tier.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-black text-[#d4a574] px-4 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                  <Star size={14} fill="currentColor" />
                  Most Popular
                </div>
              )}

              <div className="mb-6">
                <h3
                  className={`text-2xl font-bold mb-2 ${
                    tier.highlighted ? "text-black" : "text-white"
                  }`}
                >
                  {tier.name}
                </h3>
                <p
                  className={`text-sm mb-6 ${
                    tier.highlighted ? "text-black/70" : "text-gray-400"
                  }`}
                >
                  {tier.description}
                </p>
                <div className="flex items-end gap-2">
                  <span
                    className={`text-5xl font-bold ${
                      tier.highlighted ? "text-black" : "text-white"
                    }`}
                  >
                    {tier.price}
                  </span>
                  <span
                    className={`text-sm mb-2 ${
                      tier.highlighted ? "text-black/70" : "text-gray-400"
                    }`}
                  >
                    {tier.period}
                  </span>
                </div>
              </div>

              <Link
                to="/apply"
                className={`block w-full py-3 rounded-full font-semibold text-center mb-8 transition-all duration-300 ${
                  tier.highlighted
                    ? "bg-black text-white hover:bg-black/90"
                    : "bg-[#d4a574] text-black hover:bg-[#b8895f]"
                }`}
              >
                {tier.cta}
              </Link>

              <ul className="space-y-4">
                {tier.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className={`flex items-start gap-3 ${
                      tier.highlighted ? "text-black" : "text-gray-300"
                    }`}
                  >
                    <Check
                      className={`w-5 h-5 mt-0.5 flex-shrink-0 ${
                        tier.highlighted ? "text-black" : "text-[#d4a574]"
                      }`}
                    />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
