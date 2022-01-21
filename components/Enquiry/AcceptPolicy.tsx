import Link from 'components/common/Link';
import { text } from '@styles/typography';
import React from 'react';
import { css } from 'stitches.config';
import Label from './Label';

function AcceptPolicy(): React.ReactElement {
  const check = css({});
  return (
    <Label id="accept">
      <input id="accept" type="checkbox" />
      <span className={text({ css: { margin: '0 .4rem 0 0' } })}>
        By submitting this form, I agree to{' '}
      </span>
      <Link href="/privacy-policy">Privacy Policy</Link>
    </Label>
  );
}

export default AcceptPolicy;
