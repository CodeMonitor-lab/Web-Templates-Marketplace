import {
  createSlice,
  createAsyncThunk,
} from "@reduxjs/toolkit";

import authService from "@/services/auth.service";
import type { AuthUser } from "@/types/user";

interface AuthState {
  user: AuthUser | null;
  token: string | null;
  isAuthenticated: boolean;
  loading: boolean;
  error: string | null;
}

const initialState: AuthState = {
  user: null,
  token: null,
  isAuthenticated: false,
  loading: false,
  error: null,
};

/* ---------------- LOGIN ---------------- */
export const loginUser = createAsyncThunk(
  "auth/login",
  async (payload: { email: string; password: string }, { rejectWithValue }) => {
    try {
      return await authService.login(payload);
    } catch (err: any) {
      return rejectWithValue(
        err?.response?.data?.message || "Login failed"
      );
    }
  }
);

/* ---------------- REGISTER ---------------- */
export const registerUser = createAsyncThunk(
  "auth/register",
  async (
    payload: { name: string; email: string; password: string },
    { rejectWithValue }
  ) => {
    try {
      return await authService.register(payload);
    } catch (err: any) {
      return rejectWithValue(
        err?.response?.data?.message || "Register failed"
      );
    }
  }
);

/* ---------------- LOGOUT ---------------- */
export const logoutUser = createAsyncThunk(
  "auth/logout",
  async () => {
    await authService.logout();
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isAuthenticated = true;
    },
  },

  extraReducers: (builder) => {
    builder
      /* LOGIN */
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isAuthenticated = true;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })

      /* REGISTER */
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isAuthenticated = true;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })

      /* LOGOUT */
      .addCase(logoutUser.fulfilled, (state) => {
        state.user = null;
        state.token = null;
        state.isAuthenticated = false;
        state.loading = false;
        state.error = null;
      });
  },
});

export const { setCredentials } = authSlice.actions;
export default authSlice.reducer;