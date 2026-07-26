import { useEffect, useRef, useState } from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import additionalLocales from '../i18n/additionalLocales.json';

const languageOptions = [
  { value: 'en', code: 'EN', label: 'English' },
  { value: 'de', code: 'DE', label: 'Deutsch' },
  { value: 'nl', code: 'NL', label: 'Nederlands' },
  { value: 'fr', code: 'FR', label: 'Français' },
  { value: 'pl', code: 'PL', label: 'Polski' },
  { value: 'cs', code: 'CZ', label: 'Čeština' },
  { value: 'sk', code: 'SK', label: 'Slovenčina' },
  { value: 'es', code: 'ES', label: 'Español' },
  { value: 'it', code: 'IT', label: 'Italiano' },
  { value: 'pt', code: 'PT', label: 'Português' },
];

function LanguageSwitch({ language, setLanguage, label }) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);
  const selectedLanguage = languageOptions.find((option) => option.value === language);

  useEffect(() => {
    const handlePointerDown = (event) => {
      if (!containerRef.current?.contains(event.target)) setIsOpen(false);
    };
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setIsOpen(false);
    };

    document.addEventListener('pointerdown', handlePointerDown);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('pointerdown', handlePointerDown);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div ref={containerRef} className="relative">
      <button
        type="button"
        onClick={() => setIsOpen((open) => !open)}
        aria-label={label}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        className={`flex h-9 min-w-[68px] items-center justify-between gap-2 rounded-full border px-3 text-[10px] font-extrabold tracking-wider text-white transition-all duration-200 ${
          isOpen
            ? 'border-white/30 bg-white/15 shadow-[0_8px_24px_rgba(0,0,0,0.25)]'
            : 'border-white/10 bg-white/[0.07] hover:border-white/20 hover:bg-white/10'
        }`}
      >
        <svg className="h-3.5 w-3.5 text-sky-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
          <circle cx="12" cy="12" r="9" />
          <path d="M3 12h18M12 3c2.5 2.7 3.8 5.7 3.8 9S14.5 18.3 12 21M12 3C9.5 5.7 8.2 8.7 8.2 12S9.5 18.3 12 21" />
        </svg>
        <span>{selectedLanguage.code}</span>
        <svg className={`h-3 w-3 text-zinc-400 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.51a.75.75 0 01-1.08 0l-4.25-4.51a.75.75 0 01.02-1.06z" clipRule="evenodd" />
        </svg>
      </button>

      <div
        className={`absolute right-0 top-full z-[70] mt-2 w-48 origin-top-right overflow-hidden rounded-2xl border border-zinc-200/80 bg-white p-1.5 shadow-[0_20px_50px_-12px_rgba(15,23,42,0.35)] transition-all duration-200 ${
          isOpen ? 'visible translate-y-0 scale-100 opacity-100' : 'invisible -translate-y-1 scale-95 opacity-0'
        }`}
        role="listbox"
        aria-label={label}
      >
        <div className="max-h-[320px] overflow-y-auto">
          {languageOptions.map((option) => {
            const isSelected = option.value === language;
            return (
              <button
                key={option.value}
                type="button"
                role="option"
                aria-selected={isSelected}
                onClick={() => {
                  setLanguage(option.value);
                  setIsOpen(false);
                }}
                className={`flex w-full items-center gap-3 rounded-xl px-3 py-2 text-left transition-colors ${
                  isSelected ? 'bg-indigo-50 text-[#4f39f6]' : 'text-zinc-600 hover:bg-zinc-50 hover:text-zinc-950'
                }`}
              >
                <span className={`w-7 text-[10px] font-black tracking-wider ${isSelected ? 'text-[#4f39f6]' : 'text-zinc-400'}`}>
                  {option.code}
                </span>
                <span className="flex-1 text-xs font-semibold">{option.label}</span>
                {isSelected && (
                  <svg className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M16.704 5.29a1 1 0 010 1.414l-7.25 7.25a1 1 0 01-1.414 0l-3.25-3.25a1 1 0 011.414-1.414l2.543 2.543 6.543-6.543a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default function NavBar({ mobileMenuOpen, setMobileMenuOpen, activeSection }) {
  const { language, setLanguage } = useLanguage();
  const navLabels = {
    en: { services: 'services', workflow: 'workflow', portfolio: 'portfolio', reviews: 'reviews', about: 'about', contact: 'contact' },
    de: { services: 'Leistungen', workflow: 'Ablauf', portfolio: 'Projekte', reviews: 'Bewertungen', about: 'Über mich', contact: 'Kontakt' },
    cs: { services: 'Služby', workflow: 'Postup', portfolio: 'Projekty', reviews: 'Recenze', about: 'O mně', contact: 'Kontakt' },
    sk: { services: 'Služby', workflow: 'Postup', portfolio: 'Projekty', reviews: 'Recenzie', about: 'O mne', contact: 'Kontakt' },
    nl: { services: 'Diensten', workflow: 'Werkwijze', portfolio: 'Projecten', reviews: 'Beoordelingen', about: 'Over mij', contact: 'Contact' },
    fr: { services: 'Services', workflow: 'Méthode', portfolio: 'Projets', reviews: 'Avis', about: 'À propos', contact: 'Contact' },
    pl: { services: 'Usługi', workflow: 'Proces', portfolio: 'Projekty', reviews: 'Opinie', about: 'O mnie', contact: 'Kontakt' },
    es: { services: 'Servicios', workflow: 'Proceso', portfolio: 'Proyectos', reviews: 'Reseñas', about: 'Sobre mí', contact: 'Contacto' },
    it: { services: 'Servizi', workflow: 'Processo', portfolio: 'Progetti', reviews: 'Recensioni', about: 'Chi sono', contact: 'Contatti' },
    pt: { services: 'Serviços', workflow: 'Processo', portfolio: 'Projetos', reviews: 'Avaliações', about: 'Sobre mim', contact: 'Contato' },
  };
  const accessibilityLabels = {
    en: { navigation: 'Main navigation', home: 'Home', language: 'Language', toggle: 'Open menu', close: 'Close menu' },
    de: { navigation: 'Hauptnavigation', home: 'Startseite', language: 'Sprache', toggle: 'Menü öffnen', close: 'Menü schließen' },
    nl: { navigation: 'Hoofdnavigatie', home: 'Startpagina', language: 'Taal', toggle: 'Menu openen', close: 'Menu sluiten' },
    fr: { navigation: 'Navigation principale', home: 'Accueil', language: 'Langue', toggle: 'Ouvrir le menu', close: 'Fermer le menu' },
    pl: { navigation: 'Główna nawigacja', home: 'Strona główna', language: 'Język', toggle: 'Otwórz menu', close: 'Zamknij menu' },
    cs: { navigation: 'Hlavní navigace', home: 'Domů', language: 'Jazyk', toggle: 'Otevřít nabídku', close: 'Zavřít nabídku' },
    sk: { navigation: 'Hlavná navigácia', home: 'Domov', language: 'Jazyk', toggle: 'Otvoriť ponuku', close: 'Zavrieť ponuku' },
    es: { navigation: 'Navegación principal', home: 'Inicio', language: 'Idioma', toggle: 'Abrir menú', close: 'Cerrar menú' },
    it: { navigation: 'Navigazione principale', home: 'Home', language: 'Lingua', toggle: 'Apri menu', close: 'Chiudi menu' },
    pt: { navigation: 'Navegação principal', home: 'Início', language: 'Idioma', toggle: 'Abrir menu', close: 'Fechar menu' },
  };

  const languageSwitch = (
    <LanguageSwitch
      language={language}
      setLanguage={setLanguage}
      label={accessibilityLabels[language].language}
    />
  );

  return (
    <header data-no-translate className="fixed inset-x-0 top-0 z-50 transition-all duration-500 py-2 bg-transparent border-none">

      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between md:justify-center" aria-label={accessibilityLabels[language].navigation}>
        
        <div className="hidden md:flex items-center gap-3 p-1.5 pl-3 rounded-full transition-all duration-500 bg-[#0c232c]/90 backdrop-blur-xl border border-zinc-800/30 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.4)] scale-95 opacity-0 animate-premium-nav hover:border-zinc-700/50 hover:shadow-[0_30px_60px_-12px_rgba(0,0,0,0.6)]">
          <div className="flex items-center">
            <a href="#hero" className="w-8 h-8 bg-white rounded-xl shadow-sm relative z-10 transition-transform duration-300 hover:scale-110 active:scale-95 flex items-center justify-center overflow-hidden" aria-label={accessibilityLabels[language].home}>
              <div className="absolute inset-1 bg-gradient-to-tr from-[#4f39f6] via-[#60a5fa] to-[#cbd5e1] rounded-[30%_70%_70%_30%_/_50%_40%_60%_50%] animate-[spin_15s_linear_infinite]"></div>
            </a>
          </div>
          <ul className="flex items-center gap-0.5 text-xs font-semibold tracking-wide uppercase" role="list" data-no-translate>
            {['services', 'workflow', 'portfolio', 'reviews', 'about', 'contact'].map((sec) => (
              <li key={sec}>
                <a 
                  href={`#${sec}`} 
                  className={`px-4 py-2 rounded-full block nav-link-hover active:scale-95 hover:-translate-y-0.5 ${
                    activeSection === sec 
                      ? 'bg-gradient-to-tr from-[#4f39f6] via-[#60a5fa] to-[#cbd5e1] text-white shadow-[0_4px_20px_rgba(79,57,246,0.3)] scale-105' 
                      : 'text-zinc-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {navLabels[language]?.[sec] ?? additionalLocales[language]?.[sec] ?? sec}
                </a>
              </li>
            ))}
          </ul>
          {languageSwitch}
        </div>

        <div className="flex items-center justify-between w-full md:hidden px-5 py-1 rounded-full transition-all duration-500 bg-[#0c232c]/90 backdrop-blur-xl border border-zinc-800/30 shadow-lg opacity-0 animate-premium-mobile">
          <div className="flex items-center">
            <a href="#hero" className="w-8 h-8 bg-white rounded-xl shadow-sm relative z-10 transition-transform duration-200 active:scale-95 flex items-center justify-center overflow-hidden" aria-label={accessibilityLabels[language].home}>
              <div className="absolute inset-1 bg-gradient-to-tr from-[#4f39f6] via-[#60a5fa] to-[#cbd5e1] rounded-[30%_70%_70%_30%_/_50%_40%_60%_50%] animate-[spin_15s_linear_infinite]"></div>
            </a>
          </div>

          <div className="ml-auto mr-2">{languageSwitch}</div>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
            className="w-9 h-9 flex items-center justify-center rounded-xl text-zinc-300 hover:text-white transition-all duration-200" 
            aria-expanded={mobileMenuOpen} 
            aria-label={accessibilityLabels[language].toggle}
          >
            <div className="relative w-5 h-4 flex flex-col justify-between items-center">
              <span className="w-full h-0.5 bg-current rounded-full transition-all duration-300 ease-out" />
              <span className="w-full h-0.5 bg-current rounded-full transition-all duration-200" />
              <span className="w-full h-0.5 bg-current rounded-full transition-all duration-300 ease-out" />
            </div>
          </button>
        </div>
      </nav>

      <div 
        className={`fixed inset-0 bg-black/60 backdrop-blur-md z-40 md:hidden transition-opacity duration-500 ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setMobileMenuOpen(false)}
      />

      <div 
        style={{ perspective: '1600px' }}
        className={`fixed inset-y-0 left-0 z-50 w-[85%] max-w-xs md:hidden transition-all duration-500 ease-out ${
          mobileMenuOpen ? 'pointer-events-auto' : 'pointer-events-none'
        }`}
      >
        <div 
          style={{ 
            transformOrigin: 'left center',
            transform: mobileMenuOpen 
              ? 'translateX(0) rotateY(0deg)' 
              : 'translateX(-100%) rotateY(-25deg)',
            transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)'
          }}
          className="w-full h-full bg-[#0c232c]/95 backdrop-blur-xl p-6 shadow-[30px_0_60px_-15px_rgba(0,0,0,0.7)] border-r border-zinc-800/40 flex flex-col relative overflow-y-auto"
        >
          <div className="flex items-center justify-between mt-8 mb-12 px-2">
            <div className="w-8 h-8 bg-white rounded-xl shadow-xl flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-1 bg-gradient-to-tr from-[#4f39f6] via-[#60a5fa] to-[#cbd5e1] rounded-[30%_70%_70%_30%_/_50%_40%_60%_50%] animate-[spin_20s_linear_infinite]"></div>
            </div>
            
            <button 
              onClick={() => setMobileMenuOpen(false)}
              className="w-9 h-9 flex items-center justify-center rounded-xl text-zinc-400 hover:text-white bg-white/5 hover:bg-white/10 transition-all duration-200"
              aria-label={accessibilityLabels[language].close}
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <ul
            data-no-translate
            style={{ transformStyle: 'preserve-3d', perspective: '1000px' }} 
            className="flex flex-col gap-2 text-base font-semibold tracking-wide uppercase px-2 relative z-50" 
            role="list"
          >
            {['services', 'workflow', 'portfolio', 'reviews', 'about', 'contact'].map((sec, index) => (
              <li 
                key={sec}
                style={{
                  transformStyle: 'preserve-3d',
                  transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.5s ease',
                  transitionDelay: mobileMenuOpen ? `${(index + 1) * 50}ms` : '0ms',
                  transform: mobileMenuOpen 
                    ? 'none' 
                    : 'translateY(20px) translateZ(-40px) rotateX(-20deg)',
                  opacity: mobileMenuOpen ? 1 : 0
                }}
              >
                <a 
                  href={`#${sec}`} 
                  onClick={() => setMobileMenuOpen(false)} 
                  className={`block py-3 px-4 rounded-xl transition-all duration-300 relative z-50 ${
                    activeSection === sec 
                      ? 'bg-gradient-to-r from-[#4f39f6]/20 via-[#60a5fa]/10 to-transparent text-white' 
                      : 'text-zinc-400 hover:text-white hover:bg-white/5 hover:translate-x-1.5'
                  }`}
                >
                  {navLabels[language]?.[sec] ?? additionalLocales[language]?.[sec] ?? sec}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
}
