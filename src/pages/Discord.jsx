import { motion } from "framer-motion";
import { ArrowRight, Play, Users } from "lucide-react";
import { useEffect, useRef } from "react";
import { FaDiscord } from "react-icons/fa6";
const CLOUDINARY_VIDEO_URL = import.meta.env.CLOUDINARY_VIDEO_URL;

const howItems = [
    {
        number: "01",
        title: "Founder mentorship",
        description:
            "Direct access to founders who've actually shipped — not career counselors reading from a script.",
    },
    {
        number: "02",
        title: "Idea Lab",
        description:
            "A weekly room to pressure-test a raw idea before you sink a semester into it.",
    },
    {
        number: "03",
        title: "Pitch practice",
        description:
            "Mini Shark Tank-format sessions — real questions, real judges, real discomfort.",
    },
];

const programs = [
    {
        tag: "FLAGSHIP EVENT",
        title: "Founders Clan Summit",
        description:
            "Two days of talks, pitch battles, and an idea lab — open to students across Haryana.",
        featured: true,
    },
    {
        tag: "UPCOMING",
        title: "Startup exhibitions",
        description:
            "A standing platform to show what you're building, in progress.",
        featured: false,
    },
];

export default function Discord() {
    const videoRef = useRef(null);
    useEffect(() => {
        const video = videoRef.current;

        if (!video) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    video.play().catch(() => {
                        // Browser may block playback in some cases.
                    });
                } else {
                    video.pause();
                }
            },
            {
                threshold: 0.45,
            }
        );

        observer.observe(video);

        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <section className="relative w-full bg-[#0a0a0b] text-zinc-400 overflow-hidden">
            {/* Ambient brand glow */}
            <div className="pointer-events-none absolute inset-x-0 top-0 h-[500px] sm:h-[700px] bg-[radial-gradient(circle_at_50%_5%,rgba(234,179,8,0.10),transparent_52%)]" />
            <div className="pointer-events-none absolute left-[-20%] sm:left-[-15%] top-[30%] h-[300px] sm:h-[500px] w-[300px] sm:w-[500px] rounded-full bg-yellow-500/[0.025] blur-3xl" />

            {/* ================= WHY SECTION ================= */}
            <motion.section
                id="why"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                className="px-4 sm:px-6 py-12 sm:py-20 lg:py-24"
            >
                <div className="max-w-2xl mx-auto text-center">
                    <p className="text-sm sm:text-xl leading-none tracking-tight font-bold text-yellow-500 mb-3 sm:mb-5">
                        WHY
                    </p>
                    <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.2] sm:leading-[1.15] mb-4 sm:mb-6">
                        MOST CAMPUSES TEACH TO PASS EXAMS <br className="hidden sm:inline" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-200 to-amber-500">
                            WE BUILD FOUNDERS
                        </span>
                    </h2>
                    <p className="text-sm sm:text-lg lg:text-xl leading-relaxed text-zinc-400 max-w-2xl mx-auto font-normal">
                        We back students who want to try anyway — with founders, mentors, and a room full of people doing the exact same thing.
                    </p>
                </div>
            </motion.section>

            {/* ================= HOW SECTION ================= */}
            <motion.section
                id="how"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                className="px-4 sm:px-6 pb-16 sm:pb-24"
            >
                <div className="max-w-[1080px] mx-auto">
                    <p className="text-sm sm:text-xl leading-none tracking-tight font-bold text-yellow-500 mb-4 sm:mb-5">
                        HOW
                    </p>

                    {/* Cards Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4">
                        {howItems.map((item) => (
                            <div
                                key={item.number}
                                className="bg-[#080808] p-5 sm:p-7 md:p-8 min-h-[160px] sm:min-h-[180px] group transition-colors duration-200 rounded-2xl border border-yellow-500/10 bg-yellow-500/5 hover:bg-yellow-500/90"
                            >
                                <h3 className="text-base sm:text-lg md:text-xl font-bold tracking-tight text-zinc-100 group-hover:text-black mb-2 sm:mb-3">
                                    {item.title}
                                </h3>
                                <p className="text-xs sm:text-sm text-zinc-500 group-hover:text-black/80 leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </motion.section>

            {/* ================= WHAT SECTION ================= */}
            <motion.section
                id="programs"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                className="px-4 sm:px-6 pb-16 sm:pb-24"
            >
                <div className="max-w-[1080px] mx-auto">
                    <p className="text-xs sm:text-base lg:text-lg leading-none tracking-tight font-bold text-yellow-500">
                        WHAT HAPPENS HERE
                    </p>

                    <div className="py-3 sm:py-5 flex flex-col justify-between gap-3 sm:gap-5 md:flex-row md:items-end">
                        <h2 className="max-w-3xl text-3xl sm:text-5xl lg:text-6xl font-black uppercase leading-[0.95] tracking-[-0.04em] text-zinc-100">
                            Turn ideas
                            <span className="text-yellow-500"> into motion</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-4">
                        {programs.map((program) => (
                            <div
                                key={program.title}
                                className={`rounded-2xl p-5 sm:p-7 md:p-9 min-h-[180px] sm:min-h-[210px] hover:-translate-y-1 sm:hover:-translate-y-2 transition-transform duration-300 ${program.featured
                                    ? "bg-yellow-500 text-black"
                                    : "border border-white/[0.08] bg-[#0d0d0e]"
                                    }`}
                            >
                                <p
                                    className={`font-mono text-[10px] sm:text-xs uppercase font-bold tracking-[0.1em] mb-3 sm:mb-4 ${program.featured ? "text-black/65" : "text-yellow-500"
                                        }`}
                                >
                                    {program.tag}
                                </p>

                                <h3
                                    className={`text-lg sm:text-2xl md:text-3xl font-bold uppercase tracking-tight mb-2 sm:mb-3 ${program.featured ? "text-black" : "text-zinc-100"
                                        }`}
                                >
                                    {program.title}
                                </h3>

                                <p
                                    className={`text-xs sm:text-sm md:text-base leading-relaxed max-w-lg ${program.featured ? "text-black/75" : "text-zinc-500"
                                        }`}
                                >
                                    {program.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </motion.section>

            {/* ================= DISCORD / COMMUNITY ================= */}
            <motion.section
                id="discord"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                className="px-4 sm:px-6 pb-12 sm:pb-16"
            >
                <div className="max-w-[1080px] mx-auto">
                    <div className="overflow-hidden rounded-2xl sm:rounded-3xl bg-[#080808] border border-yellow-500/10 shadow-[0px_0px_8px_rgba(234,179,6,0.2)] sm:shadow-[0px_0px_8px_rgba(234,179,6,0.5)]">

                        {/* Section heading */}
                        <div className="px-5 pt-5 sm:px-10 sm:pt-9">
                            <p className="font-mono text-xs sm:text-base md:text-lg tracking-[0.14em] font-bold text-yellow-500">
                                <span className="text-zinc-100">THE </span>COMMUNITY
                            </p>
                        </div>

                        {/* Video + Content */}
                        <div className="grid grid-cols-1 gap-0">
                            {/* VIDEO */}
                            <div className="relative aspect-[1377/768] overflow-hidden bg-black m-3 sm:m-5 lg:m-6 rounded-xl sm:rounded-2xl">
                                <video
                                    ref={videoRef}
                                    src={CLOUDINARY_VIDEO_URL}
                                    poster="/assets/Discord_Community_poster.webp"
                                    className="absolute inset-0 w-full h-full object-cover"
                                    loop
                                    muted
                                    playsInline
                                    preload="metadata"
                                />

                                <div className="absolute inset-0 bg-black/10 pointer-events-none" />

                                <div className="hidden lg:block absolute top-4 left-4 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-sm border border-white/10 font-mono text-[10px] tracking-[0.1em] text-zinc-300">
                                    FOUNDERS CLAN
                                </div>
                            </div>

                            {/* COMMUNITY CONTENT */}
                            <div className="flex flex-col md:flex-row md:items-center lg:items-start gap-5 sm:gap-6 px-5 pb-6 sm:px-8 sm:pb-10 lg:px-10">
                                {/* Icon */}
                                <div className="shrink-0 hidden sm:block">
                                    <div className="w-10 h-10 rounded-xl bg-yellow-500/[0.08] border border-yellow-500/20 flex items-center justify-center">
                                        <Users className="w-5 h-5 text-yellow-500" strokeWidth={1.5} />
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="flex-1 min-w-0">
                                    <h2 className="text-xl sm:text-2xl lg:text-[30px] leading-tight sm:leading-[1.15] font-bold tracking-tight text-zinc-100 mb-2 sm:mb-3">
                                        The Real Conversation Happens Here
                                    </h2>

                                    <p className="text-xs sm:text-sm lg:text-base text-zinc-500 leading-relaxed max-w-xl">
                                        Daily build talk, first access to every event, and no gatekeeping — just people building.
                                    </p>

                                    <p className="mt-3 sm:mt-4 font-mono text-[10px] sm:text-xs tracking-wider text-zinc-600">
                                        JOIN STUDENTS ALREADY IN
                                    </p>
                                </div>

                                {/* CTA */}
                                <div className="shrink-0 w-full md:w-auto md:self-center lg:self-end">
                                    <a
                                        href={import.meta.env.VITE_DISCORD_URL}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-block w-full md:w-auto"
                                    >
                                        <motion.button
                                            whileHover={{ y: -2 }}
                                            whileTap={{ scale: 0.98 }}
                                            className="w-full md:w-auto bg-indigo-500/80 hover:text-yellow-400/70 text-black font-bold text-xs uppercase tracking-wider px-6 py-3.5 sm:px-7 sm:py-4 rounded-xl flex items-center justify-center gap-2.5 sm:gap-3 transition-colors duration-200"
                                        >
                                            <FaDiscord alt="discord" className="w-5 h-5 sm:w-6 sm:h-6" />
                                            <span>Join Community</span>
                                            <ArrowRight className="w-4 h-4" strokeWidth={2.5} />
                                        </motion.button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.section>

            {/* ================= AMBASSADOR SECTION ================= */}
            <motion.section
                id="ambassador"
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                className="px-4 sm:px-6 pt-6 sm:pt-14 pb-16 sm:pb-28"
            >
                <div className="relative max-w-[1080px] mx-auto overflow-hidden rounded-2xl border border-yellow-500/10 bg-black shadow-[0px_0px_8px_rgba(234,179,6,0.3)]">
                    {/* Background Image */}
                    <img
                        src="/assets/campus_ambassador_as_Background.webp"
                        alt=""
                        aria-hidden="true"
                        className="absolute inset-0 w-full h-full object-cover object-center opacity-25"
                    />

                    {/* Dark Overlays */}
                    <div className="absolute inset-0 bg-gradient-to-b sm:bg-gradient-to-r from-black via-black/85 to-black/40" />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_50%,rgba(234,179,8,0.12),transparent_38%)]" />

                    {/* Content Wrapper */}
                    <div className="relative z-10 p-5 sm:p-8 lg:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 sm:gap-8">
                        <div className="max-w-2xl">
                            <span className="inline-block font-mono text-[9px] sm:text-[10px] tracking-wider text-yellow-500 border border-yellow-500/40 rounded-full px-2.5 py-1 mb-3 sm:mb-4 bg-black/40 backdrop-blur-sm">
                                FOR UNIVERSITY/COLLEGE STUDENTS
                            </span>

                            <h3 className="text-base sm:text-2xl lg:text-3xl font-bold tracking-tight text-zinc-100 mb-1">
                                Campus Ambassador Program
                            </h3>

                            <h2 className="mt-3 sm:mt-6 text-2xl sm:text-5xl lg:text-6xl font-black uppercase leading-[0.95] sm:leading-[0.9] tracking-tight text-zinc-100">
                                Become the <span className="text-yellow-500">face of your</span> campus
                            </h2>

                            <p className="mt-3 sm:mt-5 text-xs sm:text-base leading-relaxed text-zinc-400">
                                Represent Founders Clan at your campus, build your own chapter, and bring the builder culture to more students.
                            </p>
                        </div>

                        {/* Apply Button */}
                        <a
                            href="/CampusAmbassador/"
                            className="w-full md:w-auto shrink-0 border border-zinc-600 hover:border-yellow-500 hover:bg-yellow-500/10 text-zinc-200 hover:text-yellow-500 font-bold text-xs uppercase tracking-wider px-6 py-3.5 rounded-xl flex items-center justify-center gap-2 transition-all duration-200 backdrop-blur-sm"
                        >
                            <span>Apply now</span>
                            <ArrowRight className="w-4 h-4" strokeWidth={2} />
                        </a>
                    </div>
                </div>
            </motion.section>
        </section>

    );
}
