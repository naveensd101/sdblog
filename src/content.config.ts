import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';

// Define your collection(s)
export const blogs = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/pages/" })
});

// 5. Export a single `collections` object to register your collection(s)
export const collections = { blogs };