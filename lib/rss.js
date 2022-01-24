const path = require('path');
const RSS = require('rss');
const { promises: fs } = require('fs');
const matter = require('gray-matter');
const { ORIGIN_URL, NAME } = require('./constants');

async function generateRSS() {
  const feed = new RSS({
    title: NAME + "'s Blog",
    webMaster: NAME,
    site_url: ORIGIN_URL,
    feed_url: ORIGIN_URL + '/feed.xml',
    description: "Recent articles from the Idir Hamouch's blog.",
  });

  const posts = await fs.readdir(path.join(__dirname, '..', 'content/posts'));

  await Promise.all(
    posts.map(async (name) => {
      const content = await fs.readFile(path.join(__dirname, '..', 'content/posts', name));
      const { data } = matter(content);

      feed.item({
        title: data.title,
        url: ORIGIN_URL + '/blog/' + name.replace(/\.mdx?/, ''),
        date: data.publishedAt,
      });
    })
  );

  await fs.writeFile('./public/feed.xml', feed.xml({ indent: true }));
}

generateRSS();
