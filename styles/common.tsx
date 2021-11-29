import { MAIN_WIDTH, BLOG_CARD_GAP } from '@lib/constants';
import { css } from 'stitches.config';
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
  maxWidth: `${MAIN_WIDTH}px`,
  margin: '0 auto',
  padding: '0',
  '@mobile': {
    padding: `0 ${BLOG_CARD_GAP}px`,
  },
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
export const meta = css(flex, {
  textTransform: 'uppercase',
  color: '$neutral3',
  margin: '1.8rem 0 0 0',
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

export const hidden = css({
  border: '0',
  clip: 'rect(0 0 0 0)',
  height: '1px',
  width: '1px',
  margin: '-1px',
  padding: '0',
  overflow: 'hidden',
  position: 'absolute',
});

export const linkReset = css({
  textDecoration: 'none',
  color: 'inherit',
});

export const flexRow = css({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
});

export const flexColumn = css({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
});

export const clickableIcon = css({
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
  height: '1.6rem',
  width: '1.6rem',
  borderRadius: '9999px',
  transition: 'all .5s ease 0s',
  boxShadow: '0 0 0 1px $colors$neutral5',
  cursor: 'pointer',
  svg: {
    fill: '$neutral3',
  },
  '&:hover': {
    backgroundColor: '$neutral2',
    boxShadow: '0',
    svg: {
      fill: '$neutral7',
    },
  },
});

export const linedAnchor = css({
  //textDecoration: 'underline',
  'text-underline-position': 'under',
  '&:hover': {
    'text-underline-position': 'unset',
    textDecoration: 'none',
  },
});

export const btn = css({
  backgroundColor: '$neutral1',
  color: '$neutral7',
  borderRadius: '4px',
  padding: '.5rem .8rem',
  lineHeight: '1.7',
  transition: 'all .2s',
  fontWeight: '500',
  margin: '0',
  '&:hover': {
    backgroundColor: 'transparent',
    boxShadow: '0px 0px 0px 1px $colors$neutral2',
    color: '$neutral2',
  },
  '@mobile': {
    display: 'none',
  },
});
