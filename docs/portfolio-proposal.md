# Product Proposal and Development Plan

## 1. Product Definition

### Primary Goal

Build a modern professional portfolio web application that presents Brahian Calo as a systems engineer, technical leader, and full-stack-oriented software engineer with strong frontend expertise, backend experience, performance awareness, and practical AI adoption.

This MVP should be in English to support international hiring opportunities, while keeping the architecture ready for a future Spanish version without rewriting the application.

The goal is not to build a simple landing page. The application should work as a professional profile, project showcase, technical narrative, and trust-building surface for recruiters, hiring managers, engineering managers, and technical interviewers.

### Target Audience

- Technical recruiters who need to quickly understand seniority, role fit, technologies, experience, and contact options.
- Hiring managers and engineering managers looking for evidence of ownership, technical leadership, and delivery mindset.
- Tech leads and architects who want to evaluate engineering judgment, system thinking, code quality, and project decisions.
- International companies evaluating English communication and technical breadth.
- Professional contacts coming from LinkedIn, GitHub, referrals, or job applications.

### Positioning

Recommended positioning:

> Technical Lead and Software Engineer focused on building maintainable, high-quality web applications, with strong JavaScript/TypeScript experience across React and Express, growing expertise in Go for performant backend systems, and practical AI adoption to improve engineering workflows.

### Value Proposition

Brahian's portfolio should communicate four strong differentiators:

- **Technical leadership with hands-on execution**: experience as a Technical Lead while still being close to implementation, architecture, code quality, and team practices.
- **Frontend depth plus backend capability**: solid JavaScript/TypeScript experience in frontend with React and backend with Express.
- **Performance-oriented backend growth**: one year working with Go to build performant applications and broaden backend/system-level capabilities.
- **Practical AI adoption**: early and consistent use of AI to improve development processes, productivity, and team workflows.

### Recommended MVP Bio Copy

```md
I am a systems engineer passionate about technology, software quality, and product-minded engineering. I enjoy building elegant, maintainable applications and improving the way teams deliver software.

I work comfortably with JavaScript and TypeScript across the stack: React on the frontend and Express on the backend. Over the last year, I have also been working with Go to build performant applications and expand my backend engineering capabilities.

AI has become a key part of how I approach modern software development. I invest time in understanding how to use it effectively to improve engineering workflows, decision-making, and delivery quality.
```

## 2. Application Architecture

### Recommended Sitemap

For the MVP, use a single-page experience with anchored sections. This keeps the portfolio fast, direct, and easy to consume during hiring flows.

```txt
/
  #home
  #experience
  #projects
  #skills
  #education
  #contact
/projects/splitit
/projects/portfolio
/resume.pdf
```

Future bilingual expansion:

```txt
/
/es
/projects/[slug]
/es/proyectos/[slug]
/writing
/es/articulos
```

Alternative future structure if internationalization becomes central:

```txt
/en
/es
/en/projects/[slug]
/es/proyectos/[slug]
```

For the MVP, I recommend keeping `/` in English and preparing the content model so Spanish can be added later.

### Key Components

Astro should remain the foundation. Most of the portfolio is content-driven and static, so Astro gives the best balance of performance, SEO, maintainability, and low JavaScript cost.

Recommended Astro components:

- `Layout.astro`: base HTML, global metadata, Open Graph, language attributes, slots, and global styles.
- `Seo.astro`: reusable SEO component for title, description, canonical URL, social image, and locale metadata.
- `Header.astro`: anchor navigation, language switch placeholder, responsive behavior, and social links.
- `Hero.astro`: name, role, positioning statement, profile image, primary CTA, secondary CTA, and social links.
- `ProfessionalSnapshot.astro`: compact facts such as years of experience, current role, location, core strengths, and availability.
- `ExperienceTimeline.astro`: professional experience grouped by company, role, period, impact, and technologies.
- `ProjectCard.astro`: concise project summary with problem, status, stack, repository link, and technical highlights.
- `ProjectDetail.astro`: layout for future project case studies.
- `SkillsMatrix.astro`: structured skills grouped by frontend, backend, leadership, architecture, AI, and product thinking.
- `Education.astro`: university background and applied learning.
- `Contact.astro`: email, LinkedIn, GitHub, CV download, and final hiring-oriented CTA.

