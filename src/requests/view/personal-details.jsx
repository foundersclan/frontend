import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    User, Mail, Calendar, Linkedin, Phone,
    CheckCircle2
} from 'lucide-react';

const PersonalDetails = ({ formData, handleChange, onNext }) => {
    const { personalDetails } = formData;

    const [showEmailOTP, setShowEmailOTP] = useState(false);
    const [showWhatsappOTP, setShowWhatsappOTP] = useState(false);
    const [isEmailVerified, setIsEmailVerified] = useState(false);
    const [isWhatsappVerified, setIsWhatsappVerified] = useState(false);

    const handleVerifyOTP = (type) => {
        if (type === 'Email') setIsEmailVerified(true);
        if (type === 'WhatsApp') setIsWhatsappVerified(true);
    };

    return (
        <div className="text-slate-300">
            <div className="w-full">

                <header className="mb-12">
                    <h1 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
                        Onboarding Profile
                    </h1>
                    <p className="text-zinc-500 text-sm mt-3">
                        Enter your credentials to access the FoundersClan secure network.
                    </p>
                </header>

                <div className="space-y-12">

                    {/* Section 1 & 2: Identity & Status */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

                        {/* Legal Identity */}
                        <div className="space-y-6">
                            <h3 className="text-[10px] uppercase font-mono text-amber-500 tracking-[0.3em] font-bold">
                                01. Legal Identity
                            </h3>
                            <div className="space-y-4">
                                <div className="relative">
                                    <User className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-600" size={18} />
                                    <input
                                        type="text"
                                        placeholder="Full Name *"
                                        value={personalDetails.fullName}
                                        onChange={(e) => handleChange('personalDetails', 'fullName', e.target.value)}
                                        className="w-full bg-zinc-950/50 border border-zinc-800 rounded-2xl pl-12 pr-4 py-4 focus:border-amber-500 outline-none transition-all"
                                    />
                                </div>
                                <div className="relative">
                                    <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-600" size={18} />
                                    <input
                                        type="date"
                                        value={personalDetails.dob}
                                        onChange={(e) => handleChange('personalDetails', 'dob', e.target.value)}
                                        className="w-full bg-zinc-950/50 border border-zinc-800 rounded-2xl pl-12 pr-4 py-4 focus:border-amber-500 outline-none transition-all text-zinc-400"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Founder Status */}
                        <div className="space-y-6">
                            <h3 className="text-[10px] uppercase font-mono text-amber-500 tracking-[0.3em] font-bold">
                                02. Founder Status
                            </h3>
                            <div className="grid grid-cols-1 gap-3">
                                {[
                                    { label: 'Founder', value: 'founder' },
                                    { label: 'Co-Founder', value: 'co-founder' },
                                    { label: 'Solo Founder', value: 'solo-founder' }
                                ].map((role) => (
                                    <label
                                        key={role}
                                        className="relative flex items-center p-3.5 bg-zinc-950/30 border border-zinc-800 rounded-2xl cursor-pointer hover:border-zinc-600 transition-all"
                                    >
                                        <input
                                            type="radio"
                                            name="role"
                                            className="hidden"
                                            onChange={() => handleChange('personalDetails', 'founderType', role.value)}
                                        />

                                        <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center mr-4 ${personalDetails.founderType === role.value ? 'border-amber-500' : 'border-zinc-700'
                                            }`}>
                                            {personalDetails.founderType === role.value && (
                                                <div className="w-2 h-2 bg-amber-500 rounded-full" />
                                            )}
                                        </div>
                                        <span className="text-xs font-medium uppercase tracking-wider">{role.label}</span>
                                    </label>
                                ))}
                            </div>
                        </div>
                    </div>

                    <hr className="border-zinc-800/50" />

                    {/* Section 3: Verified Channels */}
                    <div className="space-y-8">
                        <h3 className="text-[10px] uppercase font-mono text-amber-500 tracking-[0.3em] font-bold">
                            03. Verified Channels
                        </h3>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                            {/* Email + OTP */}
                            <div className="space-y-4">
                                <div className="space-y-2">
                                    <label className="text-[10px] text-zinc-500 font-bold uppercase px-1">
                                        Primary Email *
                                    </label>
                                    <div className="flex gap-2">
                                        <div className="relative flex-1">
                                            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-600" size={18} />
                                            <input
                                                type="email"
                                                placeholder="ceo@company.com"
                                                value={personalDetails.email}
                                                onChange={(e) => handleChange('personalDetails', 'email', e.target.value)}
                                                className="w-full bg-zinc-950/50 border border-zinc-800 rounded-2xl pl-12 pr-4 py-4 focus:border-amber-500 outline-none text-sm"
                                            />
                                        </div>
                                        {!isEmailVerified ? (
                                            <button
                                                type="button"
                                                onClick={() => setShowEmailOTP(true)}
                                                className="px-5 bg-zinc-800 rounded-2xl text-[10px] font-bold uppercase tracking-widest hover:bg-amber-500 hover:text-black transition-all"
                                            >
                                                OTP
                                            </button>
                                        ) : (
                                            <CheckCircle2 className="text-green-500 mt-4" size={24} />
                                        )}
                                    </div>
                                </div>

                                <AnimatePresence>
                                    {showEmailOTP && !isEmailVerified && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            className="overflow-hidden"
                                        >
                                            <div className="bg-zinc-950/80 border border-amber-500/20 p-4 rounded-2xl flex items-center gap-4">
                                                <input
                                                    type="text"
                                                    maxLength={6}
                                                    placeholder="Enter 6-digit Code"
                                                    className="flex-1 bg-transparent text-white font-mono tracking-[0.5em] text-center outline-none border-b border-zinc-800 focus:border-amber-500"
                                                />
                                                <button
                                                    onClick={() => handleVerifyOTP('Email')}
                                                    className="text-[10px] font-bold text-amber-500 uppercase hover:text-white"
                                                >
                                                    Verify
                                                </button>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>

                            {/* WhatsApp + OTP */}
                            <div className="space-y-4">
                                <div className="space-y-2">
                                    <label className="text-[10px] text-zinc-500 font-bold uppercase px-1">
                                        WhatsApp Number *
                                    </label>
                                    <div className="flex gap-2">
                                        <div className="relative flex-1">
                                            <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-600" size={18} />
                                            <input
                                                type="tel"
                                                placeholder="+91 ••• ••• ••••"
                                                value={personalDetails.whatsapp}
                                                onChange={(e) => handleChange('personalDetails', 'whatsapp', e.target.value)}
                                                className="w-full bg-zinc-950/50 border border-zinc-800 rounded-2xl pl-12 pr-4 py-4 focus:border-amber-500 outline-none text-sm"
                                            />
                                        </div>
                                        {!isWhatsappVerified ? (
                                            <button
                                                type="button"
                                                onClick={() => setShowWhatsappOTP(true)}
                                                className="px-5 bg-zinc-800 rounded-2xl text-[10px] font-bold uppercase tracking-widest hover:bg-amber-500 hover:text-black transition-all"
                                            >
                                                OTP
                                            </button>
                                        ) : (
                                            <CheckCircle2 className="text-green-500 mt-4" size={24} />
                                        )}
                                    </div>
                                </div>

                                <AnimatePresence>
                                    {showWhatsappOTP && !isWhatsappVerified && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            className="overflow-hidden"
                                        >
                                            <div className="bg-zinc-950/80 border border-amber-500/20 p-4 rounded-2xl flex items-center gap-4">
                                                <input
                                                    type="text"
                                                    maxLength={6}
                                                    placeholder="Enter Code"
                                                    className="flex-1 bg-transparent text-white font-mono tracking-[0.5em] text-center outline-none border-b border-zinc-800 focus:border-amber-500"
                                                />
                                                <button
                                                    onClick={() => handleVerifyOTP('WhatsApp')}
                                                    className="text-[10px] font-bold text-amber-500 uppercase hover:text-white"
                                                >
                                                    Verify
                                                </button>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </div>

                        {/* LinkedIn */}
                        <div className="space-y-2">
                            <label className="text-[10px] text-zinc-500 font-bold uppercase px-1">
                                LinkedIn Profile URL *
                            </label>
                            <div className="relative">
                                <Linkedin className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-600" size={18} />
                                <input
                                    type="url"
                                    placeholder="linkedin.com/in/username"
                                    value={personalDetails.linkedin}
                                    onChange={(e) => handleChange('personalDetails', 'linkedin', e.target.value)}
                                    className="w-full bg-zinc-950/50 border border-zinc-800 rounded-2xl pl-12 pr-4 py-4 focus:border-amber-500 outline-none text-sm"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PersonalDetails;