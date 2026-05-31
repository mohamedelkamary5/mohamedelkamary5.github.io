# Mohamed Elkamary — Portfolio

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![GitHub Pages](https://img.shields.io/badge/GitHub_Pages-222222?style=flat-square&logo=github&logoColor=white)

Personal portfolio website for **Mohamed Elkamary**, Senior Frontend Engineer. Split across three clean files — no build step, no framework. Just open it.

**Live site:** [mohamedelkamary5.github.io](https://mohamedelkamary5.github.io/)

---

## ✨ Features

| Feature | Detail |
| --- | --- |
| 🌓 Light & Dark theme | System preference detection + manual toggle, persisted in `localStorage` |
| 🌐 Bilingual (EN / AR) | Full English and Arabic translations, RTL layout switching |
| 📱 Responsive | Mobile-first, tested from 375px wide |
| ♿ Accessible | Semantic HTML5, ARIA labels, skip link, keyboard navigation, WCAG AA contrast |
| 🚀 Zero build step | Works on GitHub Pages as-is |
| 🎨 Scroll animations | `IntersectionObserver` fade-ins, hero stagger, stat count-up; all respect `prefers-reduced-motion` |
| 📲 Mobile menu | Full-screen overlay with staggered link animation, Escape-to-close, focus trap, active-section tracking |
| 📊 SEO ready | Meta description, Open Graph tags, JSON-LD Person schema, canonical URL |
| ⚡ Performant | GPU-accelerated animations (`transform`/`opacity` only), `font-display: swap`, no layout shifts |

---

## 🛠 Tech Stack

- **HTML5** — semantic structure (`<header>`, `<main>`, `<section>`, `<footer>`, `<article>`)
- **CSS3** — custom properties for theming, CSS logical properties for RTL, `IntersectionObserver`-driven animations
- **Vanilla JS (ES6+)** — theme system, i18n, scroll effects, count-up; no libraries
- **[Inter](https://fonts.google.com/specimen/Inter)** — primary typeface (Google Fonts)
- **[JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono)** — monospace accents
- **[Cairo](https://fonts.google.com/specimen/Cairo)** — Arabic typeface
- **[Lucide Icons](https://lucide.dev)** v0.344.0 — icon set via CDN

---

## 📄 Sections

1. **Hero** — Name, title, availability badge, CTA buttons, animated code snippet
2. **About** — Bio paragraphs, animated stat cards (years / companies / projects)
3. **Tech Stack** — Categorised skill tags (Frameworks, Languages, Styling, State, Architecture, Tools)
4. **Featured Projects** — Wittify.ai, Jobzella, Aqar Map, Fekretak Sherketak
5. **Experience** — Timeline: Wittify.ai → Jobzella → Kick Start Interactive → MOPHX
6. **Contact** — Centered layout with Download CV CTA and icon grid (Email, Phone, LinkedIn, GitHub)

---

## 🚀 Getting Started

### Run locally

The simplest approach — just open the file:

```bash
open index.html          # macOS
start index.html         # Windows
xdg-open index.html      # Linux
```

Or serve it with any local server (avoids potential CORS quirks with fonts):

```bash
# Python
python3 -m http.server 8080

# Node.js (npx)
npx serve .

# VS Code
# Install the "Live Server" extension and click "Go Live"
```

Then visit `http://localhost:8080`.

### Deploy to GitHub Pages

1. **Push to GitHub:**

   ```bash
   git add index.html styles.css script.js Mohamed-Elkamary-Senior-Frontend-Engineer.pdf
   git commit -m "Portfolio"
   git push origin main
   ```

2. **Enable Pages:**
   - Go to your repo → **Settings** → **Pages**
   - Source: **Deploy from a branch**
   - Branch: `main` / `(root)`
   - Click **Save**

3. Your site will be live at `https://<your-username>.github.io/<repo-name>/` within a minute.

> **Note:** The CV download (`Mohamed-Elkamary-Senior-Frontend-Engineer.pdf`) must be in the repo root alongside the other files for the download button to work.

---

## 📁 File Structure

```text
Portfolio/
├── index.html                                     # HTML structure only
├── styles.css                                     # All CSS (variables → reset → components → sections)
├── script.js                                      # All JavaScript (i18n, theme, lang, animations, icons)
├── Mohamed-Elkamary-Senior-Frontend-Engineer.pdf  # CV (linked from Contact section)
└── README.md
```

### index.html

Pure HTML — no embedded styles or scripts. Contains:

- Meta tags (SEO, Open Graph, JSON-LD, theme-color)
- Google Fonts + Lucide Icons (CDN)
- Tiny no-flash theme-init `<script>` (must stay inline to prevent FOUC)
- `<link rel="stylesheet" href="styles.css">`
- All semantic markup: `<header>`, `<main>`, `<footer>`, sections
- `<script src="script.js" defer>` at end of body

### styles.css

Organised in this order:

1. CSS custom properties (light & dark theme tokens)
2. Reset & base styles
3. Typography
4. Layout utilities
5. Skip link, buttons, scroll animations
6. Navigation (sticky header, hamburger, mobile drawer)
7. Sections: Hero → About → Skills → Projects → Experience → Contact → Footer
8. Focus styles (accessibility)

### script.js

Organised in logical groups:

1. `i18n` translations object (EN + AR)
2. Theme management (`applyTheme`) — syncs header and overlay icons
3. Language switching (`applyLang`) — syncs header and overlay buttons
4. Mobile overlay menu (`openMenu` / `closeMenu`) — body-scroll lock, focus management, Escape key
5. Active-section tracking — `IntersectionObserver` highlights the current section in the overlay nav
6. Navbar scroll border
7. Scroll animations (`IntersectionObserver`, `countUp`)
8. Lucide icon initialisation

---

## ✏️ Customisation

### Update personal info

All visible text is in the `i18n` object in `script.js`. Search for the key you want to change:

```js
// English
en: {
  hero_name: 'Mohamed Elkamary',   // ← change your name
  hero_role: 'Senior Frontend Engineer',
  hero_tagline: 'Architecting scalable SaaS ...',
  // ...
}

// Arabic
ar: {
  hero_name: 'محمد القمري',
  // ...
}
```

### Add or edit projects

Find the `#projects` section in `index.html` and duplicate an `<article class="project-card">` block. Then add matching `data-i18n` keys to the `i18n` object in `script.js`.

### Change contact info

1. Update the `href` attributes on the contact icon items (`mailto:`, `tel:`, `https://`)
2. Update the displayed values in the `<span class="contact-icon-value">` elements
3. Update matching i18n keys if the labels need translation

### Change accent colour

Update `--accent` in `styles.css` for both themes:

```css
:root {
  --accent: #1F4E79;   /* light theme accent */
}

[data-theme="dark"] {
  --accent: #3B82F6;   /* dark theme accent */
}
```

### Replace the CV

Drop your new PDF into the repo root with the same filename:

```text
Mohamed-Elkamary-Senior-Frontend-Engineer.pdf
```

Or update the `href` in the Download CV button in `index.html` to match your filename.

---

## 🌍 Browser Support

| Browser | Support |
| --- | --- |
| Chrome / Edge | ✅ Full |
| Firefox | ✅ Full |
| Safari 15+ | ✅ Full |
| Safari 14 | ⚠️ No `backdrop-filter` on some elements |
| IE | ❌ Not supported |

---

## 🤝 Credits

- **Fonts:** [Inter](https://rsms.me/inter/), [JetBrains Mono](https://www.jetbrains.com/lp/mono/), [Cairo](https://fonts.google.com/specimen/Cairo) — via Google Fonts
- **Icons:** [Lucide](https://lucide.dev) (MIT licence)
- **Design inspiration:** [Vercel](https://vercel.com), [Linear](https://linear.app), [Stripe](https://stripe.com)

---

## 📄 License

MIT — feel free to fork and adapt for your own portfolio. Attribution appreciated but not required.
