"use client";

import { useRouter } from "next/navigation";

import { useAppDispatch, useAppSelector } from "@/store/hooks";
import {
  loginUser,
  registerUser,
  logoutUser,
} from "@/store/slices/authSlice";

export const useAuth = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const { user, token, loading, error } = useAppSelector(
    (state) => state.auth
  );

  const login = async (data: { email: string; password: string }) => {
    await dispatch(loginUser(data)).unwrap();
    router.replace("/dashboard");
  };

  const register = async (data: {
    name: string;
    email: string;
    password: string;
  }) => {
    await dispatch(registerUser(data)).unwrap();
    router.replace("/dashboard");
  };

  const logout = async () => {
    await dispatch(logoutUser()).unwrap();
    router.replace("/login");
  };

  return {
    user,
    token,
    error,
    isLoading: loading,
    isAuthenticated: !!token,

    isAdmin: user?.role === "admin",
    isSeller: user?.role === "seller",

    login,
    register,
    logout,
  };
};