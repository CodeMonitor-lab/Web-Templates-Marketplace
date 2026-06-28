"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { getTemplates } from "@/components/templates/template-actions";

export default function TemplatesPage() {
  const [templates, setTemplates] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let ignore = false;

    const loadTemplates = async () => {
      try {
        setLoading(true);
        setError(null);

        const data = await getTemplates();

        // ✅ NORMALIZE API RESPONSE
        const list =
          data?.data ||
          data?.templates ||
          (Array.isArray(data) ? data : []);

        // ✅ FIX: ensure _id always exists
        const normalized = list.map((t: any) => ({
          ...t,
          _id: t._id || t.id || null,
        }));

        if (!ignore) {
          setTemplates(normalized);
        }
      } catch (err: any) {
        console.error("Failed to load templates:", err);

        if (!ignore) {
          setError(err?.message || "Failed to load templates");
          setTemplates([]);
        }
      } finally {
        if (!ignore) setLoading(false);
      }
    };

    loadTemplates();

    return () => {
      ignore = true;
    };
  }, []);

  // ---------------- LOADING ----------------
  if (loading) {
    return <div className="p-6 text-gray-500">Loading templates...</div>;
  }

  // ---------------- ERROR ----------------
  if (error) {
    return <div className="p-6 text-red-500">{error}</div>;
  }

  // ---------------- EMPTY ----------------
  if (!templates.length) {
    return <div className="p-6 text-gray-500">No templates found</div>;
  }

  // ---------------- FILTER VALID ----------------
  const validTemplates = templates.filter((t) => t._id);

  return (
    <div className="space-y-6">
      {/* GRID */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {validTemplates.map((template, index) => (
          <div
            key={template._id || `${template.title}-${index}`}
            className="rounded-2xl border p-4 transition hover:shadow-md"
          >
            <h2 className="text-lg font-semibold">
              {template.title || "Untitled"}
            </h2>

            <p className="text-sm text-gray-500">
              {template.category?.name ||
                template.category ||
                "No category"}
            </p>

            <p className="mt-2 font-medium">
              ₹{template.price ?? 0}
            </p>

            {/* ✅ SAFE EDIT LINK */}
            <div className="mt-3 flex gap-2">
              {template._id ? (
                <Link
                  href={`/templates/${template._id}/edit`}
                  className="text-blue-600"
                >
                  Edit
                </Link>
              ) : (
                <span className="text-red-500 text-xs">
                  Missing ID
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}