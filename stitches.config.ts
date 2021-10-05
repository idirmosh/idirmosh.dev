import { createStitches } from '@stitches/react';

const globalStyles = {
  theme: {
    colors: {
      black: 'rgba(19, 19, 21, 1)',
      white: 'rgba(255, 255, 255, 1)',
      gray: 'rgba(128, 128, 128, 1)',
      blue: 'rgba(3, 136, 252, 1)',
      red: 'rgba(249, 16, 74, 1)',
      yellow: 'rgba(255, 221, 0, 1)',
      pink: 'rgba(232, 141, 163, 1)',
      turq: 'rgba(0, 245, 196, 1)',
      orange: 'rgba(255, 135, 31, 1)',
      copy: 'rgba(170, 170, 175, 1)',

      neutral0: '#333333',
      neutral1: '#555555',
      neutral2: '#777777',
      neutral3: '#AAAAAA',
      neutral4: '#CCCCCC',
      neutral5: '#EEEEEE',
      neutral6: '#F4F4F4',
      neutral7: '#FFFFFF',

      brand_main: '#0A0AFA',
      brand_bright: '#E1E1FE',
      brand_faded: '#F1F1FF',
      brand_inverted: '#858AE3',
    },
    fonts: {
      sans: 'Source Sans Pro, sans-serif',
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
    mb: (value: string) => ({
      marginBottom: value,
    }),
  },
};

export const { styled, css, globalCss, keyframes, getCssText, theme, createTheme, config } =
  createStitches(globalStyles);
