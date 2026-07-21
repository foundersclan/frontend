import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";

export const PastEvents = () => {
  const event = [
    { name: "Group 0", src: "/pastEvents/group0.webp" },
    { name: "Group 1", src: "/pastEvents/group1.jpeg" },
    { name: "Group 2", src: "/pastEvents/group2.webp" },
    { name: "Group 3", src: "/pastEvents/group3.jpeg" },
    { name: "Group 4", src: "/pastEvents/group4.jpeg" },
  ];

  const scrollSectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: scrollSectionRef,
    offset: ["start end", "end start"],
  });
  // Adjust "-50%" to "-30%" if you want the tracking speed to feel slightly slower/tighter
  const xRaw = useTransform(scrollYProgress, [0, 1], ["5%", "-50%"]);
  const xTranslate = useSpring(xRaw, {
    stiffness: 50,
    damping: 20,
    mass: 0.5
  })

  return (
    <section ref={scrollSectionRef} className="relative bg-zinc-950 overflow-hidden py-16 sm:py-20 md:py-24 lg:py-32">

      <div className="absolute top-0 right-0 w-1/2 h-full bg-yellow-500/20 -skew-x-12 translate-x-1/4 pointer-events-none" />

      {/* Glimpse of Past Events */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 mb-16 sm:mb-20 lg:mb-24 items-start">
          <div className="md:col-span-8">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="flex items-center gap-3 text-yellow-500 font-mono tracking-[0.5em] text-xs uppercase mb-4"
            >
              <span className="w-10 h-px bg-yellow-500" />  Pulse
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-[0.95] tracking-tighter"
            >
              THE <span className="text-zinc-700">GLIMPSE</span> <br />
              OF PAST EVENTS.
            </motion.h2>
          </div>
          <div className="md:col-span-4 md:pt-20">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-zinc-200 text-base sm:text-lg leading-relaxed border-t lg:border-t-0 lg:border-l border-yellow-500/30 pt-6 lg:pt-0 lg:pl-6"
            >
              Every event tells a story of growth, connection, and the path
              we’re building together.
            </motion.p>
          </div>
        </div>
      </div>

      {/* horizontal scrolling for Glimpse of Past Events  */}
      <div className="relative w-full overflow-hidden mb-16 sm:mb-20 lg:mb-24">
        {/* Left fade */}
        <div className="absolute left-0 top-0 h-full w-10 sm:w-16 md:w-24 lg:w-32 bg-gradient-to-r from-zinc-950 to-transparent z-10 pointer-events-none" />
        {/* Right fade */}
        <div className="absolute right-0 top-0 h-full w-10 sm:w-16 md:w-24 lg:w-32 bg-gradient-to-l from-zinc-950 to-transparent z-10 pointer-events-none" />

        <motion.div style={{ x: xTranslate }} className="will-change-transform">
          <motion.div
            className="flex gap-4 sm:gap-5 lg:gap-6 w-max"
            animate={{ x: ["0%", "-33%"] }}
            transition={{
              duration: 25,
              ease: "linear",
              repeat: Infinity,
              repeatType: "loop"
            }}
          >
            {/* Render twice for seamless loop */}
            {[...event, ...event, ...event].map((eve, index) => (
              <div
                key={index}
                className="group relative rounded-2xl md:rounded-3xl overflow-hidden flex-shrink-0 bg-zinc-900 border border-white/5 w-[280px] h-[210px] sm:w-[340px] sm:h-[255px] md:w-[420px] md:h-[315px] lg:w-[480px] lg:h-[360px]"
              >
                <img
                  src={eve.src}
                  alt={eve.name}
                  className="w-full h-full object-cover object-center group-hover:scale-110 transition-all duration-700 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                {/* Hover border glow */}
                <div className="absolute inset-0 rounded-3xl border border-yellow-500/0 group-hover:border-yellow-500/30 transition-all duration-500" />
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
