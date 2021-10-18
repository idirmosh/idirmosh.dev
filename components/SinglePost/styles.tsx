import { css } from '@stitches/react';

export const container = css({
  display: 'flex',
  alignItems: 'center',
  fontFamily: '$sans',

  margin: '23px 0',
});

export const avatar = css({
  width: '42px',
  height: '42px',
});

export const img = css({
  borderRadius: '9999px',
  display: 'block',
  height: 'auto',
  width: '100%',
});

export const author = css({
  display: 'flex',
  fontSize: '20px',
  lineHeight: '25px',
  fontWeight: 'Bold',
});

export const svg = css({
  fill: '$brand_main',
  width: '20px',
  cursor: 'pointer',
  display: 'inline-block',
  verticalAlign: 'bottom',
  marginRight: '8px',
  '&:last-of-type': {
    margin: '0',
  },
});

export const meta = css({
  display: 'flex',
  alignSelf: 'flex-start',
  color: '$neutral2',
  fontSize: '14px',
  lineHeight: '21px',
});

export const views = css({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'end',
  marginLeft: 'auto',
});

export const divider = css({
  '&:after': {
    content: '•',
    margin: '0 4px',
  },
});
