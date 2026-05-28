import { Heart, Lightbulb, Users, TrendingUp } from "lucide-react";

export function Values() {
  const values = [
    {
      icon: Heart,
      title: "Give First",
      description: "We lead with generosity. Share knowledge, make intros, offer help—without expecting anything in return."
    },
    {
      icon: Lightbulb,
      title: "Learn Together",
      description: "Every founder has unique insights. We create spaces where knowledge flows freely and everyone grows."
    },
    {
      icon: Users,
      title: "Build Community",
      description: "Relationships over transactions. We invest in genuine connections that last beyond business deals."
    },
    {
      icon: TrendingUp,
      title: "Scale With Intention",
      description: "Growth matters, but not at the expense of our values. We scale sustainably and inclusively."
    }
  ];

  return (
    <section className="bg-black py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-[#d4a574] tracking-widest text-sm mb-4">OUR VALUES</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            What We Stand For
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div
                key={index}
                className="bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] border border-white/10 rounded-xl p-6 hover:border-[#d4a574]/30 transition-all duration-300"
              >
                <div className="w-14 h-14 bg-[#d4a574]/10 rounded-xl flex items-center justify-center mb-6">
                  <Icon className="w-7 h-7 text-[#d4a574]" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                <p className="text-gray-400 leading-relaxed">{value.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
