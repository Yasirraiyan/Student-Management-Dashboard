import React, { useContext } from "react";
import { LanguageContext } from "./LanguageContext";

const LanguageToggle = () => {
  const { languageContext, toggleLanguage } = useContext(LanguageContext);

  return (
    <div>
      <p>Current Language: {languageContext}</p>
      <button onClick={toggleLanguage}>
        Switch to {languageContext === "en" ? "Bangla" : "English"}
      </button>
    </div>
  );
};

export default LanguageToggle;
