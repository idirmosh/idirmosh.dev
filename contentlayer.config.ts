import { ComputedFields, defineDocumentType, makeSource } from 'contentlayer/source-files';

import readingTime from 'reading-time';
import remarkGfm from 'remark-gfm';
import rehypeSlug from 'rehype-slug';
import rehypeCodeTitles from 'rehype-code-titles';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypePrism from 'rehype-prism-plus';

const computedFields: ComputedFields = {
  slug: {
    type: 'string',
    resolve: (doc) => doc._raw.sourceFileName.replace(/\.mdx$/, ''),
  },
  wordCount: {
    type: 'number',
    resolve: (doc) => doc.body.raw.split(/\s+/gu).length,
  },
  readingTime: { type: 'json', resolve: (doc) => readingTime(doc.body.raw) },
};

const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: 'posts/*.mdx',
  bodyType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    publishedAt: { type: 'string', required: true },
    summary: { type: 'string', required: true },
    image: { type: 'string', required: true },
    tags: { type: 'json', required: true },
  },
  computedFields,
}));

const Page = defineDocumentType(() => ({
  name: 'Page',
  filePathPattern: 'pages/*.mdx',
  bodyType: 'mdx',
  fields: {
    name: { type: 'string', required: true },
  },
  computedFields,
}));

const contentLayerConfig = makeSource({
  contentDirPath: 'content',
  documentTypes: [Post],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      rehypeCodeTitles,
      rehypePrism,
      [
        rehypeAutolinkHeadings,
        {
          properties: {
            className: ['anchor'],
          },
        },
      ],
    ],
  },
});

export default contentLayerConfig;
