import { LogOut, X, User, Users, ArrowUpRight } from "lucide-react";
import React from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";

const Hamburger = ({ click, handleMenu }) => {
  const links = [
    { name: "The Team", path: "/team" },
    { name: "Our Manifesto", path: "/about" },
    { name: "Private Events", path: "/events" },
    { name: "Concierge Support", path: "/support" },
  ];

  return (
    <AnimatePresence>
      {click && (
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="fixed top-0 right-0 z-[110] h-screen w-full md:w-[450px] bg-zinc-950 border-l border-white/5 shadow-[-50px_0_100px_rgba(0,0,0,0.9)] flex flex-col"
        >
         
          <div className="flex justify-between items-center p-8">
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              transition={{ delay: 0.3 }}
              className="flex items-center gap-3 px-4 py-2 rounded-full bg-zinc-900 border border-white/5"
            >
              <User className="size-4 text-yellow-500" />
              <span className="text-white text-xs font-mono uppercase tracking-widest">Guest Member</span>
            </motion.div>

            <button 
              onClick={handleMenu}
              className="p-4 rounded-full bg-zinc-900 text-yellow-500 hover:rotate-90 transition-transform duration-500"
            >
              <X size={30} strokeWidth={1} />
            </button>
          </div>

          
          <nav className="flex flex-col justify-center flex-grow px-12 space-y-8">
            <p className="text-zinc-600 font-mono text-[10px] uppercase tracking-[0.4em] mb-4">Directory</p>
            {links.map((link, i) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + i * 0.1 }}
              >
                <NavLink 
                  to={link.path} 
                  onClick={handleMenu}
                  className="group flex items-end gap-4"
                >
                  <span className="text-zinc-800 text-2xl font-light font-mono group-hover:text-yellow-500/20 transition-colors">
                    0{i + 1}
                  </span>
                  <span className="text-4xl md:text-5xl font-bold text-zinc-300 group-hover:text-white group-hover:italic transition-all duration-300">
                    {link.name}
                  </span>
                  <ArrowUpRight className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all text-yellow-500 mb-2" size={24} />
                </NavLink>
              </motion.div>
            ))}
          </nav>

        
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="p-12 border-t border-white/5"
          >
            <button className="flex items-center gap-4 text-zinc-500 hover:text-red-400 transition-colors uppercase font-mono text-xs tracking-[0.3em]">
              <LogOut size={16} />
              Terminate Session
            </button>
            <div className="mt-8">
                <p className="text-zinc-700 text-[10px] leading-relaxed">
                    © FOUNDERS CLAN <br />
                    PRIVATE ACCESS ONLY // EST. 2025
                </p>
            </div>
          </motion.div>

          
          <div className="absolute bottom-10 right-[-20px] rotate-90 origin-bottom-right opacity-[0.03] pointer-events-none">
            <h2 className="text-9xl font-black text-white whitespace-nowrap">NAVIGATION</h2>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Hamburger;