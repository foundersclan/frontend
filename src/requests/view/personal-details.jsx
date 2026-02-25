import React from 'react';
import {
    User, Mail, Calendar, Linkedin, Phone,
} from 'lucide-react';

// Reusable error message component
const FieldError = ({ message }) =>
    message ? <p className="text-[11px] text-red-400 px-1 mt-1">{message}</p> : null;

const PersonalDetails = ({
    formData,
    handleChange,
    fieldErrors = {},
    onNext,
}) => {
    const { personalDetails } = formData;

    // Helper: highlight border red if field has error
    const inputClass = (field) =>
        `w-full bg-zinc-950/50 border rounded-2xl pl-12 pr-4 py-4 focus:border-amber-500 outline-none transition-all ${
            fieldErrors[field] ? 'border-red-500/70' : 'border-zinc-800'
        }`;

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

                                {/* Full Name */}
                                <div>
                                    <div className="relative">
                                        <User className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-600" size={18} />
                                        <input
                                            type="text"
                                            placeholder="Full Name *"
                                            value={personalDetails.fullName}
                                            onChange={(e) => handleChange('personalDetails', 'fullName', e.target.value)}
                                            className={inputClass('fullName')}
                                        />
                                    </div>
                                    <FieldError message={fieldErrors.fullName} />
                                </div>

                                {/* Date of Birth */}
                                <div>
                                    <div className="relative">
                                        <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-600" size={18} />
                                        <input
                                            type="date"
                                            value={personalDetails.dob}
                                            onChange={(e) => handleChange('personalDetails', 'dob', e.target.value)}
                                            className={`${inputClass('dob')} text-zinc-400`}
                                        />
                                    </div>
                                    <FieldError message={fieldErrors.dob} />
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
                                    { label: 'Founder',      value: 'founder'      },
                                    { label: 'Co-Founder',   value: 'co-founder'   },
                                    { label: 'Solo Founder', value: 'solo-founder' }
                                ].map((role) => (
                                    <label
                                        key={role.value}
                                        className={`relative flex items-center p-3.5 bg-zinc-950/30 border rounded-2xl cursor-pointer hover:border-zinc-600 transition-all ${
                                            fieldErrors.founderType ? 'border-red-500/70' : 'border-zinc-800'
                                        }`}
                                    >
                                        <input
                                            type="radio"
                                            name="role"
                                            className="hidden"
                                            checked={personalDetails.founderType === role.value}
                                            onChange={() => handleChange('personalDetails', 'founderType', role.value)}
                                        />
                                        <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center mr-4 ${
                                            personalDetails.founderType === role.value ? 'border-amber-500' : 'border-zinc-700'
                                        }`}>
                                            {personalDetails.founderType === role.value && (
                                                <div className="w-2 h-2 bg-amber-500 rounded-full" />
                                            )}
                                        </div>
                                        <span className="text-xs font-medium uppercase tracking-wider">{role.label}</span>
                                    </label>
                                ))}
                                <FieldError message={fieldErrors.founderType} />
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

                            {/* Email */}
                            <div className="space-y-2">
                                <label className="text-[10px] text-zinc-500 font-bold uppercase px-1">
                                    Primary Email *
                                </label>
                                <div className="relative">
                                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-600" size={18} />
                                    <input
                                        type="email"
                                        placeholder="ceo@company.com"
                                        value={personalDetails.email}
                                        onChange={(e) => handleChange('personalDetails', 'email', e.target.value)}
                                        className={`w-full bg-zinc-950/50 border rounded-2xl pl-12 pr-4 py-4 focus:border-amber-500 outline-none text-sm ${
                                            fieldErrors.email ? 'border-red-500/70' : 'border-zinc-800'
                                        }`}
                                    />
                                </div>
                                <FieldError message={fieldErrors.email} />
                            </div>

                            {/* WhatsApp */}
                            <div className="space-y-2">
                                <label className="text-[10px] text-zinc-500 font-bold uppercase px-1">
                                    WhatsApp Number *
                                </label>
                                <div className="relative">
                                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-600" size={18} />
                                    <input
                                        type="tel"
                                        placeholder="9876543210"
                                        value={personalDetails.whatsapp}
                                        onChange={(e) => handleChange('personalDetails', 'whatsapp', e.target.value)}
                                        className={`w-full bg-zinc-950/50 border rounded-2xl pl-12 pr-4 py-4 focus:border-amber-500 outline-none text-sm ${
                                            fieldErrors.whatsapp ? 'border-red-500/70' : 'border-zinc-800'
                                        }`}
                                    />
                                </div>
                                <FieldError message={fieldErrors.whatsapp} />
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
                                    className={`w-full bg-zinc-950/50 border rounded-2xl pl-12 pr-4 py-4 focus:border-amber-500 outline-none text-sm ${
                                        fieldErrors.linkedin ? 'border-red-500/70' : 'border-zinc-800'
                                    }`}
                                />
                            </div>
                            <FieldError message={fieldErrors.linkedin} />
                        </div>
                    </div>

                    <hr className="border-zinc-800/50" />

                    {/* Location */}
                    <div className="space-y-6">
                        <h3 className="text-[10px] uppercase font-mono text-amber-500 tracking-[0.3em] font-bold">
                            04. Location
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                            {/* State */}
                            <div className="space-y-2">
                                <label className="text-[10px] text-zinc-500 font-bold uppercase px-1">
                                    State *
                                </label>
                                <input
                                    type="text"
                                    placeholder="e.g., Karnataka"
                                    value={personalDetails.state}
                                    onChange={(e) => handleChange('personalDetails', 'state', e.target.value)}
                                    className={`w-full bg-zinc-950/50 border rounded-2xl px-4 py-4 focus:border-amber-500 outline-none text-sm ${
                                        fieldErrors.state ? 'border-red-500/70' : 'border-zinc-800'
                                    }`}
                                />
                                <FieldError message={fieldErrors.state} />
                            </div>

                            {/* City */}
                            <div className="space-y-2">
                                <label className="text-[10px] text-zinc-500 font-bold uppercase px-1">
                                    City *
                                </label>
                                <input
                                    type="text"
                                    placeholder="e.g., Bangalore"
                                    value={personalDetails.city}
                                    onChange={(e) => handleChange('personalDetails', 'city', e.target.value)}
                                    className={`w-full bg-zinc-950/50 border rounded-2xl px-4 py-4 focus:border-amber-500 outline-none text-sm ${
                                        fieldErrors.city ? 'border-red-500/70' : 'border-zinc-800'
                                    }`}
                                />
                                <FieldError message={fieldErrors.city} />
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PersonalDetails;