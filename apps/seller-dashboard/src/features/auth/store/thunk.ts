// src/features/auth/store/thunk.ts
import { createAsyncThunk } from "@reduxjs/toolkit";
import { authService } from "../services";
import { 
  LoginPayload, 
  RegisterPayload, 
  AuthResponse, 
  ForgotPasswordPayload, 
  ResetPasswordPayload 
} from "../types/auth";
import { User } from "@/types/user/user";
import { authStorage } from "@/lib/storage/auth-storage";

const getErrorMessage = (error: any): string => {
  return error.response?.data?.message || error.message || "An unexpected error occurred";
};

// LOGIN THUNK
export const loginThunk = createAsyncThunk<AuthResponse, LoginPayload, { rejectValue: string }>(
  "auth/login",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await authService.login(payload);
      if (response && response.token) {
        authStorage.setToken(response.token);
        return response;
      }
      return rejectWithValue("Authentication succeeded but token was missing.");
    } catch (error: any) {
      return rejectWithValue(getErrorMessage(error));
    }
  }
);

// REGISTER THUNK
export const registerThunk = createAsyncThunk<AuthResponse, RegisterPayload, { rejectValue: string }>(
  "auth/register",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await authService.register(payload);
      if (response && response.token) {
        authStorage.setToken(response.token);
        return response;
      }
      return rejectWithValue("Registration succeeded but no session token was provided.");
    } catch (error: any) {
      return rejectWithValue(getErrorMessage(error));
    }
  }
);

// GET ME THUNK (session restore)
export const getMeThunk = createAsyncThunk<User, void, { rejectValue: string }>(
  "auth/getMe",
  async (_, { rejectWithValue }) => {
    try {
      const token = authStorage.getToken();
      if (!token || token === "undefined") {
        authStorage.clearToken();
        return rejectWithValue("No valid session token found");
      }
      return await authService.getMe();
    } catch (error: any) {
      authStorage.clearToken();
      return rejectWithValue(getErrorMessage(error));
    }
  }
);

// LOGOUT THUNK
export const logoutThunk = createAsyncThunk<void, void, { rejectValue: string }>(
  "auth/logout",
  async (_, { rejectWithValue }) => {
    try {
      await authService.logout();
    } catch (error) {
      // Proceed to wipe state even if server session destruction throws
    } finally {
      authStorage.clearToken();
    }
  }
);

// FORGOT PASSWORD THUNK
export const forgotPasswordThunk = createAsyncThunk<{ message: string }, ForgotPasswordPayload, { rejectValue: string }>(
  "auth/forgotPassword",
  async (payload, { rejectWithValue }) => {
    try {
      return await authService.forgotPassword(payload);
    } catch (error: any) {
      return rejectWithValue(getErrorMessage(error));
    }
  }
);

// RESET PASSWORD THUNK
export const resetPasswordThunk = createAsyncThunk<{ message: string }, ResetPasswordPayload, { rejectValue: string }>(
  "auth/resetPassword",
  async (payload, { rejectWithValue }) => {
    try {
      return await authService.resetPassword(payload);
    } catch (error: any) {
      return rejectWithValue(getErrorMessage(error));
    }
  }
);