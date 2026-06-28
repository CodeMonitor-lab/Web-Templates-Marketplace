"use client";

import Link from "next/link";
import Image from "next/image";

interface Template {
  _id: string;
  title: string;
  description: string;
  slug?: string;
  price: number;
  thumbnail?: string;
  previewUrl?: string;
  category?: {
    _id: string;
    name: string;
  };
}

interface Props {
  template: Template;
}

export default function TemplateCard({ template }: Props) {
  return (
    <div className="group overflow-hidden rounded-2xl border bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      
      {/* IMAGE */}
      <div className="relative h-52 w-full bg-gray-100">
        <Image
          src={template.thumbnail || "/window.svg"}
          alt={template.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          priority={false}
        />
      </div>

      {/* CONTENT */}
      <div className="space-y-3 p-4">
        
        {/* TITLE + DESCRIPTION */}
        <div>
          <h2 className="line-clamp-1 text-lg font-semibold text-gray-900">
            {template.title}
          </h2>

          <p className="mt-1 line-clamp-2 text-sm text-gray-500">
            {template.description || "No description available"}
          </p>
        </div>

        {/* META INFO */}
        <div className="flex items-center justify-between">
          
          {/* CATEGORY */}
          <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600">
            {template.category?.name ?? "Uncategorized"}
          </span>

          {/* PRICE */}
          <span className="text-lg font-bold text-gray-900">
            ₹{template.price}
          </span>
        </div>

        {/* ACTIONS */}
        <div className="flex gap-2 pt-2">
          
          {/* PREVIEW */}
          {template.previewUrl ? (
            <a
              href={template.previewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 rounded-lg border border-gray-200 py-2 text-center text-sm font-medium text-gray-700 transition hover:bg-gray-50"
            >
              Preview
            </a>
          ) : (
            <button
              disabled
              className="flex-1 cursor-not-allowed rounded-lg border border-gray-100 py-2 text-sm text-gray-300"
            >
              No Preview
            </button>
          )}

          {/* EDIT */}
          <Link
            href={`/templates/${template._id}/edit`}
            className="flex-1 rounded-lg bg-black py-2 text-center text-sm font-medium text-white transition hover:bg-gray-800"
          >
            Edit
          </Link>
        </div>
      </div>
    </div>
  );
}