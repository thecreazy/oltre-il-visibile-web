import { defineCollection, z } from 'astro:content';

const bilingual = z.object({ it: z.string(), en: z.string() });
const bilingualArr = z.object({
  it: z.array(z.string()),
  en: z.array(z.string()),
});

const photographers = defineCollection({
  type: 'data',
  schema: z.object({
    slug: z.string(),
    name: z.string(),
    based: z.string(),
    years: z.string(),
    role: bilingual,
    statement: bilingual,
    bio: bilingualArr,
    practice: bilingualArr,
    works: z.array(
      z.object({
        title: bilingual,
        year: z.string(),
        place: z.string(),
        notes: bilingual.optional(),
      })
    ),
    cover_text: z.string(), // typographic placeholder text
    accent_no: z.string(), // big editorial number
  }),
});

const models = defineCollection({
  type: 'data',
  schema: z.object({
    slug: z.string(),
    name: z.string(),
    based: z.string(),
    pronouns: z.string(),
    statement: bilingual,
    bio: bilingualArr,
    practice: bilingualArr,
    cover_text: z.string(),
    accent_no: z.string(),
  }),
});

const exhibitions = defineCollection({
  type: 'data',
  schema: z.object({
    slug_it: z.string(),
    slug_en: z.string(),
    city: bilingual,
    country: bilingual,
    venue: z.string(),
    venue_note: bilingual,
    address: z.string(),
    map_url: z.string().url(),
    dates: bilingual, // human-readable placeholder, e.g. "ottobre 2026" / "October 2026"
    season: z.string(),
    short_text: bilingual,
    description: bilingualArr,
    photographers: z.array(z.string()), // slugs
    models: z.array(z.string()), // slugs
    accent_no: z.string(),
    coordinates: z.tuple([z.number(), z.number()]).optional(),
  }),
});

export const collections = { photographers, models, exhibitions };
