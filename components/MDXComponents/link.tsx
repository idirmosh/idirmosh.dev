import { css } from 'stitches.config';

export const link = css({
  boxSizing: 'border-box',
  WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
  boxShadow: '0px 1px 0px 0px $colors$brand_main',
  fontWeight: '600',
  color: '$brand_main',
  fontFamily: '$sans',
  textDecoration: 'none',
  transition: 'all 100ms linear 0ms',

  '&:hover': {
    color: '$gray',
    transition: 'all 100ms linear 0ms',
  },

  '&:focus': {
    outline: 'none',
    boxShadow: '0px 0px 0px 2px $colors$brand_main',
    color: '$gray',
  },

  variants: {
    variant: {
      ghost: {
        boxShadow: 'none',
        '&:focus': {
          boxShadow: 'none',
        },
      },
    },
  },
});
