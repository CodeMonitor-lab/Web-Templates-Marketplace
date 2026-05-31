"use client";

import {
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";

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

  const {
    data: user,
    isLoading,
    isError,
  } = useQuery<AuthUser | null>({
    queryKey: ["auth-user"],
    queryFn: authService.getCurrentUser,
    retry: false,
    staleTime: 1000 * 60 * 5,
  });

  const loginMutation = useMutation({
    mutationFn: (data: LoginPayload) =>
      authService.login(data),

    onSuccess: (user) => {
      queryClient.setQueryData(
        ["auth-user"],
        user
      );

      router.replace("/dashboard");
    },
  });

  const registerMutation = useMutation({
    mutationFn: (data: RegisterPayload) =>
      authService.register(data),

    onSuccess: (user) => {
      queryClient.setQueryData(
        ["auth-user"],
        user
      );

      router.replace("/dashboard");
    },
  });

  const logoutMutation = useMutation({
    mutationFn: authService.logout,

    onSuccess: () => {
      queryClient.clear();

      localStorage.removeItem(
        "accessToken"
      );

      router.replace("/login");
    },
  });

  return {
    user,

    isLoading,
    isError,

    isAuthenticated: !!user,

    isAdmin:
      user?.role?.toLowerCase() === "admin",

    isSeller:
      user?.role?.toLowerCase() === "seller",

    login:
      loginMutation.mutateAsync,

    register:
      registerMutation.mutateAsync,

    logout:
      logoutMutation.mutateAsync,

    isLoggingIn:
      loginMutation.isPending,

    isRegistering:
      registerMutation.isPending,

    isLoggingOut:
      logoutMutation.isPending,
  };
};