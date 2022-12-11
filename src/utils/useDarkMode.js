import { useEffect, useState } from "react";
const useDarkMode = () => {
  const [theme, setIsDarkMode] = useState(localStorage.theme === "dark");

  const setTheme = () => {
    setIsDarkMode(!theme);
  };

  useEffect(() => {
    const root = window.document.documentElement;

    const prevTheme = theme ? "light" : "dark";
    root.classList.remove(prevTheme);

    const nextTheme = theme ? "dark" : "light";
    root.classList.add(nextTheme);

    localStorage.setItem("theme", nextTheme);
  }, [theme]);

  return [theme, setTheme];
};
export default useDarkMode;
