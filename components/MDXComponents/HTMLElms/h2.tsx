import { text } from '../text';

export default function H2(props) {
  return (
    <h2
      className={text({
        size: '5',
        weight: 'bold',
        css: { mt: '$5', mb: '$4', mx: 'auto', color: 'blue' },
      })}
      {...props}
    />
  );
}
