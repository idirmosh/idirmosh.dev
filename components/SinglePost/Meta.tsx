import { heading, text } from '@styles/typography';
import Views from '@components/common/Views';
// import Entry from '@components/common/Entry';
import { flex, line } from '@styles/common';

function PostMeta({ title, summary, publishedAt, readingTime, tags, slug }) {
  return (
    <div>
      <span className={line()}></span>
      <div className={flex({ type: 'split', css: { marginBottom: '3em' } })}>
        {/* <Entry date={publishedAt} readingTime={readingTime} /> */}
        <Views readingTime={readingTime} slug={slug} />
      </div>
      <h1 className={heading({ type: 'h1' })}>{title}</h1>
      <p className={text({ type: 'body' })}>{summary}</p>
    </div>
  );
}

export default PostMeta;
