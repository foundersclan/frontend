import React from 'react';
import { 
  BrainCircuit, 
  Zap, 
  Users, 
  MessageSquareText, 
  Check,
  ShieldCheck,
  Crown
} from 'lucide-react';

const QualitativeIntelligence = ({ formData, handleChange, handleContributionChange, onNext }) => {
  const { valueExchange } = formData;

  const contributions = [
    { id: 'technical_expertise',      label: 'Sharing technical expertise (Coding/AI)', icon: <BrainCircuit size={14} /> },
    { id: 'marketing_growth',         label: 'Marketing & Growth hacking tips',         icon: <Zap size={14} /> },
    { id: 'investment_fundraising',   label: 'Investment/Fundraising connections',       icon: <ShieldCheck size={14} /> },
    { id: 'hiring_talent',            label: 'Hiring/Talent advice',                    icon: <Users size={14} /> },
    { id: 'mentoring',                label: 'Mentoring early-stage founders',           icon: <MessageSquareText size={14} /> },
  ];

  return (
    <div className="text-slate-300">
      <div className="w-full">

        <header className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <Crown className="text-amber-500" size={24} />
            <span className="text-[10px] uppercase font-mono text-amber-500 tracking-[0.4em] font-black">
              Final Tier
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
            Community Fit
          </h2>
          <p className="text-zinc-500 text-sm mt-4 max-w-xl leading-relaxed">
            Founders Clan is built on high-signal exchange. Tell us about the challenges 
            you've conquered and how you intend to strengthen the collective.
          </p>
        </header>

        <div className="space-y-12">

          {/* 14. Biggest Problem Solved */}
          <div className="space-y-4">
            <label className="text-[10px] uppercase font-mono text-zinc-400 tracking-widest font-bold px-1">
              14. Biggest Problem Solved (Last 6 Months) *
            </label>
            <textarea
              placeholder="Describe the situation, your intervention, and the outcome..."
              value={valueExchange.biggestProblemSolved}
              onChange={(e) => handleChange('valueExchange', 'biggestProblemSolved', e.target.value)}
              className="w-full bg-zinc-950/50 border border-zinc-800 rounded-[2rem] p-6 h-40 focus:border-amber-500 outline-none transition-all resize-none text-sm leading-relaxed placeholder:text-zinc-700"
            />
          </div>

          {/* 15. Current Challenge */}
          <div className="space-y-4">
            <label className="text-[10px] uppercase font-mono text-zinc-400 tracking-widest font-bold px-1">
              15. Your #1 Challenge Right Now *
            </label>
            <div className="relative">
              <input
                type="text"
                placeholder="e.g. Scaling GTM in SE Asia or Series B Crunch"
                value={valueExchange.currentChallenge}
                onChange={(e) => handleChange('valueExchange', 'currentChallenge', e.target.value)}
                className="w-full bg-zinc-950/50 border border-zinc-800 rounded-2xl px-6 py-5 focus:border-amber-500 outline-none transition-all text-sm"
              />
              <p className="text-[9px] text-zinc-600 mt-2 ml-1 italic">
                Used to curate specific networking cohorts.
              </p>
            </div>
          </div>

          {/* 16. Contributions */}
          <div className="space-y-6">
            <label className="text-[10px] uppercase font-mono text-zinc-400 tracking-widest font-bold px-1">
              16. How can you contribute to Founders Clan? *
            </label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {contributions.map((item) => (
                <div
                  key={item.id}
                  onClick={() => handleContributionChange(item.id)}
                  className={`flex items-center gap-4 p-4 rounded-2xl border cursor-pointer transition-all ${
                    valueExchange.contribution.includes(item.id)
                      ? 'bg-amber-500/10 border-amber-500 text-white'
                      : 'bg-zinc-950/30 border-zinc-800 text-zinc-500 hover:border-zinc-700'
                  }`}
                >
                  <div className={`w-5 h-5 rounded-md border flex items-center justify-center transition-colors ${
                    valueExchange.contribution.includes(item.id)
                      ? 'bg-amber-500 border-amber-500'
                      : 'border-zinc-700'
                  }`}>
                    {valueExchange.contribution.includes(item.id) && (
                      <Check size={14} className="text-black stroke-[3]" />
                    )}
                  </div>
                  <div className="flex items-center gap-2">
                    {item.icon}
                    <span className="text-xs font-medium tracking-tight">{item.label}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 17. Why Elite? */}
          <div className="space-y-4">
            <label className="text-[10px] uppercase font-mono text-zinc-400 tracking-widest font-bold px-1">
              17. Why an "Elite" Community vs. General Groups? *
            </label>
            <textarea
              placeholder="What are you looking for that you haven't found elsewhere?"
              value={valueExchange.whyJoinElite}
              onChange={(e) => handleChange('valueExchange', 'whyJoinElite', e.target.value)}
              className="w-full bg-zinc-950/50 border border-zinc-800 rounded-[2rem] p-6 h-32 focus:border-amber-500 outline-none transition-all resize-none text-sm leading-relaxed"
            />
          </div>

        </div>
      </div>
    </div>
  );
};

export default QualitativeIntelligence;