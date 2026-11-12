# Trazo: design document and migration plan

## Status and purpose

**Status:** proposal ready for implementation.

This document is the source of truth for migrating the portfolio to the **Trazo** design system. It is aimed at the agent or developer executing the redesign and defines the visual direction, foundations, components, accessibility, migration phases and acceptance criteria.

The migration must preserve the current Astro, Sass, routes, collections, bilingual content and static behavior. It does not require React, UI frameworks or animation libraries.

## 1. Design direction: Trazo

**Concept:** engineering made visible.

Trazo is an editorial and technical visual system inspired by blueprints, architecture documentation and decision-making processes. The interface must communicate that Brahian not only masters technologies, but also that he:

- designs systems;
- leads technical decisions;
- stays close to implementation;
- values quality and trade-offs;
- adopts AI with practical judgment.

The identity must move away from the generic tech portfolio based on blue cards, pills and gradients. The memorable element will be a **decision line**: a vertical path with nodes and indexes that connects experience, architecture and case studies.

### Personality

- **Rigorous**, but not cold.
- **Technical**, without resorting to terminal or "hacker" aesthetics.
- **Editorial**, with typographic hierarchy and room to read.
- **Warm**, through ivory backgrounds and a copper accent that dialogues with the current photography.
- **Precise**, with lines, coordinates, numbering and metadata.

### Principles

1. **Decisions take precedence over decoration.**
2. **Projects demonstrate; skills summarize.**
3. **The home page allows scanning; case studies allow depth.**
4. **Dark mode and light mode are two deliberate compositions, not an automatic inversion.**
5. **The design does not need React, scroll animations or additional JavaScript to work.**

## 2. Diagnosis of the current design

### Elements that must be preserved

- Structured and fully bilingual content.
- Case studies with problem, constraints, architecture and trade-offs.
- Personal photography, which adds closeness.
- Static Astro, collections and separation between content and presentation.
- Persistent theme preference and initial support for `prefers-color-scheme`.
- Anchor navigation and localized routes.

### Problems the migration must solve

- Inter, blue and teal produce an identity close to a generic tech template.
- The repeated use of `.card`, `.pill-list` and `.chip` gives projects, experience, education and skills the same hierarchy.
- The most valuable projects do not stand out enough from the rest of the content.
- Case studies present every block as another card, diluting their narrative structure.
- Tokens mainly cover color, space and radii; systematic decisions on typography, motion and elevation are missing.
- There are hardcoded colors in the hero, outside the palette.
- Static tags have hover styles even though they are not interactive.
- Mobile navigation is limited to wrapping elements, without a specific composition.
- There is no skip link, no accessible state for the theme toggle and no uniform strategy for focus under the sticky header.

## 3. Experience architecture

### Home page order

1. **Hero**
2. **Professional summary**
3. **Projects**
4. **Experience**
5. **Skills**
6. **Education**
7. **Contact**

Projects must appear before experience because they are the most concrete evidence of technical reasoning. The navigation order in the `home.md` files must reflect this change. No content schema changes are required.

### Hero

Desktop: asymmetric 7/5 column composition:

- Role as technical metadata.
- Name as the dominant typographic element.
- Current description, without rewriting its message.
- Primary CTA to contact and secondary link to projects.
- Photograph on the right, without looking like a floating card.
- Geometric frame, small registration marks and a localized grid behind the portrait.

Mobile: the photograph becomes a small fixed square avatar (5rem wide, 4:5 ratio, `radius(md)`, accent border) placed next to role + name, without grid pattern or registration marks. Lede, CTAs and social links stay full width below to avoid irregular line wrapping.

The photograph must keep its 4:5 ratio. The warm background of the image integrates with the system's copper accent.

### Professional summary

The seven highlights are presented as a **spec sheet**, in two columns with discreet indexes. Pills are removed.

Figures must not be extracted through parsing nor must the content be modified to fabricate new metrics.

### Projects

Two large editorial compositions, one per project:

- Project number.
- Status.
- Title and summary.
- Stack as a compact technical list.
- Three highlights.
- Dominant link to the case study and secondary link to the repository.
- SplitIt screenshot when available; typographic fallback composition for Portfolio.

