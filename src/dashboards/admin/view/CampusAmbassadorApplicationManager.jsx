import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  Clock,
  User,
  X,
  Eye,
  RefreshCw,
  GraduationCap,
  Briefcase,
  Layers,
  Linkedin,
  MessageSquare,
  Target,
  PhoneCall,
} from "lucide-react";
import toast from "react-hot-toast";

const BASE_URL = import.meta.env.VITE_BASE_URL;

// ─── Helper ──────────────────────────────────────────────────────────────────

const getAuthHeaders = () => {
  const token = localStorage.getItem("Founders_token");
  return {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };
};

// ─── Detail Row used inside the drawer ───────────────────────────────────────

const DetailRow = ({ icon: Icon, label, value }) => (
  <div className="bg-zinc-950/50 p-4 rounded-xl border border-zinc-800 flex items-start gap-3">
    <Icon size={16} className="text-zinc-600 mt-0.5 shrink-0" />
    <div className="min-w-0">
      <label className="block text-[8px] uppercase font-mono text-zinc-500 mb-0.5">
        {label}
      </label>
      <p className="text-sm text-white break-words leading-relaxed">
        {value || <span className="text-zinc-600 italic">—</span>}
      </p>
    </div>
  </div>
);

// ─── Status Badge ─────────────────────────────────────────────────────────────

const StatusBadge = ({ status }) => {
  const isPending = status === "Pending";
  return (
    <span
      className={`text-[9px] font-mono px-2 py-0.5 rounded border ${isPending
        ? "text-amber-500 border-amber-500/20 bg-amber-500/5 animate-pulse"
        : "text-emerald-400 border-emerald-500/20 bg-emerald-500/5"
        }`}
    >
      {status}
    </span>
  );
};

// ─── Main Component ───────────────────────────────────────────────────────────

