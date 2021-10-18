import { text, heading } from '@components/MDXComponents/styles';
import React from 'react';
import * as styles from './styles';
import * as Icons from '../icons';

function PostMeta({ title, summary, publishedAt, readingTime, tags }) {
  return (
    <div>
      <h1 className={heading({ type: 'h1' })}>{title}</h1>
      <AuthorMeta />
      <p className={text({ type: 'body' })}>{summary}</p>
    </div>
  );
}

function AuthorMeta() {
  return (
    <div className={styles.container()}>
      <div className={styles.avatar()}>
        <img
          className={styles.img()}
          src="https://avatars.githubusercontent.com/u/41597907?v=4"
        ></img>
      </div>
      <div className={styles.container({ css: { flexDirection: 'column', marginLeft: '12px' } })}>
        <div className={styles.author({ css: { marginRight: 'auto' } })}>
          <h3 className={heading({ type: 'h3', css: { margin: '0', padding: '0' } })}>
            Idir Hamouch
          </h3>
          <span className={styles.divider({ css: { margin: '0 4px' } })} />
          <Icons.Twitter className={styles.svg()} />
          <Icons.Github className={styles.svg()} />
        </div>
        <div className={styles.meta()}>
          <time className={text({ type: 'list', css: { margin: '0' } })}>Sep 29th, 2021</time>
          <span className={styles.divider()} />
          <p className={text({ type: 'list', css: { margin: '0' } })}>32 min read</p>
        </div>
      </div>
      <div className={styles.views()}>
        <h6 className={heading({ type: 'h6', css: { margin: '0', padding: '0' } })}>Views</h6>
        <span className={text({ type: 'list', css: { margin: '0' } })}>22,438</span>
      </div>
    </div>
  );
}
export default PostMeta;
