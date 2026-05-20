"use client";

import React, { useEffect } from "react";
import { X } from "lucide-react";
import clsx from "clsx";

const Modal = ({ isOpen, onClose, children, size = "md" }) => {
  // Prevent background scroll when modal is open
  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";

    return () => (document.body.style.overflow = "auto");
  }, [isOpen]);

  if (!isOpen) return null;

  const sizes = {
    sm: "w-96",
    md: "w-[500px]",
    lg: "w-[700px]",
  };

  return (
    <div
      className="fixed inset-100 flex items-center justify-center bg-black/40 px-4"
      onClick={onClose} // close on overlay click
    >
      <div
        className={clsx(
          "bg-white rounded-xl p-6 relative shadow-xl max-h-[90vh] overflow-y-auto w-full sm:w-auto",
          sizes[size]
        )}
        onClick={(e) => e.stopPropagation()} // prevent close on modal click
      >
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          onClick={onClose}
        >
          <X className="h-5 w-5" />
        </button>

        {children}
      </div>
    </div>
  );
};

export default Modal;