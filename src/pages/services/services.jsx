import React from 'react';
import { motion } from 'framer-motion';
import {
  Rocket, Briefcase, Crown, Terminal,
  Users, TrendingUp, ArrowRight, Shield
} from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    title: "Tactical Marketing",
    desc: "Aggressive growth strategies and performance marketing designed to capture market share.",
    icon: <Rocket className="w-6 h-6" />,
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop",
    tag: "Growth"
  },
  {
    title: "Business Consultancy",
    desc: "Structural architecture for scaling operations from local startups to global institutions.",
    icon: <Briefcase className="w-6 h-6" />,
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop",
    tag: "Strategy"
  },
  {
    title: "Brand Sovereignty",
    desc: "Crafting a visual and narrative identity that commands respect and ensures market recognition.",
    icon: <Crown className="w-6 h-6" />,
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1974&auto=format&fit=crop",
    tag: "Identity"
  },
  {
    title: "Tech Infrastructure",
    desc: "Custom software architecture and AI integration to automate your path to the top.",
    icon: <Terminal className="w-6 h-6" />,
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop",
    tag: "DevOps"
  },
  {
    title: "Elite Hiring",
    desc: "Acquiring the top 1% of talent to build a team that functions with military-grade precision.",
    icon: <Users className="w-6 h-6" />,
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2048&auto=format&fit=crop",
    tag: "Talent"
  },
  {
    title: "Operational Command",
    desc: "Full-stack business management and crisis protocol for established founders.",
    icon: <Shield className="w-6 h-6" />,
    image: "https://images.unsplash.com/photo-1454165833767-027ffea9e778?q=80&w=2070&auto=format&fit=crop",
    tag: "Management"
  }
];

export const Services = () => {
  return (
    <div className="bg-[#050505] text-white min-h-screen font-sans selection:bg-yellow-500 selection:text-black">

      {/* 1. CINEMATIC HERO */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-yellow-500/5 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.span
            initial={{ opacity: 0, letterSpacing: "0.2em" }}
            animate={{ opacity: 1, letterSpacing: "0.5em" }}
            className="text-yellow-500 text-[10px] font-mono uppercase font-black mb-6 block"
          >
            Operational Protocols
          </motion.span>
          <h1 className="text-6xl md:text-9xl font-black tracking-tighter mb-8 uppercase  leading-none">
            ENGAGE <span className="text-transparent bg-clip-text bg-gradient-to-b from-yellow-200 to-yellow-600">TACTICS</span>
          </h1>
          <p className="max-white/60 text-zinc-500 max-w-2xl mx-auto text-lg font-light">
            We don't provide "services." We deploy assets. Choose your sector to begin the integration process.
          </p>
        </div>
      </section>

      {/* 2. SERVICES GRID */}
      <section className="max-w-7xl mx-auto px-6 pb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative h-[450px] rounded-[2rem] overflow-hidden border border-zinc-800 bg-zinc-900/40 backdrop-blur-sm"
            >
              {/* Realistic Background Image */}
              <div className="absolute inset-0 z-0">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover opacity-30 grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/80 to-transparent" />
              </div>

              {/* Content Container */}
              <div className="relative z-10 h-full p-10 flex flex-col justify-between items-start">
                <div className="flex justify-between w-full items-start">
                  <div className="p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-2xl text-yellow-500 group-hover:bg-yellow-500 group-hover:text-black transition-all duration-500">
                    {service.icon}
                  </div>
                  <span className="text-[10px] font-mono font-bold text-zinc-500 uppercase tracking-widest bg-black/40 px-3 py-1 rounded-full border border-zinc-800">
                    {service.tag}
                  </span>
                </div>

                <div>
                  <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-yellow-500 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-zinc-400 text-sm leading-relaxed mb-6 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                    {service.desc}
                  </p>
                  <Link
                    to="/request-invitation"
                    className="inline-flex items-center gap-2 text-white font-black text-[10px] uppercase tracking-[0.2em] group/btn"
                  >
                    Initiate Protocol <ArrowRight size={14} className="group-hover/btn:translate-x-2 transition-transform" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. CTA: READY FOR ACTIVATION */}
      <section className="max-w-5xl mx-auto px-6 pb-40">
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="relative rounded-[3rem] p-12 md:p-24 overflow-hidden border border-yellow-500/30 bg-gradient-to-br from-zinc-900 to-black text-center"
        >
          {/* Subtle animated background for CTA */}
          {/* <div className="absolute inset-0 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" /> */}

          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter uppercase">
              READY FOR <br /> <span className="italic text-yellow-500">ACTIVATION?</span>
            </h2>
            <p className="text-zinc-400 max-w-lg mx-auto mb-12 text-lg font-light">
              Limited bandwidth available. We only accept founders who are prepared for radical expansion.
            </p>
            <Link to="/request-invitation">
              <motion.button
                whileHover={{ boxShadow: "0 0 30px rgba(234,179,8,0.3)" }}
                whileTap={{ scale: 0.95 }}
                className="px-16 py-6 bg-yellow-500 text-black font-black uppercase tracking-[0.3em] text-xs rounded-2xl transition-all"
              >
                Apply for Sovereignty
              </motion.button>
            </Link>
          </div>

          {/* Decorative Corner Marks */}
          <div className="absolute top-8 left-8 w-12 h-12 border-t-2 border-l-2 border-yellow-500/20" />
          <div className="absolute bottom-8 right-8 w-12 h-12 border-b-2 border-r-2 border-yellow-500/20" />
        </motion.div>
      </section>

    </div>
  );
};