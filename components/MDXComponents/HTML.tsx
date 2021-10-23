import { useState } from 'react';
import * as Collapsible from '@radix-ui/react-collapsible';
import Link from 'next/link';
import NextImage from 'next/image';
import { heading, text } from '@styles/typography';

import * as styles from '@components/MDXComponents/styles';
import { css } from '@stitches/react';

export function a({ href = '', ...props }) {
  if (href.startsWith('http')) {
    return (
      <a
        className={styles.link({ css: { color: 'red' } })}
        href={href}
        target="_blank"
        rel="noopener"
        {...props}
      />
    );
  }

  return (
    <Link href={href} passHref>
      <a className={styles.link({})} {...props} />
    </Link>
  );
}
export function p(props) {
  return <p className={text({ type: 'body' })} {...props} />;
}

export function H1(props) {
  return <h1 className={heading({ type: 'h1' })} {...props} />;
}

export function H2(props) {
  return <h2 className={heading({ type: 'h2' })} {...props} />;
}

export function H3(props) {
  return <h3 {...props} className={heading({ type: 'h3' })} />;
}

export function H4(props) {
  return <h4 className={heading({ type: 'h4' })} {...props} />;
}
export function strong(props) {
  return <strong className={styles.text({ type: 'list', weight: 'bold' })} {...props} />;
}

export function hr(props) {
  return <hr className={styles.divider({ size: '1', css: { my: '$5' } })} {...props} />;
}

export function blockquote(props) {
  return <blockquote className={styles.blockquote({})} {...props} />;
}

export function li(props) {
  return <li className={text({ type: 'list' })} {...props} />;
}
export function ol(props) {
  return <ol className={styles.box({})} {...props} />;
}
export function ul(props) {
  return <ul className={styles.box({})} {...props} />;
}

export function iframe({ ...props }) {
  return (
    <div className={styles.box({ mb: '$4' })}>
      <iframe {...props} />
    </div>
  );
}

export function img({ children, ...props }) {
  return ({ children, ...props }) => (
    <div
      className={styles.img({
        css: { borderRadius: '6px' },
        my: '$5',
        mx: '-$3',
        '@bp1': { mx: '-$5' },
      })}
    >
      <NextImage {...(props as any)} />
    </div>
  );
}

export function Image({ children, ...props }) {
  return (
    <figure className={styles.Image()}>
      <NextImage {...(props as any)} />
      {children && <figcaption>{children}</figcaption>}
    </figure>
  );
}
export function Video(props) {
  return <p className={styles.text({ size: '4', css: { mb: '$4', color: '$copy' } })} {...props} />;
}

export function Pre({ children, theme, showLineNumbers, ...props }) {
  return (
    <pre
      className={styles.pre({
        theme,
        showLineNumbers: typeof showLineNumbers === 'string',
      })}
    >
      {children}
    </pre>
  );
}

export function Code({ children, id, collapsible, className }) {
  const isCollapsible = typeof collapsible !== 'undefined';
  const [isOpen, setIsOpen] = useState(!isCollapsible);
  const isInline = typeof children === 'string';
  const content = (
    <code className={`${className} ${isInline ? styles.code() : ''}`} children={children} id={id} />
  );
  return isCollapsible ? (
    <Collapsible.Root defaultOpen={isOpen} onOpenChange={(newOpen) => setIsOpen(newOpen)}>
      <Collapsible.Trigger
        className={styles.button({
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
}
