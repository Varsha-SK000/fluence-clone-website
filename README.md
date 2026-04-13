# Fluence AI – Clone

A production-ready clone of [fluence.framer.website](https://fluence.framer.website) built with React 18, Vite 5, Tailwind CSS v4, and Framer Motion.

---

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start dev server (http://localhost:5173)
npm run dev

# 3. Production build → /dist
npm run build

# 4. Preview production build locally
npm run preview
```

---

## 📦 Tech Stack

| Tool | Version | Purpose |
|---|---|---|
| React | 18.x | UI library |
| Vite | 5.x | Build tool |
| Tailwind CSS | 4.x | Utility styling |
| Framer Motion | 11.x | Animations |
| Lenis | 1.x | Smooth scrolling |
| React Router | 6.x | Client-side routing |

---

## 🗂 Project Structure

```
src/
  components/
    Navbar.jsx          ← Sticky nav with scroll-aware blur + mobile menu
    Hero.jsx            ← Full-screen video hero with AI chat UI
    BuildSection.jsx    ← 2×2 feature cards (Adaptive Learning, etc.)
    Features.jsx        ← Sticky parallax product overview rows
    AutomationTicker.jsx← Scrolling ticker with video background
    About.jsx           ← Scroll-reveal animated text section
    Keybenefits.jsx     ← 3-col benefits grid with security card
    Testimonial.jsx     ← Auto-advancing testimonial slider + stats
    Process.jsx         ← 3-step process with illustrated cards
    Pricing.jsx         ← Monthly/yearly pricing toggle cards
    RequestDemoTicker.jsx← Large text scrolling ticker
    FAQ.jsx             ← Accordion FAQ with sticky left panel
    Blog.jsx            ← 3-col blog card grid
    Footer.jsx          ← Full footer with CTA, links, socials
    Contact.jsx         ← Contact page with form + success state
    Notfound.jsx        ← 404 page
  App.jsx               ← Router + Lenis setup
  index.css             ← Global styles + Tailwind import
  main.jsx              ← React root
public/
  icons/                ← Social + AI icons
  favicon.svg
  _redirects            ← Netlify SPA routing
```

---

## 🌐 Deployment

### Vercel (Recommended)
```bash
npm i -g vercel
vercel --prod
```
Vercel auto-detects Vite. SPA routing works out of the box.

### Netlify
```bash
npm i -g netlify-cli
npm run build
netlify deploy --prod --dir=dist
```
The `public/_redirects` file handles SPA routing on Netlify.

### Cloudflare Pages
Connect your GitHub repo in the Cloudflare Pages dashboard:
- Build command: `npm run build`
- Output directory: `dist`

---

## ⚡ Performance Tips

1. **Code splitting** – Already configured in `vite.config.js` with `manualChunks`
2. **Lazy loading routes** – Add `React.lazy()` around Contact/NotFound in `App.jsx` for further optimization
3. **Image CDN** – Replace `framerusercontent.com` URLs with your own CDN + WebP images
4. **Video fallback** – Add `poster` attribute to `<video>` elements for users with slow connections
5. **Font preloading** – Add `<link rel="preload">` for Bricolage Grotesque in `index.html`

---

## 📈 Scaling Best Practices

- **Hosting**: Use Vercel Edge Network or Cloudflare Pages for global CDN
- **Analytics**: Add Vercel Analytics or Plausible for lightweight tracking
- **Forms**: Replace the Contact form with Formspree, Resend, or a serverless function
- **CMS**: Add Contentful or Sanity for blog content management
- **Testing**: Add Vitest for unit tests and Playwright for E2E
