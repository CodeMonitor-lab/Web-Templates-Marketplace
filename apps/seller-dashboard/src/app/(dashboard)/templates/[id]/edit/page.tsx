import Link from "next/link";

import Button from "@/components/ui/Button";
import TemplateForm from "@/features/templates/components/TemplateForm";

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function EditTemplatePage({
  params,
}: PageProps) {
  const { id } = await params;

  return (
    <div className="mx-auto max-w-5xl space-y-8">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-gray-500">
        <Link
          href="/dashboard"
          className="transition hover:text-black"
        >
          Dashboard
        </Link>

        <span>/</span>

        <Link
          href="/templates"
          className="transition hover:text-black"
        >
          Templates
        </Link>

        <span>/</span>

        <span className="font-medium text-black">
          Edit Template
        </span>
      </nav>

      {/* Header */}
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">
            Edit Template
          </h1>

          <p className="mt-2 text-gray-500">
            Update your template information and save the
            changes.
          </p>
        </div>

        <div className="flex gap-3">
          <Link href={`/templates/${id}`}>
            <Button variant="outline">
              View Template
            </Button>
          </Link>

          <Link href="/templates">
            <Button variant="ghost">
              Back
            </Button>
          </Link>
        </div>
      </div>

      {/* Form Card */}
      <section className="rounded-2xl border bg-white p-6 shadow-sm">
        <TemplateForm
          mode="edit"
          templateId={id}
        />
      </section>
    </div>
  );
}