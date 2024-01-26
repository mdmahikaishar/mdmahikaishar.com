"use client";
import { createContext, ReactNode, useContext, useState } from "react";

type Theme = "dark" | "light";

interface IThemeContext {
  name: Theme;
  change: () => void;
}

const ThemeContext = createContext({} as IThemeContext);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState({
    name: "dark" as Theme,
  });

  const change = () => {
    setState((pre) => ({
      ...pre,
      name: pre.name === "dark" ? "light" : "dark"
    }))
  };

  return (
    <ThemeContext.Provider value={{ ...state, change }}>
      <div className={state.name === "dark" ? "" : "light"} id="app">
        {children}
      </div>
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
