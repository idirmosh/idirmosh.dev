import React, { FC, ReactNode } from 'react';
import NextLink from 'next/link';

type Props = {
  href: string;
  children: ReactNode;
  rest?: any;
};

const Link: FC<Props> = ({ href, children, ...rest }) => {
  return (
    <NextLink href={href}>
      <a {...rest}>{children}</a>
    </NextLink>
  );
};

export default Link;
