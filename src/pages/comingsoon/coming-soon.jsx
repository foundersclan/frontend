import React from 'react';
import { motion } from 'framer-motion';
import { Clock, ShieldAlert, ArrowLeft } from 'lucide-react';
import { NavLink } from 'react-router-dom';

export const ComingSoon = () => {
  return (
    <div className="relative h-screen w-full flex flex-col items-center justify-center bg-[#050505] overflow-hidden px-6">
      
    
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-yellow-500/5 blur-[120px] rounded-full" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

     
      <div className="relative z-10 flex flex-col items-center text-center">
        
     
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-yellow-500/20 bg-yellow-500/5 mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-yellow-500"></span>
          </span>
          <span className="text-[10px] font-mono text-yellow-500 uppercase tracking-[0.2em]">Deployment in Progress</span>
        </motion.div>

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="font-diplomata-sc text-5xl md:text-8xl text-white tracking-tighter leading-none mb-4">
            COMING <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-yellow-200 to-yellow-600 italic">SOON.</span>
          </h1>
        </motion.div>

       
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-zinc-500 text-sm md:text-base max-w-md font-light leading-relaxed mb-12"
        >
          The architects are currently calibrating this sector. Access will be granted shortly to all verified Clan members.
        </motion.p>

    
        <div className="w-64 h-1 bg-zinc-900 rounded-full overflow-hidden mb-12 relative">
          <motion.div 
            initial={{ x: "-100%" }}
            animate={{ x: "0%" }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-500 to-transparent"
          />
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <NavLink 
            to="/" 
            className="group flex items-center gap-3 text-zinc-400 hover:text-white transition-colors text-xs font-mono uppercase tracking-widest"
          >
            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
            Return to Command Center
          </NavLink>
        </motion.div>
      </div>

     
      <div className="absolute bottom-10 w-full px-12 hidden md:flex justify-between items-end opacity-20 pointer-events-none font-mono">
        <div className="text-[9px] text-zinc-500 uppercase tracking-[0.4em]">
          Protocol: CLN-404 <br />
          Status: Encrypted
        </div>
        <div className="text-[9px] text-zinc-500 uppercase tracking-[0.4em] text-right">
          Founders Clan // {new Date().getFullYear()} <br />
          v0.8.2-Alpha
        </div>
      </div>

    </div>
  );
};