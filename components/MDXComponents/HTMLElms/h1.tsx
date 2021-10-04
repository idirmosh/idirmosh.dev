import { text } from '../text';

export default function H1(props) {
  return <h1 className={text({ size: '7', css: { mb: '$5', color: 'green' } })} {...props} />;
}
