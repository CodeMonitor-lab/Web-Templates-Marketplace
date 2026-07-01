import StatsCard from "./StatsCard";

const stats = [
  {
    title: "Templates",
    value: 24,
    color: "text-blue-600",
  },
  {
    title: "Orders",
    value: 152,
    color: "text-green-600",
  },
  {
    title: "Revenue",
    value: "$4,850",
    color: "text-purple-600",
  },
  {
    title: "Customers",
    value: 81,
    color: "text-orange-600",
  },
];

export default function DashboardStats() {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      {stats.map((stat) => (
        <StatsCard key={stat.title} {...stat} />
      ))}
    </div>
  );
}