const CampusAmbassadorApplicationManager = () => {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedApplication, setSelectedApplication] = useState(null);

  // ── Fetch ────────────────────────────────────────────────────────────────

  const fetchApplications = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `${BASE_URL}/api/campusAmbassdor/admin/campusAmbassdorApplication`,
        {
          method: "GET",
          headers: getAuthHeaders(),
        }
      );
      const result = await response.json();
      if (response.ok && result.success) {
        setApplications(result.data || []);
      } else {
        toast.error(result.message || "Failed to load applications.");
      }
    } catch (error) {
      console.error("Fetch Campus Ambassador Applications Error:", error);
      toast.error("Network error while fetching applications.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchApplications();
  }, []);

  // ── Loading State ────────────────────────────────────────────────────────

  if (loading) {
    return (
      <div className="bg-[#050505] min-h-screen text-slate-300 flex flex-col items-center justify-center gap-4">
        <RefreshCw size={24} className="text-amber-500 animate-spin" />
        <p className="font-mono text-xs text-zinc-500 uppercase tracking-widest">
          Loading Campus Ambassador Applications...
        </p>
      </div>
    );
  }

  // ── Render ───────────────────────────────────────────────────────────────

  return (
    <div className="bg-[#050505] min-h-screen text-slate-300 p-4 md:p-8">

      {/* ── Header ──────────────────────────────────────────────────────── */}
      <div className="mb-8 flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
            Campus Ambassador Applications
          </h1>
          <p className="text-zinc-500 text-sm mt-1">
            All inbound applications, ordered by submission date.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={fetchApplications}
            className="p-2 border border-zinc-800 bg-zinc-900 rounded-xl hover:text-white transition-colors"
            title="Refresh Applications"
          >
            <RefreshCw size={14} />
          </button>
          <span className="bg-zinc-900 border border-zinc-800 px-4 py-2 rounded-xl text-[10px] md:text-xs flex items-center gap-2">
            <GraduationCap size={14} className="text-amber-500" />
            {applications.length} Total Application
            {applications.length !== 1 ? "s" : ""}
          </span>
        </div>
      </div>

      {/* ── Empty State ──────────────────────────────────────────────────── */}
      {applications.length === 0 && (
        <div className="bg-zinc-900/20 border border-dashed border-zinc-800 rounded-[2rem] p-20 text-center">
          <User size={48} className="text-zinc-800 mx-auto mb-4" />
          <h3 className="text-white font-bold mb-2">No Applications Yet</h3>
          <p className="text-zinc-600 text-xs">
            Campus ambassador applications will appear here once submitted.
          </p>
        </div>
      )}

      {/* ── Desktop Table ────────────────────────────────────────────────── */}
      {applications.length > 0 && (
        <div className="hidden md:block bg-zinc-900/30 border border-zinc-800 rounded-[2rem] overflow-x-auto no-scrollbar mb-6">
          <table className="w-full text-left">
            <thead className="bg-zinc-950/50 border-b border-zinc-800 text-[10px] uppercase font-mono tracking-widest text-zinc-500">
              <tr>
                <th className="px-6 py-5">Status</th>
                <th className="px-6 py-5">Full Name</th>
                <th className="px-6 py-5">Email</th>
                <th className="px-6 py-5">Phone No.</th>
                <th className="px-6 py-5">College</th>
                <th className="px-6 py-5">Role+Stage</th>
                <th className="px-6 py-5 text-right">Submitted</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-800/50">
              {applications.map((app) => (
                <tr
                  key={app.application_id ?? app.id}
                  className="group hover:bg-zinc-800/20 transition-all"
                >
                  {/* Status */}
                  <td className="px-6 py-6">
                    <StatusBadge status={app.status} />
                  </td>

                  {/* Name */}
                  <td className="px-6 py-6 text-sm font-bold text-white">
                    {app.full_name}
                  </td>

                  {/* Email */}
                  <td className="px-6 py-6 text-xs text-zinc-400 font-mono">
                    {app.email}
                  </td>

                  {/* Phone Number */}
                  <td className="px-6 py-6 text-xs text-zinc-400 font-mono">
                    {app.phoneNumber}
                  </td>

                  {/* College */}
                  <td className="px-6 py-6 text-xs text-zinc-300">
                    {app.college}
                  </td>

                  {/* Role + Stage */}
                  <td className="px-6 py-6">
                    <div className="flex flex-col gap-0.5">
                      <span className="text-xs text-zinc-300">{app.role}</span>
                      <span className="text-[10px] font-mono text-zinc-600">
                        {app.stage}
                      </span>
                    </div>
                  </td>

                  {/* Date */}
                  <td className="px-6 py-6 text-xs text-zinc-500 font-mono">
                    {new Date(app.created_at).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </td>

                  {/* View button */}
                  <td className="px-6 py-6 text-right">
                    <button
                      onClick={() => setSelectedApplication(app)}
                      className="p-3 bg-zinc-800 hover:bg-amber-500 hover:text-black rounded-xl transition-all"
                    >
                      <Eye size={16} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* ── Mobile Card List ─────────────────────────────────────────────── */}
      {applications.length > 0 && (
        <div className="md:hidden space-y-4">
          {applications.map((app) => (
            <div
              key={app.application_id ?? app.id}
              className="bg-zinc-900/40 border border-zinc-800 rounded-2xl p-5 space-y-4"
            >
              <div className="flex justify-between items-center">
                <h3 className="font-bold text-white text-sm">
                  {app.full_name}
                </h3>
                <StatusBadge status={app.status} />
              </div>

              <div className="text-[10px] text-zinc-500 font-mono space-y-1">
                <p>{app.email}</p>
                <p>{app.college}</p>
                <p>
                  {app.role} · {app.stage}
                </p>
              </div>

              <div className="flex items-center justify-between pt-2 border-t border-zinc-800/60">
                <span className="text-[10px] text-zinc-500 font-mono">
                  {new Date(app.created_at).toLocaleDateString()}
                </span>
                <button
                  onClick={() => setSelectedApplication(app)}
                  className="flex items-center gap-1.5 bg-zinc-800 text-white px-3 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-widest"
                >
                  <Eye size={12} /> View
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* ── Detail Drawer ────────────────────────────────────────────────── */}
      <AnimatePresence>
        {selectedApplication && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedApplication(null)}
              className="absolute inset-0 bg-black/90 backdrop-blur-md"
            />

            {/* Panel */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-xl bg-zinc-900 border border-zinc-800 rounded-[2rem] p-6 md:p-10 shadow-2xl overflow-y-auto max-h-[90vh]"
            >
              {/* Drawer Header */}
              <div className="flex justify-between items-start mb-6">
                <div>
                  <p className="text-amber-500 font-mono text-[9px] tracking-widest uppercase mb-1">
                    Application ID:{" "}
                    {selectedApplication.application_id ?? selectedApplication.id}
                  </p>
                  <h2 className="text-xl md:text-2xl font-bold text-white">
                    {selectedApplication.full_name}
                  </h2>
                </div>
                <button
                  onClick={() => setSelectedApplication(null)}
                  className="p-2 hover:bg-zinc-800 rounded-full transition-colors"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Status Badges Row */}
              <div className="flex items-center gap-3 mb-6">
                <StatusBadge status={selectedApplication.status} />
                <span
                  className={`text-[9px] font-mono px-2 py-0.5 rounded border ${selectedApplication.contact_status === "Contacted"
                    ? "text-emerald-400 border-emerald-500/20 bg-emerald-500/5"
                    : "text-zinc-400 border-zinc-700 bg-zinc-800/30"
                    }`}
                >
                  {selectedApplication.contact_status}
                </span>
              </div>

              {/* All Detail Fields */}
              <div className="space-y-3">
                <DetailRow
                  icon={Mail}
                  label="Email Address"
                  value={selectedApplication.email}
                />
                <DetailRow
                  icon={PhoneCall}
                  label="Phone Number"
                  value={selectedApplication.phoneNumber}
                />
                <DetailRow
                  icon={GraduationCap}
                  label="College / Institution"
                  value={selectedApplication.college}
                />
                <DetailRow
                  icon={Briefcase}
                  label="Course"
                  value={selectedApplication.course}
                />
                <DetailRow
                  icon={Briefcase}
                  label="Role Applied For"
                  value={selectedApplication.role}
                />
                <DetailRow
                  icon={Layers}
                  label="Current Stage"
                  value={selectedApplication.stage}
                />
                {selectedApplication.linkedin && (
                  <DetailRow
                    icon={Linkedin}
                    label="LinkedIn Profile"
                    value={selectedApplication.linkedin}
                  />
                )}
                <DetailRow
                  icon={MessageSquare}
                  label="Reason for Applying"
                  value={selectedApplication.reason}
                />
                <DetailRow
                  icon={Target}
                  label="Goals as Ambassador"
                  value={selectedApplication.goals}
                />
                <DetailRow
                  icon={Clock}
                  label="Submission Timestamp"
                  value={new Date(
                    selectedApplication.created_at
                  ).toLocaleString()}
                />
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CampusAmbassadorApplicationManager;
