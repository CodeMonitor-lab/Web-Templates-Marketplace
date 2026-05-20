"use client";

import React from "react";
import {ActiveLink} from "@/components/Utility";
import navLinks from "@/data/navlinks";

const NavbarLinks = ({ pathname, direction = "horizontal", onClick }) => {
  return (
    <>
      {navLinks.map((link) => (
        <ActiveLink
          key={link.name}
          href={link.href}
          pathname={pathname}
          direction={direction}
          onClick={onClick}
        >
          {link.name}
        </ActiveLink>
      ))}
    </>
  );
};

export default NavbarLinks;