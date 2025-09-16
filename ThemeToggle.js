import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

const ThemeToggle = () => {
  const { themeContext, toggleTheme } = useContext(ThemeContext);

  return (
    <div>
      <p>Current Theme: {themeContext}</p>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
};

export default ThemeToggle;
