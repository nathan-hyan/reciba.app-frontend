import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

function requireAll(requireContext) {
  return requireContext.keys().map(requireContext);
}

const storedLanguage =
  localStorage.getItem("i18nextLng") === "es" &&
  localStorage.getItem("i18nextLng") === "en"
    ? localStorage.getItem("i18nextLng")
    : "en";

i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    fallbackLng: storedLanguage,
    detection: {
      order: ["localStorage"],
      cache: ["localStorage"],
    },
    interpolation: { escapeValue: false },
  });

requireAll(require.context("..", true, /i18n\.(js|ts)$/));
