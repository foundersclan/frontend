import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, 
  Filter, 
  Mail, 
  MessageSquare, 
  MoreVertical, 
  Globe, 
  Briefcase,
  Zap,
  MapPin,
  ExternalLink
} from 'lucide-react';

const MemberDirectory = () => {
  const [searchTerm, setSearchTerm] = useState("");
  
  const members = [
    { id: "M-101", name: "Julian Vane", industry: "Fintech", company: "Aether Pay", role: "CEO", location: "London", stage: "Series B", image: "https://i.pravatar.cc/150?u=julian" },
    { id: "M-102", name: "Sasha Kim", industry: "AI/ML", company: "Neural Drift", role: "CTO", location: "Seoul", stage: "Seed", image: "https://i.pravatar.cc/150?u=sasha" },
    { id: "M-103", name: "Marcus Thorne", industry: "CleanTech", company: "Verde Systems", role: "Founder", location: "Austin", stage: "Series A", image: "https://i.pravatar.cc/150?u=marcus" },
    { id: "M-104", name: "Elena Rodriguez", industry: "Web3", company: "ChainSync", role: "MD", location: "Madrid", stage: "Series C", image: "https://i.pravatar.cc/150?u=elena" },
    { id: "M-105", name: "Chen Wei", industry: "BioTech", company: "LifeLink", role: "Chairman", location: "Singapore", stage: "Exited", image: "https://i.pravatar.cc/150?u=chen" },
  ];

  return (
    <div className="bg-[#050505] min-h-screen text-slate-300 p-8 md:p-12">
      
      {/* --- HEADER & CONTROLS --- */}
      <div className="max-w-7xl mx-auto mb-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <div>
          <h1 className="text-4xl font-bold text-white tracking-tight">Member <span className="text-amber-500 italic font-serif">Directory</span></h1>
          <p className="text-zinc-500 text-xs font-mono uppercase tracking-[0.3em] mt-2">The Global Network of Disruptors</p>
        </div>

        <div className="flex gap-4 w-full md:w-auto">
          <div className="relative flex-1 md:w-80">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-600" size={16} />
            <input 
              type="text" 
              placeholder="Search by name, company, or industry..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-zinc-900 border border-zinc-800 rounded-2xl pl-12 pr-4 py-3 text-sm focus:border-amber-500/50 outline-none transition-all"
            />
          </div>
          <button className="bg-zinc-900 border border-zinc-800 p-3 rounded-2xl text-zinc-400 hover:text-white transition-colors">
            <Filter size={20} />
          </button>
        </div>
      </div>

      {/* --- DIRECTORY GRID --- */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence>
          {members
            .filter(m => m.name.toLowerCase().includes(searchTerm.toLowerCase()) || m.industry.toLowerCase().includes(searchTerm.toLowerCase()))
            .map((member, i) => (
            <motion.div
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              key={member.id}
              className="bg-zinc-900/40 border border-zinc-800 rounded-[2.5rem] p-6 group hover:bg-zinc-900/60 hover:border-amber-500/20 transition-all relative overflow-hidden"
            >
              {/* Profile Top */}
              <div className="flex justify-between items-start mb-6">
                <div className="relative">
                  <div className="w-20 h-20 rounded-2xl overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700">
                    <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 border-4 border-zinc-900 rounded-full" />
                </div>
                <button className="text-zinc-700 hover:text-white"><MoreVertical size={20} /></button>
              </div>

              {/* Identity */}
              <div className="mb-6">
                <h3 className="text-xl font-bold text-white group-hover:text-amber-500 transition-colors">{member.name}</h3>
                <p className="text-zinc-500 text-xs font-medium uppercase tracking-widest">{member.role} @ {member.company}</p>
              </div>

              {/* Professional Stats */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-zinc-950/50 rounded-xl p-3 border border-zinc-800/50">
                  <p className="text-[8px] uppercase font-mono text-zinc-600 mb-1">Industry</p>
                  <p className="text-[10px] text-white font-bold flex items-center gap-1">
                    <Briefcase size={10} className="text-amber-500" /> {member.industry}
                  </p>
                </div>
                <div className="bg-zinc-950/50 rounded-xl p-3 border border-zinc-800/50">
                  <p className="text-[8px] uppercase font-mono text-zinc-600 mb-1">Venture Stage</p>
                  <p className="text-[10px] text-white font-bold flex items-center gap-1">
                    <Zap size={10} className="text-amber-500" /> {member.stage}
                  </p>
                </div>
              </div>

              {/* Footer Actions */}
              <div className="flex items-center justify-between pt-4 border-t border-zinc-800/50">
                <div className="flex items-center gap-2 text-zinc-500 text-[10px]">
                  <MapPin size={12} /> {member.location}
                </div>
                <div className="flex gap-2">
                  <button className="p-2 bg-zinc-800 hover:bg-zinc-700 rounded-lg text-white transition-all">
                    <Mail size={14} />
                  </button>
                  <button className="p-2 bg-zinc-800 hover:bg-zinc-700 rounded-lg text-white transition-all">
                    <MessageSquare size={14} />
                  </button>
                </div>
              </div>

              {/* Subtle ID watermark */}
              <span className="absolute bottom-4 right-8 opacity-[0.02] text-6xl font-black pointer-events-none select-none text-white">
                {member.id}
              </span>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default MemberDirectory;