### React or Vue Integration

Do not add a frontend framework to the MVP unless a specific interactive feature needs it.

Use React only for targeted islands such as:

- an interactive project filter,
- a small architecture decision explorer,
- a Splitit demo widget,
- a language switcher if later internationalization requires client-side behavior.

Do not use React for static sections, timelines, cards, or simple layout. Astro components are enough and will keep the site faster.

### Content Management

Recommended approach:

- Use Astro Content Collections for projects, experience, education, and future writing.
- Store English content first.
- Design content schemas with a future `locale` or parallel folder strategy.

Suggested structure:

```txt
src/
  content/
    experience/
      en/
        mercadolibre.md
        altimetrik.md
      es/
        mercadolibre.md
        altimetrik.md
    projects/
      en/
        splitit.md
        portfolio.md
      es/
        splitit.md
        portfolio.md
    education/
      en/
        ort.md
      es/
        ort.md
```

For the MVP, only the `en` content needs to exist. The folder structure can still anticipate Spanish.

Recommended schema fields:

```ts
{
  title: string;
  slug: string;
  locale: 'en' | 'es';
  summary: string;
  startDate?: Date;
  endDate?: Date;
  company?: string;
  role?: string;
  stack?: string[];
  highlights?: string[];
  links?: {
    label: string;
    href: string;
  }[];
  status?: 'active' | 'wip' | 'archived';
}
```

### Internationalization Strategy

MVP language: English.

Future Spanish support:

- Keep all visible text in content files or small translation dictionaries.
- Avoid hardcoding long copy inside components.
- Use locale-aware URLs when Spanish is added.
- Add `hreflang` metadata when both languages exist.
- Use a language switcher only after Spanish pages are actually available.

Recommended phased approach:

1. MVP: English only at `/`.
2. Preparation: content schemas include `locale`.
3. Spanish iteration: add `/es` and Spanish content.
4. SEO iteration: add `hreflang`, localized Open Graph metadata, and Spanish sitemap entries.

### SEO and Performance

Concrete actions:

- Replace the current default title with `Brahian Calo | Technical Lead & Software Engineer`.
- Add a strong meta description:

```txt
Technical Lead and Software Engineer with strong JavaScript/TypeScript experience across React and Express, Go backend experience, and practical AI adoption for engineering workflows.
```

- Set `lang="en"` for the MVP.
- Add future-ready locale metadata: `og:locale` as `en_US` or `en`.
- Use optimized profile images through `astro:assets`.
- Add `@astrojs/sitemap`.
- Add `robots.txt`.
- Use semantic HTML: `header`, `main`, `section`, `article`, `nav`, `footer`.
- Keep JavaScript minimal and load interactive islands only when needed.
- Target Lighthouse scores of 95+ for performance, accessibility, best practices, and SEO.

## 3. UX/UI Design

### Experience Principle

The portfolio should feel like a professional product interface, not a decorative landing page. The design should be clear, confident, technically credible, and easy to scan.

The visual priority is employability:

- understand the profile quickly,
- verify seniority,
- inspect technical depth,
- access projects,
- contact without friction.

### Homepage Structure

#### Hero

Content:

- Full name.
- Primary role: `Technical Lead & Software Engineer`.
- Short positioning statement.
- Professional profile photo.
- Primary CTA: `Contact me`.
- Secondary CTA: `View projects` or `Download resume`.
- GitHub and LinkedIn links.

Recommended hero copy:

```txt
Brahian Calo
Technical Lead & Software Engineer

I build maintainable web applications with JavaScript, TypeScript, React, Express, and Go, while helping teams improve quality, architecture, and delivery through practical AI adoption.
```

#### At a Glance

Use a compact, scannable block:

- `9+ years` building software.
- `4 years` at Mercado Libre.
- `2 years` as Technical Lead.
- `JavaScript / TypeScript` across frontend and backend.
- `React`, `Express`, and `Go`.
- Focus: frontend architecture, backend performance, AI-assisted engineering workflows.
- Location: Uruguay.

