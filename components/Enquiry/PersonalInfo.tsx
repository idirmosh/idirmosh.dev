import { heading } from '@styles/typography';
import React from 'react';
import { css } from 'stitches.config';

function PersonalInfo() {
  const info = css({
    display: 'grid',
    gridAutoColumns: 'auto',
    gridTemplateColumns: '1fr',
    gridRowGap: '1rem',
    gridColumnGap: '1rem',
    '@mobile': {
      gridTemplateColumns: '1fr 1fr',
    },
  });

  const input = css({
    width: ' 100%',
    marginTop: '.4rem',
    fontSize: '1rem',
    border: 'none',
    padding: '.7rem 1rem',
    boxShadow: '0 0 0 1px $colors$neutral5',
    borderRadius: '9px',
    backgroundColor: '$neutral6',
    '@:focus': {
      boxShadow: '0 0 0 1px $colors$neutral3',
    },
  });
  return (
    <div className={info()}>
      <div>
        <label className={heading({ type: 'h4', css: { color: '$neutral3' } })}>Full Name</label>
        <input
          className={input()}
          type="text"
          maxLength={256}
          name="full-name"
          placeholder="Your full name"
          required={true}
        ></input>
      </div>
      <div>
        <label className={heading({ type: 'h4', css: { color: '$neutral3' } })}>Email</label>
        <input
          className={input()}
          type="email"
          maxLength={256}
          name="email"
          data-name="Email"
          placeholder="example@company.com"
          required={true}
        ></input>
      </div>
    </div>
  );
}

export default PersonalInfo;
