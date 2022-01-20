import type { GetStaticPropsContext } from 'next';
import { allPosts } from '.contentlayer/data';
import Layout from 'Components/Layout';
import { sizeLogger, sortPosts } from '@lib/helpers';
import FeaturedPosts from 'Components/FeaturedPosts';
import HomeEntry from 'Components/HomeEntry';
import data from '../content/data/home';
import FeaturedWorks from 'Components/FeaturedWorks';
import FreelanceCTA from 'Components/FreelanceCTA';
import Head from 'Components/Head';
import { NAME } from '@lib/constants';

const Home = ({ featuredPosts, about, socials, work, open, contact }) => {
  return (
    <div>
      <Head
        title={NAME}
        description="Hi, I'm Idir Hamouch. I’m a self-taught full-stack javaScript developer, I am passionate about building things for the web using newest technologies."
      />
      <Layout>
        <HomeEntry about={about} socials={socials} contact={contact} />
        <FeaturedPosts posts={featuredPosts} />
        <FeaturedWorks work={work} />
        {open && <FreelanceCTA />}
      </Layout>
    </div>
  );
};

export const getStaticProps = async ({ params }: GetStaticPropsContext) => {
  const filter = ({ title, slug, publishedAt }) => {
    return { title, slug, publishedAt };
  };
  const posts = allPosts.sort(sortPosts).slice(0, 3).map(filter);

  //sizeLogger(posts);

  return {
    props: {
      featuredPosts: posts,
      about: data.about,
      socials: data.socials,
      work: data.work,
      open: data.open,
      contact: data.contact,
    },
  };
};

export default Home;
