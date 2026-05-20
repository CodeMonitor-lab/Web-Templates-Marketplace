import React from "react";
import Link from "next/link";

const Logo = ({ className = "" }) => {
  return (
    <Link
      href="/"
      className={`flex items-center space-x-2 ${className}`}
    >
      {/* Icon */}
      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-900 text-white">
        <div className="h-4 w-4 rounded-full bg-white" />
      </div>

      {/* Text */}
      <span className="font-bold text-slate-900 dark:text-white">
        FutureApp
      </span>
    </Link>
  );
};

export default Logo;