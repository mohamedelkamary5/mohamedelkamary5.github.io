# Mohamed Elkamary — Portfolio

> Personal portfolio website for a Senior Frontend Engineer

[![Live Demo](https://img.shields.io/badge/Live-Demo-1F4E79?style=flat&logo=google-chrome&logoColor=white)](https://mohamedelkamary5.github.io)

## ✨ Features

- 🌓 **Light & Dark theme** with system preference detection
- 🌐 **Bilingual support** (English & Arabic with RTL)
- 📱 **Fully responsive** mobile-first design
- ♿ **Accessible** (WCAG AA compliant)
- 🚀 **Zero build step** — pure HTML/CSS/JS
- 🎨 **Subtle animations** with reduced-motion support
- 📲 **Full-screen mobile menu** with staggered animation and focus management
- 📊 **SEO optimized** with Open Graph tags and JSON-LD schema

## 🛠 Tech Stack

- HTML5 + CSS3 + Vanilla JavaScript (ES6+)
- [Lucide Icons](https://lucide.dev) v0.344.0 (CDN)
- [Google Fonts](https://fonts.google.com) — Inter, JetBrains Mono, Cairo

## 📁 Project Structure

```text
portfolio/
├── index.html      # HTML structure
├── styles.css      # All styles (theming + layout + components)
├── script.js       # All JavaScript (i18n, theme, animations)
├── *.pdf           # CV download
└── README.md       # This file
```

## 🚀 Getting Started

### Run Locally

```bash
# Option 1: open directly
open index.html

# Option 2: local server (avoids font CORS quirks)
npx serve .
python3 -m http.server 8000
```

### Deploy to GitHub Pages

1. Push all files to the `master` branch of `username.github.io`
2. Enable GitHub Pages in repository settings (branch: `master`, root: `/`)
3. Site available at `https://username.github.io`

## 🎨 Customisation

| What | Where |
| --- | --- |
| All visible text (EN + AR) | `i18n` object in `script.js` |
| Colors / spacing | CSS variables in `styles.css` |
| Projects / experience | Sections in `index.html` |
| CV file | Replace the PDF in project root |

## 📜 License

MIT — feel free to use this as a template for your own portfolio.

## 🙏 Credits

- Icons: [Lucide](https://lucide.dev)
- Fonts: [Google Fonts](https://fonts.google.com)
- Design inspiration: Vercel, Linear, Stripe
