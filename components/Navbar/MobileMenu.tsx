import { box, flexColumn, flexRow, linedAnchor, linkReset } from '@styles/common';
import { css } from 'stitches.config';
import Link from '../common/Link';
import { External, Call, Mail } from '../common/icons';
import { text } from '@styles/typography';
import { CSSTransition } from 'react-transition-group';

function MobileMenu({ menus, isOpen }) {
  const container = css({
    display: 'none',
    width: '100vw',
    height: 'calc(100vh - 69px)',
    background: '$neutral7',
    position: 'fixed',
    left: '0',
    top: '69px',
    zIndex: '999',
    '@mobile': {
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
    },
  });

  const item = css({
    width: '100%',
    padding: '.4rem 1.4rem',
    lineHeight: '1.5',
    fontWeight: '700',
    color: '$neutral1',
    span: {
      fontWeight: '400',
      color: '$neutral3',
    },
    svg: {
      margin: '0 .3rem',
      fill: '$neutral3',
    },
  });
  const seperator = css({
    display: 'block',
    width: '100%',
    height: '1px',
    backgroundColor: '$neutral6',
    padding: '.5px 0',
    margin: '.66rem 0',
  });

  return (
    <div className={container()}>
      <div className={flexColumn({ css: { width: '100%' } })}>
        {menus.map((link) => (
          <Link
            href="#"
            title={link.text}
            key={link.id}
            className={item(flexColumn(linkReset(text({ type: 'small', css: { margin: '0' } }))))}
          >
            {link.text} <span className={text({ type: 'xxSmal' })}>{link.desc}</span>
          </Link>
        ))}
      </div>
      <div className={seperator()}></div>
      <div className={flexColumn()}>
        <Link
          href="#"
          title="some title"
          className={item(flexRow(linedAnchor(text({ type: 'xSmall', css: { margin: '0' } }))))}
        >
          Send me an email
          <External width="16px" />
        </Link>
        <Link
          href="#"
          title="some title"
          className={item(flexRow(linedAnchor(text({ type: 'xSmall', css: { margin: '0' } }))))}
        >
          Download CV
          <External width="16px" />
        </Link>
      </div>
      <div className={seperator()}></div>
      <div>
        <Link href="#" className={item(flexRow(linedAnchor(text({ type: 'xSmall' }))))}>
          Github
          <External width="16px" />
        </Link>
        <Link href="#" className={item(flexRow(linedAnchor(text({ type: 'xSmall' }))))}>
          Twitter
          <External width="16px" />
        </Link>
      </div>
      <div className={seperator()}></div>
      <div className={box()}>
        <Link href="#" className={item(flexRow(linkReset(text({ type: 'xSmall' }))))}>
          <Call width="16px" />
          +1 435 567 9875
        </Link>
        <Link href="#" className={item(flexRow(linkReset(text({ type: 'xSmall' }))))}>
          <Mail width="16px" />
          contact@idrev.dev
        </Link>
      </div>
    </div>
  );
}

export default MobileMenu;
