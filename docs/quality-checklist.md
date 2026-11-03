# Quality Checklist

Use this checklist before publishing major content or design updates.

## Automated checks

Run the full validation suite locally:

```sh
pnpm quality
```

This covers:

- `astro check` for Astro, TypeScript, and content issues.
- Prettier consistency checks.
- Production build validation.
- Broken local link and anchor detection on the generated `dist/` site.

## Manual release checks

Run these checks on the preview deployment or a local production preview:

1. Start a local preview with `pnpm build && pnpm preview`.
2. Open Chrome DevTools Lighthouse and run:
   - Performance
   - Accessibility
   - Best Practices
   - SEO
3. Review keyboard navigation:
   - tab through header navigation and language switcher,
   - activate the theme toggle,
   - open both project case studies,
   - verify the "back to top" link.
4. Confirm key metadata:
   - canonical URL,
   - alternate language links,
   - sitemap generation,
   - robots.txt.
5. Confirm portfolio content is current:
   - experience dates,
   - project summaries,
   - contact links

## Release validation matrix

Run this matrix before tagging a release. Check every combination of route,
viewport, and variant where it applies.

### Rutas

- `/`
- `/es`
- `/projects/portfolio`
- `/projects/splitit`
- `/es/proyectos/portfolio`
- `/es/proyectos/splitit`

### Viewports

- 320 px
- 375 px
- 768 px
- 1024 px
- 1440 px

### Variantes obligatorias

- light mode
- dark mode
- español
- inglés
- reduced motion
- zoom 200%
- navegación por teclado

### Comprobaciones funcionales

- cambio de tema + persistencia tras recargar
- ausencia de FOUC
- cambio de idioma desde home y proyectos
- navegación por anchors sin contenido tapado
- skip link operativo
- enlaces de repositorio/contacto
- capturas y alt text
- ausencia de overflow horizontal

## CI baseline

GitHub Actions runs the automated checks on every pull request and on pushes to `main` via `.github/workflows/quality.yml`.
