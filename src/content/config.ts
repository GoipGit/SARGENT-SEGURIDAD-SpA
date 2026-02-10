import { defineCollection, z } from 'astro:content';

const products = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    image: z.string().optional(),
    category: z.enum(['Cámaras', 'Alarmas', 'Control de Acceso', 'Sensores']),
    features: z.array(z.string()).optional(),
    inStock: z.boolean().default(true),
    isFeatured: z.boolean().default(false),
  }),
});

const services = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    icon: z.string(),
    draft: z.boolean().default(false).optional(),
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
  products,
  services,
  solutions,
};
