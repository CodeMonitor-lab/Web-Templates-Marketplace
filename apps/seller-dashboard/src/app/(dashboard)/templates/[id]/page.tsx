import Link from "next/link";
import Button from "@/components/ui/Button";

interface TemplateDetailsPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function TemplateDetailsPage({
  params,
}: TemplateDetailsPageProps) {
  const { id } = await params;

  // Replace with API call later
  const template = {
    id,
    name: "Portfolio Website",
    category: "Portfolio",
    price: "$49",
    status: "Published",
    author: "Admin",
    sales: 152,
    createdAt: "01 July 2026",
    description:
      "Modern portfolio website template built with Next.js and Tailwind CSS.",
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
        <div>
          <h1 className="text-3xl font-bold">
            Template Details
          </h1>

          <p className="text-gray-500">
            View information about this template.
          </p>
        </div>

        <div className="flex gap-3">
          <Link href={`/templates/${id}/edit`}>
            <Button>Edit</Button>
          </Link>

          <Link href="/templates">
            <Button variant="outline">
              Back
            </Button>
          </Link>
        </div>
      </div>

      {/* Details Card */}
      <div className="rounded-xl border bg-white p-6 shadow-sm">
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <p className="text-sm text-gray-500">
              Template ID
            </p>

            <p className="font-medium">
              {template.id}
            </p>
          </div>

          <div>
            <p className="text-sm text-gray-500">
              Name
            </p>

            <p className="font-medium">
              {template.name}
            </p>
          </div>

          <div>
            <p className="text-sm text-gray-500">
              Category
            </p>

            <p className="font-medium">
              {template.category}
            </p>
          </div>

          <div>
            <p className="text-sm text-gray-500">
              Price
            </p>

            <p className="font-medium">
              {template.price}
            </p>
          </div>

          <div>
            <p className="text-sm text-gray-500">
              Status
            </p>

            <p className="font-medium text-green-600">
              {template.status}
            </p>
          </div>

          <div>
            <p className="text-sm text-gray-500">
              Sales
            </p>

            <p className="font-medium">
              {template.sales}
            </p>
          </div>

          <div>
            <p className="text-sm text-gray-500">
              Author
            </p>

            <p className="font-medium">
              {template.author}
            </p>
          </div>

          <div>
            <p className="text-sm text-gray-500">
              Created At
            </p>

            <p className="font-medium">
              {template.createdAt}
            </p>
          </div>
        </div>

        <div className="mt-8">
          <p className="mb-2 text-sm text-gray-500">
            Description
          </p>

          <p className="leading-7 text-gray-700">
            {template.description}
          </p>
        </div>
      </div>
    </div>
  );
}