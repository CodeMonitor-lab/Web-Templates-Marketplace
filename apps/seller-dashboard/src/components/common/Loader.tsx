"use client";

import Spinner from "../shared/Spinner";

interface LoaderProps {
  text?: string;
}

export default function Loader({
  text = "Loading...",
}: LoaderProps) {
  return (
    <div className="flex flex-col items-center justify-center gap-4 py-12">
      <Spinner size="lg" />
      <p className="text-sm text-gray-500">{text}</p>
    </div>
  );
}