import Link from "next/link";

export default function DashboardPage() {
  const stats = [
    {
      title: "Total Templates",
      value: 24,
      color: "text-blue-600",
    },
    {
      title: "Published",
      value: 18,
      color: "text-green-600",
    },
    {
      title: "Total Sales",
      value: 152,
      color: "text-purple-600",
    },
    {
      title: "Revenue",
      value: "$4,850",
      color: "text-orange-600",
    },
  ];

  const recentTemplates = [
    {
      id: 1,
      title: "Portfolio Website",
      status: "Published",
    },
    {
      id: 2,
      title: "Admin Dashboard",
      status: "Draft",
    },
    {
      id: 3,
      title: "E-Commerce UI Kit",
      status: "Published",
    },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">
            Dashboard
          </h1>
          <p className="text-gray-500">
            Welcome back! Here's an overview of your marketplace.
          </p>
        </div>

        <Link
          href="/templates/create"
          className="rounded-xl bg-black px-5 py-2 text-white hover:bg-gray-800"
        >
          + New Template
        </Link>
      </div>

      {/* Stats */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((item) => (
          <div
            key={item.title}
            className="rounded-2xl border bg-white p-6 shadow-sm"
          >
            <p className="text-sm text-gray-500">
              {item.title}
            </p>

            <h2
              className={`mt-2 text-3xl font-bold ${item.color}`}
            >
              {item.value}
            </h2>
          </div>
        ))}
      </div>

      {/* Recent Templates */}
      <div className="rounded-2xl border bg-white">
        <div className="border-b p-6">
          <h2 className="text-xl font-semibold">
            Recent Templates
          </h2>
        </div>

        <div className="divide-y">
          {recentTemplates.map((template) => (
            <div
              key={template.id}
              className="flex items-center justify-between p-6"
            >
              <div>
                <h3 className="font-medium">
                  {template.title}
                </h3>

                <p className="text-sm text-gray-500">
                  {template.status}
                </p>
              </div>

              <Link
                href={`/templates/${template.id}`}
                className="rounded-lg border px-4 py-2 hover:bg-gray-50"
              >
                View
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Sales */}
      <div className="rounded-2xl border bg-white p-6">
        <h2 className="mb-4 text-xl font-semibold">
          Recent Sales
        </h2>

        <div className="space-y-3">
          <div className="flex justify-between">
            <span>Portfolio Website</span>
            <span className="font-semibold">$49</span>
          </div>

          <div className="flex justify-between">
            <span>Admin Dashboard</span>
            <span className="font-semibold">$79</span>
          </div>

          <div className="flex justify-between">
            <span>E-Commerce UI Kit</span>
            <span className="font-semibold">$99</span>
          </div>
        </div>
      </div>
    </div>
  );
}