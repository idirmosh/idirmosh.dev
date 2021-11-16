import { css } from 'stitches.config';

export const heading = css({
  margin: '1.6em 0px 1em',
  fontFamily: '$sans',
  fontWeight: '700',
  lineHeight: '1.2',

  variants: {
    type: {
      h1: {
        marginTop: '0',
        fontSize: '2.074rem',
        letterSpacing: '-2px',
      },
      h2: { fontSize: '1.728rem', letterSpacing: '-1.6px' },
      h3: { fontSize: '1.44rem', letterSpacing: '-1.3px' },
      h4: { fontSize: '1.2rem', letterSpacing: '-1px' },
      // h5: { fontSize: '1rem', letterSpacing: '-0.8px' },
    },
  },
  defaultVariants: {
    type: 'h4',
  },
});

export const text = css({
  lineHeight: '1.6',
  color: '$neutral0',
  variants: {
    type: {
      xxSmal: {
        fontSize: '0.64rem',
      },
      xSmall: {
        fontSize: '0.694rem',
      },
      small: {
        fontSize: '0.833rem',
      },
      body: {
        fontSize: '1rem',
        marginBottom: '1.25em',
      },
      subText: {
        fontSize: '1.118rem',
      },
      link: {
        wordWrap: 'break-word',
        textDecoration: 'none',
        letterSpacing: 'inherit',
        color: '$brand_main',
      },
      list: {
        fontSize: '1rem',
        marginBottom: '1em',
      },
      code: {
        fontFamily: '$mono',
      },
    },
  },
  defaultVariants: {
    type: 'body',
  },
});
