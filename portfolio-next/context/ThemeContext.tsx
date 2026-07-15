"use client";

import { createContext, useState, type ReactNode } from "react";

export type ThemeContextValue = {
  dark: boolean;
  toggleDark: () => void;
};

export const ThemeContext = createContext<ThemeContextValue | undefined>(
  undefined,
);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [dark, setDark] = useState(
    () =>
      typeof window !== "undefined" &&
      document.documentElement.classList.contains("dark-mode"),
  );

  function toggleDark() {
    const next = document.documentElement.classList.toggle("dark-mode");
    setDark(next);
  }

  return (
    <ThemeContext.Provider value={{ dark, toggleDark }}>
      {children}
    </ThemeContext.Provider>
  );
}
