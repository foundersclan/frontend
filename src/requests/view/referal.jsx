import React from 'react';
import { motion } from 'framer-motion';
import { 
  UserPlus, 
  CreditCard, 
  Link, 
  PhoneCall, 
  CheckCircle,
  ArrowRight,
} from 'lucide-react';

const FinalVetting = ({ formData, handleChange, onNext }) => {
  const { verification } = formData;

  const membershipOptions = [
    { label: 'Yes',              value: 'yes' },
    { label: 'No',               value: 'no' },
    { label: 'Depends on Value', value: 'depends_on_value' },
  ];

  const vettingOptions = [
    { label: 'Yes', value: 'yes' },
    { label: 'No',  value: 'no' },
  ];

  return (
    <div className="text-slate-300">
      <div className="w-full">

        <header className="mb-12">
          <h2 className="text-3xl font-bold text-white tracking-tight">Final Vetting</h2>
          <p className="text-zinc-500 text-sm mt-2">
            The last steps before your dossier is sent to the council.
          </p>
        </header>

        <div className="space-y-12">

          <div className="space-y-4">
            <label className="text-[10px] uppercase font-mono text-zinc-400 tracking-widest font-bold px-1">
              18. Referral Source (Optional)
            </label>
            <div className="relative">
              <UserPlus className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-600" size={18} />
              <input
                type="text"
                placeholder="Name of existing member"
                value={verification.referral}
                onChange={(e) => handleChange('verification', 'referral', e.target.value)}
                className="w-full bg-zinc-950/50 border border-zinc-800 rounded-2xl pl-12 pr-4 py-4 focus:border-amber-500 outline-none transition-all text-sm"
              />
            </div>
          </div>

      
          <div className="space-y-4">
            <label className="text-[10px] uppercase font-mono text-zinc-400 tracking-widest font-bold px-1">
              19. Membership Commitment *
            </label>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {membershipOptions.map((option) => (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => handleChange('verification', 'willingToPayMembership', option.value)}
                  className={`py-4 px-6 rounded-2xl border text-xs font-bold transition-all ${
                    verification.willingToPayMembership === option.value
                      ? 'bg-amber-500/10 border-amber-500 text-amber-400'
                      : 'bg-zinc-950/40 border-zinc-800 text-zinc-600 hover:border-zinc-700'
                  }`}
                >
                  <CreditCard size={14} className="inline mr-2 mb-1" />
                  {option.label}
                </button>
              ))}
            </div>
          </div>

      
          <div className="space-y-4">
            <div className="flex justify-between px-1">
              <label className="text-[10px] uppercase font-mono text-zinc-400 tracking-widest font-bold">
                20. Pitch Deck / Company Profile URL
              </label>
              <span className="text-[9px] text-zinc-600 uppercase">
                Google Drive, Dropbox, or Notion Link
              </span>
            </div>
            <div className="relative">
              <Link
                className={`absolute left-4 top-1/2 -translate-y-1/2 transition-colors ${
                  verification.pitchDeckUrl ? 'text-amber-500' : 'text-zinc-600'
                }`}
                size={18}
              />
              <input
                type="url"
                placeholder="https://drive.google.com/file/..."
                value={verification.pitchDeckUrl}
                onChange={(e) => handleChange('verification', 'pitchDeckUrl', e.target.value)}
                className="w-full bg-zinc-950/50 border border-zinc-800 rounded-2xl pl-12 pr-4 py-4 focus:border-amber-500 outline-none transition-all text-sm placeholder:text-zinc-700"
              />
            </div>
          </div>

       
          <div className="space-y-4">
            <label className="text-[10px] uppercase font-mono text-zinc-400 tracking-widest font-bold px-1">
              21. Available for a 10-minute vetting call? *
            </label>
            <div className="flex gap-4">
              {vettingOptions.map((option) => (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => handleChange('verification', 'vettingCall', option.value)}
                  className={`flex-1 py-4 rounded-2xl border text-xs font-black uppercase tracking-widest transition-all ${
                    verification.vettingCall === option.value
                      ? 'bg-white text-black border-white'
                      : 'bg-zinc-950/40 border-zinc-800 text-zinc-600 hover:border-zinc-700'
                  }`}
                >
                  {option.value === 'yes' && (
                    <PhoneCall size={14} className="inline mr-2 mb-1" />
                  )}
                  {option.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinalVetting;