import type { GetStaticProps, NextPage } from 'next';
import { useEffect, useState } from 'react';
import { allPosts } from '.contentlayer/data';
import { filterTags, postMetaFilter, reduceTags, subscribe } from '@lib/helpers';
import { IPageProps } from 'global';
import BlogCardNew from 'Components/BlogCard';
import Layout from 'Components/Layout';
import { blogWrapper } from '@styles/common';

import Head from 'Components/Head';
import { NAME } from '@lib/constants';

import BlogListHeader from 'Components/Common/BlogListHeader';
import BlogListTagsDisplay from 'Components/Common/BlogListTagsDisplay';

const Blog: NextPage<IPageProps> = ({ posts, tags }) => {
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
        <BlogListHeader title="Blog">
          <BlogListTagsDisplay tags={tags} />
        </BlogListHeader>
        {posts && posts.map((post) => <BlogCardNew key={post.slug} post={post} />)}
      </div>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const posts = allPosts.map(postMetaFilter);
  const tags = allPosts.reduce(reduceTags, []).filter(filterTags);

  return { props: { posts, tags } };
};

export default Blog;
