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
    order: z.number().int().nonnegative(),
    title: z.string(),
    status: z.string(),
    problem: z.string(),
    repository: z.string(),
    stack: z.array(z.string()).min(1),
    highlights: z.array(z.string()).min(1),
    nextStep: z.string(),
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
