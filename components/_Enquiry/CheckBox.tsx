import { Done } from 'components/common/icons';
import React from 'react';
import { css } from 'stitches.config';

function CheckBox({ id, text, selected, handleChange }): React.ReactElement {
  const active = selected == id;
  const checkbox = css({
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
    boxShadow: '0 0 0 1px $colors$neutral5',
    borderRadius: '999px',
    padding: '.85rem .85rem .85rem 2.8rem',
    cursor: 'pointer',
    transition: '.2s all',
    fontSize: '.9rem',
    fontWeight: '600',
    backgroundColor: active ? '$brand_main' : '$neutral7',
    color: active ? '$neutral7' : '$neutral2',
    letterSpacing: '-1px',
    '[type="checkbox"]': {
      '-webkit-appearance': 'none',
      appearance: 'none',
      backgroundColor: '#fff',
      margin: '0',
    },
  });

  const mark = css({
    position: 'absolute',
    left: '16px',
    bottom: '12px',
    fill: '$neutral6',
  });
  return (
    <label htmlFor={id} className={checkbox()}>
      <input id={id} type="checkbox" name="price-range" onChange={handleChange} />
      {active && <Done width="24px" className={mark()} />}
      <span>{text}</span>
    </label>
  );
}

export default CheckBox;
