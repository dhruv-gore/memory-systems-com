import { defineCollection, z } from 'astro:content';

const notes = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z.coerce.date(),
		author: z.string().default('Memory Systems Group'),
		tags: z.array(z.string()).optional(),
	}),
});

export const collections = { notes };
