import React, { createContext, useContext, useState, useEffect } from "react";

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem("comptoir_azur_lang") || "fr";
  });

  useEffect(() => {
    localStorage.setItem("comptoir_azur_lang", language);
    document.documentElement.lang = language;
  }, [language]);

  const toggleLanguage = (lang) => {
    if (lang) {
      setLanguage(lang);
    } else {
      setLanguage((prev) => (prev === "fr" ? "en" : "fr"));
    }
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage doit être utilisé à l'intérieur de LanguageProvider");
  }
  return context;
}