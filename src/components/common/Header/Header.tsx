"use client";
import React from "react";
import { useTheme } from "@/contexts/ThemeContext";
import { BiMoon, BiSun } from "react-icons/bi";
import { Logo } from "..";
import styles from "./Header.module.scss";

export default function Header() {
  const theme = useTheme();

  return (
    <header className={styles.header}>
      <div className={styles.container + " " + "container"}>
        <Logo />

        <button className={styles.button + " " + "button"} onClick={theme.change}>
          {theme.name === "dark" ? <BiSun /> : <BiMoon />}
        </button>
      </div>
    </header >
  );
}
