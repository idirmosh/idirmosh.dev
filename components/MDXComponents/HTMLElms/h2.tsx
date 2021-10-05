import { text } from '../text';

export default function H2(props) {
  return (
    <h2
      className={text({
        type: 'h2',
        weight: 'bold',
        css: { mb: '$3', mx: 'auto' },
      })}
      {...props}
    />
  );
}
