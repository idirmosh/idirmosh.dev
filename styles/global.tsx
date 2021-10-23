import { globalCss } from 'stitches.config';

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  },

  html: {
    '-ms-text-size-adjust': '100%',
    '-webkit-text-size-adjust': '100%',
    fontFamily: '$sans',
    fontSize: '106.25%',
  },

  body: {
    fontFamily: '$sans',
    fontSize: '17px',
    lineHeight: '1.47',
    fontWeight: '400',
    letterSpacing: '-0.022em',
    fontStyle: 'normal',
    color: '$neutral0',
    backgroundColor: '$white',
  },

  'ul,ol,li,dl,dt,dd,h1,h2,h3,h4,h5,h6,hgroup,p,blockquote,figure,form,fieldset,input,pre,abbr,button':
    {
      margin: 0,
      padding: 0,
    },
  'li > p': {
    fontSize: '1rem !important',
    marginBottom: '1em !important',
  },
  'ul, ol': {
    marginLeft: '1.17647em',
  },

  figure: { margin: 0, borderRadius: '8px' },

  'pre, code': { margin: 0, fontFamily: '$mono' },

  svg: { display: 'inline-block', verticalAlign: 'middle' },

  '::selection': {
    backgroundColor: '$brand_inverted',
    color: '$neutral0',
  },
});
