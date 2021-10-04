import { pre } from '../pre';

export default function preElm({ children, theme, showLineNumbers, ...props }) {
  return (
    <pre
      className={pre({
        theme,
        showLineNumbers: typeof showLineNumbers === 'string',
        css: {
          mx: '-$4',
          mt: '$3',
          mb: '$5',

          '[data-preview] + &': {
            marginTop: '0',
            borderTopLeftRadius: 0,
            borderTopRightRadius: 0,
          },

          '@bp1': {
            mx: 0,
            borderRadius: '$3',
          },
        },
      })}
    >
      {children}
    </pre>
  );
}
