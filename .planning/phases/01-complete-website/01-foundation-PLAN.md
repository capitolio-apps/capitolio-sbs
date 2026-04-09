---
phase: 01-complete-website
plan: "01"
type: execute
wave: 1
depends_on: []
files_modified:
  - css/style.css
  - css/design-system.css
  - js/i18n.js
  - js/theme.js
  - js/main.js
autonomous: true
requirements:
  - DESN-01
  - DESN-02
  - DESN-03
  - DESN-04
  - DESN-05
  - THEM-01
  - THEM-02
  - THEM-03
  - TECH-01
  - TECH-03
  - TECH-04

must_haves:
  truths:
    - "CSS defines light/dark themes with John Pawson minimalist aesthetic (whitespace over borders, monochromatic palette)"
    - "CSS implements responsive grid with 4px/8px baseline for vertical rhythm"
    - "JS handles language switching between English and German with localStorage persistence"
    - "JS handles theme switching between light and dark mode with localStorage persistence"
    - "Toggle animations are subtle and smooth (no flashy animations)"
  artifacts:
    - path: "css/design-system.css"
      provides: "CSS design system with CSS custom properties for theming, grid system, typography"
      min_lines: 80
    - path: "css/style.css"
      provides: "Main stylesheet importing design system and component styles"
    - path: "js/i18n.js"
      provides: "Internationalization utilities for language switching and translation"
      exports: ["setLanguage", "getLanguage", "t"]
    - path: "js/theme.js"
      provides: "Theme management for light/dark mode with persistence"
      exports: ["toggleTheme", "getTheme", "setTheme"]
    - path: "js/main.js"
      provides: "Main application initialization and event handlers"
  key_links:
    - from: "js/i18n.js"
      to: "localStorage"
      via: "get/set item"
      pattern: "localStorage.*lang"
    - from: "js/theme.js"
      to: "localStorage"
      via: "get/set item"
      pattern: "localStorage.*theme"
    - from: "css/style.css"
      to: "document.documentElement"
      via: "data-theme attribute"
      pattern: "data-theme"
---

<objective>
Create the foundational CSS design system and JavaScript utilities that all pages will use.

Purpose: Establish the John Pawson minimalist design foundation with light/dark theming, internationalization support, and responsive grid system.
Output: Design system CSS files and JS utility modules
</objective>

<execution_context>
@$HOME/.config/opencode/get-shit-done/workflows/execute-plan.md
@$HOME/.config/opencode/get-shit-done/templates/summary.md

# Reference design.md for Pawson philosophy
@design.md
</execution_context>

<context>
# Design Philosophy (from design.md)
- Subtraction: whitespace over borders, no heavy cards
- Typography: single masterful typeface, high-contrast
- Grid: CSS Grid with 4px/8px baseline for vertical rhythm
- Interactions: subtle micro-transitions, no flashy animations

# Legacy Legal Content (must preserve exactly)
## Privacy Policy:
"This website does not collect, store, or process any personal data. We do not use cookies or any tracking technologies. If you have any questions about data privacy, please contact us at capitolio@capitolio.sbs."

## Accessibility Statement:
"We strive to make our website accessible to all users. If you encounter any issues, please contact us at capitolio@capitolio.sbs."

## Impressum:
"Company: Capitolio Apps, Owner: Daniel de Moura Prudente. Address: Galileistr. 7, 69115 Heidelberg, Germany. Email: capitolio@capitolio.sbs. VAT: DE451928144"
</context>

<tasks>

<task type="auto">
  <name>task 1: Create CSS design system with theming and grid</name>
  <files>css/design-system.css</files>
  <action>
