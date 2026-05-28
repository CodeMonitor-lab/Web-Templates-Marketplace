"use client";

import { useEffect } from "react";
import { useQueryClient } from "@tanstack/react-query";
import authService from "@/services/auth.service";

export default function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const queryClient = useQueryClient();

  useEffect(() => {
    // preload user session on app start
    queryClient.prefetchQuery({
      queryKey: ["auth-user"],
      queryFn: authService.getCurrentUser,
    });
  }, [queryClient]);

  return <>{children}</>;
}