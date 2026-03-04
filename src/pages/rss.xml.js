import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const blog = await getCollection('blogs');
  const items = blog
    .map((post) => {
      const pubDate = new Date(post.data.date);
      if (Number.isNaN(pubDate.getTime())) return null;
      return {
        title: post.data.title,
        pubDate,
        link: `/${post.id}/`,
      };
    })
    .filter(Boolean)
    .sort((a, b) => b.pubDate - a.pubDate);

  return rss({
    title: 'Naveen’s blog',
    description: 'Recent blogs from Naveen',
    site: context.site,
    items,
    customData: `<language>en-us</language>`,
  });
}