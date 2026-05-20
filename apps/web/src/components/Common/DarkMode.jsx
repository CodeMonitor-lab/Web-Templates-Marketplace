"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(() => {
    if (typeof window === "undefined") return false;
    return localStorage.getItem("theme") === "dark";
  });

  // Sync DOM class with current theme state
  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  const toggleTheme = () => {
    const isDark = document.documentElement.classList.toggle("dark");
    localStorage.setItem("theme", isDark ? "dark" : "light");
    setDark(isDark);
  };

  return (
    <button
      onClick={toggleTheme}
      className="relative w-12 h-6 flex items-center bg-gray-300 dark:bg-gray-700 rounded-full p-1 transition"
    >
      <div
        className={`w-4 h-4 bg-white rounded-full shadow-md transform transition ${
          dark ? "translate-x-6" : "translate-x-0"
        }`}
      />

      {/* Optional icons */}
      <span className="absolute left-1 text-xs">🌞</span>
      <span className="absolute right-1 text-xs">🌙</span>
    </button>
  );
}
