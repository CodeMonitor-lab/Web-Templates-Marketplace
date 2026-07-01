import Card from "@/components/ui/Card";

interface StatsCardProps {
  title: string;
  value: string | number;
  color?: string;
}

export default function StatsCard({
  title,
  value,
  color = "text-blue-600",
}: StatsCardProps) {
  return (
    <Card>
      <p className="text-sm text-gray-500">{title}</p>
      <h3 className={`mt-2 text-3xl font-bold ${color}`}>
        {value}
      </h3>
    </Card>
  );
}