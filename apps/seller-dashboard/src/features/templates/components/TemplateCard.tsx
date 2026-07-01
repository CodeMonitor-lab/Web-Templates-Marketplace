// src/features/templates/components/TemplateCard.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { Template } from "../types";
import Button from "@/components/ui/Button";

interface TemplateCardProps {
  template: Template;
  onDelete?: (id: string) => void;
}

export default function TemplateCard({ template, onDelete }: TemplateCardProps) {
  const fallbackImage = "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=600&auto=format&fit=crop";

  return (
    <div className="group overflow-hidden rounded-xl border bg-white shadow-sm transition hover:shadow-md flex flex-col h-full">
      {/* Visual Preview Window */}
      <div className="relative aspect-video w-full overflow-hidden bg-gray-100 border-b">
        <img
          src={template.images?.[0] || fallbackImage}
          alt={template.title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
        <span className="absolute top-3 right-3 rounded-full bg-black/75 px-2.5 py-1 text-xs font-medium text-white tracking-wide">
          {template.category}
        </span>
      </div>

      {/* Meta details window */}
      <div className="p-5 flex flex-col flex-grow">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="font-semibold text-gray-900 line-clamp-1 group-hover:text-blue-600 transition">
            {template.title}
          </h3>
          <span className="text-lg font-bold text-gray-900 shrink-0">
            ${template.price}
          </span>
        </div>

        <p className="text-sm text-gray-500 line-clamp-2 mb-4 flex-grow">
          {template.description}
        </p>

        {/* Dashboard Actions Row */}
        <div className="flex items-center gap-2 pt-3 border-t mt-auto">
          {template.demoUrl && (
            <a
              href={template.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center inline-flex items-center justify-center text-sm font-medium h-9 px-3 rounded-md border hover:bg-gray-50 transition"
            >
              Live Demo
            </a>
          )}
          <Link href={`/dashboard/templates/edit/${template._id}`} className="flex-1">
            <Button variant="ghost" className="w-full h-9 text-sm">
              Edit
            </Button>
          </Link>
          {onDelete && (
            <Button
              variant="destructive"
              className="h-9 w-9 px-0 shrink-0"
              onClick={() => onDelete(template._id)}
              aria-label="Delete template"
            >
              🗑️
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}