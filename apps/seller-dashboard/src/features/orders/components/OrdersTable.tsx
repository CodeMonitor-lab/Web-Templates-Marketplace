"use client";

import OrderRow, { type Order } from "./OrderRow";

const orders: Order[] = [
  {
    id: "1001",
    customer: "John Doe",
    template: "Portfolio Website",
    amount: 49,
    status: "Completed",
    date: "01 Jul 2026",
  },
  {
    id: "1002",
    customer: "Sarah Smith",
    template: "Admin Dashboard",
    amount: 79,
    status: "Pending",
    date: "30 Jun 2026",
  },
  {
    id: "1003",
    customer: "Michael Lee",
    template: "E-Commerce UI Kit",
    amount: 99,
    status: "Processing",
    date: "29 Jun 2026",
  },
  {
    id: "1004",
    customer: "Emma Wilson",
    template: "Restaurant Landing",
    amount: 39,
    status: "Cancelled",
    date: "28 Jun 2026",
  },
];

export default function OrdersTable() {
  return (
    <div className="overflow-hidden rounded-2xl border bg-white shadow-sm">
      <div className="border-b px-6 py-4">
        <h2 className="text-lg font-semibold">
          Recent Orders
        </h2>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead className="bg-gray-50">
            <tr className="text-left text-sm text-gray-600">
              <th className="px-6 py-3">Order ID</th>
              <th className="px-6 py-3">Customer</th>
              <th className="px-6 py-3">Template</th>
              <th className="px-6 py-3">Amount</th>
              <th className="px-6 py-3">Status</th>
              <th className="px-6 py-3">Date</th>
              <th className="px-6 py-3">Action</th>
            </tr>
          </thead>

          <tbody>
            {orders.map((order) => (
              <OrderRow
                key={order.id}
                order={order}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}