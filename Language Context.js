import React, { createContext, useState } from "react";
export const LanguageContext = createContext();

export const LanguageContextProvider = ({ children }) => {
  const [languageContext, setlanguageContext] = useState("en");

  const toggleLanguage = () => {
    setlanguageContext(languageContext === "en" ? "bn" : "en");
  };
  return (
    <LanguageContext.Provider value={{ languageContext, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
