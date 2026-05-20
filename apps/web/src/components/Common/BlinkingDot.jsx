import React from "react";

const BlinkingDot = ({ delay = "0s" }) => {
  return (
    <span className="relative flex h-2 w-2">
      <span
        className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"
        style={{ animationDelay: delay }}
      ></span>
      <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
    </span>
  );
};

export default BlinkingDot;