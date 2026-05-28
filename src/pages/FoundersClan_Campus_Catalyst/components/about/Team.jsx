import { UserCircle2 } from "lucide-react";

export function Team() {
  const teamMembers = [
    {
      name: "Nishant Kumar",
      role: "Founder & CEO",
      bio: "Serial entrepreneur with 3 successful exits. Passionate about building communities."
    },
    {
      name: "Sarah Chen",
      role: "Head of Community",
      bio: "Former VP at a unicorn startup. Expert in scaling founder networks globally."
    },
    {
      name: "Marcus Rodriguez",
      role: "Head of Partnerships",
      bio: "20+ years in venture capital. Connecting founders with opportunities."
    },
    {
      name: "Priya Sharma",
      role: "Director of Programs",
      bio: "Built accelerator programs for 500+ startups. Loves mentoring new founders."
    }
  ];

  return (
    <section className="bg-black py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-[#d4a574] tracking-widest text-sm mb-4">OUR TEAM</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Meet the Founders
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] border border-white/10 rounded-xl p-6 hover:border-[#d4a574]/30 transition-all duration-300 text-center"
            >
              <div className="w-24 h-24 bg-gradient-to-br from-[#d4a574] to-[#b8895f] rounded-full flex items-center justify-center mx-auto mb-4">
                <UserCircle2 className="w-16 h-16 text-black" />
              </div>
              <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
              <p className="text-[#d4a574] text-sm mb-4 tracking-wide">{member.role}</p>
              <p className="text-gray-400 text-sm leading-relaxed">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