This section helps recruiters qualify the profile in seconds.

#### Experience

Use a vertical timeline with clear role progression.

Mercado Libre:

- Current role: Technical Lead.
- Previous role: Senior Frontend Developer.
- Period: last 4 years.
- Core impact: early AI adoption and continuous process improvement using AI.
- Technical scope: frontend architecture, team practices, code quality, delivery improvements, cross-functional collaboration.
- Add metrics when available: time saved, adoption by team members, reduced manual work, improved cycle time, better onboarding, or improved review quality.

Altimetrik:

- Role: Frontend Developer.
- Period: 2015 to June 2022.
- Stack: Salesforce, Lightning Web Components, JavaScript, component-based frontend development.
- Value: long-term enterprise experience, platform constraints, maintainable components, and complex business workflows.

#### Projects

MVP project cards:

- **This portfolio**: present it as a product and engineering case study using Astro, performance, SEO, content architecture, responsive design, and future i18n support.
- **Splitit**: a Splitwise-like application built with Kotlin Multiplatform. Position it as a WIP project focused on product modeling, shared logic, multiplatform architecture, and expense-sharing workflows.

Each project card should include:

- Problem.
- Status.
- Stack.
- Repository.
- Technical highlights.
- Next step.

Avoid cards that only show a title and a GitHub link. A WIP project is still valuable if it communicates intent, technical reasoning, and progress.

#### Skills

Organize skills by capability instead of a flat technology cloud.

Recommended groups:

- **Frontend Engineering**: React, JavaScript, TypeScript, Astro, HTML, CSS/Sass, component architecture, accessibility, performance.
- **Backend Engineering**: Express, Node.js, Go, API design, backend services, performance-oriented development.
- **Architecture**: design patterns, modularity, maintainability, trade-off analysis, scalable frontend systems.
- **Technical Leadership**: mentoring, code review, team practices, delivery quality, process improvement.
- **AI-Assisted Engineering**: AI adoption, workflow automation, development acceleration, quality support, prompt iteration.
- **Product Thinking**: user experience, prioritization, MVP definition, pragmatic technical decisions.

#### Education

Content focus:

- Universidad ORT Uruguay.
- Systems engineering background.
- Applied learning in architecture and design patterns.
- Critical thinking and problem solving from multiple perspectives.

Recommended copy:

```txt
I graduated from Universidad ORT Uruguay, where I strengthened my foundation in systems engineering, software architecture, design patterns, and critical thinking. That background helps me approach technical problems from multiple perspectives and choose solutions that are appropriate for the product, team, and constraints.
```

#### Contact

Keep the final CTA direct:

- Email.
- LinkedIn.
- GitHub.
- Resume download.

Recommended copy:

```txt
Interested in technical leadership, frontend architecture, full-stack product engineering, or AI-assisted engineering workflows? Let's connect.
```

### User Flow

Recruiter flow:

1. Lands on the homepage from LinkedIn, CV, or referral.
2. Reads hero and snapshot in less than 20 seconds.
3. Checks experience and seniority.
4. Opens GitHub, LinkedIn, or resume.
5. Contacts directly.

Technical evaluator flow:

1. Reads positioning and experience.
2. Reviews skill groups and project cards.
3. Opens a project detail page or GitHub repository.
4. Looks for engineering judgment, architecture choices, and code quality.
5. Contacts or saves the profile.

### Visual Recommendations

- Use a calm, professional layout with strong hierarchy and moderate density.
- Avoid decorative excess. The profile should signal seniority and engineering clarity.
- Use a neutral background, high-contrast typography, and restrained accents.
- Recommended palette:
  - Background: `#F7F8FA`
  - Main text: `#15171A`
  - Secondary text: `#5B6470`
  - Surface: `#FFFFFF`
  - Border: `#DDE3EA`
  - Primary accent: `#2563EB`
  - Secondary accent: `#14B8A6`
