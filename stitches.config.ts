import { createStitches } from '@stitches/react';

const globalStyles = {
  theme: {
    colors: {
      black: '#1a1a1a',
      white: '#fff',
      gray: '#8A8F93',
      blue: '#0068E3',
      red: '#E30029',
      yellow: '#E3D000',
      pink: '#E300B1',
      turq: '#06A934',
      orange: '#E36D00',
      copy: '#D7D7DB',

      // neutral0: '#0D1213',
      // neutral1: '#151D1E',
      // neutral2: '#20292B',
      // neutral3: '#2E3739',
      // neutral4: '#8A8F93',
      // neutral5: '#D7D7DB',
      // neutral6: '#F1F2F3',
      // neutral7: '#ffffff',
      neutral0: '#0D1114',
      neutral1: '#151C20',
      neutral2: '#20272E',
      neutral3: '#2E353D',
      neutral4: '#8A8B9A',
      neutral5: '#D7D5DD',
      neutral6: '#eeeef5',
      neutral7: '#FFFFFF',
      brand_main: '#5700E3',
      brand_inverted: '#B8AAF2',
      brand_bright: '#E2DFED',
      brand_faded: '#F6F5FA',
    },
    fonts: {
      sans: 'Inter, sans-serif',
      mono: 'ui-monospace,SFMono-Regular,SF Mono,Menlo,Consolas,monospace',
    },
    sizes: {
      1: '14px',
      2: '16px',
      3: '18px',
      4: '20px',
      5: '30px',
      6: '36px',
    },
    space: {
      1: '4px',
      2: '8px',
      3: '16px',
      4: '32px',
      5: '64px',
      6: '128px',
      7: '256px',
      8: '512px',
    },
    lineHeights: {
      base: '1.5',
      1: '18px',
      2: '21px',
      3: '24px',
      4: '30px',
      5: '36px',
      6: '48px',
      7: '72px',
      8: '96px',
      9: '108px',
    },
  },
  media: {
    mobile: '(max-width: 640px)',
    tablet: '(max-width: 768px)',
    desktop: '(max-width: 1024px)',
  },
  utils: {
    marginX: (value: string) => ({ marginLeft: value, marginRight: value }),
    mt: (value: string) => ({
      marginTop: value,
    }),
    mr: (value: string) => ({
      marginRight: value,
    }),
    mb: (value: string) => ({
      marginBottom: value,
    }),
    ml: (value: string) => ({
      marginLeft: value,
    }),

    pt: (value: string) => ({
      paddingTop: value,
    }),
    pr: (value: string) => ({
      paddingRight: value,
    }),
    pb: (value: string) => ({
      paddingBottom: value,
    }),
    pl: (value: string) => ({
      paddingLeft: value,
    }),
  },
};

export const { styled, css, globalCss, keyframes, getCssText, theme, createTheme, config } =
  createStitches(globalStyles);
export const darkTheme = createTheme({
  colors: {
    black: '#1a1a1a',
    white: '#fff',
    gray: '#8A8F93',
    blue: '#72A6E3',
    red: '#E37286',
    yellow: '#E3DA72',
    pink: '#D692E1',
    turq: '#54A96C',
    orange: '#E3A872',
    copy: '#D7D7DB',

    neutral7: '#0D1114',
    neutral6: '#151C20',
    neutral5: '#20272E',
    neutral4: '#2E353D',
    neutral3: '#8A8B9A',
    neutral2: '#D7D5DD',
    neutral1: '#FAFBFC',
    neutral0: '#FFFFFF',

    brand_main: '#B8AAF2',
    brand_inverted: '#E2DFED',
    brand_bright: '#2E3739',
    brand_faded: '#20292B',
  },
  space: {},
  fonts: {},
});

// export const globalCSSStyles = globalCss({
//   '@dark': {
//     ':root:not(.light)': {
//       ...Object.keys(darkTheme.colors).reduce((varSet, currentColorKey) => {
//         const currentColor = darkTheme.colors[currentColorKey];
//         const currentColorValue =
//           currentColor.value.substring(0, 1) === '$'
//             ? `$colors${currentColor.value}`
//             : currentColor.value;
//         return {
//           [currentColor.variable]: currentColorValue,
//           ...varSet,
//         };
//       }, {}),
//     },
//   },
// });

// globalCSSStyles();
