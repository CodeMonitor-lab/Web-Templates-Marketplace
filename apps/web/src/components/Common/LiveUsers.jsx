"use client";

import React, { useEffect, useState } from "react";

const LiveUsers = () => {
  const [count, setCount] = useState(120);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => {
        const change = Math.floor(Math.random() * 5) - 2; // -2 to +2
        let next = prev + change;

        // Keep within realistic range
        if (next < 110) next = 110;
        if (next > 140) next = 140;

        return next;
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <span className="text-xs text-gray-500">
      {count}+ users active now
    </span>
  );
};

export default LiveUsers;