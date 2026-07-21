import { ArrowRight, FileText, MessageCircle, PartyPopper, Rocket, RocketIcon, } from "lucide-react";
import { Button } from "../components/shared/Button";
import rocketLaunch from "/assets/RocketLaunch.svg";
import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Submit Application",
    description:
      "Tell us about yourself, your interests, and why you want to join the community.",
    icon: FileText,
    glow: "from-violet-500/80 to-fuchsia-700/30",
    iconBg: "bg-violet-400/60",
    iconColor: "text-violet-200",
    rotate: "rotate-[-2deg]",
  },
  {
    number: "02",
    title: "Founder Conversation",
    description:
      "A quick discussion with our team to understand your goals and ambitions.",
    icon: MessageCircle,
    glow: "from-yellow-500/80 to-amber-800/30",
    iconBg: "bg-yellow-400/60",
    iconColor: "text-yellow-200",
    rotate: "rotate-[1deg]",
  },
  {
    number: "03",
    title: "Welcome Community",
    description:
      "Get community access, meet members, and start building meaningful connections.",
    icon: PartyPopper,
    glow: "from-sky-600/80 to-blue-800/30",
    iconBg: "bg-sky-400/60",
    iconColor: "text-sky-200",
    rotate: "-translate-y-5 rotate-[-1deg]",
  },
];

export default function ApplicationProcessSection() {
  return (
    <section className="relative py-14 md:py-20 lg:py-32">
      {/* Background */}

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0">
          <div className="absolute -top-20 -left-40 h-40 w-40 sm:h-64 sm:w-64 lg:h-[450px] lg:w-[450px] bg-violet-500/10 blur-[50px] rounded-full animate-pulse" />
          <div className="absolute -top-10 -right-20 h-52 w-52 sm:h-80 sm:w-80 lg:h-[500px] lg:w-[500px] bg-yellow-500/20 blur-[150px] animate-pulse" />
          <div className="absolute bottom-1 -right-5 h-40 w-40 sm:h-56 sm:w-56 lg:h-[350px] lg:w-[350px] bg-sky-500/20 blur-[150px] rounded-full animate-pulse" />
        </div>
        {/* Header */}
        <div className="hidden lg:block absolute top-42 -right-29 h-[30%] w-[30%] z-10 transform -scale-x-100 rotate-20 will-change-transform ">
          <img src={rocketLaunch} alt="rocketLaunch.svg" aria-hidden="true"
            loading="lazy"
            width={300}
            height={300} />
        </div>

        <div className="text-center mb-4 sm:mb-20">
          <span className="inline-flex text-yellow-300 text-base uppercase tracking-[0.25em]">
            Application Process
          </span>

          <h2 className="mt-6 text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight text-white">
            APPLICATION
            <span className="text-yellow-400"> JOURNEY.</span>
          </h2>

          <p className="mt-5 max-w-xl mx-auto text-base sm:text-lg md:text-xl text-zinc-400">
            Three simple steps to become part of an ambitious founder ecosystem.
          </p>
        </div>

        {/* Mobile Rocket */}
        <div className="flex justify-center mb-2 sm:mb-8 lg:hidden">
          <img
            src={rocketLaunch}
            alt="rocket"
            className="w-70 sm:w-48 md:w-56"
          />
        </div>

        {/* Steps */}
        <div className="relative flex gap-4 items-stretch overflow-x-auto snap-x snap-mandatory pb-12 lg:pb-6 px-4 no-scrollbar lg:grid lg:grid-cols-3 lg:gap-8 lg:overflow-visible lg:px-6">
          {/* Desktop arrows */}
          <div className="hidden z-10 lg:block absolute left-[30%] top-[40%] text-zinc-400 -rotate-20">
            <ArrowRight size={75} strokeWidth={1.5} />
          </div>

          <div className="hidden z-30 lg:block absolute right-[30%] top-[30%] text-zinc-400 -rotate-40">
            <ArrowRight size={80} strokeWidth={1.5} />
          </div>

          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <motion.div
                whileHover={{ rotate: 0, y: -8, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
                key={step.number}
                className={`relative w-[88vw] max-w-[330px] sm:w-[340px] pt-6 sm:pt-0 shrink-0 snap-center lg:w-auto lg:shrink ${step.rotate}`}
              >
                <div className=" group relative  rounded-[32px] border border-white/10 bg-zinc-950/80 backdrop-blur-xl p-5 sm:p-8 transition-all duration-500">
                  {/* Glow */}
                  <div className="absolute inset-0 rounded-[32px] overflow-hidden pointer-events-none">
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${step.glow}`}
                    />
                  </div>

                  {/* Decorative Orb */}
                  <div className="absolute inset-0 overflow-hidden rounded-[32px]">
                    <div className="absolute -right-6 -top-6 w-32 h-32 rounded-full  bg-white/[0.05] blur-md animate-pulse" />
                  </div>

                  <div className="relative z-10">
                    {/* Number */}
                    <div className="text-5xl sm:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-b  from-white to-zinc-300">
                      {step.number}
                    </div>

                    {/* Icon */}
                    <div className={`mt-4 sm:mt-6 w-12 h-12 sm:w-16 sm:h-16 rounded-2xl ${step.iconBg} border border-white/10 flex items-center justify-center`}>
                      <Icon className={`w-5 h-5 sm:w-8 sm:h-8 ${step.iconColor}`} />
                    </div>

                    {/* Content */}
                    <h3 className="mt-3 sm:mt-6 text-2xl sm:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-b  from-white to-zinc-300">
                      {step.title}
                    </h3>

                    <p className="mt-2 sm:mt-4 text-zinc-300/90 leading-relaxed text-[14px] sm:text-[17px]">
                      {step.description}
                    </p>
                  </div>

                  {/* Stickers */}
                  {index === 0 && (
                    <div className="absolute z-20 -bottom-5 left-6 rotate-[-8deg]">
                      <Button
                        label="Apply Now"
                        navigateTo="/CampusAmbassador/apply"
                        icon={RocketIcon}
                        className="!bg-violet-500 hover:!bg-violet-400 !text-white !font-black !text-[11px] !sm:text-base !px-5 !py-3 !rounded-2xl !border !border-violet-300 !shadow-xl !justify-center"
                        iconClassName="w-4 h-4 !text-white"
                        variant="secondary"
                      />
                    </div>
                  )}

                  {index === 1 && (
                    <div className=" absolute z-20 -bottom-5 right-8 h-12 w-12 sm:h-14 sm:w-14 rounded-full bg-yellow-500 flex items-center justify-center shadow-lg ">
                      💬
                    </div>
                  )}

                  {index === 2 && (
                    <div className="absolute z-20 -bottom-6 right-6 rotate-[8deg] bg-sky-500 px-2 py-1 sm:px-5 sm:py-3 rounded-xl sm:rounded-2xl border border-sky-300 shadow-xl ">
                      <span className="font-black text-white uppercase text-[12px] sm:text-sm">
                        🎉 MEMBER
                      </span>
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Button Component */}
        <div className="flex justify-center mt-4 sm:mt-16">
          <Button
            label="Start Your Journey"
            navigateTo="/CampusAmbassador/clubProgram"
            icon={Rocket}
            variant="cta-yellow"
            className="!text-[14px] !sm:text-base hover:-translate-y-2"
          />
        </div>
        <div className="hidden lg:block absolute -bottom-30 left-30 h-[30%] w-[30%] will-change-transform ">
          <img src={rocketLaunch} alt="rocketLaunch.svg" aria-hidden="true"
            loading="lazy"
            width={300}
            height={300} />
        </div>
      </div>
    </section>
  );
}
