// src/features/templates/components/TemplateTable.tsx
"use client";

import { Template } from "../types";
import TemplateRow from "./TemplateRow";

interface TemplateTableProps {
  templates: Template[];
}

export default function TemplateTable({ templates: rawTemplates }: TemplateTableProps) {
  // Safe Array fallback validation step
  const templates = Array.isArray(rawTemplates) ? rawTemplates : [];

  if (templates.length === 0) {
    return (
      <div className="flex h-48 w-full flex-col items-center justify-center rounded-xl border border-dashed bg-white p-6 text-center shadow-sm">
        <div className="text-3xl mb-2">📁</div>
        <p className="text-base font-semibold text-gray-900">No products discovered</p>
        <p className="text-sm text-gray-400 mt-1 max-w-xs">
          Your product listing is empty. Add a new template asset to get started.
        </p>
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50 text-xs font-semibold uppercase tracking-wider text-gray-500">
            <tr>
              <th scope="col" className="px-6 py-4 text-left font-medium">Template</th>
              <th scope="col" className="px-6 py-4 text-left font-medium">Category</th>
              <th scope="col" className="px-6 py-4 text-left font-medium">Price</th>
              <th scope="col" className="px-6 py-4 text-left font-medium">Status</th>
              <th scope="col" className="px-6 py-4 text-right font-medium">Actions</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200 bg-white text-sm text-gray-700">
            {templates.map((template) => (
              template && template._id ? (
                <TemplateRow
                  key={template._id}
                  template={template}
                />
              ) : null
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}