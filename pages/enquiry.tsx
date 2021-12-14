import Head from 'next/head';
import Layout from '@components/Layout';
import { box, singlePostWrapper } from '@styles/common';
import PriceRange from '@components/Enquiry/PrinceRange';
import PersonalInfo from '@components/Enquiry/PersonalInfo';
import ProjectDetails from '@components/Enquiry/ProjectDetails';

import AcceptPolicy from '@components/Enquiry/AcceptPolicy';
import { css } from 'stitches.config';
import Link from '@components/common/Link';
import { heading } from '@styles/typography';

function Enquiry() {
  const button = css({
    margin: '0',
    border: '0',
    backgroundColor: '$brand_main',
    color: '$neutral6',
    padding: '1rem 2rem',
    borderRadius: '999px',
    cursor: 'pointer',
    marginTop: '1rem',
  });
  return (
    <div>
      <Head>
        <title>Index</title>
      </Head>
      <Layout>
        <div className={singlePostWrapper({ css: { margin: '3.2rem auto' } })}>
          <div className={box({ css: { marginBottom: '2rem' } })}>
            <h1 className={heading({ type: 'h1' })}>
              Interested?
              <br /> Let’s talk!
            </h1>
            <p>
              Just fill this simple form in and i will contact you promptly <br /> to discuss your
              project. Hate forms? Drop me a line at <br /> <Link href="#">contact@idir.com</Link>
            </p>
          </div>
          <PersonalInfo />
          <PriceRange />
          <ProjectDetails />
          <AcceptPolicy />
          <div>
            <input className={button()} type="submit" value="Send Request" />
          </div>
        </div>
      </Layout>
    </div>
  );
}

export default Enquiry;
