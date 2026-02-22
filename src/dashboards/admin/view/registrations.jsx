import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Mail, ShieldCheck, X, Eye, Linkedin, 
  Clock, ArrowUpRight, Building2, User,
  CheckCircle, XCircle, Download
} from 'lucide-react';
import jsPDF from 'jspdf';
import toast from 'react-hot-toast'

const RegistrationPortal = ({ registrations, updateStatus, refreshData }) => {
  const [selectedFounder, setSelectedFounder] = useState(null);
  const [isActioning, setIsActioning] = useState(false);

  const downloadPDF = (founder) => {
    const doc = new jsPDF()
    const pageWidth = doc.internal.pageSize.getWidth()

    // ── Header Bar ──────────────────────────────────────────
    doc.setFillColor(245, 158, 11) // amber-500
    doc.rect(0, 0, pageWidth, 18, 'F')

    doc.setTextColor(0, 0, 0)
    doc.setFontSize(11)
    doc.setFont('helvetica', 'bold')
    doc.text('FOUNDERSCLAN', 14, 12)

    doc.setFont('helvetica', 'normal')
    doc.setFontSize(8)
    doc.text(`REG-${founder.id}  •  ${new Date().toLocaleDateString()}`, pageWidth - 14, 12, { align: 'right' })

    // ── Title ────────────────────────────────────────────────
    doc.setTextColor(15, 15, 15)
    doc.setFontSize(20)
    doc.setFont('helvetica', 'bold')
    doc.text(founder.full_name || 'N/A', 14, 34)

    doc.setFontSize(10)
    doc.setFont('helvetica', 'normal')
    doc.setTextColor(100, 100, 100)
    doc.text(`${founder.role || 'Founder'}  at  ${founder.company_name || 'N/A'}`, 14, 42)

    // Status badge
    const statusColor = founder.status === 'approved' ? [34, 197, 94] :
                        founder.status === 'rejected'  ? [239, 68, 68]  : [245, 158, 11]
    doc.setFillColor(...statusColor)
    doc.roundedRect(pageWidth - 45, 28, 30, 10, 2, 2, 'F')
    doc.setTextColor(255, 255, 255)
    doc.setFontSize(7)
    doc.setFont('helvetica', 'bold')
    doc.text((founder.status || 'pending').toUpperCase(), pageWidth - 30, 34.5, { align: 'center' })

    // Divider
    doc.setDrawColor(230, 230, 230)
    doc.line(14, 50, pageWidth - 14, 50)

    // ── Section Helper ───────────────────────────────────────
    const section = (title, y) => {
      doc.setFillColor(245, 245, 245)
      doc.rect(14, y, pageWidth - 28, 7, 'F')
      doc.setTextColor(100, 100, 100)
      doc.setFontSize(7)
      doc.setFont('helvetica', 'bold')
      doc.text(title.toUpperCase(), 17, y + 5)
      return y + 12
    }

    const field = (label, value, x, y, maxWidth = 80) => {
      doc.setTextColor(150, 150, 150)
      doc.setFontSize(7)
      doc.setFont('helvetica', 'normal')
      doc.text(label, x, y)

      doc.setTextColor(20, 20, 20)
      doc.setFontSize(9)
      doc.setFont('helvetica', 'bold')
      const lines = doc.splitTextToSize(value || 'N/A', maxWidth)
      doc.text(lines, x, y + 5)
      return y + 5 + lines.length * 5
    }

    // ── 01. Personal Info ────────────────────────────────────
    let y = section('01. Personal Information', 55)
    field('Email', founder.email, 14, y)
    field('Phone / WhatsApp', founder.phone, 110, y)
    y += 14

    field('Location', `${founder.city || ''}, ${founder.state || ''}`, 14, y)
    field('LinkedIn', founder.linkedin_url || 'Not provided', 110, y, 80)
    y += 14

    // ── 02. Business Info ────────────────────────────────────
    y = section('02. Business Intelligence', y + 4)
    field('Company', founder.company_name, 14, y)
    field('Industry', founder.industry_type, 110, y)
    y += 14

    field('Current Stage', founder.current_stage, 14, y)
    field('Business Started', founder.business_started_month_year || 'N/A', 110, y)
    y += 14

    if (founder.business_idea) {
      field('Business Idea', founder.business_idea, 14, y, pageWidth - 28)
      y += Math.ceil(founder.business_idea.length / 80) * 6 + 12
    }

    // ── 03. Metrics ──────────────────────────────────────────
    y = section('03. Business Metrics', y + 4)
    field('MRR', founder.mrr, 14, y)
    field('Team Size', founder.team_size, 65, y)
    field('Funding Status', founder.funding_status, 116, y)
    y += 14

    field('Market Classification', founder.market_classification, 14, y)
    y += 14

    // ── 04. Value Exchange ───────────────────────────────────
    y = section('04. Value Exchange', y + 4)

    if (founder.biggest_problem_solved) {
      field('Biggest Problem Solved', founder.biggest_problem_solved, 14, y, pageWidth - 28)
      y += Math.ceil(founder.biggest_problem_solved.length / 80) * 6 + 12
    }

    if (founder.current_challenge) {
      field('Current Challenge', founder.current_challenge, 14, y, pageWidth - 28)
      y += Math.ceil(founder.current_challenge.length / 80) * 6 + 12
    }

    if (founder.why_join_elite) {
      field('Why Join Elite', founder.why_join_elite, 14, y, pageWidth - 28)
      y += Math.ceil(founder.why_join_elite.length / 80) * 6 + 12
    }

    // ── 05. Verification ─────────────────────────────────────
    y = section('05. Verification', y + 4)
    field('Willing to Pay Membership', founder.willing_to_pay_membership, 14, y)
    field('Open to Vetting Call', founder.vetting_call, 110, y)
    y += 14

    if (founder.referral) {
      field('Referral', founder.referral, 14, y)
      y += 14
    }

    // ── Footer ───────────────────────────────────────────────
    doc.setFillColor(245, 158, 11)
    doc.rect(0, doc.internal.pageSize.getHeight() - 10, pageWidth, 10, 'F')
    doc.setTextColor(0, 0, 0)
    doc.setFontSize(7)
    doc.setFont('helvetica', 'normal')
    doc.text('FoundersClan — Confidential Registration Report', pageWidth / 2, doc.internal.pageSize.getHeight() - 4, { align: 'center' })

    doc.save(`FoundersClan_REG-${founder.id}_${founder.full_name?.replace(/\s+/g, '_')}.pdf`)
  }
 
  
 const handleApprove = async () => {
  if (!selectedFounder) return;
  setIsActioning(true);
  const result = await updateStatus(selectedFounder.id, 'approved');
  if (result.success) {
    toast.success("Registration approved successfully!");
    setSelectedFounder(null);
  } else {
    toast.error(`Error: ${result.error}`);
  }
  setIsActioning(false);
};

  const handleReject = async () => {
    if (!selectedFounder) return;
    const reason = prompt("Enter rejection reason (optional):");
    setIsActioning(true);
    const result = await updateStatus(selectedFounder.id, 'rejected', reason);
    if (result.success) {
      toast.success("Registration Rejected successfully!");
      setSelectedFounder(null);
    } else {
      toast.error(`Error: ${result.error}`);
    }
    setIsActioning(false);
  };

  
  const foundersList = registrations?.data || [];
  const pendingCount = foundersList.filter(f => f.status === 'pending').length;

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

                  {/* Download PDF Button */}
                  <button
                    onClick={() => downloadPDF(selectedFounder)}
                    className="flex-1 bg-zinc-800 border border-zinc-700 text-white font-black uppercase tracking-widest py-4 rounded-xl md:rounded-2xl text-[10px] hover:bg-amber-500 hover:text-black hover:border-amber-500 transition-all flex items-center justify-center gap-3"
                  >
                    <Download size={16} /> Download PDF
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