'use client';

import templateService from '@/services/template.service';

export default function useUpdateTemplate() {
  const updateTemplate = async (
    id: string,
    data: unknown
  ) => {
    return await templateService.updateTemplate(id, data);
  };

  return {
    updateTemplate,
  };
}