"use client";

import { useState } from "react";

import Button from "@/components/ui/Button";
import Select from "@/components/ui/Select";

export default function OrderFilters() {
  const [status, setStatus] = useState("");

  return (
    <div className="rounded-xl border bg-white p-5 shadow-sm">
      <div className="flex flex-col gap-4 md:flex-row md:items-end">
        <div className="flex-1">
          <Select
            label="Order Status"
            value={status}
            onChange={(e) =>
              setStatus(e.target.value)
            }
          >
            <option value="">
              All Orders
            </option>
            <option value="Pending">
              Pending
            </option>
            <option value="Processing">
              Processing
            </option>
            <option value="Completed">
              Completed
            </option>
            <option value="Cancelled">
              Cancelled
            </option>
          </Select>
        </div>

        <Button>
          Apply Filters
        </Button>

        <Button variant="outline">
          Reset
        </Button>
      </div>
    </div>
  );
}