import { motion } from "motion/react";

export const Loader = () => {
    return (
        <div className="fixed inset-0 z-[300] bg-zinc-950/80 backdrop-blur-md flex flex-col justify-center items-center">
            <div className="relative flex items-center justify-center">
                
                
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                    className="absolute size-32 border-t-2 border-b-2 border-yellow-500/30 rounded-full"
                />

                
                <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    className="absolute size-24 border-l-2 border-r-2 border-yellow-500 rounded-full"
                />

          
                <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 1, repeat: Infinity }}
                    className="relative z-10"
                >
                    <div className="size-4 bg-yellow-500 rounded-full shadow-[0_0_20px_#EAB308]" />
                </motion.div>
            </div>

           
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mt-12 flex flex-col items-center gap-2"
            >
                <span className="text-yellow-500 text-[10px] font-mono uppercase tracking-[0.5em] animate-pulse">
                    Verifying Identity
                </span>
                <div className="flex gap-1">
                    {[0, 1, 2].map((i) => (
                        <motion.div
                            key={i}
                            animate={{ opacity: [0, 1, 0] }}
                            transition={{ duration: 1, delay: i * 0.2, repeat: Infinity }}
                            className="size-1 bg-yellow-500/50 rounded-full"
                        />
                    ))}
                </div>
            </motion.div>
        </div>
    );
};