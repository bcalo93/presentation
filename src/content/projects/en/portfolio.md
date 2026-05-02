---
locale: en
path: portfolio
order: 1
title: Portfolio
summary: A fast Astro portfolio designed as a product surface for hiring flows, structured content, and future bilingual expansion.
status: Active
problem: Present a professional profile through a fast, content-driven site that communicates technical depth and credibility.
repositoryLabel: This repository
stack:
  - Astro
  - TypeScript
  - Sass
  - SEO
highlights:
  - Single-page architecture optimized for hiring flows.
  - Responsive sections with strong information hierarchy.
  - Prepared for future bilingual content without overbuilding the MVP.
constraints:
  - The site needed to stay fast and easy to scan during recruiter and hiring-manager flows.
  - The MVP had to launch in English while keeping the structure ready for a later Spanish version.
  - Most content is static, so extra client-side JavaScript would add cost without improving the core experience.
architecture:
  - Astro drives the site as a content-first static application with section-based navigation on the homepage.
  - Content Collections separate experience, projects, and education from presentation so updates do not require component rewrites.
  - Shared layout and section components keep the visual system consistent while allowing dedicated project detail pages.
tradeoffs:
  - A single-page homepage was chosen for speed and clarity even though it limits how much detail can live above the fold.
  - React islands were intentionally avoided in the MVP to preserve performance and reduce maintenance overhead.
  - The content model was made future-ready for i18n without building a full language switcher before Spanish content exists.
statusNote: The portfolio already works as a professional homepage and now expands into project case studies so the work shows reasoning, constraints, and technical decisions.
nextStep: The most likely future iteration is to deepen the portfolio as a long-term professional artifact without adding noise to the hiring flow.
nextStepsTitle: Future iterations
roadmap:
  - Add Spanish content and localized routing once the English information architecture is stable.
  - Introduce writing or deeper engineering notes only if they strengthen technical credibility without slowing navigation.
  - Keep evolving project case studies so the portfolio shows reasoning and outcomes instead of becoming a static profile page.
---

This portfolio is intentionally treated as a product, not just a personal landing page. The goal is to help a recruiter qualify the profile quickly while still giving a technical evaluator enough context to inspect engineering judgment.

Phase 1 focused on turning the site into a credible professional MVP. Phase 2 moved the project toward a content architecture that can scale with more experience entries, more case studies, and a future bilingual version. This phase adds project details so the portfolio itself demonstrates how product goals, content modeling, and performance concerns were balanced.

The central design choice was to keep the homepage concise and scannable, then use dedicated case-study pages for technical depth. That preserves the hiring flow on `/` while creating room for architecture, trade-offs, and roadmap decisions where they belong.
