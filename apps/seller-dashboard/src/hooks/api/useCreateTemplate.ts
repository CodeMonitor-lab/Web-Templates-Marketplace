// src/hooks/api/useCreateTemplate.ts
"use client";

import { useState } from "react";
import templateService from "@/services/template.service";

export const useCreateTemplate = () => {
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState<any>(null);

  const createTemplate = async (data: any) => {
    try {
      setIsPending(true);
      setError(null);

      const res = await templateService.createTemplate(data);
      return res;
    } catch (err: any) {
      setError(err);
      throw err;
    } finally {
      setIsPending(false);
    }
  };

  return {
    createTemplate,
    isPending,
    error,
  };
};