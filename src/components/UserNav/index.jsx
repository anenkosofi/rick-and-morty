import { NavLink } from 'react-router-dom';
import { CgProfile, CgLogOut } from 'react-icons/cg';

import { UserAuth } from 'components/Context/AuthContext';

import css from './UserNav.module.css';

export const UserNav = () => {
  const { googleSignOut } = UserAuth();

  const handleGoogleSignOut = async () => {
    try {
      await googleSignOut();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={css.navigation}>
      <NavLink className={css.navigationLink} to="/profile">
        <CgProfile size={24} />
        <span>Profile</span>
      </NavLink>
      <button
        className={css.signOutButton}
        type="button"
        onClick={handleGoogleSignOut}
      >
        <CgLogOut size={24} />
        <span>Sign Out</span>
      </button>
    </div>
  );
};
