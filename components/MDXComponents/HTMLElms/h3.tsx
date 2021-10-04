import { text } from '../text';

export default function H3(props) {
  return (
    <h3
      className={text({
        size: '4',
        weight: 'bold',
        css: { mt: '$5', mb: '$3', mx: 'auto', color: 'red' },
      })}
      {...props}
    />
  );
}
