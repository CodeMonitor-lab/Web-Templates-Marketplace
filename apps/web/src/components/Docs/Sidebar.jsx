"use client";

import { useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";

// ✅ Import docs data from JSON
import docs from "./docs.json";

export default function DocsSidebar({ onNavigate, activeId }) {
  const [openSections, setOpenSections] = useState({});

  const toggleSection = (title) => {
    setOpenSections((prev) => ({
      ...prev,
      [title]: !prev[title],
    }));
  };

  return (
    <div className="w-72 h-screen sticky top-0 bg-gray-50 border-r p-4 overflow-y-auto">
      <h2 className="text-xl font-semibold mb-4">Documentation</h2>
      <nav className="space-y-2">
        {docs.map((section) => (
          <div key={section.title}>
            <button
              onClick={() => toggleSection(section.title)}
              className="flex items-center justify-between w-full text-left px-2 py-2 rounded-lg hover:bg-gray-100"
            >
              <span className="font-medium">{section.title}</span>
              {openSections[section.title] ? (
                <ChevronDown size={16} />
              ) : (
                <ChevronRight size={16} />
              )}
            </button>

            {openSections[section.title] && (
              <ul className="ml-4 mt-2 space-y-1">
                {section.items.map((item) => (
                  <li
                    key={item.id}
                    onClick={() => onNavigate?.(item.id)}
                    className={`text-sm cursor-pointer px-2 py-1 rounded-md transition ${
                      activeId === item.id
                        ? "bg-gray-200 text-black font-medium"
                        : "text-gray-600 hover:text-black hover:bg-gray-100"
                    }`}
                  >
                    {item.label}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </nav>
    </div>
  );
}
