import { css } from 'stitches.config';

export const heading = css({
  display: 'block',
  fontFamily: '$sans',
  letterSpacing: '-0.0207142857em',
  fontWeight: '700',
  fontKerning: 'normal',
  'font-variant-ligatures': 'common-ligatures contextual discretionary-ligatures',
  'font-feature-settings': "'kern', 'liga', 'clig', 'calt', 'dlig'",

  variants: {
    type: {
      h1: { fontSize: '2rem', marginBottom: '1.5rem', lineHeight: '2.5rem' },
      h2: { fontSize: '1.5rem', marginBottom: '1rem', lineHeight: '1.75rem' },
      h3: { fontSize: '1.25rem', marginBottom: '0.75rem', lineHeight: '1.75rem' },
      h4: { fontSize: '1rem', marginBottom: '0.5rem', lineHeight: '1.25rem' },
      h5: { fontSize: '0.875rem', marginBottom: '0.25rem', lineHeight: '1rem' },
    },
  },
  defaultVariants: {
    type: 'h1',
  },
});

export const text = css({
  color: '$neutral2',
  marginBottom: '1em',
  lineHeight: '1.7',
  fontSize: '1rem',
  fontFamily: '$sans',
  variants: {
    type: {
      medium: {
        fontSize: '0.875rem',
      },
      small: {
        fontSize: '0.75rem',
        lineHeight: '1rem',
      },
      menu: {
        letterSpacing: '0.02em',
        display: 'block',
        fontSize: '0.875rem',
        fontWeight: '500',
        color: '$neutral3',
        whiteSpace: 'nowrap',
        fontFamily: '$sans',
        transitionProperty: 'border-color, fill',
        transitionDuration: '300ms',

        '&:hover': {
          color: '$neutral0',
        },
      },
      link: {
        color: '$brand_main',
        // borderBottom: ' 1px solid $brand_main',
        textDecoration: 'none',
        transition: 'all .3s',

        //fontWeight: '500',
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
        // borderBottom: ' 1px solid $brand_main',
        textDecoration: 'none',
        transition: 'all .3s',
        position: 'relative',
        marginRight: '1.3rem',
        // fontWeight: '500',
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
          width: '16px',
          height: '16px',
          marginLeft: '4px',
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
