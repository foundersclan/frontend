import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export function HeroSection() {
  return (
    <section className="min-h-screen bg-black pt-32 pb-20 px-6 flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        <div className="text-[#d4a574] italic mb-12">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold leading-tight mb-2">
            BUILT BY
          </h1>
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold leading-tight mb-2">
            FOUNDERS,
          </h1>
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold leading-tight">
            FOR FOUNDERS.
          </h1>
        </div>

        <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mb-12">
          Join an exclusive community where ambitious founders collaborate, learn, and scale together.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            to="/apply"
            className="bg-[#d4a574] text-black px-8 py-4 rounded-full font-semibold hover:bg-[#b8895f] transition-all duration-300 inline-flex items-center justify-center gap-2 group"
          >
            Join the Clan
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            to="/pricing"
            className="border border-white/20 text-white px-8 py-4 rounded-full font-semibold hover:border-[#d4a574] hover:text-[#d4a574] transition-all duration-300 inline-flex items-center justify-center"
          >
            View Pricing
          </Link>
        </div>
      </div>
    </section>
  );
}
