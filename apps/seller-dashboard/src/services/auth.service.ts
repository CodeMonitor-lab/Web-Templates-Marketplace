import api from "@/lib/api/axios";
import API_ENDPOINTS from "@/lib/api/endpoints";

const authService = {
  async login(data: { email: string; password: string }) {
    const res = await api.post(API_ENDPOINTS.AUTH.LOGIN, data);

    const { token } = res.data;

    if (token) {
      localStorage.setItem("token", token);
    }

    return res.data;
  },

  async register(data: {
    name: string;
    email: string;
    password: string;
  }) {
    const res = await api.post(API_ENDPOINTS.AUTH.REGISTER, data);

    const { token } = res.data;

    if (token) {
      localStorage.setItem("token", token);
    }

    return res.data;
  },

  async logout() {
    localStorage.removeItem("token");

    await api.post(API_ENDPOINTS.AUTH.LOGOUT);
  },

  async getCurrentUser() {
    const res = await api.get(API_ENDPOINTS.AUTH.ME);

    return res.data;
  },
};

export default authService;