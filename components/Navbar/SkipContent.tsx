import { hidden } from '@styles/common';

function SkipContent() {
  return (
    <>
      <a href="#skip-nav" tabIndex={0} data-reach-skip-link="true" className={hidden()}>
        Skip to content
      </a>
      <h1 aria-hidden="true" className={hidden()}>
        Idir Hamouch
      </h1>
    </>
  );
}

export default SkipContent;
