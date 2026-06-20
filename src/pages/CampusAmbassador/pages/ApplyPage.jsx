import { useState } from "react";
import { Send,Check,Building,ArrowUpRight,ShieldCheck,User,Mail,Linkedin,Terminal,Activity ,Cpu,Globe,Trophy,Users,
} from "lucide-react";
import { Button } from "../components/shared/Button";

// Reusable Premium Input field component with floating highlights
/* eslint-disable react/prop-types */
function FormField({
  label,
  id,
  name,
  type = "text",
  required = false,
  value,
  onChange,
  placeholder,
  icon: Icon,
}) {
  return (
    <div className="group relative">
      <label
        htmlFor={id}
        className="flex items-center gap-1.5 text-[12px] font-bold tracking-widest text-zinc-400 uppercase mb-2.5 transition-colors group-focus-within:text-amber-400"
      >
        {Icon && (
          <Icon className="w-3.5 h-3.5 text-zinc-500 group-focus-within:text-amber-400/80 transition-colors" />
        )}
        {label} {required && <span className="text-amber-400/80">*</span>}
      </label>
      <div className="relative">
        <input
          type={type}
          id={id}
          name={name}
          required={required}
          value={value}
          onChange={onChange}
          className="w-full bg-zinc-950/80 border border-white/10 rounded-xl pl-4 pr-10 py-3.5 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-amber-400/40 focus:ring-4 focus:ring-amber-400/5 transition-all duration-300"
          placeholder={placeholder}
        />
      </div>
    </div>
  );
}

