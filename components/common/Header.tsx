"use client";
import { useAppContext } from "context/App";
import React from "react";
import { BiMoon, BiSun } from "react-icons/bi";

export default function Header() {
  const appContext = useAppContext();

  return (
    <header className="header">
      <div className="headerContainer container">
        <a href="/" className="headerLogo">
          Kaishar
        </a>

        <button
          className="headerButton button"
          onClick={appContext.changeTheme}
        >
          {appContext.dark ? <BiSun /> : <BiMoon />}
        </button>
      </div>
    </header>
  );
}
