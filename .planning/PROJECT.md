# Fractional Operations Leader Portfolio Website

## What This Is

A minimalist, high-conversion personal portfolio website for a Fractional Operations Leader (COO, Chief of Staff & Architect). The site serves as a rapid filter for stressed, overworked SME founders (1-50 employees) who need immediate operational relief — instantly communicating value, proving capability through past work, and driving meeting bookings.

## Core Value

Get qualified leads to book a meeting in under 60 seconds — if they need operational expertise, the path must be instantaneous; if not, the site quickly disqualifies them.

## Requirements

### Validated

(None yet — ship to validate)

### Active

- [ ] Minimalist landing page following Pawson-style design philosophy
- [ ] Light/Dark mode toggle with consistent minimalist aesthetics
- [ ] Bilingual support (English/German) with language toggle
- [ ] Three-section content architecture (CTA → Proof → Pricing)
- [ ] Privacy Policy (Datenschutzerklärung) preserved from legacy
- [ ] Accessibility Statement preserved from legacy
- [ ] Impressum in global footer preserved from legacy
- [ ] Security audit of complete website (no XSS, no sensitive data exposure)

### Out of Scope

- Heavy frameworks (React, Vue) — plain HTML/CSS/JS only
- Blog or content sections beyond core portfolio
- Complex animations — subtle micro-transitions only
- Dynamic backend — static GitHub Pages deployment

## Context

This is a refactor of an existing legacy site. The existing content (Privacy, Accessibility, Impressum) must be preserved verbatim while updating styling to match the new minimalist aesthetic. Reference files provided: `example.html` (design reference), `design.md` (UI/UX philosophy).

**Target audience:** Desperate, time-poor founders who need operational relief immediately. They scan, they decide fast. Zero friction, high signal, low noise.

## Constraints

- **Tech Stack**: Vanilla HTML, CSS, minimal vanilla JS — no frameworks
- **Deployment**: Static GitHub Pages
- **Design**: John Pawson-inspired minimalist aesthetic — whitespace over borders, monochromatic tonal palette
- **i18n**: English and German only
- **Theming**: Light/Dark mode with identical minimalist principles

## Key Decisions

| Decision | Rationale | Outcome |
|----------|-----------|---------|
| No research phase | User has clear, detailed requirements; no domain discovery needed | — Pending |
| Coarse granularity | Single website project — fewer, broader phases sufficient | — Pending |

---
*Last updated: 2026-04-09 after initialization (auto mode)*