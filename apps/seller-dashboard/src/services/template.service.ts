import api from "@/lib/api/axios";

const templateService = {
  createTemplate: async (data: any) => {
    const res = await api.post("/templates", data);
    return res.data;
  },

  updateTemplate: async (id: string, data: any) => {
    const res = await api.patch(`/templates/${id}`, data);
    return res.data;
  },

  getTemplates: async () => {
    const res = await api.get("/templates");
    return res.data;
  },

  getTemplateById: async (id: string) => {
    const res = await api.get(`/templates/${id}`);
    return res.data;
  },

  deleteTemplate: async (id: string) => {
    const res = await api.delete(`/templates/${id}`);
    return res.data;
  },
};

export default templateService;