"use client";
import { createContext, ReactNode, useContext, useState } from "react";

interface IAppContext {
  dark: boolean;
  changeTheme: () => void;
}

const AppContext = createContext({} as IAppContext);

export function AppContextProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState({
    dark: true,
  });

  const changeTheme = () => setState((pre) => ({ ...pre, dark: !pre.dark }));

  return (
    <AppContext.Provider value={{ ...state, changeTheme }}>
      <div className={state.dark ? "" : "light"} id="app">
        {children}
      </div>
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
