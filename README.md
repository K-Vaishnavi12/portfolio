# Katula Vaishnavi · Portfolio

A clean, professional student portfolio with a warm personality.
Built with plain HTML, CSS, and JavaScript — no frameworks, no build step.

## Run it

Double-click `index.html` to open in your browser. That's it.

## File tree

```
portfolio/
├── index.html       <- the page
├── css/style.css    <- all styling
├── js/main.js       <- theme toggle + smooth scroll + reveal
├── assets/          <- put your photo + resume here
└── README.md        <- this file
```

## Customize

### 1. Add your photo
Drop a portrait photo as `assets/profile.jpg`. Then in `index.html`,
find the `<div class="photo-placeholder">` block and replace it with:

```html
<img src="assets/profile.jpg" alt="Katula Vaishnavi" />
```

### 2. Add your resume
Drop your CV as `assets/resume.pdf`. The Resume pill in the hero already
links to it — the button will show a toast if the file is missing.

### 3. Update projects
In `index.html`, find "ML Mini-Project" and "Java DSA Practice" and
replace them with your real projects. Each project card needs:
- Year + status
- Title
- Subtitle (one-line tagline)
- Description (2-3 sentences)
- Tech stack tags
- GitHub link

### 4. Update education
Replace "Your school name" with your actual school name in the
Education section.

### 5. Change the accent color
All design tokens are at the top of `css/style.css` under `:root`.
The main accent is `--accent: #D2533B` (warm terracotta).
Try other warm colors like:
- `#C2492E` (deeper rust)
- `#E07856` (lighter coral)
- `#A8443B` (brick)
- `#2E6B5C` (forest — keep --accent-soft and --accent-deep matching)

## Deploy

### Netlify drop (instant)
1. Go to https://app.netlify.com/drop
2. Drag this `portfolio` folder onto the page
3. You get a live URL immediately

### GitHub Pages (free + uses your username)
1. Create a repo called `K-Vaishnavi12.github.io`
2. Push these files to the root
3. Live at https://K-Vaishnavi12.github.io

## Features

- Light + dark mode (auto-respects system, manual toggle in nav)
- Subtle photo card 3D tilt on hover
- Smooth scroll for nav links
- Scroll-triggered reveal animations
- Resume button with friendly toast fallback if file is missing
- Fully responsive (breakpoints at 960px and 540px)
- Honors `prefers-reduced-motion`
- Semantic HTML + accessible nav

## Earlier versions

These are kept as siblings in case you want to revisit a design:
- `portfolio-creative-version` — playful (stickers, polaroid, doodles)
- `portfolio-professional-version` — navy + electric blue corporate look
- `portfolio-pastel-version` — soft lavender + peach
- `portfolio-bold-version` — coral + ink "Neural Garden"
- `portfolio-bento-version` — Apple bento grid
- `portfolio-saas-minimal` — Linear / Vercel style
- `portfolio-terminal-version` — green-on-black hacker vibe
