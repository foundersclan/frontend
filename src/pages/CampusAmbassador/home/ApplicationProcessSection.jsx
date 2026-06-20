import { ArrowRight,FileText,MessageCircle,PartyPopper,Rocket,RocketIcon,} from "lucide-react";
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
    <section className="relative py-32 overflow-hidden ">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-[450px] h-[450px] bg-violet-500/10 blur-[50px] rounded-full animate-pulse" />
        <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-yellow-500/20 blur-[150px] animate-pulse" />
        <div className="absolute bottom-20 left-1/2 w-[450px] h-[350px] bg-sky-500/20 blur-[150px] animate-pulse" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="absolute top-38 -right-48 h-[30%] w-[30%] z-10 transform -scale-x-100 rotate-20 will-change-transform ">
          <img src={rocketLaunch} alt="rocketLaunch.svg"  aria-hidden="true"
  loading="lazy"
  width={300}
  height={300} />
        </div>

        <div className="text-center mb-20">
          <span className="inline-flex px-4 py-2 rounded-full border border-yellow-500/20 bg-yellow-500/10 text-yellow-300 text-xs uppercase tracking-[0.25em]">
            Application Process
          </span>

          <h2 className="mt-8 text-5xl md:text-7xl font-black text-white leading-none">
            APPLICATION
            <span className="text-yellow-400"> JOURNEY.</span>
          </h2>

          <p className="mt-6 max-w-2xl mx-auto text-xl text-zinc-400">
            Three simple steps to become part of an ambitious founder ecosystem.
          </p>
        </div>

        {/* Steps */}
        <div className="relative grid lg:grid-cols-3 gap-10">
          {/* Desktop arrows */}
          <div className="hidden z-10 lg:block absolute left-[30%] top-[40%] text-zinc-400 -rotate-20">
            <ArrowRight size={75} strokeWidth={1.5} />
          </div>

          <div className="hidden Z-20 lg:block absolute right-[30%] top-[30%] text-zinc-400 -rotate-40">
            <ArrowRight size={80} strokeWidth={1.5} />
          </div>

          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <motion.div
                whileHover={{ rotate: 0, y: -8, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
                key={step.number}
                className={`relative ${step.rotate}`}
              >
                <div className=" group relative  rounded-[32px] border border-white/10 bg-zinc-950/80 backdrop-blur-xl p-8 transition-all duration-500">
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
                    <div className=" text-6xl font-black text-transparent bg-clip-text bg-gradient-to-b  from-white to-zinc-600">
                      {step.number}
                    </div>

                    {/* Icon */}
                    <div className={`mt-6 w-16 h-16 rounded-2xl ${step.iconBg} border border-white/10 flex items-center justify-center`}>
                      <Icon className={`w-8 h-8 ${step.iconColor}`} />
                    </div>

                    {/* Content */}
                    <h3 className="mt-6 text-3xl font-black text-transparent bg-clip-text bg-gradient-to-b  from-white to-zinc-500">
                      {step.title}
                    </h3>

                    <p className="mt-4 text-zinc-300/90 leading-relaxed text-[17px]">
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
                        className="!bg-violet-500 hover:!bg-violet-400 !text-white !font-black !text-base !px-5 !py-3 !rounded-2xl !border !border-violet-300 !shadow-xl !justify-center"
                        iconClassName="w-4 h-4 !text-white"
                        variant="secondary"
                      />
                    </div>
                  )}

                  {index === 1 && (
                    <div className=" absolute z-20 -bottom-5 right-8 h-14 w-14 rounded-full bg-yellow-500 flex items-center justify-center shadow-lg ">
                      💬
                    </div>
                  )}

                  {index === 2 && (
                    <div className=" absolute z-20 -bottom-6 right-6 rotate-[8deg] bg-sky-500 px-5 py-3 rounded-2xl border border-sky-300 shadow-xl ">
                      <span className="font-black text-white uppercase text-sm">
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
        <div className="flex justify-center mt-16">
          <Button
            label="Start Your Journey"
            navigateTo="/CampusAmbassador/clubProgram"
            icon={Rocket}
            variant="cta-yellow"
            className="!text-base hover:-translate-y-2"
          />
        </div>
        <div className="absolute -bottom-20 left-30 h-[30%] w-[30%] will-change-transform ">
          <img src={rocketLaunch} alt="rocketLaunch.svg"  aria-hidden="true"
  loading="lazy"
  width={300}
  height={300} />
        </div>
      </div>
    </section>
  );
}
