import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Mail, ShieldCheck, X, Eye, Linkedin, 
  Clock, ArrowUpRight, Building2, User,
  CheckCircle, XCircle
} from 'lucide-react';

const RegistrationPortal = ({ registrations, updateStatus, refreshData }) => {
  const [selectedFounder, setSelectedFounder] = useState(null);
  const [isActioning, setIsActioning] = useState(false);
  
  const handleApprove = async () => {
    if (!selectedFounder) return;
    
    setIsActioning(true);
    const result = await updateStatus(selectedFounder.id, 'approved');
    
    if (result.success) {
      alert("Registration approved successfully!");
      setSelectedFounder(null);
    } else {
      alert(`Error: ${result.error}`);
    }
    setIsActioning(false);
  };

  const handleReject = async () => {
    if (!selectedFounder) return;
    
    const reason = prompt("Enter rejection reason (optional):");
    
    setIsActioning(true);
    const result = await updateStatus(selectedFounder.id, 'rejected', reason);
    
    if (result.success) {
      alert("Registration rejected.");
      setSelectedFounder(null);
    } else {
      alert(`Error: ${result.error}`);
    }
    setIsActioning(false);
  };

  // Safe data access
  const foundersList = registrations?.data || [];
  const pendingCount = foundersList.filter(f => f.status === 'pending').length;

  // Helper to get status color
  const getStatusColor = (status) => {
    switch(status) {
      case 'approved': return 'text-green-500 border-green-500/20 bg-green-500/5';
      case 'rejected': return 'text-red-500 border-red-500/20 bg-red-500/5';
      case 'under_review': return 'text-blue-500 border-blue-500/20 bg-blue-500/5';
      default: return 'text-amber-500 border-amber-500/20 bg-amber-500/5';
    }
  };

  return (
    <div className="bg-[#050505] min-h-screen text-slate-300">
      
      {/* Header */}
      <div className="mb-8 flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
            Founder Registrations
          </h1>
          <p className="text-zinc-500 text-[10px] mt-1 font-mono uppercase tracking-widest">
            Security Tier: Alpha-Level Vetting
          </p>
        </div>
        <span className="bg-zinc-900 border border-zinc-800 px-4 py-2 rounded-xl text-[10px] md:text-xs flex items-center gap-2">
          <Clock size={14} className="text-amber-500" /> 
          {pendingCount} Pending Review
        </span>
      </div>

      {/* Empty State */}
      {foundersList.length === 0 && (
        <div className="bg-zinc-900/20 border border-dashed border-zinc-800 rounded-[2rem] p-20 text-center">
          <User size={48} className="text-zinc-800 mx-auto mb-4" />
          <h3 className="text-white font-bold mb-2">No Registrations Yet</h3>
          <p className="text-zinc-600 text-xs">Registrations will appear here once founders apply</p>
        </div>
      )}

      {/* DESKTOP TABLE VIEW */}
      {foundersList.length > 0 && (
        <div className="hidden md:block bg-zinc-900/30 border border-zinc-800 rounded-[2rem] overflow-hidden">
          <table className="w-full text-left">
            <thead className="bg-zinc-950/50 border-b border-zinc-800 text-[10px] uppercase font-mono tracking-widest text-zinc-500">
              <tr>
                <th className="px-8 py-5">Founder / Company</th>
                <th className="px-8 py-5">Industry</th>
                <th className="px-8 py-5">Status</th>
                <th className="px-8 py-5 text-right">Review</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-800/50">
              {foundersList.map((founder) => (
                <tr key={founder.id} className="group hover:bg-zinc-800/20 transition-all">
                  <td className="px-8 py-6">
                    <div>
                      <p className="text-sm font-bold text-white">{founder.full_name}</p>
                      <p className="text-xs text-zinc-500">
                        {founder.company_name} — {founder.role || 'Founder'}
                      </p>
                    </div>
                  </td>
                  <td className="px-8 py-6">
                    <span className="text-xs bg-zinc-950 px-3 py-1 rounded-full border border-zinc-800 uppercase font-mono text-[10px]">
                      {founder.industry_type || 'N/A'}
                    </span>
                  </td>
                  <td className="px-8 py-6">
                    <span className={`flex items-center gap-2 text-[10px] font-mono uppercase ${
                      founder.status === 'approved' ? 'text-green-500' :
                      founder.status === 'rejected' ? 'text-red-500' :
                      'text-amber-500'
                    }`}>
                      <span className={`w-1.5 h-1.5 rounded-full ${
                        founder.status === 'approved' ? 'bg-green-500' :
                        founder.status === 'rejected' ? 'bg-red-500' :
                        'bg-amber-500 animate-pulse'
                      }`} />
                      {founder.status}
                    </span>
                  </td>
                  <td className="px-8 py-6 text-right">
                    <button 
                      onClick={() => setSelectedFounder(founder)} 
                      className="p-3 bg-zinc-800 hover:bg-amber-500 hover:text-black rounded-xl transition-all"
                    >
                      <Eye size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* MOBILE CARD VIEW */}
      {foundersList.length > 0 && (
        <div className="md:hidden space-y-4">
          {foundersList.map((founder) => (
            <div key={founder.id} className="bg-zinc-900/40 border border-zinc-800 rounded-2xl p-5 space-y-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-bold text-white">{founder.full_name}</h3>
                  <p className="text-xs text-zinc-500">{founder.company_name}</p>
                </div>
                <span className={`text-[9px] font-mono px-2 py-1 rounded uppercase ${getStatusColor(founder.status)}`}>
                  {founder.status}
                </span>
              </div>
              <div className="flex items-center justify-between pt-2">
                <span className="text-[10px] text-zinc-400 flex items-center gap-1">
                  <Building2 size={12}/> {founder.industry_type || 'N/A'}
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
      )}

      {/* DETAIL POPUP MODAL */}
      <AnimatePresence>
        {selectedFounder && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-6">
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }}
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
                {/* Header */}
                <div className="flex justify-between items-start mb-6 md:mb-8">
                  <div>
                    <p className="text-amber-500 font-mono text-[9px] md:text-[10px] tracking-widest uppercase mb-1">
                      REG-{selectedFounder.id}
                    </p>
                    <h2 className="text-2xl md:text-4xl font-bold text-white tracking-tight">
                      {selectedFounder.full_name}
                    </h2>
                    <p className="text-zinc-400 text-sm mt-1">
                      {selectedFounder.role || 'Founder'} at {selectedFounder.company_name}
                    </p>
                  </div>
                  <button 
                    onClick={() => setSelectedFounder(null)} 
                    className="p-2 hover:bg-zinc-800 rounded-full transition-colors"
                  >
                    <X size={20} className="md:w-6 md:h-6" />
                  </button>
                </div>

                {/* Details Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-8 md:mb-10">
                  <div className="space-y-4 md:space-y-6">
                    <div>
                      <label className="text-[9px] md:text-[10px] uppercase font-mono text-zinc-600 tracking-widest block mb-2">
                        Direct Contact
                      </label>
                      <p className="text-xs md:text-sm text-white break-all">{selectedFounder.email}</p>
                      <p className="text-xs md:text-sm text-zinc-500 mt-1">{selectedFounder.phone}</p>
                    </div>
                    <div>
                      <label className="text-[9px] md:text-[10px] uppercase font-mono text-zinc-600 tracking-widest block mb-2">
                        Social Proof
                      </label>
                      {selectedFounder.linkedin_url ? (
                        <a 
                          href={selectedFounder.linkedin_url} 
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-xs md:text-sm text-blue-400 hover:underline"
                        >
                          <Linkedin size={14} /> LinkedIn Profile <ArrowUpRight size={12} />
                        </a>
                      ) : (
                        <p className="text-xs text-zinc-600 italic">Not provided</p>
                      )}
                    </div>
                    <div>
                      <label className="text-[9px] md:text-[10px] uppercase font-mono text-zinc-600 tracking-widest block mb-2">
                        Location
                      </label>
                      <p className="text-xs md:text-sm text-zinc-400">
                        {selectedFounder.city}, {selectedFounder.state}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4 md:space-y-6">
                    <div>
                      <label className="text-[9px] md:text-[10px] uppercase font-mono text-zinc-600 tracking-widest block mb-2">
                        Business Idea
                      </label>
                      <p className="text-xs md:text-sm text-zinc-400 leading-relaxed">
                        {selectedFounder.business_idea || 'Not provided'}
                      </p>
                    </div>
                    <div>
                      <label className="text-[9px] md:text-[10px] uppercase font-mono text-zinc-600 tracking-widest block mb-2">
                        Why Join Elite
                      </label>
                      <p className="text-xs md:text-sm text-zinc-400 leading-relaxed italic border-l-2 border-zinc-800 pl-4">
                        "{selectedFounder.why_join_elite || 'Not provided'}"
                      </p>
                    </div>
                  </div>
                </div>

                {/* Additional Info */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 p-4 bg-zinc-950/50 rounded-2xl border border-zinc-800">
                  <div>
                    <p className="text-[9px] uppercase text-zinc-600 mb-1">Stage</p>
                    <p className="text-xs text-white font-bold">{selectedFounder.current_stage || 'N/A'}</p>
                  </div>
                  <div>
                    <p className="text-[9px] uppercase text-zinc-600 mb-1">Team Size</p>
                    <p className="text-xs text-white font-bold">{selectedFounder.team_size || 'N/A'}</p>
                  </div>
                  <div>
                    <p className="text-[9px] uppercase text-zinc-600 mb-1">Funding</p>
                    <p className="text-xs text-white font-bold">{selectedFounder.funding_status || 'N/A'}</p>
                  </div>
                  <div>
                    <p className="text-[9px] uppercase text-zinc-600 mb-1">MRR</p>
                    <p className="text-xs text-white font-bold">{selectedFounder.mrr || 'N/A'}</p>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 md:gap-4 pt-6 md:pt-8 border-t border-zinc-800">
                  <motion.button 
                    whileHover={{ scale: 1.01 }} 
                    whileTap={{ scale: 0.99 }}
                    onClick={handleApprove}
                    disabled={isActioning || selectedFounder.status === 'approved'}
                    className="flex-1 bg-green-500 text-white font-black uppercase tracking-widest py-4 rounded-xl md:rounded-2xl text-[10px] flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-green-400 transition-all"
                  >
                    {isActioning ? "Processing..." : <><CheckCircle size={16} /> Approve</>}
                  </motion.button>
                  
                  <button 
                    onClick={handleReject}
                    disabled={isActioning || selectedFounder.status === 'rejected'}
                    className="flex-1 bg-zinc-950 border border-zinc-800 text-white font-black uppercase tracking-widest py-4 rounded-xl md:rounded-2xl text-[10px] hover:text-red-500 hover:border-red-500 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                  >
                    <XCircle size={16} /> Reject
                  </button>
                </div>
                
                {/* Footer */}
                <div className="mt-6 text-zinc-600 text-[8px] md:text-[9px] uppercase tracking-tighter text-center">
                  <ShieldCheck size={12} className="inline mr-1 mb-0.5" /> 
                  Status: {selectedFounder.status}
                  {selectedFounder.reviewed_at && (
                    <> • Reviewed {new Date(selectedFounder.reviewed_at).toLocaleDateString()}</>
                  )}
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