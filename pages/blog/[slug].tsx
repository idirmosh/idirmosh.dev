import React, { ReactElement, useMemo } from 'react';
import type { NextPage, InferGetStaticPropsType } from 'next';
import { getMDXComponent } from 'mdx-bundler/client';
import { ArticleHeader } from 'components';
import { Layout, MDXComponents } from 'components';
import { ILayoutInfo, ISinglePostProps } from 'global';
import { IParams } from 'global';
import { blogWrapper } from '@styles/common';
import { info } from '.contentlayer/data';
import { allPosts } from '.contentlayer/data';
import { PrismaClient } from '@prisma/client';
import { PostContext } from 'context';

const prisma = new PrismaClient();

const PostBySlug: NextPage<ISinglePostProps & ILayoutInfo> = ({
  post: { body, ...frontMatter },
  name,
  title,
  menu,
  applauses,
}): ReactElement => {
  const Component = useMemo(() => getMDXComponent(body.code), [body.code]);

  return (
    <Layout values={{ menu, name, title }}>
      <article className={blogWrapper({})}>
        <PostContext.Provider value={applauses}>
          <ArticleHeader post={frontMatter} />
          <Component components={MDXComponents as any} />
        </PostContext.Provider>
      </article>
    </Layout>
  );
};

export async function getStaticProps({ params: { slug } }: IParams) {
  const post = allPosts.find((post) => post.slug === slug);
  const data = await prisma.applause.findFirst({ where: { slug: slug } });

  const { name, title, menu } = info;
  const applauses = { slug, value: data?.value || 0 };

  return { props: { post, name, title, menu, applauses } };
}

export async function getStaticPaths() {
  return {
    paths: allPosts.map((post) => ({ params: { slug: post.slug } })),
    fallback: false,
  };
}

export default PostBySlug;
