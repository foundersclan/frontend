import {
  Users, Calendar, Rocket, Target, Globe, Trophy, ArrowRight, CheckCircle2, Megaphone, Briefcase, AlertTriangle, ChevronRight,
  Handshake,
  UserRoundSearch,
} from "lucide-react";
import { Button } from "../components/shared/Button";
import deal from "/assets/deal.png";

export default function ClubProgram() {
  return (
    <div className="relative min-h-screen bg-[#3720494e] text-white font-sans selection:bg-yellow-500/30 overflow-hidden px-4 sm:px-6 py-12 sm:py-24">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-yellow-500/10 blur-[120px]" />
        <div className="absolute bottom-[10%] right-[-5%] w-[40%] h-[40%] rounded-full bg-purple-600/10 blur-[120px]" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10 space-y-8 sm:space-y-12">
        {/* HEADER SECTION (image_f2c505.png style with premium card layout) */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 md:gap-8 bg-zinc-950/50 backdrop-blur-xl border border-white/10 p-5 sm:p-8 rounded-2xl sm:rounded-[32px] relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-500/5 blur-3xl rounded-full" />

          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-yellow-500/20 bg-yellow-500/5 text-yellow-500 text-[10px] sm:text-xs font-bold uppercase tracking-widest mb-4 sm:mb-6">
              Program 2026-27 Now Live
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tighter leading-none mb-3 sm:mb-4">
              FOUNDERS{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-600">
                NEXUS CLUB.
              </span>
            </h1>
            <p className="text-zinc-400 text-xs sm:text-sm md:text-base leading-relaxed">
              Think of the Nexus Club as your mini-startup with Founder
              backing. Here, you engage with your peers, host events, spark
              campaigns, and become the voice of Founders at your campus.
            </p>
          </div>

          {/* Quick Info Block */}
          <div className="flex flex-col gap-4 min-w-0 sm:min-w-[260px] w-full md:w-auto bg-white/5 p-4 sm:p-5 rounded-xl sm:rounded-2xl border border-white/5">
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="p-2 sm:p-2.5 rounded-xl bg-purple-500/10 text-purple-400 shrink-0">
                <Calendar size={16} className="sm:w-[18px] sm:h-[18px]" />
              </div>
              <div>
                <p className="text-[10px] sm:text-[12px] text-zinc-500 uppercase font-bold tracking-wider">
                  Registration Deadline
                </p>
                <p className="text-xs sm:text-sm font-semibold text-zinc-200">
                  {/* 31 Mar 27, 00:00 AM IST */}
                  ----------
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="p-2 sm:p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 shrink-0">
                <Users size={16} className="sm:w-[18px] sm:h-[18px]" />
              </div>
              <div>
                <p className="text-[10px] sm:text-[12px] text-zinc-500 uppercase font-bold tracking-wider">
                  Team Size
                </p>
                <p className="text-xs sm:text-sm font-semibold text-zinc-200">
                  2 - 7 Members
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ELIGIBILITY CHIPS (As clean typography section) */}
        <div className="bg-gradient-to-r from-zinc-950/40 to-zinc-900/40 backdrop-blur-md border border-white/10 rounded-xl sm:rounded-[24px] p-4 sm:p-6">
          <p className="text-[10px] sm:text-[12px] font-black uppercase tracking-widest text-zinc-500 mb-3 sm:mb-4">
            Eligibility Matrix
          </p>
          <div className="flex flex-wrap gap-2">
            {[
              "Postgraduate",
              "Management",
              "Undergraduate",
              "Engineering Students",
              "Arts",
              "Commerce",
              "Sciences & Others",
            ].map((el, idx) => (
              <span
                key={idx}
                className="px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg sm:rounded-xl bg-zinc-950/60 border border-white/5 text-xs sm:text-sm text-zinc-300 font-medium"
              >
                {el}
              </span>
            ))}
          </div>
        </div>

        {/* DETAILED INFORMATION SECTION (image_f2c226.png text flow format) */}
        <div className="bg-zinc-950/70 backdrop-blur-xl border border-white/10 rounded-2xl sm:rounded-[32px] p-5 sm:p-8 md:p-10 space-y-8 sm:space-y-10 group relative">
          <div>
            <h2 className="text-base sm:text-lg md:text-2xl font-black uppercase tracking-tight mb-4 sm:mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-zinc-400 leading-snug">
              All that you need to know about Founders Nexus Club Program
              2026-27
            </h2>
            <div className="space-y-3 sm:space-y-4 text-zinc-400 border-l-2 border-yellow-500/30 pl-3 sm:pl-4">
              <p className="font-bold text-white text-sm sm:text-base">
                What is the Founders Nexus Club?
              </p>
              <p className="italic text-yellow-500 font-medium text-xs sm:text-sm">
                A club where YOU run the show.
              </p>
              <p className="text-xs sm:text-sm md:text-lg leading-relaxed text-zinc-400">
                Think of the Nexus Club as your mini startup…with the Founders
                backing. Here, you engage with your peers, host events, spark
                campaigns, and ultimately, become the voice of Founders at your
                campus.
              </p>
            </div>
          </div>

          <div className="pt-6 sm:pt-8 border-t border-white/5">
            <p className="font-black text-xs sm:text-sm uppercase tracking-widest text-zinc-500 mb-2">
              What will you do as a Nexus Club?
            </p>
            <p className="text-xs sm:text-sm md:text-base text-zinc-300 mb-4 sm:mb-6 font-medium">
              As a Founders Nexus Club, you won’t just promote opportunities,
              you’ll build, market, and grow a real campus brand.
            </p>

            {/* Responsibilities list styled natively like the design system */}
            <div className="space-y-3 sm:space-y-4">
              {[
                {
                  // icon: <Handshake size={16} className="sm:w-[18px] sm:h-[18px]" />,
                  icon: <img src="/assets/deal.png" alt="Deal" className="w-4 h-4 sm:w-[18px] sm:h-[18px] object-contain invert" />,
                  title: "Collaborate & Scale Impact",
                  desc: "Act as the bridge between Founders and your college’s clubs, departments, and societies to launch large-scale, high-impact campus events.",
                },
                {
                  icon: <img src="/assets/college.png" alt="college.png" className="w-4 h-4 sm:w-[18px] sm:h-[18px] object-contain invert" />,
                  title: "Build Your College’s Digital Presence",
                  desc: "Manage & Grow the club’s social media to showcase your college’s talent, events, and achievements to build a strong digital identity for your college.",
                },
                {
                  icon: <img src="/assets/advertising.png" alt="advertising.png" className="w-5 h-5 sm:w-[18px] sm:h-[18px] object-contain invert" />,
                  title: "Run Marketing Campaigns",
                  desc: "Strategize and execute campaigns for hackathons, competitions, and hiring opportunities to drive higher participation and unlock PPI/PPO opportunities for students.",
                },
                {
                  icon: <img src="/assets/campus-events.png" alt="campus-events.png" className="w-4 h-4 sm:w-[18px] sm:h-[18px] object-contain invert" />,
                  title: "Own Campus Events",
                  desc: "Conceptualize with the Founders team and execute online/offline events, workshops, competitions, and masterclasses across exciting domains like Marketing, GenAI, Technology, Sustainability, Resume building, Career guidance, and more. The Founders Team will help you with the speakers for the sessions.",
                },
                {
                  icon: <img src="/assets/community.png" alt="community.png" className="w-4 h-4 sm:w-[18px] sm:h-[18px] object-contain invert" />,
                  title: "Create a Thriving Community",
                  desc: "To create a vibrant ecosystem in your campus where students actively discover and participate in competitions, hackathons, and career opportunities.",
                },
                {
                  icon: <img src="/assets/success.png" alt="success.png" className="w-4 h-4 sm:w-[18px] sm:h-[18px] object-contain invert" />,
                  title: "Guide Students to Career Opportunities",
                  desc: "Help peers discover mentors, competitions, internships, and help in skill-building through Founders.",
                },
                {
                  icon: <img src="/assets/brand-asset-management.png" alt="brand-asset-management.png" className="w-4 h-4 sm:w-[18px] sm:h-[18px] object-contain invert" />,
                  title: "Represent & Strengthen the Brand",
                  desc: "Act as the official Founders voice on campus, shaping how opportunities reach and impact students.",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-zinc-900/30 border border-white/5 flex gap-3 sm:gap-4 items-start hover:bg-zinc-900/50 hover:border-white/10 transition-all hover:translate-x-1"
                >
                  <div className="p-1 sm:p-2 rounded-lg sm:rounded-xl bg-yellow-500/10 text-yellow-500 shrink-0 mt-0.5">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-sm sm:text-base text-white mb-1 tracking-tight">
                      {item.title}
                    </h4>
                    <p className="text-xs sm:text-sm md:text-base text-zinc-400 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-4 sm:mt-6 p-4 rounded-xl bg-white/5 border border-white/5 text-center backdrop-blur">
              <p className="text-sm sm:text-base md:text-lg font-semibold text-zinc-400">
                Club Size: <span className="text-yellow-500">2-7 members</span>
              </p>
            </div>
          </div>
        </div>

        {/* APPLICATION TIMELINE TRACK (image_f2ba61.png style with steps layout) */}
        <div className="bg-zinc-950/70 backdrop-blur-xl border border-white/10 rounded-2xl sm:rounded-[32px] p-5 sm:p-8 md:p-10 relative overflow-hidden group">
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-purple-500/5 blur-[50px]" />
          <h2 className="text-lg sm:text-xl font-black uppercase tracking-widest text-zinc-500 mb-6 sm:mb-8">
            How to Apply & Form Your Club?
          </h2>

          <div className="relative border-l border-white/10 pl-4 sm:pl-6 ml-1.5 sm:ml-3 space-y-6 sm:space-y-8">
            {[
              {
                step: "Step 1",
                title: "Submit Your Application",
                desc: "Fill out the form with your details and those of your 2-7 potential team members.",
              },
              {
                step: "Step 2",
                title: "Complete an Interview",
                desc: "After registration, member will receive an interview link by email. Interviews must be completed within the given period.",
              },
              {
                step: "Step 3",
                title: "Selection of Nexus Member",
                desc: "The Founders Team will select, to become 'Founders Nexus' based on their interviews. Selected will receive a confirmation email with onboarding details.",
              },
              {
                step: "Step 4",
                title: "Finalize Club Formation",
                desc: "The final step involves completing the formalities to officially form the club. Detailed instructions will be shared with all selected Nexus via email.",
              },
            ].map((phase, idx) => (
              <div key={idx} className="relative group/step">
                <div className="absolute -left-[21px] sm:-left-[31px] top-1.5 w-2.5 h-2.5 rounded-full bg-zinc-800 border border-zinc-950 group-hover/step:bg-yellow-500 transition-colors" />
                <span className="text-xs sm:text-sm font-black tracking-widest uppercase text-yellow-500/70">
                  {phase.step}
                </span>
                <h3 className="font-bold text-sm sm:text-base md:text-lg text-white mt-0.5 mb-1 tracking-tight">
                  {phase.title}
                </h3>
                <p className="text-xs sm:text-sm md:text-base text-zinc-400 leading-relaxed max-w-2xl">
                  {phase.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="w-full mt-8 sm:mt-10">
            <Button
              label="Start Application"
              navigateTo="/CampusAmbassador/apply"
              icon={ArrowRight}
              variant="cta-yellow"
              className="w-full"
            />
          </div>
        </div>

        {/* REWARDS & BENEFITS (image_f2c1a2.png split layout style grid) */}
        <div className="bg-zinc-950/70 backdrop-blur-xl border border-white/10 rounded-2xl sm:rounded-[32px] p-5 sm:p-8 md:p-10 relative">
          <h2 className="text-lg sm:text-xl font-black uppercase tracking-widest text-zinc-500 mb-6 flex items-center gap-2">
            <Trophy size={16} className="text-yellow-500 sm:w-[18px] sm:h-[18px]" /> Rewards & Benefits
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            {[
              "Exclusive Founders Merch Kit and milestone-based rewards",
              "PPI / Live Project Opportunities for top-performing Nexus",
              "Certificates & Recognition from Founders",
              "Founders Pro Access to Top-performing Founders Nexus",
              "Feature Spotlight on Founders’s social media platforms",
              // "Founders Awards for top Nexus Clubs at flagship event – Founders Talent Meet 2027",
              "Founders Awards for top Nexus Club members",
              "Access to a powerful network of Nexus Clubs across India",
              "Learning & mentorship opportunities through masterclasses, webinars, and guest sessions",
            ].map((reward, idx) => (
              <div
                key={idx}
                className="flex gap-2.5 sm:gap-3 items-start bg-zinc-900/30 p-3 sm:p-4 rounded-xl sm:rounded-2xl border border-white/5 hover:border-white/10 transition-colors"
              >
                <CheckCircle2
                  size={16}
                  className="text-emerald-500 shrink-0 mt-0.5 sm:w-5 sm:h-5"
                />
                <span className="text-xs sm:text-sm md:text-base text-zinc-300 leading-relaxed">
                  {reward}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* CRITICAL FOOTNOTES (image_f2ba61.png bottom disclaimer notice) */}
        <div className="bg-amber-500/5 border border-amber-500/20 rounded-xl sm:rounded-[24px] p-4 sm:p-6 flex gap-3 sm:gap-4 items-start backdrop-blur-md">
          <div className="p-1.5 sm:p-2 rounded-lg sm:rounded-xl bg-amber-500/10 text-amber-500 shrink-0 mt-0.5">
            <AlertTriangle size={16} className="sm:w-[18px] sm:h-[18px]" />
          </div>
          <div>
            <h4 className="font-bold text-sm sm:text-base md:text-lg uppercase tracking-wider text-amber-500 mb-1">
              Important Note
            </h4>
            <p className="text-xs sm:text-sm md:text-base text-zinc-400 leading-relaxed mb-2">
              If any Nexus (member and/or entire club) does not live up to the
              performance standards set by Founders Clan, Team Founders Clan has the right to
              discontinue their association with the program.
            </p>
            <p className="text-xs sm:text-sm font-semibold text-zinc-300">
              Perks will be based on performance.
            </p>
          </div>
        </div>

        {/* Editorial Footer Line */}
        <div className="text-center pt-4">
          <p className="text-zinc-600 text-[10px] sm:text-sm uppercase tracking-[0.15em] sm:tracking-[0.2em] font-bold">
            Performance based program • Terms and Conditions Apply • Powered by
            Founders Clan
          </p>
        </div>
      </div>
    </div>
  );
}
