import { useMemo } from 'react';
import { getMDXComponent } from 'mdx-bundler/client';

import * as styles from '@components/MDXComponents/styles';
import { allPosts } from '.contentlayer/data';
import type { Post } from '.contentlayer/types';

export default function Tags({ posts }) {
  return (
    <div className={styles.container({})}>
      <div className={styles.box({ my: '$5' })}>
        <h1>Tag alone</h1>
        <div>{posts && posts.map((p) => <h1 key={p.title}>{p.title}</h1>)}</div>
      </div>
    </div>
  );
}
export async function getStaticProps({ params: { tag } }) {
  const posts = allPosts.map((post) => post.tags.includes(tag) && post).filter((o) => o);
  return { props: { posts } };
}

export async function getStaticPaths() {
  // Not the best way but works for now
  const tags = allPosts
    .reduce((acc, { tags }) => acc.concat(tags), [])
    .filter((item, pos, self) => self.indexOf(item) == pos);

  return {
    paths: tags.map((tag) => ({ params: { tag } })),
    fallback: false,
  };
}
