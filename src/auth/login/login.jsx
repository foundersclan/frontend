import React from "react";
import { NavLink } from "react-router-dom";
import { useLogin } from "./viewmodels/uselogin";
import { Loader } from "../../components/components/loading";
import { motion } from "motion/react";
import { Lock, Mail, Phone, ChevronRight } from "lucide-react";

export const Login = () => {
  const {
    role,
    setRole,
    userCred,
    setUserCred,
    errors,
    handleLogin,
    loading,
    handleGoogleSignIn
  } = useLogin();

  return (
    <div className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-black">
      {loading && <Loader />}

      {/* 1. CINEMATIC VIDEO BACKGROUND */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover opacity-50 grayscale-[50%]"
        >
          <source src="/assets/bgvideo.mp4" type="video/mp4" />
        </video>
        {/* Vignette & Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black" />
        <div className="absolute inset-0 bg-zinc-950/40 backdrop-blur-[2px]" />
      </div>

      {/* 2. LOGIN TERMINAL */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-20 w-full max-w-[450px] mx-4"
      >
        <div className="bg-zinc-900/40 backdrop-blur-2xl border border-white/10 p-8 md:p-12 rounded-[2rem] shadow-2xl">
          
          {/* Header */}
          <div className="text-center mb-10">
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              className="inline-block p-3 rounded-full bg-yellow-500/10 border border-yellow-500/20 mb-4"
            >
              <Lock className="text-yellow-500 size-6" />
            </motion.div>
            <h2 className="text-3xl font-bold text-white tracking-tighter">
              IDENTITY <span className="text-yellow-500 italic">CHECK.</span>
            </h2>
            <p className="text-zinc-500 text-xs font-mono uppercase tracking-[0.2em] mt-2">
              Enter your credentials to proceed
            </p>
          </div>

          {/* Form */}
          <div className="space-y-4">
            <div className="relative group">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 size-4 text-zinc-500 group-focus-within:text-yellow-500 transition-colors" />
              <input
                type="email"
                placeholder="Email Address"
                value={userCred.email}
                onChange={(e) => setUserCred({ ...userCred, email: e.target.value })}
                className="w-full bg-black/40 border border-white/5 rounded-xl py-4 pl-12 pr-4 text-white placeholder:text-zinc-600 focus:border-yellow-500/50 focus:ring-1 focus:ring-yellow-500/20 outline-none transition-all font-light"
              />
              {errors.email && <p className="text-red-500 text-[10px] mt-1 ml-2 font-mono uppercase tracking-widest">{errors.email}</p>}
            </div>

            <div className="relative group">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 size-4 text-zinc-500 group-focus-within:text-yellow-500 transition-colors" />
              <input
                type="password"
                placeholder="Password"
                value={userCred.password}
                onChange={(e) => setUserCred({ ...userCred, password: e.target.value })}
                className="w-full bg-black/40 border border-white/5 rounded-xl py-4 pl-12 pr-4 text-white placeholder:text-zinc-600 focus:border-yellow-500/50 focus:ring-1 focus:ring-yellow-500/20 outline-none transition-all font-light"
              />
              {errors.password && <p className="text-red-500 text-[10px] mt-1 ml-2 font-mono uppercase tracking-widest">{errors.password}</p>}
            </div>

            <div className="relative group">
              <Phone className="absolute left-4 top-1/2 -translate-y-1/2 size-4 text-zinc-500 group-focus-within:text-yellow-500 transition-colors" />
              <input
                type="tel"
                placeholder="Direct Line (Phone)"
                value={userCred.phone}
                onChange={(e) => setUserCred({ ...userCred, phone: e.target.value })}
                className="w-full bg-black/40 border border-white/5 rounded-xl py-4 pl-12 pr-4 text-white placeholder:text-zinc-600 focus:border-yellow-500/50 focus:ring-1 focus:ring-yellow-500/20 outline-none transition-all font-light"
              />
              {errors.phone && <p className="text-red-500 text-[10px] mt-1 ml-2 font-mono uppercase tracking-widest">{errors.phone}</p>}
            </div>

            <motion.button
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleLogin}
              className="w-full bg-yellow-500 hover:bg-yellow-400 text-black font-black uppercase tracking-[0.2em] text-xs py-5 rounded-xl shadow-xl shadow-yellow-500/10 transition-all flex items-center justify-center gap-2 mt-6"
            >
              Authorize Access <ChevronRight size={16} />
            </motion.button>
          </div>

          {/* Divider */}
          <div className="flex items-center gap-4 my-8">
            <div className="h-px bg-white/5 flex-grow" />
            <span className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest">External Auth</span>
            <div className="h-px bg-white/5 flex-grow" />
          </div>

          {/* Google Sign In */}
          <button 
            onClick={handleGoogleSignIn}
            className="w-full border border-white/10 hover:bg-white/5 text-white py-4 rounded-xl flex items-center justify-center gap-3 transition-all duration-300 group"
          >
            <img src="/assets/google.svg" className="size-5 group-hover:scale-110 transition-transform" alt="Google" />
            <span className="text-xs font-mono uppercase tracking-widest">Secure via Google</span>
          </button>

          {/* Footer */}
          <div className="mt-10 text-center">
            <p className="text-zinc-500 text-xs">
              New to the Clan?{" "}
              <NavLink to="/signup" className="text-yellow-500 font-bold hover:underline underline-offset-4">
                Request Invitation
              </NavLink>
            </p>
          </div>
        </div>
      </motion.div>

      {/* Decorative ID tag */}
      <div className="absolute bottom-10 left-10 hidden lg:block">
        <p className="text-[10px] font-mono text-zinc-700 tracking-[0.5em] leading-relaxed uppercase">
          System: Founders v2.0 <br />
          Status: Awaiting Verification
        </p>
      </div>
    </div>
  );
};