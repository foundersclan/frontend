import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  User,
  Calendar,
  History,
  Settings,
  LogOut,
  CreditCard,
  MapPin,
  ExternalLink,
  Award,
  Zap,
  Sparkles
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const UserDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('Founders_user'));
  const userData = {
    name: "Jonathan Wick",
    tier: "Founder Tier",
    location: "New York, USA",
    joined: "Jan 2024",
    bio: "Scaling fintech solutions for the next generation of global markets."
  };
  const handleLogout = () => {
    localStorage.removeItem('Founders_token')
    localStorage.removeItem('Founders_user')
    navigate('/login');
  }
  const registeredEvents = [
    { id: 1, name: "SF Tech Week", date: "Oct 6 – Oct 12, 2026", type: "Conference", status: "Confirmed" },
    { id: 2, name: "Founders Summit", date: "Nov 15, 2026", type: "Elite Dinner", status: "Vetting" }
  ];

  const pastEvents = [
    { id: 3, name: "London Alpha", date: "May 2025", location: "London", contribution: "Panelist" },
    { id: 4, name: "Tokyo Nexus", date: "Feb 2025", location: "Tokyo", contribution: "Attendee" }
  ];

  return (
    <div className="min-h-screen flex bg-[#050505] text-slate-200 font-sans">

      {/* 1. Sidebar Navigation */}
      {/* <aside className="w-20 lg:w-64 bg-zinc-900/50 border-r border-zinc-800 flex flex-col p-6 hidden md:flex  pt-30">
        
        <nav className="flex-1 space-y-4">
          <NavItem icon={<User size={20} />} label="Overview" active={activeTab === 'overview'} onClick={() => setActiveTab('overview')} />
          <NavItem icon={<Calendar size={20} />} label="My Schedule" active={activeTab === 'schedule'} onClick={() => setActiveTab('schedule')} />
          <NavItem icon={<Award size={20} />} label="Privileges" />
          <NavItem icon={<Settings size={20} />} label="Settings" />
        </nav>

        <button className="flex items-center gap-4 text-zinc-500 hover:text-red-400 transition-colors px-2">
          <LogOut size={20} />
          <span className="hidden lg:block text-xs font-bold uppercase tracking-widest">Logout</span>
        </button>
      </aside> */}

      {/* 2. Main Content Area */}
      <main className="flex-1 overflow-y-auto px-4 pt-24 pb-8 sm:px-6 md:px-8 lg:px-10 lg:pt-30">

        {/* Profile Header */}
        <section className="mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-zinc-900 border border-zinc-800 rounded-3xl relative overflow-hidden flex flex-col lg:flex-row items-center gap-6 lg:gap-8 p-5 sm:p-6 md:p-8"
          >
            <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
              <User className="w-20 h-20 md:w-28 md:h-28 text-amber-500" />
            </div>

            <div className="relative">
              <div className="w-24 h-24  sm:w-24 sm:h-24 rounded-full bg-gradient-to-tr from-amber-500 to-amber-200 p-1">
                <div className="w-full h-full rounded-full bg-zinc-950 flex items-center justify-center overflow-hidden">
                  {/* <img src="https://i.pravatar.cc/150?u=jonathan" alt="Profile" /> */}
                </div>
              </div>
              {/* <span className="absolute bottom-0 right-0 bg-amber-500 text-black text-[8px] font-black px-2 py-1 rounded-full uppercase">Pro</span> */}
            </div>

            <div className="text-center lg:text-left flex-1">
              <div className="flex flex-col lg:flex-row lg:items-center gap-4 mb-2">
                <h2 className="text-2xl sm:text-3xl font-bold text-white break-words">{user.first_name}</h2>
                {/* <span className="px-3 py-1 border border-amber-500/30 text-amber-500 text-[10px] font-mono rounded-full uppercase tracking-tighter">
                  {user.role}
                </span> */}
              </div>
              <div className="flex flex-wrap justify-center lg:justify-start gap-4 text-zinc-500 text-xs font-medium">
                {/* <span className="flex items-center gap-1"><MapPin size={12} />India</span> */}
                {/* <span className="flex items-center gap-1"><Calendar size={12} /> Member since {userData.joined}</span> */}
              </div>
            </div>
            <div className="flex flex-col sm:flex-row lg:flex-col gap-3 w-full lg:w-auto items-center justify-center">
              <button className="bg-white text-black text-xs font-bold px-6 py-3 rounded-xl hover:bg-amber-500 transition-colors uppercase tracking-widest" onClick={handleLogout}>
                Logout
              </button>
              {/* <button className="bg-white text-black text-xs font-bold px-6 py-3 rounded-xl hover:bg-amber-500 transition-colors uppercase tracking-widest">
                Edit Profile
              </button> */}
            </div>

          </motion.div>
        </section>

        {/* <div className="grid lg:grid-cols-2 gap-12"> */}

        {/* 3. Upcoming Registered Events */}
        {/* <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-bold text-white tracking-tight flex items-center gap-2">
                <Zap size={18} className="text-amber-500" /> Upcoming Itinerary
              </h3>
              <span className="text-zinc-600 text-[10px] uppercase font-mono">0 Sessions</span>
            </div>

            <div className="space-y-4">
              {registeredEvents.map(event => (
                <div key={event.id} className="group bg-zinc-900/40 border border-zinc-800 hover:border-zinc-700 p-6 rounded-2xl transition-all">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-amber-500 text-[10px] font-mono uppercase tracking-widest mb-1">{event.type}</p>
                      <h4 className="text-white font-bold mb-1 group-hover:text-amber-400 transition-colors">{event.name}</h4>
                      <p className="text-zinc-500 text-xs">{event.date}</p>
                    </div>
                    <span className={`text-[9px] font-bold px-3 py-1 rounded-full uppercase tracking-tighter ${event.status === 'Confirmed' ? 'bg-green-500/10 text-green-500' : 'bg-amber-500/10 text-amber-500 pulse'}`}>
                      {event.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div> */}

        {/* 4. Past Attended Events */}
        {/* <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-bold text-white tracking-tight flex items-center gap-2">
                <History size={18} className="text-zinc-500" /> Past Legacy
              </h3>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl overflow-hidden">
              <table className="w-full text-left text-xs">
                <thead className="bg-zinc-800/30 text-zinc-500 uppercase font-mono tracking-tighter">
                  <tr>
                    <th className="px-6 py-4">Event</th>
                    <th className="px-6 py-4">Date</th>
                    <th className="px-6 py-4">Role</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-800">
                  {pastEvents.map(event => (
                    <tr key={event.id} className="hover:bg-zinc-800/20 transition-colors">
                      <td className="px-6 py-4 text-white font-medium">{event.name}</td>
                      <td className="px-6 py-4 text-zinc-500">{event.date}</td>
                      <td className="px-6 py-4">
                        <span className="text-zinc-400 border border-zinc-700 px-2 py-0.5 rounded text-[10px]">
                          {event.contribution}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div> */}
        <div className="min-h-[65vh] lg:min-h-[80vh] flex items-center justify-center px-2 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="relative w-full max-w-2xl overflow-hidden rounded-[32px] border border-white/10 bg-zinc-950/60 backdrop-blur-xl sm:px-8 sm:py-10 p-10 text-center shadow-[0_20px_80px_rgba(0,0,0,0.5)]"
          >
            {/* Glow */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(245,158,11,0.12),transparent_65%)] pointer-events-none" />

            {/* Top Glow */}
            <div className="absolute -top-20 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full bg-amber-500/10 blur-3xl" />
            {/* Badge */}
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-amber-500/20 bg-amber-500/10 px-4 py-2">

              <span className="text-[11px] uppercase tracking-[0.35em] text-amber-400 font-mono">
                UNDER DEVELOPMENT
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-4xl md:text-5xl font-black leading-tight">
              <span className="text-white">Great</span>
              <br />
              <span className="bg-gradient-to-r from-yellow-200 via-amber-400 to-yellow-500 bg-clip-text text-transparent">
                Things
              </span>
              <br />
              <span className="text-white">Are Coming</span>
            </h2>

            {/* Description */}
            <p className="mx-auto mt-6 max-w-xl text-zinc-400 leading-8">
              We're crafting an exclusive experience for the Founders Clan community.
              Check back soon for new opportunities, events, and premium resources.
            </p>
            <img src="/assets/Under construction-cuate.svg" className="w-full h-full object-cover" alt="Under construction-cuate.svg" />
            {/* Bottom Accent */}
            <div className="mt-10 flex justify-center">
              <div className="h-px w-40 bg-gradient-to-r from-transparent via-amber-500/60 to-transparent" />
            </div>
          </motion.div>
        </div>
        {/* </div> */}
      </main >
    </div>
  );
};

/* Helper Component for Sidebar Items */
const NavItem = ({ icon, label, active = false, onClick }) => (
  <button
    onClick={onClick}
    className={`w-full flex items-center gap-4 p-3 rounded-xl transition-all duration-300 ${active ? 'bg-amber-500 text-black shadow-lg shadow-amber-500/20' : 'text-zinc-500 hover:text-white hover:bg-zinc-800'}`}
  >
    {icon}
    <span className="hidden lg:block text-xs font-bold uppercase tracking-widest">{label}</span>
  </button>
);

export default UserDashboard;