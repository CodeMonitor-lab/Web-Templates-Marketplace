import * as React from "react";
import { cn } from "@/lib/utils";

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, error, className, id, ...props }, ref) => {
    return (
      <div className="space-y-2">
        {label && (
          <label
            htmlFor={id}
            className="text-sm font-medium text-gray-700"
          >
            {label}
          </label>
        )}

        <textarea
          ref={ref}
          id={id}
          className={cn(
            "min-h-[120px] w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm outline-none resize-y",
            "focus:border-blue-500 focus:ring-2 focus:ring-blue-500",
            error && "border-red-500 focus:ring-red-500",
            className
          )}
          {...props}
        />

        {error && (
          <p className="text-sm text-red-500">
            {error}
          </p>
        )}
      </div>
    );
  }
);

Textarea.displayName = "Textarea";

export default Textarea;