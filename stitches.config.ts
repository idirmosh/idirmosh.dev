import { createStitches } from '@stitches/react';

const globalStyles = {
  theme: {
    colors: {
      gray400: 'gainsboro',
      gray500: 'lightgray',
    },
  },
  media: {
    bp1: '(min-width: 480px)',
  },
  utils: {
    marginX: (value: string) => ({ marginLeft: value, marginRight: value }),
  },
};

export const { styled, css, globalCss, keyframes, getCssText, theme, createTheme, config } =
  createStitches(globalStyles);
