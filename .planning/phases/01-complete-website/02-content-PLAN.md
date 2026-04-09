---
phase: 01-complete-website
plan: "02"
type: execute
wave: 2
depends_on: ["01-foundation"]
files_modified:
  - index.html
  - en/index.html
  - partials/header.html
  - partials/footer.html
autonomous: true
requirements:
  - DESN-01
  - DESN-02
  - DESN-03
  - DESN-04
  - DESN-05
  - I18N-01
  - I18N-02
  - I18N-03
  - I18N-04
  - I18N-05
  - CONT-01
  - CONT-02
  - CONT-03
  - CONT-04

must_haves:
  truths:
    - "Landing page displays with John Pawson minimalist aesthetic (whitespace over borders, monochromatic palette)"
    - "Three-section content architecture loads: CTA section, Proof of Work (3 cards), Pricing section"
    - "Language toggle switches between English and German, all visible text is translated"
    - "Theme toggle accessible from header, switches between light and dark mode"
    - "Site is responsive on mobile, tablet, and desktop"
    - "Header contains navigation with theme toggle and language toggle"
    - "Footer contains impressum and links to legal pages"
  artifacts:
    - path: "index.html"
      provides: "German landing page with CTA, Proof of Work, Pricing sections"
      min_lines: 120
    - path: "en/index.html"
      provides: "English landing page with CTA, Proof of Work, Pricing sections"
      min_lines: 120
    - path: "partials/header.html"
      provides: "Reusable header component with nav, theme toggle, language toggle"
    - path: "partials/footer.html"
      provides: "Reusable footer component with impressum and legal links"
  key_links:
    - from: "index.html"
      to: "css/style.css"
      via: "link tag"
      pattern: "css/style.css"
    - from: "index.html"
      to: "js/main.js"
      via: "script tag"
      pattern: "js/main.js"
    - from: "index.html"
      to: "partials/header.html"
      via: "server-side include or JS injection"
      pattern: "header"
---

<objective>
Create the main landing pages (German and English) with three-section content architecture.

Purpose: Build the core landing page with CTA for booking, Proof of Work with 3 achievement cards, and transparent pricing section.
Output: index.html (German), en/index.html (English), header/footer partials
</objective>

<execution_context>
@$HOME/.config/opencode/get-shit-done/workflows/execute-plan.md
@$HOME/.config/opencode/get-shit-done/templates/summary.md
</execution_context>

<context>
# Design Philosophy (from design.md)
- Subtraction: whitespace over borders, no heavy cards
- Typography: single masterful typeface, high-contrast
- Grid: CSS Grid with 4px/8px baseline for vertical rhythm
- Interactions: subtle micro-transitions, no flashy animations

# Content Requirements
## CTA Section:
- Title: "Operational Excellence for Growing Teams"
- Subtitle: "I help operations leaders eliminate chaos and build scalable systems"
- Button: "Book a Call" (links to calendly or placeholder)

## Proof of Work Section:
- Card 1: "Scaled Operations" - description of scaling achievement
- Card 2: "Cost Reduction" - description of cost optimization
- Card 3: "Team Development" - description of team building

## Pricing Section:
- Monthly: 3.600€/month - "Fractional Operations Leadership"
- Project-based: "Project-based consulting available upon request"

# Reference Foundation Plan
@01-foundation-PLAN.md

# Language Strings (from js/i18n.js)
- Need all keys translated in both German and English
- Content must follow "Three Visions" linear structure
</context>

<tasks>

<task type="auto">
  <name>task 1: Create reusable header partial</name>
  <files>partials/header.html</files>
  <action>
Create partials/header.html with:
1. Semantic header element with nav
2. Logo/site name on left
3. Navigation links: Home, Privacy, Accessibility
4. Theme toggle button (sun/moon icon, accessible label)
5. Language toggle button (EN/DE, accessible label)
6. Mobile hamburger menu (if needed for responsiveness)
7. Uses CSS classes from design-system.css
  </action>
  <verify>
    <automated>ls -la partials/header.html</automated>
  </done>
</task>

<task type="auto">
  <name>task 2: Create reusable footer partial</name>
  <files>partials/footer.html</files>
  <action>
