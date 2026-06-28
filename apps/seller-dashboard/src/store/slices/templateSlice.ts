import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Template {
  _id: string;
  title: string;
  price: number;
  status: string;
}

interface TemplateState {
  templates: Template[];
  selectedTemplate: Template | null;
}

const initialState: TemplateState = {
  templates: [],
  selectedTemplate: null,
};

const templateSlice = createSlice({
  name: "templates",
  initialState,
  reducers: {
    setTemplates: (
      state,
      action: PayloadAction<Template[]>
    ) => {
      state.templates = action.payload;
    },

    setSelectedTemplate: (
      state,
      action: PayloadAction<Template | null>
    ) => {
      state.selectedTemplate = action.payload;
    },
  },
});

export const {
  setTemplates,
  setSelectedTemplate,
} = templateSlice.actions;

export default templateSlice.reducer;