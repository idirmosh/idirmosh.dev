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
});
