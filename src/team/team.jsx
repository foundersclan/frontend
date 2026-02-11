import React from 'react';
import { motion } from 'framer-motion';

const Team = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  const managers = [
    { name: "Alex Rivers", role: "Chief Visionary", bio: "Sculpting the next decade of decentralized leadership and venture connectivity.", image: "assets/nishant.png" },
    { name: "Sarah Chen", role: "Operations Lead", bio: "Orchestrating complex ecosystems for the world's most ambitious founders.", image: "assets/muskan2.png" }
  ];

  const team = [
    { name: "Marcus Thorne", role: "Tech Architect", image: "https://i.pravatar.cc/200?u=marcus" },
    { name: "Elena Rodriguez", role: "Community Manager", image: "https://i.pravatar.cc/200?u=elena" },
    { name: "Julian Vane", role: "Partnership Lead", image: "https://i.pravatar.cc/200?u=julian" },
    { name: "Sasha Kim", role: "Event Curator", image: "https://i.pravatar.cc/200?u=sasha" }
  ];

  return (
    <div className="relative bg-[#050505] text-slate-100 min-h-screen font-sans overflow-hidden">
      {/* 🌌 Luxury Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-amber-500/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[10%] right-[-5%] w-[30%] h-[30%] bg-amber-600/5 blur-[100px] rounded-full" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 pointer-events-none"></div>
      </div>

      {/* Hero Section */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="relative pt-40 pb-20 px-6 text-center"
      >
        <motion.span 
          initial={{ opacity: 0, tracking: "0.1em" }}
          animate={{ opacity: 1, tracking: "0.5em" }}
          className="text-amber-500 text-xs font-bold uppercase mb-4 block"
        >
          Established MMXXIV
        </motion.span>
        <h1 className="text-6xl md:text-9xl font-black mb-8 tracking-tighter leading-none">
          THE <span className="text-transparent bg-clip-text bg-gradient-to-b from-amber-200 to-amber-600">CLAN.</span>
        </h1>
        <p className="max-w-xl mx-auto text-slate-500 text-lg font-light leading-relaxed">
          Where the world's most disruptive minds converge to build legacies, not just companies.
        </p>
      </motion.section>

      {/* Vision/Mission Glass Cards */}
      <motion.section 
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-6xl mx-auto py-20 px-6 grid md:grid-cols-2 gap-6"
      >
        {['The Vision', 'The Mission'].map((title, idx) => (
          <motion.div 
            key={idx}
            variants={fadeInUp}
            className="relative group p-12 rounded-[2.5rem] bg-gradient-to-br from-zinc-900/40 to-zinc-950/80 border border-zinc-800/50 backdrop-blur-xl overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <h2 className="text-4xl font-bold mb-6 text-white tracking-tight">{title}</h2>
            <p className="text-slate-400 text-lg leading-relaxed font-light">
              {idx === 0 
                ? "To become the silent engine behind the next century of innovation, fostering a culture of radical competence."
                : "Providing the elite with the tactical network and sovereign capital required to shape the future."}
            </p>
          </motion.div>
        ))}
      </motion.section>

      {/* Team Section */}
      <section className="max-w-7xl mx-auto py-32 px-6">
        {/* Managers: The 'Council' Style */}
        <div className="mb-32">
          <div className="flex justify-between items-end mb-16 border-b border-zinc-800 pb-8">
            <h2 className="text-4xl font-light tracking-tight text-white">The <span className="italic font-serif text-amber-500">Council</span></h2>
            <span className="text-zinc-600 text-sm font-mono tracking-widest uppercase">/ Tier I Leadership</span>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {managers.map((m, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="group relative flex flex-col md:flex-row gap-10 p-4"
              >
                <div className="relative shrink-0">
                  <div className="absolute inset-0 bg-amber-500/20 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  <img src={m.image} alt={m.name} className="relative w-56 h-72 object-cover rounded-[2rem] grayscale-50 group-hover:grayscale-0 transition-all duration-700 border border-zinc-800" />
                </div>
                <div className="flex flex-col justify-center">
                  <h3 className="text-3xl font-bold text-white mb-2">{m.name}</h3>
                  <p className="text-amber-500 text-sm font-mono uppercase tracking-widest mb-6">{m.role}</p>
                  <p className="text-slate-400 font-light leading-relaxed">{m.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Specialists: Clean Grid */}
        <div>
          <div className="flex justify-between items-end mb-16 border-b border-zinc-800 pb-8">
            <h2 className="text-4xl font-light tracking-tight text-white">The <span className="italic font-serif text-amber-500">Specialists</span></h2>
            <span className="text-zinc-600 text-sm font-mono tracking-widest uppercase">/ Tier II Operations</span>
          </div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {team.map((t, i) => (
              <motion.div 
                key={i} 
                variants={fadeInUp}
                className="group relative p-8 rounded-[2rem] bg-zinc-900/20 border border-transparent hover:border-zinc-800 hover:bg-zinc-900/40 transition-all duration-500"
              >
                <div className="relative mb-8 w-32 h-32 mx-auto">
                  <img src={t.image} alt={t.name} className="w-full h-full rounded-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-500 ring-1 ring-zinc-800" />
                </div>
                <div className="text-center">
                  <h4 className="text-xl font-bold text-white group-hover:text-amber-500 transition-colors">{t.name}</h4>
                  <p className="text-zinc-500 text-xs font-mono uppercase mt-2 tracking-tighter">{t.role}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Luxury Footer CTA */}
      <motion.section 
        className="relative py-40 bg-[#080808] border-t border-zinc-900 text-center overflow-hidden"
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-amber-500 to-transparent" />
        <h2 className="text-5xl md:text-7xl font-bold mb-12 text-white tracking-tight">Ascend to the <br/><span className="italic font-serif">Inner Circle.</span></h2>
        
        <motion.button 
          whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(245,158,11,0.2)" }}
          whileTap={{ scale: 0.98 }}
          className="relative px-12 py-5 bg-amber-600 text-black font-black uppercase tracking-[0.2em] text-xs rounded-full group overflow-hidden"
        >
          <span className="relative z-10">Apply for Access</span>
          <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
        </motion.button>
      </motion.section>
    </div>
  );
};

export default Team;