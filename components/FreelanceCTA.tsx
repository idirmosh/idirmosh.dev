import React from 'react';
import { button, wrapper } from '@styles/common';
import { heading } from '@styles/typography';

function FreelanceCTA(): React.ReactElement {
  return (
    <div className={wrapper()}>
      <h1 className={heading({ type: 'xlarge' })}>
        I am taking new projects now.
        <br />
        If you happen to have one
        <br />
        please get in touch.
      </h1>
      <button className={button()}>Enquiry now</button>
    </div>
  );
}

export default FreelanceCTA;
