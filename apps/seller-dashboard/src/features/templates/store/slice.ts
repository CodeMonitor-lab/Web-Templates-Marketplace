// src/features/templates/store/slice.ts
import { createSlice } from "@reduxjs/toolkit";
import { fetchTemplatesThunk, createTemplateThunk, updateTemplateThunk } from "./thunk";
import { TemplatesState } from "../types";

const initialState: TemplatesState = {
  items: [],
  currentTemplate: null,
  loading: false,
  error: null,
};

const templatesSlice = createSlice({
  name: "templates",
  initialState,
  reducers: {
    clearTemplateErrors: (state) => {
      state.error = null;
    },
    setCurrentTemplate: (state, action) => {
      state.currentTemplate = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      // Fetch All Templates Catalog
      .addCase(fetchTemplatesThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTemplatesThunk.fulfilled, (state, action) => {
        state.loading = false;
        
        // Dynamic Extraction Payload Guard Layer
        if (Array.isArray(action.payload)) {
          state.items = action.payload;
        } else if (action.payload && typeof action.payload === "object") {
          const resObj = action.payload as any;
          state.items = resObj.templates || resObj.data || resObj.items || [];
        } else {
          state.items = [];
        }
      })
      .addCase(fetchTemplatesThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      
      // Create Template Wrapper Handler
      .addCase(createTemplateThunk.fulfilled, (state, action) => {
        const newItem = action.payload && typeof action.payload === "object" && !Array.isArray(action.payload)
          ? ((action.payload as any).template || action.payload)
          : action.payload;
        if (Array.isArray(state.items)) {
          state.items.unshift(newItem);
        } else {
          state.items = [newItem];
        }
      })
      
      // Update Template Wrapper Handler
      .addCase(updateTemplateThunk.fulfilled, (state, action) => {
        const updatedItem = action.payload && typeof action.payload === "object" && !Array.isArray(action.payload)
          ? ((action.payload as any).template || action.payload)
          : action.payload;
          
        if (Array.isArray(state.items)) {
          const index = state.items.findIndex(t => t._id === updatedItem._id);
          if (index !== -1) {
            state.items[index] = updatedItem;
          }
        }
      });
  },
});

export const { clearTemplateErrors, setCurrentTemplate } = templatesSlice.actions;
export default templatesSlice.reducer;