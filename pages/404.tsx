import Link from '@components/common/Link';
import Layout from '@components/Layout';
import { wrapper } from '@styles/common';
import { heading, text } from '@styles/typography';

function Custom404() {
  return (
    <Layout>
      <div className={wrapper({ css: { margin: '$7 auto', textAlign: 'center' } })}>
        <h1 className={heading({ type: 'xlarge' })}>404</h1>
        <p
          className={text({
            css: {
              maxWidth: '42ch',
              margin: '0 auto',
              lineHeight: '1.6',
              '@mobile': { fontSize: '1.4rem' },
            },
          })}
        >
          Sorry, we have misplaced that URL or it is pointing to something that doesn't exist. Head{' '}
          <Link href="/" className={text({ type: 'link', css: { fontSize: '1.4rem' } })}>
            back home
          </Link>{' '}
          to try finding it again.
        </p>
      </div>
    </Layout>
  );
}

export default Custom404;
