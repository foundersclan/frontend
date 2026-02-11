import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Mail, ShieldCheck, X, Eye, Linkedin, 
  Clock, ArrowUpRight, Building2, User
} from 'lucide-react';

const RegistrationPortal = () => {
  const [selectedFounder, setSelectedFounder] = useState(null);
  const [isSending, setIsSending] = useState(false);

  const registrations = [
    { 
      id: "FND-7721", 
      name: "Marcus Aurelius", 
      email: "marcus@stoic.vc", 
      company: "Stoic Ventures", 
      role: "Managing Partner",
      event: "SF Tech Week",
      bio: "Focusing on early-stage deep tech and robotics. Previously exited 2 companies in the logistics space.",
      linkedin: "linkedin.com/in/marcus",
      phone: "+1 415 555 0192"
    },
    { 
      id: "FND-7722", 
      name: "Sienna Miller", 
      email: "sienna@future.io", 
      company: "Future IO", 
      role: "CEO & Founder",
      event: "Founders Summit",
      bio: "Building the next generation of carbon capture technology. Looking for Series B partnerships.",
      linkedin: "linkedin.com/in/siennam",
      phone: "+44 20 7946 0101"
    }
  ];

  const handleSendEmail = () => {
    setIsSending(true);
    setTimeout(() => {
      setIsSending(false);
      setSelectedFounder(null);
      alert("Confirmation Mail Dispatched Successfully.");
    }, 1500);
  };

  return (
    <div className="bg-[#050505] min-h-screen p-4 md:p-8 text-slate-300">
      
      {/* Header */}
      <div className="mb-8 flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-white tracking-tight">Founder Registrations</h1>
          <p className="text-zinc-500 text-[10px] mt-1 font-mono uppercase tracking-widest">
            Security Tier: Alpha-Level Vetting
          </p>
        </div>
        <span className="bg-zinc-900 border border-zinc-800 px-4 py-2 rounded-xl text-[10px] md:text-xs flex items-center gap-2">
            <Clock size={14} className="text-amber-500" /> 12 Pending Review
        </span>
      </div>

      {/* --- DESKTOP TABLE VIEW --- */}
      <div className="hidden md:block bg-zinc-900/30 border border-zinc-800 rounded-[2rem] overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-zinc-950/50 border-b border-zinc-800 text-[10px] uppercase font-mono tracking-widest text-zinc-500">
            <tr>
              <th className="px-8 py-5">Founder / Company</th>
              <th className="px-8 py-5">Event Goal</th>
              <th className="px-8 py-5">Status</th>
              <th className="px-8 py-5 text-right">Review</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-800/50">
            {registrations.map((founder) => (
              <tr key={founder.id} className="group hover:bg-zinc-800/20 transition-all">
                <td className="px-8 py-6">
                  <div>
                    <p className="text-sm font-bold text-white">{founder.name}</p>
                    <p className="text-xs text-zinc-500">{founder.company} — {founder.role}</p>
                  </div>
                </td>
                <td className="px-8 py-6">
                  <span className="text-xs bg-zinc-950 px-3 py-1 rounded-full border border-zinc-800 uppercase font-mono text-[10px]">
                    {founder.event}
                  </span>
                </td>
                <td className="px-8 py-6">
                  <span className="flex items-center gap-2 text-[10px] font-mono text-amber-500">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" /> VETTING
                  </span>
                </td>
                <td className="px-8 py-6 text-right">
                  <button onClick={() => setSelectedFounder(founder)} className="p-3 bg-zinc-800 hover:bg-amber-500 hover:text-black rounded-xl transition-all">
                    <Eye size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* --- MOBILE CARD VIEW --- */}
      <div className="md:hidden space-y-4">
        {registrations.map((founder) => (
          <div key={founder.id} className="bg-zinc-900/40 border border-zinc-800 rounded-2xl p-5 space-y-4">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-bold text-white">{founder.name}</h3>
                <p className="text-xs text-zinc-500">{founder.company}</p>
              </div>
              <span className="text-[9px] font-mono text-amber-500 border border-amber-500/20 px-2 py-1 rounded bg-amber-500/5">VETTING</span>
            </div>
            <div className="flex items-center justify-between pt-2">
               <span className="text-[10px] text-zinc-400 flex items-center gap-1">
                 <Building2 size={12}/> {founder.event}
               </span>
               <button 
                onClick={() => setSelectedFounder(founder)}
                className="flex items-center gap-2 bg-amber-500 text-black px-4 py-2 rounded-lg text-[10px] font-black uppercase tracking-widest"
               >
                 <Eye size={14}/> Review
               </button>
            </div>
          </div>
        ))}
      </div>

      {/* --- DETAIL POPUP MODAL (Responsive) --- */}
      <AnimatePresence>
        {selectedFounder && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-6">
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setSelectedFounder(null)}
              className="absolute inset-0 bg-black/90 backdrop-blur-xl"
            />

            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-2xl bg-zinc-900 border border-zinc-800 rounded-[2rem] md:rounded-[3rem] overflow-y-auto max-h-[90vh] shadow-2xl"
            >
              <div className="p-6 md:p-12">
                <div className="flex justify-between items-start mb-6 md:mb-8">
                  <div>
                    <p className="text-amber-500 font-mono text-[9px] md:text-[10px] tracking-widest uppercase mb-1">{selectedFounder.id}</p>
                    <h2 className="text-2xl md:text-4xl font-bold text-white tracking-tight">{selectedFounder.name}</h2>
                    <p className="text-zinc-400 text-sm mt-1">{selectedFounder.role} at {selectedFounder.company}</p>
                  </div>
                  <button onClick={() => setSelectedFounder(null)} className="p-2 hover:bg-zinc-800 rounded-full transition-colors">
                    <X size={20} className="md:w-6 md:h-6" />
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-8 md:mb-10">
                  <div className="space-y-4 md:space-y-6">
                    <div>
                      <label className="text-[9px] md:text-[10px] uppercase font-mono text-zinc-600 tracking-widest block mb-2">Direct Contact</label>
                      <p className="text-xs md:text-sm text-white break-all">{selectedFounder.email}</p>
                      <p className="text-xs md:text-sm text-zinc-500 mt-1">{selectedFounder.phone}</p>
                    </div>
                    <div>
                      <label className="text-[9px] md:text-[10px] uppercase font-mono text-zinc-600 tracking-widest block mb-2">Social Proof</label>
                      <a href="#" className="flex items-center gap-2 text-xs md:text-sm text-blue-400 hover:underline">
                        <Linkedin size={14} /> LinkedIn Profile <ArrowUpRight size={12} />
                      </a>
                    </div>
                  </div>
                  <div>
                    <label className="text-[9px] md:text-[10px] uppercase font-mono text-zinc-600 tracking-widest block mb-2">Founder Statement</label>
                    <p className="text-xs md:text-sm text-zinc-400 leading-relaxed italic border-l-2 border-zinc-800 pl-4">
                      "{selectedFounder.bio}"
                    </p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 md:gap-4 pt-6 md:pt-8 border-t border-zinc-800">
                  <motion.button 
                    whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }}
                    onClick={handleSendEmail}
                    disabled={isSending}
                    className="flex-1 bg-amber-500 text-black font-black uppercase tracking-widest py-4 rounded-xl md:rounded-2xl text-[10px] flex items-center justify-center gap-3"
                  >
                    {isSending ? "Dispatching..." : <><Mail size={16} /> Send Email</>}
                  </motion.button>
                  
                  <button className="flex-1 bg-zinc-950 border border-zinc-800 text-white font-black uppercase tracking-widest py-4 rounded-xl md:rounded-2xl text-[10px] hover:text-red-500 transition-all">
                    Reject
                  </button>
                </div>
                
                <div className="mt-6 text-zinc-600 text-[8px] md:text-[9px] uppercase tracking-tighter text-center">
                    <ShieldCheck size={12} className="inline mr-1 mb-0.5" /> Verified Tier 1 Founder
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default RegistrationPortal;