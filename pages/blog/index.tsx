import type { GetStaticProps, NextPage } from 'next';
import { useEffect, useState } from 'react';
import Head from 'next/head';
import { allPosts } from '.contentlayer/data';
import { filterTags, postMetaFilter, reduceTags, subscribe } from '@lib/helpers';
import { IPageProps, IView } from 'global';
import BlogCardNew from '@components/BlogCardNew';
import BlogListWrapper from '@components/common/BlogListWrapper';
import Layout from '@components/Layout';
import { box, flexRow, linkReset, singlePostWrapper, wrapper } from '@styles/common';
import Link from '@components/common/Link';
import { heading, text } from '@styles/typography';

const Blog: NextPage<IPageProps> = ({ posts, tagsCount }) => {
  const [slugs, setSlugs] = useState(null);
  console.log(tagsCount);
  useEffect(() => {
    let isSubscribed = true;
    if (isSubscribed) subscribe(setSlugs, 'http://localhost:3000/api/views');
    return () => {
      isSubscribed = false;
    };
  }, []);

  return (
    <Layout>
      <Head>
        <title>Blog</title>
      </Head>
      <div
        className={flexRow(
          wrapper({
            css: {
              justifyContent: 'space-between',
              padding: '24px 0',
            },
          })
        )}
      >
        <h5 className={heading({ type: 'h2' })}>Latest Articles</h5>
        <Link href="/tags" className={text({ type: 'link' })}>
          See all topics ({tagsCount})
        </Link>
      </div>
      <div className={singlePostWrapper()}>
        {posts && posts.map((post) => <BlogCardNew key={post.slug} post={post} />)}
      </div>

      {/* 
      <h1>{frontmatter.title}</h1>
      <Component /> */}
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const posts = allPosts.map(postMetaFilter);
  const tags = allPosts.reduce(reduceTags, []).filter(filterTags);

  return { props: { posts, tagsCount: tags.length } };
};

export default Blog;
