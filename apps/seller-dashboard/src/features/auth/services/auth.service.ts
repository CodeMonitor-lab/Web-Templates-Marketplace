// src/features/auth/services/auth.service.ts
import axiosInstance from "@/lib/api/axios";
import { 
  LoginPayload, 
  RegisterPayload, 
  AuthResponse, 
  ForgotPasswordPayload, 
  ResetPasswordPayload 
} from "../types/auth";
import { User } from "@/types/user/user";

export const authService = {
  login: async (data: LoginPayload): Promise<AuthResponse> => {
    const res = await axiosInstance.post("/auth/login", data);
    return res.data;
  },

  register: async (data: RegisterPayload): Promise<AuthResponse> => {
    const res = await axiosInstance.post("/auth/register", data);
    return res.data;
  },

  getMe: async (): Promise<User> => {
    const res = await axiosInstance.get("/auth/me");
    return res.data;
  },

  logout: async (): Promise<{ success: boolean }> => {
    const res = await axiosInstance.post("/auth/logout");
    return res.data;
  },

  forgotPassword: async (data: ForgotPasswordPayload): Promise<{ message: string }> => {
    const res = await axiosInstance.post("/auth/forgot-password", data);
    return res.data;
  },

  resetPassword: async (data: ResetPasswordPayload): Promise<{ message: string }> => {
    const res = await axiosInstance.post("/auth/reset-password", data);
    return res.data;
  },
};