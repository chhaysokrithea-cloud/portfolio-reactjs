import React from "react";
import lightmode from "../assets/image/light-mode-icon.png";
import darkmode from "../assets/image/dark-mode-icon.png";

const DarkMode = () => {
  const [theme, setTheme] = React.useState(() => {
    // Safe SSR check
    if (typeof window === "undefined") return "light";

    const saved = window.localStorage.getItem("theme");
    if (saved) return saved;

    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  });

  // Apply theme to <html> element
  React.useEffect(() => {
    const root = document.documentElement;

    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }

    window.localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="relative p-2 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 dark:focus:ring-gray-600"
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
    >
      <img
        src={theme === "dark" ? lightmode : darkmode}
        alt={theme === "dark" ? "Light mode" : "Dark mode"}
        className="w-10 h-10 object-contain transition-transform duration-300 hover:scale-110"
      />
    </button>
  );
};

export default DarkMode;