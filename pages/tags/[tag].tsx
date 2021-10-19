import type { GetStaticProps, GetStaticPaths, NextPage } from 'next';
import * as styles from '@components/MDXComponents/styles';
import PostCard from '@components/Post/Card';

import { allPosts } from '.contentlayer/data';
import { filterTags, reduceTags } from '@lib/helpers';
import { IPageProps, IParams } from 'global';

const SingleTagPage: NextPage<IPageProps> = ({ posts }) => {
  return (
    <div className={styles.container({})}>
      <div className={styles.box({ my: '$5' })}>
        <h1>Tag alone</h1>
        <div className={styles.container()}>
          <div>{posts && posts.map((post) => <PostCard key={post.wordCount} post={post} />)}</div>
        </div>
      </div>
    </div>
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
