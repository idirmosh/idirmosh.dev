import type { GetStaticProps, NextPage } from 'next';
import * as styles from '@components/MDXComponents/styles';
import { allPosts } from '.contentlayer/data';
import type { Post } from '.contentlayer/types';
import { filterTags, reduceTags } from '@lib/helpers';
import PostCard from '@components/Post/Card';

const TagsPage: NextPage<Post> = ({ tags }) => {
  console.log(tags);
  return (
    <div className={styles.container({})}>
      <div className={styles.box({ my: '$5' })}>
        <h1>Tags</h1>
        <div>
          {tags.map((t) => (
            <h2 key={t}>{t}</h2>
          ))}
        </div>
      </div>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const tags = allPosts.reduce(reduceTags, []).filter(filterTags);
  return { props: { tags } };
};

export default TagsPage;
