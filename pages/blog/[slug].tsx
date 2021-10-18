import { useMemo } from 'react';
import { getMDXComponent } from 'mdx-bundler/client';

import { components } from '@components/MDXComponents';
import PostMeta from '@components/SinglePost/Meta';
import * as styles from '@components/MDXComponents/styles';
import Tags from '@components/common/Tags';
import { allPosts } from '.contentlayer/data';
import type { Post } from '.contentlayer/types';
import PostFooter from '@components/SinglePost/Footer';

export default function PostBySlug({ post }: { post: Post }) {
  const {
    body: { code },
    ...frontMatter
  } = post;
  const Component = useMemo(() => getMDXComponent(code), [code]);
  console.log(frontMatter.tags);
  return (
    <div
      className={styles.container({
        css: {
          mx: '$4',
          padding: '0 16px',
          py: '$4',
          '@bp1': {
            mx: '$5',
            py: '$5',
          },
          '@bp2': {
            mx: '$6',
          },
        },
      })}
    >
      <div className={styles.box({ my: '$5' })}>
        <PostMeta {...frontMatter} />
        <Component components={components as any} />
        <PostFooter tags={frontMatter.tags} />
      </div>
    </div>
  );
}

export async function getStaticProps({ params: { slug } }) {
  const post = allPosts.find((post) => post.slug === slug);
  return { props: { post } };
}

export async function getStaticPaths() {
  return {
    paths: allPosts.map((post) => ({ params: { slug: post.slug } })),
    fallback: false,
  };
}
