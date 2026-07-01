import { TableHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type TableProps = TableHTMLAttributes<HTMLTableElement>;

export default function Table({
  className,
  children,
  ...props
}: TableProps) {
  return (
    <div className="overflow-x-auto">
      <table
        className={cn("w-full border-collapse", className)}
        {...props}
      >
        {children}
      </table>
    </div>
  );
}