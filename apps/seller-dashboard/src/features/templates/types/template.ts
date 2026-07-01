// src/features/templates/types/index.ts

export type TemplateCategory = 'NextJS' | 'React' | 'Vue' | 'Tailwind' | 'SaaS';

export interface Template {
  _id: string;
  sellerId: string;
  title: string;
  description: string;
  price: number;
  category: TemplateCategory;
  previewUrl?: string;
  downloadUrl: string;
  demoUrl?: string;
  images: string[];
  features: string[];
  salesCount: number;
  isPublished: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface CreateTemplatePayload {
  title: string;
  description: string;
  price: number;
  category: TemplateCategory;
  previewUrl?: string;
  downloadUrl: string;
  demoUrl?: string;
  images: string[];
  features: string[];
}

export interface UpdateTemplatePayload extends Partial<CreateTemplatePayload> {
  id: string;
}

export interface TemplatesState {
  items: Template[];
  currentTemplate: Template | null;
  loading: boolean;
  error: string | null;
}