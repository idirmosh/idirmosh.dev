import { createStitches } from '@stitches/react';
export const { styled, css, globalCss, keyframes, getCssText, theme, createTheme, config } =
  createStitches({
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

        neutral0: '#333',
        neutral1: '#555',
        neutral2: '#777',
        neutral3: '#aaa',
        neutral4: '#ccc',
        neutral5: '#eee',
        neutral6: '#f4f4f4',
        neutral7: '#fff',

        brand_main: '#5700E3',
        brand_inverted: '#B8AAF2',
        brand_bright: '#E2DFED',
        brand_faded: '#F6F5FA',
      },

      fonts: {
        sans: 'Inter, sans-serif',
        mono: 'ui-monospace, Consolas, monaco, monospace',
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
        9: '1024px',
      },
      sizes: {
        1: '4px',
        2: '8px',
        3: '16px',
        4: '32px',
        5: '64px',
        6: '128px',
        7: '256px',
        8: '512px',
        9: '1024px',
      },
    },
    media: {
      mobile: '(min-width: 640px)',
      tablet: '(min-width: 768px)',
      desktop: '(min-width: 1024px)',
      dark: '(prefers-color-scheme: dark)',
    },
  });

export const darkTheme = createTheme('dark', {
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

    neutral7: '#131217',
    neutral6: '#1b191f',
    neutral5: '#333333',
    neutral4: '#555555',
    neutral3: '#777777',
    neutral2: '#aaaaaa',
    neutral1: '#cccccc',
    neutral0: '#d9d7e0',

    brand_main: '#B8AAF2',
    brand_inverted: '#E2DFED',
    brand_bright: '#2E3739',
    brand_faded: '#20292B',
  },
});
