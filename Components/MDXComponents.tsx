import { useState } from 'react';
import * as Collapsible from '@radix-ui/react-collapsible';

import Link from 'Components/Common/Link';
import { heading, text } from '@styles/typography';
import NextImage from 'next/image';
import {
  blockquote,
  box,
  button,
  divider,
  Image,
  img,
  pre,
  ulist,
  linkReset,
  hashH,
} from '@styles/common';

export const components = {
  Box: ({ css, as: Comp = 'div', ...props }: any) => <Comp className={box(css)} {...props} />,
  h1: (props) => <h1 className={heading({ type: 'h1' })} {...props} />,
  h2: (props) => <h2 className={heading({ type: 'h2' })} {...props} />,
  h3: (props) => <h3 className={heading({ type: 'h3' })} {...props} />,
  h4: (props) => <h4 className={heading({ type: 'h4' })} {...props} />,
  h5: (props) => <h5 className={heading({ type: 'h5' })} {...props} />,
  p: (props) => <p className={text()} {...props} />,
  a: ({ href = '', ...props }) => {
    if (props.isHeading) {
      return (
        <a href={href} className={linkReset(hashH())}>
          {props.children}
        </a>
      );
    }

    if (href.startsWith('http')) {
      return (
        <Link
          className={text({ type: 'external-link' })}
          href={href}
          target="_blank"
          rel="noopener"
          {...props}
        >
          {props.children}
        </Link>
      );
    }

    return (
      <Link href={href} className={text({ type: 'link' })}>
        {props.children}
      </Link>
    );
  },
  hr: (props) => <hr className={divider({ size: '1', css: { my: '$5' } })} {...props} />,
  ul: (props) => <ul className={ulist()} {...props} />,
  ol: (props) => <ol className={ulist()} {...props} />,
  li: (props) => <li className={text({ css: { marginBottom: '$4' } })} {...props} />,
  strong: (props) => <strong className={text({ css: { fontWeight: '700' } })} {...props} />,
  Image: ({ children, ...props }) => (
    <figure className={Image()}>
      <NextImage {...(props as any)} />
      {children && <figcaption>{children}</figcaption>}
    </figure>
  ),
  img: ({ children, ...props }) => {
    return ({ children, ...props }) => (
      <div
        className={img({
          css: { borderRadius: '6px' },
          my: '$5',
          mx: '-$3',
          '@bp1': { mx: '-$5' },
        })}
      >
        <NextImage {...(props as any)} />
      </div>
    );
  },
  Video: (props) => (
    <p className={text({ size: '4', css: { mb: '$4', color: '$copy' } })} {...props} />
  ),
  iframe: (props) => (
    <div className={box({ mb: '$4' })}>
      <iframe {...props} />
    </div>
  ),
  blockquote: (props) => <blockquote className={blockquote({})} {...props} />,
  pre: ({ children, theme, showLineNumbers, ...props }) => {
    // console.log(children, theme, showLineNumbers, props);
    return <pre className={pre()}>{children}</pre>;
  },
  code: ({ children, id, collapsible, className }) => {
    const isCollapsible = typeof collapsible !== 'undefined';
    const [isOpen, setIsOpen] = useState(!isCollapsible);
    const isInline = typeof children === 'string';
    const content = (
      <code
        className={`${className} ${isInline ? text({ type: 'code' }) : ''}`}
        children={children}
        id={id}
      />
    );
    return isCollapsible ? (
      <Collapsible.Root defaultOpen={isOpen} onOpenChange={(newOpen) => setIsOpen(newOpen)}>
        <Collapsible.Trigger
          className={button({
            css: {
              display: 'block',
              ml: 'auto',
              color: '$white',
              borderRadius: '$2',
              fontSize: '$2',
              borderColor: '$gray',
              fontFamily: '$mono',
              '&:hover': { borderColor: '$white' },
            },
          })}
        >
          {isOpen ? 'Hide' : 'Show'} code
        </Collapsible.Trigger>
        <Collapsible.Content>{content}</Collapsible.Content>
      </Collapsible.Root>
    ) : (
      content
    );
  },
};
