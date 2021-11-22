import React from 'react';
import NextLink from 'next/link';

function Link(props) {
  return (
    <NextLink href={props.href}>
      <a {...props}>{props.children}</a>
    </NextLink>
  );
}

export default Link;
