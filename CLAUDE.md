# CLAUDE.md — Development Reference

> Internal documentation for maintaining this portfolio. Read this file before making any changes.

## 📋 Project Overview

Personal portfolio website for **Mohamed Elkamary**, Senior Frontend Engineer.

- **Live URL:** https://mohamedelkamary5.github.io
- **Repo:** https://github.com/mohamedelkamary5/mohamedelkamary5.github.io
- **Stack:** Pure HTML/CSS/JavaScript — no frameworks, no build step
- **Architecture:** 3 files (`index.html`, `styles.css`, `script.js`)

## 📁 File Responsibilities

| File | Purpose |
| --- | --- |
| `index.html` | HTML structure only — no embedded styles or scripts |
| `styles.css` | All CSS: variables → reset → layout → components → sections |
| `script.js` | All JS: i18n, theme, language, mobile menu, animations, icons |
| `*.pdf` | CV file linked from the Contact section Download CV button |

The `<head>` contains one intentionally inline `<script>` — the no-flash theme init. It must stay inline to run before CSS loads and prevent a flash of unstyled content.

## 🎨 Design System

### Color Tokens

All colors are CSS custom properties. Never hard-code hex values in components.

**Light theme (`:root`):**

| Token | Value | Usage |
| --- | --- | --- |
| `--bg` | `#FFFFFF` | Page background |
| `--surface` | `#F8F9FA` | Section/card backgrounds |
| `--surface-elevated` | `#F0F2F5` | Elevated surfaces (code titlebar) |
| `--text-primary` | `#1A1A1A` | Headings, strong text |
| `--text-secondary` | `#555555` | Body copy, descriptions |
| `--text-muted` | `#888888` | Labels, metadata |
| `--border` | `#E5E7EB` | Card and component borders |
| `--border-subtle` | `#F0F2F5` | Hero grid pattern |
| `--accent` | `#1F4E79` | Primary accent (buttons, links, icons) |
| `--accent-light` | `#2563a8` | Hover state for accent |
| `--nav-bg` | `rgba(255,255,255,0.85)` | Sticky nav background |
| `--overlay-bg` | `rgba(255,255,255,0.96)` | Mobile menu overlay |

**Dark theme (`[data-theme="dark"]`):**

| Token | Value |
| --- | --- |
| `--bg` | `#0A0A0A` |
| `--surface` | `#171717` |
| `--surface-elevated` | `#1F1F1F` |
| `--text-primary` | `#FAFAFA` |
| `--text-secondary` | `#A1A1AA` |
| `--text-muted` | `#71717A` |
| `--border` | `#262626` |
| `--border-subtle` | `#1F1F1F` |
| `--accent` | `#3B82F6` |
| `--accent-light` | `#60A5FA` |
| `--nav-bg` | `rgba(10,10,10,0.85)` |
| `--overlay-bg` | `rgba(10,10,10,0.97)` |

### Typography

| Role | Font | Weights |
| --- | --- | --- |
| Headings & body | Inter | 400, 600, 700 |
| Code accents, monospace labels | JetBrains Mono | 400, 500 |
| Arabic | Cairo | 400, 600, 700 |

Type scale: H1 `clamp(2rem, 5vw, 3rem)` → H2 `clamp(1.6rem, 3.5vw, 2.25rem)` → H3 `clamp(1.1rem, 2.5vw, 1.5rem)` → body `1rem`.

### Spacing

- Max content width: `1200px` (`.container`)
- Section padding: `5rem` desktop / `3rem` mobile
- Card border-radius: `12px`; button border-radius: `8px`

## 🌓 Theme System

- CSS variables on `:root` (light) and `[data-theme="dark"]`
- Persisted in `localStorage` under the key `theme`
- `applyTheme(theme)` in `script.js` updates the attribute, both icon sets (header + mobile overlay), and aria-label
- The no-flash init in `<head>` reads localStorage/OS preference and sets `data-theme` before the browser paints

## 🌐 Internationalization

