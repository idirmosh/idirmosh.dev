import { box, Grid, linkReset, wrapper } from '@styles/common';
import { heading, text } from '@styles/typography';
import { css, styled } from 'stitches.config';
import Image from 'next/image';
import Link from './common/Link';
import { keyGen } from '@lib/helpers';
import { NAME } from '@lib/constants';

function HomeEntry({ about, socials }) {
  const entry = css({
    alignItems: 'center',
    margin: '6rem auto',
    '@desktop': {
      margin: '10rem auto',
    },
  });
  const content = css({
    gridColumn: '1/13',
    gridRow: '1',
    '@tablet': {
      gridColumn: '1/10',
    },
    '@desktop': {
      gridColumn: '1/10',
    },
  });

  const resetLink = css({
    position: 'relative',
    display: 'inline-block',
    textDecoration: 'none',
    lineHeight: '1 !important',
    margin: '0 40px 0 0 !important',
    color: '$neutral0 !important',
    transition: 'color 0.15s ease-in 0s',
    '&:hover': {
      color: '$brand_main !important',
      border: 'none !important',
    },
  });

  return (
    <Grid className={wrapper(entry())}>
      <div className={content()}>
        <Image
          alt={NAME}
          width={64}
          height={64}
          className={box({ css: { borderRadius: '999px' } })}
          src={about.avatar}
        />
        <p className={heading({ type: 'xlarge' })}>{about.title}</p>
        <p className={text()}>{about.para1}</p>
        <p className={text()}>{about.para2}</p>
      </div>
      <nav className={box({ css: { gridRow: '2', display: 'flex', marginTop: '$2' } })}>
        {socials.map((social) => (
          <Link
            key={keyGen(social.name)}
            className={resetLink(text({ type: 'external-link' }))}
            href={social.link}
            target="_blank"
          >
            {social.name}
          </Link>
        ))}
      </nav>
    </Grid>
  );
}

export default HomeEntry;
