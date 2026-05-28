import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export function CTASection() {
  return (
    <section className="bg-black py-32 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <div className="bg-gradient-to-br from-[#d4a574] to-[#b8895f] rounded-3xl p-12 md:p-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Ready to Build Together?
          </h2>
          <p className="text-black/80 text-lg mb-8 max-w-2xl mx-auto">
            Join a community of ambitious founders who believe in giving first and growing together.
          </p>
          <Link
            to="/apply"
            className="bg-black text-white px-8 py-4 rounded-full font-semibold hover:bg-black/90 transition-all duration-300 inline-flex items-center gap-2 group"
          >
            Apply to Join
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
