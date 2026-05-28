import api from '@/lib/api/axios';
import API_ENDPOINTS from '@/lib/api/endpoints';

const templateService = {
  async getTemplates() {
    const response = await api.get(
      API_ENDPOINTS.TEMPLATE.GET_ALL
    );

    return response.data;
  },

  async createTemplate(data: unknown) {
    const response = await api.post(
      API_ENDPOINTS.TEMPLATE.CREATE,
      data
    );

    return response.data;
  },

  async updateTemplate(id: string, data: unknown) {
    const response = await api.put(
      API_ENDPOINTS.TEMPLATE.UPDATE(id),
      data
    );

    return response.data;
  },

  async deleteTemplate(id: string) {
    const response = await api.delete(
      API_ENDPOINTS.TEMPLATE.DELETE(id)
    );

    return response.data;
  },
};

export default templateService;