Create partials/footer.html with:
1. Semantic footer element
2. Impressum text (exact legacy content preserved):
   "Company: Capitolio Apps, Owner: Daniel de Moura Prudente. Address: Galileistr. 7, 69115 Heidelberg, Germany. Email: capitolio@capitolio.sbs. VAT: DE451928144"
3. Links to Privacy Policy and Accessibility Statement pages
4. Copyright notice
  </action>
  <verify>
    <automated>ls -la partials/footer.html</automated>
  </done>
</task>

<task type="auto">
  <name>task 3: Create German landing page (index.html)</name>
<files>index.html</files>
<action>
Create index.html (German) with:
1. DOCTYPE, html lang="de", semantic head elements
2. Link to css/style.css
3. Script tags for js/i18n.js, js/theme.js, js/main.js
4. Header (inline or injected via JS)
5. Main content with three sections:
   
   **Section 1 - CTA:**
   - H1: "Operational Excellence for Growing Teams"
   - Subtitle: "Ich helfe Operations-Leitern, Chaos zu eliminieren und skalierbare Systeme aufzubauen."
   - CTA Button: "Termin buchen"
   
   **Section 2 - Proof of Work (3 cards):**
   - H2: "Bewiesene Ergebnisse"
   - Card 1: "Skalierte Abläufe" + description
   - Card 2: "Kostenreduzierung" + description  
   - Card 3: "Teamentwicklung" + description
   
   **Section 3 - Pricing:**
   - H2: "Transparent Pricing"
   - Monthly: 3.600€/Monat - "Fractional Operations Leadership"
   - Project: "Projektbasierte Beratung auf Anfrage"
   
6. Footer (inline or injected via JS)
7. Uses whitespace over borders (Pawson principle)
8. Responsive grid for cards (1 col mobile, 3 col desktop)
9. High-contrast typography
  </action>
  <verify>
    <automated>ls -la index.html && wc -l index.html | awk '{print $1}'</automated>
  </verify>
  <done>German landing page created with three-section content, 120+ lines</done>
</task>

<task type="auto">
  <name>task 4: Create English landing page (en/index.html)</name>
<files>en/index.html</files>
<action>
Create en/index.html (English) with:
1. DOCTYPE, html lang="en", semantic head elements
2. Link to ../css/style.css
3. Script tags for ../js/i18n.js, ../js/theme.js, ../js/main.js
4. Same three-section structure as German version:
   
   **Section 1 - CTA:**
   - H1: "Operational Excellence for Growing Teams"
   - Subtitle: "I help operations leaders eliminate chaos and build scalable systems."
   - CTA Button: "Book a Call"
   
   **Section 2 - Proof of Work (3 cards):**
   - H2: "Proven Results"
   - Card 1: "Scaled Operations" + description
   - Card 2: "Cost Reduction" + description
   - Card 3: "Team Development" + description
   
   **Section 3 - Pricing:**
   - H2: "Transparent Pricing"
   - Monthly: €3,600/month - "Fractional Operations Leadership"
   - Project: "Project-based consulting available upon request"
   
5. Uses English translations from i18n.js
6. Same responsive layout and design principles
  </action>
  <verify>
    <automated>ls -la en/index.html && wc -l en/index.html | awk '{print $1}'</automated>
  </verify>
  <done>English landing page created with three-section content, 120+ lines</done>
</task>

</tasks>

<verification>
- [ ] Both index.html files exist with valid HTML5 structure
- [ ] Three sections present: CTA, Proof of Work (3 cards), Pricing
- [ ] Language toggle present in header
- [ ] Theme toggle present in header
- [ ] Responsive layout (mobile/tablet/desktop)
- [ ] Header contains navigation to Home, Privacy, Accessibility
- [ ] Footer contains exact impressum text
- [ ] CSS links correct for each page
- [ ] JS links correct for each page
</verification>

<success_criteria>
Landing pages are complete with all three content sections, proper i18n and theming support, responsive design, and navigation to legal pages.
</success_criteria>

<output>
After completion, create `.planning/phases/01-complete-website/02-content-SUMMARY.md`
</output>