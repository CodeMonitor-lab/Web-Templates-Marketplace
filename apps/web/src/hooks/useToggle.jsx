// hooks/useToggle.js
import { useState, useCallback } from "react";

/**
 * Advanced toggle hook
 * @param {boolean} initialState
 */
export const useToggle = (initialState = false) => {
  const [isOpen, setIsOpen] = useState(initialState);

  const show = useCallback(() => setIsOpen(true), []);
  const hide = useCallback(() => setIsOpen(false), []);
  const toggle = useCallback(() => setIsOpen((prev) => !prev), []);

  // Optional: force a specific value
  const set = useCallback((value) => {
    setIsOpen(!!value);
  }, []);

  return {
    isOpen,
    show,
    hide,
    toggle,
    set,        // safer controlled setter
    setIsOpen,  // keep if you really need raw access
  };
};