import React, { useEffect, useState } from 'react';
import { Link } from 'components/common';
import { copyToClipboard } from '@lib/helpers';
import { CopyURL, Twitter } from './icons';
import { text } from '@styles/typography';
import { css } from 'stitches.config';
import { flexRow, linkReset } from '@styles/common';

function BlogPostShare(): React.ReactElement {
  const [copyState, setCopyState] = useState<string>('Copy URL');
  const [title, setTitle] = useState<string>('');
  const [url, setUrl] = useState<string>('');

  useEffect(() => {
    setTitle(document.title.split('-')[0].trim());
    setUrl(window.location.href);
  }, []);

  return (
    <div className={flexRow()}>
      <Link
        className={flexRow(share(linkReset({ css: { marginRight: '$3' } })))}
        title="Share on Twitter"
        aria-label="Share on Twitter"
        target="_blank"
        href={`https://twitter.com/intent/tweet?${new URLSearchParams({
          url,
          text: `I just read "${title}" by @idirmosh\n\n`,
        })}`}
      >
        <Twitter width="16px" />
        <p className={textP(text({ type: 'small' }))}>Share on Twitter</p>
      </Link>

      <span
        className={share(flexRow())}
        title="Copy Post URL"
        aria-label="Copy Post URL"
        onClick={(e) => {
          copyToClipboard(url);
          setCopyState('URL Copied');
          setTimeout(() => setCopyState('Copy URL'), 3000);
        }}
      >
        <CopyURL width="16px" />
        <p className={textP(text({ type: 'small' }))}>{copyState}</p>
      </span>
    </div>
  );
}

// Styles
const share = css({
  justifyContent: 'space-around',
  cursor: 'pointer',
  borderRadius: '9px',
  backgroundColor: '$neutral6',
  transition: 'all .2s ease',
  flexDirection: 'column',
  textAlign: 'center',
  padding: '$2 $2',
  '@mobile': {
    flexDirection: 'row',
    svg: {
      fill: '$neutral1',
      marginBottom: '0 !important',
    },
  },
  svg: {
    fill: '$neutral2',
    marginBottom: '$1 ',
    marginRight: '4px',
  },
  '&:hover': {
    backgroundColor: '$neutral5',
  },
});
const textP = css({
  margin: '0',
  color: '$neutral3',
});
export default BlogPostShare;
