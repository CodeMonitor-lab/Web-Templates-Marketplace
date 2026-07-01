import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {}

export default function Card({ className, ...props }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-xl border bg-white p-6 shadow-sm",
        className
      )}
      {...props}
    />
  );
}