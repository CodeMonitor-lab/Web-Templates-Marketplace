import Link from "next/link";
import Card from "@/components/ui/Card";

const templates = [
  "Portfolio Website",
  "Admin Dashboard",
  "Landing Page",
];

export default function RecentTemplates() {
  return (
    <Card>
      <h2 className="mb-4 text-lg font-semibold">
        Recent Templates
      </h2>

      <div className="space-y-4">
        {templates.map((item) => (
          <div
            key={item}
            className="flex items-center justify-between"
          >
            <span>{item}</span>

            <Link
              href="/templates"
              className="text-blue-600"
            >
              View
            </Link>
          </div>
        ))}
      </div>
    </Card>
  );
}