export function ApplicationForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    company: "",
    role: "",
    stage: "",
    linkedin: "",
    reason: "",
    goals: "",
  });

  const [formStage, setFormStage] = useState("editing"); // editing | transmitting | success
  const [transmissionProgress, setTransmissionProgress] = useState(0);
  const [activePacketLog, setActivePacketLog] = useState("");

  // Live calculation of completion progress for interactive user feedb
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStage("transmitting");
    setTransmissionProgress(10);
    setActivePacketLog("Allocating secure operational buffers...");

    // Stage 1: Security Handshake
    setTimeout(() => {
      setTransmissionProgress(35);
      setActivePacketLog("Injecting encrypted validation payload...");
    }, 800);

    // Stage 2: Triage Verification
    setTimeout(() => {
      setTransmissionProgress(70);
      setActivePacketLog("Passing localized vetting screening telemetry...");
    }, 1600);

    // Stage 3: Packet Transmitted
    setTimeout(() => {
      setTransmissionProgress(100);
      setActivePacketLog("Transmission authorized successfully.");
    }, 2400);

    // Final Stage: Success Render
    setTimeout(() => {
      setFormStage("success");
    }, 3000);
  };

  const resetForm = () => {
    setFormStage("editing");
    setTransmissionProgress(0);
    setActivePacketLog("");
    setFormData({
      fullName: "",
      email: "",
      company: "",
      role: "",
      stage: "",
      linkedin: "",
      reason: "",
      goals: "",
    });
  };

  if (formStage === "transmitting") {
    return (
      <div className="relative overflow-hidden bg-zinc-950/85 border border-amber-400/20 rounded-[32px] p-8 md:p-12 text-center backdrop-blur-3xl shadow-[0_30px_60px_rgba(0,0,0,0.8)] min-h-[500px] flex flex-col justify-center items-center">
        <div className="absolute top-0 left-0 w-full h-1 bg-zinc-900 overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-amber-400 to-amber-200 transition-all duration-300 shadow-[0_0_12px_#f59e0b]"
            style={{ width: `${transmissionProgress}%` }}
          />
        </div>
        <div className="relative mb-8">
          <div className="w-24 h-24 rounded-full border border-amber-400/20 bg-amber-400/5 flex items-center justify-center animate-spin duration-[4000ms]">
            <Cpu className="w-10 h-10 text-amber-400 animate-pulse" />
          </div>
          <div className="absolute inset-0 rounded-full bg-amber-400/5 blur-xl animate-ping" />
        </div>
        <h3 className="text-2xl font-black tracking-widest text-white uppercase mb-2">
          Transmitting Payload
        </h3>
        <p className="text-zinc-500 text-xs tracking-widest uppercase mb-8">
          Secure handshake in progress...
        </p>

        <div className="w-full max-w-md bg-black/80 border border-white/5 rounded-xl p-4 text-left font-mono text-[11px] text-zinc-400 shadow-inner">
          <div className="flex items-center gap-2 text-amber-400/80 mb-2 border-b border-white/5 pb-1.5">
            <Terminal className="w-3.5 h-3.5" />
            <span>ENCRYPTED TERMINAL LINK</span>
          </div>
          <div className="space-y-1">
            <p className="text-zinc-500 animate-pulse">
              &gt; Initializing secure transport layer...
            </p>
            <p className="text-zinc-300">
              &gt; Payload weight calculated: {JSON.stringify(formData).length}{" "}
              bytes
            </p>
            <p className="text-amber-400/90">&gt; {activePacketLog}</p>
          </div>
        </div>
      </div>
    );
  }

  if (formStage === "success") {
    return (
      <div className="relative overflow-hidden bg-zinc-950/85 border border-amber-400/20 rounded-[32px] p-8 md:p-12 text-center backdrop-blur-3xl shadow-[0_30px_60px_rgba(0,0,0,0.8)] min-h-[500px] flex flex-col justify-center items-center">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-amber-500/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative z-10">
          <div className="w-20 h-20 bg-amber-400/10 border border-amber-400/30 rounded-full flex items-center justify-center mx-auto mb-8 animate-bounce">
            <Check className="w-10 h-10 text-amber-400" />
          </div>
          <h3 className="text-3xl font-black tracking-tighter text-white uppercase mb-4">
            Transmission Received.
          </h3>
          <p className="text-zinc-400 max-w-lg mx-auto text-sm leading-relaxed mb-8">
            Your telemetry profile has successfully reached the Founders Clan
            security core. Our vetting nodes triage applications inside 48
            hours. Keep an active eye on your communication channels.
          </p>

          <div className="flex flex-col items-center gap-4">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900/60 border border-white/5 text-[10px] font-bold tracking-wider text-zinc-400 uppercase">
              <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
              CLEARED FOR MANUAL CLAN AUDIT
            </div>

            <button
              onClick={resetForm}
              className="text-xs text-zinc-500 hover:text-white underline transition-colors underline-offset-4 cursor-pointer"
            >
              Submit another payload
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="relative overflow-hidden bg-zinc-950/65 border border-white/10 rounded-[32px] p-6 md:p-10 backdrop-blur-2xl shadow-[0_30px_60px_rgba(0,0,0,0.8)] group hover:border-white/15 transition-all duration-500 z-10"
    >
      {/* Laser Gradient Accent Line on top */}
      <div className="absolute top-0 left-10 right-10 h-px bg-gradient-to-r from-transparent via-amber-400/30 to-transparent pointer-events-none" />

      {/* Background orbs */}
      <div className="absolute top-1/4 -left-12 w-24 h-24 bg-purple-500/5 rounded-full blur-2xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-12 w-24 h-24 bg-amber-500/5 rounded-full blur-2xl pointer-events-none" />

      {/* Form Input Blocks */}
      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <FormField
          label="Full Name"
          id="fullName"
          name="fullName"
          required
          value={formData.fullName}
          onChange={handleChange}
          placeholder="e.g. Satoshi Nakamoto"
          icon={User}
        />
        <FormField
          label="Email Address"
          id="email"
          name="email"
          type="email"
          required
          value={formData.email}
          onChange={handleChange}
          placeholder="satoshi@bitcoin.org"
          icon={Mail}
        />
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <FormField
          label="College / Organisation Name"
          id="college"
          name="college"
          required
          value={formData.company}
          onChange={handleChange}
          placeholder="e.g. ABC University"
          icon={Building}
        />
        <FormField
          label="Your Core Role"
          id="role"
          name="role"
          required
          value={formData.role}
          onChange={handleChange}
          placeholder="e.g. Lead Core Developer"
          icon={Activity}
        />
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-6">
        {/* Customized Select wrapper */}
        <div className="group relative">
          <label
            htmlFor="stage"
            className="flex items-center gap-1.5 text-[10px] font-bold tracking-widest text-zinc-400 uppercase mb-2.5 transition-colors group-focus-within:text-amber-400"
          >
            <Building className="w-3.5 h-3.5 text-zinc-500 group-focus-within:text-amber-400/80" />
            Company Stage <span className="text-amber-400/80">*</span>
          </label>
          <div className="relative">
            <select
              id="stage"
              name="stage"
              required
              value={formData.stage}
              onChange={handleChange}
              className="w-full bg-zinc-950/80 border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white focus:outline-none focus:border-amber-400/40 focus:ring-4 focus:ring-amber-400/5 transition-all duration-300 appearance-none cursor-pointer"
            >
              <option value="" className="bg-[#050505]">
                Select Stage
              </option>
              <option value="idea" className="bg-[#050505]">
                Idea Stage
              </option>
              <option value="mvp" className="bg-[#050505]">
                MVP / Pre-launch
              </option>
              <option value="early" className="bg-[#050505]">
                Early Stage (0-1M ARR)
              </option>
              <option value="growth" className="bg-[#050505]">
                Growth Stage (1M-10M ARR)
              </option>
              <option value="scale" className="bg-[#050505]">
                Scale Stage (10M+ ARR)
              </option>
            </select>
            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-zinc-500">
              <ArrowUpRight className="w-4 h-4" />
            </div>
          </div>
        </div>

        <FormField
          label="LinkedIn Profile"
          id="linkedin"
          name="linkedin"
          value={formData.linkedin}
          onChange={handleChange}
          placeholder="https://linkedin.com/in/founders"
          icon={Linkedin}
        />
      </div>

      <div className="mb-6">
        <label
          htmlFor="reason"
          className="block text-[12px] font-bold tracking-widest text-zinc-400 uppercase mb-2.5"
        >
          Why do you want to join the clan?{" "}
          <span className="text-amber-400/80">*</span>
        </label>
        <textarea
          id="reason"
          name="reason"
          required
          value={formData.reason}
          onChange={handleChange}
          rows={3}
          className="w-full bg-zinc-950/80 border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-amber-400/40 focus:ring-4 focus:ring-amber-400/5 transition-all duration-300 resize-none leading-relaxed"
          placeholder="Detail your execution speed and why the clan is your next strategic home..."
        />
      </div>

      <div className="mb-10">
        <label
          htmlFor="goals"
          className="block text-[12px] font-bold tracking-widest text-zinc-400 uppercase mb-2.5"
        >
          What are your main goals for the next 6-12 months?{" "}
          <span className="text-amber-400/80">*</span>
        </label>
        <textarea
          id="goals"
          name="goals"
          required
          value={formData.goals}
          onChange={handleChange}
          rows={3}
          className="w-full bg-zinc-950/80 border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-amber-400/40 focus:ring-4 focus:ring-amber-400/5 transition-all duration-300 resize-none leading-relaxed"
          placeholder="Tell us about the big product milestones you're planning to execute..."
        />
      </div>

      <Button 
        label="Submit Application" 
        icon={Send} 
        variant="submit"
        iconClassName="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform"
      />
    </form>
  );
}

