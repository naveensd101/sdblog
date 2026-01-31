import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

// https://naveensd.com/logs/2025/Dec/

export async function GET(context) {
  const blog = await getCollection('blogs');
  return rss({
    title: 'Naveen’s blog',
    description: 'My humble attempt in keeping my broadcasts away from single point of distribution failure',
    site: context.site,
    items: blog.map((post) => ({
      title: post.data.title,
      pubDate: post.data.date,
      link: `/logs/${post.id}/`,
    })),
    customData: `<language>en-us</language>`,
  });
}