No special hardcoded content must be introduced for SplitIt. The component will use the first available screenshot and a fallback for projects without images.

### Experience

A real vertical timeline:

- Period and company as metadata.
- Role and summary with greater hierarchy.
- Achievements as a readable list.
- Stack at the end, visually subordinate.

The decision line becomes the main graphic resource here.

### Skills

A capabilities matrix, not a collection of seven cards:

- Group name on the left.
- Items on the right as inline lists.
- Separation through horizontal rules.
- No mastery bars, percentages or scores not supported by the content.

### Education and contact

- Education is reduced to a compact, typographic block.
- Contact becomes the visual closing of the page: large headline, description, email CTA and direct links.
- Minimal footer, not competing with the final CTA.

## 4. Case studies

Each page must look like a **well-edited architecture document**, not a succession of cards.

### Structure

1. Back link.
2. Header with title, summary and metadata.
3. Local section navigation on desktop.
4. Problem as an editorial column of approximately `68ch`.
5. Constraints, architecture and trade-offs as numbered lists connected by the decision line.
6. Screenshot gallery in a 2×2 grid.
7. Status and next steps as complementary panels.
8. Final links.

Sections must keep their semantic headings and receive stable IDs for local navigation. No lightbox or JavaScript-dependent scroll behavior must be added.

## 5. Design system foundations

### 5.1 Color

| Semantic token           | Light     | Dark      |
| ------------------------ | --------- | --------- |
| `--color-canvas`         | `#F4F1EA` | `#0E1419` |
| `--color-surface`        | `#FBF9F4` | `#151D24` |
| `--color-surface-subtle` | `#E8E3D8` | `#1D2831` |
| `--color-text`           | `#18232D` | `#F3F0E8` |
| `--color-text-muted`     | `#56616B` | `#AAB6C0` |
| `--color-border`         | `#C8C2B6` | `#33424E` |
| `--color-border-strong`  | `#8B857A` | `#60717F` |
| `--color-accent`         | `#9C3B22` | `#FFA07A` |
| `--color-accent-hover`   | `#7C2C17` | `#FFB99D` |
| `--color-on-accent`      | `#FFFFFF` | `#28140D` |

The header must derive its translucent background from `--color-canvas`; it does not need its own second palette.

#### Contrast of the main combinations

| Combination                  | Ratio   |
| ---------------------------- | ------- |
| Light: text/canvas           | 14.13:1 |
| Light: secondary text/canvas | 5.61:1  |
| Light: accent/canvas         | 6.08:1  |
| Light: text on accent button | 6.86:1  |
| Dark: text/canvas            | 16.28:1 |
| Dark: secondary text/canvas  | 8.97:1  |
| Dark: accent/canvas          | 9.32:1  |
| Dark: text on accent button  | 8.83:1  |

All exceed WCAG AA for normal text. Focus uses `--color-accent` with outline and offset, not relying only on background changes.

### 5.2 Typography

- **Display and headings:** Bricolage Grotesque, weights 600–700.
- **Text and interface:** IBM Plex Sans, weights 400–600.
- **Metadata and indexes:** `ui-monospace`, without downloading a third family.

Fonts are self-hosted in WOFF2, with a latin subset, `font-display: swap` and their corresponding licenses.

#### Main scale

| Use            | Value                       |
| -------------- | --------------------------- |
| Metadata       | `0.75rem`                   |
| Secondary text | `0.875rem`                  |
| Body           | `1rem`                      |
| Lede           | `1.125–1.25rem`             |
| H3             | `1.375rem`                  |
| H2             | `clamp(2rem, 4vw, 3.25rem)` |
| Project H1     | `clamp(2.75rem, 6vw, 5rem)` |
| Hero name      | `clamp(3.5rem, 8vw, 7rem)`  |

Body with `1.65` line height; headings between `1.02` and `1.12`; negative tracking only on display.

### 5.3 Space and composition

- 4 px base scale: `4, 8, 12, 16, 24, 32, 48, 64, 96, 128`.
- Maximum container: `76rem`.
- Reading column: `68ch`.
- Fluid gutter: `clamp(1rem, 3vw, 2rem)`.
- Section spacing: `clamp(4.5rem, 9vw, 8rem)`.
- Desktop: 12-column grid.
- Tablet: 6 columns.
- Mobile: 4 columns.
- Breakpoints: `40rem`, `48rem` and `64rem`.

