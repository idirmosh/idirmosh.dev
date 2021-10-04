import { text } from '../text';

export default function Video(props) {
  return (
    <p
      className={text({ size: '4', weight: 'normal', css: { mb: '$4', color: '$copy' } })}
      {...props}
    />
  );
}
