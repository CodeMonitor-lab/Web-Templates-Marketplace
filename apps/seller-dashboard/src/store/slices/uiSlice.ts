import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UIState {
  sidebarOpen: boolean;
  loading: boolean;
}

const initialState: UIState = {
  sidebarOpen: true,
  loading: false,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    toggleSidebar: (state) => {
      state.sidebarOpen = !state.sidebarOpen;
    },

    setSidebar: (
      state,
      action: PayloadAction<boolean>
    ) => {
      state.sidebarOpen = action.payload;
    },

    setLoading: (
      state,
      action: PayloadAction<boolean>
    ) => {
      state.loading = action.payload;
    },
  },
});

export const {
  toggleSidebar,
  setSidebar,
  setLoading,
} = uiSlice.actions;

export default uiSlice.reducer;