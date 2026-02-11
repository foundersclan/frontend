import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Plus, 
  Search, 
  MapPin, 
  Calendar, 
  Clock, 
  MoreHorizontal, 
  Eye, 
  Edit3, 
  Users, 
  Globe,
  X
} from 'lucide-react';

const EventManager = () => {
  const [activeFilter, setActiveFilter] = useState('upcoming');
  const [isCreateOpen, setIsCreateOpen] = useState(false);

  const eventList = [
    { id: "EVT-001", name: "SF Tech Week", status: "upcoming", date: "Oct 6, 2026", location: "San Francisco", attendees: 450, capacity: 500 },
    { id: "EVT-002", name: "Founders Summit", status: "ongoing", date: "Feb 11, 2026", location: "New York", attendees: 120, capacity: 150 },
    { id: "EVT-003", name: "London Alpha", status: "past", date: "May 12, 2025", location: "London", attendees: 300, capacity: 300 },
  ];

  const filteredEvents = eventList.filter(e => activeFilter === 'all' || e.status === activeFilter);

  return (
    <div className="bg-[#050505] min-h-screen text-slate-300 p-6 md:p-12 relative overflow-hidden">
      
      {/* --- HEADER --- */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
        <div>
          <h1 className="text-4xl font-bold text-white tracking-tight">Event <span className="text-amber-500 italic font-serif">Lifecycle</span></h1>
          <p className="text-zinc-500 text-xs font-mono uppercase tracking-[0.3em] mt-2">Orchestrate Global Delegations</p>
        </div>
        
        <div className="flex gap-4 w-full md:w-auto">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-600" size={16} />
            <input 
              type="text" 
              placeholder="Search Events..." 
              className="w-full bg-zinc-900 border border-zinc-800 rounded-2xl pl-12 pr-4 py-3 text-sm focus:border-amber-500/50 outline-none"
            />
          </div>
          <button 
            onClick={() => setIsCreateOpen(true)}
            className="bg-amber-500 text-black px-6 py-3 rounded-2xl font-black uppercase text-[10px] tracking-widest hover:bg-amber-400 transition-all flex items-center gap-2 whitespace-nowrap"
          >
            <Plus size={18} /> New Event
          </button>
        </div>
      </div>

      {/* --- FILTER TABS --- */}
      <div className="max-w-7xl mx-auto flex gap-8 border-b border-zinc-900 mb-10">
        {['all', 'ongoing', 'upcoming', 'past'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveFilter(tab)}
            className={`pb-4 text-[10px] font-black uppercase tracking-widest transition-all relative ${activeFilter === tab ? 'text-amber-500' : 'text-zinc-600 hover:text-zinc-400'}`}
          >
            {tab}
            {activeFilter === tab && (
              <motion.div layoutId="activeTab" className="absolute bottom-0 left-0 right-0 h-0.5 bg-amber-500" />
            )}
          </button>
        ))}
      </div>

      {/* --- EVENT GRID --- */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        <AnimatePresence mode='popLayout'>
          {filteredEvents.map((event) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              key={event.id}
              className="bg-zinc-900/40 border border-zinc-800 rounded-[2rem] p-8 group hover:border-amber-500/30 transition-all relative overflow-hidden"
            >
              {/* Status Badge */}
              <div className="flex justify-between items-start mb-6">
                <span className={`text-[9px] font-bold px-3 py-1 rounded-full uppercase tracking-tighter ${
                  event.status === 'ongoing' ? 'bg-green-500/10 text-green-500 animate-pulse' : 
                  event.status === 'upcoming' ? 'bg-amber-500/10 text-amber-500' : 'bg-zinc-800 text-zinc-500'
                }`}>
                  {event.status}
                </span>
                <button className="text-zinc-600 hover:text-white"><MoreHorizontal size={20}/></button>
              </div>

              <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-amber-500 transition-colors">{event.name}</h3>
              
              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-3 text-zinc-500 text-xs">
                  <Calendar size={14} className="text-zinc-700" /> {event.date}
                </div>
                <div className="flex items-center gap-3 text-zinc-500 text-xs">
                  <MapPin size={14} className="text-zinc-700" /> {event.location}
                </div>
                <div className="flex items-center gap-3 text-zinc-500 text-xs">
                  <Users size={14} className="text-zinc-700" /> {event.attendees} / {event.capacity} Registered
                </div>
              </div>

              <div className="flex gap-3">
                <button className="flex-1 bg-zinc-950 border border-zinc-800 hover:border-amber-500/50 text-white text-[10px] font-bold uppercase tracking-widest py-3 rounded-xl flex items-center justify-center gap-2 transition-all">
                  <Eye size={14} /> Details
                </button>
                <button className="bg-zinc-800 hover:bg-zinc-700 p-3 rounded-xl transition-all">
                  <Edit3 size={14} />
                </button>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* --- CREATE EVENT MODAL (Slide-over) --- */}
      <AnimatePresence>
        {isCreateOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setIsCreateOpen(false)}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[200]"
            />
            <motion.div 
              initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-full max-w-xl bg-zinc-950 border-l border-zinc-800 z-[210] p-12 overflow-y-auto"
            >
              <div className="flex justify-between items-center mb-12">
                <h2 className="text-3xl font-bold text-white tracking-tight">Construct <span className="text-amber-500">Event</span></h2>
                <button onClick={() => setIsCreateOpen(false)} className="text-zinc-500 hover:text-white"><X size={28}/></button>
              </div>

              <form className="space-y-8">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase font-mono tracking-widest text-zinc-500 ml-1">Event Identification</label>
                  <input type="text" placeholder="e.g. Tokyo Nexus Summit" className="w-full bg-zinc-900 border border-zinc-800 rounded-2xl p-4 text-white focus:border-amber-500/50 outline-none transition-all" />
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase font-mono tracking-widest text-zinc-500 ml-1">Timeline</label>
                    <div className="relative">
                      <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-600" size={16} />
                      <input type="date" className="w-full bg-zinc-900 border border-zinc-800 rounded-2xl pl-12 pr-4 py-4 text-xs text-white outline-none" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase font-mono tracking-widest text-zinc-500 ml-1">Global Location</label>
                    <div className="relative">
                      <Globe className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-600" size={16} />
                      <input type="text" placeholder="City, Country" className="w-full bg-zinc-900 border border-zinc-800 rounded-2xl pl-12 pr-4 py-4 text-xs text-white outline-none" />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] uppercase font-mono tracking-widest text-zinc-500 ml-1">Legacy Description</label>
                  <textarea rows="4" placeholder="Brief the attendees on the vision..." className="w-full bg-zinc-900 border border-zinc-800 rounded-2xl p-4 text-white focus:border-amber-500/50 outline-none transition-all resize-none text-sm"></textarea>
                </div>

                <div className="pt-8 flex gap-4">
                  <button className="flex-1 bg-amber-500 text-black font-black uppercase tracking-widest py-5 rounded-2xl text-[10px] shadow-lg shadow-amber-500/20">
                    Publish to Calendar
                  </button>
                  <button type="button" onClick={() => setIsCreateOpen(false)} className="flex-1 border border-zinc-800 text-zinc-500 font-black uppercase tracking-widest py-5 rounded-2xl text-[10px] hover:bg-zinc-900 transition-all">
                    Discard Draft
                  </button>
                </div>
              </form>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default EventManager;