import { css } from 'stitches.config';

export const heading = css({
  display: 'block',
  fontFamily: '$sans',
  letterSpacing: '-0.0207142857em',
  fontWeight: '700',
  fontKerning: 'normal',
  'font-variant-ligatures': 'common-ligatures contextual discretionary-ligatures',
  'font-feature-settings': "'kern', 'liga', 'clig', 'calt', 'dlig'",
  color: '$neutral0',

  variants: {
    type: {
      xlarge: {
        fontSize: '2rem',
        lineHeight: '1.1',
        marginBottom: '$4',
        '@mobile': {
          fontSize: '2.6rem',
          lineHeight: '1.2',
        },
        '@tablet': {
          fontSize: '3rem',
          lineHeight: '1.1',
        },
      },
      h1: { fontSize: '2rem', marginBottom: '$4', lineHeight: '2.5rem' },
      h2: { fontSize: '1.5rem !important', marginBottom: '$3', lineHeight: '1.75rem' },
      h3: { fontSize: '1.25rem', marginBottom: '$3', lineHeight: '1.75rem' },
      h4: { fontSize: '1rem', marginBottom: '$2', lineHeight: '1.25rem' },
      h5: { fontSize: '0.875rem', marginBottom: '$1', lineHeight: '1rem' },
    },
  },
  defaultVariants: {
    type: 'h1',
  },
});

export const text = css({
  color: '$neutral1',
  marginBottom: '$4',

  fontFamily: '$sans',
  fontSize: '1.125rem',
  lineHeight: '1.75rem',
  fointWeight: '400',
  letterSpacing: '-.025em',
  variants: {
    type: {
      medium: {
        fontSize: '0.875rem',
      },
      small: {
        fontSize: '0.75rem',
        lineHeight: '1rem',
      },
      menuCap: {
        fontSize: '.7rem',
        fontWeight: '700',
        lineHeight: '1',
        margin: '$1 0 0 0',
        textTransform: 'uppercase',
        letterSpacing: '-.025em',
        display: 'inline-block',
      },
      link: {
        color: '$brand_main',
        textDecoration: 'none',
        transition: 'all .3s',
        '&:hover': {
          color: '$brand_main',
          borderBottom: ' 1px solid $brand_main',
        },
        '&:active': {
          backgroundColor: 'rgba($brand_main, 0.125)',
        },
        '&:focus': {
          textDecoration: 'none',
        },
      },
      'external-link': {
        color: '$brand_main',
        textDecoration: 'none',
        transition: 'all .3s',
        position: 'relative',
        marginRight: '24px',
        '&:hover': {
          color: '$brand_main',
          borderBottom: ' 1px solid $brand_main',
        },
        '&:active': {
          backgroundColor: 'rgba($brand_main, 0.125)',
        },
        '&:focus': {
          textDecoration: 'none',
        },

        '&:after': {
          content: '',
          position: 'absolute',
          bottom: '1px',
          width: '$3',
          height: '$3',
          marginLeft: '$1',
          '-webkit-mask':
            'url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDI0IDI0IiB2aWV3Qm94PSIwIDAgMjQgMjQiIGZpbGw9IiMwMDAwMDAiPjxyZWN0IGZpbGw9Im5vbmUiIGhlaWdodD0iMjQiIHdpZHRoPSIyNCIvPjxwYXRoIGQ9Ik05LDV2Mmg2LjU5TDQsMTguNTlMNS40MSwyMEwxNyw4LjQxVjE1aDJWNUg5eiIvPjwvc3ZnPg==) 50% 50% no-repeat',
          backgroundColor: 'currentColor',
        },
      },

      code: {
        fontFamily: '$mono',
        color: '$neutral1',
        padding: '0 0.25rem',
        borderRadius: '4px',
        background: '$neutral6',
        border: '1px solid $neutral5',
        'overflow-wrap': 'break-word',
      },
    },
  },
});
