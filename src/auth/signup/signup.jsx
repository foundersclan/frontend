import { NavLink } from "react-router-dom";
import { useSignup } from "./viewmodels/useSignup";
import { Loader } from "../../components/components/loading";
import { motion } from "motion/react";
import { UserPlus, Mail, Lock, Phone, User, ShieldCheck } from "lucide-react";

const Signup = () => {
  const { userdata, errors, setUserData, handleSignup, loading } = useSignup();

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-black flex items-center justify-center px-4 py-10 sm:px-6 lg:px-8">
      {loading && <Loader />}

      {/* 1. CINEMATIC VIDEO BACKGROUND (Consistent with Login) */}
      <div className="absolute inset-0 z-0">
        <video
          src="https://res.cloudinary.com/davbxkvoc/video/upload/f_auto,q_auto,ac_none,w_1920/v1783705525/bgvideo_p5ympx.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="w-full h-full object-cover opacity-40 grayscale-[40%]"
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-black via-transparent to-zinc-950/80" />
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[3px]" />
      </div>

      {/* 2. REGISTRATION TERMINAL */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-20 w-full max-w-[550px] mx-4"
      >
        <div className="bg-zinc-900/40 backdrop-blur-3xl border border-white/10 p-8 md:p-10 rounded-[2.5rem] shadow-2xl">

          {/* Header */}
          <div className="mb-8 flex justify-between items-end">
            <div>
              <h2 className="text-3xl font-bold text-white tracking-tighter">
                INITIATE <span className="text-yellow-500 italic">ACCESS.</span>
              </h2>
              <p className="text-zinc-500 text-[10px] font-mono uppercase tracking-[0.3em] mt-1">
                Founders Clan Member Enrollment
              </p>
            </div>
            <ShieldCheck className="text-yellow-500/50 size-8 mb-1" strokeWidth={1} />
          </div>

          {/* Form Grid */}
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="relative group">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 size-4 text-zinc-500 group-focus-within:text-yellow-500 transition-colors" />
                <input
                  type="text"
                  placeholder="First Name"
                  value={userdata.firstName}
                  onChange={(e) => setUserData({ ...userdata, firstName: e.target.value })}
                  className="w-full bg-black/40 border border-white/5 rounded-xl py-3.5 pl-12 pr-4 text-white text-sm placeholder:text-zinc-600 focus:border-yellow-500/50 outline-none transition-all"
                />
                {errors.firstName && <p className="text-red-500 text-[9px] mt-1 font-mono uppercase italic">{errors.firstName}</p>}
              </div>

              <div className="relative group">
                <input
                  type="text"
                  placeholder="Last Name"
                  value={userdata.lastName}
                  onChange={(e) => setUserData({ ...userdata, lastName: e.target.value })}
                  className="w-full bg-black/40 border border-white/5 rounded-xl py-3.5 px-4 text-white text-sm placeholder:text-zinc-600 focus:border-yellow-500/50 outline-none transition-all"
                />
                {errors.lastName && <p className="text-red-500 text-[9px] mt-1 font-mono uppercase italic">{errors.lastName}</p>}
              </div>
            </div>

            <div className="relative group">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 size-4 text-zinc-500 group-focus-within:text-yellow-500 transition-colors" />
              <input
                type="email"
                placeholder="Secure Email Address"
                value={userdata.email}
                onChange={(e) => setUserData({ ...userdata, email: e.target.value })}
                className="w-full bg-black/40 border border-white/5 rounded-xl py-3.5 pl-12 pr-4 text-white text-sm placeholder:text-zinc-600 focus:border-yellow-500/50 outline-none transition-all"
              />
              {errors.email && <p className="text-red-500 text-[9px] mt-1 font-mono uppercase italic">{errors.email}</p>}
            </div>

            <div className="relative group">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 size-4 text-zinc-500 group-focus-within:text-yellow-500 transition-colors" />
              <input
                type="password"
                placeholder="Cipher (Password)"
                value={userdata.password}
                onChange={(e) => setUserData({ ...userdata, password: e.target.value })}
                className="w-full bg-black/40 border border-white/5 rounded-xl py-3.5 pl-12 pr-4 text-white text-sm placeholder:text-zinc-600 focus:border-yellow-500/50 outline-none transition-all"
              />
              {errors.password && <p className="text-red-500 text-[9px] mt-1 font-mono uppercase italic">{errors.password}</p>}
            </div>

            <div className="relative group">
              <Phone className="absolute left-4 top-1/2 -translate-y-1/2 size-4 text-zinc-500 group-focus-within:text-yellow-500 transition-colors" />
              <input
                type="tel"
                placeholder="Communication Line (Phone)"
                value={userdata.phone}
                onChange={(e) => setUserData({ ...userdata, phone: e.target.value })}
                className="w-full bg-black/40 border border-white/5 rounded-xl py-3.5 pl-12 pr-4 text-white text-sm placeholder:text-zinc-600 focus:border-yellow-500/50 outline-none transition-all"
              />
              {errors.phone && <p className="text-red-500 text-[9px] mt-1 font-mono uppercase italic">{errors.phone}</p>}
            </div>

            <motion.button
              whileHover={{ y: -2, boxShadow: "0 20px 40px rgba(234, 179, 8, 0.15)" }}
              whileTap={{ scale: 0.98 }}
              onClick={handleSignup}
              className="w-full bg-yellow-500 hover:bg-yellow-400 text-black font-black uppercase text-[10px] sm:text-[11px]
tracking-[0.2em] sm:tracking-[0.25em] py-4 sm:py-5 rounded-xl transition-all flex items-center justify-center gap-3 mt-8 shadow-xl"
            >
              <UserPlus size={16} /> Complete Registration
            </motion.button>
          </div>

          {/* Footer Navigation */}
          <div className="mt-8 pt-6 border-t border-white/5 text-center">
            <p className="text-zinc-500 text-xs">
              Already a verified member?{" "}
              <NavLink to="/login" className="text-yellow-500 font-bold hover:text-yellow-400 transition-colors">
                Return to Login
              </NavLink>
            </p>
          </div>
        </div>

        {/* Legal Micro-copy */}
        <p className="mt-6 text-center text-[9px] text-zinc-500 font-mono uppercase tracking-widest">
          By registering, you agree to the Clan's protocols & data ethics.
        </p>
      </motion.div>
    </div>
  );
};

export default Signup;