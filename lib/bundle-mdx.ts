import { readFileSync, lstatSync, readdirSync } from 'fs';
import { IPost } from 'global';
import matter from 'gray-matter';
import { bundleMDX } from 'mdx-bundler';
import { join } from 'path';
import readingTime from 'reading-time';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeCodeTitles from 'rehype-code-titles';
import rehypePrism from 'rehype-prism-plus';
import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';

export async function getPostBySlug(type: string, slug: string): Promise<IPost> {
  const src: string = slug
    ? readFileSync(join(process.cwd(), 'data', type, `${slug}.mdx`), 'utf-8')
    : readFileSync(join(process.cwd(), 'data', `${type}.mdx`), 'utf-8');
  console.log('Break POint here');

  const { code, frontmatter } = (await bundleMDX(src, {
    xdmOptions(options) {
      options.remarkPlugins = [...(options?.remarkPlugins ?? []), remarkGfm];
      options.rehypePlugins = [
        ...(options?.rehypePlugins ?? []),

        // rehypeMetaAttribute,
        //rehypeHighlightCode,
        // rehypeSlug,
        // rehypePrism,
        // rehypeCodeTitles,

        // [
        //   rehypeAutolinkHeadings,
        //   {
        //     proprties: {
        //       clasName: ['anchor'],
        //     },
        //   },
        // ],
      ];
      return options;
    },
  })) as any;

  return {
    code,
    frontMatter: {
      ...frontmatter,
      wordCount: src.split(/\s+/gu).length,
      readingTime: readingTime(src),
      slug: slug || null,
    },
  };
}

export async function getPostsFrontMatter(type: string) {
  const files: string[] = readdirSync(join(process.cwd(), 'data', type));
  return files.reduce((posts: string[], slug: string) => {
    const src: string = readFileSync(join(process.cwd(), 'data', type, slug), 'utf-8');
    const { data } = matter(src);
    return [{ ...data, slug: slug.replace('.mdx', '') }, ...posts];
  }, []);
}

export async function getPosts(type: string) {
  return readdirSync(join(process.cwd(), 'data', type));
}
