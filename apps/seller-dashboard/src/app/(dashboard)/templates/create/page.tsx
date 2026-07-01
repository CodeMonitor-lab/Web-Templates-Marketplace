// src/app/dashboard/templates/new/page.tsx
"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { createTemplateThunk } from "@/features/templates/store";
import CreateTemplateForm from "@/features/templates/components/TemplateForm";
import ErrorMessage from "@/components/shared/ErrorMessage";
import { AppDispatch } from "@/store";
import { CreateTemplatePayload } from "@/features/templates/types";

export default function CreateTemplatePage() {
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleFormSubmit = async (formData: CreateTemplatePayload) => {
    setLoading(true);
    setError(null);

    // Dispatch the thunk to make the backend API call and update Redux state
    const resultAction = await dispatch(createTemplateThunk(formData));

    if (createTemplateThunk.fulfilled.match(resultAction)) {
      // Clean redirect back to the product dashboard upon successful creation
      router.push("/dashboard/templates");
    } else {
      // Display backend or network validation errors smoothly
      setError(resultAction.payload as string || "Failed to create product listing.");
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6 max-w-4xl mx-auto p-4 md:p-6">
      <div className="border-b pb-5">
        <h1 className="text-3xl font-bold text-gray-900 tracking-tight">
          Create Template
        </h1>
        <p className="mt-1 text-sm text-gray-500">
          Upload your code bundle assets, set parameters, and publish directly to the marketplace.
        </p>
      </div>

      {error && <ErrorMessage message={error} />}

      <CreateTemplateForm 
        onSubmit={handleFormSubmit} 
        loading={loading} 
      />
    </div>
  );
}