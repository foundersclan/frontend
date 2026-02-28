import { motion } from "motion/react";
import { Quote } from "lucide-react";

export const TeamIntro = () => {
 const team = [
    { name: "Nishant Saini", role: "Chief Visionary", src: "/team/nishant.png" },
    { name: "Rakesh Jha", role: "Mentor", src: "/team/rakesh.jpeg" },
    { name: "Aman Monga", role: "G.O.A.T of Tech", src: "/team/aman2.jpeg" },
    // { name: "Riya", role: "Operations Lead", image: "/team/riya.jpeg" },
    { name: "Shourya Sharma", role: "Impact Catalyst", src: "/team/shourya.jpeg" },
    { name: "Jayant", role: "Media Team Manager", src: "/team/jayant.jpeg" },
    { name: "Muskan Jindal", role: "Offline Market Head", src: "/team/muskan.jpeg" },
    { name: "Jaya Saini", role: "Engagement Lead", src: "/team/jaya2.jpeg" },
    { name: "Aaryan", role: "Video Editor", src: "/team/aryan.jpeg" },
    { name: "Khushi Chauhan", role: "Viral Engineer", src: "/team/khushi.jpeg" },
    { name: "Ambhuj", role: "Content Creator", src: "/team/ambuj.jpeg" }
  ];

  return (
    <section className="relative bg-zinc-950 py-32 overflow-hidden">

      <div className="absolute top-0 right-0 w-1/2 h-full bg-yellow-500/[0.02] -skew-x-12 translate-x-1/4 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Header */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-24 items-start">
          <div className="md:col-span-8">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-yellow-500 font-mono tracking-[0.5em] text-xs uppercase mb-4 block"
            >
              The Human Element // 0.1
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-8xl font-bold text-white leading-none tracking-tighter"
            >
              THE <span className="text-zinc-700">ORIGINALS</span> <br />
              BEHIND THE EXTRAORDINARY.
            </motion.h2>
          </div>
          <div className="md:col-span-4 md:pt-20">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-zinc-500 text-lg leading-relaxed border-l border-yellow-500/30 pl-6"
            >
              We are a collective of thinkers and doers. We don't just follow blueprints; we invent them.
            </motion.p>
          </div>
        </div>
      </div>

      {/* ── Infinite Scrolling Strip ── */}
      <div className="relative w-full overflow-hidden mb-24">

        {/* Left fade */}
        <div className="absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-zinc-950 to-transparent z-10 pointer-events-none" />
        {/* Right fade */}
        <div className="absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-zinc-950 to-transparent z-10 pointer-events-none" />

        <motion.div
          className="flex gap-6"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 20,
            ease: "linear",
            repeat: Infinity,
          }}
          style={{ width: "max-content" }}
        >
          {/* Render twice for seamless loop */}
          {[...team, ...team].map((member, index) => (
            <div
              key={index}
              className="group relative rounded-3xl overflow-hidden flex-shrink-0 bg-zinc-900 border border-white/5"
              style={{ width: "280px", height: "360px" }}
            >
              <img
                src={member.src}
                alt={member.name}
                className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-in-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
              <div className="absolute bottom-6 left-6">
                <p className="text-yellow-500 font-bold  text-md uppercase tracking-[0.2em] mb-1">
                  {member.role}
                </p>
                <h4 className="text-lg font-bold text-white">{member.name}</h4>
              </div>
              {/* Hover border glow */}
              <div className="absolute inset-0 rounded-3xl border border-yellow-500/0 group-hover:border-yellow-500/30 transition-all duration-500" />
            </div>
          ))}
        </motion.div>
      </div>

      {/* Quote card below */}
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="p-12 rounded-3xl bg-zinc-900 border border-white/5 flex flex-col md:flex-row justify-between items-start gap-8 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 p-8">
            <Quote className="w-12 h-12 text-yellow-500/20" />
          </div>
          <div className="relative z-10 max-w-xl">
            <h4 className="text-3xl font-bold text-white mb-6 leading-tight">
              Engineering <br /> Meaningful <br /> <span className="text-yellow-500">Impact.</span>
            </h4>
            <p className="text-zinc-400 text-lg leading-relaxed">
              Excellence isn't an act, it's a habit. We aim for long-term value in every line of code and every brand strategy we touch.
            </p>
          </div>
        </motion.div>
      </div>

    </section>
  );
};