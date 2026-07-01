"use client";

import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";

export default function OrderToolbar() {
  return (
    <div className="flex flex-col gap-4 rounded-xl border bg-white p-5 shadow-sm lg:flex-row lg:items-center lg:justify-between">
      <Input
        placeholder="Search by Order ID or Customer..."
        className="lg:max-w-md"
      />

      <div className="flex flex-wrap gap-3">
        <Button variant="outline">
          Export
        </Button>

        <Button variant="outline">
          Refresh
        </Button>
      </div>
    </div>
  );
}