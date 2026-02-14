import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { User, Building, BarChart3, MessageSquare, ShieldCheck, ArrowLeft,MoveLeft } from 'lucide-react';
import PersonalDetails from "./view/personal-details";
import BusinessIntelligence from "./view/company-details";
import BusinessMetrics from "./view/revenue-details";
import QualitativeIntelligence from "./view/questionaire";
import FinalVetting from "./view/referal";
import { useRequests } from './viewmodel/userequests';
import { Link } from 'react-router-dom';

const Requests = () => {

  const {
    formData,
    currentStep,
    loading,
    error,
    handleChange,
    handleContributionChange,
    nextStep,
    prevStep,
    handleSubmit,
    resetForm,
  } = useRequests();
  const sections = [
    { id: 'personal',    label: 'Identity',      icon: <User size={16} />,        component: PersonalDetails },
    { id: 'business',    label: 'Intelligence',   icon: <Building size={16} />,    component: BusinessIntelligence },
    { id: 'metrics',     label: 'Metrics',        icon: <BarChart3 size={16} />,   component: BusinessMetrics },
    { id: 'qualitative', label: 'Questionnaire',  icon: <MessageSquare size={16}/>,component: QualitativeIntelligence },
    { id: 'vetting',     label: 'Referral',       icon: <ShieldCheck size={16} />, component: FinalVetting },
  ];

  const ActiveComponent = sections[currentStep].component;
  const isLastStep = currentStep === sections.length - 1;

  return (
    <div className="min-h-screen bg-[#020202] text-slate-300 overflow-x-hidden">
       <div className="max-w-7xl mx-auto p-6">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-slate-600 hover:text-orange-500 transition-colors group"
        >
          <MoveLeft className="size-5 group-hover:-translate-x-1 transition-transform" />
          <span className="font-medium">Back to Home</span>
        </Link>
      </div>
      {/* 1. Global Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-zinc-900 z-[100]">
        <motion.div
          className="h-full bg-amber-500"
          initial={{ width: "0%" }}
          animate={{ width: `${((currentStep + 1) / sections.length) * 100}%` }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        />
      </div>

      {/* 2. Background Glows */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[20%] w-[600px] h-[600px] bg-amber-500/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[10%] w-[500px] h-[500px] bg-indigo-500/5 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row relative">

        {/* 3. Sticky Navigation Sidebar */}
        <aside className="hidden lg:block w-80 h-screen sticky top-0 p-12 border-r border-zinc-800/50">
          <div className="mb-12">
            <h1 className="text-xl font-black tracking-[0.3em] text-white">
              FOUNDERS<span className="text-amber-500">CLAN</span>
            </h1>
            <p className="text-[10px] text-zinc-500 uppercase tracking-widest mt-2">
              Step {currentStep + 1} of {sections.length}
            </p>
          </div>

          <nav className="space-y-6">
            {sections.map((section, idx) => (
              <div
                key={section.id}
                className={`flex items-center gap-4 transition-all duration-500 ${
                  currentStep === idx ? 'opacity-100 translate-x-2' : 'opacity-30'
                }`}
              >
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center border transition-all ${
                  currentStep === idx
                    ? 'border-amber-500 bg-amber-500/10 text-amber-500'
                    : 'border-zinc-800 text-zinc-600'
                }`}>
                  {section.icon}
                </div>
                <div className="flex flex-col">
                  <span className={`text-xs font-bold uppercase tracking-widest ${
                    currentStep === idx ? 'text-white' : 'text-zinc-700'
                  }`}>
                    {section.label}
                  </span>
                </div>
              </div>
            ))}
          </nav>
        </aside>

        {/* 4. Content Area */}
        <main className="flex-1 px-4 py-12 md:p-12 lg:p-24 relative min-h-screen flex flex-col">

          {/* Back Button */}
          {currentStep > 0 && (
            <button
              onClick={prevStep}
              className="mb-8 flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-zinc-500 hover:text-white transition-colors w-fit"
            >
              <ArrowLeft size={14} /> Back to {sections[currentStep - 1].label}
            </button>
          )}

          {/* Error Message */}
          {error && (
            <div className="mb-6 px-4 py-3 bg-red-500/10 border border-red-500/20 rounded-xl text-red-400 text-xs">
              {error}
            </div>
          )}

          <div className="flex-1">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                <ActiveComponent
                  formData={formData}
                  handleChange={handleChange}
                  handleContributionChange={handleContributionChange}
                  onNext={nextStep}
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Controls */}
          <div className="mt-12 pt-8 border-t border-zinc-800/50 flex justify-end">
            {isLastStep ? (
              <button
                onClick={handleSubmit}
                disabled={loading}
                className="bg-amber-500 text-black px-12 py-4 rounded-2xl font-black text-[10px] uppercase tracking-[0.2em] hover:bg-amber-400 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Submitting...' : 'Submit Application'}
              </button>
            ) : (
              <button
                onClick={nextStep}
                className="bg-white text-black px-12 py-4 rounded-2xl font-black text-[10px] uppercase tracking-[0.2em] hover:bg-amber-500 transition-all"
              >
                Continue to {sections[currentStep + 1].label}
              </button>
            )}
          </div>

        </main>
      </div>
    </div>
  );
};

export default Requests;