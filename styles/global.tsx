import { globalCss } from 'stitches.config';

export const globalStyles = globalCss({
  '.menu-close, .menu-open': {
    transition: 'all 0.1s cubic-bezier(0.4, 0.01, 0.165, 0.99)',
    transform: 'rotate(0deg) scale(1)',
  },
  '.menu-close.enter-active': {
    transform: 'rotate(90deg) scale(1.2)',
  },
  '.menu-close.enter-done': {
    transform: 'rotate(0deg)',
  },

  '.menu-open.enter-active': {
    //hamburger animation laters
  },
  '.menu-open.enter-done': {
    //hamburger animation laters
  },

  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  },

  html: {
    '-ms-text-size-adjust': '100%',
    '-webkit-text-size-adjust': '100%',
    fontFamily: '$sans',
    fontSize: '112.5%',
  },

  body: {
    fontFamily: '$sans',
    lineHeight: '1.75',
    fontWeight: '400',
    fontStyle: 'normal',
    color: '$neutral0',
    backgroundColor: '$white',
    position: 'relative',
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
