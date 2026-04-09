/**
 * Capitolio Theme Module
 * Theme management for light/dark mode with localStorage persistence
 */

const theme = (function() {
  'use strict';

  // Storage key
  const STORAGE_KEY = 'capitolio-theme';

  // Default theme
  const DEFAULT_THEME = 'light';

  // Current theme
  let currentTheme = DEFAULT_THEME;

  /**
   * Get the stored theme or default to light
   * @returns {string} Current theme ('light' or 'dark')
   */
  function getTheme() {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored && (stored === 'light' || stored === 'dark')) {
      currentTheme = stored;
    } else {
      // Detect from browser preference
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        currentTheme = 'dark';
      }
    }
    return currentTheme;
  }

  /**
   * Set the theme and persist to localStorage
   * @param {string} themeName - Theme name ('light' or 'dark')
   */
  function setTheme(themeName) {
    if (themeName !== 'light' && themeName !== 'dark') {
      console.warn('theme: Invalid theme name. Using "light".');
      themeName = 'light';
    }
    currentTheme = themeName;
    localStorage.setItem(STORAGE_KEY, themeName);
    applyTheme(themeName);
  }

  /**
   * Apply theme by setting data-theme attribute on documentElement
   * @param {string} themeName - Theme name ('light' or 'dark')
   */
  function applyTheme(themeName) {
    if (themeName !== 'light' && themeName !== 'dark') {
      console.warn('theme: Invalid theme name. Using "light".');
      themeName = 'light';
    }
    
    document.documentElement.setAttribute('data-theme', themeName);
    
    // Dispatch event for components to update
    window.dispatchEvent(new CustomEvent('themechange', { detail: { theme: themeName } }));
  }

  /**
   * Toggle between light and dark theme
   */
  function toggleTheme() {
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  }

  /**
   * Get available themes
   * @returns {string[]} Array of theme names
   */
  function getAvailableThemes() {
    return ['light', 'dark'];
  }

  /**
   * Initialize theme on page load
   * Applies stored theme or defaults to light
   */
  function init() {
    const storedTheme = getTheme();
    applyTheme(storedTheme);
    
    // Listen for browser theme changes
    if (window.matchMedia) {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      mediaQuery.addEventListener('change', (e) => {
        // Only auto-switch if user hasn't set a preference
        if (!localStorage.getItem(STORAGE_KEY)) {
          applyTheme(e.matches ? 'dark' : 'light');
        }
      });
    }
  }

  // Initialize on script load
  init();

  // Expose public API
  return {
    toggleTheme,
    getTheme,
    setTheme,
    applyTheme,
    getAvailableThemes,
    init
  };
})();

// Export for module systems
if (typeof module !== 'undefined' && module.exports) {
  module.exports = theme;
}
