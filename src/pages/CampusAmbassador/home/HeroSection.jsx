import { Users, Trophy, ChevronDown } from "lucide-react";
import { Button } from "../components/shared/Button";
import founderLogo from "/assets/logowithoutbg.webp";
import nightBackground from "/assets/nightBackground.webp";
import founderAmbassdor from "/assets/Background.png";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { useState, useEffect, useRef, useCallback } from "react";
const stars = Array.from({ length: 120 }, (_, i) => ({
  id: i,
  top: `${Math.random() * 100}%`,
  left: `${Math.random() * 100}%`,
  size: Math.random() * 2 + 1,
  duration: Math.random() * 4 + 2,
}));

const shootingPaths = [
  { top: "15%", left: "38%", x: 250, y: 180 },
  { top: "20%", left: "48%", x: 300, y: 220 },
  { top: "10%", left: "42%", x: 220, y: 200 },
];

/* eslint-disable react/prop-types */
function ShootingStar({ path }) {
  return (
    <motion.div
      className="absolute rotate-[20deg] z-[2] pointer-events-none"
      style={{
        top: path.top,
        left: path.left,
      }}
      animate={{
        x: [0, path.x],
        y: [0, path.y],
        opacity: [0, 1, 1, 0],
      }}
      transition={{
        duration: 1.4,
        repeat: Infinity,
        repeatDelay: 8,
        ease: "easeOut",
      }}
    >
      <div className="relative">
        <div className="w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_14px_white]" />

        <div
          className="
            absolute
            top-1/2
            right-full
            -translate-y-1/2
            w-24
            h-[1px]
            bg-gradient-to-l
            from-white
             to-transparent
          "
        />
      </div>
    </motion.div>
  );
}

