import Card from "@/components/ui/Card";

export default function RevenueChart() {
  return (
    <Card>
      <h2 className="mb-4 text-lg font-semibold">
        Revenue Overview
      </h2>

      <div className="flex h-72 items-center justify-center rounded-lg border border-dashed text-gray-400">
        Revenue Chart
      </div>
    </Card>
  );
}