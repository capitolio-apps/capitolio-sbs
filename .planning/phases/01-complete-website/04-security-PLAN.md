---
phase: 01-complete-website
plan: "04"
type: verify
wave: 4
depends_on:
  - "01-foundation"
  - "02-content"
  - "03-legal"
files_modified: []
autonomous: true
requirements:
  - TECH-01
  - TECH-02
  - TECH-03

must_haves:
  truths:
    - "Static site has no server-side vulnerabilities (no backend code)"
    - "No XSS risks from i18n/theme JS modules (no user input handled)"
    - "localStorage usage follows secure practices (non-sensitive data only)"
    - "Semantic HTML includes proper security attributes (no autocomplete leaks)"
    - "External resources (fonts, etc.) loaded over HTTPS"
  artifacts: []

verification_checklist:
  - name: "Static site security check"
    description: "Ensure no backend vulnerabilities"
    check: |
      1. No server-side code in repository (.js, .ts, .py, .php, .rb, etc. in root)
      2. No database connections or API keys in code
      3. No environment variables or secrets in files
  - name: "XSS vulnerability check"
    description: "Ensure no cross-site scripting risks"
    check: |
      1. i18n.js uses safe textContent/setAttribute, not innerHTML with user input
      2. theme.js does not eval() or use new Function() with user data
      3. No inline event handlers like onclick="user data"
  - name: "localStorage security check"
    description: "Ensure safe localStorage usage"
    check: |
      1. Only non-sensitive data stored (theme preference, language preference)
      2. No PII, passwords, tokens, or personal data in localStorage
      3. No data from external sources stored without validation
  - name: "HTML security attributes"
    description: "Ensure semantic HTML includes security best practices"
    check: |
      1. Forms have autocomplete="off" for sensitive fields if any
      2. No autocomplete="username" or autocomplete="password" anywhere
      3. Proper use of readonly for displayed-but-not-editable data
  - name: "External resource security"
    description: "Ensure external resources are secure"
    check: |
      1. All external CDN links use HTTPS (not HTTP)
      2. No mixed HTTP/HTTPS content (all or nothing)
      3. Fonts loaded from trusted sources (Google Fonts, local)
  - name: "File deployment security"
    description: "Ensure no sensitive files deployed"
    check: |
      1. No .env files in deployment
      2. No .git folder or .git/config in build
      3. No API keys or credentials in any file
      4. No backup files (*.bak, *~, *.orig) deployed
---

<objective>
Perform security audit of the complete website to ensure no vulnerabilities exist.

Purpose: Verify static site is secure - no XSS risks, no sensitive data exposure, safe localStorage usage, proper semantic HTML.
Output: Security verification report
</objective>

<execution_context>
@$HOME/.config/opencode/get-shit-done/workflows/execute-plan.md
@$HOME/.config/opencode/get-shit-done/templates/summary.md
</execution_context>

<context>
# What to verify
- Static site (vanilla HTML/CSS/JS) has no backend code
- JS modules (i18n.js, theme.js) don't introduce XSS vulnerabilities
- localStorage usage is limited to safe preferences only
- External resources use HTTPS
- No sensitive files accidentally deployed
</context>

<tasks>

<task type="auto">
  <name>task 1: Verify no backend vulnerabilities</name>
  <files>-</files>
  <action>
Run security checks:
1. Glob for server-side files (*.py, *.php, *.rb, *.js in server/ or similar)
2. Check package.json for backend dependencies
3. Ensure no API keys or secrets in code
  </action>
  <verify>
    <automated>echo "Manual verification: check no backend code exists"</automated>
  </verify>
  <done>No backend vulnerabilities found ✓</done>
</task>

<task type="auto">
  <name>task 2: Verify no XSS vulnerabilities</name>
  <files>js/i18n.js, js/theme.js</files>
  <action>
Check JS files for XSS risks:
1. read js/i18n.js - verify no innerHTML with dynamic content
2. read js/theme.js - verify no eval() or new Function()
3. Search for any dangerous patterns
  </action>
  <verify>
    <automated>grep -r "innerHTML.*\${" js/ && grep -r "eval(" js/</automated>
  </verify>
  <done>No XSS vulnerabilities found ✓</done>
</task>

<task type="auto">
  <name>task 3: Verify localStorage security</name>
  <files>js/i18n.js, js/theme.js</files>
  <action>
Check localStorage usage:
1. Verify only 'capitolio-theme' and 'capitolio-lang' stored
2. Verify no PII, passwords, or tokens stored
3. Verify data is non-sensitive preferences only
  </action>
  <verify>
    <automated>grep -r "localStorage" js/ | grep -v "capitolio-"</automated>
  </verify>
  <done>localStorage usage is secure ✓</done>
</task>

<task type="auto">
  <name>task 4: Verify HTML security attributes</name>
  <files>*.html</files>
  <action>
Check HTML files:
1. Search for autocomplete attributes with sensitive values
2. Verify no password fields without protection
3. Check for proper form attributes
  </action>
  <verify>
    <automated>grep -r "autocomplete=" *.html | grep -E "(password|username|credit)"</automated>
  </verify>
  <done>HTML security attributes verified ✓</done>
</task>

<task type="auto">
  <name>task 5: Verify external resources</name>
  <files>*.html</files>
  <action>
Check external resource security:
1. Search for HTTP (non-HTTPS) external links
2. Verify fontsloaded from trusted HTTPS sources
3. Check for mixed content issues
  </action>
  <verify>
    <automated>grep -r 'src="http://' *.html</automated>
  </verify>
  <done>External resources use HTTPS ✓</done>
</task>

<task type="auto">
  <name>task 6: Verify no sensitive files deployed</name>
  <files>-</files>
  <action>
Check for sensitive files:
1. Glob for .env, .env.* files
2. Glob for credentials, keys, secrets in files
3. Check for backup files
  </action>
  <verify>
    <automated>ls .env* 2>/dev/null || echo "No .env files"</automated>
  </verify>
  <done>No sensitive files in deployment ✓</done>
</task>

</tasks>

<verification>
- [ ] No backend code or server-side vulnerabilities
- [ ] No XSS vulnerabilities in JS modules
- [ ] localStorage stores only non-sensitive preferences
- [ ] HTML has no autocomplete security issues
- [ ] All external resources use HTTPS
- [ ] No sensitive files (.env, credentials) deployed
</verification>

<success_criteria>
Security audit complete. Website is secure for static deployment.
</success_criteria>

<output>
After completion, create `.planning/phases/01-complete-website/04-security-SUMMARY.md`
</output>