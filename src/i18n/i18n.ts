import i18n, { FormatFunction, TFunction } from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import moment from "moment";
import { initReactI18next } from "react-i18next";

import * as resources from "./resources";

export const formatI18n: FormatFunction = (value, formatMode) => {
  if (typeof value === "number") {
    return value.toLocaleString(i18n.languages[0]);
  }
  if (formatMode === "uppercase") return (value as string).toUpperCase();
  if (value instanceof Date) return moment(value).format(formatMode);
  return value;
};

export const initI18n = async (): Promise<TFunction> => {
  i18n.on("languageChanged", (lng) => {
    moment.locale(lng.split("-")[0]);
  });

  return i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
      supportedLngs: ["en", "de"],
      fallbackLng: "en",
      load: "languageOnly",

      interpolation: {
        // React is XSS-safe already
        escapeValue: false,
        format: formatI18n,
      },

      resources,
    });
};
