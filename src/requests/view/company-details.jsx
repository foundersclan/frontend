import React from 'react';
import { motion } from 'framer-motion';
import { 
  Building2, Globe, Target, Calendar, 
  ShieldCheck, FileText, ChevronDown, Hash
} from 'lucide-react';

const FieldError = ({ message }) =>
  message ? <p className="text-[11px] text-red-400 px-1 mt-1">{message}</p> : null;

const BusinessIntelligence = ({ formData, handleChange, fieldErrors = {}, onNext }) => {
  const { businessDetails } = formData;

  const inputClass = (field) =>
    `w-full bg-zinc-950/50 border rounded-2xl pl-12 pr-4 py-4 focus:border-amber-500 outline-none transition-all ${
      fieldErrors[field] ? 'border-red-500/70' : 'border-zinc-800'
    }`;

  const stages = [
    { id: 'ideation',       label: 'Ideation',       sub: 'Pitch Deck / MVP' },
    { id: 'early_traction', label: 'Early Traction', sub: 'First few customers' },
    { id: 'growth',         label: 'Growth',         sub: 'Consistent Revenue' },
    { id: 'scaling',        label: 'Scaling',        sub: 'Series A+ / High Revenue' }
  ];

  const industries = [
    'SaaS', 'Fintech', 'E-commerce',
    'EdTech', 'Service-based', 'Manufacturing', 'Others'
  ];

  return (
    <div className="text-slate-300">
      <div className="w-full">

        <header className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            Business Intelligence
          </h2>
          <p className="text-zinc-500 text-sm mt-3 max-w-xl">
            Provide the technical specifications of your venture for club classification.
          </p>
        </header>

        <div className="space-y-10">

          {/* 1. Core Identity */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {/* Company Name */}
            <div className="space-y-2">
              <label className="text-[10px] uppercase font-mono text-zinc-500 tracking-widest px-1">
                Startup / Company Name *
              </label>
              <div className="relative">
                <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-600" size={18} />
                <input
                  type="text"
                  placeholder="e.g. Acme Corp"
                  value={businessDetails.companyName}
                  onChange={(e) => handleChange('businessDetails', 'companyName', e.target.value)}
                  className={inputClass('companyName')}
                />
              </div>
              <FieldError message={fieldErrors.companyName} />
            </div>

            {/* Inception Date */}
            <div className="space-y-2">
              <label className="text-[10px] uppercase font-mono text-zinc-500 tracking-widest px-1">
                Inception Date *
              </label>
              <div className="relative">
                <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-600" size={18} />
                <input
                  type="month"
                  value={businessDetails.businessStartedDate}
                  onChange={(e) => handleChange('businessDetails', 'businessStartedDate', e.target.value)}
                  className={`${inputClass('businessStartedDate')} text-zinc-400`}
                />
              </div>
              <FieldError message={fieldErrors.businessStartedDate} />
            </div>
          </div>

          {/* 2. Business Idea */}
          <div className="space-y-2">
            <div className="flex justify-between items-center px-1">
              <label className="text-[10px] uppercase font-mono text-zinc-500 tracking-widest">
                Business Idea (One Sentence) *
              </label>
              <span className={`text-[10px] font-mono ${
                businessDetails.businessIdea.length > 240 ? 'text-red-500' : 'text-zinc-600'
              }`}>
                {businessDetails.businessIdea.length}/250
              </span>
            </div>
            <textarea
              maxLength={250}
              placeholder="Describe what you are building..."
              value={businessDetails.businessIdea}
              onChange={(e) => handleChange('businessDetails', 'businessIdea', e.target.value)}
              className={`w-full bg-zinc-950/50 border rounded-2xl p-4 h-24 focus:border-amber-500 outline-none transition-all resize-none text-sm leading-relaxed ${
                fieldErrors.businessIdea ? 'border-red-500/70' : 'border-zinc-800'
              }`}
            />
            <FieldError message={fieldErrors.businessIdea} />
          </div>

          {/* 3. Industry & Website */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {/* Industry */}
            <div className="space-y-2">
              <label className="text-[10px] uppercase font-mono text-zinc-500 tracking-widest px-1">
                Industry / Niche *
              </label>
              <div className="relative">
                <Target className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-600 pointer-events-none" size={18} />
                <select
                  value={businessDetails.industryType}
                  onChange={(e) => handleChange('businessDetails', 'industryType', e.target.value)}
                  className={`w-full bg-zinc-950/50 border rounded-2xl pl-12 pr-10 py-4 focus:border-amber-500 outline-none transition-all appearance-none text-sm text-zinc-400 ${
                    fieldErrors.industryType ? 'border-red-500/70' : 'border-zinc-800'
                  }`}
                >
                  <option value="">Select Industry</option>
                  {industries.map((industry) => (
                    <option key={industry} value={industry.toLowerCase()}>
                      {industry}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-600 pointer-events-none" size={16} />
              </div>
              <FieldError message={fieldErrors.industryType} />
            </div>

            {/* Website */}
            <div className="space-y-2">
              <label className="text-[10px] uppercase font-mono text-zinc-500 tracking-widest px-1">
                Website URL (Optional)
              </label>
              <div className="relative">
                <Globe className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-600" size={18} />
                <input
                  type="url"
                  placeholder="https://..."
                  value={businessDetails.websiteUrl}
                  onChange={(e) => handleChange('businessDetails', 'websiteUrl', e.target.value)}
                  className={`w-full bg-zinc-950/50 border rounded-2xl pl-12 pr-4 py-4 focus:border-amber-500 outline-none transition-all text-sm ${
                    fieldErrors.websiteUrl ? 'border-red-500/70' : 'border-zinc-800'
                  }`}
                />
              </div>
              <FieldError message={fieldErrors.websiteUrl} />
            </div>
          </div>

          {/* 4. Business Stage */}
          <div className="space-y-4">
            <label className="text-[10px] uppercase font-mono text-zinc-500 tracking-widest px-1">
              Current Stage of Business *
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {stages.map((s) => (
                <label
                  key={s.id}
                  className={`p-4 border rounded-2xl cursor-pointer transition-all ${
                    businessDetails.currentStage === s.id
                      ? 'bg-amber-500/10 border-amber-500 shadow-[0_0_20px_rgba(245,158,11,0.1)]'
                      : fieldErrors.currentStage
                        ? 'bg-zinc-950/30 border-red-500/70 hover:border-red-400'
                        : 'bg-zinc-950/30 border-zinc-800 hover:border-zinc-700'
                  }`}
                >
                  <input
                    type="radio"
                    name="stage"
                    className="hidden"
                    onChange={() => handleChange('businessDetails', 'currentStage', s.id)}
                  />
                  <p className={`text-xs font-bold uppercase tracking-tight ${
                    businessDetails.currentStage === s.id ? 'text-amber-400' : 'text-zinc-400'
                  }`}>
                    {s.label}
                  </p>
                  <p className="text-[10px] text-zinc-600 mt-1">{s.sub}</p>
                </label>
              ))}
            </div>
            <FieldError message={fieldErrors.currentStage} />
          </div>

          <hr className="border-zinc-800/50" />

          {/* 5. Registration Dossier */}
          <div className="space-y-6">
            <div className="flex items-center gap-2 mb-2">
              <ShieldCheck className="text-green-500/50" size={16} />
              <h3 className="text-[10px] uppercase font-mono text-zinc-400 tracking-widest font-bold">
                Registration Dossier
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

              {/* GST */}
              <div className="space-y-2">
                <div className="flex justify-between px-1">
                  <label className="text-[10px] uppercase font-mono text-zinc-500 tracking-widest">
                    GST Number (optional)
                  </label>
                  <span className="text-[9px] text-amber-500/70 font-bold uppercase tracking-tighter">
                    Recommended Filter
                  </span>
                </div>
                <div className="relative">
                  <Hash className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-600" size={18} />
                  <input
                    type="text"
                    placeholder="22AAAAA0000A1Z5"
                    value={businessDetails.gstNumber}
                    onChange={(e) => handleChange('businessDetails', 'gstNumber', e.target.value.toUpperCase())}
                    className={`w-full bg-zinc-950/50 border rounded-2xl pl-12 pr-4 py-4 focus:border-amber-500 outline-none transition-all placeholder:text-zinc-800 ${
                      fieldErrors.gstNumber ? 'border-red-500/70' : 'border-zinc-800'
                    }`}
                  />
                </div>
                <FieldError message={fieldErrors.gstNumber} />
              </div>

              {/* CIN */}
              <div className="space-y-2">
                <label className="text-[10px] uppercase font-mono text-zinc-500 tracking-widest px-1">
                  CIN (If Registered)
                </label>
                <div className="relative">
                  <FileText className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-600" size={18} />
                  <input
                    type="text"
                    placeholder="U12345MH2023PTC123456"
                    value={businessDetails.cinNumber}
                    onChange={(e) => handleChange('businessDetails', 'cinNumber', e.target.value.toUpperCase())}
                    className={`w-full bg-zinc-950/50 border rounded-2xl pl-12 pr-4 py-4 focus:border-amber-500 outline-none transition-all placeholder:text-zinc-800 ${
                      fieldErrors.cinNumber ? 'border-red-500/70' : 'border-zinc-800'
                    }`}
                  />
                </div>
                <FieldError message={fieldErrors.cinNumber} />
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default BusinessIntelligence;