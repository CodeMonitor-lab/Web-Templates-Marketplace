import { ButtonHTMLAttributes } from "react";

import { cn } from "@/lib/utils/cn";

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost";
}

export default function Button({
  className,
  variant = "default",
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-xl px-4 py-2.5 text-sm font-medium transition-all",
        "disabled:pointer-events-none disabled:opacity-50",
        {
          "bg-black text-white hover:opacity-90":
            variant === "default",

          "border border-border bg-background hover:bg-muted":
            variant === "outline",

          "hover:bg-muted":
            variant === "ghost",
        },
        className
      )}
      {...props}
    />
  );
}