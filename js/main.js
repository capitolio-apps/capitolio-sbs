/**
 * Capitolio Main Application Module
 * Initializes i18n and theme on page load, handles event bindings
 */

(function() {
  'use strict';

  // Wait for DOM to be ready
  document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
  });

  /**
   * Initialize the application
   */
  function initializeApp() {
    // Initialize theme first (affects CSS custom properties)
    initializeTheme();
    
    // Initialize i18n
    initializeI18n();
    
    // Setup event handlers
    setupEventHandlers();
    
    // Setup scroll animations
    setupScrollReveal();
  }

  /**
   * Initialize theme module
   */
  function initializeTheme() {
    // Theme module auto-initializes on load, but we can ensure it's applied
    if (typeof theme !== 'undefined') {
      const currentTheme = theme.getTheme();
      theme.applyTheme(currentTheme);
    }
  }

  /**
   * Initialize i18n module
   */
  function initializeI18n() {
    if (typeof i18n === 'undefined') {
      console.warn('main: i18n module not loaded');
      return;
    }

    const currentLang = i18n.getLanguage();
    
    // Update document lang attribute
    document.documentElement.lang = currentLang;
    
    // Apply translations to page elements
    applyTranslations();
    
    // Listen for language changes
    window.addEventListener('languagechange', applyTranslations);
  }

  /**
   * Apply translations to elements with data-i18n attribute
   */
  function applyTranslations() {
    if (typeof i18n === 'undefined') return;

    // Elements with data-i18n attribute
    const translatableElements = document.querySelectorAll('[data-i18n]');
    
    translatableElements.forEach(function(element) {
      const key = element.getAttribute('data-i18n');
      const translation = i18n.t(key);
      
      if (translation !== key) {
        // Check if element has children (is a container) or is self-text
        if (element.children.length === 0 || element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
          element.textContent = translation;
        } else {
          // For container elements, translate placeholders and titles
          if (element.placeholder !== undefined) {
            element.placeholder = translation;
          }
          if (element.title !== undefined) {
            element.title = translation;
          }
        }
      }
    });

    // Update language indicator if exists
    const langIndicator = document.querySelector('[data-lang-indicator]');
    if (langIndicator) {
      langIndicator.textContent = i18n.getLanguage().toUpperCase();
    }
  }

  /**
   * Setup event handlers for buttons
   */
  function setupEventHandlers() {
    // Language toggle button
    const langToggleBtn = document.getElementById('lang-toggle');
    if (langToggleBtn) {
      langToggleBtn.addEventListener('click', function() {
        if (typeof i18n !== 'undefined') {
          i18n.toggleLanguage();
        }
      });
    }

    // Theme toggle button
    const themeToggleBtn = document.getElementById('theme-toggle');
    if (themeToggleBtn) {
      themeToggleBtn.addEventListener('click', function() {
        if (typeof theme !== 'undefined') {
          theme.toggleTheme();
        }
      });
    }

    // Navigation overlay toggle
    const openNavBtn = document.getElementById('open-nav');
    const closeNavBtn = document.getElementById('close-nav');
    const navOverlay = document.getElementById('nav-overlay');

    if (openNavBtn && navOverlay) {
      openNavBtn.addEventListener('click', function() {
        navOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
      });
    }

    if (closeNavBtn && navOverlay) {
      closeNavBtn.addEventListener('click', function() {
        navOverlay.classList.remove('active');
        document.body.style.overflow = '';
      });
    }

    // Close nav when clicking nav links
    const navLinks = document.querySelectorAll('.nav-overlay-link');
    navLinks.forEach(function(link) {
      link.addEventListener('click', function() {
        if (navOverlay) {
          navOverlay.classList.remove('active');
          document.body.style.overflow = '';
        }
      });
    });

    // Close nav on escape key
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && navOverlay && navOverlay.classList.contains('active')) {
        navOverlay.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  }

  /**
   * Setup scroll reveal animations
   */
  function setupScrollReveal() {
    const revealElements = document.querySelectorAll('.reveal:not(.active)');
    
    if (revealElements.length === 0) return;

    const revealOptions = {
      root: null,
      rootMargin: '0px 0px -15% 0px',
      threshold: 0.1
    };

    const revealObserver = new IntersectionObserver(function(entries, observer) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          // Stop observing once revealed
          observer.unobserve(entry.target);
        }
      });
    }, revealOptions);

    revealElements.forEach(function(el) {
      revealObserver.observe(el);
    });
  }

})();
