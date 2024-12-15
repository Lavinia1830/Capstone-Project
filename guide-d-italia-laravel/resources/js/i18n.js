// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslation from './Locales/en/translation.json'; // Esempio per lingua inglese
import itTranslation from './Locales/it/translation.json'; // Esempio per lingua italiana

i18n
  .use(initReactI18next) // Usa il modulo React per i18next
  .init({
    resources: {
      en: {
        translation: enTranslation,
      },
      it: {
        translation: itTranslation,
      },
    },
    lng: 'en', // Lingua di default
    fallbackLng: 'en', // Lingua di fallback se non trovata
    interpolation: {
      escapeValue: false, // React già fa l'escape automaticamente
    },
  });

export default i18n;
