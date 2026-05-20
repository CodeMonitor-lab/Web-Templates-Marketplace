import React from "react";
import { Search } from "lucide-react";

const InputSearch = ({ placeholder = "Search...", value, onChange }) => {
  return (
    <div className="w-full max-w-md mx-auto relative">
      {/* Search Icon */}
      <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
        <Search className="w-4 h-4 text-pink-500" />
      </div>

      {/* Input */}
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full pl-10 pr-4 py-2 rounded-lg border border-pink-300 placeholder-pink-400 focus:border-pink-500 focus:ring focus:ring-pink-200 outline-none transition text-gray-800 dark:text-white dark:bg-gray-800 dark:border-pink-500"
      />
    </div>
  );
};

export default InputSearch;
