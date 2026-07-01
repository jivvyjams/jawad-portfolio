import { createContext, useContext, useState, type ReactNode } from "react";

type ThemeContextValue = {
  dark: boolean;
  toggleDark: () => void;
};

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [dark, setDark] = useState(() =>
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

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
