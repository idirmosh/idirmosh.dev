import React from 'react';
import rangeParser from 'parse-numeric-range';
import * as html from '@components/MDXComponents/HTML';
import { code, box, text } from '@components/MDXComponents/styles';
import Link from 'next/link';

import * as styles from '@components/MDXComponents/styles';
const CustomLink = (props) => {
  const href = props.href;
  const isInternalLink = href && (href.startsWith('/') || href.startsWith('#'));

  if (isInternalLink) {
    return (
      <Link href={href}>
        <a className={styles.link()} {...props}>
          {props.children}
        </a>
      </Link>
    );
  }

  return <a target="_blank" rel="noopener noreferrer" className={styles.link()} {...props} />;
};

export const components = {
  Box: ({ css, as: Comp = 'div', ...props }: any) => <Comp className={box(css)} {...props} />,
  h1: html.H1,
  h2: html.H2,
  h3: html.H3,
  h4: html.H4,
  p: html.p,
  a: CustomLink,
  hr: html.hr,
  ul: html.ul,
  ol: html.ol,
  li: html.li,
  strong: html.strong,
  Image: html.Image,
  img: html.img,
  Video: html.Video,
  iframe: html.iframe,
  blockquote: html.blockquote,
  pre: html.Pre,
  code: html.Code,
  // RegisterLink: ({ id, index, href }) => {
  //   const isExternal = href.startsWith('http');

  //   React.useEffect(() => {
  //     const codeBlock = document.getElementById(id);
  //     if (!codeBlock) return;

  //     const allHighlightWords = codeBlock.querySelectorAll('.highlight-word');
  //     const target = allHighlightWords[index - 1];
  //     if (!target) return;

  //     target.replaceWith(
  //       Object.assign(document.createElement('a'), {
  //         href,
  //         innerHTML: target.innerHTML,
  //         className: target.className,
  //         ...(isExternal ? { target: '_blank', rel: 'noopener' } : {}),
  //       })
  //     );
  //   }, []);

  //   return null;
  // },
  // H: ({ id, index, ...props }) => {
  //   const triggerRef = React.useRef<HTMLElement>(null);

  //   React.useEffect(() => {
  //     const trigger = triggerRef.current;

  //     const codeBlock = document.getElementById(id);
  //     if (!codeBlock) return;

  //     const allHighlightWords = codeBlock.querySelectorAll('.highlight-word');
  //     const targetIndex = rangeParser(index).map((i) => i - 1);
  //     // exit if the `index` passed is bigger than the total number of highlighted words
  //     if (Math.max(...targetIndex) >= allHighlightWords.length) return;

  //     const addClass = () => targetIndex.forEach((i) => allHighlightWords[i].classList.add('on'));
  //     const removeClass = () =>
  //       targetIndex.forEach((i) => allHighlightWords[i].classList.remove('on'));

  //     trigger.addEventListener('mouseenter', addClass);
  //     trigger.addEventListener('mouseleave', removeClass);

  //     return () => {
  //       trigger.removeEventListener('mouseenter', addClass);
  //       trigger.removeEventListener('mouseleave', removeClass);
  //     };
  //   }, []);

  //   return <code className={code({ css: { cursor: 'default' } })} ref={triggerRef} {...props} />;
  // },
};
