import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        description: z.string(),
        is_featured: z.boolean().default(false),
        tech_stack: z.array(z.string()),
        demo_url: z.string().nullable(),
        github_url: z.string().nullable(),
        order: z.number().default(0),
        thumbnail: z.string().optional(),
        gallery: z.array(z.string()).optional(),
    }),
});

const blog = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        excerpt: z.string(),
        published_at: z.date(),
        is_published: z.boolean().default(true),
        reading_time: z.number(),
    })
});

export const collections = { projects, blog };
