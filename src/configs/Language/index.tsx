import i18next from "i18next";
import moment from "moment";
import React, { createContext, useState } from "react";

type ContextProps = {
  language: "es" | "en";
  setLanguage: (e: "es" | "en") => void;
};

export const LangContext = createContext<ContextProps>({
  language: localStorage.getItem("i18nextLng") as "es" | "en",
  setLanguage: () => {},
});

export default function Language({ children }: { children: React.ReactNode }) {
  const [language, setLng] = useState<"en" | "es">(
    localStorage.getItem("i18nextLng") as "es" | "en"
  );

  const setLanguage = (lang: "en" | "es") => {
    i18next.changeLanguage(lang || "es");
    setLng(lang);
  };

  i18next.on("languageChanged", (lng) => {
    moment.locale(lng);
  });

  return (
    <LangContext.Provider value={{ language, setLanguage }}>
      {children}
    </LangContext.Provider>
  );
}
