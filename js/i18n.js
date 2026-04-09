/**
 * Capitolio Internationalization (i18n) Module
 * Language switching between English and German with localStorage persistence
 */

const i18n = (function() {
  'use strict';

  // Storage key
  const STORAGE_KEY = 'capitolio-lang';

  // Translations
  const translations = {
    en: {
      // Navigation
      nav_home: 'Home',
      nav_privacy: 'Privacy',
      nav_accessibility: 'Accessibility',
      nav_index: 'Index',

      // CTA Section
      cta_title: 'Visual silence. Operational clarity.',
      cta_subtitle: 'I act as a fractional operations leader and systems architect. My work involves designing the invisible structures that allow scaling companies to function without friction. No redundant processes. No operational noise. Just pure, scalable execution.',
      cta_button: 'Book a Meeting',

      // Proof of Work Section
      proof_title: 'Architecture & Implementation',
      proof_card1_title: 'Process Reduction',
      proof_card1_desc: 'Auditing existing workflows to eliminate operational friction. We subtract the unnecessary so your team can focus entirely on the core task.',
      proof_card2_title: 'System Architecture',
      proof_card2_desc: 'Designing rigorous, mathematical frameworks for your data, communication, and project management. Absolute alignment across all tools.',
      proof_card3_title: 'Scalable Leadership',
      proof_card3_desc: 'Fractional executive oversight. Anticipatory design applied to management—ensuring the next step in your company\'s growth appears exactly when needed.',

      // Pricing Section
      pricing_title: 'Engagement Models',
      pricing_monthly: 'Monthly Retainer',
      pricing_project: 'Project-Based',
      pricing_cta: 'Get Started',

      // Footer
      footer_impressum: 'Impressum',
      footer_contact: 'Contact',
      footer_privacy: 'Privacy Policy',
      footer_accessibility: 'Accessibility',

      // Legal Pages
      legal_privacy_title: 'Privacy Policy',
      legal_accessibility_title: 'Accessibility Statement',
      legal_privacy_content: 'This website does not collect, store, or process any personal data. We do not use cookies or any tracking technologies. If you have any questions about data privacy, please contact us at capitolio@capitolio.sbs.',
      legal_accessibility_content: 'We strive to make our website accessible to all users. If you encounter any issues, please contact us at capitolio@capitolio.sbs.',

      // Accessibility
      toggle_language: 'Toggle language',
      toggle_theme: 'Toggle theme',
      open_navigation: 'Open navigation',
      close_navigation: 'Close navigation'
    },
    de: {
      // Navigation
      nav_home: 'Startseite',
      nav_privacy: 'Datenschutz',
      nav_accessibility: 'Barrierefreiheit',
      nav_index: 'Index',

      // CTA Section
      cta_title: 'Visuelle Stille. Operative Klarheit.',
      cta_subtitle: 'Ich fungiere als fraktionierter Betriebsleiter und Systemarchitekt. Meine Arbeit besteht darin, die unsichtbaren Strukturen zu entwerfen, die es wachsenden Unternehmen ermöglichen, ohne Reibung zu funktionieren. Keine redundanten Prozesse. Kein operatives Rauschen. Nur reine, skalierbare Ausführung.',
      cta_button: 'Termin buchen',

      // Proof of Work Section
      proof_title: 'Architektur & Implementierung',
      proof_card1_title: 'Prozessreduktion',
      proof_card1_desc: 'Überprüfung bestehender Arbeitsabläufe zur Beseitigung betrieblicher Reibung. Wir subtrahieren das Unnötige, damit sich Ihr Team vollständig auf die Kernaufgabe konzentrieren kann.',
      proof_card2_title: 'Systemarchitektur',
      proof_card2_desc: 'Entwicklung strenger, mathematischer Rahmenwerke für Ihre Daten, Kommunikation und Projektmanagement. Absolute Ausrichtung an allen Tools.',
      proof_card3_title: 'Skalierbare Führung',
      proof_card3_desc: 'Fraktionierte Geschäftsführungsaufsicht. Antizipatives Design in der Verwaltung angewandt — stellt sicher, dass der nächste Schritt im Wachstum Ihres Unternehmens genau dann erscheint, wenn er benötigt wird.',

      // Pricing Section
      pricing_title: 'Engagement-Modelle',
      pricing_monthly: 'Monatlicher Retainer',
      pricing_project: 'Projektbasiert',
      pricing_cta: 'Loslegen',

      // Footer
      footer_impressum: 'Impressum',
      footer_contact: 'Kontakt',
      footer_privacy: 'Datenschutzerklärung',
      footer_accessibility: 'Barrierefreiheit',

      // Legal Pages
      legal_privacy_title: 'Datenschutzerklärung',
      legal_accessibility_title: 'Barrierefreiheitserklärung',
      legal_privacy_content: 'Diese Website sammelt, speichert oder verarbeitet keine personenbezogenen Daten. Wir verwenden keine Cookies oder andere Tracking-Technologien. Wenn Sie Fragen zum Datenschutz haben, kontaktieren Sie uns bitte unter capitolio@capitolio.sbs.',
      legal_accessibility_content: 'Wir bemühen uns, unsere Website für alle Nutzer zugänglich zu machen. Wenn Sie auf Probleme stoßen, kontaktieren Sie uns bitte unter capitolio@capitolio.sbs.',

      // Accessibility
      toggle_language: 'Sprache wechseln',
      toggle_theme: 'Design wechseln',
      open_navigation: 'Navigation öffnen',
      close_navigation: 'Navigation schließen'
    }
  };

  // Current language
  let currentLang = 'en';

  /**
   * Get the stored language or default to English
   * @returns {string} Current language code
   */
  function getLanguage() {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored && (stored === 'en' || stored === 'de')) {
      currentLang = stored;
    } else {
      // Detect from browser
      const browserLang = navigator.language?.split('-')[0];
      if (browserLang === 'de') {
        currentLang = 'de';
      }
    }
    return currentLang;
  }

  /**
   * Set the language and persist to localStorage
   * @param {string} lang - Language code ('en' or 'de')
   */
  function setLanguage(lang) {
    if (lang !== 'en' && lang !== 'de') {
      console.warn('i18n: Invalid language code. Using "en".');
      lang = 'en';
    }
    currentLang = lang;
    localStorage.setItem(STORAGE_KEY, lang);
    
    // Update document lang attribute
    document.documentElement.lang = lang;
    
    // Dispatch event for components to update
    window.dispatchEvent(new CustomEvent('languagechange', { detail: { language: lang } }));
  }

  /**
   * Get translation for a key in the current language
   * @param {string} key - Translation key
   * @returns {string} Translated string or key if not found
   */
  function t(key) {
    const langData = translations[currentLang];
    if (!langData) {
      console.warn(`i18n: No translations found for language "${currentLang}"`);
      return key;
    }
    
    const value = langData[key];
    if (!value) {
      console.warn(`i18n: No translation found for key "${key}"`);
      return key;
    }
    
    return value;
  }

  /**
   * Toggle between English and German
   */
  function toggleLanguage() {
    const newLang = currentLang === 'en' ? 'de' : 'en';
    setLanguage(newLang);
    
    const currentPath = window.location.pathname;
    let newPath;
    
    if (newLang === 'en') {
      if (currentPath.startsWith('/en/')) {
        newPath = currentPath.replace('/en/', '/');
      } else if (currentPath === '/en' || currentPath === '/en/') {
        newPath = '/';
      } else if (currentPath === '/' || currentPath === '') {
        newPath = '/en/';
      } else {
        newPath = '/en/' + currentPath.split('/').filter(Boolean).join('/');
      }
    } else {
      if (currentPath.startsWith('/en/')) {
        newPath = currentPath.replace('/en/', '/');
      } else if (currentPath === '/en' || currentPath === '/en/') {
        newPath = '/';
      } else if (currentPath === '/' || currentPath === '') {
        newPath = '/';
      } else {
        newPath = currentPath;
      }
    }
    
    window.location.href = newPath;
  }

  /**
   * Get all available languages
   * @returns {string[]} Array of language codes
   */
  function getAvailableLanguages() {
    return Object.keys(translations);
  }

  // Initialize on load
  getLanguage();

  // Expose public API
  return {
    setLanguage,
    getLanguage,
    t,
    toggleLanguage,
    getAvailableLanguages
  };
})();

// Export for module systems
if (typeof module !== 'undefined' && module.exports) {
  module.exports = i18n;
}
