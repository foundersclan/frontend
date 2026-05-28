import { UserCircle2 } from "lucide-react";

export function TestimonialSection() {
  return (
    <section className="bg-black py-20 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">
        {/* Testimonial Card */}
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-[#d4a574] to-[#b8895f] flex items-center justify-center">
              <UserCircle2 className="w-10 h-10 text-black" />
            </div>
            <div>
              <h3 className="text-white font-semibold">Nishant</h3>
              <p className="text-[#d4a574] text-sm tracking-wider">FOUNDER & CEO</p>
            </div>
          </div>

          <div className="relative pl-6 border-l-2 border-[#d4a574]/30">
            <div className="text-4xl text-[#d4a574]/40 absolute -left-2 -top-2">"</div>
            <p className="text-gray-300 italic leading-relaxed">
              I didn't start this community because I had all the answers—I started it because I was tired of searching for them alone.
            </p>
          </div>
        </div>

        {/* Struggle Card */}
        <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] border border-white/10 rounded-2xl p-8">
          <h3 className="text-white font-semibold mb-4 tracking-wide">THE STRUGGLE IS REAL</h3>
          <p className="text-gray-400 leading-relaxed">
            Building alone isn't enough. Building in a vacuum is the fastest way to burn out. We were tired of searching for answers alone, so we built the bridge ourselves.
          </p>
        </div>
      </div>
    </section>
  );
}
