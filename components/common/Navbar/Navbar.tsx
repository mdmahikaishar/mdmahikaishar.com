"use client";
import React, { useState } from "react";
import { NavbarLink } from ".";
import { NAV_LINKS } from "@data";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("#home");

  return (
    <nav className="nav container">
      <div className="navContainer">
        {NAV_LINKS.map((link, index) => (
          <NavbarLink
            {...link}
            active={activeSection === link.href}
            onClick={setActiveSection}
            key={index}
          />
        ))}
      </div>
    </nav>
  );
}
