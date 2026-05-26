# Profile Presentation

Personal portfolio built with Astro and Sass to present professional experience, projects, and a technical profile in two languages. The project prioritizes structured content, solid SEO foundations, and a simple architecture that is easy to maintain as the site evolves.

## Purpose

This site works both as a professional portfolio and as a frontend implementation case study. It brings together editorial content in Astro collections, project pages structured as case studies, and an architecture prepared to maintain English and Spanish versions without duplicating presentation logic.

## Setup

This repository uses `pnpm` as its package manager.

```sh
pnpm install
```

## Commands

| Command             | Action                                             |
| :------------------ | :------------------------------------------------- |
| `pnpm dev`          | Start the local Astro dev server                   |
| `pnpm build`        | Build the static production site into `dist/`      |
| `pnpm preview`      | Preview the production build locally               |
| `pnpm lint`         | Run Astro and TypeScript checks                    |
| `pnpm format`       | Format the repository with Prettier                |
| `pnpm format:check` | Validate formatting without changing files         |
| `pnpm check:links`  | Check generated local links and anchors in `dist/` |
| `pnpm quality`      | Run the full continuous quality suite              |

## Project Structure

- `src/pages`: route definitions for the English and Spanish versions of the site, including project detail pages and sitemap generation.
- `src/components`: reusable Astro components and homepage sections used to compose the portfolio UI.
- `src/content`: structured content for `home`, `experience`, `projects`, and `education`, split by locale.
- `src/i18n`: locale configuration, localized route segments, and language switch helpers.
- `src/layouts` and `src/utils`: shared page shell, content helpers, and supporting utilities.
- `public`: static public assets such as `robots.txt`.
- `docs`: supporting documentation such as release and quality checklists.
- `scripts`: repository-specific automation, including local link validation for the generated build.

## Localization

Localization is handled through two locales defined in [`src/i18n/config.ts`](/Users/bcalo/Documents/workspace/profile_presentation/src/i18n/config.ts): `en` and `es`. English is the default locale, so the main homepage lives at `/` and the Spanish version lives at `/es`.

Localized content is organized into folders inside [`src/content`](/Users/bcalo/Documents/workspace/profile_presentation/src/content), for example `src/content/home/en` and `src/content/home/es`. Project routes also change by language: `projects` for English and `proyectos` for Spanish.

## Quality

The continuous quality baseline includes:

- Astro and TypeScript validation with `astro check`.
- Consistent formatting with Prettier and the Astro plugin.
- Broken local link detection against the generated build output.
- GitHub Actions CI for pull requests and pushes to `main`.

For the full release checklist, see [docs/quality-checklist.md](/Users/bcalo/Documents/workspace/profile_presentation/docs/quality-checklist.md).
