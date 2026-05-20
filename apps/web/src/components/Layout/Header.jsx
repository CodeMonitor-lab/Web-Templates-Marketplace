"use client";

import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import {
  Logo,
  CommandSearch,
  NotificationIcon,
  DarkMode,
  CreateAC,
  Button,
} from "@/components/Common";
import { MobileDropDown } from "@/components/Utility";
import { SpeakSearch } from "@/components/Features";
import navLinks from "@/data/navlinks";

const Header = () => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

  // Scroll effect
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 10);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-sm"
          : "bg-white"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center h-16 px-4 md:px-6">
        {/* Logo */}
        <Logo />

        {/* Desktop Navigation */}
        <nav className="hidden md:flex ml-10 space-x-6 text-sm font-medium">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;

            return (
              <Button
                key={link.name}
                variant="link"
                size="sm"
                className={isActive ? "text-blue-600 font-semibold" : ""}
              >
                {link.name}
              </Button>
            );
          })}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex flex-1 justify-end items-center space-x-3">
          <CommandSearch />
          <NotificationIcon />
          <DarkMode />
          <CreateAC />
        </div>

        {/* ✅ Mobile Actions (small icons) */}
        <div className="md:hidden flex items-center space-x-2 ml-auto">
          {/* <CommandSearch /> */}
          <SpeakSearch />
          <DarkMode />

          <MobileDropDown
            pathname={pathname}
            links={navLinks}
            actions={
              <>
                <NotificationIcon />
                <CreateAC />
              </>
            }
          />
        </div>
      </div>
    </header>
  );
};

export default Header;