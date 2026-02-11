import { NavLink } from "react-router-dom";
import { motion } from "motion/react";

export const NavBar = ({ handleMenu }) => {
  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 w-full z-[100] px-6 md:px-12 py-6 flex justify-between items-center pointer-events-none"
    >
     
      <div className="pointer-events-auto">
        <NavLink to="/" className="group flex items-center gap-4 bg-zinc-900/40 backdrop-blur-xl border border-white/5 p-1.5 pr-6 rounded-full transition-all hover:bg-zinc-900/80">
          <div className="relative">
             <img 
              src="assets/logowithoutbg.png" 
              className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-yellow-500/20 object-cover p-1 bg-zinc-950" 
              alt="Logo" 
            />
            <div className="absolute inset-0 rounded-full border border-yellow-500 animate-pulse opacity-20" />
          </div>
          
          <div className="flex flex-col">
            <span className="font-diplomata-sc text-white text-xs md:text-sm tracking-widest">
              FOUNDERS <b className="text-yellow-500">CLAN</b>
            </span>
            {/* <span className="text-[8px] font-mono text-yellow-500 uppercase tracking-[0.3em]">
             Clan
            </span> */}
          </div>
        </NavLink>
      </div>

     
      <div className="flex items-center gap-4 md:gap-8 pointer-events-auto">
        
        
        <motion.button 
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.98 }}
          className="hidden md:flex h-12 items-center px-8 rounded-full bg-white text-black text-[10px] font-black uppercase tracking-[0.2em] hover:bg-yellow-500 transition-colors duration-500 shadow-2xl shadow-yellow-500/10"
        >
          Request Invitation
        </motion.button>

     
        <button 
          onClick={handleMenu}
          className="group flex flex-col justify-center items-end gap-1.5 w-12 h-12 bg-zinc-900/40 backdrop-blur-xl border border-white/5 rounded-full px-3.5 hover:border-yellow-500/50 transition-all duration-500"
        >
          <div className="w-5 h-px bg-yellow-500 group-hover:w-3 transition-all duration-300" />
          <div className="w-3 h-px bg-white group-hover:w-5 transition-all duration-300" />
          <div className="w-4 h-px bg-yellow-500 group-hover:w-2 transition-all duration-300" />
        </button>
      </div>

   
      <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 hidden lg:flex items-center gap-3">
        <span className="w-1 h-1 rounded-full bg-yellow-500/50" />
        <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-[0.5em] leading-none">
          Live Session // Active
        </span>
        <span className="w-1 h-1 rounded-full bg-yellow-500/50 animate-ping" />
      </div>
    </motion.nav>
  );
};