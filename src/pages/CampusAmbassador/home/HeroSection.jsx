import { ChevronDown } from "lucide-react";
import { Button } from "../components/shared/Button";
import founderLogo from "/assets/logowithoutbg.webp";
import nightBackground from "/assets/nightBackground.webp";
import founderAmbassdor from "/assets/Background.webp";
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
        <div className="absolute top-1/2 right-full -translate-y-1/2 w-24 h-[1px] bg-gradient-to-l from-white to-transparent" />
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

  const handleMouseMove = useCallback(
    (e) => {
      if (rafRef.current) return;

      rafRef.current = requestAnimationFrame(() => {
        const { innerWidth, innerHeight } = window;
        const x = e.clientX - innerWidth / 2;
        const y = e.clientY - innerHeight / 2;
        mouseX.set(x);
        mouseY.set(y);
        rafRef.current = null;
      });
    },
    [mouseX, mouseY],
  );

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
      className="relative min-h-[100svh] text-white font-sans overflow-hidden px-4 sm:px-8 xl:px-12 py-8 xl:py-12 flex flex-col justify-between"
    >
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
              "--dur": `${star.duration}s`,
              "--delay": `${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <ShootingStar key={starKey} path={currentPath} />

      <img
        src={nightBackground}
        alt="nightBackground"
        height="full"
        width="full"
        fetchPriority="high"
        className="absolute -bottom-[10%] sm:-bottom-[20%] xl:-bottom-[30%] inset-0 w-full h-full object-cover z-5"
      />

      <motion.div
        style={{
          x: glowX,
          y: glowY,
        }}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-44 h-44 sm:w-64 sm:h-64 xl:w-[300px] xl:h-[300px] pointer-events-none z-[1]"
      >
        <div className="w-full h-full rounded-full bg-[radial-gradient(circle,rgba(168,85,247,0.18)_0%,transparent_70%)]" />
      </motion.div>

      <motion.div
        style={{
          x: ambassadorX,
          y: ambassadorY,
          rotate: ambassadorRotate,
        }}
        className="absolute bottom-0 sm:bottom-[5%] md:bottom-[8%] lg:-bottom-[20%] left-1/2 -translate-x-1/2 w-[90%] sm:w-[70%] md:w-[50%] lg:w-[35%] z-10 pointer-events-none"
      >
        <motion.img
          src={founderAmbassdor}
          alt="founderAmbassdor"
          width="full"
          height="full"
          fetchPriority="high"
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>

      {/* MAIN HERO CONTENT */}
      <div className="relative pt-8 sm:pt-12 xl:pt-0">
        <div className="relative w-full max-w-7xl mx-auto my-auto grid grid-cols-1 md:grid-cols-12 gap-6 xl:gap-8 items-center justify-items-center z-30">

          {/* LEFT CARD - Visible on Tablet (md) and Desktop (xl) */}
          <div className="hidden md:flex md:col-span-3 justify-start order-2 md:order-1 w-full">
            <motion.div
              style={{
                x: leftCardX,
                y: leftCardY,
              }}
              className="group relative w-full max-w-[250px] overflow-hidden rounded-[24px] border border-white/10 bg-zinc-950/50 backdrop-blur-xl p-5 xl:p-6"
            >
              <div className="relative -mx-5 -mt-5 xl:-mx-6 xl:-mt-6 mb-4 xl:mb-5 h-28 xl:h-30 overflow-hidden">
                <img
                  src="/assets/solitary-lighthouse-stands-on-rocky.jpg"
                  alt="Founder Lighthouse"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent" />
              </div>

              <div className="absolute top-0 right-0 w-24 h-24 rounded-full bg-purple-500/10 blur-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <h3 className="relative z-10 text-base xl:text-lg font-black tracking-tight text-white">
                FOUNDER LIGHTHOUSE
              </h3>

              <p className="relative z-10 text-xs xl:text-sm text-zinc-400 leading-relaxed">
                Navigate your entrepreneurial journey. A community that illuminates your <span className="text-yellow-200/70 font-semibold">path.</span>
              </p>

              <div className="absolute -bottom-1 left-6 right-6 h-[2px] bg-gradient-to-r from-transparent via-purple-500/40 to-transparent blur-[1px]" />
            </motion.div>
          </div>

          {/* CENTER HEADING SECTION */}
          <div className="relative col-span-1 md:col-span-6 flex flex-col items-center text-center order-1 md:order-2 py-1 sm:py-2 w-full mx-auto">
            <div className="inline-flex items-center gap-2 backdrop-blur-md mb-3 sm:mb-6 shadow-lg">
              <span className="text-[11px] sm:text-base font-black tracking-widest text-zinc-400 uppercase">
                Founders NEXUS CLUB
              </span>
            </div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeInOut" }}
              className="font-black tracking-tighter text-[1.75rem] sm:text-4xl xl:text-6xl max-w-2xl leading-[1.05] mb-4 sm:mb-8 mx-auto"
            >
              BECOME THE <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-200 via-amber-400 to-amber-200 drop-shadow-[0_2px_15px_rgba(245,158,11,0.2)]">
                FACE OF YOUR CAMPUS
              </span>
            </motion.h1>

            {/* Mobile-Only CTA Button with proper bottom gap */}
            <div className="mt-1 sm:mt-2 mb-4 sm:mb-0 md:hidden z-30 flex justify-center w-full">
              <Button
                label="Apply Now"
                navigateTo="/CampusAmbassador/apply"
                variant="primary"
              />
            </div>
          </div>

          {/* RIGHT CARD - Visible on Tablet (md) and Desktop (xl) */}
          <div className="hidden md:flex md:col-span-3 justify-end order-3 w-full">
            <motion.div
              style={{
                x: rightCardX,
                y: rightCardY,
              }}
              className="group relative w-full max-w-[250px] overflow-hidden rounded-[24px] border border-white/10 bg-zinc-950/50 backdrop-blur-xl p-5 xl:p-6"
            >
              <div className="relative -mx-5 -mt-5 xl:-mx-6 xl:-mt-6 mb-4 xl:mb-5 h-28 xl:h-35 overflow-hidden">
                <img
                  src="/assets/Soverign_cohorts1images.jpg"
                  alt="Sovereign Cohorts"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent" />
              </div>

              <div className="absolute top-0 left-0 w-24 h-24 rounded-full bg-amber-500/10 blur-xl opacity-0 transition-opacity group-hover:opacity-100" />

              <h3 className="relative z-10 text-base xl:text-lg font-black tracking-tight text-white">
                SOVEREIGN COHORTS
              </h3>

              <p className="relative z-10 text-xs xl:text-sm text-zinc-400 leading-relaxed">
                High-velocity networks designed exclusively for radical execution models.
              </p>

              <div className="absolute -bottom-1 left-6 right-6 h-[2px] bg-gradient-to-r from-transparent via-amber-500/40 to-transparent blur-[1px]" />
            </motion.div>
          </div>
        </div>

        {/* BOTTOM STATS & DESKTOP/TABLET CTA ROW */}
        <div className="relative w-full max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-end z-20  md:z-5 mt-8 md:mt-12 lg:mt-16 xl:mt-24">
          <div className="inline-flex grid grid-cols-3 md:flex items-center gap-4 sm:gap-8 px-6 sm:px-8 py-4 sm:py-5 rounded-[20px] bg-zinc-950/80 border border-white/10 backdrop-blur-2xl shadow-[0_15px_30px_rgba(0,0,0,0.5)] w-full md:w-auto justify-between md:justify-start">
            <div className="flex flex-col text-center md:text-left">
              <span className="text-xl sm:text-2xl font-black tracking-tight text-white">
                200+
              </span>
              <span className="text-[9px] sm:text-[10px] font-bold tracking-widest text-zinc-500 uppercase">
                Users
              </span>
            </div>

            <div className="h-8 w-px bg-white/10 hidden md:block" />

            <div className="flex flex-col text-center md:text-left">
              <span className="text-xl sm:text-2xl font-black tracking-tight text-white">
                20+
              </span>
              <span className="text-[9px] sm:text-[10px] font-bold tracking-widest text-zinc-500 uppercase">
                Events Hosted
              </span>
            </div>

            <div className="h-8 w-px bg-white/10 hidden md:block" />

            <div className="flex flex-col text-center md:text-left">
              <span className="text-xl sm:text-2xl font-black tracking-tight text-amber-400">
                7+
              </span>
              <span className="text-[9px] sm:text-[10px] font-bold tracking-widest text-zinc-500 uppercase">
                Organizers
              </span>
            </div>
          </div>

          {/* Tablet & Desktop CTA button positioned at bottom level */}
          {/* <div className="hidden md:flex justify-end items-center z-20 mt-4 md:mt-0">
            <Button
              label="Apply Now"
              navigateTo="/CampusAmbassador/apply"
              variant="primary"
            />
          </div> */}
        </div>
      </div>
      <div className="hidden md:flex absolute bottom-10 right-6 lg:bottom-14 lg:right-18 z-30">
        <Button
          label="Apply Now"
          navigateTo="/CampusAmbassador/apply"
          variant="primary"
        />
      </div>
      <div className="absolute w-8 h-8 sm:w-10 sm:h-10 xl:w-12 xl:h-12 bottom-6 sm:bottom-12 left-1/2 -translate-x-1/2 animate-pulse z-20">
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
          className="ml-1 sm:ml-3"
        >
          <ChevronDown className="sm:mb-4 text-white/50" />
        </motion.div>
      </div>
    </motion.div>
  );
}