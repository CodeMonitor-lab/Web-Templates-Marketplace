"use client";

type ErrorPageProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function ErrorPage({
  error,
  reset,
}: ErrorPageProps) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4">
      <h1 className="text-3xl font-bold">
        Something went wrong
      </h1>

      <p className="text-gray-600">
        {error.message}
      </p>

      <button
        onClick={() => reset()}
        className="rounded-lg bg-black px-4 py-2 text-white"
      >
        Try Again
      </button>
    </div>
  );
}