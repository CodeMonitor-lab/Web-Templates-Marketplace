"use client";

import stepsData from "@/data/get-started.json";
import { useState } from "react";

export default function GetStartedPage() {
  const [active, setActive] = useState(0);

  const totalSteps = stepsData.length;
  const progress = ((active + 1) / totalSteps) * 100;

  const nextStep = () => {
    if (active < totalSteps - 1) setActive(active + 1);
  };

  const prevStep = () => {
    if (active > 0) setActive(active - 1);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="w-full max-w-3xl bg-white rounded-2xl shadow-lg p-8">

        {/* HEADER */}
        <h1 className="text-3xl font-bold mb-2">Get Started</h1>
        <p className="text-gray-500 mb-6">
          Set up your SaaS in a few simple steps
        </p>

        {/* PROGRESS BAR */}
        <div className="w-full bg-gray-200 rounded-full h-2 mb-6">
          <div
            className="bg-blue-600 h-2 rounded-full transition-all"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* STEP INDICATOR */}
        <div className="flex justify-between text-sm text-gray-500 mb-6">
          <span>
            Step {active + 1} of {totalSteps}
          </span>
          <span>{Math.round(progress)}% Complete</span>
        </div>

        {/* STEP CONTENT */}
        <div className="transition-all duration-300">
          <h2 className="text-xl font-semibold mb-2">
            {stepsData[active].title}
          </h2>

          <p className="text-gray-600 mb-4">
            {stepsData[active].description}
          </p>

          <ul className="space-y-2 mb-6">
            {stepsData[active].steps.map((item, i) => (
              <li
                key={i}
                className="flex items-center gap-2 text-sm text-gray-700"
              >
                <span className="w-2 h-2 bg-blue-600 rounded-full" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* NAVIGATION */}
        <div className="flex justify-between items-center">

          <button
            onClick={prevStep}
            disabled={active === 0}
            className="px-4 py-2 rounded-lg border text-gray-600 disabled:opacity-40"
          >
            Previous
          </button>

          {active === totalSteps - 1 ? (
            <button
              className="px-6 py-2 rounded-lg bg-blue-600 text-white hover:opacity-90"
              onClick={() => alert("🚀 Launching Dashboard...")}
            >
              Go to Dashboard
            </button>
          ) : (
            <button
              onClick={nextStep}
              className="px-6 py-2 rounded-lg bg-blue-600 text-white hover:opacity-90"
            >
              Continue
            </button>
          )}
        </div>

        {/* STEP DOTS */}
        <div className="flex justify-center mt-6 gap-2">
          {stepsData.map((_, i) => (
            <div
              key={i}
              className={`h-2 w-2 rounded-full ${
                i === active ? "bg-blue-600" : "bg-gray-300"
              }`}
            />
          ))}
        </div>

      </div>
    </div>
  );
}