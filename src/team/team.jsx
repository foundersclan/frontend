import { motion } from 'framer-motion';
import { ShieldCheck } from 'lucide-react';
import team from '/pastEvents/think-insight.jpeg'
import { Link } from 'react-router-dom';
const Team = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  const allMembers = [
    { name: "Nishant Saini", role: "Chief Visionary", image: "/team/Nishant.webp" },
    { name: "Rakesh Jha", role: "Technical Product Manager", image: "/team/Rakesh.webp" },
    { name: "Shourya Sharma", role: "Impact Catalyst", image: "/team/Shourya.webp" },
    { name: "Deepika", role: "Joint coordinator", image: "/team/Deepika.webp" },
    { name: "Nayan", role: "Joint coordinator", image: "/team/Nayan.webp" },
    { name: "Khushi Chauhan", role: "HR and sponsorship coordinator", image: "/team/khushi_Chauhan.webp" },
    { name: "Diya", role: "Event organizing coordinator", image: "/team/Diya.webp" },
    { name: "Vinay", role: "Content Creation Head", image: "/team/Vinay.webp" },
    { name: "Khushi Gupta", role: "Infographics coordinator", image: "/team/Khushi_Gupta.webp" },
    // { name: "Manpreet", role: "Media coordinator", image: "/team/Manpreet.webp" },
    { name: "Prachi ", role: "Documentation head", image: "/team/Prachi.webp" },
    { name: "Ridhima", role: "Video Editor", image: "/team/Ridhima.webp" },
    // { name: "Khushi", role: "Web Developer", image: "/team/Khushi.webp" },
  ];

  return (
    <div className="bg-[#050505] text-slate-100 min-h-screen font-sans">

      {/* 1. HERO SECTION */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative pt-28 sm:pt-36 md:pt-48 pb-16 sm:pb-20 md:pb-24 px-5 sm:px-6 text-center overflow-hidden"
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-amber-500/5 blur-[120px] rounded-full pointer-events-none" />

        <motion.div variants={fadeInUp} className="relative z-10">
          <span className="text-amber-500 text-[10px] sm:text-[14px] font-mono font-bold uppercase tracking-[0.5em] mb-6 block">
            Collective Intelligence
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-9xl font-black mb-6 tracking-tighter">
            OUR <span className="italic font-serif text-amber-500">OPERATIVES</span>
          </h1>
          <p className="max-w-2xl mx-auto text-zinc-500 text-base sm:text-lg px-2font-light leading-relaxed">
            The architects of ambition. We don&apos;t just manage the clan; we safeguard the vision of every founder within our ecosystem.
          </p>
        </motion.div>
      </motion.section>

      {/* 2. UNIFIED TEAM GRID */}
      <section className="max-w-[1400px] mx-auto py-14 sm:py-16 md:py-20 px-5 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-12">
          {allMembers.map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              {/* Image Container */}
              <div className="relative aspect-[3/4] overflow-hidden rounded-[1.5rem] sm:rounded-[2rem] border border-zinc-800 bg-zinc-900">
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10 opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover grayscale md:group-hover:grayscale-0 transition-transform md:group-hover:scale-105 duration-700 ease-out"
                />

                {/* Corner Badge */}
                <div className="absolute top-4 right-4 sm:top-6 sm:right-6 z-20 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-4 group-hover:translate-x-0">
                  <div className="bg-amber-500 p-2 rounded-full shadow-lg shadow-amber-500/40">
                    <ShieldCheck size={18} className="text-black" />
                  </div>
                </div>

                {/* Member Info (Bottom Overlaid) */}
                <div className="absolute bottom-5 left-5 right-5 sm:bottom-8 sm:left-8 sm:right-8 z-20">
                  <p className="text-amber-500 text-xl sm:text-2xl md:text-3xl font-extrabold uppercase tracking-[0.3em] mb-2">
                    {member.role}
                  </p>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                    {member.name}
                  </h3>
                </div>
              </div>

              {/* Decorative Glow */}
              <div className="absolute -inset-2 bg-amber-500/10 blur-xl rounded-[2.5rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. THE COLLECTIVE (Group Photo Section) */}
      <section className="py-16 sm:py-24 md:py-32 px-5 sm:px-6">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between item-start md:items-end mb-12 gap-6">
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-6xl font-black tracking-tighter text-white">THE COLLECTIVE.</h2>
            </div>
            <div className="flex gap-4">
              <div className="flex flex-col items-start md:items-end">
                <span className="text-amber-500 text-xl font-bold">100%</span>
                {/* <span className="text-zinc-600 text-[10px] uppercase font-mono tracking-widest">Alignment</span> */}
              </div>
              <div className="w-px h-10 bg-zinc-800" />
              <div className="flex flex-col items-start md:items-end">
                <span className="text-amber-500 text-xl font-bold">Elite</span>
                {/* <span className="text-zinc-600 text-[10px] uppercase font-mono tracking-widest">Protocol</span> */}
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative aspect-[4/3] md:aspect-[21/9] w-full rounded-[1.5rem] sm:rounded-[2rem] md:rounded-[3rem] overflow-hidden border border-zinc-800 shadow-2xl"
          >
            {/* Overlay Vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 z-10" />

            {/* Group Photo Placeholder */}
            <img
              src={team}
              alt="Founders Clan Collective"
              className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-1000"
            />

            {/* Centered Brand Mark */}
            <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none opacity-20">
              <h2 className="text-[15vw] font-black text-white/10 tracking-tighter">CLAN</h2>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 4. FOOTER CTA */}
      <section className="relative py-24 sm:py-32 md:py-40 bg-[#080808] border-t border-zinc-900 text-center overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="relative z-10"
        >
          <h2 className="text-3xl sm:text-5xl md:text-7xl font-bold mb-12 text-white tracking-tight">
            One Vision. <br />
            <span className="italic font-serif text-amber-500">{allMembers.length} Architects.</span>
          </h2>

          <Link
            to="/Discord"
            className="flex justify-center px-5"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto px-8 sm:px-12 py-4 sm:py-5 bg-amber-600 text-black font-black uppercase tracking-[0.2em] text-[9px] sm:text-[10px] rounded-full"
            >
              Collaborate With Us
            </motion.button>
          </Link>
        </motion.div>
      </section>
    </div>
  );
};

export default Team;