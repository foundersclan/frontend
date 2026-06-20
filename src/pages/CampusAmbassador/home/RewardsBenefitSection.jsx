import { Users, GraduationCap, Trophy, Briefcase, Rocket, Sparkles } from "lucide-react";
import groupCommunity from "/assets/groupCommunity.svg";
import { useScroll, useTransform } from "framer-motion";
import { motion } from "framer-motion";
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
    <section  ref={sectionRef} className="relative py-32 overflow-hidden ">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-0 w-[450px] h-[450px] bg-violet-500/10 blur-[50px] rounded-full" />
        <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-yellow-500/20 blur-[100px]" />
        <div className="absolute bottom-20 left-1 w-[950px] h-[350px] bg-sky-500/10 blur-[50px]" />
      </div>

      <motion.div variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{once:true,margin:"-100px"}}
          className="relative max-w-7xl mx-auto px-6">
        {/* Header */}

        <div className="text-center mb-20">
          <span className="inline-flex px-4 py-2 rounded-full border border-yellow-500/20 bg-yellow-500/10 text-yellow-300 text-xs uppercase tracking-[0.25em]">
            Benefits
          </span>

          <h2 className="mt-8 text-5xl md:text-7xl font-black text-white leading-none">
            MEMBER
            <span className="text-yellow-400"> ADVANTAGES.</span>
          </h2>

          <p className="mt-6 text-zinc-400 max-w-2xl mx-auto text-lg">
            Everything designed to help founders build faster, connect deeper,
            and grow alongside an ambitious community.
          </p>
        </div>

        {/* Bento Layout */}
        <motion.div variants={itemVariants} className="grid lg:grid-cols-12 gap-6 auto-rows-[260px]">
          {/* Large */}
          <BenefitCard
            {...benefits[0]}
            className="lg:col-span-7"
          />

          <BenefitCard
            {...benefits[1]}
            className="lg:col-span-5"
          />

          <BenefitCard
            {...benefits[2]}
            className="lg:col-span-4"
          />
            
          <BenefitCard
            {...benefits[3]}
            className="lg:col-span-8"
          />

          <BenefitCard
            {...benefits[4]}
            className="lg:col-span-5"
          />

          <BenefitCard
            {...benefits[5]}
            className="lg:col-span-7"
          />
          <motion.div style={{y:yParallax}} className="absolute bottom-[25%] -right-[15%] h-[40%] w-[40%] z-10 transform -scale-x-100 rotate-0 will-change-transform "><img src={groupCommunity} alt="rocketLaunch.svg" /></motion.div>
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
      className={`group relative overflow-hidden rounded-[32px] border border-white/10 bg-zinc-950/80 backdrop-blur-xl p-8 transition-all duration-500 hover:-translate-y-2 hover:border-white/30
        ${className}
      `}
    >
      {/* Gradient Glow */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${glow}`}
      />

      {/* Orb */}
      {/* <div className="absolute -right-12 -top-12 w-40 h-40 rounded-full  bg-white/[0.05] blur-md animate-pulse" /> */}

      <div className="relative z-10 flex flex-col h-full">
        <div
          className={`w-16 h-16 rounded-2xl ${iconBg} border border-white/10 flex items-center justify-center
          `}
        >
          <Icon className={`w-8 h-8 ${iconColor}`} />
        </div>

        <div className="mt-8">
          <h3 className="text-white text-2xl font-semibold leading-0.85">
            {title}
          </h3>

          <p className="mt-4 text-zinc-300/90 leading-relaxed text-base max-w-md">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}