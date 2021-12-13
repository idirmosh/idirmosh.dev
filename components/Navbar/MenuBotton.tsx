import { css } from 'stitches.config';
import { MenuOpen, MenuClose } from '../common/icons';
import { CSSTransition } from 'react-transition-group';

function MenuBotton(props) {
  const { isOpen, ...rest } = props;

  const button = css({
    // display: 'flex',
    // justifyContent: 'space-around',
    // alignItems: 'center',
    margin: '0 auto',
    gridColumn: '1/1',
    alignSelf: 'center',
    width: '32px',
    height: '32px',
    cursor: 'pointer',
    borderRadius: '1px',
    transition: 'all .5s ease 0s',
    svg: {
      fill: '$neutral1',
    },
    '@mobile': {
      display: 'none',
    },
  });
  return (
    <div className={button()} title="Mobile Menu Toggle" aria-label="Mobile Menu Toggle" {...rest}>
      {isOpen ? (
        <CSSTransition in={isOpen} timeout={900} className="menu-close">
          <MenuClose width="26px" />
        </CSSTransition>
      ) : (
        <CSSTransition in={isOpen} timeout={900} className="menu-open">
          <MenuOpen width="26px" />
        </CSSTransition>
      )}
    </div>
  );
}

export default MenuBotton;
