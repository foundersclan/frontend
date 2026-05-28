import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  Clock,
  User,
  Phone,
  X,
  Eye,
  CheckCircle2,
  RefreshCw,
  Trash2,
  Calendar,
  Filter,
} from "lucide-react";
import toast from "react-hot-toast";

const BASE_URL = import.meta.env.VITE_BASE_URL;

const ReachOutApplicationManager = () => {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedApplication, setSelectedApplication] = useState(null);
  const [isToggling, setIsToggling] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentTab, setCurrentTab] = useState("all");

  // Advanced Date Filtration States
  const [dateFilterType, setDateFilterType] = useState("any"); // options: "any", "before", "after", "between"
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  // Bulk Processing Selection Tracking Map
  const [selectedIds, setSelectedIds] = useState([]);

  const getAuthHeaders = () => {
    const token = localStorage.getItem("Founders_token");
    return {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    };
  };

  const fetchApplications = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `${BASE_URL}/api/application/admin/reachApplication`,
        {
          method: "GET",
          headers: getAuthHeaders(),
        },
      );
      const result = await response.json();
      if (response.ok && result.success) {
        setApplications(result.data || []);
        setSelectedIds([]); // Clean selection arrays upon refresh
      } else {
        toast.error(result.message || "Failed to load data.");
      }
    } catch (error) {
      console.error("Fetch Data Error:", error);
      toast.error("Network error fetching data pipeline records.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchApplications();
  }, []);

  // 1. Fixed Inline Toggle Handler
  const handleToggleCheck = async (id, currentStatus) => {
    if (isToggling) return;
    setIsToggling(true);
    const nextStatusValue = currentStatus ? 0 : 1;

    try {
      const response = await fetch(
        `${BASE_URL}/api/application/admin/reachApplication/${id}/status`,
        {
          method: "PATCH",
          headers: getAuthHeaders(),
          body: JSON.stringify({ is_contacted: nextStatusValue }),
        },
      );
      const result = await response.json();

      if (response.ok && result.success) {
        // FIX: Removed bad embedded log logic to return application properties safely
        setApplications((prevApps) =>
          prevApps.map((app) =>
            app.id === id ? { ...app, is_contacted: nextStatusValue } : app,
          ),
        );

        if (selectedApplication && selectedApplication.id === id) {
          setSelectedApplication((prev) => ({
            ...prev,
            is_contacted: nextStatusValue,
          }));
        }
        toast.success(
          nextStatusValue ? "Marked as Contacted" : "Moved back to Pending",
        );
      } else {
        toast.error(result.message || "Failed executing database sync.");
      }
    } catch (error) {
      toast.error("Network link dropped updating status.");
    } finally {
      setIsToggling(false);
    }
  };

  // 2. High-Capacity Bulk Target Updates (Updates multiple entries at once)
  const handleBulkStatusChange = async (targetStatus) => {
    if (selectedIds.length === 0 || isToggling) return;
    setIsToggling(true);
    const loadingToast = toast.loading(
      `Updating ${selectedIds.length} records...`,
    );

    try {
      const response = await fetch(
        `${BASE_URL}/api/application/admin/reachApplication/bulk-status`,
        {
          method: "PATCH",
          headers: getAuthHeaders(),
          body: JSON.stringify({
            ids: selectedIds,
            is_contacted: targetStatus,
          }),
        },
      );
      const result = await response.json();

      if (response.ok && result.success) {
        setApplications((prev) =>
          prev.map((app) =>
            selectedIds.includes(app.id)
              ? { ...app, is_contacted: targetStatus }
              : app,
          ),
        );
        setSelectedIds([]);
        toast.success(`Successfully batch altered records status.`);
      } else {
        toast.error(
          result.message || "Bulk database migration operation failed.",
        );
      }
    } catch (error) {
      toast.error("Network dropped bulk pipeline sync operations.",error);
    } finally {
      toast.dismiss(loadingToast);
      setIsToggling(false);
    }
  };

  // 3. High-Capacity Bulk Erasure (Deletes multiple entries at once)
  const handleBulkDelete = async () => {
    if (selectedIds.length === 0) return;
    if (
      !window.confirm(
        `Are you absolutely sure you want to permanently erase ${selectedIds.length} applications?`,
      )
    )
      return;

    const loadingToast = toast.loading(`Purging selected items...`);
    try {
      const response = await fetch(
        `${BASE_URL}/api/application/admin/reachApplication/bulk-delete`,
        {
          method: "DELETE",
          headers: getAuthHeaders(),
          body: JSON.stringify({ ids: selectedIds }),
        },
      );
      const result = await response.json();

      if (response.ok && result.success) {
        setApplications((prev) =>
          prev.filter((app) => !selectedIds.includes(app.id)),
        );
        setSelectedIds([]);
        toast.success("Selected records permanently deleted.");
      } else {
        toast.error(result.message || "Failed executing bulk deletions.");
      }
    } catch (error) {
      toast.error("Network communication failure dropping collection records.");
    } finally {
      toast.dismiss(loadingToast);
    }
  };

  // Bulk Selection Row Checkboxes Toggles
  const handleSelectAll = (filteredItems) => {
    const visibleIds = filteredItems.map((item) => item.id);
    const allVisibleSelected = visibleIds.every((id) =>
      selectedIds.includes(id),
    );

    if (allVisibleSelected) {
      setSelectedIds((prev) => prev.filter((id) => !visibleIds.includes(id)));
    } else {
      setSelectedIds((prev) => [...new Set([...prev, ...visibleIds])]);
    }
  };

  const handleSelectItem = (id) => {
    setSelectedIds((prev) =>
      prev.includes(id)
        ? prev.filter((itemId) => itemId !== id)
        : [...prev, id],
    );
  };

  // 4. Combined Multilayer Advanced Pipeline Filters Engine
  const filteredApplications = applications.filter((app) => {
    // A. Text Queries Evaluator
    const matchesSearch =
      app.full_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      app.business_email.toLowerCase().includes(searchQuery.toLowerCase());

    // B. Tab Status State Evaluator
    let matchesTab = true;
    if (currentTab === "pending") matchesTab = !app.is_contacted;
    if (currentTab === "contacted") matchesTab = !!app.is_contacted;

    // C. Chronological Date Range Evaluator
    let matchesDate = true;
    const appDate = new Date(app.created_at).setHours(0, 0, 0, 0);
    const start = startDate ? new Date(startDate).setHours(0, 0, 0, 0) : null;
    const end = endDate ? new Date(endDate).setHours(0, 0, 0, 0) : null;

    if (dateFilterType === "before" && start) {
      matchesDate = appDate < start;
    } else if (dateFilterType === "after" && start) {
      matchesDate = appDate > start;
    } else if (dateFilterType === "between" && start && end) {
      matchesDate = appDate >= start && appDate <= end;
    }

    return matchesSearch && matchesTab && matchesDate;
  });

  const pendingCount = applications.filter((app) => !app.is_contacted).length;

  if (loading) {
    return (
      <div className="bg-[#050505] min-h-screen text-slate-300 flex flex-col items-center justify-center gap-4">
        <RefreshCw size={24} className="text-amber-500 animate-spin" />
        <p className="font-mono text-xs text-zinc-500 uppercase tracking-widest">
          Loading Reach Out Applications...
        </p>
      </div>
    );
  }

  return (
    <div className="bg-[#050505] min-h-screen text-slate-300 p-4 md:p-8">
      {/* Header Container */}
      <div className="mb-8 flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
            Reachout Enquiries
          </h1>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={fetchApplications}
            className="p-2 border border-zinc-800 bg-zinc-900 rounded-xl hover:text-white transition-colors"
            title="Refresh Leads Table"
          >
            <RefreshCw size={14} />
          </button>
          <span className="bg-zinc-900 border border-zinc-800 px-4 py-2 rounded-xl text-[10px] md:text-xs flex items-center gap-2">
            <Clock size={14} className="text-amber-500" />
            {pendingCount} Awaiting Outreach
          </span>
        </div>
      </div>

      {/* SEARCH, TABS, DATE FILTRATION DASHBOARD GRID */}
      <div className="bg-zinc-950 border border-zinc-900 p-6 rounded-3xl mb-6 space-y-4">
        <div className="flex flex-col lg:flex-row gap-4 justify-between items-stretch lg:items-center">
          <div className="flex bg-zinc-900 p-1 rounded-xl border border-zinc-800 self-start">
            {/* Tab */}
            {["all", "pending", "contacted"].map((tab) => (
              <button
                key={tab}
                onClick={() => setCurrentTab(tab)}
                className={`px-4 py-2 rounded-lg text-xs font-mono uppercase transition-all ${
                  currentTab === tab
                    ? "bg-amber-500 text-black font-bold"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Search Field input */}
          {/* <input
            type="text"
            placeholder="Search by name or email..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-2 text-sm text-white focus:outline-none focus:border-amber-500 w-full lg:w-72 font-light"
          /> */}
        </div>

        {/* Date Filters Row */}
        <div className="pt-4 border-t border-zinc-900 flex flex-col sm:flex-row flex-wrap items-center gap-4 text-xs">
          <div className="flex items-center gap-2 text-zinc-400 font-mono">
            <Filter size={14} className="text-amber-500" />
            <span>DATE MATRIX:</span>
          </div>

          <select
            value={dateFilterType}
            onChange={(e) => {
              setDateFilterType(e.target.value);
              setStartDate("");
              setEndDate("");
            }}
            className="bg-zinc-900 border border-zinc-800 rounded-xl px-3 py-2 text-white text-xs focus:outline-none"
          >
            <option value="any">All Timelines (Any Date)</option>
            <option value="before">Before Chosen Date</option>
            <option value="after">After Chosen Date</option>
            <option value="between">In Between Date Range</option>
          </select>

          {dateFilterType !== "any" && (
            <div className="flex flex-wrap items-center gap-2 animate-fadeIn">
              <input
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                className="bg-zinc-900 border border-zinc-800 rounded-xl px-3 py-1.5 text-white text-xs focus:outline-none focus:border-amber-500 [color-scheme:dark]"
              />
              {dateFilterType === "between" && (
                <>
                  <span className="text-zinc-600 font-mono">AND</span>
                  <input
                    type="date"
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                    className="bg-zinc-900 border border-zinc-800 rounded-xl px-3 py-1.5 text-white text-xs focus:outline-none focus:border-amber-500 [color-scheme:dark]"
                  />
                </>
              )}
            </div>
          )}
        </div>
      </div>

      {/* BULK SELECTION ACTION CONTROL RIG */}
      {selectedIds.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-amber-500/10 border border-amber-500/20 text-amber-500 p-4 rounded-2xl flex flex-wrap gap-4 justify-between items-center mb-6"
        >
          <span className="font-mono text-xs font-bold px-1">
            Selected Batch Targets: {selectedIds.length} items
          </span>
          <div className="flex items-center gap-3">
            <button
              onClick={() => handleBulkStatusChange(1)}
              className="bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 text-white px-3 py-1.5 rounded-xl text-xs font-medium transition-all"
            >
              Mark Contacted
            </button>
            <button
              onClick={() => handleBulkStatusChange(0)}
              className="bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 text-white px-3 py-1.5 rounded-xl text-xs font-medium transition-all"
            >
              Mark Pending
            </button>
            <button
              onClick={handleBulkDelete}
              className="bg-red-500/20 border border-red-500/30 text-red-400 hover:bg-red-500 hover:text-white px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all"
            >
              <Trash2 size={13} /> Delete Selected
            </button>
          </div>
        </motion.div>
      )}

      {/* Empty Fallback State */}
      {filteredApplications.length === 0 && (
        <div className="bg-zinc-900/20 border border-dashed border-zinc-800 rounded-[2rem] p-20 text-center">
          <User size={48} className="text-zinc-800 mx-auto mb-4" />
          <h3 className="text-white font-bold mb-2">
            No Matching Records Found
          </h3>
          <p className="text-zinc-600 text-xs">
            Adjust your search parameters, tabs, or date range targets.
          </p>
        </div>
      )}

      {/* DESKTOP VIEW */}
      {filteredApplications.length > 0 && (
        <div className="hidden md:block bg-zinc-900/30 border border-zinc-800 rounded-[2rem] overflow-hidden">
          <table className="w-full text-left">
            <thead className="bg-zinc-950/50 border-b border-zinc-800 text-[10px] uppercase font-mono tracking-widest text-zinc-500">
              <tr>
                <th className="px-6 py-5 w-12">
                  <input
                    type="checkbox"
                    checked={
                      filteredApplications.length > 0 &&
                      filteredApplications.every((item) =>
                        selectedIds.includes(item.id),
                      )
                    }
                    onChange={() => handleSelectAll(filteredApplications)}
                    className="w-4 h-4 rounded border-zinc-800 bg-zinc-950 text-amber-500 accent-amber-500 focus:ring-0 cursor-pointer"
                  />
                </th>
                <th className="px-6 py-5">Contact Status</th>
                <th className="px-6 py-5">Full Name</th>
                <th className="px-6 py-5">Business Email</th>
                <th className="px-6 py-5">Direct Line</th>
                <th className="px-6 py-5">Received Date</th>
                <th className="px-6 py-5 text-right">Inspect</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-800/50">
              {filteredApplications.map((app) => (
                <tr
                  key={app.id}
                  className="group hover:bg-zinc-800/20 transition-all"
                >
                  {/* Row Checkbox Selection */}
                  <td className="px-6 py-6">
                    <input
                      type="checkbox"
                      checked={selectedIds.includes(app.id)}
                      onChange={() => handleSelectItem(app.id)}
                      className="w-4 h-4 rounded border-zinc-800 bg-zinc-950 text-amber-500 accent-amber-500 focus:ring-0 cursor-pointer"
                    />
                  </td>

                  {/* Status Checkbox */}
                  <td className="px-6 py-6">
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        checked={!!app.is_contacted}
                        disabled={isToggling}
                        onChange={() =>
                          handleToggleCheck(app.id, app.is_contacted)
                        }
                        className="w-4 h-4 rounded border-zinc-800 bg-zinc-950 text-amber-500 accent-amber-500 focus:ring-0 focus:ring-offset-0 cursor-pointer disabled:opacity-50"
                      />
                      <span
                        className={`text-[10px] font-mono uppercase ml-3 ${
                          app.is_contacted
                            ? "text-green-500"
                            : "text-amber-500 animate-pulse"
                        }`}
                      >
                        {app.is_contacted ? "Contacted" : "Pending"}
                      </span>
                    </div>
                  </td>

                  <td className="px-6 py-6 text-sm font-bold text-white">
                    {app.full_name}
                  </td>
                  <td className="px-6 py-6 text-xs text-zinc-400 font-mono">
                    {app.business_email}
                  </td>
                  <td className="px-6 py-6 text-xs text-zinc-400">
                    {app.direct_line}
                  </td>
                  <td className="px-6 py-6 text-xs text-zinc-500 font-mono">
                    {new Date(app.created_at).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </td>

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

      {/* RESPONSIVE MOBILE VIEW */}
      {filteredApplications.length > 0 && (
        <div className="md:hidden space-y-4">
          {filteredApplications.map((app) => (
            <div
              key={app.id}
              className={`border rounded-2xl p-5 space-y-4 transition-all ${
                selectedIds.includes(app.id)
                  ? "bg-amber-500/5 border-amber-500/30"
                  : "bg-zinc-900/40 border-zinc-800"
              }`}
            >
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    checked={selectedIds.includes(app.id)}
                    onChange={() => handleSelectItem(app.id)}
                    className="w-4 h-4 rounded border-zinc-800 bg-zinc-950 text-amber-500 accent-amber-500 focus:ring-0 cursor-pointer"
                  />
                  <h3 className="font-bold text-white text-sm">
                    {app.full_name}
                  </h3>
                </div>
                <span
                  className={`text-[9px] font-mono px-2 py-0.5 rounded border ${
                    app.is_contacted
                      ? "text-green-500 border-green-500/20 bg-green-500/5"
                      : "text-amber-500 border-amber-500/20 bg-amber-500/5"
                  }`}
                >
                  {app.is_contacted ? "Contacted" : "Pending"}
                </span>
              </div>
              <div className="flex items-center justify-between pt-2 border-t border-zinc-800/60">
                <span className="text-[10px] text-zinc-500 font-mono">
                  {new Date(app.created_at).toLocaleDateString()}
                </span>
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={!!app.is_contacted}
                    disabled={isToggling}
                    onChange={() => handleToggleCheck(app.id, app.is_contacted)}
                    className="w-3.5 h-3.5 rounded border-zinc-800 bg-zinc-950 text-amber-500 accent-amber-500 focus:ring-0 cursor-pointer"
                  />
                  <button
                    onClick={() => setSelectedApplication(app)}
                    className="flex items-center gap-1.5 bg-zinc-800 text-white px-3 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-widest"
                  >
                    <Eye size={12} /> View
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* DRAWER POPUP IN-DEPTH PREVIEW */}
      <AnimatePresence>
        {selectedApplication && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedApplication(null)}
              className="absolute inset-0 bg-black/90 backdrop-blur-md"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-lg bg-zinc-900 border border-zinc-800 rounded-[2rem] p-6 md:p-10 shadow-2xl overflow-hidden"
            >
              <div className="flex justify-between items-start mb-6">
                <div>
                  <p className="text-amber-500 font-mono text-[9px] tracking-widest uppercase mb-1">
                    ID Ref: {selectedApplication.id}
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

              <div className="space-y-4">
                <div className="bg-zinc-950/50 p-4 rounded-xl border border-zinc-800 flex items-center gap-3">
                  <Mail size={16} className="text-zinc-600" />
                  <div>
                    <label className="block text-[8px] uppercase font-mono text-zinc-500">
                      Business Mail
                    </label>
                    <p className="text-sm text-white select-all">
                      {selectedApplication.business_email}
                    </p>
                  </div>
                </div>

                <div className="bg-zinc-950/50 p-4 rounded-xl border border-zinc-800 flex items-center gap-3">
                  <Phone size={16} className="text-zinc-600" />
                  <div>
                    <label className="block text-[8px] uppercase font-mono text-zinc-500">
                      Direct Line
                    </label>
                    <p className="text-sm text-white select-all">
                      {selectedApplication.direct_line}
                    </p>
                  </div>
                </div>

                <div className="bg-zinc-950/50 p-4 rounded-xl border border-zinc-800 flex items-center gap-3">
                  <Clock size={16} className="text-zinc-600" />
                  <div>
                    <label className="block text-[8px] uppercase font-mono text-zinc-500">
                      Submission Timestamp
                    </label>
                    <p className="text-xs text-zinc-400 font-mono">
                      {new Date(
                        selectedApplication.created_at,
                      ).toLocaleString()}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-zinc-800 flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="drawer-check"
                    disabled={isToggling}
                    checked={!!selectedApplication.is_contacted}
                    onChange={() =>
                      handleToggleCheck(
                        selectedApplication.id,
                        selectedApplication.is_contacted,
                      )
                    }
                    className="w-4 h-4 rounded border-zinc-800 bg-zinc-950 text-amber-500 accent-amber-500 focus:ring-0 cursor-pointer disabled:opacity-50"
                  />
                  <label
                    htmlFor="drawer-check"
                    className="text-xs text-zinc-400 cursor-pointer font-medium select-none"
                  >
                    Toggle Contact Status
                  </label>
                </div>

                {!!selectedApplication.is_contacted && (
                  <span className="text-[10px] font-mono uppercase text-green-500 flex items-center gap-1">
                    <CheckCircle2 size={12} /> Outreach Complete
                  </span>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ReachOutApplicationManager;
