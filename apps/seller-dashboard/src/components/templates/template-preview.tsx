"use client";

import Image from "next/image";

interface TemplateCardProps {
  template: {
    _id: string;
    title: string;
    description: string;
    thumbnail?: string;
    previewUrl: string;
    price: number;
  };
}

export default function TemplatePreviewCard({
  template,
}: TemplateCardProps) {
  return (
    <div className="overflow-hidden rounded-xl border bg-white shadow-sm hover:shadow-lg transition">
      <div className="relative h-56 w-full">
        <Image
          src={
            template.thumbnail ||
            "https://placehold.co/600x400?text=No+Thumbnail"
          }
          alt={template.title}
          fill
          className="object-cover"
        />
      </div>

      <div className="space-y-3 p-4">
        <h2 className="text-lg font-semibold">
          {template.title}
        </h2>

        <p className="text-sm text-gray-500 line-clamp-2">
          {template.description}
        </p>

        <div className="flex items-center justify-between">
          <span className="text-xl font-bold">
            ₹{template.price}
          </span>

          <a
            href={template.previewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-black px-4 py-2 text-white hover:bg-gray-800"
          >
            Live Preview
          </a>
        </div>
      </div>
    </div>
  );
}