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
    statement: bilingual.optional(),
    bio: bilingualArr.optional(),
    practice: bilingualArr.optional(),
    works: z.array(
      z.object({
        title: bilingual,
        year: z.string(),
        place: z.string(),
        notes: bilingual.optional(),
      })
    ).optional(),
    cover_text: z.string(), // typographic placeholder text
    accent_no: z.string(), // big editorial number
    socials: z.array(z.object({
      label: z.string(),
      href: z.string(),
    })).optional(),
    photo_orientations: z.array(z.enum(['v', 'h', 's'])).optional(),
  }),
});

const models = defineCollection({
  type: 'data',
  schema: z.object({
    slug: z.string(),
    name: z.string(),
    based: z.string(),
    pronouns: z.string().optional(),
    genres: bilingualArr,
    statement: bilingual,
    cover_text: z.string(),
    accent_no: z.string(),
    photo_orientations: z.array(z.enum(['v', 'h', 's'])).optional(),
    socials: z.array(z.object({
      label: z.string(),
      href: z.string(),
    })).optional(),
    personal_intro: bilingual.optional(),
    story_sections: z.array(z.object({
      title: bilingual,
      body: bilingual,
    })).optional(),
    highlights: bilingualArr.optional(),
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
    guests: z.array(z.string()).optional(), // slugs
    accent_no: z.string(),
    coordinates: z.tuple([z.number(), z.number()]).optional(),
    press: z.array(z.object({
      title: z.string(),
      source: z.string(),
      url: z.string().url(),
      date: z.string().optional(),
    })).optional(),
  }),
});

const partners = defineCollection({
  type: 'data',
  schema: z.object({
    name: z.string(),
    category: z.enum(['venue', 'photographer', 'partner', 'charity']),
    kind: bilingual,
    city: z.string(),
    href: z.string().url().optional(),
    note: bilingual,
    logo: z.string().optional(),
    order: z.number(),
  }),
});

const guests = defineCollection({
  type: 'data',
  schema: z.object({
    slug: z.string(),
    name: z.string(),
    title: bilingual,
    based: z.string(),
    bio_artistic: bilingualArr,
    bio_vision: bilingualArr,
    order: z.number().optional(),
    cover_text: z.string(),
    photo_orientations: z.array(z.enum(['v', 'h', 's'])).optional(),
    work: z.object({
      title: z.string(),
      type: bilingual,
      year: z.string(),
      description: bilingual,
    }).optional(),
    socials: z.array(z.object({
      label: z.string(),
      href: z.string(),
    })).optional(),
  }),
});

export const collections = { photographers, models, exhibitions, partners, guests };
