import { MAIN_WIDTH, BLOG_WIDTH, BLOG_CARD_GAP } from '@lib/constants';
import { css, styled } from 'stitches.config';
export const box = css({
  boxSizing: 'border-box',
});
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
export const ulist = css({
  paddingLeft: '$3',
  marginBottom: '$4',
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
  color: '$neutral3',
  'time, span': {
    margin: '0',
  },
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

export const linedAnchor = css({
  //textDecoration: 'underline',
  'text-underline-position': 'under',
  '&:hover': {
    'text-underline-position': 'unset',
    textDecoration: 'none',
  },
});

export const btn = css({
  gridColumn: '10/12',
  alignSelf: 'center',

  display: 'none',
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
  // '@desktop': {
  //   gridColumn: '11/12',
  // },
  '@mobile': {
    display: 'block',
  },
});

export const divider = css({
  border: 0,
  margin: 0,
  bc: '$gray',
  height: 1,

  variants: {
    size: {
      1: { maxWidth: '32px' },
      2: { maxWidth: '64px' },
      3: { maxWidth: '128px' },
    },
  },
});

export const container = css({
  boxSizing: 'border-box',
  maxWidth: '756px',
  margin: '0 auto',
});

export const code = css({
  backgroundColor: '$brand_faded',
  borderRadius: '$4',
  border: '1px solid $brand_bright',
  color: '$neutral0',
  lineHeight: '1.6',
  fontFamily: '$mono',
  fontSize: '1rem',
  padding: '0 $1',
});

export const badge = css({
  boxSizing: 'border-box',
  border: 'none',
  borderRadius: '$round',

  fontFamily: '$mono',
  fontSize: '$1',
  lineHeight: 1,
  fontWeight: '500',
  height: '$3',
  px: '$2',
  display: 'inline-flex',
  alignItems: 'center',

  variants: {
    variant: {
      gray: {
        backgroundColor: '$gray',
        color: '$white',
      },
      white: {
        bc: '$white',
        color: '$black',
      },
    },
  },
  defaultVariants: {
    variant: 'gray',
  },
});

export const button = css({
  fontSize: '$3',
  fontFamily: '$sans',
  lineHeight: 1,
  margin: '0',
  border: '0',
  backgroundColor: '$brand_main',
  color: '$neutral6',
  padding: '$3 $4',
  borderRadius: '999px',
  cursor: 'pointer',
  marginTop: '1.6rem',
  fontWeight: '700',
  boxSizing: 'border-box',
  appearance: 'none',
  transition: 'all 0.15s ease-in 0s',
  WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
  '&:hover': {
    backgroundColor: '$brand_bright',
    color: '$brand_main',
  },

  '&:focus': {
    outline: 'none',
    backgroundColor: '$brand_bright',
    color: '$brand_main',
  },
});

export const input = css({
  boxSizing: 'border-box',
  appearance: 'none',
  border: '1px solid $gray',
  WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
  margin: 0,
  py: '0',
  px: '$2',
  height: '$4',
  backgroundColor: 'transparent',
  color: '$black',
  fontFamily: '$sans',
  fontSize: '$3',
  lineHeight: 1,
  width: '100%',

  '&:focus': {
    outline: 'none',
    borderColor: '$black',
  },
});

export const pre = css({
  $$background: '$colors$neutral6',
  $$text: '$colors$neutral3',
  $$syntax1: '$colors$orange',
  $$syntax2: '$colors$turq',
  $$syntax3: '$colors$pink',
  $$syntax4: '$colors$pink',
  $$comment: '$colors$gray',
  $$removed: '$colors$pink',
  $$added: '$colors$turq',
  $$lineNumbers: '$colors$gray',
  $$fadedLines: '$colors$gray',
  $$highlightedWordBg: 'hsl(345deg 66% 73% / 30%)',
  $$highlightedWordBgActive: 'hsl(345deg 66% 73% / 100%)',
  $$highlightedWordText: '$colors$white',
  $$deletedWordBg: '$colors$red',
  $$deletedWordBgActive: 'hsl(206deg 22% 64% / 30%)',
  $$deletedWordText: '$colors$black',
  $$addedWordBg: 'rgba(0, 245, 196, 0.1)',
  $$addedWordBgActive: 'hsl(206deg 22% 64% / 30%)',
  $$addedWordText: '$colors$turq',

  border: '1px solid $brand_bright',
  borderRadius: '4px',
  boxSizing: 'border-box',
  padding: '$3',
  overflow: 'auto',
  fontFamily: '$mono',
  fontSize: '.89rem',
  lineHeight: '1.6',
  whiteSpace: 'pre',
  position: 'relative',
  backgroundColor: '$$background',
  color: '$$text',
  margin: '$4 0',

  '[data-preview] + &': {
    marginTop: '0',
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
  },
  '& > code': {
    display: 'block',
  },

  '.language-diff': {
    color: '$$comment',
  },

  '.token.parameter': {
    color: '$$text',
  },

  '.token.tag, .token.class-name, .token.selector, .token.selector .class, .token.function': {
    color: '$$syntax1',
  },

  '.token.attr-value, .token.class, .token.string, .token.number, .token.unit, .token.color': {
    color: '$$syntax2',
  },

  '.token.attr-name, .token.keyword, .token.rule, .token.operator, .token.pseudo-class, .token.important':
    {
      color: '$$syntax3',
    },

  '.token.punctuation, .token.module, .token.property': {
    color: '$$syntax4',
  },

  '.token.comment': {
    color: '$$comment',
  },

  '.token.atapply .token:not(.rule):not(.important)': {
    color: 'inherit',
  },

  '.language-shell .token:not(.comment)': {
    color: 'inherit',
  },

  '.language-css .token.function': {
    color: 'inherit',
  },

  '.token.deleted:not(.prefix), .token.inserted:not(.prefix)': {
    display: 'block',
    padding: '0 $4',
    margin: '0 -20px',
  },

  '.token.deleted:not(.prefix)': {
    color: '$$removed',
  },

  '.token.inserted:not(.prefix)': {
    color: '$$added',
  },

  '.token.deleted.prefix, .token.inserted.prefix': {
    userSelect: 'none',
    position: 'absolute',
    left: '$3',
  },

  // Styles for highlighted word
  '.highlight-word': {
    $$bgAndShadow: '$$highlightedWordBg',
    $$xOffset: '1px',
    textDecoration: 'none',
    color: '$$highlightedWordText',
    backgroundColor: '$$bgAndShadow',
    display: 'inline-block',
    boxShadow: '$$xOffset 0 0 0 $$bgAndShadow, -$$xOffset 0 0 0 $$bgAndShadow',
    borderRadius: '4px',

    // reset the color for tokens inside highlighted words
    '.token': {
      color: 'inherit',
    },

    '&:is(a):hover, &.on': {
      $$bgAndShadow: '$$highlightedWordBgActive' as any,
      transition: 'all 100ms ease',
    },
  },

  '.token.deleted .highlight-word': {
    $$bgAndShadow: '$$deletedWordBg',
    color: '$$deletedWordText',

    '&.on': {
      $$bgAndShadow: '$$deletedWordBgActive' as any,
    },
  },

  '.token.inserted .highlight-word': {
    $$bgAndShadow: '$$addedWordBg',
    color: '$$addedWordText',

    '&.on': {
      $$bgAndShadow: '$$addedWordBgActive' as any,
    },
  },

  // Styles for highlighted lines
  '.highlight-line': {
    '&, *': {
      transition: 'color 150ms ease',
    },
    '&[data-highlighted=false]': {
      '&, *': {
        color: '$$fadedLines',
      },
    },
  },

  variants: {
    showLineNumbers: {
      true: {
        '.highlight-line': {
          position: 'relative',
          paddingLeft: '$4',

          '&::before': {
            content: 'attr(data-line)',
            position: 'absolute',
            left: -5,
            top: 0,
            color: '$$lineNumbers',
          },
        },
      },
    },
  },
});

export const img = css({
  display: 'block',
  margin: '$4 0',
  img: {
    display: 'block',
    maxWidth: '100%',
    height: 'auto',
    borderRadius: '6px',
  },
});

export const Image = css({
  display: 'block',
  margin: '$4 0',
  img: {
    display: 'block',
    maxWidth: '100%',
    height: 'auto',
    borderRadius: '6px',
  },
  figcaption: {
    textAlign: 'center',
    fontSize: '$1',
    lineHeight: 1,
    fontFamily: '$mono',
    color: '$gray',
  },
});

export const blockquote = css({
  margin: '16px 0',

  borderLeft: '2px solid $gray',

  p: {
    color: '$gray',
    fontSize: '16px',
    fontStyle: 'italic',
    paddingLeft: '16px',
  },
});

export const blogWrapper = css({
  maxWidth: `${BLOG_WIDTH}px`,
  margin: '$6 auto',
  padding: '0 $3',
});
export const wrapper = css({
  maxWidth: `${MAIN_WIDTH}px`,
  margin: '$4 auto',
  padding: '0 $3',
});

export const Grid = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(12,minmax(0,1fr))',
  gridTemplateRows: 'auto auto',
  gridGap: '0px',
  '@tablet': {
    gridGap: '2rem',
  },
});
