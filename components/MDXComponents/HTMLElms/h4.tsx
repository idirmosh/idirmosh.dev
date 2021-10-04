import { text } from '../text';

export default function H4(props) {
  return (
    <h4
      className={text({
        size: '3',
        weight: 'bold',
        css: { textTransform: 'uppercase', mt: '$4', mb: '$3', mx: 'auto' },
      })}
      {...props}
    />
  );
}
