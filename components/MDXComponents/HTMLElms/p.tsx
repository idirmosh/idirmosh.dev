import { text } from '../text';

export default function p(props) {
  return (
    <p
      className={text({
        lineHeights: 'base',
        weight: 'regular',
        type: 'body',
        css: { mb: '$4', color: '$neutral0' },
      })}
      {...props}
    />
  );
}
