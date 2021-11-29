import { createStitches } from '@stitches/react';

const globalStyles = {
  theme: {
    colors: {
      black: '#1a1a1a',
      white: '#fff',
      gray: '#5C5C5C',
      blue: '#2D76BA',
      red: '#BA2D2D',
      yellow: '#BAB12D',
      pink: '#BA2DB4',
      turq: '#49BA2D',
      orange: '#BA822D',
      copy: '#B8B8B8',

      neutral0: '#0D1213',
      neutral1: '#151D1E',
      neutral2: '#20292B',
      neutral3: '#2E3739',
      neutral4: '#8A8F93',
      neutral5: '#D7D7DB',
      neutral6: '#F1F2F3',
      neutral7: '#ffffff',

      brand_main: '#5700E3',
      brand_inverted: '#B8AAF2',
      brand_bright: '#EFEBFF',
      brand_faded: '#F7F5FF',
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
