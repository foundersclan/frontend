import { Users, GraduationCap, Trophy, Briefcase, Rocket, Sparkles } from "lucide-react";
import groupCommunity from "/assets/groupCommunity.svg";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const benefits = [
  {
    title: "Founder Network",
    description:
      "Connect with ambitious founders, operators and builders working on meaningful ventures.",
    icon: Users,
    glow: "from-violet-500/70 to-fuchsia-700/30",
    iconBg: "bg-violet-400/60",
    iconColor: "text-violet-200",
  },
  {
    title: "Expert Mentorship",
    description:
      "Gain direct access to experienced founders who have already navigated the path.",
    icon: GraduationCap,
    glow: "from-yellow-500/70 to-amber-800/30",
    iconBg: "bg-yellow-400/60",
    iconColor: "text-yellow-200",
  },
  {
    title: "Community Recognition",
    description:
      "Get featured, build credibility, and become visible within the ecosystem.",
    icon: Trophy,
    glow: "from-sky-600/70 to-blue-800/30",
    iconBg: "bg-sky-400/60",
    iconColor: "text-sky-200",
  },
  {
    title: "Strategic Partnerships",
    description:
      "Discover collaboration opportunities, partnerships and startup connections.",
    icon: Briefcase,
    glow: "from-emerald-600/70 to-green-800/30",
    iconBg: "bg-emerald-400/60",
    iconColor: "text-emerald-200",
  },
  {
    title: "Skill Acceleration",
    description:
      "Sharpen leadership, execution and startup skills through real-world initiatives.",
    icon: Rocket,
    glow: "from-orange-600/70 to-red-800/30",
    iconBg: "bg-orange-400/60",
    iconColor: "text-orange-200",
  },
  {
    title: "Exclusive Opportunities",
    description:
      "Access curated opportunities, events and founder-only experiences.",
    icon: Sparkles,
    glow: "from-pink-600/70 to-pink-800/30",
    iconBg: "bg-pink-400/60",
    iconColor: "text-pink-200",
  },
];

export default function RewardsBenefitSection() {
  // const {scrollYProgress} = useScroll();
  // const yParallax = useTransform(scrollYProgress,[0.3,0.6],[50,-50])

  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  const yParallax = useTransform(scrollYProgress, [0, 1], [50, -50]);


  return (
    <section ref={sectionRef} className="relative py-20 md:py-28 lg:py-32">
      {/* {Background} */}

      <motion.div variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="relative max-w-7xl mx-auto px-6">

        {/* {Background} */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-6 -left-30  w-56 h-56 md:w-80 md:h-80 lg:w-[450px] lg:h-[450px]  bg-violet-500/10 blur-[50px] animate-pulse rounded-full" />
          <div className="absolute top-1/2 -right-40  w-72 h-72 md:w-[420px] md:h-[420px] lg:w-[500px] lg:h-[500px] bg-yellow-500/20 blur-[100px]" />
          <div className="absolute -bottom-20 -left-40 w-[950px] h-[350px] bg-sky-500/10 blur-[50px] rounded-[70px]" />
        </div>

        <div className="text-center mb-8 sm:mb-20">
          <span className="inline-flex text-yellow-300 text-base uppercase tracking-[0.25em]">
            Rewards
          </span>

          <h2 className="mt-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight">
            MEMBER
            <span className="text-yellow-400"> ADVANTAGES.</span>
          </h2>

          <p className="mt-6 text-zinc-400 max-w-2xl mx-auto text-lg">
            Everything designed to help founders build faster, connect deeper,
            and grow alongside an ambitious community.
          </p>
        </div>

        {/* {Mobile SVG} */}
        <motion.div style={{ y: yParallax }} className="flex justify-center mb-12 lg:hidden">
          <img
            src={groupCommunity}
            alt="Community"
            className="w-full max-w-xs sm:max-w-sm"
          />
        </motion.div>
        {/* Bento Layout */}
        {/* Carousel requires `relative z-5` because another page-level stacking context currently interferes with horizontal touch scrolling. */}
        <motion.div variants={itemVariants} className="relative z-5 md:z-0">
          <div className="mobile-scroll flex gap-5 overflow-x-auto snap-x snap-mandatory no-scrollbar pb-4 -mx-6 px-6  md:grid md:grid-cols-12 md:auto-rows-[260px] md:overflow-visible md:px-0 md:mx-0">
            {/* {Large} */}
            <BenefitCard
              {...benefits[0]}
              className="w-[82vw] max-w-[340px] shrink-0 snap-center md:w-auto md:max-w-none md:shrink md:col-span-7"
            />

            <BenefitCard
              {...benefits[1]}
              className="w-[82vw] max-w-[340px] shrink-0 snap-center md:w-auto md:max-w-none md:shrink md:col-span-5"
            />

            <BenefitCard
              {...benefits[2]}
              className="w-[82vw] max-w-[340px] shrink-0 snap-center md:w-auto md:max-w-none md:shrink md:col-span-4"
            />

            <BenefitCard
              {...benefits[3]}
              className="w-[82vw] max-w-[340px] shrink-0 snap-center md:w-auto md:max-w-none md:shrink md:col-span-8"
            />

            <BenefitCard
              {...benefits[4]}
              className="w-[82vw] max-w-[340px] shrink-0 snap-center md:w-auto md:max-w-none md:shrink md:col-span-5"
            />

            <BenefitCard
              {...benefits[5]}
              className="w-[82vw] max-w-[340px] shrink-0 snap-center md:w-auto md:max-w-none md:shrink md:col-span-7"
            />
            <motion.div style={{ y: yParallax }} className="hidden lg:block absolute bottom-[22%] -right-[8%] h-[40%] w-[40%] z-10 transform -scale-x-100 rotate-0 will-change-transform ">
              <img src={groupCommunity} alt="rocketLaunch.svg" />
            </motion.div>
          </div>
          {/* <div className="flex overflow-x-auto gap-4 border-4 border-red-500" style={{
            touchAction: "pan-x",
            pointerEvents: "auto",
            zIndex: 9999,
            position: "relative",
          }}>
            <div className="w-[400px] h-40 bg-red-500 shrink-0"></div>
            <div className="w-[400px] h-40 bg-green-500 shrink-0"></div>
            <div className="w-[400px] h-40 bg-blue-500 shrink-0"></div>
          </div> */}
        </motion.div>
      </motion.div>
    </section>
  );
}

/* eslint-disable react/prop-types */
function BenefitCard({
  title,
  description,
  icon: Icon,
  glow,
  iconBg,
  iconColor,
  className,
}) {
  return (
    <div
      className={`group relative overflow-hidden rounded-2xl sm:rounded-[32px] border border-white/10 bg-zinc-950/80 backdrop-blur-xl p-5 sm:p-8 transition-all duration-500 hover:-translate-y-2 hover:border-white/30
        ${className}
      `}
    >

      <div
        className={`absolute inset-0 bg-gradient-to-br ${glow}`}
      />

      <div className="relative z-10 flex flex-col h-full">
        <div
          className={`w-12 h-12 sm:w-16 sm:h-16 rounded-2xl ${iconBg} border border-white/10 flex items-center justify-center
          `}
        >
          <Icon className={`w-6 h-6 sm:w-8 sm:h-8 ${iconColor}`} />
        </div>

        <div className="mt-2 sm:mt-8">
          <h3 className="text-white text-xl sm:text-2xl font-semibold leading-[0.85]">
            {title}
          </h3>

          <p className="mt-2 sm:mt-4 text-zinc-300/90 leading-relaxed text-[13px] sm:text-base max-w-md">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
} 