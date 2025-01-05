import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from '../lang/en/en.json';
import it from '../lang/it/it.json';

const resources = {
    en: {
        translation: en
    },
    it: {
        translation: it
    }
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: document.documentElement.lang || 'it',
        fallbackLng: 'it',
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;
