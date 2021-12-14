import Link from '@components/common/Link';
import React from 'react';
import { css } from 'stitches.config';
import Label from './Label';

function AcceptPolicy() {
  const check = css({});
  return (
    <Label id="accept">
      <input id="accept" type="checkbox" />
      <span>I accept your</span>
      <Link href="/privacy-policy">Privacy Policy</Link>
    </Label>
  );
}

export default AcceptPolicy;
