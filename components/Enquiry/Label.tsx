import React from 'react';
import { css } from 'stitches.config';

function Label({ id, children }) {
  const label = css({
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    '[type="checkbox"]': {
      textAlign: 'center',
      display: 'table-cell',
      verticalAlign: 'middle',
      minWidth: '20px !important',
      height: '20px !important',
      appearance: 'none',
      border: '1px solid $neutral3',
      borderRadius: '999px',
      margin: '0 .5rem 0 0',
      cursor: 'pointer',
      boxShadow: 'none',
      '&:checked': {
        backgroundColor: '$colors$brand_main',
        border: 'none',
        '&:after': {
          content: '\\2713',
          color: '$neutral6',
          fontSize: '.8rem',
          fontWeight: '900',
        },
      },
    },
  });
  return (
    <label className={label()} htmlFor={id}>
      {children}
    </label>
  );
}

export default Label;
