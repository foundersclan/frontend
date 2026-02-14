import axios from "axios";
import { useEffect, useState } from "react";

const BASE_URL = import.meta.env.VITE_BASE_URL;

export const useAdminDashboard = () => {
  const [registrations, setRegistrations] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRegistrations = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await axios.get(`${BASE_URL}/api/registrations`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        
        setRegistrations(response.data);
      } catch (err) {
        setError(err.response?.data?.message || "Failed to fetch registrations");
      } finally {
        setLoading(false);
      }
    };
    const fetchEvents = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await axios.get(`${BASE_URL}/api/registrations`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        
        setRegistrations(response.data);
      } catch (err) {
        setError(err.response?.data?.message || "Failed to fetch registrations");
      } finally {
        setLoading(false);
      }
    };

    fetchRegistrations();
  }, []); 

  return {
    registrations,
    loading,
    error,
  };
};