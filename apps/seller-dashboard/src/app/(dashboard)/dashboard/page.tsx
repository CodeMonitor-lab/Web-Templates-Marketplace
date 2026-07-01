// src/app/dashboard/page.tsx
"use client";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store";
import { fetchTemplatesThunk } from "@/features/templates/store";
// Assuming you have an orders/dashboard metrics slice setup similarly:
// import { fetchDashboardMetricsThunk } from "@/features/dashboard/store";

import {
  DashboardStats,
  RevenueChart,
  TopTemplates,
  RecentOrders,
  RecentTemplates,
  RecentActivity,
  QuickActions,
} from "@/features/dashboard/components";

export default function DashboardPage() {
  const dispatch = useDispatch<AppDispatch>();
  
  // Extract global loading indicators across your key domains
  const templatesLoading = useSelector((state: RootState) => state.templates.loading);
  const templates = useSelector((state: RootState) => state.templates.items);

  useEffect(() => {
    // Hydrate the template collection so child list charts have fresh data
    dispatch(fetchTemplatesThunk());
    
    // If you have a primary analytics data loader, fire it here:
    // dispatch(fetchDashboardMetricsThunk());
  }, [dispatch]);

  // Provide a clean layout shell placeholder if the initial load is processing
  const isInitialLoading = templatesLoading && templates.length === 0;

  if (isInitialLoading) {
    return (
      <div className="flex h-[70vh] w-full flex-col items-center justify-center gap-3">
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-blue-600 border-t-transparent" />
        <p className="text-sm font-medium text-gray-500 animate-pulse">Assembling dashboard metrics...</p>
      </div>
    );
  }

  return (
    <div className="space-y-8 max-w-[1600px] mx-auto p-4 md:p-6 transition-all duration-300">
      {/* 1. Control Palette */}
      <QuickActions />

      {/* 2. Numerical Scorecard Row */}
      <DashboardStats />

      {/* 3. Analytics & High-Performer Analytics Split */}
      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2 bg-white p-5 border rounded-xl shadow-sm h-full flex flex-col justify-between">
          <RevenueChart />
        </div>

        <div className="bg-white p-5 border rounded-xl shadow-sm h-full">
          <TopTemplates />
        </div>
      </div>

      {/* 4. Log Entries Split View */}
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="bg-white p-5 border rounded-xl shadow-sm">
          <RecentOrders />
        </div>
        <div className="bg-white p-5 border rounded-xl shadow-sm">
          <RecentActivity />
        </div>
      </div>

      {/* 5. Complete Catalog Feed Section */}
      <div className="bg-white p-5 border rounded-xl shadow-sm">
        <RecentTemplates />
      </div>
    </div>
  );
}