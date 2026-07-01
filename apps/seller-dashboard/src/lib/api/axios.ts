// src/lib/api/axios.ts
import axios from "axios";
import { authStorage } from "@/lib/storage/auth-storage";

const axiosInstance = axios.create({
  // Append /v1 to your fallback URL here:
  baseURL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api/v1",
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

// ========================
// REQUEST INTERCEPTOR
// ========================
axiosInstance.interceptors.request.use(
  (config) => {
    const token = authStorage.getToken();
    if (token && token !== "undefined") {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// ========================
// RESPONSE INTERCEPTOR
// ========================
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    const status = error?.response?.status;
    if (status === 401) {
      authStorage.clearToken();
      if (typeof window !== "undefined") {
        const currentPath = window.location.pathname;
        if (currentPath !== "/login" && currentPath !== "/register") {
          window.location.href = "/login";
        }
      }
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;