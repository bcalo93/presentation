import { defineCollection, z } from 'astro:content';

const sharedLocale = z.enum(['en', 'es']);
const navItem = z.object({
  id: z.string(),
  label: z.string(),
});

const sectionIntro = z.object({
  eyebrow: z.string(),
  title: z.string(),
  description: z.string().optional(),
});

const contactLink = z.object({
  label: z.string(),
  value: z.string(),
});

const experience = defineCollection({
  type: 'content',
  schema: z.object({
    locale: sharedLocale,
    order: z.number().int().nonnegative(),
    company: z.string(),
    period: z.string(),
    roles: z.array(z.string()).min(1),
    summary: z.string(),
    highlights: z.array(z.string()).min(1),
    stack: z.array(z.string()).min(1),
  }),
});

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    locale: sharedLocale,
    path: z.string(),
    order: z.number().int().nonnegative(),
    title: z.string(),
    summary: z.string(),
    status: z.string(),
    problem: z.string(),
    repositoryLabel: z.string(),
    repositoryHref: z.string().url().optional(),
    stack: z.array(z.string()).min(1),
    highlights: z.array(z.string()).min(1),
    constraints: z.array(z.string()).min(1),
    architecture: z.array(z.string()).min(1),
    tradeoffs: z.array(z.string()).min(1),
    statusNote: z.string(),
    nextStep: z.string(),
    nextStepsTitle: z.string().default('Next steps'),
    roadmap: z.array(z.string()).min(1),
    links: z
      .array(
        z.object({
          label: z.string(),
          href: z.string().url(),
        }),
      )
      .default([]),
  }),
});

const education = defineCollection({
  type: 'content',
  schema: z.object({
    locale: sharedLocale,
    order: z.number().int().nonnegative(),
    institution: z.string(),
    degree: z.string().optional(),
    summary: z.string(),
  }),
});

const home = defineCollection({
  type: 'content',
  schema: z.object({
    locale: sharedLocale,
    seo: z.object({
      title: z.string(),
      description: z.string(),
    }),
    nav: z.object({
      ariaLabel: z.string(),
      items: z.array(navItem).min(1),
      themeToggleLabel: z.string(),
      languageSwitcherLabel: z.string(),
      languageLabels: z.object({
        en: z.string(),
        es: z.string(),
      }),
    }),
    hero: z.object({
      role: z.string(),
      lede: z.string(),
      primaryCta: z.string(),
      secondaryCta: z.string(),
      portraitAlt: z.string(),
    }),
    snapshot: sectionIntro.extend({
      highlights: z.array(z.string()).min(1),
    }),
    experience: sectionIntro,
    projects: sectionIntro.extend({
      problemLabel: z.string(),
      repositoryLabel: z.string(),
      nextStepLabel: z.string(),
      readCaseStudyLabel: z.string(),
    }),
    skills: sectionIntro.extend({
      groups: z
        .array(
          z.object({
            title: z.string(),
            items: z.array(z.string()).min(1),
          }),
        )
        .min(1),
    }),
    education: sectionIntro,
    contact: sectionIntro.extend({
      emailCta: z.string(),
      linkedinCta: z.string(),
      links: z.array(contactLink).min(1),
    }),
    footer: z.object({
      blurb: z.string(),
      backToTop: z.string(),
    }),
    projectPage: z.object({
      backToProjects: z.string(),
      eyebrow: z.string(),
      statusLabel: z.string(),
      repositoryLabel: z.string(),
      stackLabel: z.string(),
      problem: sectionIntro.omit({ description: true }),
      constraints: sectionIntro.omit({ description: true }),
      architecture: sectionIntro.omit({ description: true }),
      tradeoffs: sectionIntro.omit({ description: true }),
      status: sectionIntro.omit({ description: true }),
      links: sectionIntro.omit({ description: true }),
      nextStepsHeading: z.string(),
    }),
  }),
});

export const collections = {
  experience,
  projects,
  education,
  home,
};