### 5.4 Shape and elevation

- Radii: `4px`, `8px`, `16px` and `pill`.
- Buttons: small radius.
- Photographs and screenshots: medium/large radius.
- Stack tags: rectangular, not pills.
- Status: pill with text and indicator, not color alone.
- Hierarchy through space, borders and surface contrast.
- No glassmorphism, decorative gradients or shadows on every block.

### 5.5 Basic components

#### Button

- Primary: accent background and `--color-on-accent`.
- Secondary: transparent with strong border.
- Text link: for tertiary actions.
- Minimum height of 44 px.
- No scale transforms.

#### TagList

- Strictly informational.
- No hover or button appearance.
- Reused in projects, experience and case studies.

#### SectionHeading

- Eyebrow, title and optional description.
- Section index as a decorative element.
- Shared Astro component to eliminate repeated markup.

#### Panel

- Reserved for metadata, screenshots and states that genuinely need visual grouping.
- It will not be the default container for every section.

## 6. Themes, motion and accessibility

### Dark and light mode

- Keep `data-theme` and the existing `localStorage` key: `theme`.
- Preserve the inline initialization to avoid FOUC.
- Update `color-scheme` and `meta[name="theme-color"]`.
- Reflect the button state with `aria-pressed`.
- Keep decorative icons with `aria-hidden="true"`.
- Do not animate colors during initial load.

### Motion

- Brief, staggered hero entrance.
- Decision line appearance through CSS.
- Mobile menu panel drops from the top on open and slides back up on close (`200ms`, `@starting-style` + `allow-discrete`).
- Maximum 4 px displacement on arrows or link indicators.
- Durations: `120ms`, `200ms` and `480ms`.
- No parallax, scroll-jacking, custom cursor or permanent animation.
- `prefers-reduced-motion: reduce` removes reveals, non-essential transitions and smooth scroll.

### Accessibility

Goal: **WCAG 2.2 AA**.

- Skip link to `main`.
- `scroll-margin-top` for anchors and focus under the header.
- Full keyboard navigation.
- Consistent visible focus.
- DOM order equal to visual order.
- Interactive targets preferably 44×44 px.
- 200% zoom without horizontal content scrolling.
- Screenshots with their current localized alt text.
- Test Spanish and English to avoid truncation.

## 7. Implementation constraints

The executing agent must respect the following constraints:

1. Do not change the routes or the internationalization strategy.
2. Do not modify `src/content.config.ts` beyond additive UI labels (e.g. `nav.menuLabel`): the migration needs no content model changes.
3. Do not rewrite the editorial content. The only allowed changes in `home.md` are those needed to reorder the navigation according to the new home page.
4. Do not add React, a UI framework, an animation library or client-side JavaScript for tasks that CSS and HTML can solve.
5. Keep the site static and the current use of Astro and Sass.
6. Use semantic tokens; do not introduce hexadecimal colors in components.
7. Make scoped changes and follow the project's existing conventions.
8. Run the indicated validations after each phase.
9. Do not ship an incomplete combination of visual systems: the migration may advance in phases, but home and case studies must share the complete system before release.

## 8. Migration plan

The migration must be done on a visual branch, with small, verifiable deliverables, but released only when home and case studies share the complete system.

### Phase 0 — Documentation and baseline

**Scope**

- Keep this document as the implementation reference.
- Capture the current version on mobile/desktop and both themes.
- Run `pnpm quality`.
- Record the six localized routes as the validation matrix.

**Outcome:** approved design and known baseline.

### Phase 1 — Foundations

**Main files**

- `src/assets/styles/_tokens.scss`
- `src/assets/styles/palette.scss`
- `src/assets/styles/_mixins.scss`
- `src/assets/styles/_patterns.scss`
- `src/assets/styles/commons.scss`
- `src/assets/styles/reset.scss`
- New `src/assets/styles/fonts.scss`
- New assets under `public/fonts/`

**Work**

