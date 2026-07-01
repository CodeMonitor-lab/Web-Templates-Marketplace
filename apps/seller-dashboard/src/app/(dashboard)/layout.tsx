import type { ReactNode } from "react";

import { DashboardLayout } from "@/components/layout";

interface DashboardGroupLayoutProps {
  children: ReactNode;
}

export default function DashboardGroupLayout({
  children,
}: DashboardGroupLayoutProps) {
  return <DashboardLayout>{children}</DashboardLayout>;
}