Create css/design-system.css with:
1. CSS custom properties for light theme (--bg-primary: #FFFFFF, --text-primary: #1A1A1A, etc.)
2. CSS custom properties for dark theme (--bg-primary: #2D2D2D, --text-primary: #F5F5F5, etc. - charcoal/grey tones, no flat black)
3. Typography system using single typeface with weight/size variations
4. Grid system based on 8px baseline
5. Responsive breakpoints: mobile (<768px), tablet (768-1024px), desktop (>1024px)
6. Subtle transitions (0.2s ease) for theme switching and interactions
7. Accessibility: focus states, reduced motion support
  </action>
  <verify>
    <automated>ls -la css/design-system.css && wc -l css/design-system.css | awk '{print $1}'</automated>
  </verify>
  <done>CSS design system file created with complete theming infrastructure, 80+ lines</done>
</task>

<task type="auto">
  <name>task 2: Create main stylesheet</name>
  <files>css/style.css</files>
  <action>
Create css/style.css that:
1. Imports design-system.css
2. Defines component styles: header, footer, sections (CTA, Proof of Work, Pricing), cards, buttons
3. Uses whitespace over borders (Pawson principle)
4. Applies monochromatic palette
5. Includes responsive layouts (mobile-first with media queries)
6. Includes print styles
  </action>
  <verify>
    <automated>ls -la css/style.css</automated>
  </verify>
  <done>Main stylesheet created and imports design system</done>
</task>

<task type="auto">
  <name>task 3: Create i18n JavaScript module</name>
  <files>js/i18n.js</files>
  <action>
Create js/i18n.js with:
1. Translation object with English (en) and German (de) keys
2. setLanguage(lang) - sets language and saves to localStorage key 'capitolio-lang'
3. getLanguage() - returns current language, defaults to 'en'
4. t(key) - returns translated string for current language
5. Translation keys needed: nav_home, nav_privacy, nav_accessibility, cta_title, cta_subtitle, cta_button, proof_title, proof_card1_title, proof_card1_desc, proof_card2_title, proof_card2_desc, proof_card3_title, proof_card3_desc, pricing_title, pricing_monthly, pricing_project, pricing_cta, footer_impressum, legal_privacy_title, legal_accessibility_title
  </action>
  <verify>
    <automated>ls -la js/i18n.js && node -c js/i18n.js 2>&1</automated>
  </verify>
  <done>i18n module created with language persistence, exports setLanguage, getLanguage, t functions</done>
</task>

<task type="auto">
  <name>task 4: Create theme JavaScript module</name>
  <files>js/theme.js</files>
  <action>
Create js/theme.js with:
1. toggleTheme() - toggles between light/dark, updates document.documentElement data-theme attribute
2. getTheme() - returns current theme from localStorage key 'capitolio-theme', defaults to 'light'
3. setTheme(theme) - sets theme and saves to localStorage
4. applyTheme(theme) - applies theme by setting data-theme attribute on documentElement
5. Initialize on load: apply stored theme or default to light
6. Smooth transition via CSS (theme applied before transition)
  </action>
  <verify>
    <automated>ls -la js/theme.js && node -c js/theme.js 2>&1</automated>
  </verify>
  <done>Theme module created with persistence, exports toggleTheme, getTheme, setTheme functions</done>
</task>

<task type="auto">
  <name>task 5: Create main JavaScript module</name>
  <files>js/main.js</files>
  <action>
Create js/main.js with:
1. DOMContentLoaded event listener
2. Initialize i18n: call getLanguage(), apply translations
3. Initialize theme: call getTheme(), apply theme
4. Event handlers for language toggle button
5. Event handlers for theme toggle button
6. Mobile navigation toggle (if needed)
  </action>
  <verify>
    <automated>ls -la js/main.js && node -c js/main.js 2>&1</automated>
  </verify>
  <done>Main JS module created, initializes i18n and theme on page load</done>
</task>

</tasks>

<verification>
- [ ] All CSS files exist and have valid syntax
- [ ] All JS files exist and have valid syntax (node -c)
- [ ] CSS custom properties defined for both light and dark themes
- [ ] Theme module persists to localStorage under 'capitolio-theme'
- [ ] i18n module persists to localStorage under 'capitolio-lang'
- [ ] Grid system follows 8px baseline
- [ ] Dark theme uses charcoal/grey tones, not flat black
</verification>

<success_criteria>
Design system foundation is complete with all CSS and JS utilities in place. Pages can now be built using these shared resources.
</success_criteria>

<output>
After completion, create `.planning/phases/01-complete-website/01-foundation-SUMMARY.md`
</output>