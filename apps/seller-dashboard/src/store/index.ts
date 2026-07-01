import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "@/features/auth/store";
import { templatesReducer } from "@/features/templates/store"; // Add this

export const store = configureStore({
  reducer: {
    auth: authReducer,
    templates: templatesReducer, // Registered!
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;