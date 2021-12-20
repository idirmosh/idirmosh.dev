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

        neutral0: '#131313',
        neutral1: '#1C1C1C',
        neutral2: '#303030',
        neutral3: '#4B4B4B',
        neutral4: '#A1A1A1',
        neutral5: '#D0D0D0',
        neutral6: '#F6F6F6',
        neutral7: '#ffffff',

        brand_main: '#5700E3',
        brand_inverted: '#B8AAF2',
        brand_bright: '#E2DFED',
        brand_faded: '#F6F5FA',
      },

      fonts: {
        sans: 'Inter, sans-serif',
        mono: 'ui-monospace,SFMono-Regular,SF Mono,Menlo,Consolas,monospace',
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

    neutral7: '#131313',
    neutral6: '#1C1C1C',
    neutral5: '#303030',
    neutral4: '#4B4B4B',
    neutral3: '#A1A1A1',
    neutral2: '#D0D0D0',
    neutral1: '#F6F6F6',
    neutral0: '#ffffff',

    brand_main: '#B8AAF2',
    brand_inverted: '#E2DFED',
    brand_bright: '#2E3739',
    brand_faded: '#20292B',
  },
});
