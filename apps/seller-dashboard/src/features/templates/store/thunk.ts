// src/features/templates/store/thunk.ts
import { createAsyncThunk } from "@reduxjs/toolkit";
import { templateService } from "../services";
import { CreateTemplatePayload, UpdateTemplatePayload, Template } from "../types";

const getErrorMessage = (error: any) => 
  error.response?.data?.message || error.message || "Template execution failed";

export const fetchTemplatesThunk = createAsyncThunk<Template[], void, { rejectValue: string }>(
  "templates/fetchAll",
  async (_, { rejectWithValue }) => {
    try {
      return await templateService.getAll();
    } catch (error: any) {
      return rejectWithValue(getErrorMessage(error));
    }
  }
);

export const createTemplateThunk = createAsyncThunk<Template, CreateTemplatePayload, { rejectValue: string }>(
  "templates/create",
  async (payload, { rejectWithValue }) => {
    try {
      return await templateService.create(payload);
    } catch (error: any) {
      return rejectWithValue(getErrorMessage(error));
    }
  }
);

export const updateTemplateThunk = createAsyncThunk<Template, UpdateTemplatePayload, { rejectValue: string }>(
  "templates/update",
  async (payload, { rejectWithValue }) => {
    try {
      return await templateService.update(payload);
    } catch (error: any) {
      return rejectWithValue(getErrorMessage(error));
    }
  }
);

// ADDED: This satisfies your static barrel exports and fixes the build error!
export const deleteTemplateThunk = createAsyncThunk<string, string, { rejectValue: string }>(
  "templates/delete",
  async (id, { rejectWithValue }) => {
    try {
      await templateService.delete(id);
      return id; // Returns the deleted template ID to update slice memory instantly
    } catch (error: any) {
      return rejectWithValue(getErrorMessage(error));
    }
  }
);