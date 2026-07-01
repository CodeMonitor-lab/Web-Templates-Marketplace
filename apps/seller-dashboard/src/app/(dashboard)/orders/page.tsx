import {
  OrderFilters,
  OrdersStats,
  OrdersTable,
  OrderToolbar,
} from "@/features/orders/components";

export default function OrdersPage() {
  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-3xl font-bold tracking-tight">
          Orders
        </h1>

        <p className="mt-1 text-gray-500">
          Manage customer orders, track payments, and monitor order status.
        </p>
      </div>

      {/* Statistics */}
      <OrdersStats />

      {/* Toolbar */}
      <OrderToolbar />

      {/* Filters */}
      <OrderFilters />

      {/* Orders Table */}
      <OrdersTable />
    </div>
  );
}