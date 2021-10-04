import { box } from '../box';
import NextImage from 'next/image';

export default function Image({ children, ...props }) {
  return (
    <figure className={box({ my: '$5', mx: '-$3', '@bp1': { mx: '-$5' } })}>
      <NextImage {...(props as any)} />
      {children && (
        <figcaption
          className={box({
            textAlign: 'center',
            fontSize: '$1',
            lineHeight: 1,
            fontFamily: '$mono',
            color: '$gray',
          })}
        >
          {children}
        </figcaption>
      )}
    </figure>
  );
}
