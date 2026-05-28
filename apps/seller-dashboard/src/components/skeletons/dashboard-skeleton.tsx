export default function DashboardSkeleton() {
    return (
      <div className="space-y-4">
        <div className="h-10 w-60 animate-pulse rounded bg-muted" />
  
        <div className="grid gap-4 md:grid-cols-3">
          <div className="h-32 animate-pulse rounded-2xl bg-muted" />
          <div className="h-32 animate-pulse rounded-2xl bg-muted" />
          <div className="h-32 animate-pulse rounded-2xl bg-muted" />
        </div>
      </div>
    );
  }