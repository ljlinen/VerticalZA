# VerticalZA Redesign Demo (Vite + React)

Same design as the **hero-restored** HTML version, now split into editable React components.

## Start

```bash
npm install
npm run dev
```

Open the local address Vite prints. For a production build: `npm run build`.

## Where to edit

- `src/components/Hero.jsx`: **original header crane illustration**, preserved as SVG
- `src/components/Header.jsx`: text logo, navigation and mobile menu
- `src/data/equipment.js`: equipment names, categories, image URLs and detail links
- `src/components/EquipmentCard.jsx`: equipment card markup
- `src/components/Fleet.jsx`: catalogue filters and grid
- `src/components/About.jsx`, `Services.jsx`, `Contact.jsx`, etc.: page sections
- `src/styles/main.css`: colours, layout and mobile responsiveness

The existing equipment image URLs are unverified placeholders from the previous demo; update `imageUrl` fields in `src/data/equipment.js`. No logo replacement was made. This is an unofficial demonstration website.

Vite uses `base: './'` so a static build works under a GitHub Pages project path.
