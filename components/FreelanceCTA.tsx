import { button, wrapper } from '@styles/common';
import { heading } from '@styles/typography';
import React from 'react';

function FreelanceCTA() {
  return (
    <div className={wrapper()}>
      <h4 className={heading({ type: 'xlarge' })}>
        I am taking new projects now.
        <br />
        If you happen to have one
        <br />
        please get in touch.
      </h4>
      <button className={button()}>Enquiry now</button>
    </div>
  );
}

export default FreelanceCTA;