- Use cards only for repeated items such as projects, stats, and experience blocks.
- Keep border radius at 6px or 8px.
- Use icons for GitHub, LinkedIn, email, external links, and resume download.
- Ensure WCAG AA contrast.
- On mobile, prioritize hero, CTAs, snapshot, experience, projects, and contact.

### Employability Best Practices

- Use impact-oriented language instead of only listing responsibilities.
- Make dates, companies, and roles clear.
- Explain technologies in context.
- Be transparent about WIP projects and describe what they demonstrate.
- Add a downloadable resume.
- Keep GitHub and LinkedIn visible in the first viewport.
- Use English consistently in the MVP.
- Avoid spelling and grammar mistakes; polish is part of professional credibility.

## 4. Development Plan

### Phase 1: Professional MVP

Goal: turn the current Astro site into a complete English professional portfolio.

Priority: high.

Tasks:

- Update `Layout.astro` with real metadata, `lang="en"`, professional title, and SEO basics.
- Rebuild `Home.astro` into sections: hero, experience, projects, skills, education, and contact.
- Create Astro components for each section.
- Add final English copy.
- Add JavaScript/TypeScript, React, Express, and Go to the professional positioning and skills.
- Optimize the profile image with Astro image handling.
- Update `Header.astro` navigation to use anchors.
- Add GitHub, LinkedIn, email, and resume links.
- Improve global styles and visual palette.
- Verify responsive behavior across mobile, tablet, and desktop.
- Run `yarn build`.

Exit criteria:

- The homepage tells a complete professional story.
- The site can be shared in job applications.
- The MVP is fully in English.
- Spanish support is considered in structure, but not yet implemented.

### Phase 2: Structured Content

Goal: separate content from presentation and prepare the site for bilingual expansion.

Priority: high after MVP.

Tasks:

- Configure Astro Content Collections.
- Create collections for `projects`, `experience`, and `education`.
- Store initial content under English folders.
- Add locale fields to schemas.
- Move hardcoded experience and project copy into Markdown content.
- Render homepage sections from collections.

Exit criteria:

- Adding new experience, projects, or Spanish content does not require rewriting components.

### Phase 3: Project Case Studies

Goal: make projects demonstrate engineering judgment.

Priority: medium-high.

Tasks:

- Create `/projects/[slug].astro`.
- Add a portfolio case study covering Astro, performance, SEO, content architecture, and future i18n.
- Add a Splitit case study covering Kotlin Multiplatform, product modeling, expense sharing, and WIP roadmap.
- Add screenshots or visual mockups when available.
- Include sections for problem, constraints, architecture, trade-offs, status, and next steps.

Exit criteria:

- Each project communicates technical reasoning, not only output.

### Phase 4: Spanish Version

Goal: add a Spanish version after the English MVP is stable.

Priority: medium.

Tasks:

- Add `/es` route.
- Add Spanish content files for experience, projects, education, and homepage copy.
- Add `hreflang` metadata.
- Add localized Open Graph metadata.
- Add a language switcher.
- Generate sitemap entries for both locales.

Exit criteria:

- English remains the default MVP language.
- Spanish pages are complete and discoverable.
- Users can switch languages without losing context.

### Phase 5: Differentiators

Goal: increase memorability and demonstrate senior-level thinking.

Priority: medium.

Tasks:

- Add an `AI in practice` section with concrete examples of AI-assisted engineering workflows.
- Add a small professional timeline visualization.
- Add measurable impact when available.
- Add short technical writing under `/writing`.
- Add privacy-friendly analytics.

Exit criteria:

- The portfolio demonstrates how Brahian thinks, not only where he has worked.

### Phase 6: Continuous Quality

Goal: keep the site reliable and professional.

Priority: ongoing.

Tasks:

- Add build checks in CI.
- Add formatting and linting if the project grows.
- Run Lighthouse checks before publishing major updates.
- Check accessibility with Lighthouse or axe.
- Check broken links.
- Keep resume, projects, and experience up to date.

## 5. Technical Stack

### Recommended Base