export default function HeroSection() {
  const [currentPath, setCurrentPath] = useState(shootingPaths[0]);
  const [starKey, setStarKey] = useState(0);
  const rafRef = useRef(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = useCallback((e) => {
     if (rafRef.current) return;

    rafRef.current = requestAnimationFrame(()=>{
    const { innerWidth, innerHeight } = window;
    const x = e.clientX - innerWidth / 2;
    const y = e.clientY - innerHeight / 2;
    mouseX.set(x);
    mouseY.set(y);
    rafRef.current = null;
  });
},[mouseX,mouseY]);

  const springConfig = { damping: 20, stiffness: 100 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);
  const ambassadorX = useTransform(smoothX, [-800, 800], [-80, 80]);
  const ambassadorY = useTransform(smoothY, [-800, 800], [-40, 40]);
  const ambassadorRotate = useTransform(smoothX, [-800, 800], [-3, 3]);
  const leftCardX = useTransform(smoothX, [-800, 800], [-40, 40]);
  const leftCardY = useTransform(smoothY, [-800, 800], [-20, 20]);
  const rightCardX = useTransform(smoothX, [-800, 800], [-40, 40]);
  const rightCardY = useTransform(smoothY, [-800, 800], [-20, 20]);
  const glowX = useSpring(mouseX, { stiffness: 150, damping: 25 });
  const glowY = useSpring(mouseY, { stiffness: 150, damping: 25 });
  useEffect(() => {
    const interval = setInterval(() => {
      const randomPath =
        shootingPaths[Math.floor(Math.random() * shootingPaths.length)];

      setCurrentPath(randomPath);

      setStarKey((prev) => prev + 1);
    }, 6000);

    return () => clearInterval(interval);
  }, []);
  return (
    <motion.div
      onMouseMove={handleMouseMove}
      className="relative min-h-screen w-full  text-white font-sans overflow-hidden flex flex-col justify-between p-6 sm:p-12"
    >
      {/* stars */}
      {/* <div className="absolute inset-0 overflow-hidden z-[2] pointer-events-none">
        {stars.map((star) => (
          <motion.div
            key={star.id}
            className="absolute rounded-full bg-[#ffffff]"
            style={{
              top: star.top,
              left: star.left,
              width: star.size,
              height: star.size,
            }}
            animate={{
              opacity: [0.2, 1, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: star.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div> */}

      <div className="absolute inset-0 overflow-hidden z-[2] pointer-events-none">
          <style>{`
      @keyframes twinkle {
        0%, 100% { opacity: 0.2; transform: scale(1); }
        50% { opacity: 1; transform: scale(1.5); }
      }
      .star { 
        position: absolute; 
        border-radius: 50%; 
        background: white;
        animation: twinkle var(--dur) ease-in-out infinite var(--delay);
      }
    `}</style>
    {stars.map((star) => (
      <div
        key={star.id}
        className="star"
        style={{
          top: star.top,
          left: star.left,
          width: star.size,
          height: star.size,
          '--dur': `${star.duration}s`,
          '--delay': `${Math.random() * 2}s`,
        }}
      />
    ))}
      </div>

      <ShootingStar key={starKey} path={currentPath} />

      <img
        src={nightBackground}
        alt="nightBackground.png"
        height="full"
        width="full"
        fetchPriority="high"
        className="absolute -bottom-[30%] inset-0 w-full h-full object-cover z-5"
      />

      {/* <motion.img
        src={founderAmbassdor}
        alt="founderAmbassdor"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute -bottom-[20%] left-1/2 -translate-x-1/2 w-[35%] z-10"
      /> */}

      <motion.div
        style={{
          x: glowX,
          y: glowY,
        }}
        className="
   absolute
    left-1/2
    top-1/2
    -translate-x-1/2
    -translate-y-1/2
    w-[300px]
    h-[300px]
    pointer-events-none
    z-[1]
  "
      >
        <div
          className="
      w-full
      h-full
      rounded-full
      bg-[radial-gradient(circle,rgba(168,85,247,0.18)_0%,transparent_70%)]
    "
        />
      </motion.div>
      <motion.div
        style={{
          x: ambassadorX,
          y: ambassadorY,
          rotate: ambassadorRotate,
        }}
        className="absolute -bottom-[20%] left-1/2 -translate-x-1/2 w-[35%] z-10 pointer-events-none"
      >
        <motion.img
          src={founderAmbassdor}
          alt="founderAmbassdor"
          width="full"
          height="full"
          fetchPriority="high"
          // animate={{ y: [0, -10, 0] }}
          // transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>

      {/* MAIN HERO CONTENT - MATCHING SCREENSHOT COMPOSITION */}
      <div className="relative ">
        <div className="relative w-full max-w-7xl mx-auto my-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center z-30">
          <div className="lg:col-span-3 flex justify-center lg:justify-start order-2 lg:order-1">
            <motion.div
              style={{
                x: leftCardX,
                y: leftCardY,
              }}
              className="group relative w-full max-w-[280px] rounded-[24px] border border-white/10 bg-zinc-950/50 backdrop-blur-xl p-6 transition-all duration-300 hover:-translate-y-2 hover:border-purple-500/30 shadow-xl"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-purple-500/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 mb-4">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-black tracking-tight mb-1 text-white">
                FOUNDER LIGHTHOUSE
              </h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                An ecosystem where you aren&apos;t just a member—you directly
                steer the trajectory.
              </p>
              <div className="absolute -bottom-1 left-6 right-6 h-[2px] bg-gradient-to-r from-transparent via-purple-500/40 to-transparent blur-[1px]" />
            </motion.div>
          </div>

          <div className="relative lg:col-span-6 flex flex-col items-center text-center order-1 lg:order-2 py-2 ">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900/90 border border-white/10 backdrop-blur-md mb-6 shadow-lg">
              <span className="text-xs font-black tracking-widest text-zinc-200 uppercase">
                Founders IGNITERS CLUB
              </span>
            </div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeInOut" }}
              className="font-black tracking-tighter text-4xl sm:text-5xl lg:text-6xl max-w-2xl leading-[1.05] mb-8"
            >
              BECOME THE <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-200 via-amber-400 to-amber-200 drop-shadow-[0_2px_15px_rgba(245,158,11,0.2)]">
                FACE OF YOUR CAMPUS
              </span>
            </motion.h1>

            {/* <div className="z-0">
              <Button
                label="Apply Now"
                navigateTo="/CampusAmbassador/apply"
                variant="primary"
              />
            </div> */}
          </div>

          <div className="lg:col-span-3 flex justify-center lg:justify-end order-3">
            <motion.div
              style={{
                x: rightCardX,
                y: rightCardY,
              }}
              // className="group relative w-full max-w-[280px] rounded-[24px] border border-white/10 bg-zinc-950/50 backdrop-blur-xl p-6 transition-all duration-300 hover:-translate-y-2 hover:border-amber-500/30 shadow-xl">
              className="group relative w-full max-w-[280px] rounded-[24px] border border-white/10 bg-zinc-950/50 backdrop-blur-xl p-6"
            >
              <div className="absolute top-0 left-0 w-24 h-24 bg-amber-500/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 mb-4">
                <Trophy className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-black tracking-tight mb-1 text-white">
                SOVEREIGN COHORTS
              </h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                High-velocity networks designed exclusively for radical
                execution models.
              </p>
              <div className="absolute -bottom-1 left-6 right-6 h-[2px] bg-gradient-to-r from-transparent via-amber-500/40 to-transparent blur-[1px]" />
            </motion.div>
          </div>
        </div>
        

        <div className="relative w-full max-w-7xl mx-auto flex justify-start items-end z-5 mt-12 lg:mt-30">
          <div className="inline-flex flex-wrap items-center gap-8 px-8 py-5 rounded-[20px] bg-zinc-950/80 border border-white/10 backdrop-blur-2xl shadow-[0_15px_30px_rgba(0,0,0,0.5)]">
            <div className="flex flex-col">
              <span className="text-2xl font-black tracking-tight text-white">
                500+
              </span>
              <span className="text-[10px] font-bold tracking-widest text-zinc-500 uppercase">
                Users
              </span>
            </div>

            <div className="h-8 w-px bg-white/10 hidden sm:block" />

            <div className="flex flex-col">
              <span className="text-2xl font-black tracking-tight text-white">
                25+
              </span>
              <span className="text-[10px] font-bold tracking-widest text-zinc-500 uppercase">
                Events Hosted
              </span>
            </div>

            <div className="h-8 w-px bg-white/10 hidden sm:block" />

            <div className="flex flex-col">
              <span className="text-2xl font-black tracking-tight text-amber-400">
                10+
              </span>
              <span className="text-[10px] font-bold tracking-widest text-zinc-500 uppercase">
                Organizers
              </span>
            </div>
          </div>
          <div className="fixed bottom-[10%] left-[75%] z-0">
              <Button
                label="Apply Now"
                navigateTo="/CampusAmbassador/apply"
                variant="primary"
              />
            </div>
        </div>
      </div>
      <div className="absolute w-[3%] h-[3%] bottom-12 left-[50%] animate-pulse z-20 ">
        <motion.img
          src={founderLogo}
          alt="FounderClan Logo"
          width={48}
          height={48}
          whileHover={{ rotate: [0, -5, 5, -5, 0], x: [0, -2, 2, -2, 0] }}
          transition={{ duration: 0.5 }}
        />
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{
            duration: 1.8,
            repeat: Infinity,
          }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-50"
        >
          <ChevronDown className="w-8 h-8 text-white/60" />
        </motion.div>
      </div>
    </motion.div>
  );
}
