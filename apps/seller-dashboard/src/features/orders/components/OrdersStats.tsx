const stats = [
    {
      title: "Total Orders",
      value: 152,
      color: "text-blue-600",
    },
    {
      title: "Completed",
      value: 128,
      color: "text-green-600",
    },
    {
      title: "Pending",
      value: 18,
      color: "text-yellow-600",
    },
    {
      title: "Revenue",
      value: "$12,480",
      color: "text-purple-600",
    },
  ];
  
  export default function OrdersStats() {
    return (
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {stats.map((item) => (
          <div
            key={item.title}
            className="rounded-xl border bg-white p-5 shadow-sm"
          >
            <p className="text-sm text-gray-500">
              {item.title}
            </p>
  
            <h3
              className={`mt-2 text-3xl font-bold ${item.color}`}
            >
              {item.value}
            </h3>
          </div>
        ))}
      </div>
    );
  }