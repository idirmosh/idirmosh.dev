import { useMemo } from 'react';
import { getMDXComponent } from 'mdx-bundler/client';

import * as styles from '@components/MDXComponents/styles';
import { allPosts } from '.contentlayer/data';
import type { Post } from '.contentlayer/types';

export default function Tags() {
  return (
    <div className={styles.container({})}>
      <div className={styles.box({ my: '$5' })}>
        <h1>Tags</h1>
      </div>
    </div>
  );
}

export async function getStaticProps({ params: { tag } }) {
  console.log(tag);
  return { props: {} };
}

export async function getStaticPaths() {
  return {
    paths: [{ params: { tag: 'js' } }],
    fallback: true,
  };
}
