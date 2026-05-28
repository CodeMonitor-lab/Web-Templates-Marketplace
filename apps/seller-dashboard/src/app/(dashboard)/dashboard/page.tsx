export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Dashboard</h1>

      <div className="grid gap-4 md:grid-cols-3">
        <div className="rounded-2xl border p-6">Total Sales</div>
        <div className="rounded-2xl border p-6">Templates</div>
        <div className="rounded-2xl border p-6">Revenue</div>
      </div>
    </div>
  );
}