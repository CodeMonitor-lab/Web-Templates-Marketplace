import { ReactNode } from "react";
import Link from "next/link";

export default function TemplatesLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="space-y-6">
      {/* Header Section */}
      <div className="flex flex-col gap-3 border-b pb-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-2xl font-bold">Templates</h1>
          <p className="text-sm text-gray-500">
            Manage your marketplace templates
          </p>
        </div>

        {/* Actions */}
        <div className="flex flex-wrap gap-2">
          <Link
            href="/templates"
            className="rounded-lg border px-4 py-2 text-sm transition hover:bg-gray-100"
          >
            All
          </Link>

          <Link
            href="/templates/create"
            className="rounded-lg bg-black px-4 py-2 text-sm text-white transition hover:bg-gray-800"
          >
            + Create
          </Link>
        </div>
      </div>

      {/* Page Content */}
      <div className="min-h-[70vh]">{children}</div>
    </div>
  );
}