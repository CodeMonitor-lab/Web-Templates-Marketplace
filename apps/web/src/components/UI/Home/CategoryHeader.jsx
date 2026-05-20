'use client'

import React, { useState } from "react";
import categories from "@/data/category-header.json";

const CategoryBar = () => {
  const [activeCategory, setActiveCategory] = useState("discover");

  const handleClick = (slug) => {
    setActiveCategory(slug);
    console.log("Selected:", slug); // 👉 later use for filtering
  };

  return (
    <div className="overflow-x-auto border-b bg-white">
      <div className="flex gap-2 px-4 py-3 whitespace-nowrap">

        {/* Discover */}
        <button
          onClick={() => handleClick("discover")}
          className={`px-4 py-1.5 rounded-full text-xs font-medium transition ${
            activeCategory === "discover"
              ? "bg-blue-600 text-white"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          }`}
        >
          Discover
        </button>

        {/* Categories */}
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => handleClick(cat.slug)}
            className={`px-4 py-1.5 rounded-full text-xs font-medium transition ${
              activeCategory === cat.slug
                ? "bg-blue-600 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            {cat.title}
            {cat.count !== undefined && (
              <span className="ml-1 opacity-70">
                ({cat.count})
              </span>
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryBar;