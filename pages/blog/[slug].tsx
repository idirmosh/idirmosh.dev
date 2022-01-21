import React, { useMemo } from 'react';
import { getMDXComponent } from 'mdx-bundler/client';
import { components } from 'components/MDXComponents';
import { allPosts } from '.contentlayer/data';
import type { NextPage } from 'next';
import { ILayoutInfo, ISinglePostProps } from 'global';
import { IParams } from 'global';
import Layout from 'components/Layout';
import { blogWrapper } from '@styles/common';
import ArticleHeader from 'components/ArticleHeader';
import { info } from '.contentlayer/data';

const PostBySlug: NextPage<ISinglePostProps & ILayoutInfo> = ({
  post: { body, ...frontMatter },
  name,
  title,
  menu,
}): React.ReactElement => {
  const Component = useMemo(() => getMDXComponent(body.code), [body.code]);

  return (
    <Layout menu={menu} name={name} title={title}>
      <article className={blogWrapper({})}>
        <ArticleHeader post={frontMatter} />
        <Component components={components as any} />
      </article>
    </Layout>
  );
};

export async function getStaticProps({ params: { slug } }: IParams) {
  const post = allPosts.find((post) => post.slug === slug);
  const { name, title, menu } = info;
  return { props: { post, name, title, menu } };
}

export async function getStaticPaths() {
  return {
    paths: allPosts.map((post) => ({ params: { slug: post.slug } })),
    fallback: false,
  };
}

export default PostBySlug;
