import { Users, Rocket, Crown, ArrowRight } from "lucide-react";
import teamWork from "/assets/teamWork.svg";
import "./JourneySection.css";

export function JourneySection() {
  const journey = [
    {
      title: "Community Explorer",
      icon: Users,
      color: "from-violet-500/80 to-fuchsia-700/30",
      iconBg: "bg-violet-400/60",
      iconColor: "text-violet-200",
      badge: "Level 01",
      points: ["Meet founders", "Join events", "Build connections"],
    },
    {
      title: "Active Contributor",
      icon: Rocket,
      color: "from-yellow-500/80 to-amber-800/30",
      iconColor: "text-yellow-200",
      iconBg: "bg-yellow-400/60",
      badge: "Level 02",
      points: ["Lead initiatives", "Grow visibility", "Create impact"],
    },
    {
      title: "Core Founder",
      icon: Crown,
      color: "from-sky-600/80 to-blue-800/30",
      iconColor: "text-sky-200",
      iconBg: "bg-sky-400/60",
      badge: "Level 03",
      points: ["Mentor members", "Access inner circle", "Shape the ecosystem"],
    },
  ];

  return (
    <section className="relative py-20 md:py-28 lg:py-32 overflow-hidden">
      {/* background glow */}

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="absolute -top-10 left-0 w-56 h-56 md:w-80 md:h-80 lg:w-[360px] lg:h-[360px] bg-violet-500/10 blur-[70px] rounded-full" />

        <div className="absolute -bottom-20 -right-10 w-72 h-72 md:w-[420px] md:h-[420px] lg:w-[500px] lg:h-[500px] bg-yellow-500/10 blur-[70px] rounded-full" />
        <div>

          <div className="text-center mb-9 md:mb-26">
            <p className="text-yellow-400 uppercase tracking-[0.3em] text-base">
              Journey
            </p>

            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mt-4">
              YOUR FOUNDER
              <span className="text-yellow-400"> JOURNEY.</span>
            </h2>

            <p className="text-zinc-400 max-w-2xl mx-auto mt-6">
              Progress from community member to core contributor, unlocking deeper
              access, stronger relationships, and greater impact.
            </p>
          </div>

          {/* <div className="relative mb-20 flex justify-center">
          <img src={teamWork} alt="teamWork.svg" className="w-[30%] md:w-[50%] lg:w-[60%]" />
          </div> */}
          <div className="relative">
            <div className="lg:grid lg:grid-cols-12 lg:gap-10 lg:items-center">
              {/* <div className="lg:col-span-4 flex justify-center">
                <img
                  src={teamWork}
                  alt="Team Work"
                  className=" hidden lg:block w-full max-w-md"
                />
                
                <div className="hidden lg:block absolute right-[5.4%] top-41 translate-y-0.5 w-[64%]">
                  <div className="relative h-[3px] w-full bg-gradient-to-r from-violet-500/50 via-yellow-400/70 to-sky-500/90 overflow-hidden">
                    <div className="absolute top-1/2 h-3 w-24 -translate-y-1/2 blur-md bg-yellow-400 animate-pull" />
                  </div>
                </div>
              </div> */}

              {/* Mobile & Tablet */}
              <div className="flex justify-center mb-10 lg:hidden">
                <img
                  src={teamWork}
                  alt="Team Work"
                  className="w-full max-w-sm"
                />
              </div>

              {/* Desktop */}
              <div className="hidden lg:flex lg:col-span-4 relative justify-center item-center ">
                <img
                  src={teamWork}
                  alt="Team Work"
                  className="w-full max-w-md"
                />
                <div className="hidden lg:block absolute left-full top-[119px] -translate-y-1/2 w-160">
                  <div className="relative h-[3px] w-full bg-gradient-to-r from-violet-500/50 via-yellow-400/70 to-sky-500/90 overflow-hidden">
                    <div className="absolute top-1/2 h-3 w-24 -translate-y-1/2 blur-md bg-yellow-400 animate-pull" />
                  </div>
                </div>
              </div>

              <div className="lg:col-span-8">
                {/* <div className="hidden lg:block absolute  right-[5.4%] top-[47.9%] h-[1%] w-[64%] bg-gradient-to-r from-violet-500/40 via-yellow-500/40 to-sky-500/40" /> */}

                <div className="no-scrollbar flex gap-5 overflow-x-auto snap-x snap-mandatory pb-4 -mx-6 px-6 lg:grid lg:grid-cols-3 lg:overflow-visible lg:px-0 lg:mx-0 lg:gap-10">
                  {journey.map((item, i) => {
                    const Icon = item.icon;

                    return (
                      <div
                        key={item.title}
                        className="snap-center shrink-0 w-[87vw] max-w-[360px] sm:max-w-[400px] lg:w-auto lg:shrink relative"
                      >
                        <div
                          className={`relative overflow-hidden h-full rounded-2xl sm:rounded-[32px] border border-white/10 bg-zinc-950/80 backdrop-blur-xl p-5 sm:p-8  transition-all duration-500 hover:-translate-y-2 hover:border-white/30 lg:${i === 0 ? "translate-y-4" : ""} lg:${i === 1 ? "-translate-y-4" : ""} lg:${i === 2 ? "translate-y-4" : ""}
                `}
                        >
                          <div
                            className={`absolute inset-0 bg-gradient-to-br ${item.color}`}
                          />
                          <div className="absolute inset-0 bg-gradient-to-br from-white/[0.04] to-transparent" />
                          {/* Decorative Orb */}
                          <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-white/[0.06] blur-md animate-pulse" />

                          <div className="relative z-10">
                            <span className="text-[14px] sm:text-base uppercase tracking-[0.15em] font-bold text-zinc-200">
                              {item.badge}
                            </span>
                            <div className={`mt-3 sm:mt-5 w-12 h-12 sm:w-16 sm:h-16 rounded-2xl ${item.iconBg} flex items-center justify-center`}>
                              <Icon className={`w-6 h-6 sm:w-8 sm:h-8 ${item.iconColor}`} />
                            </div>

                            <h3 className="mt-2 sm:mt-4 text-white text-[19px] sm:text-xl font-semibold leading-0.85">
                              {item.title}
                            </h3>

                            <ul className="mt-1 sm:mt-2 space-y-2">
                              {item.points.map((point) => (
                                <li
                                  key={point}
                                  className="text-zinc-300/90 leading-none sm:leading-relaxed text-[13px] sm:text-base flex items-center gap-0.5"
                                >
                                  <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400 -rotate-30" />
                                  {point}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
