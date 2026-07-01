// src/features/templates/components/TemplateStats.tsx
"use client";

import { useSelector } from "react-redux";
import { RootState } from "@/store";

export default function TemplateStats() {
  // 1. Extract raw template slice tracking keys
  const { items: rawItems } = useSelector((state: RootState) => state.templates);

  // 2. Strict Type Guard Defend Line: Guarantees filter methods never run against undefined/object classes
  const items = Array.isArray(rawItems) ? rawItems : [];

  // 3. Compute metric counters with property-safety checks
  const totalTemplates = items.length;
  
  const publishedCount = items.filter(item => item && item.isPublished).length;
  
  const draftCount = Math.max(0, totalTemplates - publishedCount);

  // Accumulate catalog value across valid items tracking sales indices
  const totalRevenue = items.reduce((accumulator, item) => {
    if (!item) return accumulator;
    const saleRevenue = (item.price || 0) * (item.salesCount || 0);
    return accumulator + saleRevenue;
  }, 0);

  // 4. Map into stylized grid presentation nodes
  const dynamicStats = [
    {
      title: "Total Templates",
      value: totalTemplates,
      icon: "📦",
      colorClass: "bg-blue-50 text-blue-600 border-blue-100",
    },
    {
      title: "Published",
      value: publishedCount,
      icon: "✅",
      colorClass: "bg-green-50 text-green-600 border-green-100",
    },
    {
      title: "Drafts",
      value: draftCount,
      icon: "📝",
      colorClass: "bg-amber-50 text-amber-600 border-amber-100",
    },
    {
      title: "Revenue",
      value: new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        maximumFractionDigits: 0
      }).format(totalRevenue),
      icon: "💰",
      colorClass: "bg-emerald-50 text-emerald-600 border-emerald-100",
    },
  ];

  return (
    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
      {dynamicStats.map((stat) => (
        <div
          key={stat.title}
          className="rounded-xl border bg-white p-5 shadow-sm flex items-center justify-between transition-all hover:shadow-md"
        >
          <div>
            <p className="text-sm font-medium text-gray-400">
              {stat.title}
            </p>
            <h2 className="mt-2 text-3xl font-bold text-gray-900 tracking-tight">
              {stat.value}
            </h2>
          </div>
          
          <div className={`h-12 w-12 rounded-xl flex items-center justify-center text-xl border ${stat.colorClass}`}>
            {stat.icon}
          </div>
        </div>
      ))}
    </div>
  );
}