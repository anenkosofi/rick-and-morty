import logoPicture from '../../images/rickandmortylogo.png';

import css from './Logo.module.css';

export const Logo = () => {
  return (
    <>
      <img src={logoPicture} alt="logo" className={css.logo} />
    </>
  );
};
