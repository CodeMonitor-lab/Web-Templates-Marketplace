import axios from "axios";
import env from "@/lib/config/env.client";

const api = axios.create({
  baseURL: env.API_URL,
  withCredentials: true,
  timeout: 15000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;