import React from 'react';
import { css } from 'stitches.config';
import Link from './Link';

type Props = {
  href: string;
  text: string;
};

function MobileMenuLink({ href, text }: Props): React.ReactElement {
  const item = css({
    position: 'relative',
    display: 'block',
    padding: '24px $4',
    fontSize: '1rem',
    fontWeight: 'bold',
    color: '$neutral2',
    cursor: 'pointer',
    background: '$neutral6',
    borderBottom: '1px solid $neutral5',
    transition: 'background .3s ease-in-out,border .3s ease-in-out,color .3s ease-in-out',
    textDecoration: 'none',
    '&:hover': {
      color: '$neutral0',
      backgroundColor: '$neutral7',
      transition: 'background .3s ease-in-out',
    },
  });
  const badge = css({
    backgroundColor: '$orange',
    fontSize: '12px',
    fontWeight: '500',
    borderRadius: '2px',
    color: '$neutral6',
    position: 'absolute',
    top: '50%',
    right: '25px',
    transform: 'translateY(-50%)',
    padding: '$1 $2',
  });
  return (
    <li>
      <Link href={href} className={item()}>
        {text}
        {/* <span className={badge()}>New</span> */}
      </Link>
    </li>
  );
}

export default MobileMenuLink;
