import { box } from '@styles/common';
import { heading } from '@styles/typography';
import { useState } from 'react';
import { css } from 'stitches.config';
import CheckBox from './CheckBox';
function PriceRange(): React.ReactElement {
  const [selected, setSelected] = useState<string>('3k');
  const container = css({
    display: 'grid',
    gridAutoColumns: 'auto',
    gridTemplateColumns: '1fr 1fr',
    gridTemplateRows: 'auto auto',
    gridRowGap: '1rem',
    gridColumnGap: '1rem',
    '@tablet': {
      gridTemplateColumns: '1fr 1fr 1fr',
    },
  });
  const priceRanges = [
    { id: '1k', name: '$700 - $1,200' },
    { id: '3k', name: '$1,200 - $3,000' },
    { id: '10k', name: '$3,000 - $10,000' },
    { id: '50k', name: '$10,000 - $50,000' },
    { id: 'plus', name: '$50,000+' },
  ];

  return (
    <div className={box({ css: { margin: '3rem 0' } })}>
      <label
        htmlFor=""
        className={heading({
          type: 'h4',
          css: { color: '$neutral3', marginBottom: '1rem' },
        })}
      >
        Price range
      </label>
      <div className={box(container())}>
        {priceRanges.map(({ id, name }) => (
          <CheckBox
            key={id}
            id={id}
            text={name}
            selected={selected}
            handleChange={() => setSelected(id)}
          />
        ))}
      </div>
    </div>
  );
}
export default PriceRange;
