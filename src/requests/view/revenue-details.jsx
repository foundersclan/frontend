import React from 'react';
import { IndianRupee, Users, Wallet, Layers } from 'lucide-react';

const FieldError = ({ message }) =>
  message ? <p className="text-[11px] text-red-400 px-1 mt-2">{message}</p> : null;

const BusinessMetrics = ({ formData, handleChange, fieldErrors = {}, onNext }) => {
  const { eliteFilter } = formData;

  const mrrOptions = [
    { label: 'Pre-revenue',            value: 'pre-revenue' },
    { label: '₹1 - ₹1 Lakh',          value: '1_to_1,00,000' },
    { label: '₹1 Lakh - ₹10 Lakhs',   value: '1,00,000_to_10,00,000' },
    { label: '₹10 Lakhs - ₹50 Lakhs', value: '10,00,000_to_50,00,000' },
    { label: '₹50 Lakhs+',            value: '50,00,000+' },
  ];

  const teamOptions = [
    { label: '1 (Solo)', value: 'solo' },
    { label: '2-5',      value: '2-5'  },
    { label: '6-20',     value: '6-20' },
    { label: '21-50',    value: '21-50'},
    { label: '100+',     value: '100+' },
  ];

  const fundingOptions = [
    { label: 'Bootstrapped', value: 'bootstrapped' },
    { label: 'Angel Funded', value: 'angel_funded' },
    { label: 'VC Funded',    value: 'vc_funded'    },
  ];

  const marketOptions = [
    { label: 'B2B',   value: 'b2b'   },
    { label: 'B2C',   value: 'b2c'   },
    { label: 'B2G',   value: 'b2g'   },
    { label: 'D2C',   value: 'd2c'   },
    { label: 'P2P',   value: 'p2p'   },
    { label: 'B2B2C', value: 'b2b2c' },
  ];

  // Helper: error border for button-style selectors
  const optionClass = (field, value, activeClass, inactiveClass) =>
    eliteFilter[field] === value
      ? activeClass
      : `${inactiveClass} ${fieldErrors[field] ? 'border-red-500/70' : ''}`;

  return (
    <div className="text-slate-300">
      <div className="w-full">

        <header className="mb-12 border-l-4 border-amber-500 pl-6">
          <h2 className="text-3xl font-bold text-white tracking-tight">Growth Metrics</h2>
          <p className="text-zinc-500 text-sm mt-2">
            Classify your operational scale and market orientation.
          </p>
        </header>

        <div className="space-y-12">

          {/* MRR / Sales */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-4">
              <IndianRupee size={16} className="text-amber-500" />
              <label className="text-[10px] uppercase font-mono text-zinc-400 tracking-widest font-bold">
                Monthly Sales / MRR *
              </label>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {mrrOptions.map((opt) => (
                <button
                  key={opt.value}
                  type="button"
                  onClick={() => handleChange('eliteFilter', 'mrr', opt.value)}
                  className={`py-4 px-6 rounded-2xl border text-xs font-medium transition-all text-center ${
                    eliteFilter.mrr === opt.value
                      ? 'bg-amber-500/10 border-amber-500 text-amber-400 shadow-[0_0_20px_rgba(245,158,11,0.1)]'
                      : `bg-zinc-950/40 text-zinc-500 hover:border-zinc-600 ${
                          fieldErrors.mrr ? 'border-red-500/70' : 'border-zinc-800'
                        }`
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
            <FieldError message={fieldErrors.mrr} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

            {/* Team Size */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 mb-4">
                <Users size={16} className="text-amber-500" />
                <label className="text-[10px] uppercase font-mono text-zinc-400 tracking-widest font-bold">
                  Team Size *
                </label>
              </div>
              <div className="flex flex-wrap gap-2">
                {teamOptions.map((opt) => (
                  <button
                    key={opt.value}
                    type="button"
                    onClick={() => handleChange('eliteFilter', 'teamSize', opt.value)}
                    className={`px-4 py-2 rounded-xl border text-[10px] font-bold transition-all ${
                      eliteFilter.teamSize === opt.value
                        ? 'bg-amber-500 border-amber-500 text-black'
                        : `text-zinc-500 hover:border-zinc-600 ${
                            fieldErrors.teamSize ? 'border-red-500/70' : 'border-zinc-800'
                          }`
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
              <FieldError message={fieldErrors.teamSize} />
            </div>

            {/* Funding Status */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 mb-4">
                <Wallet size={16} className="text-amber-500" />
                <label className="text-[10px] uppercase font-mono text-zinc-400 tracking-widest font-bold">
                  Funding Status *
                </label>
              </div>
              <div className="grid grid-cols-1 gap-2">
                {fundingOptions.map((opt) => (
                  <button
                    key={opt.value}
                    type="button"
                    onClick={() => handleChange('eliteFilter', 'fundingStatus', opt.value)}
                    className={`w-full py-3 px-5 rounded-xl border text-left text-xs transition-all ${
                      eliteFilter.fundingStatus === opt.value
                        ? 'bg-zinc-800 border-amber-500 text-white'
                        : `bg-zinc-950/20 text-zinc-600 hover:border-zinc-700 ${
                            fieldErrors.fundingStatus ? 'border-red-500/70' : 'border-zinc-800'
                          }`
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
              <FieldError message={fieldErrors.fundingStatus} />
            </div>
          </div>

          {/* Market Classification */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-4">
              <Layers size={16} className="text-amber-500" />
              <label className="text-[10px] uppercase font-mono text-zinc-400 tracking-widest font-bold">
                Market Classification *
              </label>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
              {marketOptions.map((opt) => (
                <button
                  key={opt.value}
                  type="button"
                  onClick={() => handleChange('eliteFilter', 'marketClassification', opt.value)}
                  className={`py-4 rounded-2xl border text-[10px] font-black tracking-tighter transition-all ${
                    eliteFilter.marketClassification === opt.value
                      ? 'bg-white text-black border-white'
                      : `bg-zinc-950/40 text-zinc-600 hover:border-zinc-600 ${
                          fieldErrors.marketClassification ? 'border-red-500/70' : 'border-zinc-800'
                        }`
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
            <FieldError message={fieldErrors.marketClassification} />
          </div>

        </div>
      </div>
    </div>
  );
};

export default BusinessMetrics;