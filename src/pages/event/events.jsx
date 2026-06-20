import { useEffect, useRef, useState } from "react";
import { EventTimeline } from "./EventTimeline";
import { LegacyEvents, upcomingEvents } from "./eventData";

export const Events = () => {
  const [activeTab, setActiveTab] = useState("upcoming");
  const sectionRef = useRef(null);
  useEffect(() => {
   sectionRef.current?.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
}, [activeTab]);
  return (
    // bg-zinc-950
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
        <div className="flex bg-zinc-900/50 p-2 rounded-full border border-zinc-800 backdrop-blur-sm self-start">
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
      {/* Tabs */}

      {activeTab === "upcoming" && (
        <EventTimeline
          events={upcomingEvents}
          title="Upcoming Events"
          showCTA={false}
        />
      )}

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
