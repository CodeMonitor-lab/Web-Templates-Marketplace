"use client";

import { useState } from "react";

export default function NotificationIcon() {
  const [count] = useState(3); // 🔹 change dynamically later

  return (
    <div className="relative cursor-pointer">
      
      {/* Bell Icon (SVG minimal) */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6 text-gray-700"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 17h5l-1.5-1.5A2 2 0 0118 14.5V11a6 6 0 10-12 0v3.5c0 .4-.16.78-.44 1.06L4 17h5m6 0a3 3 0 11-6 0"
        />
      </svg>

      {/* Notification Badge */}
      {count > 0 && (
        <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs px-1.5 rounded-full">
          {count}
        </span>
      )}
    </div>
  );
}