"use client";

import Link from "next/link";

interface LogoProps {
  title?: string;
}

export default function Logo({
  title = "BrandBuilder",
}: LogoProps) {
  return (
    <Link
      href="/dashboard"
      className="flex items-center gap-2"
    >
      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600 text-lg font-bold text-white">
        B
      </div>

      <div>
        <h2 className="text-lg font-bold">
          {title}
        </h2>
      </div>
    </Link>
  );
}