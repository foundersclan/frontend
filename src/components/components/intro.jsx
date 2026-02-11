import { useEffect, useState } from "react";
import { ReactTyped } from "react-typed";
import { motion, AnimatePresence } from "framer-motion";

export const Intro = ({ onFinish }) => {
  const [percent, setPercent] = useState(0);

  useEffect(() => {
  
    const interval = setInterval(() => {
      setPercent((prev) => (prev < 100 ? prev + 1 : 100));
    }, 20);

    const timer = setTimeout(() => {
      onFinish();
    }, 3500);

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, [onFinish]);

  return (
    <motion.div
      exit={{ y: "-100%", opacity: 0 }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      className="bg-zinc-950 w-full h-screen flex flex-col justify-center items-center overflow-hidden fixed inset-0 z-[200]"
    >

      <motion.div 
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.1 }}
        transition={{ duration: 2 }}
        className="absolute"
      >
        <img src="/assets/logowithoutbg.png" className="w-[400px] md:w-[600px] grayscale" alt="" />
      </motion.div>

     
      <motion.div 
        initial={{ top: "-10%" }}
        animate={{ top: "110%" }}
        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        className="absolute left-0 w-full h-[2px] bg-yellow-500/20 shadow-[0_0_20px_rgba(234,179,8,0.5)] z-10"
      />

     
      <div className="relative z-20 flex flex-col items-center">
        <div className="mb-4">
          <ReactTyped
            strings={["INITIALIZING...", "BYPASSING PROTOCOLS...", "WELCOME TO FOUNDERS."]}
            typeSpeed={30}
            backSpeed={20}
            className="font-mono text-yellow-500 text-xs md:text-sm tracking-[0.4em] uppercase"
          />
        </div>

        <h1 className="font-black md:text-[120px] text-6xl bg-gradient-to-b from-white via-zinc-400 to-zinc-800 bg-clip-text text-transparent font-diplomata-sc text-center leading-none tracking-tighter">
          FOUNDERS
        </h1>

    
        <div className="mt-12 w-64 md:w-96">
          <div className="flex justify-between font-mono text-[10px] text-zinc-600 mb-2 tracking-widest">
            <span>SYSTEM STATUS: ACTIVE</span>
            <span>{percent}%</span>
          </div>
          <div className="h-[1px] w-full bg-zinc-900 overflow-hidden relative">
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: `${percent}%` }}
              className="h-full bg-yellow-500 shadow-[0_0_10px_#EAB308]"
            />
          </div>
        </div>
      </div>

      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_#09090b_100%)]" />
    </motion.div>
  );
};