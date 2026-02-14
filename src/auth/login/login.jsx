import React from "react";
import { NavLink } from "react-router-dom";
import { useLogin } from "./viewmodels/uselogin";
import { Loader } from "../../components/components/loading";
import { motion, AnimatePresence } from "framer-motion";
import { Lock, Mail, Phone, ChevronRight, ShieldCheck, Fingerprint } from "lucide-react";

export const Login = () => {
  const {
    userCred,
    setUserCred,
    errors,
    handleLogin,
    loading,
    handleGoogleSignIn
  } = useLogin();

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#050505]">
      <AnimatePresence>
        {loading && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }}
            className="z-[100]"
          >
            <Loader />
          </motion.div>
        )}
      </AnimatePresence>

      {/* 1. CINEMATIC BACKGROUND LAYER */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover opacity-40 grayscale-[40%]"
        >
          <source src="/assets/bgvideo.mp4" type="video/mp4" />
        </video>
        {/* Advanced Layering for Depth */}
        <div className="absolute inset-0 bg-gradient-to-tr from-black via-black/60 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-yellow-500/5 via-transparent to-transparent" />
      </div>

      {/* 2. RESPONSIVE LOGIN CONTAINER */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-20 w-full max-w-[480px] px-6 py-10 md:px-0"
      >
        <div className="relative group overflow-hidden bg-zinc-900/40 backdrop-blur-xl border border-white/10 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
          
          {/* Subtle Inner Glow */}
          <div className="absolute -top-[20%] -right-[20%] w-64 h-64 bg-yellow-500/10 blur-[80px] rounded-full pointer-events-none" />

          <div className="p-8 md:p-14 relative z-10">
            {/* Header Area */}
            <div className="text-center mb-10">
              <motion.div
                whileHover={{ rotate: 10 }}
                className="inline-flex items-center justify-center p-4 rounded-2xl bg-yellow-500/10 border border-yellow-500/20 mb-6"
              >
                <Fingerprint className="text-yellow-500 size-8" />
              </motion.div>
              <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tighter leading-none">
                IDENTITY <span className="text-yellow-500 font-black italic">CHECK.</span>
              </h2>
              <p className="text-zinc-500 text-[10px] md:text-xs font-mono uppercase tracking-[0.3em] mt-3">
                Secure Access Protocol v2.0
              </p>
            </div>

            {/* Interactive Form Fields */}
            <div className="space-y-4">
              {[
                { id: 'email', icon: Mail, type: 'email', placeholder: 'Email Address' },
                { id: 'password', icon: Lock, type: 'password', placeholder: 'Password' },
                { id: 'phone', icon: Phone, type: 'tel', placeholder: 'Direct Line (Phone)' }
              ].map((field) => (
                <div key={field.id} className="relative group/field">
                  <field.icon className="absolute left-5 top-1/2 -translate-y-1/2 size-4 text-zinc-600 group-focus-within/field:text-yellow-500 transition-colors" />
                  <input
                    type={field.type}
                    placeholder={field.placeholder}
                    value={userCred[field.id]}
                    onChange={(e) => setUserCred({ ...userCred, [field.id]: e.target.value })}
                    className="w-full bg-zinc-950/40 border border-white/5 rounded-2xl py-5 pl-14 pr-4 text-white placeholder:text-zinc-700 focus:border-yellow-500/40 focus:bg-zinc-950/80 outline-none transition-all text-sm"
                  />
                  {errors[field.id] && (
                    <motion.p 
                      initial={{ opacity: 0, x: -5 }} 
                      animate={{ opacity: 1, x: 0 }}
                      className="text-red-500 text-[9px] mt-2 ml-4 font-mono uppercase tracking-widest"
                    >
                      {errors[field.id]}
                    </motion.p>
                  )}
                </div>
              ))}

              <motion.button
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleLogin}
                className="w-full bg-yellow-500 text-black font-black uppercase tracking-[0.2em] text-[11px] py-5 rounded-2xl shadow-xl shadow-yellow-500/20 hover:bg-white hover:text-black transition-all flex items-center justify-center gap-3 mt-8"
              >
                Authorize Entry <ChevronRight size={18} />
              </motion.button>
            </div>

            {/* Divider Logic */}
            <div className="flex items-center gap-4 my-10">
              <div className="h-px bg-white/5 flex-grow" />
              <span className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest px-2">Social Auth</span>
              <div className="h-px bg-white/5 flex-grow" />
            </div>

            {/* Google Integration */}
            <button 
              onClick={handleGoogleSignIn}
              className="w-full border border-white/10 bg-white/5 hover:bg-white/10 text-white py-5 rounded-2xl flex items-center justify-center gap-4 transition-all duration-300 group"
            >
              <img src="/assets/google.svg" className="size-5 group-hover:scale-110 transition-transform" alt="Google" />
              <span className="text-xs font-mono uppercase tracking-widest">Connect via Google</span>
            </button>

            {/* Signup Link */}
            <div className="mt-10 text-center">
              <p className="text-zinc-500 text-xs tracking-tight">
                Not part of the Clan?{" "}
                <NavLink to="/signup" className="text-yellow-500 font-bold hover:text-yellow-400 transition-colors underline underline-offset-8 decoration-yellow-500/30">
                  Request Access
                </NavLink>
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* 3. RESPONSIVE DECORATIVE ELEMENTS */}
      <div className="absolute bottom-6 md:bottom-10 left-6 md:left-10 hidden sm:flex items-center gap-4 opacity-40">
        <div className="w-1 h-12 bg-yellow-500/50" />
        <p className="text-[9px] md:text-[10px] font-mono text-zinc-500 tracking-[0.4em] leading-relaxed uppercase">
          Terminal ID: 00-FC-88 <br />
          Node: North_Region_01 <br />
          <span className="text-yellow-500/60 font-bold">Encrypted Connection</span>
        </p>
      </div>

      <div className="absolute top-10 right-10 hidden xl:flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full backdrop-blur-md">
         <ShieldCheck className="size-3 text-yellow-500" />
         <span className="text-[9px] font-mono text-zinc-400 uppercase tracking-widest">AES-256 Verified</span>
      </div>
    </div>
  );
};