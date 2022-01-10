import { box, Grid, linkReset, wrapper } from '@styles/common';
import { heading, text } from '@styles/typography';
import { css, styled } from 'stitches.config';
import Image from 'next/image';
import Link from './common/Link';
import { keyGen } from '@lib/helpers';
import { NAME } from '@lib/constants';

function HomeEntry({ about, socials, contact }) {
  const entry = css({
    alignItems: 'center',
    margin: '$5 auto',
    '@desktop': {
      margin: '$6 auto',
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

  const linkSpacer = css({
    fontWeight: '100',
    color: '$neutral4',
    padding: '0 $2',
  });
  const contain = css({
    gridColumn: '1/13',
    gridRow: '2',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  });
  return (
    <Grid className={wrapper(entry())}>
      <div className={content()}>
        <Image
          alt={NAME}
          width={164}
          height={164}
          className={box({ css: { borderRadius: '999px' } })}
          src={about.avatar}
        />
        <h1 className={heading({ type: 'xlarge' })}>{about.title}</h1>
        <p className={text()}>{about.para1}</p>
        <p className={text()}>{about.para2}</p>
      </div>
      <div className={contain()}>
        <div
          className={box({
            css: { marginRight: '$5', marginBottom: '$3', '@mobile': { marginBottom: '0' } },
          })}
        >
          <p className={text({ css: { marginBottom: '$1 !important', color: '$neutral2' } })}>
            Find me.
          </p>

          {socials.map((social, idx) => (
            <Link
              key={keyGen(social.name)}
              className={linkReset({ css: { color: '$neutral0', fontWeight: '600' } })}
              href={social.link}
              target="_blank"
            >
              {social.name}
              {idx < socials.length - 1 && <span className={linkSpacer()}>/</span>}
            </Link>
          ))}
        </div>
        <div>
          <p className={text({ css: { marginBottom: '$1 !important', color: '$neutral2' } })}>
            Contact me.
          </p>
          <Link
            className={linkReset({ css: { color: '$neutral0', fontWeight: '600' } })}
            href={`https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=${contact}`}
            target="_blank"
          >
            {contact}
          </Link>
        </div>
      </div>
    </Grid>
  );
}

export default HomeEntry;
