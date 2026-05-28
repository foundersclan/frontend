import { Sparkle, Target, ShieldCheck, Quote, Compass, Users, VolumeX, Volume2 } from "lucide-react";
import { motion} from "motion/react";
import { useEffect, useRef, useState } from "react";

const CLOUDINARY_VIDEO_URL = import.meta.env.VITE_FOUNDERS_CLAN_INTRO_VIDEO;

export const AboutUs = () => {
  const targetRef = useRef(null);
  const containerRef = useRef(null);
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);

useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!videoRef.current) return;

        if (entry.isIntersecting) {
          videoRef.current.play().catch((err) => {
            console.log("Autoplay was prevented by browser security rules until user interacts:", err);
          });
        } else {
          videoRef.current.pause();
        }
      },
      { threshold: 0.3 } // Triggers playback when 30% of the video section is visible
    );
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    return () => observer.disconnect();
  }, []);

  // 2. Initialize Player once API is ready
const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  return (
    <section
      ref={targetRef}
      className="relative bg-[#050505] py-24 md:py-48 px-6 overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:100px_100px]" />
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-yellow-500/10 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* HEADER: OUR STORY */}
        <div className="flex flex-col lg:flex-row gap-12 mb-20 md:mb-32 items-start lg:items-end">
          <div className="w-full lg:w-3/5">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <span className="flex items-center gap-3 text-yellow-500 font-mono text-[12px] uppercase tracking-[0.5em] mb-6">
                <span className="w-8 h-px bg-yellow-500" /> The Elite Network
              </span>
              <h2 className="text-[12vw] sm:text-7xl md:text-8xl font-bold leading-[0.9] tracking-tighter text-white uppercase">
                Built by{" "}
                <span className="italic text-transparent bg-clip-text bg-gradient-to-b from-yellow-200 to-yellow-600">
                  Founders,
                </span>{" "}
                <br />
                For Founders.
              </h2>
            </motion.div>
          </div>

          <div className="w-full lg:w-2/5 border-l border-zinc-800 pl-8 pb-2">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="space-y-4"
            >
              <h4 className="text-white font-bold uppercase text-sm tracking-widest">
                The Struggle is Real.
              </h4>
              <p className="text-zinc-400 text-base leading-relaxed font-light">
                Ambition alone isn&apos;t enough. Building in a vacuum is the
                fastest way to burn out. We were tired of searching for answers
                alone, so we built the bridge ourselves.
              </p>
            </motion.div>
          </div>
        </div>

        {/* 3. THE FOUNDER & PHILOSOPHY GRID */}
        <div className="grid grid-cols-12 gap-5 md:gap-8">
          {/* Meet Nishant Card */}
          <motion.div
            whileHover={{ y: -8 }}
            className="col-span-12 lg:col-span-5 group relative bg-zinc-900/20 rounded-[2.5rem] overflow-hidden border border-white/[0.03] hover:border-yellow-500/30 backdrop-blur-3xl p-10 md:p-12"
          >
            <div className="flex flex-col h-full">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-20 h-20 rounded-2xl overflow-hidden border-2 border-yellow-500/20">
                  <img
                    src="/team/nishant2.jpeg"
                    alt="Nishant CEO"
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Nishant</h3>
                  <p className="text-yellow-500 text-xs font-mono uppercase tracking-widest">
                    Founder & CEO
                  </p>
                </div>
              </div>
              <Quote className="text-yellow-500/20 w-12 h-12 mb-4" />
              <p className="text-zinc-300 text-lg italic leading-relaxed font-light">
                &quot;I didn&apos;t start this community because I had all the
                answers—I started it because I was tired of searching for them
                alone.&quot;
              </p>
            </div>
          </motion.div>

          {/* Philosophy Card */}
          <motion.div
            whileHover={{ y: -8 }}
            className="col-span-12 lg:col-span-7 group relative bg-gradient-to-br from-zinc-900/40 to-black rounded-[2.5rem] border border-yellow-500/10 hover:border-yellow-500/30 p-10 md:p-12 overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-50 transition-opacity">
              <Sparkle size={120} className="text-yellow-500" />
            </div>
            <span className="text-yellow-500 font-mono text-[10px] uppercase tracking-[0.4em] mb-4 block">
              Our Core Motto
            </span>
            <h3 className="text-4xl md:text-6xl font-black text-white mb-6 uppercase tracking-tighter">
              GIVE FIRST.
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="space-y-2">
                <Users className="text-yellow-500 w-5 h-5" />
                <h4 className="text-white font-bold text-sm">
                  Exclusive Community
                </h4>
                <p className="text-zinc-500 text-xs">
                  No fluff, just growth with serious builders.
                </p>
              </div>
              <div className="space-y-2">
                <Target className="text-yellow-500 w-5 h-5" />
                <h4 className="text-white font-bold text-sm">
                  Direct Mentorship
                </h4>
                <p className="text-zinc-500 text-xs">
                  Guidance from those who&apos;ve walked the path.
                </p>
              </div>
              <div className="space-y-2">
                <Compass className="text-yellow-500 w-5 h-5" />
                <h4 className="text-white font-bold text-sm">
                  Collaborative Scaling
                </h4>
                <p className="text-zinc-500 text-xs">
                  Solve bottlenecks through mutual support.
                </p>
              </div>
            </div>
          </motion.div>

          {/* video section */}

          {/* Parent wrapper needs 'relative' and padding so the peeking boxes don't get clipped,Wrapped the block in a col-span-12 div to obey your parent 12-column grid layout */}
          <div  ref={containerRef} className="col-span-12 w-full my-6 flex justify-center px-4">
            <div className="relative w-full max-w-6xl">
              {/* Top-Left Accent Box Corner Line & Glow */}
              <div className="absolute -top-2 -left-2 w-16 h-16 md:w-28 md:h-28 border-t-2 border-l-2 border-[#FDB913]/40 rounded-tl-2xl pointer-events-none z-20" />
              <div className="absolute -top-2 -left-2 w-[30%] h-[150px] bg-gradient-to-br from-[#FDB913]/10 to-transparent rounded-tl-2xl blur-sm pointer-events-none z-20" />

              {/* Bottom-Right Accent Box Corner Line & Glow */}
              <div className="absolute -bottom-2 -right-2 w-16 h-16 md:w-28 md:h-28 border-b-2 border-r-2 border-[#FDB913]/40 rounded-br-2xl pointer-events-none z-20" />
              <div className="absolute -bottom-2 -right-2 w-[30%] h-[150px] bg-gradient-to-tl from-[#FDB913]/10 to-transparent rounded-br-2xl blur-sm pointer-events-none z-20" />

              <motion.div
                whileHover={{ scale: 1.010 }}
                transition={{ duration: 0.3 }}
                className="relative z-10 w-full rounded-3xl border border-white/5 bg-zinc-900/40 p-3 backdrop-blur-sm shadow-2xl"
              >
                <div className="w-full aspect-video rounded-2xl bg-black mx-auto overflow-hidden relative">
                  <div 
              className="absolute inset-0 z-30 bg-transparent select-none" 
              onContextMenu={(e) => e.preventDefault()}
            />
                  <div className="hidden md:block absolute top-4 left-4 z-20 bg-black/60 backdrop-blur-md text-white font-mono md:text-[10px] uppercase tracking-widest px-3 py-1 rounded-full border border-white/10 pointer-events-none select-none">
                    Clan Member Exclusive // Do Not Distribute
                  </div>
                  <video
                    ref={videoRef}
                    src={CLOUDINARY_VIDEO_URL}
                    className="w-full h-full object-cover"
                    loop
                    playsInline
                    // muted
                  />
                  <button
                    onClick={toggleMute}
                    className="absolute bottom-4 right-4 z-30 flex items-center gap-1 bg-black/60 hover:bg-black/80 backdrop-blur-md text-white text-xs font-mono font-bold tracking-wider px-4 py-2 rounded-xl border border-white/10 transition-all active:scale-95"
                  >
                    {isMuted ? (
                      <>
                        <VolumeX className=" w-3 h-3 md:w-4.5 md:h-4.5 text-yellow-500" />
                        {/* UNMUTE */}
                      </>
                    ) : (
                      <>
                        <Volume2 className="w-3 h-3 md:w-4.5 md:h-4.5 text-green-500" />
                        {/* MUTE  */}
                      </>
                    )}
                  </button>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Path Selection Table (The Choice) */}
          <div className="col-span-12 grid grid-cols-1 lg:grid-cols-2 gap-5 mt-8">
            <div className="p-10 bg-zinc-900/10 border border-white/5 rounded-[2.5rem]">
              <h4 className="text-zinc-500 font-mono text-[14px] uppercase tracking-widest mb-4">
                The &quot;Solo&quot; Path
              </h4>
              <ul className="space-y-3">
                {[
                  "Endless Guesswork",
                  "Risky Investments",
                  "Vacuum Burnout",
                  "Navigating without a map",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="text-zinc-400 text-sm flex items-center gap-3"
                  >
                    <span className="w-1.5 h-1.5 bg-zinc-800 rounded-full" />{" "}
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-10 bg-yellow-500/5 border border-yellow-500/20 rounded-[2.5rem] relative overflow-hidden group">
              <div className="absolute inset-0 bg-yellow-500 opacity-0 group-hover:opacity-[0.02] transition-opacity" />
              <h4 className="text-yellow-500 font-mono text-[14px] uppercase tracking-widest mb-4">
                The &quot;Clan&quot; Path
              </h4>
              <ul className="space-y-3">
                {[
                  "Expert-Led Movement",
                  "Minimized Mistakes",
                  "Maximum Network Value",
                  "Build Vision with Winners",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="text-white text-sm flex items-center gap-3 font-medium"
                  >
                    <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full shadow-[0_0_10px_rgba(234,179,8,1)] " />{" "}
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* CTA Banner */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="col-span-12 bg-gradient-to-r from-yellow-500 to-yellow-700 rounded-[2.5rem] p-8 md:p-14 flex flex-col lg:flex-row items-center justify-between gap-10 mt-4 relative overflow-hidden group"
          >
            <div className="flex flex-col md:flex-row items-center text-center md:text-left gap-8">
              <div className="p-6 bg-black/20 rounded-full backdrop-blur-md">
                <ShieldCheck className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl md:text-4xl font-bold text-white tracking-tight">
                  Stop Building in the Dark.
                </h3>
                <p className="text-yellow-100/80 text-sm md:text-lg font-light">
                  Join a community that values your growth as much as you do.
                </p>
              </div>
            </div>

            <a
              href={import.meta.env.VITE_DISCORD_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full lg:w-auto"
            >
              <motion.button
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "#fff",
                  color: "#000",
                }}
                whileTap={{ scale: 0.95 }}
                className="w-full lg:w-auto px-12 py-5 bg-black text-white font-black uppercase tracking-[0.2em] text-[11px] rounded-2xl transition-all shadow-2xl"
              >
                Join the Founders Clan
              </motion.button>
            </a>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black to-transparent pointer-events-none" />
    </section>
  );
};