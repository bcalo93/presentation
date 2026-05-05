# Quality Checklist

Use this checklist before publishing major content or design updates.

## Automated checks

Run the full validation suite locally:

```sh
yarn quality
```

This covers:

- `astro check` for Astro, TypeScript, and content issues.
- Prettier consistency checks.
- Production build validation.
- Broken local link and anchor detection on the generated `dist/` site.

## Manual release checks

Run these checks on the preview deployment or a local production preview:

1. Start a local preview with `yarn build && yarn preview`.
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
   - contact links,
   - resume availability.

## CI baseline

GitHub Actions runs the automated checks on every pull request and on pushes to `main` via `.github/workflows/quality.yml`.
