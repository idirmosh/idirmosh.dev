import type { GetStaticProps, GetStaticPaths, NextPage } from 'next';
import { allPosts } from '.contentlayer/data';
import { filterTags, keyGen, reduceTags } from '@lib/helpers';
import { IPageProps, IParams } from 'global';
import BlogCard from '@components/BlogCard';
import BlogListWrapper from '@components/common/BlogListWrapper';

const SingleTagPage: NextPage<IPageProps> = ({ posts }) => {
  return (
    <BlogListWrapper>
      <h1>Tag alone</h1>
      {posts && posts.map((post) => <BlogCard key={keyGen(post.slug)} post={post} />)}
    </BlogListWrapper>
  );
};

export const getStaticProps: GetStaticProps = async ({ params: { tag } }: IParams) => {
  const posts = allPosts.map((post) => post.tags.includes(tag) && post).filter((o) => o);
  return { props: { posts } };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const tags = allPosts.reduce(reduceTags, []).filter(filterTags) as string[];

  return {
    paths: tags.map((tag) => ({ params: { tag } })),
    fallback: false,
  };
};

export default SingleTagPage;
