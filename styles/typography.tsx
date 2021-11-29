import { css } from 'stitches.config';

// export const heading = css({
//   margin: '1.6em 0px 1em',
//   fontFamily: '$sans',
//   fontWeight: '700',
//   lineHeight: '1.2',

//   variants: {
//     type: {
//       h1: {
//         marginTop: '0',
//         fontSize: '2.074rem',
//         letterSpacing: '-2px',
//       },
//       h2: { fontSize: '1.728rem', letterSpacing: '-1.6px' },
//       h3: { fontSize: '1.44rem', letterSpacing: '-1.3px' },
//       h4: { fontSize: '1.2rem', letterSpacing: '-1px' },
//       // h5: { fontSize: '1rem', letterSpacing: '-0.8px' },
//     },
//   },
//   defaultVariants: {
//     type: 'h4',
//   },
// });

// export const text = css({
//   lineHeight: '1.6',
//   color: '$neutral0',
//   variants: {
//     type: {
//       xxSmal: {
//         fontSize: '0.64rem',
//       },
//       xSmall: {
//         fontSize: '0.694rem',
//       },
//       small: {
//         fontSize: '0.833rem',
//       },
//       body: {
//         fontSize: '1rem',
//         marginBottom: '1.25em',
//       },
//       subText: {
//         fontSize: '1.118rem',
//       },
//       link: {
//         wordWrap: 'break-word',
//         textDecoration: 'none',
//         letterSpacing: 'inherit',
//         color: '$brand_main',
//       },
//       list: {
//         fontSize: '1rem',
//         marginBottom: '1em',
//       },
//       code: {
//         fontFamily: '$mono',
//       },
//     },
//   },
//   defaultVariants: {
//     type: 'body',
//   },
// });

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
  color: 'inherit',
  marginBottom: '1em',
  lineHeight: '1.5',
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
        color: '$neutral4',
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
        borderBottom: ' 1px solid $brand_main',
        textDecoration: 'none',
        transition: 'all .3s',

        fontWeight: '500',
        '&:hover': {
          color: '$brand_main',
          'border-bottom-color': 'transparent',
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
        borderBottom: ' 1px solid $brand_main',
        textDecoration: 'none',
        transition: 'all .3s',
        position: 'relative',
        marginRight: '1.3rem',
        fontWeight: '500',
        '&:hover': {
          color: '$brand_main',
          'border-bottom-color': 'transparent',
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
            'url(data:image/svg+xml;charset=utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2016%2015%22%3E%3Cpath%20d%3D%22M3.563%2014.672h9.46c1.696%200%202.57-.875%202.57-2.547V2.617c0-1.672-.874-2.547-2.57-2.547h-9.46C1.875.07.993.937.993%202.617v9.508c0%201.672.882%202.547%202.57%202.547zm.101-1.555c-.719%200-1.117-.375-1.117-1.133V2.758c0-.758.398-1.133%201.117-1.133h9.258c.71%200%201.117.375%201.117%201.133v9.226c0%20.758-.406%201.133-1.117%201.133H3.664zm7.07-3.71c.391%200%20.649-.29.649-.712V5.062c0-.546-.305-.789-.797-.789H6.93c-.422%200-.703.25-.703.641%200%20.399.28.649.71.649h1.32l1.056-.125-1.149%201.054L5.43%209.227a.718.718%200%2000-.22.5c0%20.421.29.695.688.695.22%200%20.391-.078.532-.219l2.726-2.726%201.047-1.133-.117%201.117v1.242c0%20.43.258.703.648.703z%22%2F%3E%3C%2Fsvg%3E) no-repeat 50% 50%',
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
