import React, { ReactElement, useMemo } from 'react';
import type { NextPage, InferGetStaticPropsType } from 'next';
import { getMDXComponent } from 'mdx-bundler/client';
import { ArticleHeader } from 'components';
import { Layout, MDXComponents } from 'components';
import { IApplause, IFrontMatter, ILayoutInfo } from 'global';
import { IParams } from 'global';
import { blogWrapper } from '@styles/common';
import { info } from '.contentlayer/data';
import { allPosts } from '.contentlayer/data';
import { PrismaClient } from '@prisma/client';
import { PostContext } from 'context';

const prisma = new PrismaClient();

type PageProps = {
  globalData: ILayoutInfo;
  post: IFrontMatter;
  applauses: IApplause;
};

const PostBySlug: NextPage<PageProps> = ({
  post: {
    body: { code },
    title,
    summary,
    image,
    publishedAt,
    readingTime,
  },
  globalData,
  applauses,
}: InferGetStaticPropsType<typeof getStaticProps>): ReactElement => {
  const Component = useMemo(() => getMDXComponent(code), [code]);

  return (
    <Layout values={{ ...globalData }}>
      <article className={blogWrapper({})}>
        <PostContext.Provider value={applauses}>
          <ArticleHeader post={{ title, summary, image, publishedAt, readingTime }} />
          <Component components={MDXComponents as any} />
        </PostContext.Provider>
      </article>
    </Layout>
  );
};

export async function getStaticProps({ params: { slug } }: IParams) {
  const post = allPosts.find((post) => post.slug === slug);
  const data = await prisma.applause.findFirst({ where: { slug: slug } });
  const { name, title, menu, footerLinks: links } = info;

  const globalData: ILayoutInfo = { name, title, menu, links };
  const applauses = { slug, value: data?.value || 0 };

  return { props: { post, globalData, applauses } };
}

export async function getStaticPaths() {
  return {
    paths: allPosts.map((post) => ({ params: { slug: post.slug } })),
    fallback: false,
  };
}

export default PostBySlug;
