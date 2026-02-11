import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Calendar, ArrowRight, History, Zap, X, ShieldCheck } from "lucide-react";

export const Events = () => {
  const [activeTab, setActiveTab] = useState("upcoming");
  const [selectedEvent, setSelectedEvent] = useState(null); // Tracks modal state

  const eventData = {
    upcoming: [
      { id: 1, url: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800", name: "SF Tech Week", location: "San Francisco", date: "Oct 6 – Oct 12", tag: "SFTW // 01", description: "Explore the intersection of deep tech and venture capital." },
      { id: 2, url: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800", name: "Founders Summit", location: "New York City", date: "Nov 15 – Nov 20", tag: "FSNY // 02", description: "An invitation-only gathering of 500+ world-class architects." }
    ],
    past: [
      { id: 3, url: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800", name: "London Alpha", location: "London, UK", date: "May 2025", tag: "LDN // 09", description: "A closed-door session focusing on the European fintech landscape." }
    ]
  };

  return (
    <section className="bg-zinc-950 py-24 relative">
      {/* Header & Toggle logic remains the same as previous response... */}
      <div className="max-w-7xl mx-auto px-6 mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
        <div>
          <span className="text-amber-500 font-mono text-[10px] uppercase tracking-[0.5em]">Global Itinerary</span>
          <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tighter mt-4">THE <span className="text-zinc-800 italic">CALENDAR.</span></h2>
        </div>
        <div className="flex bg-zinc-900/50 p-1 rounded-full border border-zinc-800 backdrop-blur-sm self-start">
          <button onClick={() => setActiveTab("upcoming")} className={`px-6 py-2.5 rounded-full text-xs font-bold transition-all ${activeTab === 'upcoming' ? 'bg-amber-500 text-black' : 'text-zinc-500'}`}>UPCOMING</button>
          <button onClick={() => setActiveTab("past")} className={`px-6 py-2.5 rounded-full text-xs font-bold transition-all ${activeTab === 'past' ? 'bg-zinc-800 text-white' : 'text-zinc-500'}`}>PAST LEGACY</button>
        </div>
      </div>

      {/* Events List */}
      <div className="flex flex-col border-b border-zinc-900">
        <AnimatePresence mode="wait">
          <motion.div key={activeTab} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            {eventData[activeTab].map((event, index) => (
              <div key={index} className="flex flex-col md:flex-row w-full border-t border-zinc-900 group hover:bg-zinc-900/20 transition-all duration-500">
                <div className="w-full md:w-1/3 p-10 md:p-16 border-r border-zinc-900">
                  <span className="text-amber-500 font-mono text-[10px] tracking-[0.3em] uppercase block mb-4">{event.tag}</span>
                  <h3 className="text-4xl font-bold text-white group-hover:text-amber-500 transition-colors">{event.name}</h3>
                  <div className="mt-12 space-y-4">
                    <div className="flex items-center gap-4 text-zinc-500 font-mono text-[10px] uppercase tracking-[0.2em]">
                      <MapPin size={14} className="text-amber-600" />
                      {event.location}
                    </div>
                    <div className="flex items-center gap-4 text-zinc-500 font-mono text-[10px] uppercase tracking-[0.2em]">
                      <Calendar size={14} className="text-amber-600" />
                      {event.date}
                    </div>
                  </div>


                </div>


                <div className="w-full md:w-1/3 p-10 md:p-16 flex flex-col justify-center gap-6">
                  <p className="text-zinc-400 font-light">{event.description}</p>
                  <motion.button
                    whileHover={{ x: 10 }}
                    onClick={() => activeTab === 'upcoming' && setSelectedEvent(event)}
                    className={`flex items-center gap-4 font-bold uppercase tracking-[0.2em] text-[10px] ${activeTab === 'past' ? 'text-zinc-700 cursor-not-allowed' : 'text-white hover:text-amber-500'}`}
                  >
                    {activeTab === 'upcoming' ? 'Request Invitation' : 'Event Concluded'} <ArrowRight size={14} />
                  </motion.button>
                </div>

                <div className="w-full md:w-1/3 h-64 md:h-auto overflow-hidden relative">
                  <img src={event.url} className={`w-full h-full object-cover grayscale opacity-30 group-hover:opacity-60 transition-all duration-700`} alt={event.name} />
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* --- REGISTRATION MODAL --- */}
      <AnimatePresence>
        {selectedEvent && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedEvent(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
            />

            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-lg bg-zinc-900 border border-zinc-800 rounded-[2.5rem] overflow-hidden shadow-2xl"
            >
              <button
                onClick={() => setSelectedEvent(null)}
                className="absolute top-6 right-6 text-zinc-500 hover:text-white transition-colors"
              >
                <X size={24} />
              </button>

              <div className="p-8 md:p-12">
                <div className="flex items-center gap-2 mb-2">
                  <ShieldCheck size={16} className="text-amber-500" />
                  <span className="text-zinc-500 font-mono text-[10px] uppercase tracking-widest">Priority Access</span>
                </div>
                <h2 className="text-3xl font-bold text-white mb-2">Join the Delegation</h2>
                <p className="text-zinc-400 text-sm mb-8">Registering interest for <span className="text-amber-500 font-semibold">{selectedEvent.name}</span></p>

                <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                  <div>
                    <label className="block text-zinc-500 text-[10px] uppercase tracking-widest mb-2 ml-1">Full Name</label>
                    <input type="text" placeholder="John Doe" className="w-full bg-zinc-950 border border-zinc-800 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-amber-500/50 transition-colors placeholder:text-zinc-700" />
                  </div>

                  <div>
                    <label className="block text-zinc-500 text-[10px] uppercase tracking-widest mb-2 ml-1">Work Email</label>
                    <input type="email" placeholder="john@founders.com" className="w-full bg-zinc-950 border border-zinc-800 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-amber-500/50 transition-colors placeholder:text-zinc-700" />
                  </div>

                  <div>
                    <label className="block text-zinc-500 text-[10px] uppercase tracking-widest mb-2 ml-1">Phone Number</label>
                    <input type="tel" placeholder="+1 (555) 000-0000" className="w-full bg-zinc-950 border border-zinc-800 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-amber-500/50 transition-colors placeholder:text-zinc-700" />
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-amber-500 text-black font-black uppercase tracking-widest py-5 rounded-2xl mt-4 text-xs shadow-lg shadow-amber-500/10 hover:bg-amber-400 transition-colors"
                  >
                    Submit Application
                  </motion.button>

                  <p className="text-[9px] text-zinc-600 text-center uppercase tracking-tighter mt-4">
                    By submitting, you agree to our private membership terms & vetting process.
                  </p>
                </form>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};