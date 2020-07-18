import i18n from 'i18next';
import detector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import en from './locales/en.json';
import tw from './locales/tw.json';

const resources = {
	en: {
		translation: en
	},
	tw: {
		translation: tw
	}
};

i18n
	.use(detector)
	.use(initReactI18next)
	.init({
		resources,
		lng: "en",

		keySeparator: false,
		interpolation: {
			escapeValue: false,
		}
	});

export default i18n;