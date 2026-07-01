import Card from "@/components/ui/Card";

const activity = [
  "New template uploaded",
  "Order received",
  "Template updated",
  "Customer review added",
];

export default function RecentActivity() {
  return (
    <Card>
      <h2 className="mb-4 text-lg font-semibold">
        Recent Activity
      </h2>

      <ul className="space-y-3">
        {activity.map((item) => (
          <li
            key={item}
            className="border-l-2 border-blue-500 pl-3"
          >
            {item}
          </li>
        ))}
      </ul>
    </Card>
  );
}