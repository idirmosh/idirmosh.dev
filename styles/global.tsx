import { darkTheme, globalCss } from 'stitches.config';

export const globalStyles = globalCss({
  ':root': {
    MozTabSize: '4',
    tabSize: '4',
  },
  '*,::before,::after': { boxSizing: 'border-box' },
  html: {
    lineHeight: 1.15,
    WebkitTextSizeAdjust: '100%',
    backgroundColor: '$neutral7',
  },
  body: {
    margin: '0',
    fontFamily: '$sans',
    color: '$neutral2',
  },
  hr: { height: '0', color: 'inherit' },
  'abbr[title]': { textDecoration: 'underline dotted' },
  'b,strong': { fontWeight: 'bolder' },
  'code,kbd,samp,pre': {
    fontFamily: '$mono',
  },
  small: { fontSize: '80%' },
  'sub,sup': {
    fontSize: '75%',
    lineHeight: 0,
    position: 'relative',
    verticalAlign: 'baseline',
  },
  sub: { bottom: '-0.25em' },
  sup: { top: '-0.5em' },
  table: {
    display: 'block',
    maxWidth: 'fit-content',
    overflowX: 'auto',
    whiteSpace: 'nowrap',
    textIndent: '0',
    borderColor: 'inherit',
  },
  thead: {
    borderBottom: '1px solid red',
  },
  'button,input,optgroup,select,textarea': {
    fontFamily: 'inherit',
    fontSize: '100%',
    lineHeight: 1.15,
    margin: '0',
  },
  'button,select': { textTransform: 'none' },
  "button,[type='button'],[type='reset'],[type='submit']": {
    WebkitAppearance: 'button',
  },
  '::-moz-focus-inner': { borderStyle: 'none', padding: '0' },
  ':-moz-focusring': { outline: '1px dotted ButtonText' },
  ':-moz-ui-invalid': { boxShadow: 'none' },
  legend: { padding: '0' },
  progress: { verticalAlign: 'baseline' },
  '::-webkit-inner-spin-button,::-webkit-outer-spin-button': {
    height: 'auto',
  },
  "[type='search']": { WebkitAppearance: 'textfield', outlineOffset: '-2px' },
  '::-webkit-search-decoration': { WebkitAppearance: 'none' },
  '::-webkit-file-upload-button': {
    WebkitAppearance: 'button',
    font: 'inherit',
  },
  summary: { display: 'list-item' },

  '@dark': {
    ':root:not(.light)': {
      ...Object.keys(darkTheme.colors).reduce((set, colorKey) => {
        const color = darkTheme.colors[colorKey];
        const colorValue =
          color.value.substring(0, 1) === '$' ? `$colors${color.value}` : color.value;
        return {
          [color.variable]: colorValue,
          ...set,
        };
      }, {}),
    },
  },
});
