// src/features/templates/hooks/useTemplates.ts
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTemplatesThunk, createTemplateThunk } from "../store";
import { RootState, AppDispatch } from "@/store";
import { CreateTemplatePayload } from "../types";

export const useTemplates = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { items, loading, error, currentTemplate } = useSelector((state: RootState) => state.templates);

  const fetchTemplates = useCallback(() => {
    dispatch(fetchTemplatesThunk());
  }, [dispatch]);

  const createTemplate = useCallback(async (payload: CreateTemplatePayload) => {
    return await dispatch(createTemplateThunk(payload));
  }, [dispatch]);

  return {
    templates: items,
    loading,
    error,
    currentTemplate,
    fetchTemplates,
    createTemplate,
  };
};