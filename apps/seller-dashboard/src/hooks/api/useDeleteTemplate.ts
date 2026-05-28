'use client';

import templateService from '@/services/template.service';

export default function useDeleteTemplate() {
  const deleteTemplate = async (id: string) => {
    return await templateService.deleteTemplate(id);
  };

  return {
    deleteTemplate,
  };
}