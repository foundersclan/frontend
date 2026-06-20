import { Users, Network, Rocket, Handshake } from "lucide-react";
import ThinkingFace from "/assets/thinkingFace.svg";
import { motion } from "framer-motion";

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
    icon: Users,
    title: "Founder Network",
    description:
      "Connect with ambitious founders, operators and builders growing serious companies.",
    glow: "from-violet-500/80 to-fuchsia-700/30",
    iconBg: "bg-violet-400/60",
    iconColor: "text-violet-200",
  },
  {
    icon: Handshake,
    title: "Direct Mentorship",
    description:
      "Learn from founders who've already solved the challenges ahead.",
    glow: "from-yellow-500/80 to-amber-800/30",
    iconBg: "bg-yellow-400/60",
    iconColor: "text-yellow-200",
  },
  {
    icon: Network,
    title: "Exclusive Community",
    description:
      "Private discussions, founder circles and meaningful connections.",
    glow: "from-sky-600/80 to-blue-800/30",
    iconBg: "bg-sky-400/60",
    iconColor: "text-sky-200",
  },
  {
    icon: Rocket,
    title: "Collaborative Scaling",
    description:
      "Grow faster through partnerships, accountability and shared wins.",
    glow: "from-emerald-600/80 to-green-800/30",
    iconBg: "bg-emerald-400/60",
    iconColor: "text-emerald-200",
  },
];

export default function CommunitySection() {
  return (
    <section className="relative py-32 overflow-hidden  ">
      <div className="relative max-w-7xl mx-auto px-10 py-14 bg-[#4c454537] rounded-4xl border border-white/5">
        <div className="absolute top-20 left-0 w-96 h-96 bg-violet-500/10 blur-[100px] animate-pulse" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-yellow-500/10 blur-[180px] animate-pulse" />
        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-16 items-center">
          {/* LEFT SIDE */}
          <div>
            <span className="inline-flex items-center rounded-full border border-yellow-500/20 bg-yellow-500/10 px-4 py-2 text-xs tracking-[0.25em] uppercase text-yellow-300">
              Community
            </span>

            <h2 className="mt-8 text-5xl md:text-7xl font-black leading-[0.95] text-white">
              WHY
              <br />
              JOIN
              <br />
              <span className="text-yellow-400 font-bold">FOUNDERS ?</span>
            </h2>

            <p className="mt-8 max-w-xl text-lg text-zinc-400 leading-relaxed">
              More than networking. More than content. A curated ecosystem of
              founders helping founders move faster through mentorship,
              accountability and collaboration.
            </p>

            <div>
              <motion.img
                src={ThinkingFace}
                alt="Thinking"
                className="w-100 h-100 will-change-transform"
                animate={{ y: [0, -8, 0], rotate: [0, 1, 0] }}
                transition={{
                  duration: 5,
                  ease: "easeInOut",
                  repeat: Infinity,
                }}
              />
            </div>
          </div>

          {/* RIGHT SIDE */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-2 gap-5"
          >
            {benefits.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  variants={itemVariants}
                  className={`relative overflow-hidden rounded-[28px] border border-white/10 bg-zinc-950/80 backdrop-blur-xl p-7 transition-all duration-500 hover:-translate-y-2 hover:border-white/30
                    ${index % 2 === 1 ? "translate-y-10" : ""}
                  `}
                >
                  {/* Card Glow */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${item.glow}`}
                  />

                  <div className="relative z-10">
                    <div
                      className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${item.iconBg}`}
                    >
                      <Icon className={`w-7 h-7 ${item.iconColor}`} />
                    </div>

                    <h3 className="text-white text-xl font-semibold leading-0.85 mb-2">
                      {item.title}
                    </h3>

                    <p className="text-zinc-300/90 leading-relaxed text-base">
                      {item.description}
                    </p>
                  </div>

                  {/* Decorative Orb */}
                  <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-white/[0.05] blur-md animate-pulse " />
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
