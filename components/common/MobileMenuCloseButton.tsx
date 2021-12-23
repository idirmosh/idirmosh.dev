import React from 'react';
import { css } from 'stitches.config';

function MobileMenuCloseButton(props) {
  const icon = css({
    zIndex: '1',
    transition: 'all .3s ease-in-out',
    display: 'block',
    position: 'relative',
    overflow: 'hidden',
    width: '$4',
    height: '$4',
    marginRight: '-12px',
    '&:before': {
      content: '',
      position: 'absolute',
      top: '15px',
      right: '6px',
      width: '20px',
      height: '3px',
      background: '$neutral0',
      transform: 'rotate(45deg)',
    },
    '&:after': {
      content: '',
      position: 'absolute',
      top: '15px',
      right: '6px',
      width: '20px',
      height: '3px',
      background: '$neutral1',
      transform: 'rotate(-45deg)',
    },
    '&:hover': {
      transform: 'rotate(90deg)',
    },
  });

  return <span {...props} className={icon()}></span>;
}

export default MobileMenuCloseButton;
