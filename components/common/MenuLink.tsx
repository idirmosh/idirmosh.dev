import React from 'react';
import { Link } from 'components/common';
import { css } from 'stitches.config';

type Props = {
  href: string;
  text: string;
};

function MenuLink({ href, text: testL }: Props): React.ReactElement {
  const item = css({
    marginRight: '$4',
    //display: 'block',
    //padding: '24px $4',
    fontSize: '1rem',
    fontWeight: 'bold',
    color: '$neutral1',
    cursor: 'pointer',
    //background: '$neutral6',
    // borderBottom: '1px solid $neutral5',
    transition: 'color .3s ease-in-out',
    textDecoration: 'none',
    '&:hover': {
      color: '$neutral0',
    },
  });

  return (
    <li>
      <Link href={href} className={item()}>
        {testL}
      </Link>
    </li>
  );
}

export default MenuLink;
