import { box, flexColumn, flexRow } from '@styles/common';
import { heading, text } from '@styles/typography';
import React, { useRef } from 'react';
import { css } from 'stitches.config';
import MobileMenuCloseButton from './common/MobileMenuCloseButton';
import MobileMenuLink from './common/MobileMenuLink';
import MobileMenuSocialLink from './common/MobileMenuSocialLink';
import ThemeToggler from './common/ThemeToggler';
import { CSSTransition, Transition } from 'react-transition-group';

function MobileMenu({ handleMenu, isOpen }): React.ReactElement {
  const nodeRef = useRef(null);
  const menu = css({
    padding: '0',
    margin: '0',
    position: 'absolute',
    top: '0',
    left: '0',
    backgroundColor: '$neutral6',
    borderRight: '1px solid $neutral5',
    width: '320px',
    height: '100vh',
    zIndex: '999',
    boxShadow: 'rgba(0,0,0,.57) 0 0 0 125rem',
    '@mobile': {
      width: '320px',
    },
  });

  const head = css({
    justifyContent: 'space-between',
    height: '96px',
    padding: '0 $4',
    lineHeight: '70px',
    fontSize: '13px',
    fontWeight: 'normal',
    backgroundColor: '$neutral6',
    borderBottom: '1px solid $neutral5',
    overflow: 'hidden',

    transition: 'all .3s ease-in-out',
  });
  const body = css({
    listStyle: 'none',
    margin: '0',
    padding: '0',
  });
  const footer = css({
    padding: '24px $4',
  });

  return (
    <Transition nodeRef={nodeRef} in={isOpen} timeout={50}>
      {(state) => {
        return (
          <menu ref={nodeRef} className={`${menu()} menu-${state}`}>
            <div className={flexRow(head())}>
              <h2 className={heading({ type: 'h4', css: { margin: '0' } })}>Menu</h2>
              <div className={flexRow({ css: { cursor: 'pointer' } })}>
                <p className={text({ type: 'menuCap' })} onClick={() => handleMenu(false)}>
                  Close
                </p>
                <MobileMenuCloseButton onClick={() => handleMenu(false)} />
              </div>
            </div>
            <ul className={box(body())}>
              <MobileMenuLink href="/" text="Home" />
              <MobileMenuLink href="/blog" text="Blog" />
              <MobileMenuLink href="/tags" text="Topics" />
              <MobileMenuLink href="/contact" text="Contact" />
            </ul>
            <div className={footer()}>
              <div className={flexColumn({ css: { fontSize: '.5rem !important' } })}>
                <MobileMenuSocialLink href="https:github.com" textL="Github" />
                <MobileMenuSocialLink href="https:twitter.com" textL="Twitter" />
                <MobileMenuSocialLink href="https:LinkedIn.com" textL="LinkedIn" />
              </div>
              <div className={flexRow({ css: { marginTop: '$4' } })}>
                <p className={text({ type: 'menuCap' })}>Enable Dark Mode</p>
                <ThemeToggler />
              </div>
            </div>
            {/* <div className={overlay()} onClick={() => handleMenu(false)}></div> */}
          </menu>
        );
      }}
    </Transition>
  );
}

export default MobileMenu;
