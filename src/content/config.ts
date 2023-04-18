import { z, defineCollection } from "astro:content";

const papersCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    authors: z.array(z.string()).optional(),
    pubDatetime: z.date(),
    postSlug: z.string().optional(),
    featured: z.boolean().optional(),
    draft: z.boolean().optional(),
    tags: z.array(z.string()).default(["others"]),
    ogImage: z.string().optional(),
    description: z.string(),
  })
});

const publicationsCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    authors: z.array(z.string()),
    editor: z.string(),
    year: z.number(),
    pages: z.number(),
    url: z.string()
  })
});

const scholarsCollection = defineCollection({
  schema: z.object({
    firstname: z.string(),
    lastname: z.string(),
    title: z.string(),
    institution: z.string()
  })
});

const projectsCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    start: z.string(),
    end: z.string(),
    disciplines: z.array(z.string()),
    members: z.array(z.string()),
  })
});

const eventsCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    date: z.string(),
    location: z.string(),
    contact: z.string(),
    registration: z.boolean(),
  })
});

const mediasCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    date: z.string(),
    location: z.string(),
    type: z.string(),
    url: z.string(),
    links: z.array(z.string()),
  })
});

export const collections = {
  papers: papersCollection,
  publications: publicationsCollection,
  scholars: scholarsCollection,
  events: eventsCollection,
  medias: mediasCollection,
  projects: projectsCollection,
};