"use client";

import { useEffect, useState } from "react";

export default function CommandSearch() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");

  const commands = [
    { name: "Dashboard", path: "/dashboard" },
    { name: "Settings", path: "/settings" },
    { name: "Billing", path: "/billing" },
    { name: "Docs", path: "/docs" },
  ];

  // ⌘K / Ctrl+K shortcut
  useEffect(() => {
    const down = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((prev) => !prev);
      }
    };
    window.addEventListener("keydown", down);
    return () => window.removeEventListener("keydown", down);
  }, []);

  const filtered = commands.filter((cmd) =>
    cmd.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <>
      {/* Trigger Button */}
      <button
        onClick={() => setOpen(true)}
        className="flex items-center gap-2 px-3 py-1.5 border rounded-lg text-sm text-gray-500 hover:bg-gray-100"
      >
        🔍
        <span className="ml-auto text-xs bg-gray-200 px-1 rounded">⌘K</span>
      </button>

      {/* Modal */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 flex items-start justify-center pt-24 z-50"
          onClick={() => setOpen(false)}
        >
          <div
            className="w-full max-w-lg bg-white rounded-xl shadow-lg p-4"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Input */}
            <input
              autoFocus
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search..."
              className="w-full px-3 py-2 border rounded-lg mb-3 outline-none"
            />

            {/* Results */}
            <div className="max-h-60 overflow-y-auto">
              {filtered.length > 0 ? (
                filtered.map((item, i) => (
                  <div
                    key={i}
                    className="px-3 py-2 rounded-lg hover:bg-gray-100 cursor-pointer"
                    onClick={() => {
                      window.location.href = item.path;
                      setOpen(false);
                    }}
                  >
                    {item.name}
                  </div>
                ))
              ) : (
                <p className="text-sm text-gray-500 px-2">
                  No results found
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}