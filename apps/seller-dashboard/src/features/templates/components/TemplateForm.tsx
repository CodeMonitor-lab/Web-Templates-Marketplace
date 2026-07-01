// src/features/templates/components/TemplateForm.tsx
"use client";

import { useForm } from "react-hook-form";
import { CreateTemplatePayload, TemplateCategory } from "../types";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";

interface TemplateFormProps {
  initialValues?: Partial<CreateTemplatePayload>;
  onSubmit: (data: CreateTemplatePayload) => Promise<void>;
  loading: boolean;
}

const CATEGORIES: TemplateCategory[] = ["NextJS", "React", "Vue", "Tailwind", "SaaS"];

export default function TemplateForm({ initialValues, onSubmit, loading }: TemplateFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateTemplatePayload>({
    defaultValues: {
      title: initialValues?.title || "",
      description: initialValues?.description || "",
      price: initialValues?.price || 0,
      category: initialValues?.category || "NextJS",
      demoUrl: initialValues?.demoUrl || "",
      downloadUrl: initialValues?.downloadUrl || "",
      images: initialValues?.images || [],
      features: initialValues?.features || [],
    },
  });

  const handleFormSubmit = async (data: CreateTemplatePayload) => {
    // Basic formatting transformation sanitization 
    const formattedData = {
      ...data,
      price: Number(data.price),
      // Handle feature parsing array safety checks if supplied via plain text strings split by commas
      features: typeof data.features === "string" 
        ? (data.features as string).split(",").map(f => f.trim()).filter(Boolean)
        : data.features
    };
    await onSubmit(formattedData);
  };

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-6 bg-white p-6 border rounded-xl shadow-sm">
      <div className="grid gap-6 md:grid-cols-2">
        <Input
          label="Template Title"
          placeholder="e.g., AI SaaS Boilerplate Kit"
          error={errors.title?.message}
          {...register("title", { required: "Title is required" })}
        />

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Category
          </label>
          <select
            {...register("category", { required: "Category is required" })}
            className="w-full rounded-md border border-gray-300 bg-white px-3 h-10 text-sm shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
          >
            {CATEGORIES.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
          {errors.category && <p className="mt-1 text-xs text-red-500">{errors.category.message}</p>}
        </div>

        <Input
          label="Price (USD)"
          type="number"
          placeholder="49"
          error={errors.price?.message}
          {...register("price", {
            required: "Price is required",
            min: { value: 0, message: "Price cannot be negative" }
          })}
        />

        <Input
          label="Live Demo Link (Optional)"
          type="url"
          placeholder="https://demo.yourdomain.com"
          error={errors.demoUrl?.message}
          {...register("demoUrl")}
        />

        <Input
          label="Source Zip Download URL"
          type="url"
          placeholder="https://storage.provider.com/files/bundle.zip"
          error={errors.downloadUrl?.message}
          {...register("downloadUrl", { required: "Download delivery URL link is required" })}
        />

        <Input
          label="Preview Image URL"
          type="url"
          placeholder="https://storage.provider.com/files/preview.jpg"
          error={errors.images?.[0]?.message}
          {...register("images.0", { required: "At least one preview image URL is required" })}
        />
      </div>

      <div className="space-y-1">
        <label className="block text-sm font-medium text-gray-700">
          Description
        </label>
        <textarea
          rows={4}
          placeholder="Describe what your template includes, tech stack specs, modules..."
          {...register("description", { required: "Description is required" })}
          className="w-full rounded-md border border-gray-300 p-3 text-sm shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
        />
        {errors.description && <p className="text-xs text-red-500">{errors.description.message}</p>}
      </div>

      <Input
        label="Key Features (Comma Separated)"
        placeholder="Tailwind CSS, Next.js 15, Stripe Integrated, TypeScript"
        {...register("features")}
      />

      <div className="flex justify-end gap-3 pt-4 border-t">
        <Button type="submit" loading={loading} className="px-6">
          Save Template
        </Button>
      </div>
    </form>
  );
}