"use client";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import authService from "@/services/auth.service";
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

export const useAuth = () => {
  const router = useRouter();
  const queryClient = useQueryClient();

  // 🔐 SESSION (replaces useAuthUser)
  const {
    data: user,
    isLoading,
    isError,
  } = useQuery<AuthUser | null>({
    queryKey: ["auth-user"],
    queryFn: authService.getCurrentUser,
    retry: false,
  });

  const isAuthenticated = !!user;
  const isAdmin = user?.role === "admin";
  const isSeller = user?.role === "seller";

  // 🔐 LOGIN
  const loginMutation = useMutation({
    mutationFn: (data: LoginPayload) => authService.login(data),
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ["auth-user"] });
      router.replace("/dashboard");
    },
  });

  // 🧾 REGISTER
  const registerMutation = useMutation({
    mutationFn: (data: RegisterPayload) => authService.register(data),
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ["auth-user"] });
      router.replace("/dashboard");
    },
  });

  // 🚪 LOGOUT
  const logoutMutation = useMutation({
    mutationFn: authService.logout,
    onSuccess: async () => {
      queryClient.removeQueries({ queryKey: ["auth-user"] });
      router.replace("/login");
    },
  });

  return {
    // state
    user,
    isLoading,
    isError,
    isAuthenticated,
    isAdmin,
    isSeller,

    // actions
    login: loginMutation.mutate,
    register: registerMutation.mutate,
    logout: logoutMutation.mutate,

    // mutation states
    isLoggingIn: loginMutation.isPending,
    isRegistering: registerMutation.isPending,
    isLoggingOut: logoutMutation.isPending,
  };
};