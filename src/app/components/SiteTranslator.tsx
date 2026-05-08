import { useEffect } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';

declare global {
  interface Window {
    googleTranslateElementInit?: () => void;
    google?: {
      translate?: {
        TranslateElement: new (
          options: {
            pageLanguage: string;
            includedLanguages: string;
            autoDisplay: boolean;
          },
          elementId: string
        ) => void;
      };
    };
  }
}

const GOOGLE_TRANSLATE_SCRIPT_ID = 'google-translate-script';
const GOOGLE_TRANSLATE_ELEMENT_ID = 'google_translate_element';

type SupportedLanguage = 'EN' | 'DE';

function getGoogleLanguageCode(language: SupportedLanguage) {
  if (language === 'DE') return 'de';
  return 'en';
}

function setGoogleTranslateCookie(language: SupportedLanguage) {
  const value = `/en/${getGoogleLanguageCode(language)}`;
  const expires = 'expires=Fri, 31 Dec 9999 23:59:59 GMT';

  document.cookie = `googtrans=${value};path=/;${expires}`;
  document.cookie = `googtrans=${value};path=/;domain=${window.location.hostname};${expires}`;
}

function getTranslateSelect() {
  return document.querySelector<HTMLSelectElement>('.goog-te-combo');
}

function applyGoogleLanguage(language: SupportedLanguage) {
  const select = getTranslateSelect();
  if (!select) return false;

  const value = getGoogleLanguageCode(language);
  if (select.value !== value) {
    select.value = value;
    select.dispatchEvent(new Event('change'));
  }

  return true;
}

function loadGoogleTranslate() {
  if (!document.getElementById(GOOGLE_TRANSLATE_ELEMENT_ID)) {
    const container = document.createElement('div');
    container.id = GOOGLE_TRANSLATE_ELEMENT_ID;
    container.style.display = 'none';
    document.body.appendChild(container);
  }

  if (!window.googleTranslateElementInit) {
    window.googleTranslateElementInit = () => {
      if (!window.google?.translate?.TranslateElement) return;

      new window.google.translate.TranslateElement(
        {
          pageLanguage: 'en',
          includedLanguages: 'en,de',
          autoDisplay: false,
        },
        GOOGLE_TRANSLATE_ELEMENT_ID
      );
    };
  }

  if (document.getElementById(GOOGLE_TRANSLATE_SCRIPT_ID)) return;

  const script = document.createElement('script');
  script.id = GOOGLE_TRANSLATE_SCRIPT_ID;
  script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
  script.async = true;
  document.body.appendChild(script);
}

export function SiteTranslator() {
  const { language } = useLanguage();

  useEffect(() => {
    setGoogleTranslateCookie(language);
    loadGoogleTranslate();

    let attempts = 0;
    const interval = window.setInterval(() => {
      attempts += 1;
      const applied = applyGoogleLanguage(language);

      if (applied || attempts > 30) {
        window.clearInterval(interval);
      }
    }, 300);

    return () => window.clearInterval(interval);
  }, [language]);

  return null;
}
