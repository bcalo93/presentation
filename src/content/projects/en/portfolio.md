---
locale: en
path: portfolio
order: 1
title: Portfolio
summary: A fast Astro portfolio built as a technical point of contact, with structured content, clear navigation, and room to grow over time.
status: Active
problem: Create a portfolio that works as a clear introduction, a technical presentation, and a place to connect with peers without turning it into an overbuilt personal website.
repositoryLabel: This repository
stack:
  - Astro
  - TypeScript
  - Sass
  - SEO
highlights:
  - Designed as a focused point of contact rather than a generic personal landing page.
  - Structured to present experience, projects, and technical thinking clearly.
  - Built to grow over time, including future bilingual content, without overengineering the first version.
constraints:
  - The site needed to stay fast and easy to scan without losing technical depth.
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
statusNote: The portfolio already works as a solid presentation layer and continues to evolve as a longer-term technical artifact.
nextStep: The next step is to keep improving the content depth and project case studies while preserving the clarity of the main experience.
nextStepsTitle: Future iterations
roadmap:
  - Add Spanish content and localized routing once the English information architecture is stable.
  - Introduce writing or deeper engineering notes only if they strengthen technical credibility without slowing navigation.
  - Keep evolving project case studies so the portfolio shows reasoning and outcomes instead of becoming a static profile page.
---

This portfolio was built as a clear point of contact and presentation, especially for people in tech. The idea was not to create a decorative personal site, but something simple, intentional, and useful for showing how I work and what I care about technically.

Astro was a good fit because most of the site is content-driven and does not need unnecessary client-side complexity. That made it easier to keep the experience fast, structured, and ready to grow without adding noise.

The homepage stays concise, while project pages create room for more detail around architecture, trade-offs, and implementation decisions. That balance matters to me because I want the portfolio to feel clear at first glance, but still rewarding if someone wants to look deeper.
