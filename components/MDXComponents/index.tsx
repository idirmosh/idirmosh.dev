import React from 'react';
import NextLink from 'next/link';
import NextRouter from 'next/router';
import NextImage from 'next/image';
import rangeParser from 'parse-numeric-range';
import * as Collapsible from '@radix-ui/react-collapsible';
import { text } from '@components/MDXComponents/text';
import { box } from '@components/MDXComponents/box';
import { link } from '@components/MDXComponents/link';
import { pre } from '@components/MDXComponents/pre';
import { divider } from '@components/MDXComponents/divider';
import { code } from '@components/MDXComponents/code';
import { button } from '@components/MDXComponents/button';
import Elms from '@components/MDXComponents/HTMLElms';

export const components = {
  Box: ({ css, as: Comp = 'div', ...props }: any) => <Comp className={box(css)} {...props} />,
  h1: Elms.H1,
  h2: Elms.H2,
  h3: Elms.H3,
  h4: Elms.H4,
  p: Elms.p,
  a: Elms.a,
  hr: Elms.hr,
  ul: Elms.ul,
  ol: Elms.ol,
  li: Elms.li,
  strong: Elms.strong,
  Image: Elms.Image,
  img: Elms.img,
  Video: Elms.Video,
  iframe: Elms.iframe,
  blockquote: Elms.blockquote,
  pre: Elms.preElm,
  code: Elms.codeElm,
  RegisterLink: ({ id, index, href }) => {
    const isExternal = href.startsWith('http');

    React.useEffect(() => {
      const codeBlock = document.getElementById(id);
      if (!codeBlock) return;

      const allHighlightWords = codeBlock.querySelectorAll('.highlight-word');
      const target = allHighlightWords[index - 1];
      if (!target) return;

      target.replaceWith(
        Object.assign(document.createElement('a'), {
          href,
          innerHTML: target.innerHTML,
          className: target.className,
          ...(isExternal ? { target: '_blank', rel: 'noopener' } : {}),
        })
      );
    }, []);

    return null;
  },
  H: ({ id, index, ...props }) => {
    const triggerRef = React.useRef<HTMLElement>(null);

    React.useEffect(() => {
      const trigger = triggerRef.current;

      const codeBlock = document.getElementById(id);
      if (!codeBlock) return;

      const allHighlightWords = codeBlock.querySelectorAll('.highlight-word');
      const targetIndex = rangeParser(index).map((i) => i - 1);
      // exit if the `index` passed is bigger than the total number of highlighted words
      if (Math.max(...targetIndex) >= allHighlightWords.length) return;

      const addClass = () => targetIndex.forEach((i) => allHighlightWords[i].classList.add('on'));
      const removeClass = () =>
        targetIndex.forEach((i) => allHighlightWords[i].classList.remove('on'));

      trigger.addEventListener('mouseenter', addClass);
      trigger.addEventListener('mouseleave', removeClass);

      return () => {
        trigger.removeEventListener('mouseenter', addClass);
        trigger.removeEventListener('mouseleave', removeClass);
      };
    }, []);

    return <code className={code({ css: { cursor: 'default' } })} ref={triggerRef} {...props} />;
  },
};
