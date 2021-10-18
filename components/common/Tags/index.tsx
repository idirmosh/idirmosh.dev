import React from 'react';
import Link from 'next/link';
import { css } from 'stitches.config';

function Tags({ tags }) {
  return (
    <div className={tagsStyle()}>{tags && tags.map((tag) => <Tag key={tag} tag={tag} />)}</div>
  );
}

export function Tag({ tag }) {
  return (
    <Link href="#">
      <a className={tagStyle()}>{tag}</a>
    </Link>
  );
}

const tagsStyle = css({
  display: 'flex',
});

const tagStyle = css({
  display: 'flex',
  fontWeight: '600',
  cursor: 'pointer',
  textDecoration: 'none',
  color: '$neutral2',

  borderRadius: '999px',
  backgroundColor: '$brand_faded',
  //boxShadow: '0 0 0 1px $colors$brand_bright',
  marginRight: '16px',

  '&:hover': {
    backgroundColor: '$brand_faded',
    boxShadow: '0 0 0 1px $colors$brand_inverted',
  },
  '&:last-of-type': {
    margin: '0',
  },

  variants: {
    size: {
      small: {
        fontSize: '12px',
        padding: '5px 10px',
      },
      large: {
        fontSize: '16px',
        padding: '7px 15px',
      },
    },
  },

  defaultVariants: {
    size: 'small',
  },
});
export default Tags;
