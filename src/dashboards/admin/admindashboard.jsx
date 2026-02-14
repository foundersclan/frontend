import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Users, Calendar, Plus, CheckCircle, XCircle, 
  BarChart3, Search, Filter, MoreVertical, Activity,
  Settings, LogOut, Menu, X
} from 'lucide-react';

// Sub-components
import RegistrationPortal from './view/registrations'; 
import EventManager from './view/event-managers';
import MemberDirectory from './view/members';
import { useAdminDashboard } from './viewmodels/useadmindashboard';

const AdminDashboard = () => {
  const [activeView, setActiveView] = useState('analytics');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const {registrations} = useAdminDashboard();
  
  const stats = [
    { label: "Members", value: "1,284", growth: "+12%", icon: <Users className="text-amber-500" /> },
    { label: "Events", value: "8", growth: "Global", icon: <Calendar className="text-blue-500" /> },
    { label: "Pending", value: "42", growth: "High", icon: <Activity className="text-red-500" /> },
    { label: "Revenue", value: "$420K", growth: "+18%", icon: <BarChart3 className="text-green-500" /> },
  ];

  const renderView = () => {
    switch (activeView) {
      case 'analytics': return <AnalyticsView stats={stats} />;
      case 'registrations': return <RegistrationPortal registrations={registrations} />;
      case 'events': return <EventManager />;
      case 'directory': return <MemberDirectory />;
      default: return <AnalyticsView stats={stats} />;
    }
  };

  // Helper to handle navigation on mobile
  const handleNavClick = (view) => {
    setActiveView(view);
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="flex min-h-screen bg-[#020202] text-slate-300 font-sans pt-20">
      
      {/* --- MOBILE HAMBURGER (Visible only on small screens) --- */}
      <div className="lg:hidden fixed bottom-6 right-6 z-[200]">
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="p-4 bg-amber-500 text-black rounded-full shadow-2xl shadow-amber-500/40"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* --- SIDEBAR (Hidden on mobile, Fixed on Desktop) --- */}
      <aside className={`
        fixed inset-y-0 left-0 z-[150] w-64 bg-zinc-950 border-r border-zinc-900 flex flex-col p-6 
        transition-transform duration-300 lg:translate-x-0 lg:static lg:h-[calc(100vh-80px)]
        ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <div className="mb-10 flex items-center gap-3 px-2">
          <div className="w-8 h-8 bg-amber-500 rounded-lg flex items-center justify-center font-black text-black text-sm">C</div>
          <h1 className="text-lg font-bold tracking-tight text-white uppercase italic">Command</h1>
        </div>
        
        <nav className="flex-1 space-y-2">
          <AdminNavItem label="Analytics" icon={<BarChart3 size={18} />} active={activeView === 'analytics'} onClick={() => handleNavClick('analytics')} />
          <AdminNavItem label="Registrations" icon={<Users size={18} />} active={activeView === 'registrations'} onClick={() => handleNavClick('registrations')} />
          <AdminNavItem label="Events" icon={<Calendar size={18} />} active={activeView === 'events'} onClick={() => handleNavClick('events')} />
          <AdminNavItem label="Directory" icon={<Filter size={18} />} active={activeView === 'directory'} onClick={() => handleNavClick('directory')} />
        </nav>

        <div className="pt-6 border-t border-zinc-900 space-y-4">
          <div className="bg-zinc-900/50 p-4 rounded-2xl flex items-center justify-between">
            <div>
              <p className="text-[10px] uppercase font-mono text-zinc-500 tracking-widest text-[9px]">Root_01</p>
              <p className="text-xs text-white font-bold">Admin</p>
            </div>
            <LogOut size={16} className="text-zinc-600 hover:text-red-500 cursor-pointer" />
          </div>
        </div>
      </aside>

      {/* --- MAIN CONTENT --- */}
      <main className="flex-1 w-full overflow-x-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeView}
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
            className="p-4 md:p-8 lg:p-12"
          >
            {renderView()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* MOBILE OVERLAY */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[140] lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </div>
  );
};

const AnalyticsView = ({ stats }) => (
  <div className="w-full">
    <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-10">
      <div>
        <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">System Oversight</h2>
        <p className="text-zinc-500 text-sm">Real-time metrics for the FoundersClan.</p>
      </div>
      <div className="bg-zinc-900/80 px-4 py-2 rounded-xl border border-zinc-800 flex items-center gap-3">
        <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
        <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest">System Active</span>
      </div>
    </header>

    {/* Responsive Stats Grid */}
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-12">
      {stats.map((stat, i) => (
        <div key={i} className="bg-zinc-900/40 border border-zinc-800 p-4 md:p-6 rounded-2xl md:rounded-3xl">
          <div className="flex justify-between items-start mb-3 md:mb-4">
            <div className="p-2 bg-zinc-950 rounded-xl border border-zinc-800 scale-75 md:scale-100">{stat.icon}</div>
            <span className="text-[8px] md:text-[10px] font-mono text-amber-500">{stat.growth}</span>
          </div>
          <p className="text-zinc-500 text-[10px] uppercase tracking-widest truncate">{stat.label}</p>
          <h4 className="text-xl md:text-2xl font-bold text-white mt-1">{stat.value}</h4>
        </div>
      ))}
    </div>

    <div className="bg-zinc-900/20 border border-dashed border-zinc-800 rounded-[2rem] p-10 md:p-20 flex flex-col items-center justify-center text-center">
      <Activity size={32} className="text-zinc-800 mb-4" />
      <h3 className="text-white font-bold">Select Module</h3>
      <p className="text-zinc-600 text-xs mt-2">Use the menu to navigate registrations or events.</p>
    </div>
  </div>
);

const AdminNavItem = ({ icon, label, active = false, onClick }) => (
  <button 
    onClick={onClick}
    className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl md:rounded-2xl transition-all ${
      active 
        ? 'bg-amber-500 text-black shadow-lg shadow-amber-500/20' 
        : 'text-zinc-500 hover:text-zinc-200 hover:bg-zinc-900/50'
    }`}
  >
    {icon}
    <span className="text-xs font-bold uppercase tracking-widest">{label}</span>
  </button>
);

export default AdminDashboard;