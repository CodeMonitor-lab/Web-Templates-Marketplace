import Card from "@/components/ui/Card";

const templates = [
  "Portfolio Website",
  "Admin Dashboard",
  "E-Commerce UI",
];

export default function TopTemplates() {
  return (
    <Card>
      <h2 className="mb-4 text-lg font-semibold">
        Top Templates
      </h2>

      <ul className="space-y-3">
        {templates.map((item) => (
          <li key={item} className="flex justify-between">
            <span>{item}</span>
            <span className="font-semibold">$99</span>
          </li>
        ))}
      </ul>
    </Card>
  );
}