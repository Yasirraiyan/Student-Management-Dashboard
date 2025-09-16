import React, { createContext, useState } from "react";
//import { useRouteError } from "react-router-dom";
export const ThemeContext = createContext();
export const ThemeContextProvider = ({ children }) => {
  const [themeContext, setThemeContext] = useState("light");

  const toggleTheme = () => {
    setThemeContext(themeContext === "light" ? "dark" : "light");
  };
  return (
    <ThemeContext.Provider value={{ themeContext, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
