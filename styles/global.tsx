import { globalCss } from 'stitches.config';

export const globalStyles = globalCss({
  '.menu-close, .menu-open': {
    transition: 'all .2s cubic-bezier(0.4, 0.01, 0.165, 0.99)',
    transform: 'rotate(0deg) scale(1)',
  },
  '.menu-close': {
    transform: 'rotate(0deg) scale(0.5)',
  },
  '.menu-close.enter-active': {
    transform: 'rotate(180deg) scale(1.2)',
  },
  '.menu-close.enter-done': {
    transform: 'rotate(0deg) scale(1)',
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
    //  fontSize: '112.5%',
  },

  body: {
    fontFamily: 'sans-serif',
    fontSize: '1em',
    lineHeight: '1.5',
    fontWeight: '400',
    color: '$neutral2',
    backgroundColor: '$neutral7',
    position: 'relative',
  },
  'p, ul, ol': {
    margin: '0',
    padding: '0',
    marginBottom: '1em',
    lineHeight: '1.5',
    fontSize: '1rem',
  },
  'ul, ol': {
    listStyle: 'none',
  },
  'article ul': {
    paddingLeft: '2.1875em',
    'list-style-type': 'square',
    marginTop: '0.3125em',
    li: {
      paddingLeft: '5px',
    },
  },
  'article li': {
    marginBottom: '7px',
  },
  'a, button, [role="button"], input, label, select, textarea': {
    'touch-action': 'manipulation',
  },
  figure: { margin: 0, borderRadius: '8px' },

  'pre, code, kbd': {
    fontFamily: '$mono',
    'font-variant-ligatures': 'none',
    whiteSpace: 'pre-wrap',
    margin: '0',
    overflowX: 'auto',
    textAlign: 'left',
  },

  svg: { display: 'inline-block', verticalAlign: 'middle' },

  '::selection': {
    backgroundColor: '$brand_inverted',
    color: '$neutral0',
  },
});
