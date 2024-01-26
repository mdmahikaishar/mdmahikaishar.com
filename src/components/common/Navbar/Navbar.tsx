"use client";
import React, { useState } from "react";
import { NAV_LINKS } from "@/data";
import NavbarLink from "./NavbarLink";
import styles from "./Navbar.module.scss";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("#home");

  return (
    <nav className={"container"}>
      <div className={styles.container}>
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
