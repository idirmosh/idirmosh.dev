import type { GetStaticProps, NextPage } from 'next';
import { useEffect, useState } from 'react';
import { allPosts } from '.contentlayer/data';
import { filterTags, postMetaFilter, reduceTags, subscribe } from '@lib/helpers';
import { IPageProps } from 'global';
import BlogCardNew from '@components/BlogCardNew';
import Layout from '@components/Layout';
import { blogWrapper, flexRow } from '@styles/common';
import Link from '@components/common/Link';
import { heading, text } from '@styles/typography';
import Head from '@components/Head';
import { NAME } from '@lib/constants';

const Blog: NextPage<IPageProps> = ({ posts, tagsCount }) => {
  const [slugs, setSlugs] = useState(null);

  useEffect(() => {
    let isSubscribed = true;
    if (isSubscribed) subscribe(setSlugs, 'http://localhost:3000/api/views');
    return () => {
      isSubscribed = false;
    };
  }, []);

  return (
    <Layout>
      <Head
        title={`The ${NAME}'s Blog`}
        description="I write about JavaScript, TypeScript, React, and share the things I've learned."
      />

      <div className={blogWrapper()}>
        {/* //TODO: imporve Bellow */}
        <div
          className={flexRow(
            blogWrapper({
              css: {
                justifyContent: 'space-between',
                margin: '2rem auto',
                padding: '0 !important',
              },
            })
          )}
        >
          <h2 className={heading({ type: 'h3', css: { margin: '0' } })}>Latest Articles</h2>
          <Link href="/tags" className={text({ type: 'link', css: { margin: '0' } })}>
            See all topics ({tagsCount})
          </Link>
        </div>
        {posts && posts.map((post) => <BlogCardNew key={post.slug} post={post} />)}
      </div>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const posts = allPosts.map(postMetaFilter);
  const tags = allPosts.reduce(reduceTags, []).filter(filterTags);

  return { props: { posts, tagsCount: tags.length } };
};

export default Blog;
