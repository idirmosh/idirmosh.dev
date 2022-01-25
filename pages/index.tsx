import type { GetStaticPropsContext, InferGetStaticPropsType } from 'next';
import { Layout, Head, FreelanceCTA, FeaturedWorks, HomeEntry, FeaturedPosts } from 'components';
import { allPosts } from '.contentlayer/data';
import { sizeLogger, sortPosts } from '@lib/helpers';
import { NAME } from '@lib/constants';
import { info } from '.contentlayer/data';

const Home = ({ posts, content }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <div>
      <Head
        title={NAME}
        description="Hi, I'm Idir Hamouch. I’m a self-taught full-stack javaScript developer, I am passionate about building things for the web using newest technologies."
      />
      <Layout values={{ ...content }}>
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
    footerLinks,
    contact,
    avatar,
    socials,
    projects,
    body: { code },
  } = info;
  //console.log(footerLinks);
  const content = {
    name,
    menu,
    title,
    avatar,
    footerLinks,
    code,
    socials,
    projects,
    available,
    contact,
  };
  return { props: { posts, content } };
};

export default Home;
