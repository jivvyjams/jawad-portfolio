import { useState } from "react";

export default function Header() {
  const [isDark, setIsDark] = useState(false);

  function handleThemeToggle() {
    setIsDark((prev) => !prev);
    document.documentElement.classList.toggle("dark-mode");
  }

  return (
    <header>
      <img
        className="profile"
        src="/src/assets/cool.png"
        alt="grinning smiley face with sunglasses giving thumbs up"
        width="200"
      />
      <div className="title">
        <h1>Jawad Al Bdiwi</h1>
        <p>Hello and welcome to my portfolio page!</p>
      </div>
      <button
        className="theme-toggle"
        id="theme-toggle"
        onClick={handleThemeToggle}
      >
        <img
          className="theme-icon"
          src={
            isDark
              ? "/src/assets/dark-theme.svg"
              : "/src/assets/light-theme.svg"
          }
          alt="theme toggle icon"
        />
        {isDark ? "Light mode" : "Dark mode"}
      </button>
    </header>
  );
}