export function ApplyPage() {
  return (
    <div className="relative pt-28 pb-20 min-h-screen w-full bg-[#2f183944] text-white font-sans overflow-hidden flex flex-col justify-start items-center">

      {/* Ambient Lighting Orbs resembling system design accents */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-amber-500/10 rounded-full blur-[140px] pointer-events-none z-0" />
      <div className="absolute bottom-10 left-10 w-[300px] h-[300px] bg-purple-600/5 rounded-full blur-[100px] pointer-events-none z-0" />

      {/* CORE WRAPPER */}
      <div className="relative w-full max-w-7xl mx-auto px-6 z-10 flex flex-col">
        {/* UPPER TAG BAR */}
        <div className="flex flex-col items-center text-center mb-16">
          <h1 className="text-4xl md:text-7xl font-black tracking-tighter uppercase leading-[0.95] mb-6">
            ENTER THE <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-200 via-amber-400 to-amber-200 drop-shadow-[0_2px_15px_rgba(245,158,11,0.25)]">
              FOUNDERS COHORT.
            </span>
          </h1>

          <p className="text-zinc-400 text-sm md:text-lg max-w-xl mx-auto font-medium tracking-wide">
            State your operational benchmarks. We are curating hyper-focused
            technical teams scaling next-generation protocols.
          </p>
        </div>

        {/* ASYMMETRICAL COLUMN DIVISION */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mt-4">
          {/* Left Column: Core Community Highlights (Clean information layout) */}
          <div className="lg:col-span-5 space-y-8 lg:sticky lg:top-28">
            <div className="p-6 rounded-[24px] border border-white/5 bg-zinc-950/45 backdrop-blur-xl space-y-6">
              <h3 className="text-xl font-black tracking-widest text-amber-400 uppercase">
                THE CLEARANCE MANIFESTO
              </h3>

              <div className="space-y-6">
                {/* Protocol Point 1 */}
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-lg bg-amber-400/10 flex items-center justify-center text-amber-400 shrink-0">
                    <Globe className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-1">
                      Global Node Network
                    </h4>
                    <p className="text-base text-zinc-400 leading-relaxed">
                      Instant coordination with over 20K+ highly technical
                      organizers worldwide.
                    </p>
                  </div>
                </div>

                {/* Protocol Point 2 */}
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-400 shrink-0">
                    <Trophy className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-1">
                      Resource Allocations
                    </h4>
                    <p className="text-base text-zinc-400 leading-relaxed">
                      Sovereign access to dedicated micro-grants, scaling
                      networks, and exclusive venture pipelines.
                    </p>
                  </div>
                </div>

                {/* Protocol Point 3 */}
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400 shrink-0">
                    <Users className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-1">
                      High-Signal Sprints
                    </h4>
                    <p className="text-base text-zinc-400 leading-relaxed">
                      Bi-weekly virtual builder roundtables designed strictly to
                      clear product launch bottlenecks.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Upgraded Application Form Card */}
          <div className="lg:col-span-7">
            <ApplicationForm />
          </div>
        </div>
      </div>
    </div>
  );
}
