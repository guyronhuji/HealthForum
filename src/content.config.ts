import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const ctaSchema = z.object({
  label: z.string(),
  href: z.string(),
});

const statSchema = z.object({
  value: z.string(),
  label: z.string(),
  source: z.string().optional(),
});

const highlightSchema = z.object({
  title: z.string(),
  body: z.string(),
});

const updateSeriesSchema = z.object({
  label: z.string(),
  eastValue: z.number(),
  westValue: z.number(),
  eastLabel: z.string().optional(),
  westLabel: z.string().optional(),
  note: z.string().optional(),
});

const updateTimelineSchema = z.object({
  date: z.string(),
  title: z.string(),
  summary: z.string(),
});

const lastUpdatedSchema = z
  .union([z.string(), z.date()])
  .transform((value) => (value instanceof Date ? value.toISOString().slice(0, 10) : value));

const pages = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/pages' }),
  schema: z.object({
    lang: z.enum(['en', 'he', 'ar']),
    pageSlug: z.enum(['home', 'about', 'reports', 'affiliate-links']),
    title: z.string(),
    navLabel: z.string(),
    description: z.string(),
    heroKicker: z.string(),
    heroHeading: z.string(),
    heroBody: z.string(),
    primaryCta: ctaSchema,
    secondaryCta: ctaSchema,
    stats: z.array(statSchema).min(1),
    highlights: z.array(highlightSchema).min(1),
    updatesChartTitle: z.string().optional(),
    updatesChartSubtitle: z.string().optional(),
    updateSeries: z.array(updateSeriesSchema).optional(),
    updatesTimelineTitle: z.string().optional(),
    updateTimeline: z.array(updateTimelineSchema).optional(),
    partnersTitle: z.string(),
    partners: z.array(z.string()).min(1),
    sourceNote: z.string(),
    lastUpdated: lastUpdatedSchema,
    draft: z.boolean().default(false),
  }),
});

export const collections = {
  pages,
};
