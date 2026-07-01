// src/features/templates/services/template.service.ts
import axiosInstance from "@/lib/api/axios";
import { Template, CreateTemplatePayload, UpdateTemplatePayload } from "../types";

export const templateService = {
  getAll: async (): Promise<Template[]> => {
    const res = await axiosInstance.get("/templates");
    return res.data;
  },

  getById: async (id: string): Promise<Template> => {
    const res = await axiosInstance.get(`/templates/${id}`);
    return res.data;
  },

  create: async (data: CreateTemplatePayload): Promise<Template> => {
    const res = await axiosInstance.post("/templates", data);
    return res.data;
  },

  update: async ({ id, ...data }: UpdateTemplatePayload): Promise<Template> => {
    const res = await axiosInstance.put(`/templates/${id}`, data);
    return res.data;
  },

  delete: async (id: string): Promise<{ success: boolean; message: string }> => {
    const res = await axiosInstance.delete(`/templates/${id}`);
    return res.data;
  },
};