1. Incorporate fonts and the typographic scale.
2. Replace the palette with semantic tokens.
3. Temporarily keep aliases of the old names to avoid a big-bang migration.
4. Remove gradients and hardcoded colors from the hero during its migration.
5. Create global styles for focus, selection, skip link and reduced motion.
6. Add `src/components/SectionHeading.astro` and `src/components/TagList.astro`.

**Validation:** `pnpm quality`, contrast and absence of FOUC.

### Phase 2 — Shell and navigation

**Files**

- `src/layouts/Layout.astro`
- `src/components/Header.astro`
- `src/components/Footer.astro`

**Work**

- New compact header and global grid.
- Mobile navigation as a hamburger menu on mobile only: a native `popover` disclosure listing all sections in a full-width panel below the header; desktop keeps the inline navigation. Minimal inline script only to sync `aria-expanded` and close after link activation, Escape, outside click or resizing to desktop. Requires the `nav.menuLabel` field in the home collections.
- Skip link.
- Accessible theme toggle.
- `theme-color` per mode.
- Offsets for anchors and focus.
- Simplified footer.

**Validation:** keyboard, theme persistence and language switching from home and projects.

### Phase 3 — Home

**Files**

- `src/components/Home.astro`
- All components in `src/components/sections/`
- `src/components/SocialLinks.astro`
- `src/content/home/en/home.md`
- `src/content/home/es/home.md`

**Implementation order**

1. Hero.
2. Snapshot.
3. Projects.
4. Experience.
5. Skills.
6. Education and Contact.

Each section must leave the generic card pattern and adopt its specific composition. Texts, data and collection interfaces must not be altered. In the `home.md` files, only the navigation items are reordered to reflect the home page.

**Validation:** 320, 375, 768, 1024 and 1440 px; both languages and themes.

### Phase 4 — Case studies

**Main file**

- `src/components/ProjectCaseStudy.astro`

**Work**

- Editorial header.
- Semantic metadata.
- Local navigation.
- Decision lists.
- New gallery.
- Status and next steps panels.
- Removal of the repeated use of `.card`.

**Validation:** the four project routes, long content in Spanish, screenshots, anchors and language switching.

### Phase 5 — Cleanup and release

1. Remove Sass aliases that no longer have consumers.
2. Remove `secondary`, `header-bg` and obsolete tokens.
3. Confirm that no component contains its own hexadecimals.
4. Retire `SummaryCard.astro` and `IconLink.astro`, currently with no imports, as cleanup separate from the redesign.
5. Update `docs/quality-checklist.md` with the themes, languages and viewports matrix.
6. Run a full visual review before releasing.

No permanent feature flag must be added. Rollback is done from the branch or preview, without keeping two visual systems in production.

## 9. Validation matrix

### Routes

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

### Mandatory variants

- Light mode.
- Dark mode.
- Spanish.
- English.
- Reduced motion.
- 200% zoom.
- Keyboard navigation.

### Functional checks

- Theme switching and persistence after reload.
- Absence of FOUC when loading with any theme.
- Language switching from home and from projects.
- Anchor navigation without content hidden by the header.
- Mobile menu: opens from the hamburger button and closes on link activation, Escape, outside click and desktop resize.
- Working skip link.
- Repository and contact links.
- Screenshots and alternative texts.
- No horizontal content overflow.

## 10. Acceptance criteria

- [ ] Home and case studies share typography, tokens, controls and visual language.
- [ ] Projects appear before experience in both languages.
- [ ] Light and dark mode keep the same identity and AA contrast.
- [ ] No hardcoded colors remain in components.
- [ ] Static tags no longer look interactive.
- [ ] No regressions in routes, anchors, hreflang, canonicals or sitemap.
- [ ] Theme preference persists without an initial flash.
- [ ] Keyboard, focus, skip link, reduced motion and 200% zoom work correctly.
- [ ] No React, UI frameworks or animation dependencies are added.
- [ ] `pnpm quality` passes completely.
- [ ] Lighthouse in production targets at least 95 in Performance, Accessibility, Best Practices and SEO.

## 11. Expected outcome

The portfolio must present Brahian as an engineer and technical leader who reasons about systems and makes pragmatic decisions. The home page must communicate seniority and evidence quickly; the case studies must reward deep reading. Trazo must achieve that differentiation through typography, composition and hierarchy, without sacrificing performance, accessibility or the existing architectural simplicity.
