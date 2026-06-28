"use client";

import { useEffect, useState } from "react";
import { useCreateTemplate } from "@/hooks/api/useCreateTemplate";
import useUpdateTemplate from "@/hooks/api/useUpdateTemplate";
import { toast } from "@/lib/utils/toast";

interface TemplateFormProps {
  initialData?: any;
  isEdit?: boolean;
}

export default function TemplateForm({
  initialData,
  isEdit = false,
}: TemplateFormProps) {
  const { createTemplate, isPending: createPending } =
    useCreateTemplate();

  const { updateTemplate, isPending: updatePending } =
    useUpdateTemplate();

  const [form, setForm] = useState({
    title: "",
    description: "",
    price: "",
    category: "",
    previewUrl: "",
    thumbnail: "",
  });

  const [submitting, setSubmitting] = useState(false);

  // PREFILL
  useEffect(() => {
    if (!initialData) return;

    setForm({
      title: initialData.title ?? "",
      description: initialData.description ?? "",
      price: String(initialData.price ?? ""),
      category:
        typeof initialData.category === "object"
          ? initialData.category?._id
          : initialData.category ?? "",
      previewUrl: initialData.previewUrl ?? "",
      thumbnail: initialData.thumbnail ?? "",
    });
  }, [initialData]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const isValidObjectId = (id: string) => /^[a-f\d]{24}$/i.test(id);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (submitting) return;

    const title = form.title.trim();
    const description = form.description.trim();
    const category = form.category.trim();

    if (!title || !description || !form.price || !category) {
      toast.error("Please fill all required fields");
      return;
    }

    if (!isValidObjectId(category)) {
      toast.error("Invalid category selected");
      return;
    }

    const payload = {
      title,
      description,
      price: Number(form.price),
      category,
      previewUrl: form.previewUrl.trim(),
      thumbnail: form.thumbnail.trim() || undefined,
    };

    try {
      setSubmitting(true);

      if (isEdit && initialData?._id) {
        await updateTemplate(initialData._id, payload);
        toast.success("Template updated successfully");
      } else {
        await createTemplate(payload);
        toast.success("Template created successfully");

        setForm({
          title: "",
          description: "",
          price: "",
          category: "",
          previewUrl: "",
          thumbnail: "",
        });
      }
    } catch (err: any) {
      toast.error(err?.response?.data?.message || "Something went wrong");
    } finally {
      setSubmitting(false);
    }
  };

  const isPending = createPending || updatePending || submitting;

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        name="title"
        value={form.title}
        onChange={handleChange}
        placeholder="Title"
        className="w-full rounded border p-2"
      />

      <textarea
        name="description"
        value={form.description}
        onChange={handleChange}
        placeholder="Description"
        className="w-full rounded border p-2"
      />

      <input
        name="price"
        type="number"
        value={form.price}
        onChange={handleChange}
        placeholder="Price"
        className="w-full rounded border p-2"
      />

      <input
        name="category"
        value={form.category}
        onChange={handleChange}
        placeholder="Category ID (24-char MongoDB ID)"
        className="w-full rounded border p-2"
      />

      <input
        name="previewUrl"
        value={form.previewUrl}
        onChange={handleChange}
        placeholder="Preview URL"
        className="w-full rounded border p-2"
      />

      <input
        name="thumbnail"
        value={form.thumbnail}
        onChange={handleChange}
        placeholder="Thumbnail URL (Optional)"
        className="w-full rounded border p-2"
      />

      <button
        type="submit"
        disabled={isPending}
        className="rounded bg-black px-4 py-2 text-white disabled:opacity-50"
      >
        {isPending
          ? isEdit
            ? "Updating..."
            : "Creating..."
          : isEdit
          ? "Update Template"
          : "Create Template"}
      </button>
    </form>
  );
}