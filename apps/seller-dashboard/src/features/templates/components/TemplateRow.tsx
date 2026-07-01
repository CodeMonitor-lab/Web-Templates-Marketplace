// src/features/templates/components/TemplateRow.tsx
"use client";

import Link from "next/link";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/store";
import { Template } from "../types";
import { deleteTemplateThunk } from "../store";

interface Props {
  template: Template;
}

export default function TemplateRow({ template }: Props) {
  const dispatch = useDispatch<AppDispatch>();
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = async () => {
    if (!window.confirm(`Are you sure you want to delete "${template.title}"?`)) {
      return;
    }

    try {
      setIsDeleting(true);
      // Dispatch the standard store action handler
      await dispatch(deleteTemplateThunk(template._id)).unwrap();
    } catch (err: any) {
      alert(err || "Failed to delete the template. Please try again.");
      setIsDeleting(false);
    }
  };

  return (
    <tr className="hover:bg-gray-50/70 transition-colors">
      <td className="px-6 py-4 font-medium text-gray-900">
        <div className="flex items-center gap-3">
          {template.thumbnail ? (
            <img 
              src={template.thumbnail} 
              alt="" 
              className="h-10 w-14 rounded object-cover border bg-gray-50 shrink-0" 
            />
          ) : (
            <div className="h-10 w-14 rounded bg-gray-100 border flex items-center justify-center text-xs text-gray-400 shrink-0">
              No Img
            </div>
          )}
          <span className="line-clamp-1">{template.title}</span>
        </div>
      </td>

      <td className="px-6 py-4 text-gray-500 max-w-[150px] truncate">
        {template.category}
      </td>

      <td className="px-6 py-4 font-semibold text-gray-900">
        ${template.price}
      </td>

      <td className="px-6 py-4">
        <span
          className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium border ${
            template.isPublished
              ? "bg-green-50 text-green-700 border-green-200"
              : "bg-amber-50 text-amber-700 border-amber-200"
          }`}
        >
          {template.isPublished ? "Published" : "Draft"}
        </span>
      </td>

      <td className="px-6 py-4 text-right">
        <div className="flex justify-end gap-2 text-xs font-medium">
          {template.previewUrl && (
            <a
              href={template.previewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md border bg-white px-3 py-1.5 text-gray-700 shadow-sm hover:bg-gray-50 transition"
            >
              View
            </a>
          )}

          <Link
            href={`/dashboard/templates/edit/${template._id}`}
            className="rounded-md border bg-white px-3 py-1.5 text-gray-700 shadow-sm hover:bg-gray-50 transition"
          >
            Edit
          </Link>

          <button
            onClick={handleDelete}
            disabled={isDeleting}
            className="rounded-md border border-red-200 bg-white px-3 py-1.5 text-red-600 shadow-sm hover:bg-red-50 hover:border-red-300 disabled:opacity-50 transition"
          >
            {isDeleting ? "Deleting..." : "Delete"}
          </button>
        </div>
      </td>
    </tr>
  );
}