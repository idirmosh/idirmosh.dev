import { css } from 'stitches.config';
import { text } from './typography';
export const box = css({});
export const line = css({
  marginTop: '60px', // remove after

  marginBottom: '3em',
  display: 'block',
  width: '100%',
  height: '1px',
  backgroundColor: '$neutral4',
  borderRadius: '2px',
});

export const flex = css({
  display: 'flex',
  alignItems: 'center',

  variants: {
    type: {
      split: {
        justifyContent: 'space-between',
      },
    },
  },
});
export const wrapper = css({
  maxWidth: '653px',
});
export const views = css({
  color: '$brand_main',
  fontWeight: '500',
  letterSpacing: '-0.5px',
});
export const anchor = css({
  textDecoration: 'none',
  color: 'inherit',

  'h1,p': {
    transition: 'all 0.5s ease',
    'text-decoration-color': '$brand_inverted',
    '&:hover': {
      textDecoration: 'underline solid $colors$brand_inverted 2px',
    },
  },
});
export const entry = css(flex, {
  time: {
    '&:after': {
      content: '•',
      fontSize: '0.6rem',
      verticalAlign: 'middle',
      color: '$neutral3',
      margin: '0px 6px',
    },
  },
});
