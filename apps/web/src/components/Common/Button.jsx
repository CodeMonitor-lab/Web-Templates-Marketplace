"use client";

import React from "react";
import clsx from "clsx";

const Button = ({
  children,
  variant = "default",
  size = "default",
  className = "",
  cursor = "pointer", // default cursor
  color = "indigo",   // primary color
  ...props
}) => {
  const base =
    "inline-flex items-center justify-center rounded-md text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";

  const colors = {
    dark:{
        bg: "bg-gray-800",
        text: "text-white",
        hover: "hover:bg-gray-900",
        border: "border-gray-800",
    },
    indigo: {
      bg: "bg-indigo-600",
      text: "text-white",
      hover: "hover:bg-indigo-700",
      border: "border-indigo-600",
    },
    blue: {
      bg: "bg-blue-600",
      text: "text-white",
      hover: "hover:bg-blue-700",
      border: "border-blue-600",
    },
    green: {
      bg: "bg-green-600",
      text: "text-white",
      hover: "hover:bg-green-700",
      border: "border-green-600",
    },
    red: {
      bg: "bg-red-600",
      text: "text-white",
      hover: "hover:bg-red-700",
      border: "border-red-600",
    },
  };

  const selected = colors[color] || colors.indigo;

  const variants = {
    default: clsx(selected.bg, selected.text, selected.hover),
    outline: clsx("border", selected.border, selected.text, "hover:bg-gray-50"),
    ghost: clsx("bg-transparent", selected.text, "hover:bg-gray-100"),
  };

  const sizes = {
    default: "h-10 px-4 py-2",
    sm: "h-9 px-3",
    icon: "h-10 w-10",
  };

  return (
    <button
      className={clsx(base, variants[variant], sizes[size], className, `cursor-${cursor}`)}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;