- Astro 5: best fit for static content, SEO, performance, and selective interactivity.
- TypeScript: recommended for utilities, schemas, content collections, and future interactive islands.
- Sass: already installed and enough for the current design scope.
- Astro Content Collections: recommended for projects, experience, education, and future writing.

### UI and Styling

Do not add a heavy UI framework for the MVP. The design needs a custom professional identity and only a few patterns: sections, timeline, cards, buttons, tags, and navigation.

Useful additions:

- `@astrojs/sitemap` for technical SEO.
- `@astrojs/mdx` only if project pages or writing need embedded components.
- `lucide-astro` or local SVG icons for actions.

React:

- Add `@astrojs/react` only when there is a real interactive island.
- Good candidates: project filtering, demo widgets, or advanced language switching.

### Hosting and Deployment

Recommended options:

- Vercel: fastest setup, good Astro support, preview deployments.
- Netlify: strong static hosting and simple form support.
- Cloudflare Pages: excellent static performance and global delivery.

Practical recommendation:

- Use Vercel for the MVP if speed of setup matters most.
- Use Cloudflare Pages if global performance and edge simplicity matter most.

### Useful Integrations

- Analytics: Plausible, Fathom, or Cloudflare Web Analytics.
- Forms: Formspree, Basin, or Netlify Forms.
- Resume: versioned PDF in `public/resume.pdf`.
- CI: GitHub Actions running `yarn build`.
- SEO: sitemap, robots, Open Graph image.
- CMS: not needed for the MVP. Consider Decap CMS or TinaCMS only if non-technical editing becomes important.

## 6. Professional Impact Extras

### Differentiating Ideas

- Add project case studies with a `Decision Log`: problem, options, decision, trade-off.
- Add an `AI-assisted engineering` section with practical examples.
- Explain how this portfolio was designed as a product, not just a website.
- Show a career timeline with role progression.
- Add impact metrics when possible:
  - time saved,
  - manual work reduced,
  - team adoption,
  - onboarding improvements,
  - delivery or review improvements.
- Add a `/uses` page with tools, workflow, and engineering preferences.
- Add English first, then Spanish once the content model is stable.

### What to Avoid

- Generic phrases without evidence.
- A long technology list without context.
- A flashy landing page with little professional depth.
- Hidden dates, roles, or company names.
- WIP projects with no explanation.
- Unnecessary animations.
- React or CMS adoption without a concrete need.
- Default metadata such as `Astro Basics`.
- Mixing English and Spanish in the MVP.
- Publishing copy with spelling or grammar issues.

## 7. Risk Management

| Risk | Impact | Mitigation |
| --- | --- | --- |
| The portfolio feels generic | Weak differentiation | Use clear positioning and concrete engineering examples |
| Too much visual design, not enough evidence | Lower technical credibility | Prioritize experience, projects, decisions, and impact |
| WIP projects look unfinished | Reduced trust | Explain status, scope, next steps, and technical learning |
| No metrics available | Impact feels abstract | Use qualitative evidence first and add metrics later |
| Too much JavaScript | Loses Astro performance advantage | Keep static content in Astro and use islands sparingly |
| Bilingual support added too early | Slows MVP delivery | Ship English first, prepare content structure, add Spanish later |
| Copy has grammar issues | Hurts professional credibility | Review English copy before publishing |

## 8. Roadmap Summary

| Phase | Result | Priority |
| --- | --- | --- |
| Professional MVP | English homepage, complete and publishable | High |
| Structured Content | Content collections prepared for scale and i18n | High |
| Project Case Studies | Technical evidence and deeper narrative | Medium-high |
| Spanish Version | `/es` localized version with SEO support | Medium |
| Differentiators | AI practice, writing, metrics, timeline | Medium |
| Continuous Quality | CI, accessibility, SEO, maintenance | Ongoing |

## 9. Recommended Next Decision

Use English as the default language for the MVP and prepare the codebase for Spanish without implementing full i18n immediately.

This keeps the first release focused and useful for international opportunities while avoiding future rework. The right technical move is to avoid hardcoded long-form copy inside components and introduce a content structure that can support `en` and `es` when the Spanish version becomes a priority.
