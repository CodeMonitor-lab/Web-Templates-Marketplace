"use client";

import React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

/**
 * ActiveLink component highlights itself if its href matches the current pathname.
 * @param {string} href - The link URL.
 * @param {string} pathname - Current page pathname.
 * @param {React.ReactNode} children - Link text/content.
 * @param {string} direction - "horizontal" for desktop, "vertical" for mobile.
 * @param {function} onClick - Optional click handler (useful for closing mobile menu).
 */
const ActiveLink = ({ href, pathname = "", children, direction = "horizontal", onClick }) => {
  const isActive = pathname.startsWith(href);

  const baseClasses = "transition-colors font-medium flex items-center justify-between";
  const activeClasses = "text-slate-900 font-semibold";
  const inactiveClasses = "text-slate-600 hover:text-slate-900";

  return (
    <Link
      href={href}
      onClick={onClick}
      className={`${baseClasses} ${isActive ? activeClasses : inactiveClasses} ${
        direction === "vertical" ? "text-lg border-b pb-2" : ""
      }`}
    >
      {children}
      {direction === "vertical" && <ChevronRight className="h-4 w-4 text-slate-400" />}
    </Link>
  );
};

export default ActiveLink;