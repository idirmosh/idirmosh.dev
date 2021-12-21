import { createGzip } from 'zlib';
import { SitemapStream } from 'sitemap';
import { NextApiRequest, NextApiResponse } from 'next';
import { allPosts } from '.contentlayer/data';
import { ORIGIN_URL } from '@lib/constants';

const staticUrls = ['/', '/about'];

const siteMap = async (req: NextApiRequest, res: NextApiResponse) => {
  res.setHeader('Content-Type', 'application/xml');
  res.setHeader('Content-Encoding', 'gzip');

  const sitemapStream = new SitemapStream({ hostname: ORIGIN_URL });
  const pipeline = sitemapStream.pipe(createGzip());

  const dynamicUrls = allPosts.map((post) => '/blog/' + post.slug);

  staticUrls.forEach((url) => {
    sitemapStream.write({ url });
  });

  dynamicUrls.forEach((url) => {
    sitemapStream.write({ url });
  });

  sitemapStream.end();

  pipeline.pipe(res).on('error', (err) => {
    throw err;
  });
};

export default siteMap;
