import NextLink from 'next/link';
import { link } from '../link';

export default function a({ href = '', ...props }) {
  if (href.startsWith('http')) {
    return <a className={link()} href={href} target="_blank" rel="noopener" {...props} />;
  }

  return (
    <NextLink href={href} passHref>
      <a className={link()} {...props} />
    </NextLink>
  );
}
