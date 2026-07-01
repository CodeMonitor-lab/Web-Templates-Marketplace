// src/app/dashboard/templates/page.tsx
"use client";

import { useEffect } from "react";
import Link from "next/link";
import { useTemplates } from "@/features/templates/hooks";
import Button from "@/components/ui/Button";
import ErrorMessage from "@/components/shared/ErrorMessage";
import {
  TemplateFilters,
  TemplateStats,
  TemplateTable,
} from "@/features/templates/components";

export default function TemplatesPage() {
  // 1. Extract centralized template states and actions from our hook facade
  const { templates, loading, error, fetchTemplates } = useTemplates();

  // 2. Trigger automatic data hydration on initial component mount
  useEffect(() => {
    fetchTemplates();
  }, [fetchTemplates]);

  return (
    <div className="space-y-6 max-w-[1600px] mx-auto p-4 md:p-6">
      {/* Page Context Header Row */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b pb-5">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 tracking-tight">Products</h1>
          <p className="text-sm text-gray-500 mt-1">
            Manage your template catalogue, update pricing, and audit distribution parameters.
          </p>
        </div>
        
        {/* Call to Action: Create New Template */}
        <Link href="dashboard/templates/create">
          <Button className="w-full sm:w-auto shadow-sm">
            ➕ Add New Template
          </Button>
        </Link>
      </div>

      {/* Global Error Notification Boundary */}
      {error && <ErrorMessage message={error} />}

      {/* Dynamic Summary Cards View */}
      <TemplateStats />

      {/* Control Filters Layer */}
      <TemplateFilters />

      {/* Dynamic Main Data Table Presentation */}
      {loading && templates.length === 0 ? (
        <div className="flex h-64 w-full items-center justify-center rounded-xl border border-dashed bg-white shadow-sm">
          <div className="flex flex-col items-center gap-2">
            <div className="h-8 w-8 animate-spin rounded-full border-4 border-blue-600 border-t-transparent" />
            <p className="text-sm font-medium text-gray-500 animate-pulse">Syncing catalog registry...</p>
          </div>
        </div>
      ) : (
        <TemplateTable templates={templates} />
      )}
    </div>
  );
}