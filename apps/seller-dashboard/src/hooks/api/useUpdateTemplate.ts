// src/hooks/api/useUpdateTemplate.ts
"use client";

import { useState } from "react";
import templateService from "@/services/template.service";

const useUpdateTemplate = () => {
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState<any>(null);

  const updateTemplate = async (id: string, data: any) => {
    try {
      setIsPending(true);
      setError(null);

      const res = await templateService.updateTemplate(id, data);
      return res;
    } catch (err: any) {
      setError(err);
      throw err;
    } finally {
      setIsPending(false);
    }
  };

  return {
    updateTemplate,
    isPending,
    error,
  };
};

export default useUpdateTemplate;