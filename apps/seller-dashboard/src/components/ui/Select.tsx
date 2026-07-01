import {
  forwardRef,
  SelectHTMLAttributes,
} from "react";
import { cn } from "@/lib/utils";

interface SelectProps
  extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
}

const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ label, error, className, children, ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label className="mb-2 block text-sm font-medium text-gray-700">
            {label}
          </label>
        )}

        <select
          ref={ref}
          className={cn(
            "w-full rounded-lg border border-gray-300 bg-white px-3 py-2 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20",
            error && "border-red-500",
            className
          )}
          {...props}
        >
          {children}
        </select>

        {error && (
          <p className="mt-1 text-sm text-red-500">
            {error}
          </p>
        )}
      </div>
    );
  }
);

Select.displayName = "Select";

export default Select;