import { wrapper } from '@styles/common';
import React from 'react';
import { css } from 'stitches.config';

function FreelanceCTA() {
  const cta = css({
    margin: '12rem auto',
    padding: '3rem 1rem',
    borderRadius: '.5rem',
    textAlign: 'center',
  });
  const title = css({
    fontSize: '1.5rem',
    lineHeight: '1.2',
    letterSpacing: '-.05em',
    margin: '0',
    '@mobile': {
      fontSize: '2.5rem',
    },
    '@tablet': {
      fontSize: '3rem',
    },
  });
  const btn = css({
    margin: '0',
    border: '0',
    backgroundColor: '$brand_main',
    color: '$neutral6',
    padding: '1rem 2rem',
    borderRadius: '999px',
    cursor: 'pointer',
    marginTop: '1.6rem',
    fontWeight: '700',
  });
  return (
    <div className={wrapper(cta())}>
      <h4 className={title()}>
        I am taking new projects now.
        <br />
        If you happen to have one
        <br />
        please get in touch.
      </h4>
      <button className={btn()}>Enquiry now</button>
    </div>
  );
}

export default FreelanceCTA;
