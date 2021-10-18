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

      neutral0: '#333333',
      neutral1: '#555555',
      neutral2: '#777777',
      neutral3: '#AAAAAA',
      neutral4: '#CCCCCC',
      neutral5: '#EEEEEE',
      neutral6: '#F4F4F4',
      neutral7: '#FFFFFF',

      brand_main: '#3A2FC2',
      brand_bright: '#E7E6F2',
      brand_faded: '#F5F5FA',
      brand_inverted: '#D1CDF7',
    },
    fonts: {
      sans: 'Inter, sans-serif',
      mono: 'Fira Mono, monospace',
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
    bp1: '(min-width: 480px)',
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
