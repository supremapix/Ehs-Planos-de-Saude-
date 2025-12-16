# EHS Planos de Saúde - Landing Page

## Overview
Landing page for EHS Corretora de Seguros, a health insurance broker serving Curitiba and the metropolitan region. Built with React + Vite + TypeScript.

## Project Structure
```
├── App.tsx                 # Main app with routing
├── components/
│   ├── EnhancedSEO.tsx    # SEO component with meta tags and structured data
│   ├── HomeSEO.tsx        # Homepage-specific SEO
│   ├── LocationPage.tsx   # Dynamic location pages (bairros/cidades)
│   ├── Sitemap.tsx        # Sitemap page listing all locations
│   └── ...                # Other UI components
├── constants.tsx          # All constants including BAIRROS_CURITIBA and CIDADES_RMC
├── utils/
│   └── slugify.ts         # Shared URL slug generation utility
├── public/
│   ├── sitemap.xml        # Generated sitemap with all URLs
│   ├── robots.txt         # Crawler instructions
│   └── _redirects         # Netlify SPA redirect configuration
├── scripts/
│   ├── generate-sitemap.ts # Script to generate sitemap.xml from constants
│   └── prerender.js       # Script to pre-render all routes with react-snap
├── prerender-routes.json  # Generated list of all routes for pre-rendering
├── src/
│   └── index.tsx          # App entry point with HelmetProvider and hydration
└── package.json           # Includes react-snap configuration
```

## SEO Implementation

### URL Slugification
All location URLs use a consistent slugify function that:
- Converts to lowercase
- Removes diacritics (ã → a, é → e, ç → c)
- Replaces spaces with hyphens
- Removes special characters

Example: "Água Verde" → "agua-verde"

### Components
- **EnhancedSEO**: Uses react-helmet-async to inject meta tags, Open Graph, Twitter Cards, and JSON-LD structured data
- **HomeSEO**: Homepage-specific SEO with WebSite and LocalBusiness schemas
- **LocationPage**: Individual location pages with unique canonical URLs and location-specific meta tags

### Pre-rendering
- **react-snap**: Configured to pre-render pages at build time for SEO crawlers
- Entry point uses hydration to support pre-rendered HTML
- Build process: `npm run build:prerender` runs vite build + react-snap with all routes

### Sitemap Generation
Run `npm run generate-sitemap` to regenerate sitemap.xml and prerender-routes.json.

**Important:** The location lists in `scripts/generate-sitemap.ts` must be kept in sync with `constants.tsx`. When adding or removing locations, update both files and run the sitemap generator.

## Color Scheme
- Primary (dark navy): #0f0f23, #1a1a2e
- Accent (green): #22c55e
- Text: white, gray variants

## Logo Files
- /logo-dark.png - For scrolled header (dark background visible)
- /logo-white.png - For initial header and footer

## Recent Changes
- 2024-12-16: Added SEO optimization with react-helmet-async
- 2024-12-16: Created EnhancedSEO component with comprehensive meta tags
- 2024-12-16: Created shared slugify utility for consistent URL generation
- 2024-12-16: Generated programmatic sitemap.xml with all 151 location URLs
- 2024-12-16: Configured react-snap for pre-rendering static HTML with all routes

## Build & Deploy
- Development: `npm run dev`
- Build (basic): `npm run build`
- Build (with pre-render): `npm run build:prerender` (generates static HTML for all pages)
- Preview: `npm run preview`
- Generate Sitemap: `npm run generate-sitemap`

## Deployment
Configured for Netlify with SPA redirects (_redirects file).
