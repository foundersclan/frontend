import React from 'react';
import { motion } from 'framer-motion';
import { Users, ShieldCheck, Target } from 'lucide-react';

const Team = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  const allMembers = [
    { name: "Nishant Saini", role: "Chief Visionary", image: "/team/nishant.png" },
    { name: "Aman Monga", role: "G.O.A.T of Tech", image: "/team/aman.jpeg" },
    { name: "Riya", role: "Operations Lead", image: "/team/riya.jpeg" },
    { name: "Prashant", role: "Media Team Manager", image: "/team/prashant.jpeg" },
    { name: "Muskan Jindal", role: "Offline Market Head", image: "/team/muskan.jpeg" },
    { name: "Jaya Saini", role: "Engagement Lead", image: "/team/jaya2.jpeg" },
    { name: "Shourya Sharma", role: "Impact Catalyst", image: "/team/shourya.jpeg" },
    { name: "Aaryan", role: "Event Curator", image: "/team/aryan.jpeg" },
    { name: "Khushi Chauhan", role: "Content Creator", image: "/team/khushi.jpeg" }
  ];

  return (
    <div className="bg-[#050505] text-slate-100 min-h-screen font-sans">
      
      {/* 1. HERO SECTION */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative pt-48 pb-24 px-6 text-center overflow-hidden"
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-amber-500/5 blur-[120px] rounded-full pointer-events-none" />
        
        <motion.div variants={fadeInUp} className="relative z-10">
          <span className="text-amber-500 text-[10px] font-mono font-bold uppercase tracking-[0.5em] mb-6 block">
            Collective Intelligence
          </span>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black mb-6 tracking-tighter">
            OUR <span className="italic font-serif text-amber-500">OPERATIVES.</span>
          </h1>
          <p className="max-w-2xl mx-auto text-zinc-500 text-lg font-light leading-relaxed">
            The architects of ambition. We don't just manage the clan; we safeguard the vision of every founder within our ecosystem.
          </p>
        </motion.div>
      </motion.section>

      {/* 2. UNIFIED TEAM GRID */}
      <section className="max-w-[1400px] mx-auto py-20 px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {allMembers.map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              {/* Image Container */}
              <div className="relative aspect-[3/4] overflow-hidden rounded-[2rem] border border-zinc-800 bg-zinc-900">
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10 opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                />

                {/* Corner Badge */}
                <div className="absolute top-6 right-6 z-20 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-4 group-hover:translate-x-0">
                    <div className="bg-amber-500 p-2 rounded-full shadow-lg shadow-amber-500/40">
                        <ShieldCheck size={18} className="text-black" />
                    </div>
                </div>

                {/* Member Info (Bottom Overlaid) */}
                <div className="absolute bottom-8 left-8 right-8 z-20">
                    <p className="text-amber-500 text-3xl font-extrabold uppercase tracking-[0.3em] mb-2">
                        {member.role}
                    </p>
                    <h3 className="text-3xl font-bold text-white tracking-tight">
                        {member.name}
                    </h3>
                </div>
              </div>

              {/* Decorative Glow */}
              <div className="absolute -inset-2 bg-amber-500/10 blur-xl rounded-[2.5rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. THE COLLECTIVE (Group Photo Section) */}
      <section className="py-32 px-6">
        <div className="max-w-[1400px] mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                <div>
                    <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-white">THE COLLECTIVE.</h2>
                    <p className="text-zinc-500 font-mono text-xs uppercase tracking-[0.2em] mt-2">Captured in the Inner Sanctum // MMXXV</p>
                </div>
                <div className="flex gap-4">
                    <div className="flex flex-col items-end">
                        <span className="text-amber-500 text-xl font-bold">100%</span>
                        <span className="text-zinc-600 text-[10px] uppercase font-mono tracking-widest">Alignment</span>
                    </div>
                    <div className="w-px h-10 bg-zinc-800" />
                    <div className="flex flex-col items-end">
                        <span className="text-amber-500 text-xl font-bold">Elite</span>
                        <span className="text-zinc-600 text-[10px] uppercase font-mono tracking-widest">Protocol</span>
                    </div>
                </div>
            </div>

            <motion.div 
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative aspect-[21/9] w-full rounded-[3rem] overflow-hidden border border-zinc-800 shadow-2xl"
            >
                {/* Overlay Vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 z-10" />
                
                {/* Group Photo Placeholder */}
                <img 
                    src="/assets/groupimg.jpg" 
                    alt="Founders Clan Collective" 
                    className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-1000"
                />

                {/* Centered Brand Mark */}
                <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none opacity-20">
                    <h2 className="text-[15vw] font-black text-white/10 tracking-tighter">CLAN</h2>
                </div>
            </motion.div>
        </div>
      </section>

      {/* 4. FOOTER CTA */}
      <section className="relative py-40 bg-[#080808] border-t border-zinc-900 text-center overflow-hidden">
        <motion.div
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           className="relative z-10"
        >
            <h2 className="text-5xl md:text-7xl font-bold mb-12 text-white tracking-tight">
              One Vision. <br/>
              <span className="italic font-serif text-amber-500">Six Architects.</span>
            </h2>
            
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="px-12 py-5 bg-amber-600 text-black font-black uppercase tracking-[0.2em] text-[10px] rounded-full"
            >
              Collaborate With Us
            </motion.button>
        </motion.div>
      </section>
    </div>
  );
};

export default Team;