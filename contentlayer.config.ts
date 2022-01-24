import { makeSource } from 'contentlayer/source-files';
import readingTime from 'reading-time';
import remarkGfm from 'remark-gfm';
import rehypePrism from 'rehype-prism-plus';
import remarkAutolinkHeadings from 'remark-autolink-headings';
import remarkSlug from 'remark-slug';
import rehypeCodeTitles from './lib/plugins/rehypeCodeTitles';
import { Post, Info } from './lib/docTypes';

const contentLayerConfig = makeSource({
  contentDirPath: 'content',
  documentTypes: [Post, Info],
  mdx: {
    remarkPlugins: [
      remarkGfm,
      remarkSlug,
      [remarkAutolinkHeadings, { behavior: 'wrap', linkProperties: { isheading: 'true' } }],
    ],
    rehypePlugins: [rehypeCodeTitles, rehypePrism],
  },
});

export default contentLayerConfig;
