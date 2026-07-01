"use client";

import Button from "@/components/ui/Button";

interface EmptyStateProps {
  title?: string;
  description?: string;
  buttonText?: string;
  onClick?: () => void;
}

export default function EmptyState({
  title = "No Data Found",
  description = "There is nothing to display.",
  buttonText,
  onClick,
}: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center rounded-lg border border-dashed border-gray-300 bg-white py-16 px-6 text-center">
      <div className="mb-4 text-6xl">📦</div>

      <h2 className="text-xl font-semibold text-gray-900">
        {title}
      </h2>

      <p className="mt-2 max-w-md text-gray-500">
        {description}
      </p>

      {buttonText && (
        <Button className="mt-6" onClick={onClick}>
          {buttonText}
        </Button>
      )}
    </div>
  );
}