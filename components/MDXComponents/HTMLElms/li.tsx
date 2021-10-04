import { text } from '../text';

export default function li(props) {
  return (
    <li
      className={text({ size: '4', css: { color: '$copy', listStyleType: 'circle' } })}
      {...props}
    />
  );
}
