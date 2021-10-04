import { divider } from '../divider';

export default function hr(props) {
  return <hr className={divider({ size: '1', css: { my: '$5' } })} {...props} />;
}
