import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background px-6 text-center">
      <h1 className="text-6xl font-bold tracking-tight">404</h1>
      <h2 className="mt-4 text-2xl font-semibold">Page Not Found</h2>
      <p className="mt-2 max-w-md text-sm text-muted-foreground">
        Sorry, the page you are looking for does not exist or has been moved.
      </p>

      <Link
        href="/"
        className="mt-6 rounded-2xl bg-primary px-5 py-3 text-sm font-medium text-primary-foreground shadow transition hover:opacity-90"
      >
        Go Back Home
      </Link>
    </div>
  );
}
