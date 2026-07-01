import Card from "@/components/ui/Card";

const orders = [
  { customer: "John", amount: "$49" },
  { customer: "Sarah", amount: "$79" },
  { customer: "Alex", amount: "$99" },
];

export default function RecentOrders() {
  return (
    <Card>
      <h2 className="mb-4 text-lg font-semibold">
        Recent Orders
      </h2>

      <div className="space-y-4">
        {orders.map((order) => (
          <div
            key={order.customer}
            className="flex justify-between"
          >
            <span>{order.customer}</span>
            <span>{order.amount}</span>
          </div>
        ))}
      </div>
    </Card>
  );
}