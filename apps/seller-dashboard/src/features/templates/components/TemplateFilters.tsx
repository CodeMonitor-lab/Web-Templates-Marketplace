"use client";

export default function TemplateFilters() {
  return (
    <div className="flex flex-col gap-4 rounded-xl border bg-white p-4 md:flex-row">
      <input
        type="text"
        placeholder="Search templates..."
        className="flex-1 rounded-lg border px-4 py-2 outline-none focus:ring-2 focus:ring-black"
      />

      <select className="rounded-lg border px-4 py-2">
        <option>All Categories</option>
        <option>Portfolio</option>
        <option>Business</option>
        <option>Dashboard</option>
        <option>E-Commerce</option>
      </select>

      <select className="rounded-lg border px-4 py-2">
        <option>All Status</option>
        <option>Published</option>
        <option>Draft</option>
      </select>
    </div>
  );
}