import { collection, addDoc, Timestamp } from "firebase/firestore";
import { useState } from "react";
import { toast } from "react-toastify";
import { firedb } from "../firebase/firebaseconfig";
import { useNavigate } from "react-router-dom";
import { Mail, ArrowRight, Instagram, Linkedin, Twitter } from "lucide-react";
import { motion } from "motion/react";

export const ContactForm = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [userDetails, setUserDetails] = useState({
        username: "",
        email: "",
        number: "",
        time: Timestamp.now(),
        date: new Date().toLocaleString("en-US", {
            month: "short", day: "2-digit", year: "numeric"
        })
    });

    const addUser = async (e) => {
        e.preventDefault();
        setLoading(true);
        if (!userDetails.username || !userDetails.email || !userDetails.number) {
            toast.warn("Please provide your credentials.");
            setLoading(false);
            return;
        }
        try {
            const userRef = collection(firedb, 'users');
            await addDoc(userRef, userDetails);
            toast.success("Welcome to the inner circle.");
            setLoading(false);
            navigate("/");
        } catch (error) {
            toast.error("An error occurred. Please try again.");
            setLoading(false);
        }
    };

    return (
        <section className="bg-zinc-950 py-32 px-6 flex items-center justify-center min-h-screen relative overflow-hidden">
            
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-yellow-500/50 to-transparent" />
            
            <div className="max-w-7xl mx-auto w-full">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-start">
                    
                  
                    <motion.div 
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="lg:col-span-5"
                    >
                        <span className="text-yellow-500 font-mono tracking-[0.4em] text-xs uppercase mb-6 block">
                            Direct Access // Concierge
                        </span>
                        <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tighter leading-tight mb-8">
                            START YOUR <br />
                            <span className="text-zinc-700 italic font-light">LEGACY HERE.</span>
                        </h2>
                        <p className="text-zinc-400 text-lg leading-relaxed mb-12 max-w-md">
                            Join an elite collective of visionaries. Secure your access to private seminars, 
                            VC syndicates, and a network that moves the needle.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-center gap-4 group cursor-pointer">
                                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:border-yellow-500 transition-all">
                                    <Mail className="text-yellow-500 size-5" />
                                </div>
                                <span className="text-zinc-300 font-medium">membership@foundersclan.com</span>
                            </div>
                            
                           
                            <div className="flex gap-6 pt-6">
                                {[Instagram, Twitter, Linkedin].map((Icon, i) => (
                                    <motion.div
                                        key={i}
                                        whileHover={{ y: -5, color: "#EAB308" }}
                                        className="text-zinc-500 cursor-pointer transition-colors"
                                    >
                                        <Icon size={24} strokeWidth={1.5} />
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                  
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="lg:col-span-7 bg-zinc-900/40 border border-white/5 p-8 md:p-16 rounded-[2rem] backdrop-blur-sm"
                    >
                        <form className="space-y-10">
                            <div className="space-y-8">
                                <InputField 
                                    label="Full Name" 
                                    placeholder="Enter your name" 
                                    value={userDetails.username}
                                    onChange={(v) => setUserDetails({...userDetails, username: v})}
                                />
                                <InputField 
                                    label="Business Email" 
                                    type="email" 
                                    placeholder="name@company.com" 
                                    value={userDetails.email}
                                    onChange={(v) => setUserDetails({...userDetails, email: v})}
                                />
                                <InputField 
                                    label="Direct Line" 
                                    type="tel" 
                                    placeholder="+1 (555) 000-0000" 
                                    value={userDetails.number}
                                    onChange={(v) => setUserDetails({...userDetails, number: v})}
                                />
                            </div>

                            <motion.button
                                onClick={addUser}
                                disabled={loading}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full h-20 bg-yellow-500 text-black font-black uppercase tracking-[0.2em] text-xs flex items-center justify-center gap-4 group transition-all"
                            >
                                {loading ? "Processing..." : "Submit Application"}
                                <ArrowRight className="size-4 group-hover:translate-x-2 transition-transform" />
                            </motion.button>

                            <p className="text-center text-zinc-600 text-xs tracking-widest uppercase">
                                By joining, you agree to our private membership terms.
                            </p>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};


const InputField = ({ label, type = "text", placeholder, value, onChange }) => (
    <div className="relative group">
        <label className="text-zinc-500 font-mono text-[10px] uppercase tracking-[0.3em] block mb-2 group-focus-within:text-yellow-500 transition-colors">
            {label}
        </label>
        <input 
            type={type}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder={placeholder}
            className="w-full bg-transparent border-b border-zinc-800 py-4 text-white text-xl placeholder:text-zinc-700 focus:outline-none focus:border-yellow-500 transition-all font-light"
        />
    </div>
);