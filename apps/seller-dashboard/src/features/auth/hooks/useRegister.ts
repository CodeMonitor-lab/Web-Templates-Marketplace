// src/features/auth/hooks/useRegister.ts
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { registerThunk, clearAuthState } from "../store";
import { RegisterPayload } from "../types/auth";
import { RootState, AppDispatch } from "@/store";

export const useRegister = () => {
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();
  const { loading, error, isAuthenticated, user } = useSelector((state: RootState) => state.auth);

  const register = useCallback(async (payload: RegisterPayload) => {
    const resultAction = await dispatch(registerThunk(payload));
    if (registerThunk.fulfilled.match(resultAction)) {
      router.push("/dashboard");
      return { success: true };
    }
    return { success: false, error: resultAction.payload };
  }, [dispatch, router]);

  const resetFormState = useCallback(() => {
    dispatch(clearAuthState());
  }, [dispatch]);

  return { register, loading, error, isAuthenticated, user, resetFormState };
};