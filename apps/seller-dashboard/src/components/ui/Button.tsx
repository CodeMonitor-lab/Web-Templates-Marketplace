import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "secondary" | "outline" | "destructive" | "ghost";
  size?: "sm" | "md" | "lg";
  loading?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "default",
      size = "md",
      loading,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    const variants = {
      default: "bg-blue-600 text-white hover:bg-blue-700",
      secondary: "bg-gray-700 text-white hover:bg-gray-800",
      outline: "border border-gray-300 hover:bg-gray-100",
      destructive: "bg-red-600 text-white hover:bg-red-700",
      ghost: "hover:bg-gray-100",
    };

    const sizes = {
      sm: "h-9 px-3 text-sm",
      md: "h-10 px-4",
      lg: "h-12 px-6 text-lg",
    };

    return (
      <button
        ref={ref}
        disabled={disabled || loading}
        className={cn(
          "inline-flex items-center justify-center rounded-md font-medium transition disabled:opacity-50 disabled:pointer-events-none",
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      >
        {loading && (
          <svg
            className="mr-2 h-4 w-4 animate-spin"
            viewBox="0 0 24 24"
            fill="none"
          >
            <circle
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
              opacity=".25"
            />
            <path
              fill="currentColor"
              d="M22 12A10 10 0 0012 2v4a6 6 0 016 6h4z"
            />
          </svg>
        )}

        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;