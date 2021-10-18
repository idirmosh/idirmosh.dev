import Tags from '@components/common/Tags';
import React from 'react';
import Link from 'next/link';
import { css } from 'stitches.config';
import { Github } from '../icons';

function PostFooter({ tags }) {
  return (
    <div className={footer()}>
      <Tags tags={tags} />
      <div className={edit()}>
        <Github />
        <Link href="#">
          <a className={editLink()}>Edit on GitHub</a>
        </Link>
      </div>
    </div>
  );
}

const footer = css({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  margin: '40px 0',
});
const edit = css({
  display: 'flex',
  alignItems: 'center',
  '& svg': {
    width: '18px',
    marginRight: '4px',
  },
});
const editLink = css({
  margin: '0',
  padding: '0',
  fontSize: '14px',
  fontWeight: '500',
  color: '$brand_main',
  textDecoration: 'none',

  '&:hover': {
    textDecoration: 'underline',
  },
});
export default PostFooter;
