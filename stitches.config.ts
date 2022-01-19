import { createStitches } from '@stitches/react';
export const { styled, css, globalCss, keyframes, getCssText, theme, createTheme, config } =
  createStitches({
    theme: {
      colors: {
        black: '#1a1a1a',
        white: '#fff',
        gray: '#6A737D',
        blue: '#005CC5',
        red: '#D73A49',
        yellow: '#E3D000',
        purple: '#6F42C1',
        turq: '#22863A',
        orange: '#D68E22',
        copy: '#D7D7DB',

        code_background: 'rgba(255,255,255,100%)',
        code_highlight: 'rgba(246,248,250,100%)',
        code_gray: 'rgba(232,234,237,100%)',

        neutral0: '#3f3f46',
        neutral1: '#52525b',
        neutral2: '#71717a',
        neutral3: '#a1a1aa',
        neutral4: '#d4d4d8',
        neutral5: '#e4e4e7',
        neutral6: '#fafafa',
        neutral7: '#ffffff',

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

    code_background: 'rgba(255,255,255,2%)',
    code_highlight: 'rgba(246,248,250,3%)',
    code_gray: 'rgba(232,234,237,10%)',

    neutral7: '#18181b',
    neutral6: '#26262c',
    neutral5: '#3b3b44',
    neutral4: '#53535f',
    neutral3: '#848494',
    neutral2: '#adadb8',
    neutral1: '#d3d3d9',
    neutral0: '#efeff1',

    brand_main: '#B8AAF2',
    brand_inverted: '#E2DFED',
    brand_bright: '#2E3739',
    brand_faded: '#20292B',
  },
});
