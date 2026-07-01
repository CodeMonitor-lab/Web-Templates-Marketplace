// src/features/auth/hooks/useLogin.ts
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { loginThunk, clearAuthState } from "../store";
import { LoginPayload } from "../types/auth";
import { RootState, AppDispatch } from "@/store";

export const useLogin = () => {
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();
  const { loading, error, isAuthenticated, user } = useSelector((state: RootState) => state.auth);

  const login = useCallback(async (payload: LoginPayload) => {
    const resultAction = await dispatch(loginThunk(payload));
    if (loginThunk.fulfilled.match(resultAction)) {
      router.push("/dashboard");
      return { success: true };
    }
    return { success: false, error: resultAction.payload };
  }, [dispatch, router]);

  const resetFormState = useCallback(() => {
    dispatch(clearAuthState());
  }, [dispatch]);

  return { login, loading, error, isAuthenticated, user, resetFormState };
};