"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";

interface AvatarProps {
  src?: string;
  alt?: string;
  name?: string;
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
}

const sizes = {
  sm: "h-8 w-8",
  md: "h-10 w-10",
  lg: "h-14 w-14",
  xl: "h-20 w-20",
};

export default function Avatar({
  src,
  alt = "Avatar",
  name = "",
  size = "md",
  className,
}: AvatarProps) {
  const initials = name
    ? name
        .split(" ")
        .map((n) => n[0])
        .join("")
        .slice(0, 2)
        .toUpperCase()
    : "?";

  if (src) {
    return (
      <Image
        src={src}
        alt={alt}
        width={64}
        height={64}
        className={cn(
          "rounded-full object-cover",
          sizes[size],
          className
        )}
      />
    );
  }

  return (
    <div
      className={cn(
        "flex items-center justify-center rounded-full bg-blue-600 font-semibold text-white",
        sizes[size],
        className
      )}
    >
      {initials}
    </div>
  );
}