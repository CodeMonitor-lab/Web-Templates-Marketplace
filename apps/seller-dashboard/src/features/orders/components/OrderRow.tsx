"use client";

import Link from "next/link";

import Button from "@/components/ui/Button";
import OrderStatusBadge from "./OrderStatusBadge";

export interface Order {
  id: string;
  customer: string;
  template: string;
  amount: number;
  status: "Pending" | "Processing" | "Completed" | "Cancelled";
  date: string;
}

interface OrderRowProps {
  order: Order;
}

export default function OrderRow({
  order,
}: OrderRowProps) {
  return (
    <tr className="border-b last:border-0 hover:bg-gray-50">
      <td className="px-6 py-4 font-medium">
        #{order.id}
      </td>

      <td className="px-6 py-4">
        {order.customer}
      </td>

      <td className="px-6 py-4">
        {order.template}
      </td>

      <td className="px-6 py-4 font-semibold">
        ${order.amount}
      </td>

      <td className="px-6 py-4">
        <OrderStatusBadge status={order.status} />
      </td>

      <td className="px-6 py-4">
        {order.date}
      </td>

      <td className="px-6 py-4">
        <Link href={`/orders/${order.id}`}>
          <Button
            size="sm"
            variant="outline"
          >
            View
          </Button>
        </Link>
      </td>
    </tr>
  );
}