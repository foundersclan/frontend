import { useEffect, useRef, useState } from "react";
import { EventTimeline } from "./eventTimeline";
import { LegacyEvents, upcomingEvents } from "./eventData";
import UpcomingEventsPlaceholder from "./UpcomingEventsPlaceholder";
import { motion } from "framer-motion";
import { ArrowRight, Users } from "lucide-react";

const EVENT_VIDEO_URL = import.meta.env.VITE_EVENT_VIDEO_URL;

export const Events = () => {
  const [activeTab, setActiveTab] = useState("past");
  const sectionRef = useRef(null);
  useEffect(() => {
    sectionRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }, [activeTab]);

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
    <section ref={sectionRef} className="bg-[#050505] py-24">
      <div className="max-w-7xl mx-auto px-6 mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
        <div>
          <span className="text-amber-500 font-mono text-[12px] uppercase tracking-[0.5em]">
            COLLABORATIVE MILESTONES
          </span>
          <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tighter mt-4">
            THE <span className="text-zinc-800 italic">CALENDAR.</span>
          </h2>
        </div>
        <div className="flex bg-zinc-900/100 p-2 rounded-full border border-zinc-800/100 backdrop-blur-sm self-start">
          <button
            onClick={() => setActiveTab("upcoming")}
            className={`px-6 py-2.5 rounded-full text-xs font-bold transition-all ${activeTab === "upcoming" ? "bg-amber-500 text-black" : "text-zinc-500"}`}
          >
            UPCOMING
          </button>
          <button
            onClick={() => setActiveTab("past")}
            className={`px-6 py-2.5 rounded-full text-xs font-bold transition-all ${activeTab === "past" ? "bg-zinc-800 text-white" : "text-zinc-500"}`}
          >
            PAST LEGACY
          </button>
        </div>
      </div>

      {/* Video section */}
      {activeTab === "past" &&
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
                <div className="relative aspect-video lg:aspect-auto lg:min-h-[390px] overflow-hidden bg-black m-3 sm:m-5 lg:m-6 rounded-xl sm:rounded-2xl">
                  <div className="relative aspect-video lg:aspect-auto lg:min-h-[390px] overflow-hidden bg-black m-3 sm:m-5 lg:m-6 rounded-xl sm:rounded-2xl">
                    <iframe
                      className="absolute inset-0 w-full h-full"
                      src={EVENT_VIDEO_URL}
                      title="Founders Clan"
                      // allow="autoplay; encrypted-media; picture-in-picture"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; full-screen "
                      allowFullScreen
                    />

                    <div className="absolute inset-0 bg-black/10 pointer-events-none" />
                  </div>

                  <div className="absolute inset-0 bg-black/10 pointer-events-none" />

                  <div className="hidden lg:block absolute top-4 left-4 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-sm border border-white/10 font-mono text-[10px] tracking-[0.1em] text-zinc-300">
                    FOUNDERS CLAN
                  </div>
                </div>

                {/* COMMUNITY CONTENT */}
                <div className="flex flex-col md:flex-row md:items-center lg:items-start gap-5 sm:gap-6 px-5 pb-6 sm:px-8 sm:pb-10 lg:px-10">

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <h2 className="text-xl sm:text-2xl lg:text-[30px] leading-tight sm:leading-[1.15] font-bold tracking-tight text-zinc-100 mb-2 sm:mb-3">
                      The Real Conversation Happens Here
                    </h2>

                    <p className="text-xs sm:text-sm lg:text-base text-zinc-500 leading-relaxed max-w-xl">
                      Daily build talk, first access to every event, and no gatekeeping — just people building.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>
      }

      {/* Tabs */}
      {activeTab === "upcoming" &&
        (upcomingEvents.length > 0 ? (
          <EventTimeline
            events={upcomingEvents}
            title="Upcoming Events"
            showCTA={false}
          />) : (
          <UpcomingEventsPlaceholder onExplorePast={() => setActiveTab("past")} />
        ))}

      {activeTab === "past" && (
        <EventTimeline
          events={LegacyEvents}
          title="Legacy"
          showCTA={true}
          onCTAClick={() => setActiveTab("upcoming")}
        />
      )}
    </section>
  );
};
