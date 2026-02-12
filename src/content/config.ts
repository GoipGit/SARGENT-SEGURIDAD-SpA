import { defineCollection, z } from 'astro:content';



const services = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    icon: z.string(),
    draft: z.boolean().default(false).optional(),
    order: z.number().default(100).optional(),
  }),
});

const solutions = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    icon: z.string(),
    features: z.array(z.string()),
    ctaText: z.string(),
    ctaLink: z.string(),
    isFeatured: z.boolean().default(false),
  }),
});

export const collections = {
  services,
  solutions,
};
