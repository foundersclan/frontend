import { motion } from "framer-motion";
import { ArrowRight, Instagram, History, Linkedin } from "lucide-react";
import { NavLink } from "react-router-dom";

export default function UpcomingEventsPlaceholder({ onExplorePast }) {
    return (
        <div className="min-h-[50vh] lg:min-h-[70vh] flex items-center justify-center px-4 sm:px-6">
            <motion.div
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="relative w-full max-w-3xl rounded-[32px] border border-white/10 bg-zinc-800/40 backdrop-blur-xl shadow-[0_20px_80px_rgba(0,0,0,.5)] overflow-hidden"
            >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(247,209,71,0.4),transparent_50%)]" />

                <div className="absolute top-1/2 -right-20 h-60 w-60 bg-orange-600/10 blur-[120px]" />

                <div className="relative px-6 py-10 sm:px-10 text-center">

                    {/* Badge */}

                    <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/20 bg-white/10 px-4 py-2">
                        <span className="text-[11px] uppercase tracking-[0.35em] font-mono text-amber-400">
                            Stay Tuned
                        </span>
                    </div>

                    {/* Heading */}

                    <h2 className="mt-7 text-4xl md:text-6xl font-black tracking-tight leading-[1.05]">

                        <span className="text-white">
                            Exciting Events
                        </span>

                        <br />

                        <span className="bg-gradient-to-r from-yellow-200 via-amber-400 to-yellow-500 bg-clip-text text-transparent">
                            Are On The Way
                        </span>

                    </h2>

                    <div className="mt-6 flex justify-center">
                        <div className="h-[2px] w-24 rounded-full bg-gradient-to-r from-transparent via-amber-500 to-transparent animate-pulse" />
                    </div>

                    <p className="mx-auto mt-6 max-w-2xl text-zinc-400 leading-8 text-sm sm:text-base">
                        Our team is preparing the next series of workshops, networking sessions, startup meetups, and founder experiences. Stay connected!
                    </p>

                    {/* Main CTA */}

                    <div className="mt-8">

                        <NavLink
                            to="/"
                            className="group inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-amber-400 to-yellow-500 px-7 py-3 font-semibold text-black transition-all duration-300 hover:scale-105"
                        >
                            Stay Updated

                            <ArrowRight
                                size={18}
                                className="transition-transform group-hover:translate-x-1"
                            />

                        </NavLink>

                    </div>

                    {/* Chips */}

                    <div className="mt-10 flex flex-wrap justify-center gap-3">

                        {[
                            "Founder Talks",
                            "Networking",
                            "Startup Workshops",
                            "Community Meetups",
                        ].map((item) => (
                            <div
                                key={item}
                                className="rounded-full border border-zinc-800 bg-zinc-700/70 px-4 py-2 text-sm text-zinc-300"
                            >
                                {item}
                            </div>
                        ))}

                    </div>

                    {/* Cards */}

                    <div className="mt-12 flex overflow-x-auto gap-4 pb-4 snap-x snap-mandatory -mx-2 px-2 no-scrollbar md:grid md:grid-cols-3 md:gap-5 md:pb-0 md:mx-0 md:px-0 md:overflow-visible">

                        {/* Instagram */}

                        <a
                            href="https://www.instagram.com/foundersclan?igsh=MTd1enZxcWVjc3d6eA=="
                            target="_blank"
                            rel="noreferrer"
                            className="shrink-0 w-[270px] md:w-auto snap-center group relative overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-800/70 p-4 transition-all duration-300 hover:-translate-y-2 hover:border-amber-500/40 hover:shadow-[0_15px_40px_rgba(245,158,11,.08)] text-left"
                        >

                            <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent opacity-0 transition group-hover:opacity-100" />

                            <div className="relative">

                                <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-500/10">
                                    <Instagram className="text-amber-400" />
                                </div>

                                <h3 className="font-semibold text-white">
                                    Follow Us
                                </h3>

                                <p className="mt-2 text-[12px] text-zinc-500">
                                    Follow our journey, get instant event announcements, behind-the-scenes
                                    updates, and community highlights
                                </p>

                            </div>

                        </a>

                        {/* LinkedIn */}
                        <a
                            href="https://www.linkedin.com/in/founders-clan-157208350/"
                            target="_blank"
                            rel="noreferrer"
                            className="shrink-0 w-[270px] md:w-auto snap-center group relative overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-800/70 p-4 transition-all duration-300 hover:-translate-y-2 hover:border-amber-500/40 hover:shadow-[0_15px_40px_rgba(245,158,11,.08)] text-left"
                        >

                            <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent opacity-0 transition group-hover:opacity-100" />

                            <div className="relative">

                                <div className="mx-auto mb-3  flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-500/10">
                                    <Linkedin className="text-amber-400" />
                                </div>

                                <h3 className="font-semibold text-white">
                                    LinkedIn
                                </h3>

                                <p className="mt-2 text-[12px] text-zinc-500">
                                    Stay updated with professional announcements, partnerships, founder
                                    stories, and upcoming opportunities.
                                </p>

                            </div>

                        </a>

                        {/* Past Events */}

                        <button
                            onClick={onExplorePast}
                            className="shrink-0 w-[270px] md:w-auto snap-center group relative overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-800/70 p-4 transition-all duration-300 hover:-translate-y-2 hover:border-amber-500/40 hover:shadow-[0_15px_40px_rgba(245,158,11,.08)] text-left"
                        >

                            <div className="absolute inset-0 bg-gradient-to-br from-amber-400/5 to-transparent opacity-0 transition group-hover:opacity-100" />

                            <div className="relative">

                                <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-500/10">
                                    <History className="text-amber-400" />
                                </div>

                                <h3 className="font-semibold text-white">
                                    View Past Events
                                </h3>

                                <p className="mt-2 text-[12px] text-zinc-500">
                                    Explore inspiring workshops, founder sessions and community milestones.
                                </p>

                            </div>

                        </button>

                    </div>

                    {/* Illustration */}

                    <div className="relative mt-14">

                        <div className="absolute inset-x-10 bottom-2 h-24 rounded-full bg-amber-500/10 blur-xl" />

                        <div className="relative rounded-[28px] border border-white/5 bg-white/[0.02] p-6 backdrop-blur-sm">

                            <motion.img
                                animate={{ y: [0, -8, 0] }}
                                transition={{
                                    repeat: Infinity,
                                    duration: 4,
                                    ease: "easeInOut",
                                }}
                                src="/assets/Team work-cuate.svg"
                                alt="Upcoming Events"
                                className="mx-auto w-full max-w-md object-contain"
                            />

                        </div>

                    </div>

                    <div className="mt-10 h-px w-44 mx-auto bg-gradient-to-r from-transparent via-amber-500/60 to-transparent" />

                </div>
            </motion.div>
        </div>
    );
}