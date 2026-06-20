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
    <section className="relative py-32 overflow-hidden">
      {/* background glow */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-violet-500/10 blur-[50px] animate-pulse" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-yellow-500/10 blur-[50px] animate-pulse" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-26">
          <p className="text-yellow-400 uppercase tracking-[0.3em] text-sm">
            Journey
          </p>

          <h2 className="text-5xl md:text-7xl font-black text-white mt-4">
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
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-4 flex justify-center">
              <img
                src={teamWork}
                alt="Team Work"
                className=" hidden lg:block w-full max-w-md"
              />
              {/* line */}
              <div className="hidden lg:block absolute right-[5.4%] top-41 translate-y-0.5 w-[64%]">
                <div className="relative h-[3px] w-full bg-gradient-to-r from-violet-500/50 via-yellow-400/70 to-sky-500/90 overflow-hidden">
                  <div className="absolute top-1/2 h-3 w-24 -translate-y-1/2 blur-md bg-yellow-400 animate-pull" />
                </div>
              </div>
            </div>

            <div className="lg:col-span-8">
              {/* <div className="hidden lg:block absolute  right-[5.4%] top-[47.9%] h-[1%] w-[64%] bg-gradient-to-r from-violet-500/40 via-yellow-500/40 to-sky-500/40" /> */}

              <div className="grid lg:grid-cols-3  gap-10">
                {journey.map((item, i) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.title}
                      className={`
                relative
                ${i === 1 ? "lg:-translate-y-12" : ""}
              `}
                    >
                      <div
                        className={`relative overflow-hidden rounded-[32px] border border-white/10 bg-zinc-950/80 backdrop-blur-xl p-8  transition-all duration-500 hover:-translate-y-2 hover:border-white/30 ${i % 2 === 1 ? "translate-y-10" : ""}${i === 0 ? "lg:translate-y-4" : ""} ${i === 1 ? "lg:-translate-y-4" : ""} ${i === 2 ? "lg:translate-y-4" : ""}
                `}
                      >
                        <div
                          className={`absolute inset-0 bg-gradient-to-br ${item.color}`}
                        />

                        {/* Decorative Orb */}
                        <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-white/[0.06] blur-md animate-pulse" />

                        <div className="relative z-10">
                          <span className="text-base uppercase tracking-[0.15em] font-bold text-zinc-200">
                            {item.badge}
                          </span>

                          <div className={`mt-5 w-16 h-16 rounded-2xl ${item.iconBg} flex items-center justify-center`}>
                            <Icon className={`w-8 h-8 ${item.iconColor}`} />
                          </div>

                          <h3 className="mt-4 text-white text-xl font-semibold leading-0.85">
                            {item.title}
                          </h3>

                          <ul className="mt-2 space-y-2">
                            {item.points.map((point) => (
                              <li
                                key={point}
                                className="text-zinc-300/90 leading-relaxed text-base flex items-center gap-0.5"
                              >
                                <ArrowRight className="w-4 h-4 text-yellow-400 -rotate-30" />
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
    </section>
  );
}
