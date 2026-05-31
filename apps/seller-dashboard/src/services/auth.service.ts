// src/services/auth.service.ts

import api from "@/lib/api/axios";
import API_ENDPOINTS from "@/lib/api/endpoints";

import type { AuthUser } from "@/types/user";

type LoginPayload = {
  email: string;
  password: string;
};

type RegisterPayload = {
  name: string;
  email: string;
  password: string;
};

type AuthResponse = {
  token: string;
  user: AuthUser;
};

const authService = {
  async login(
    data: LoginPayload
  ): Promise<AuthUser> {
    const res = await api.post<AuthResponse>(
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
  ): Promise<AuthUser> {
    const res = await api.post<AuthResponse>(
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

  async logout(): Promise<void> {
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

  async getCurrentUser(): Promise<AuthUser> {
    const res = await api.get(
      API_ENDPOINTS.USERS.PROFILE
    );

    return res.data.data;
  },

  getToken(): string | null {
    if (typeof window === "undefined") {
      return null;
    }

    return localStorage.getItem(
      "accessToken"
    );
  },

  isAuthenticated(): boolean {
    return !!this.getToken();
  },
};

export default authService;