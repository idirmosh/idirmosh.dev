// @ts-nocheck
import type { GetStaticPropsContext, NextPage } from 'next';
import { Layout, Head, FreelanceCTA, FeaturedWorks, HomeEntry, FeaturedPosts } from 'components';
import { allPosts } from '.contentlayer/data';
import { sizeLogger, sortPosts } from '@lib/helpers';
import { info } from '.contentlayer/data';
import { Info } from '.contentlayer/types';

type PostProps = {
  title: string;
  slug: string;
  publishedAt: string;
};
type Props = {
  posts: PostProps[];
  info: Info;
};

const Home = ({ posts, info }: NextPage<Props>) => {
  const { name, title, menu, footerLinks: links, avatar, socials, projects, contact, body } = info;
  const entryProps = { avatar, socials, contact, code: body.code };

  return (
    <div>
      <Head
        title={name}
        description="Hi, I'm Idir Hamouch. I’m a self-taught full-stack javaScript developer, I am passionate about building things for the web using newest technologies."
      />
      <Layout values={{ name, title, menu, links }}>
        <HomeEntry {...entryProps} />
        <FeaturedPosts posts={posts} />
        <FeaturedWorks projects={projects} />
        {info.available && <FreelanceCTA />}
      </Layout>
    </div>
  );
};

export const getStaticProps = async ({ params }: GetStaticPropsContext) => {
  const filter = ({ title, slug, publishedAt }) => ({ title, slug, publishedAt });
  const posts: PostProps[] = allPosts.sort(sortPosts).slice(0, 3).map(filter);

  // sizeLogger(info);

  return { props: { posts, info } };
};

export default Home;
