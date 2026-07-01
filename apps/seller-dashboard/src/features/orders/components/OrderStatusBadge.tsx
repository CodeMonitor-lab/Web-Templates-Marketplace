"use client";

interface OrderStatusBadgeProps {
  status: "Pending" | "Processing" | "Completed" | "Cancelled";
}

export default function OrderStatusBadge({
  status,
}: OrderStatusBadgeProps) {
  const styles = {
    Pending:
      "bg-yellow-100 text-yellow-700 border-yellow-200",
    Processing:
      "bg-blue-100 text-blue-700 border-blue-200",
    Completed:
      "bg-green-100 text-green-700 border-green-200",
    Cancelled:
      "bg-red-100 text-red-700 border-red-200",
  };

  return (
    <span
      className={`inline-flex rounded-full border px-3 py-1 text-xs font-semibold ${styles[status]}`}
    >
      {status}
    </span>
  );
}