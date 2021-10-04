import { box } from '../box';
import NextImage from 'next/image';

export default function img({ children, ...props }) {
  return ({ children, ...props }) => (
    <div className={box({ my: '$5', mx: '-$3', '@bp1': { mx: '-$5' } })}>
      <NextImage {...(props as any)} />
    </div>
  );
}
