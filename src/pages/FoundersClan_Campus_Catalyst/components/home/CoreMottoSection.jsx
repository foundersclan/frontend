import { Users, Target, TrendingUp, Plus } from "lucide-react";

export function CoreMottoSection() {
  const values = [
    {
      icon: Users,
      title: "Exclusive Community",
      description: "Building with hand-picked founders who share your vision"
    },
    {
      icon: Target,
      title: "Direct Mentorship",
      description: "Get access to experienced founders who've been where you are"
    },
    {
      icon: TrendingUp,
      title: "Collaborative Scaling",
      description: "Grow together through shared resources and opportunities"
    }
  ];

  return (
    <section className="bg-black py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="border border-white/10 rounded-3xl p-12 bg-gradient-to-br from-[#0a0a0a] to-black relative overflow-hidden">
          {/* Decorative star */}
          <div className="absolute top-8 right-8 w-20 h-20 flex items-center justify-center">
            <Plus className="w-16 h-16 text-[#d4a574] rotate-45" strokeWidth={1.5} />
          </div>

          <div className="mb-12">
            <p className="text-[#d4a574] tracking-widest text-sm mb-2">OUR CORE MOTTO</p>
            <h2 className="text-5xl md:text-6xl font-bold text-white">GIVE FIRST.</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="space-y-4">
                  <div className="w-12 h-12 rounded-full bg-[#d4a574]/10 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-[#d4a574]" />
                  </div>
                  <h3 className="text-white font-semibold text-lg">{value.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
