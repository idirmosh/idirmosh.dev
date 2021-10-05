import { css } from 'stitches.config';

export const text = css({
  boxSizing: 'border-box',
  fontFamily: '$sans',
  lineHeight: 'inherit',
  margin: 0,

  variants: {
    type: {
      h1: {
        fontSize: '36px',
        lineHeight: '43.3px',
        letterSpacing: '-0.8px',
        borderBottom: '1px solid $neutral5',
        paddingBottom: '8px',
      },
      h2: {
        fontSize: '30px',
        lineHeight: '37.5px',
        letterSpacing: '-0.3px',
        borderBottom: '1px solid $neutral5',
        paddingBottom: '8px',
      },
      h3: {
        fontSize: '20px',
        lineHeight: '25px',
        letterSpacing: '-0.48px',
        borderBottom: '1px solid $neutral5',
        paddingBottom: '8px',
      },
      h4: {
        fontSize: '18px',
        lineHeight: '22.5px',
        letterSpacing: '-0.48px',
        borderBottom: '1px solid $neutral5',
        paddingBottom: '8px',
      },
      h5: {
        fontSize: '16px',
        lineHeight: '20px',
        letterSpacing: '-0.16px',
        borderBottom: '1px solid $neutral5',
        paddingBottom: '8px',
      },
      h6: {
        fontSize: '14px',
        lineHeight: '17.5px',
        letterSpacing: '-0.16px',
        borderBottom: '1px solid $neutral5',
        paddingBottom: '8px',
      },
      body: {
        fontSize: '18px',
        lineHeight: '29.7px',
        letterSpacing: '-0.1px',
      },
      code: {
        fontSize: '16.2px',
        lineHeight: '24px',
        letterSpacing: '-0.1px',
      },
      list: {
        fontSize: '14px',
        lineHeight: '21px',
      },
    },

    weight: {
      bold: {
        fontStyle: 'normal',
        fontWeight: '600',
      },
      regular: {
        fontStyle: 'normal',
        fontWeight: '400',
      },
      semibold: {
        fontStyle: 'normal',
        fontWeight: '500',
      },
    },
  },

  defaultVariants: {
    type: 'body',
    weight: 'medium',
  },
});
