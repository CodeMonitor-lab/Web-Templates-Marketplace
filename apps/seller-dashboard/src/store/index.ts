import { configureStore } from "@reduxjs/toolkit";

import authReducer from "./slices/authSlice";
import templateReducer from "./slices/templateSlice";
import uiReducer from "./slices/uiSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    templates: templateReducer,
    ui: uiReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;