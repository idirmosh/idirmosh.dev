import { text } from '../text';

export default function strong(props) {
  return (
    <strong
      className={text({ weight: 'bold', css: { fontSize: 'inherit', lineHeight: 'inherit' } })}
      {...props}
    />
  );
}
