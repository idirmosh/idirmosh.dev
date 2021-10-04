import { box } from '../box';

export default function blockquote(props) {
  return (
    <blockquote
      className={box({
        my: '$4',
        pl: '$2',
        borderLeft: '2px solid $gray',
        color: '$gray',
        '@bp1': {
          pl: '$4',
        },
      })}
      {...props}
    />
  );
}