- All translatable text lives in the `i18n` object at the top of `script.js`
- HTML elements use `data-i18n="key"` — `applyLang()` walks the DOM and swaps text
- Persisted in `localStorage` under the key `lang`
- RTL is applied by setting `dir="rtl"` and `lang="ar"` on `<html>` — CSS logical properties (`margin-inline-start`, `padding-block-end`, etc.) handle layout flipping automatically
- Arabic font is applied via `[lang="ar"] body { font-family: var(--font-arabic) }`
- `applyLang()` also updates the language button text in both the header and the mobile overlay

## 📲 Mobile Navigation

The mobile menu is a full-screen overlay (`position: fixed; inset: 0`):

- Toggled by the hamburger button (`id="hamburger"`) which animates to an X
- `header.menu-open` raises the header's z-index to `300` so it floats above the overlay (`z-index: 200`)
- `openMenu()` locks body scroll, sets `aria-hidden="false"` on the overlay, and focuses the first link after 320ms
- `closeMenu()` reverses all of the above
- Escape key closes and returns focus to the hamburger
- Nav links stagger in with 80ms delays; RTL uses a mirrored keyframe
- Theme and language toggles at the bottom of the overlay proxy to the same `applyTheme`/`applyLang` functions as the header controls
- `prefers-reduced-motion` disables all overlay animations

## 📝 Common Maintenance Tasks

### Adding a new project

1. Copy an existing `<article class="project-card">` block in the `#projects` section of `index.html`
2. Add EN and AR translation keys (`proj5_title`, `proj5_role`, `proj5_desc`) to both objects in `script.js`
3. Update `data-i18n` attributes on the new card to match

### Updating contact info

- Edit `href` values (`mailto:`, `tel:`, `https://`) on `.contact-icon-item` elements in `index.html`
- Update the matching `.contact-icon-value` text
- Phone number stays in Western digits in both languages

### Replacing the CV

- Drop the new PDF into the project root
- Filename: `Mohamed-Elkamary-Senior-Frontend-Engineer.pdf`
- If the filename changes, update the `href` on the Download CV button in `index.html`

### Adding a translation key

1. Add the key + EN string to `i18n.en` in `script.js`
2. Add the key + AR string to `i18n.ar`
3. Add `data-i18n="your_key"` to the HTML element

## ⚠️ Conventions

- **Colors:** always use CSS custom properties — never raw hex in component styles
- **Animations:** `transform` and `opacity` only — keeps everything on the GPU compositor
- **Reduced motion:** wrap every animation in a `prefers-reduced-motion` check or override
- **Responsive:** mobile-first — base styles target mobile, `@media (min-width: …)` or `@media (max-width: …)` for breakpoints
- **Semantic HTML:** use `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>` — not generic `<div>` wrappers for layout regions
- **Accessibility:** icon-only buttons must have `aria-label`; interactive elements need `:focus-visible` outlines; use `aria-expanded` / `aria-hidden` / `aria-modal` on the mobile overlay

## 🚫 Do Not

- Add external JavaScript libraries or frameworks
- Hard-code hex values in component CSS
- Add heavy shadows, glassmorphism, particle effects, or 3D transforms
- Use stock illustrations
- Break bilingual support when editing text or layout
- Skip `prefers-reduced-motion` handling on new animations
- Commit without updating this file if the architecture changes

## 📐 Layout Reference

| Breakpoint | Behavior |
| --- | --- |
| `≤ 600px` | About stats: single column |
| `≤ 640px` | Contact icon grid: 2×2 |
| `≤ 768px` | Mobile nav, single-column projects/timeline |
| `≤ 900px` | Hero: hide code snippet, single column |

## 🎯 Quality Targets

- Lighthouse Performance: 95+
- Lighthouse Accessibility: 95+
- Lighthouse Best Practices: 95+
- Lighthouse SEO: 95+
- Minimum viewport tested: 375px wide

## 🔗 External Dependencies

| Resource | How loaded | Version |
| --- | --- | --- |
| Lucide Icons | `<script>` CDN in `<head>` | 0.344.0 (pinned) |
| Inter + JetBrains Mono + Cairo | Google Fonts `<link>` in `<head>` | latest |

Lucide is pinned to `0.344.0` because `linkedin` and `github` icons were added in ~v0.290 and `@latest` was sometimes resolving to an older cached build.
