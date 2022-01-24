import React, { useMemo } from 'react';
import type { NextPage } from 'next';
import { getMDXComponent } from 'mdx-bundler/client';
import { ArticleHeader } from 'components';
import { Layout, MDXComponents } from 'components';
import { ILayoutInfo, ISinglePostProps } from 'global';
import { IParams } from 'global';
import { blogWrapper } from '@styles/common';
import { info } from '.contentlayer/data';
import { allPosts } from '.contentlayer/data';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const PostBySlug: NextPage<ISinglePostProps & ILayoutInfo> = ({
  post: { body, ...frontMatter },
  name,
  title,
  menu,
  applauses,
}): React.ReactElement => {
  const Component = useMemo(() => getMDXComponent(body.code), [body.code]);

  return (
    <Layout menu={menu} name={name} title={title}>
      <article className={blogWrapper({})}>
        <ArticleHeader applauses={applauses} post={frontMatter} />
        <Component components={MDXComponents as any} />
      </article>
    </Layout>
  );
};

export async function getStaticProps({ params: { slug } }: IParams) {
  const post = allPosts.find((post) => post.slug === slug);
  const { name, title, menu } = info;
  const applauses = await prisma.applause.findFirst({ where: { slug: slug } });

  return { props: { post, name, title, menu, applauses: { slug, value: applauses?.value || 0 } } };
}

export async function getStaticPaths() {
  return {
    paths: allPosts.map((post) => ({ params: { slug: post.slug } })),
    fallback: false,
  };
}

export default PostBySlug;
