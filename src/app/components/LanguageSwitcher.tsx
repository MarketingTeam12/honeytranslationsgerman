import { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

export function LanguageSwitcher() {
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage } = useLanguage();
  const dropdownRef = useRef<HTMLDivElement>(null);

  const languages = [
    { code: 'EN', label: 'English (EN)' },
    { code: 'DE', label: 'German (DE)' }
  ] as const;
  type LanguageCode = typeof languages[number]['code'];
  const getLanguageLabel = (lang: LanguageCode) => languages.find((item) => item.code === lang)?.label ?? lang;

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLanguageSelect = (lang: LanguageCode) => {
    setLanguage(lang);
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1 px-3 py-1.5 bg-gray-50 hover:bg-gray-100 rounded-lg transition-all duration-200 text-sm font-medium text-gray-700 shadow-sm hover:shadow-md"
      >
        <span>{getLanguageLabel(language)}</span>
        <ChevronDown
          className={`w-3.5 h-3.5 transition-transform duration-200 ${
            isOpen ? 'rotate-180' : 'rotate-0'
          }`}
        />
      </button>

      {isOpen && (
        <div
          className="absolute top-full right-0 mt-1 bg-white rounded-lg shadow-lg border border-gray-100 overflow-hidden animate-fadeIn"
          style={{
            animation: 'slideDown 0.2s ease-out'
          }}
        >
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleLanguageSelect(lang.code)}
              className={`w-full px-4 py-2 text-sm text-left whitespace-nowrap transition-all duration-150 ${
                language === lang.code
                  ? 'bg-yellow-50 text-yellow-700 font-semibold'
                  : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              {lang.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
