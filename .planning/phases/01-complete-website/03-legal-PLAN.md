---
phase: 01-complete-website
plan: "03"
type: execute
wave: 3
depends_on: ["01-foundation", "02-content"]
files_modified:
  - privacy.html
  - en/privacy.html
  - accessibility.html
  - en/accessibility.html
autonomous: true
requirements:
  - LEGAL-01
  - LEGAL-02
  - LEGAL-03
  - TECH-03

must_haves:
  truths:
    - "Privacy Policy page displays with exact legacy content preserved"
    - "Accessibility Statement page displays with exact legacy content preserved"
    - "Both legal pages follow the same design system as landing pages"
    - "Both languages (EN/DE) have corresponding legal pages"
    - "Legal pages are accessible from header navigation and footer"
  artifacts:
    - path: "privacy.html"
      provides: "German Privacy Policy page"
    - path: "en/privacy.html"
      provides: "English Privacy Policy page"
    - path: "accessibility.html"
      provides: "German Accessibility Statement page"
    - path: "en/accessibility.html"
      provides: "English Accessibility Statement page"
  key_links:
    - from: "privacy.html"
      to: "css/style.css"
      via: "link tag"
    - from: "privacy.html"
      to: "partials/header.html"
      via: "include"
    - from: "privacy.html"
      to: "partials/footer.html"
      via: "include"
---

<objective>
Create Privacy Policy and Accessibility Statement pages in both languages.

Purpose: Provide required legal pages with exact legacy content preserved, accessible from all site pages.
Output: privacy.html, en/privacy.html, accessibility.html, en/accessibility.html
</objective>

<execution_context>
@$HOME/.config/opencode/get-shit-done/workflows/execute-plan.md
@$HOME/.config/opencode/get-shit-done/templates/summary.md
</execution_context>

<context>
# Legacy Legal Content (MUST PRESERVE EXACTLY)

## Privacy Policy (German):
"Diese Website erhebt, speichert oder verarbeitet keine personenbezogenen Daten. Es werden keine Cookies oder Tracking-Technologien verwendet. Bei Fragen zum Datenschutz können Sie uns gerne unter capitolio@capitolio.sbs kontaktieren."

## Privacy Policy (English):
"This website does not collect, store, or process any personal data. We do not use cookies or any tracking technologies. If you have any questions about data privacy, please contact us at capitolio@capitolio.sbs."

## Accessibility Statement (German):
"Wir bemühen uns, unsere Website für alle Nutzer barrierefrei zu gestalten. Sollten Sie auf Probleme stoßen, kontaktieren Sie uns bitte unter capitolio@capitolio.sbs."

## Accessibility Statement (English):
"We strive to make our website accessible to all users. If you encounter any issues, please contact us at capitolio@capitolio.sbs."

# Reference Plans
@01-foundation-PLAN.md
@02-content-PLAN.md
</context>

<tasks>

<task type="auto">
  <name>task 1: Create German Privacy Policy page</name>
<files>privacy.html</files>
<action>
Create privacy.html (German Privacy Policy) with:
1. Standard HTML5 structure, lang="de"
2. Link to css/style.css
3. Script tags for js/i18n.js, js/theme.js, js/main.js
4. Header (reuse structure from content pages)
5. Main content:
   - H1: "Datenschutzerklärung" (Privacy Policy)
   - Content paragraph with EXACT legacy text:
     "Diese Website erhebt, speichert oder verarbeitet keine personenbezogenen Daten. Es werden keine Cookies oder Tracking-Technologien verwendet. Bei Fragen zum Datenschutz können Sie uns gerne unter capitolio@capitolio.sbs kontaktieren."
6. Footer with impressum (reuse structure)
7. Same design system as landing pages
  </action>
  <verify>
    <automated>ls -la privacy.html && grep -c "personenbezogenen Daten" privacy.html</automated>
  </verify>
  <done>German Privacy Policy page created with exact legacy content</done>
</task>

<task type="auto">
<name>task 2: Create English Privacy Policy page</name>
<files>en/privacy.html</files>
<action>
Create en/privacy.html (English Privacy Policy) with:
1. Standard HTML5 structure, lang="en"
2. Link to ../css/style.css
3. Script tags for ../js/i18n.js, ../js/theme.js, ../js/main.js
4. Same structure as German version
5. H1: "Privacy Policy"
6. Content paragraph with EXACT legacy text:
   "This website does not collect, store, or process any personal data. We do not use cookies or any tracking technologies. If you have any questions about data privacy, please contact us at capitolio@capitolio.sbs."
7. Footer with impressum
  </action>
  <verify>
    <automated>ls -la en/privacy.html && grep -c "personal data" en/privacy.html</automated>
  </verify>
  <done>English Privacy Policy page created with exact legacy content</done>
</task>

<task type="auto">
  <name>task 3: Create German Accessibility Statement page</task>
<files>accessibility.html</files>
<action>
Create accessibility.html (German Accessibility Statement) with:
1. Standard HTML5 structure, lang="de"
2. Link to css/style.css
3. Script tags for js/i18n.js, js/theme.js, js/main.js
4. Header and footer (reuse structure)
5. Main content:
   - H1: "Barrierefreiheitserklärung" (Accessibility Statement)
   - Content paragraph with EXACT legacy text:
     "Wir bemühen uns, unsere Website für alle Nutzer barrierefrei zu gestalten. Sollten Sie auf Probleme stoßen, kontaktieren Sie uns bitte unter capitolio@capitolio.sbs."
  </action>
  <verify>
    <automated>ls -la accessibility.html && grep -c "barrierefrei" accessibility.html</automated>
  </verify>
  <done>German Accessibility Statement page created with exact legacy content</done>
</task>

<task type="auto">
  <name>task 4: Create English Accessibility Statement page</name>
<files>en/accessibility.html</files>
<action>
Create en/accessibility.html (English Accessibility Statement) with:
1. Standard HTML5 structure, lang="en"
2. Link to ../css/style.css
3. Script tags for ../js/i18n.js, ../js/theme.js, ../js/main.js
4. Same structure as German version
5. H1: "Accessibility Statement"
6. Content paragraph with EXACT legacy text:
   "We strive to make our website accessible to all users. If you encounter any issues, please contact us at capitolio@capitolio.sbs."
  </action>
  <verify>
    <automated>ls -la en/accessibility.html && grep -c "accessible" en/accessibility.html</automated>
  </verify>
  <done>English Accessibility Statement page created with exact legacy content</done>
</task>

</tasks>

<verification>
- [ ] All 4 legal pages exist
- [ ] Privacy Policy pages contain exact legacy text (German and English)
- [ ] Accessibility Statement pages contain exact legacy text (German and English)
- [ ] All pages use same design system (css/style.css)
- [ ] All pages have header with navigation
- [ ] All pages have footer with impressum
</verification>

<success_criteria>
Legal pages are complete with exact legacy content preserved in both languages, integrated with the site's design system.
</success_criteria>

<output>
After completion, create `.planning/phases/01-complete-website/03-legal-SUMMARY.md`
</output>