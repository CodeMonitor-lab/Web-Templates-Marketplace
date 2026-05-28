'use client';

import templateService from '@/services/template.service';

export default function useCreateTemplate() {
  const createTemplate = async (data: unknown) => {
    return await templateService.createTemplate(data);
  };

  return {
    createTemplate,
  };
}