import { box } from '../box';

export default function iframe({ ...props }) {
  return (
    <div className={box({ mb: '$4' })}>
      <iframe {...props} />
    </div>
  );
}
