"use client";

import React, { useState } from "react";
import { Menu, Book,MessageSquareX } from "lucide-react";
import { Button } from "@/components/Common";
import { ActiveLink } from "@/components/Utility";

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

const MobileDropDown = ({ pathname, links = [], actions = null }) => {
  const [open, setOpen] = useState(false);

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      {/* Trigger */}
      <DropdownMenuTrigger asChild>
        <button className="bg-gray-200 border-2 border-gray-300 p-1.5 rounded-full" size="icon" aria-label="Toggle menu">
          {open ? (
            <MessageSquareX color="red" size={24} />
          ) : (
            <Menu size={24} className="text-indigo-800" />
          )}
        </button>
      </DropdownMenuTrigger>

      {/* Content */}
      <DropdownMenuContent
        align="end"
        className="w-80 p-4 md:hidden space-y-2"
      >
        {/* Links */}
        <div className="flex flex-col space-y-2">
          {links.map((link) => (
            <DropdownMenuItem
              key={link.name}
              asChild
              className="p-0 focus:bg-transparent"
            >
              <ActiveLink
                href={link.href}
                pathname={pathname}
                className="block w-full px-3 py-2 rounded-md text-sm hover:bg-slate-100 transition"
              >
                {link.name}
              </ActiveLink>
            </DropdownMenuItem>
          ))}
        </div>

        {/* Actions */}
        {actions && (
          <div className="flex gap-8 justify items-center mt-4 border-t pt-3 space-y-2">
            {actions}
          </div>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default MobileDropDown;