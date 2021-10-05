import { text } from '../text';

export default function H3(props) {
  return (
    <h3
      className={text({
        type: 'h3',
        weight: 'bold',
        css: { mb: '$3', mx: 'auto' },
      })}
      {...props}
    />
  );
}
