"use client";

import Image from "next/image";
import Link from "next/link";

interface Template {
  _id?: string;
  id?: string;
  title: string;
  description: string;
  price: number;
  thumbnail?: string;
  previewUrl?: string;
  category?: {
    _id?: string;
    name: string;
  };
}

interface Props {
  templates: Template[];
}

export default function TemplateTable({ templates }: Props) {
  if (!templates.length) {
    return (
      <div className="rounded-xl border bg-white p-10 text-center">
        <p className="text-gray-500">No templates found.</p>
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-xl border bg-white shadow-sm">
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-6 py-3 text-left">Template</th>
              <th className="px-6 py-3 text-left">Category</th>
              <th className="px-6 py-3 text-left">Price</th>
              <th className="px-6 py-3 text-left">Preview</th>
              <th className="px-6 py-3 text-right">Actions</th>
            </tr>
          </thead>

          <tbody>
            {templates.map((template, index) => (
              <tr
                key={
                  template._id ??
                  template.id ??
                  `${template.title}-${index}`
                }
                className="border-t hover:bg-gray-50"
              >
                <td className="px-6 py-4">
                  <div className="flex items-center gap-4">
                    <Image
                      src={template.thumbnail || "/window.svg"}
                      alt={template.title}
                      width={70}
                      height={70}
                      className="rounded-lg object-cover"
                    />

                    <div>
                      <h3 className="font-semibold">
                        {template.title}
                      </h3>

                      <p className="line-clamp-2 text-sm text-gray-500">
                        {template.description}
                      </p>
                    </div>
                  </div>
                </td>

                <td className="px-6 py-4">
                  {template.category?.name || "Uncategorized"}
                </td>

                <td className="px-6 py-4 font-semibold">
                  ₹{template.price}
                </td>

                <td className="px-6 py-4">
                  {template.previewUrl ? (
                    <a
                      href={template.previewUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      Preview
                    </a>
                  ) : (
                    "-"
                  )}
                </td>

                <td className="px-6 py-4">
                  <div className="flex justify-end gap-2">
                    <Link
                      href={`/templates/${template._id ?? template.id}/edit`}
                      className="rounded bg-black px-3 py-1 text-sm text-white"
                    >
                      Edit
                    </Link>

                    <button className="rounded bg-red-600 px-3 py-1 text-sm text-white">
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}