import { Sparkles, Zap, Shield, Rocket, Network, Award } from "lucide-react";

export function BenefitsSection() {
  const benefits = [
    {
      icon: Sparkles,
      title: "Curated Network",
      description: "Connect with vetted founders across industries and stages"
    },
    {
      icon: Zap,
      title: "Fast-Track Growth",
      description: "Accelerate your journey with proven frameworks and insights"
    },
    {
      icon: Shield,
      title: "Safe Space",
      description: "Share challenges openly in a confidential environment"
    },
    {
      icon: Rocket,
      title: "Launch Support",
      description: "Get early feedback and support for your next big move"
    },
    {
      icon: Network,
      title: "Strategic Partnerships",
      description: "Discover collaboration opportunities with fellow founders"
    },
    {
      icon: Award,
      title: "Exclusive Resources",
      description: "Access tools, templates, and resources built by founders"
    }
  ];

  return (
    <section className="bg-black py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-[#d4a574] tracking-widest text-sm mb-4">WHAT YOU GET</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">Built for Your Success</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] border border-white/10 rounded-xl p-6 hover:border-[#d4a574]/50 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-lg bg-[#d4a574]/10 flex items-center justify-center mb-4 group-hover:bg-[#d4a574]/20 transition-colors">
                  <Icon className="w-6 h-6 text-[#d4a574]" />
                </div>
                <h3 className="text-white font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{benefit.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
