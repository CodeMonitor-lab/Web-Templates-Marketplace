"use client";

interface ErrorMessageProps {
  message?: string;
}

export default function ErrorMessage({
  message,
}: ErrorMessageProps) {
  if (!message) return null;

  return (
    <div className="rounded-md border border-red-200 bg-red-50 p-3 text-sm text-red-600">
      {message}
    </div>
  );
}