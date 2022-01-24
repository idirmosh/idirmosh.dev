import { ComputedFields, defineDocumentType } from 'contentlayer/source-files';

export const computedFields: ComputedFields = {
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

export const Post = defineDocumentType(() => ({
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

export const Info = defineDocumentType(() => ({
  name: 'Info',
  filePathPattern: 'data/*.mdx',
  bodyType: 'mdx',
  isSingleton: true,
  fields: {
    name: { type: 'string', required: true },
    title: { type: 'string', required: true },
    available: { type: 'boolean', required: true },
    avatar: { type: 'string', required: true },
    contact: { type: 'string', required: true },
    menu: { type: 'json', required: true },
    footerLinks: { type: 'json', required: true },
    socials: { type: 'json', required: true },
    projects: { type: 'json', required: true },
  },
  computedFields,
}));
