"use client";

import React, { useState } from "react";
import { Mic, Volume2 } from "lucide-react";
import { Button } from "@/components/Common";

const SpeakSearch = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      {/* Toggle */}
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-200 dark:bg-gray-700 text-sm transition"
      >
        {open ? (
          <>
            <Volume2 size={16} className="text-black dark:text-white" />
            <span className="text-black dark:text-white">Listening</span>
          </>
        ) : (
          <>
            <Mic size={16} className="text-green-500" />
            <span className="text-slate-700 dark:text-slate-200">Search</span>
          </>
        )}
      </button>

      {/* Popup */}
      {open && (
        <div className="absolute right-0 mt-2 w-64 bg-white dark:bg-gray-800 border border-slate-200 dark:border-gray-700 shadow-lg rounded-xl p-4 z-50">
          <p className="text-sm text-slate-600 dark:text-slate-300 text-center">
            🎤 Voice search
          </p>

          <div className="mt-4 flex justify-center">
            <div className="w-12 h-12 rounded-full bg-slate-100 dark:bg-gray-700 flex items-center justify-center animate-pulse">
              <Mic size={20} className="text-slate-600 dark:text-white" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SpeakSearch;