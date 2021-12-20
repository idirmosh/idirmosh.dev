const { promises: fs } = require('fs');
const path = require('path');
const RSS = require('rss');
const matter = require('gray-matter');
const Meta = require('../site-meta');

async function generate() {
  const feed = new RSS({
    title: Meta.title,
    site_url: Meta.site_url,
    feed_url: Meta.feed_url,
    description: Meta.description,
  });

  const posts = await fs.readdir(path.join(__dirname, '..', 'content/posts'));

  await Promise.all(
    posts.map(async (name) => {
      const content = await fs.readFile(path.join(__dirname, '..', 'content/posts', name));
      const { data } = matter(content);

      feed.item({
        title: data.title,
        url: Meta.blog_url + name.replace(/\.mdx?/, ''),
        date: data.publishedAt,
      });
    })
  );

  await fs.writeFile('./public/feed.xml', feed.xml({ indent: true }));
}

generate();
