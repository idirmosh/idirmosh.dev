import { ReactElement } from 'react';
import type { GetStaticProps, NextPage } from 'next';
import { Head, Layout, BlogCard } from 'components';
import { BlogListTagsDisplay, BlogListHeader } from 'components/common';
import { blogWrapper } from '@styles/common';
import { info } from '.contentlayer/data';
import { allPosts } from '.contentlayer/data';
import { filterTags, postMetaFilter, reduceTags } from '@lib/helpers';
import { Info, Post } from '.contentlayer/types';

const seoDesc = "I write about JavaScript, TypeScript, React, and share the things I've learned.";

type Props = {
  posts: Post[];
  tags: Array<string>;
  info: Info;
};

const Blog: NextPage<Props> = ({ posts, tags, info }): ReactElement => {
  const { name, title, menu } = info;

  return (
    <Layout values={{ menu, name, title }}>
      <Head title={`The ${name}'s Blog`} description={seoDesc} />
      <div className={blogWrapper()}>
        {/* //TODO: imporve Bellow */}
        <BlogListHeader title="Blog">
          <BlogListTagsDisplay tags={tags} />
        </BlogListHeader>
        {posts && posts.map((post) => <BlogCard key={post.slug} post={post} />)}
      </div>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const posts = allPosts.map(postMetaFilter);
  const tags = allPosts.reduce(reduceTags, []).filter(filterTags);

  return { props: { posts, tags, info } };
};

export default Blog;
