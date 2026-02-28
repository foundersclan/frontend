import axios from "axios";
import { useEffect, useState } from "react";

const BASE_URL = import.meta.env.VITE_BASE_URL;

export const useAdminDashboard = () => {
  const [registrations, setRegistrations] = useState([]);
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [createLoading, setCreateLoading] = useState(false);
  const [createError, setCreateError] = useState(null);

  // Fetch registrations and events on mount
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    setError(null);

    try {
      const [registrationsRes, eventsRes] = await Promise.all([
        axios.get(`${BASE_URL}/api/registrations`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("Founders_token")}`,
          },
        }),
        axios.get(`${BASE_URL}/api/events`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("Founders_token")}`,
          },
        }),
      ]);
      setRegistrations(registrationsRes.data);
      setEvents(eventsRes.data);
    } catch (err) {
      setError(err.response?.data?.message || "Failed to fetch data");
    } finally {
      setLoading(false);
    }
  };

  // Create new event
  const createEvent = async (eventData) => {
    setCreateLoading(true);
    setCreateError(null);

    try {
      const response = await axios.post(
        `${BASE_URL}/api/events`,
        eventData,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("Founders_token")}`,
          },
        }
      );

      // Add new event to local state without refetching
      const newEvent = { id: response.data.event_id, ...eventData };
      setEvents((prev) => [...prev, newEvent]);

      return { success: true, event_id: response.data.event_id };
    } catch (err) {
      const errorMsg = err.response?.data?.message || "Failed to create event";
      setCreateError(errorMsg);
      return { success: false, error: errorMsg };
    } finally {
      setCreateLoading(false);
    }
  };

  const updateRegistrationStatus = async (id, status, rejection_reason = null) => {
    try {
      await axios.patch(
        `${BASE_URL}/api/registrations/${id}/status`,
        { status, rejection_reason },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("Founders_token")}`,
          },
        }
      );

      setRegistrations((prev) =>
        prev.map((reg) =>
          reg.id === id
            ? { ...reg, status, rejection_reason, reviewed_at: new Date().toISOString() }
            : reg
        )
      );

      return { success: true };
    } catch (err) {
      const errorMsg = err.response?.data?.message || "Failed to update status";
      return { success: false, error: errorMsg };
    }
  };

  // Refresh data manually
  const refreshData = () => {
    fetchData();
  };

  return {
    registrations,
    events,
    loading,
    error,
    createLoading,
    createError,
    createEvent,
    updateRegistrationStatus,
    refreshData,
  };
};