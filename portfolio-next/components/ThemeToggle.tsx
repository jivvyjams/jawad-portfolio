"use client";

import { useTheme } from "../hooks/useTheme";

export default function ThemeToggle() {
  const { dark, toggleDark } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleDark}
      className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border-2 border-alt bg-[#e8d4c4] text-fg hover:scale-110 hover:border-fg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fg focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
    >
      <img
        src={dark ? "/light-theme.svg" : "/dark-theme.svg"}
        className="h-6 w-6"
        alt=""
      />
    </button>
  );
}
