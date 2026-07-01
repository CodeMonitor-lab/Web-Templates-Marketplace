import Link from "next/link";
import Button from "@/components/ui/Button";

export default function QuickActions() {
  return (
    <div className="flex flex-wrap gap-4">
      <Link href="/templates/create">
        <Button>Create Template</Button>
      </Link>

      <Link href="/orders">
        <Button variant="outline">View Orders</Button>
      </Link>

      <Link href="/analytics">
        <Button variant="outline">Analytics</Button>
      </Link>
    </div>
  );
}