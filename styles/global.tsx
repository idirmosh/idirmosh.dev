import { darkTheme, globalCss } from 'stitches.config';

export const globalStyles = globalCss({
  '@font-face': {
    fontFamily: 'Inter',
    fontDisplay: 'swap',
    src: 'url("/fonts/Inter.woff2") format("truetype-variations")',
    fontWeight: '1 999',
  },
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
  //mobile menu
  '.menu-entering': {
    opacity: '0',
    transform: 'translateX(-320px)',
    transition: 'all 300ms ease-in',
  },
  '.menu-entered': {
    opacity: '1',
    transform: 'translateX(0)',
    transition: 'all 300ms ease-in',
  },

  '.menu-exiting': {
    opacity: '0',
    transform: 'translateX(-320px)',
    transition: 'all 300ms ease-in',
  },
  '.menu-exited': {
    opacity: '0',
    transform: 'translateX(-320px)',
    transition: 'all 300ms ease-in',
  },

  '.rehype-code-title': {
    display: 'flex',
    alignItems: 'center',
    padding: '$3',
    fontFamily: '$mono',
    fontSize: '.8rem',
    fontWeight: '700',
    color: '$neutral1',
    borderRadius: '4px 4px 0 0',
    // border: '1px solid $neutral5',
    // borderBottom: '1px solid $neutral5',
    background: '$code_gray',
    '&:before': {
      marginRight: '$2',
      lineHeight: '1',
    },
    '&[data-lang]': {
      '&:before': {
        content:
          'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAARCAYAAAACCvahAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACtSURBVHgB7ZIxCsIwFIb/lxbpERy9Qb1BvYHnMJMILqKIOIlLNx31KL1Bj9Aj1EU6mDyDdvPVBAUnP0iGwPe9BEJw6OliyFGcogvF1WG/LV6On7saE9tB5zI8msxXmSy/Q6kShFoKeGV7M5eric5SwD/Zcco3tRQIkqWA1ut+7JOUokzPlu1VDcDtc3pNEjxZDOML/vLPZQIafMDjh1lwQaDUVZIQiS2Vx3xX3QEcMU4BqGbO7wAAAABJRU5ErkJggg==)',
      },
    },
    '&[data-lang="js"]': {
      '&:before': {
        content:
          'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAARCAYAAAA7bUf6AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEXSURBVHgB7VQtaIJhEH72TZz4wxhDtraFrbiwLSwtaBSLQYvFLmITbAajmDXbtapNBE0aNGhRQYMgiPj/L+K9LyiKP3zIZ/PKvdxxd889D/cCEthdt2xOkjfgQrvHyiBAArs1uVIT2blkIjVEtb6A0/6EZmuJaHyASm2Oj3c5j4lCUijNkMmO+Tsc6fG3Rilwz3KikOwaQ/CilcHn1h7kRHNi1Ktp+hQ2VwOReH8vJxqJxaTBt+6B8xIMd1CtLeBxPJ9uUqkTeW/yvVieULzSOptChuokEqaIP9TG/58S+eIUn6TEcLSCN9CCSiXgR6dAmoj9/VJsa45ecTTWRyY34ZPt1kfuNxKPqCEjmK2nJqXYFUvyFawBTd5oMZMgm+kAAAAASUVORK5CYII=")',
      },
    },
    '&[data-lang="ts"]': {
      '&:before': {
        content:
          'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAARCAYAAAA7bUf6AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAE6SURBVHgB7ZQ/S8NAGMafs4eNaKwVHVJwsIuIIGJ0E1QcpV/AvTi5OOjaWfwEump1cDJ2VpFubbYOBbFORlSspkpbSInv3aBEEvqHdusDR557yf143jvu2ML+3RoYX0Wncp1bLgAMbgodymU8NYAuqA/pEYT/LyT0ScTGwp7apfkKdSiE9dlxOc+XbOQe7OAkqhKCFg1ja0WDHo9IP6MN4zg5J30squCIvB4fDU6Szj7L7zIBjPwLDEohIKrCcUVeJMiVPlGpOcEQPxWtb5xmLZlALL4uvHvaaQkiUqQJckZDtLG9MYWvagOHmUf47omfEvoEznfm4ZK/KZTxVK7T/gy2l8Qw37A0HUFmb1HOBSR5cd8csnlg/vpK1cHuSVG2NUKnZ33UPf9y8R6I64wWZNcacgDsr0jrfwCWH2lBLG64JgAAAABJRU5ErkJggg==")',
      },
    },
    '&[data-lang="tsx"]': {
      '&:before': {
        content:
          'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAARCAYAAAA/mJfHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJwSURBVHgBhVNRbtpAEJ23XkfNV9wTlFRNpHxBTgA5QeEEGE4AJyA5QdMDtHZOAJwgcILQr0iFKu4JoFJUVXi901nHRhSIOj/2zs7MvnlvBnTAuvN1j0BVJjWJPui70h8+cUA2bSum2u6dM+wWChemSZbrnta3mUmvALRZmw6RF8AgYsWxB3+UZaYn4eP4zJ+UuXoPFnMVoNGX9/gppzh85AmYhvLsio1pxRfHSfHoVGLr8rsppuh/9uaVf+bVbug+MiVBrCrCzzdK0wqMiZjtmDwskeph+H3dId9PhLsqrJq9Wiycpw3FqLGlBpFpQqHBlkeksczBEGZCwb20K1/UQDyRnF8lb7kAgqJAQC54ROCYPf9KkA3i86OOoKmRn63i0+OkM0/vnSAwOpLUa2aESlmyXnaTF5OAB2buSOKsQDiQoj1OzSV5XkNQRDkyi5ZkzeCbB8HRK0cjfFrXlMHgRQAW2YpChU3JUpIrp1R94wXX4wskRc5GgPj0aCYlApRIpCq+nvnX7txdmMjaPPmOjE5Im6F7kDLTckgJ+CjnJD73+26QkRlpl5aboRVeQjeg4nCvNFjrlvA45Gd9FV9iVXAb5D7mPgiRUDERzppM9lY6+7y/AfM/PbDXZuRtBEXAqmgtYOSyJbBUYeLYFTk4Gi/mnUhwT+SeFhR8EsQzsH1rCe/E3y87kc/JduaBYjum9Q3lrSEQji43fuRC1LdD99fJbQAh2BxNGrr23G52Fqa9VSzYXal9ZGt/7NQLf6wrsGhaGeQSkWu5O0+bVsnyWw45y1rbqXsC5EmPshEqq/Nvb1wq+c+dzqr87E137/4CVOlMo1YuQ4sAAAAASUVORK5CYII=")',
      },
    },
    '&[data-lang="jsx"]': {
      '&:before': {
        content:
          'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAARCAYAAAA/mJfHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJwSURBVHgBhVNRbtpAEJ23XkfNV9wTlFRNpHxBTgA5QeEEGE4AJyA5QdMDtHZOAJwgcILQr0iFKu4JoFJUVXi901nHRhSIOj/2zs7MvnlvBnTAuvN1j0BVJjWJPui70h8+cUA2bSum2u6dM+wWChemSZbrnta3mUmvALRZmw6RF8AgYsWxB3+UZaYn4eP4zJ+UuXoPFnMVoNGX9/gppzh85AmYhvLsio1pxRfHSfHoVGLr8rsppuh/9uaVf+bVbug+MiVBrCrCzzdK0wqMiZjtmDwskeph+H3dId9PhLsqrJq9Wiycpw3FqLGlBpFpQqHBlkeksczBEGZCwb20K1/UQDyRnF8lb7kAgqJAQC54ROCYPf9KkA3i86OOoKmRn63i0+OkM0/vnSAwOpLUa2aESlmyXnaTF5OAB2buSOKsQDiQoj1OzSV5XkNQRDkyi5ZkzeCbB8HRK0cjfFrXlMHgRQAW2YpChU3JUpIrp1R94wXX4wskRc5GgPj0aCYlApRIpCq+nvnX7txdmMjaPPmOjE5Im6F7kDLTckgJ+CjnJD73+26QkRlpl5aboRVeQjeg4nCvNFjrlvA45Gd9FV9iVXAb5D7mPgiRUDERzppM9lY6+7y/AfM/PbDXZuRtBEXAqmgtYOSyJbBUYeLYFTk4Gi/mnUhwT+SeFhR8EsQzsH1rCe/E3y87kc/JduaBYjum9Q3lrSEQji43fuRC1LdD99fJbQAh2BxNGrr23G52Fqa9VSzYXal9ZGt/7NQLf6wrsGhaGeQSkWu5O0+bVsnyWw45y1rbqXsC5EmPshEqq/Nvb1wq+c+dzqr87E137/4CVOlMo1YuQ4sAAAAASUVORK5CYII=")',
      },
    },
  },

  '.code-line': {
    padding: '$1 $3',
    display: 'block',
    marginLeft: '-16px',
    marginRight: '-16px',
    borderLeftWidth: '4px',
    borderLeftColor: 'rgba(31, 41, 55, 0)',
  },

  '.code-line.inserted': {
    'background-color': 'rgba(16, 185, 129, 0.2)',
  },

  '.code-line.deleted': {
    'background-color': 'rgba(239, 68, 68, 0.2)',
  },

  '.highlight-line': {
    margin: '0 -16px',
    paddingLeft: '12px',
    backgroundColor: '$code_highlight',
    borderLeft: '4px solid $code_gray !important',
  },
  '.line-number::after': {
    content: ' ',
    position: 'absolute',
    left: '0',
    top: '0',
    width: '100%',
    opacity: '0.15',
    pointerEvents: 'none',
  },

  '.line-number::before': {
    display: 'inline-block',
    width: '1rem',
    'text-align': 'right',
    'margin-right': '16px',
    'margin-left': '-8px',
    color: '$gray',
    content: 'attr(line)',
  },
});
