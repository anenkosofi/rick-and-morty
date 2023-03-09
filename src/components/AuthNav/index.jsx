import { NavLink } from 'react-router-dom';
import { CgLogIn } from 'react-icons/cg';

import css from './AuthNav.module.css';

export const AuthNav = () => {
  return (
    <NavLink className={css.navigationLink} to="/signin">
      <CgLogIn size={24} />
      <span>Sign In</span>
    </NavLink>
  );
};
