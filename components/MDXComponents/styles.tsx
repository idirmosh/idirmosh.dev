import { css, globalCss } from 'stitches.config';

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  },

  body: {
    color: '$neutral0',
    backgroundColor: '$white',
    fontFamily: '$sans',
  },

  ul: {
    paddingLeft: '16px',
  },

  figure: { margin: 0, borderRadius: '8px' },

  'pre, code': { margin: 0, fontFamily: '$mono' },

  svg: { display: 'inline-block', verticalAlign: 'middle' },

  '::selection': {
    backgroundColor: '$brand_inverted',
    color: '$neutral0',
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

export const box = css({
  boxSizing: 'border-box',
});
export const container = css({
  boxSizing: 'border-box',
  maxWidth: '756px',
  margin: '0 auto',
});

export const code = css({
  backgroundColor: '$brand_faded',
  borderRadius: '3px',
  border: '1px solid $brand_bright',
  color: '$neutral0',
  lineHeight: '24px',
  fontFamily: '$mono',
  fontSize: '15px',
  padding: '0 3px',
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

export const link = css({
  WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',

  fontWeight: '500',
  color: '$brand_main',
  fontFamily: '$sans',
  textDecoration: 'none',
  transition: 'all 100ms linear 0ms',

  '&:hover': {
    transition: 'all 100ms linear 0ms',
    boxShadow: '0px 1px 0px 0px $colors$brand_inverted',
  },

  '&:focus, &:active': {
    outlineWidth: '1px',
    outlineStyle: 'dotted',
    outlineColor: '$neutral1',
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

export const button = css({
  boxSizing: 'border-box',
  appearance: 'none',

  border: '1px solid $black',
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

  '&:hover': {
    bc: '$black',
    color: '$white',
  },

  '&:focus': {
    outline: 'none',
    bc: '$black',
    color: '$white',
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
  $$background: '$colors$brand_faded',
  $$text: '$colors$neutral0',
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
  borderRadius: '6px',
  boxSizing: 'border-box',
  padding: '$3',
  overflow: 'auto',
  fontFamily: '$mono',
  fontSize: '14px',
  lineHeight: '$3',
  whiteSpace: 'pre',
  position: 'relative',
  backgroundColor: '$$background',
  color: '$$text',
  margin: '32px 0',

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
    px: '$4',
    mx: '-20px',
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
    borderRadius: '$1',

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
    theme: {
      orange: {
        $$background: 'rgb(255 135 31 / 10%)',
        $$syntax1: '$colors$pink',
        $$syntax2: '$colors$turq',
        $$syntax3: '$colors$orange',
        $$syntax4: '$colors$orange',
      },
      pink: {
        $$background: 'hsl(345deg 66% 73% / 20%)',
        $$syntax1: '$colors$orange',
        $$syntax2: '$colors$turq',
        $$syntax3: '$colors$pink',
        $$syntax4: '$colors$pink',
      },
      turq: {
        $$background: 'rgba(0, 245, 196, 0.15)',
        $$syntax1: '$colors$orange',
        $$syntax2: '$colors$pink',
        $$syntax3: '$colors$turq',
        $$syntax4: '$colors$turq',
      },
    },
  },
});

export const img = css({
  display: 'block',
  margin: '32px 0',
  img: {
    display: 'block',
    maxWidth: '100%',
    height: 'auto',
    borderRadius: '6px',
  },
});

export const Image = css({
  display: 'block',
  margin: '32px 0',
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

export const text = css({
  margin: '0',
  padding: '0',
  color: '$neutral0',
  fontFamily: '$sans',
  marginBottom: '24px',

  variants: {
    type: {
      body: {
        fontSize: '18px',
        lineHeight: '29.7px',
        letterSpacing: '-0.25px',
      },
      code: {
        fontSize: '16.2px',
        lineHeight: '24px',
        letterSpacing: '-0.1px',
      },
      list: {
        fontSize: '16px',
        lineHeight: '26px',
      },
    },
    weight: {
      bold: {
        fontStyle: 'normal',
        fontWeight: '600',
      },
      regular: {
        fontStyle: 'normal',
        fontWeight: '400',
      },
    },
  },

  defaultVariants: {
    type: 'body',
    weight: 'regular',
  },
});

export const heading = css({
  //padding: '0',
  border: '0',
  color: '$neutral0',
  fontFamily: '$sans',
  verticalAlign: 'baseline',
  padding: '32px 0 24px 0',

  variants: {
    type: {
      h1: {
        fontSize: '36px',
        lineHeight: '43.3px',
        letterSpacing: '-0.8px',
      },
      h2: {
        fontSize: '30px',
        lineHeight: '37.5px',
        letterSpacing: '-0.3px',
      },
      h3: {
        fontSize: '20px',
        lineHeight: '25px',
        letterSpacing: '-0.48px',
      },
      h4: {
        fontSize: '18px',
        lineHeight: '22.5px',
        letterSpacing: '-0.48px',
      },
      h5: {
        fontSize: '16px',
        lineHeight: '20px',
        letterSpacing: '-0.16px',
      },
      h6: {
        fontSize: '14px',
        lineHeight: '17.5px',
        letterSpacing: '-0.16px',
      },
    },

    weight: {
      bold: {
        fontStyle: 'normal',
        fontWeight: '600',
      },
      regular: {
        fontStyle: 'normal',
        fontWeight: '400',
      },
      semibold: {
        fontStyle: 'normal',
        fontWeight: '500',
      },
    },
  },

  defaultVariants: {
    type: 'h3',
    weight: 'bold',
  },
});
