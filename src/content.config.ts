import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const portofolio = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/portofolio" }),
  schema: z.object({
    title: z.string(),
    date: z.string(),
    location: z.string(),
    category: z.string(),
    cover: z.string(),
    excerpt: z.string(),
  }),
});

const testimoni = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/testimoni" }),
  schema: z.object({
    title: z.string(),
    date: z.string(),
    image: z.string().optional(),
    rating: z.number(),
    quote: z.string(),
  }),
});

const paket = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/paket" }),
  schema: z.object({
    title: z.string(),
    price: z.string(),
    featured: z.boolean(),
    description: z.string(),
    features: z.array(z.string()),
  }),
});

export const collections = { portofolio, testimoni, paket };
