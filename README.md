# Profile Presentation

Portfolio personal construido con Astro y Sass para presentar experiencia profesional, proyectos y perfil técnico en dos idiomas. El proyecto prioriza contenido estructurado, buenas bases de SEO y una arquitectura simple de mantener para seguir iterando el sitio como producto.

## Purpose

Este sitio funciona como portfolio profesional y también como caso práctico de implementación frontend. Reúne contenido editorial en colecciones de Astro, páginas de proyecto con enfoque de case study, y una estructura preparada para mantener versiones en inglés y español sin duplicar la lógica de presentación.

## Setup

Este repositorio usa `pnpm` como package manager.

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

La localización se resuelve con dos locales definidos en [`src/i18n/config.ts`](/Users/bcalo/Documents/workspace/profile_presentation/src/i18n/config.ts): `en` y `es`. Inglés es el locale por defecto, por eso la home principal vive en `/` y la versión en español en `/es`.

El contenido localizado está organizado por carpetas dentro de [`src/content`](/Users/bcalo/Documents/workspace/profile_presentation/src/content), por ejemplo `src/content/home/en` y `src/content/home/es`. Las rutas de proyectos también cambian por idioma: `projects` para inglés y `proyectos` para español.

## Quality

The continuous quality baseline includes:

- Astro and TypeScript validation with `astro check`.
- Consistent formatting with Prettier and the Astro plugin.
- Broken local link detection against the generated build output.
- GitHub Actions CI for pull requests and pushes to `main`.

For the full release checklist, see [docs/quality-checklist.md](/Users/bcalo/Documents/workspace/profile_presentation/docs/quality-checklist.md).
