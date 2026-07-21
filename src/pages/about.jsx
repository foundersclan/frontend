import { Sparkle, Target, ShieldCheck, Quote, Compass, Users, VolumeX, Volume2, ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";

const CLOUDINARY_VIDEO_URL = import.meta.env.VITE_FOUNDERS_CLAN_INTRO_VIDEO;

export const AboutUs = () => {
  const targetRef = useRef(null);
  const containerRef = useRef(null);
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);

  const avatars = [
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&auto=format&fit=crop&q=80",
  ];

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
      className="relative bg-[#050505] overflow-hidden py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-yellow-500/10 blur-[100px] rounded-full" />
      </div>

      <div className="max-w-7xl w-full px-2 sm:px-4 mx-auto relative z-10">
        {/* HEADER: OUR STORY */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 mb-16 md:mb-24 lg:mb-32 items-start lg:items-end">
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
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-[0.95] font-bold tracking-tighter text-white uppercase">
                Built by{" "}
                <span className="italic text-transparent bg-clip-text bg-gradient-to-b from-yellow-200 to-yellow-600">
                  Founders,
                </span>{" "}
                <br />
                For Founders
              </h2>
            </motion.div>
          </div>

          <div className="w-full lg:w-2/5 border-t lg:border-t-0 lg:border-l border-zinc-800 pt-6 lg:pt-0 lg:pl-8">
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
            className="col-span-12 lg:col-span-5 group relative bg-zinc-800/50 md:bg-zinc-800/30 rounded-2xl md:rounded-[2.5rem] overflow-hidden border border-white/[0.08] hover:border-yellow-500/30 backdrop-blur-2xl p-6 sm:p-8 md:p-10 lg:p-12"
          >
            <div className="flex flex-col h-full">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden border-2 border-yellow-500/20">
                  <img
                    src="/team/nishant2.jpeg"
                    alt="Nishant CEO"
                    className="w-full h-full object-cover  group-hover:transition-all duration-500"
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
              <p className="text-zinc-300 text-base sm:text-lg italic leading-relaxed font-light">
                &quot;I didn&apos;t start this community because I had all the
                answers—I started it because I was tired of searching for them
                alone.&quot;
              </p>
            </div>
          </motion.div>

          {/* Philosophy Card */}
          <motion.div
            whileHover={{ y: -8 }}
            className="col-span-12 lg:col-span-7 group relative bg-gradient-to-br from-zinc-700/40 to-black rounded-2xl md:rounded-[2.5rem] border border-white/20 hover:border-yellow-500/30 backdrop-blur-2xl p-6 sm:p-8 md:p-10 lg:p-12 overflow-hidden "
          >
            <div className="absolute top-0 right-0 p-8 opacity-50 md:opacity-20 md:group-hover:opacity-50 transition-opacity">
              <Sparkle size={120} className="text-yellow-500" />
            </div>
            <span className="text-yellow-500 font-mono text-[10px] uppercase tracking-[0.4em] mb-4 block">
              Our Core Motto
            </span>
            <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 uppercase tracking-tighter">
              GIVE FIRST.
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
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
          <div ref={containerRef} className="col-span-12 w-full my-6 flex justify-center px-0 sm:px-4">
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
                className="relative z-10 w-full rounded-xl sm:rounded-2xl md:rounded-3xl border border-white/5 bg-zinc-900/40 p-3 backdrop-blur-sm shadow-2xl"
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
                    className="absolute bottom-4 right-4 z-30 flex items-center gap-1 bg-black/60 hover:bg-black/80 backdrop-blur-md text-white text-xs font-mono font-bold tracking-wider px-3 py-2 sm:px-4 rounded-xl border border-white/10 transition-all active:scale-95"
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
          <div className="col-span-12 grid grid-cols-1 lg:grid-cols-2 gap-8 mt-7 md:mt-12 ">
            <div className="p-4 bg-zinc-900/10  rounded-[2.5rem] flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 border border-yellow-400/40">
              <div className="pl-10 space-y-0">
                <h4 className="text-zinc-500 font-mono text-[20px] uppercase tracking-widest mb-4">
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
                      className="text-zinc-400 text-base tracking-wider flex items-center gap-3"
                    >
                      <span className="w-1.5 h-1.5 bg-zinc-800 rounded-full" />{" "}
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="pr-4 md:pr-10 shrink-0 self-center sm:self-center">
                <img className="w-46 sm:w-44 md:w-46 h-auto mx-auto" src="/assets/Writer's block-pana.svg" alt="Writer's block-pana.svg" />
              </div>
            </div>
            <div className="p-4 bg-yellow-500/5  rounded-[2.5rem] relative overflow-hidden group flex flex-col sm:flex-row justify-between items-start sm:items-center gap-1 border border-white/30">
              <div className="pl-10 space-y-0">
                <h4 className="text-yellow-500 font-mono text-[20px] uppercase tracking-widest mb-4">
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
                      className="text-zinc-400 text-base flex items-center tracking-wide gap-3"
                    >
                      <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full  " />{" "}
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="pr-0 md:pr-10 shrink-0 self-center sm:self-center">
                <img className="h-auto w-70 md:w-60" src="/assets/Company-pana.svg" alt="Writer's block-pana.svg" />
              </div>
            </div>
          </div>

          {/* CTA Banner */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="col-span-12  w-full bg-gradient-to-r from-yellow-200/2 to-yellow-600/40 rounded-3xl p-8 md:p-10 lg:p-12 flex flex-col xl:flex-row items-center justify-between gap-8 mt-15 relative overflow-hidden shadow-[0_0_50px_rgba(234,179,8,0.02)]"
          >
            <div className="absolute bg-[radial-gradient(circle_at_70%_50%,rgba(234, 178, 8, 0.14)_0%,transparent_10%)] pointer-events-none" />
            <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8 w-full lg:w-auto">

              {/* Radar Icon Circle Graphic */}
              <div className="relative flex items-center justify-center shrink-0">
                {/* Outer dotted decorative spots */}
                <span className="absolute top-2.5 right-3 w-1.5 h-1.5 bg-yellow-500 rounded-full opacity-80" />
                <span className="absolute bottom-4.5 left-2 w-1 h-1 bg-yellow-500 rounded-full opacity-60" />

                {/* Concentric rings */}
                <div className="w-24 h-24 rounded-full border border-yellow-500/20 flex items-center justify-center p-3">
                  <div className="w-full h-full rounded-full border border-yellow-500/40 bg-yellow-500/[0.02] flex items-center justify-center">
                    <Users className="w-8 h-8 text-yellow-500" strokeWidth={1.5} />
                  </div>
                </div>
              </div>

              <div className="text-center md:text-left space-y-2 max-w-xl">
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-zinc-100">
                  Stop Building <span className="text-yellow-500">in the Dark.</span>
                </h3>
                <p className="text-zinc-400 text-sm md:text-base font-normal leading-relaxed">
                  Join a community that values your growth as much as you do.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center lg:items-end gap-5 w-full lg:w-auto shrink-0">

              <a
                href={import.meta.env.VITE_DISCORD_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full md:w-auto"
              >
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full sm:w-auto px-10 py-4.5 bg-yellow-500 hover:bg-yellow-400 text-black font-bold text-xs uppercase tracking-wider rounded-xl flex items-center justify-center gap-3 shadow-[0_4px_25px_rgba(234,179,8,0.15)] transition-colors duration-200"
                >
                  Join The Founders Clan
                  <ArrowRight className="w-4 h-4 text-black" strokeWidth={2.5} />
                </motion.button>
              </a>

              {/* Overlapping Avatar Stack */}
              <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
                <div className="flex -space-x-2.5 overflow-hidden">
                  {avatars.map((src, index) => (
                    <img
                      key={index}
                      className="inline-block h-7 w-7 rounded-full ring-2 ring-zinc-950 object-cover"
                      src={src}
                      alt={`Founder Member ${index + 1}`}
                    />
                  ))}
                </div>
                <p className="text-sm text-zinc-400 font-medium tracking-wide">
                  <span className="text-yellow-500 font-bold"></span> Founders already joined
                </p>
              </div>

            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black to-transparent pointer-events-none" />
    </section>
  );
};