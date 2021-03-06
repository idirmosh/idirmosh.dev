import React from 'react';
import Image from 'next/image';
import { useMDXComponent } from 'next-contentlayer/hooks';
import { MDXHome } from './MDXComponents';
import { Link } from 'components/common';
import { keyGen } from '@lib/helpers';
import { text } from '@styles/typography';
import { css } from 'stitches.config';
import { Grid, linkReset, radius, wrapper } from '@styles/common';

type Props = {
  name: string;
  avatar: string;
  code: string;
  socials: Array<Record<string, string>>;
  contact: string;
};

function HomeEntry({ name, avatar, code, socials, contact }: Props): React.ReactElement {
  const Component = useMDXComponent(code);
  return (
    <Grid className={wrapper(entry())}>
      <div className={content()}>
        <Image alt={name} width={164} height={164} className={radius()} src={avatar} />
        <Component components={MDXHome} />
      </div>
      <div className={contain()}>
        <div className={social()}>
          <p className={text(socialText())}>Find me.</p>
          {socials.map((social, idx) => (
            <Link
              key={keyGen(social.name)}
              className={linkReset(socialLink())}
              href={social.link}
              target="_blank"
            >
              {social.name}
              {idx < socials.length - 1 && <span className={linkSpacer()}>/</span>}
            </Link>
          ))}
        </div>
        <div>
          <p className={text(socialText())}>Contact me.</p>
          <Link
            className={linkReset(socialLink())}
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

// Styles
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
const social = css({
  marginRight: '$5',
  marginBottom: '$3',
  '@mobile': { marginBottom: '0' },
});
const socialText = css({
  marginBottom: '$1 !important',
  color: '$neutral2',
});
const socialLink = css({
  color: '$neutral0',
  fontWeight: '600',
});
export default HomeEntry;
