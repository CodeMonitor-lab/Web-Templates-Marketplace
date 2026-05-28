import api from '@/lib/api/axios';

const uploadService = {
  async uploadFile(file: File) {
    const formData = new FormData();

    formData.append('file', file);

    const response = await api.post('/upload', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    return response.data;
  },
};

export default uploadService;