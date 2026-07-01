"use client";

import { SelectHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type DropdownProps = SelectHTMLAttributes<HTMLSelectElement>;

export default function Dropdown({
  className,
  children,
  ...props
}: DropdownProps) {
  return (
    <select
      className={cn(
        "w-full rounded-md border px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500",
        className
      )}
      {...props}
    >
      {children}
    </select>
  );
}