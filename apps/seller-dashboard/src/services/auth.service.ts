// src/services/auth.service.ts

import api from "@/lib/api/axios";
import API_ENDPOINTS from "@/lib/api/endpoints";

type LoginPayload = {
  email: string;
  password: string;
};

type RegisterPayload = {
  name: string;
  email: string;
  password: string;
};

const authService = {
  async login(data: LoginPayload) {
    const res = await api.post(
      API_ENDPOINTS.AUTH.LOGIN,
      data
    );

    const { token, user } = res.data;

    if (token) {
      localStorage.setItem(
        "accessToken",
        token
      );
    }

    return user;
  },

  async register(
    data: RegisterPayload
  ) {
    const res = await api.post(
      API_ENDPOINTS.AUTH.REGISTER,
      data
    );

    const { token, user } = res.data;

    if (token) {
      localStorage.setItem(
        "accessToken",
        token
      );
    }

    return user;
  },

  async logout() {
    try {
      await api.post(
        API_ENDPOINTS.AUTH.LOGOUT
      );
    } finally {
      localStorage.removeItem(
        "accessToken"
      );
    }
  },

  async getCurrentUser() {
    const res = await api.get(
      API_ENDPOINTS.USERS.PROFILE
    );

    return res.data.data;
  },
};

export default authService;