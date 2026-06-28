import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import TemplateForm from "@/components/forms/template-form";

export default function CreateTemplatePage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <Link
          href="/templates"
          className="mb-4 inline-flex items-center gap-2 text-sm font-medium text-gray-600 transition hover:text-black"
        >
          <ArrowLeft size={18} />
          <span>Back to Templates</span>
        </Link>

        <h1 className="text-3xl font-bold">
          Create Template
        </h1>
      </div>

      {/* Form */}
      <div className="rounded-2xl border p-6">
        <TemplateForm />
      </div>
    </div>
  );
}