import { parseISO, format } from 'date-fns';
import Link from 'next/link';
import { css } from 'stitches.config';

const pcContainer = css({
  maxWidth: '756px',
  margin: '0px auto',
  borderBottom: '1px solid $neutral6',
  paddingBottom: '24px',
  marginTop: '32px',
});

const pcAnchor = css({
  textDecoration: 'none',
  color: '$neutral0',
  '&:focus-within': {
    // color: 'red',
    outlineColor: '$brand_inverted',
  },
});

const pcMeta = css({
  display: 'flex',
  fontSize: '14px',
  marginBottom: '8px',
  color: '$neutral2',
  '> *': {
    '&:after': {
      content: '•',
      margin: '0 4px',
    },
    '&:last-child': {
      '&:after': {
        content: '',
        margin: '0',
      },
    },
  },
});
const pcTitle = css({
  fontSize: '24px',
  lineHeight: '28.8px',
  marginBottom: '8px',
});
const pcSummary = css({
  fontSize: '16px',
  lineHeight: '24px',
  marginBottom: '24px',
});

const PostCard = ({ post }) => {
  return (
    <div className={pcContainer()}>
      <Link href={`/blog/${post.slug}`}>
        <a className={pcAnchor()}>
          <div className={pcMeta()}>
            <time> {format(parseISO(post.publishedAt), 'MMM dd, yyyy')} </time>
            <p>{post.readingTime.text}</p>
            <p>22,438 Views</p>
          </div>
          <h1 className={pcTitle()}>{post.title}</h1>
          <p className={pcSummary()}>{post.summary}</p>
        </a>
      </Link>
      {/* <Tags tags={post.tags} /> */}
    </div>
  );
};

export default PostCard;
