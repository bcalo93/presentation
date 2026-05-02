import { defineCollection, z } from 'astro:content';

const sharedLocale = z.enum(['en', 'es']);

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

export const collections = {
  experience,
  projects,
  education,
};
