import { Instagram, Linkedin, Youtube, ArrowUpCircle } from "lucide-react";
import { motion } from "framer-motion"; 
import { Link } from "react-router-dom";

const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
};
export const Footer = () => {

    // Social data array - Fixed syntax
    const socialLinks = [
        { Icon: Instagram, path: "https://www.instagram.com/foundersclan/" },
        { Icon: Linkedin, path: "https://www.linkedin.com/in/founders-clan-157208350/" },
        { Icon: Youtube, path: "https://www.youtube.com/channel/UCUggs5dM1_dVGRx5TaAkvmg/posts?pvf=CAI%253D" }
    ];

    return (
        <footer className="bg-zinc-950 pt-32 pb-12 px-6 border-t border-white/5 relative overflow-hidden">
            
            {/* Background Decor */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 opacity-[0.02] pointer-events-none select-none">
                <h2 className="text-[25vw] font-black tracking-tighter text-white">FOUNDERS</h2>
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-24">
                    
                    {/* Brand Section */}
                    <div className="md:col-span-5 space-y-8">
                        <h2 className="text-4xl font-bold text-white tracking-tighter">
                            FOUNDERS<span className="text-yellow-500">CLAN.</span>
                        </h2>
                        <p className="text-zinc-500 text-lg max-w-sm leading-relaxed">
                            Architecting the next generation of visionary leaders. 
                            Our community is built on the pillars of radical growth and absolute excellence.
                        </p>
                        <div className="flex gap-5">
                            {socialLinks.map(({ Icon, path }, i) => (
                                <motion.a
                                    key={i}
                                    href={path}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ y: -3, color: "#EAB308" }}
                                    className="text-zinc-400 transition-colors"
                                >
                                    <Icon size={22} strokeWidth={1.5} />
                                </motion.a>
                            ))}
                        </div>
                    </div>

                    {/* Links Grid */}
                    <div className="md:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-10">
                        <FooterGroup 
                            title="Navigation" 
                            links={["About", "Team","Blog"]} 
                        />
                        <FooterGroup 
                            title="Resources" 
                            links={[ "Services","Events", "Support"]} 
                        />
                        {/* <FooterGroup 
                            title="Legal" 
                            links={["Privacy", "Terms", "Licensing"]} 
                        /> */}
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
                    <p className="text-zinc-600 font-mono text-[10px] uppercase tracking-[0.3em]">
                        © {new Date().getFullYear()} Founders Clan // All Rights Reserved
                    </p>
                    
                    <button 
                        onClick={scrollToTop}
                        className="group flex items-center gap-3 text-zinc-500 hover:text-yellow-500 transition-colors duration-500"
                    >
                        <span className="font-mono text-[10px] uppercase tracking-[0.2em]">Return to Top</span>
                        <ArrowUpCircle className="group-hover:-translate-y-1 transition-transform" size={20} strokeWidth={1} />
                    </button>

                    <div className="flex gap-8">
                        <span className="text-zinc-700 text-[12px] font-mono uppercase tracking-widest">Made by founders</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};


/* eslint-disable react/prop-types */
const FooterGroup = ({ title, links }) => (
    <div className="space-y-6">
        <h3 className="text-white font-mono text-[10px] uppercase tracking-[0.4em] opacity-50">
            {title}
        </h3>
        <ul className="space-y-4">
            {links.map((link) => (
                <li key={link}  onClick={scrollToTop}>
                    {/* Using Link for internal routing instead of <a> */}
                    <Link 
                        to={`/${link.toLowerCase().replace(/\s+/g, '-')}`} 
                        className="text-zinc-400 hover:text-yellow-500 text-sm transition-all duration-300 relative group block w-fit"
                    >
                        {link}
                        <span className="absolute left-0 -bottom-1 w-0 h-px bg-yellow-500 transition-all duration-300 group-hover:w-full" />
                    </Link>
                </li>
            ))}
        </ul>
    </div>
);