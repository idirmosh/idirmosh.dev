import Link from '@components/common/Link';
import React from 'react';
import { css } from 'stitches.config';

function AcceptPolicy() {
  const check = css({});
  return (
    <label htmlFor="accept">
      <input id="accept" type="checkbox" />
      <span>I accept your</span>
      <Link href="/privacy-policy">Privacy Policy</Link>
    </label>
  );
}

export default AcceptPolicy;
