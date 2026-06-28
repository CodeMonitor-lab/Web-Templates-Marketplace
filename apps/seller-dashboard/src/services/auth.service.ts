import axiosInstance from "@/lib/api/axios";

const authService = {
  login: async (data: any) => {
    const res = await axiosInstance.post("/auth/login", data);
    return res.data;
  },

  register: async (data: any) => {
    const res = await axiosInstance.post("/auth/register", data);
    return res.data;
  },

  logout: async () => {
    const res = await axiosInstance.post("/auth/logout");
    return res.data;
  },

  getCurrentUser: async () => {
    const res = await axiosInstance.get("/auth/me");
    return res.data;
  },

  forgotPassword: async (data: { email: string }) => {
    const res = await axiosInstance.post(
      "/auth/forgot-password",
      data
    );
    return res.data;
  },

  resetPassword: async (data: { token: string; password: string }) => {
    const res = await axiosInstance.post(
      "/auth/reset-password",
      data
    );
    return res.data;
  },

  getStoredUser: () => {
    const user = localStorage.getItem("user");
    return user ? JSON.parse(user) : null;
  },

  getToken: () => {
    return localStorage.getItem("acessstoken");
  },
};

export default authService;