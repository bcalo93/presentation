# Profile Presentation

Portfolio site built with Astro, Sass, and content collections for bilingual professional content.

## Commands

| Command             | Action                                             |
| :------------------ | :------------------------------------------------- |
| `yarn dev`          | Start the local Astro dev server                   |
| `yarn build`        | Build the static production site into `dist/`      |
| `yarn preview`      | Preview the production build locally               |
| `yarn lint`         | Run Astro and TypeScript checks                    |
| `yarn format`       | Format the repository with Prettier                |
| `yarn format:check` | Validate formatting without changing files         |
| `yarn check:links`  | Check generated local links and anchors in `dist/` |
| `yarn quality`      | Run the full continuous quality suite              |

## Quality

The continuous quality baseline includes:

- Astro and TypeScript validation with `astro check`.
- Consistent formatting with Prettier and the Astro plugin.
- Broken local link detection against the generated build output.
- GitHub Actions CI for pull requests and pushes to `main`.

For the full release checklist, see [docs/quality-checklist.md](/Users/bcalo/Documents/workspace/profile_presentation/docs/quality-checklist.md).
