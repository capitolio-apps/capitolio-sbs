---
phase: 01-complete-website
plan: "03"
subsystem: legal-pages
tags: [privacy-policy, accessibility-statement, i18n, legal]

# Dependency graph
requires: [01-foundation, 02-content]
provides:
  - German Privacy Policy page (privacy.html)
  - English Privacy Policy page (en/privacy.html)
  - German Accessibility Statement page (accessibility.html)
  - English Accessibility Statement page (en/accessibility.html)
affects: []

# Tech tracking
tech-stack: [HTML5, CSS, JavaScript]
patterns: [Same design system as landing pages, i18n ready]

key-files:
  created: [privacy.html, en/privacy.html, accessibility.html, en/accessibility.html]
  modified: []

key-decisions:
  - "Preserved exact legacy text for privacy policy and accessibility statement"
  - "Legal pages follow same structure as landing pages for consistency"

requirements-completed: [LEGAL-01, LEGAL-02, LEGAL-03, TECH-03]

# Metrics
duration: 1 min
completed: 2026-04-09
---

# Phase 1 Plan 3: Legal Pages Summary

**Privacy Policy and Accessibility Statement pages in both German and English with exact legacy content preserved**

## Performance

- **Duration:** 1 min
- **Started:** 2026-04-09T23:50:00Z
- **Completed:** 2026-04-09T23:51:00Z
- **Tasks:** 4
- **Files modified:** 4

## Accomplishments

- Created German Privacy Policy page (privacy.html) with exact legacy text preserved
- Created English Privacy Policy page (en/privacy.html) with exact legacy text preserved
- Created German Accessibility Statement page (accessibility.html) with exact legacy text preserved
- Created English Accessibility Statement page (en/accessibility.html) with exact legacy text preserved

All pages follow the same design system as landing pages, use the existing CSS (css/style.css), and integrate with the i18n, theme, and main JS modules.

## Task Commits

Each task was committed atomically:

1. **task 1: Create German Privacy Policy page** - `197a5be` (feat)
2. **task 2: Create English Privacy Policy page** - `197a5be` (feat)
3. **task 3: Create German Accessibility Statement page** - `197a5be` (feat)
4. **task 4: Create English Accessibility Statement page** - `197a5be` (feat)

## Files Created/Modified

- `privacy.html` - German Privacy Policy with exact legacy text
- `en/privacy.html` - English Privacy Policy with exact legacy text
- `accessibility.html` - German Accessibility Statement with exact legacy text
- `en/accessibility.html` - English Accessibility Statement with exact legacy text

## Legacy Content Preserved

**German Privacy Policy:**
> Diese Website erhebt, speichert oder verarbeitet keine personenbezogenen Daten. Es werden keine Cookies oder Tracking-Technologien verwendet. Bei Fragen zum Datenschutz können Sie uns gerne unter capitolio@capitolio.sbs kontaktieren.

**English Privacy Policy:**
> This website does not collect, store, or process any personal data. We do not use cookies or any tracking technologies. If you have any questions about data privacy, please contact us at capitolio@capitolio.sbs.

**German Accessibility Statement:**
> Wir bemühen uns, unsere Website für alle Nutzer barrierefrei zu gestalten. Sollten Sie auf Probleme stoßen, kontaktieren Sie uns bitte unter capitolio@capitolio.sbs.

**English Accessibility Statement:**
> We strive to make our website accessible to all users. If you encounter any issues, please contact us at capitolio@capitolio.sbs.

## Decisions Made

- Preserved exact legacy text for all legal pages
- Legal pages follow same structure as landing pages for consistency
- All pages use existing design system (css/style.css)
- All pages integrate with existing i18n, theme, and main JS files

## Deviations from Plan

None - plan executed exactly as written.

## Issues Encountered

None - all tasks completed without issues.

## Next Phase Readiness

Legal pages complete. All four legal pages are now in place with exact legacy content preserved in both languages. Next plan (04-security) can proceed with security audit of the complete website.

---
*Phase: 01-complete-website*
*Completed: 2026-04-09*