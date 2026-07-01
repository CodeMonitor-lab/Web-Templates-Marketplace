"use client";

import { Card } from "@/components/ui";
import { Button } from "@/components/ui";
import { useState } from "react";

export default function AppearancePage() {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [density, setDensity] = useState<"comfortable" | "compact">(
    "comfortable"
  );

  const handleSave = () => {
    // later connect to theme provider / API
    console.log({ theme, density });
    alert("Appearance settings saved (mock)");
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h2 className="text-lg font-semibold">Appearance</h2>
        <p className="text-sm text-gray-500">
          Customize how your dashboard looks
        </p>
      </div>

      {/* Theme Selection */}
      <Card className="p-5 space-y-4">
        <h3 className="font-medium">Theme</h3>

        <div className="flex gap-4">
          <button
            onClick={() => setTheme("light")}
            className={`px-4 py-2 rounded border ${
              theme === "light"
                ? "bg-gray-900 text-white"
                : "bg-white text-black"
            }`}
          >
            Light
          </button>

          <button
            onClick={() => setTheme("dark")}
            className={`px-4 py-2 rounded border ${
              theme === "dark"
                ? "bg-gray-900 text-white"
                : "bg-white text-black"
            }`}
          >
            Dark
          </button>
        </div>
      </Card>

      {/* Layout Density */}
      <Card className="p-5 space-y-4">
        <h3 className="font-medium">Layout Density</h3>

        <div className="flex gap-4">
          <button
            onClick={() => setDensity("comfortable")}
            className={`px-4 py-2 rounded border ${
              density === "comfortable"
                ? "bg-blue-600 text-white"
                : "bg-white"
            }`}
          >
            Comfortable
          </button>

          <button
            onClick={() => setDensity("compact")}
            className={`px-4 py-2 rounded border ${
              density === "compact"
                ? "bg-blue-600 text-white"
                : "bg-white"
            }`}
          >
            Compact
          </button>
        </div>
      </Card>

      {/* Save */}
      <div className="flex justify-end">
        <Button onClick={handleSave}>Save Changes</Button>
      </div>
    </div>
  );
}