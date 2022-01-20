import type { GetStaticPropsContext } from 'next';
import { allPosts } from '.contentlayer/data';
import Layout from 'Components/Layout';
import { sizeLogger, sortPosts } from '@lib/helpers';
import FeaturedPosts from 'Components/FeaturedPosts';
import HomeEntry from 'Components/HomeEntry';
//import data from '../content/data/home';
import FeaturedWorks from 'Components/FeaturedWorks';
import FreelanceCTA from 'Components/FreelanceCTA';
import Head from 'Components/Head';
import { NAME } from '@lib/constants';
import { info } from '.contentlayer/data';

const Home = ({ posts, content }) => {
  return (
    <div>
      <Head
        title={NAME}
        description="Hi, I'm Idir Hamouch. I’m a self-taught full-stack javaScript developer, I am passionate about building things for the web using newest technologies."
      />
      <Layout menu={content.menu} name={content.name} title={content.title}>
        <HomeEntry
          avatar={content.avatar}
          socials={content.socials}
          contact={content.contact}
          code={content.code}
        />
        <FeaturedPosts posts={posts} />
        <FeaturedWorks projects={content.projects} />
        {content.available && <FreelanceCTA />}
      </Layout>
    </div>
  );
};

export const getStaticProps = async ({ params }: GetStaticPropsContext) => {
  const filter = ({ title, slug, publishedAt }) => ({ title, slug, publishedAt });
  const posts = allPosts.sort(sortPosts).slice(0, 3).map(filter);

  const {
    name,
    title,
    menu,
    available,
    contact,
    avatar,
    socials,
    projects,
    body: { code },
  } = info;

  const content = { name, menu, title, avatar, code, socials, projects, available, contact };
  return { props: { posts, content } };
};

export default Home;
