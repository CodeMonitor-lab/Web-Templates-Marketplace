"use client";

import { useEffect } from "react";

import { useAppDispatch } from "@/store/hooks";
import { setCredentials } from "@/store/slices/authSlice";

import authService from "@/services/auth.service";

export default function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const token = authService.getToken();
    const user = authService.getStoredUser();

    if (token && user) {
      dispatch(setCredentials({ token, user }));
    }
  }, [dispatch]);

  return <>{children}</>;
}