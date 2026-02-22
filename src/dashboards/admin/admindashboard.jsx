import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Users, Calendar, Plus, CheckCircle, XCircle,
  BarChart3, Search, Filter, MoreVertical, Activity,
  Settings, LogOut, Menu, X, AlertCircle
} from 'lucide-react';

// Sub-components
import RegistrationPortal from './view/registrations';
import EventManager from './view/event-managers';
import MemberDirectory from './view/members';
import { useAdminDashboard } from './viewmodels/useadmindashboard';

const AdminDashboard = () => {
  const [activeView, setActiveView] = useState('analytics');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const {
    registrations,
    events,
    loading,
    error,
    createLoading,
    createError,
    createEvent,
    updateRegistrationStatus,
    refreshData,
  } = useAdminDashboard();
  
  // Calculate dynamic stats from actual data
  const stats = [
    { 
      label: "Total Registrations", 
      value: registrations?.data?.length || 0, 
      growth: "+12%", 
      icon: <Users className="text-amber-500" /> 
    },
    { 
      label: "Events", 
      value: events?.length || 0, 
      growth: "Global", 
      icon: <Calendar className="text-blue-500" /> 
    },
    { 
      label: "Pending", 
      value: registrations?.data?.filter(r => r.status === 'pending').length || 0, 
      growth: "Review", 
      icon: <Activity className="text-red-500" /> 
    },
    { 
      label: "Approved", 
      value: registrations?.data?.filter(r => r.status === 'approved').length || 0, 
      growth: "+18%", 
      icon: <CheckCircle className="text-green-500" /> 
    },
  ];

  const renderView = () => {
    switch (activeView) {
      case 'analytics': 
        return <AnalyticsView stats={stats} registrations={registrations} events={events} />;
      case 'registrations': 
        return (
          <RegistrationPortal 
            registrations={registrations} 
            updateStatus={updateRegistrationStatus}
            refreshData={refreshData}
          />
        );
      case 'events': 
        return (
          <EventManager 
            events={events} 
            createEvent={createEvent}
            createLoading={createLoading}
            createError={createError}
            refreshData={refreshData}
          />
        );
      case 'directory': 
        return <MemberDirectory />;
      default: 
        return <AnalyticsView stats={stats} registrations={registrations} events={events} />;
    }
  };

  // Helper to handle navigation on mobile
  const handleNavClick = (view) => {
    setActiveView(view);
    setIsMobileMenuOpen(false);
  };

  // Loading state
  if (loading) {
    return (
      <div className="min-h-screen bg-[#020202] flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-amber-500 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-zinc-500 text-sm">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  // Error state
  // if (error) {
  //   return (
  //     <div className="min-h-screen bg-[#020202] flex items-center justify-center p-6">
  //       <div className="bg-red-500/10 border border-red-500/20 rounded-2xl p-8 max-w-md text-center">
  //         <AlertCircle className="text-red-500 mx-auto mb-4" size={48} />
  //         <h2 className="text-white font-bold text-xl mb-2">Failed to Load Dashboard</h2>
  //         <p className="text-zinc-400 text-sm mb-6">{error}</p>
  //         <button
  //           onClick={refreshData}
  //           className="bg-amber-500 text-black px-6 py-3 rounded-xl font-bold text-sm hover:bg-amber-400 transition-all"
  //         >
  //           Retry
  //         </button>
  //       </div>
  //     </div>
  //   );
  // }

  return (
    <div className="flex min-h-screen bg-[#020202] text-slate-300 font-sans pt-20">

      {/* Mobile Menu Toggle */}
      <div className="lg:hidden fixed bottom-6 right-6 z-[200]">
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="p-4 bg-amber-500 text-black rounded-full shadow-2xl shadow-amber-500/40"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* SIDEBAR (Hidden on mobile, Fixed on Desktop) */}
      <aside className={`
        fixed inset-y-0 left-0 z-[150] w-64 bg-zinc-950 border-r border-zinc-900 flex flex-col p-6 
        transition-transform duration-300 lg:translate-x-0 lg:static lg:h-[calc(100vh-80px)]
        ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <div className="mb-10 flex items-center gap-3 px-2">
          <div className="w-8 h-8 bg-amber-500 rounded-lg flex items-center justify-center font-black text-black text-sm">
            FC
          </div>
          <h1 className="text-lg font-bold tracking-tight text-white uppercase">
            Command
          </h1>
        </div>

        <nav className="flex-1 space-y-2">
          <AdminNavItem 
            label="Analytics" 
            icon={<BarChart3 size={18} />} 
            active={activeView === 'analytics'} 
            onClick={() => handleNavClick('analytics')} 
          />
          <AdminNavItem 
            label="Registrations" 
            icon={<Users size={18} />} 
            active={activeView === 'registrations'} 
            onClick={() => handleNavClick('registrations')}
            badge={registrations?.data?.filter(r => r.status === 'pending').length}
          />
          <AdminNavItem 
            label="Events" 
            icon={<Calendar size={18} />} 
            active={activeView === 'events'} 
            onClick={() => handleNavClick('events')} 
          />
          <AdminNavItem 
            label="Directory" 
            icon={<Filter size={18} />} 
            active={activeView === 'directory'} 
            onClick={() => handleNavClick('directory')} 
          />
        </nav>

        <div className="pt-6 border-t border-zinc-900 space-y-4">
          <div className="bg-zinc-900/50 p-4 rounded-2xl flex items-center justify-between">
            <div>
              <p className="text-[10px] uppercase font-mono text-zinc-500 tracking-widest">
                Root_01
              </p>
              <p className="text-xs text-white font-bold">Admin</p>
            </div>
            <button 
              onClick={() => {
                localStorage.removeItem('Founders_token');
                window.location.href = '/login';
              }}
              className="hover:bg-zinc-800 p-2 rounded-lg transition-colors"
            >
              <LogOut size={16} className="text-zinc-600 hover:text-red-500" />
            </button>
          </div>
        </div>
      </aside>

      {/* MAIN CONTENT */}
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

const AnalyticsView = ({ stats, registrations, events }) => (
  <div className="w-full">
    <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-10">
      <div>
        <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
          System Oversight
        </h2>
        <p className="text-zinc-500 text-sm">Real-time metrics for the FoundersClan.</p>
      </div>
      <div className="bg-zinc-900/80 px-4 py-2 rounded-xl border border-zinc-800 flex items-center gap-3">
        <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
        <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest">
          System Active
        </span>
      </div>
    </header>

    {/* Stats Grid */}
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-12">
      {stats.map((stat, i) => (
        <div 
          key={i} 
          className="bg-zinc-900/40 border border-zinc-800 p-4 md:p-6 rounded-2xl md:rounded-3xl hover:border-zinc-700 transition-colors"
        >
          <div className="flex justify-between items-start mb-3 md:mb-4">
            <div className="p-2 bg-zinc-950 rounded-xl border border-zinc-800 scale-75 md:scale-100">
              {stat.icon}
            </div>
            <span className="text-[8px] md:text-[10px] font-mono text-amber-500">
              {stat.growth}
            </span>
          </div>
          <p className="text-zinc-500 text-[10px] uppercase tracking-widest truncate">
            {stat.label}
          </p>
          <h4 className="text-xl md:text-2xl font-bold text-white mt-1">{stat.value}</h4>
        </div>
      ))}
    </div>

    {/* Quick Actions */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
      <div className="bg-zinc-900/30 border border-zinc-800 rounded-2xl p-6">
        <h3 className="text-white font-bold mb-2">Recent Activity</h3>
        <p className="text-zinc-500 text-xs mb-4">Latest registration updates</p>
        <div className="space-y-2">
          {registrations?.data?.slice(0, 3).map((reg) => (
            <div key={reg.id} className="flex items-center gap-3 text-xs">
              <div className={`w-2 h-2 rounded-full ${
                reg.status === 'approved' ? 'bg-green-500' : 
                reg.status === 'rejected' ? 'bg-red-500' : 
                'bg-yellow-500'
              }`} />
              <span className="text-zinc-400 flex-1 truncate">{reg.full_name}</span>
              <span className="text-zinc-600 text-[10px]">{reg.company_name}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-zinc-900/30 border border-zinc-800 rounded-2xl p-6">
        <h3 className="text-white font-bold mb-2">Upcoming Events</h3>
        <p className="text-zinc-500 text-xs mb-4">Next scheduled gatherings</p>
        <div className="space-y-2">
          {events?.slice(0, 3).map((event) => (
            <div key={event.id} className="flex items-center gap-3 text-xs">
              <Calendar size={14} className="text-amber-500" />
              <span className="text-zinc-400 flex-1 truncate">{event.name}</span>
              <span className="text-zinc-600 text-[10px]">{event.city}</span>
            </div>
          ))}
          {(!events || events.length === 0) && (
            <p className="text-zinc-600 text-xs italic">No upcoming events</p>
          )}
        </div>
      </div>
    </div>

    <div className="bg-zinc-900/20 border border-dashed border-zinc-800 rounded-[2rem] p-10 md:p-20 flex flex-col items-center justify-center text-center">
      <Activity size={32} className="text-zinc-800 mb-4" />
      <h3 className="text-white font-bold">Select Module</h3>
      <p className="text-zinc-600 text-xs mt-2">Use the menu to navigate registrations or events.</p>
    </div>
  </div>
);

const AdminNavItem = ({ icon, label, active = false, onClick, badge }) => (
  <button
    onClick={onClick}
    className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl md:rounded-2xl transition-all relative ${
      active
        ? 'bg-amber-500 text-black shadow-lg shadow-amber-500/20'
        : 'text-zinc-500 hover:text-zinc-200 hover:bg-zinc-900/50'
    }`}
  >
    {icon}
    <span className="text-xs font-bold uppercase tracking-widest flex-1 text-left">
      {label}
    </span>
    {badge > 0 && (
      <span className="bg-red-500 text-white text-[9px] font-bold px-2 py-0.5 rounded-full">
        {badge}
      </span>
    )}
  </button>
);

export default AdminDashboard;