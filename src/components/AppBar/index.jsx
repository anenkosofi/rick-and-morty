import { NavLink } from 'react-router-dom';
import { CgHome } from 'react-icons/cg';

import { UserAuth } from 'components/Context/AuthContext';
import { UserNav } from 'components/UserNav';
import { AuthNav } from 'components/AuthNav';

import css from './AppBar.module.css';

export const AppBar = () => {
  const { user } = UserAuth();

  return (
    <header>
      <div className={css.container}>
        <div className={css.navigation}>
          <nav>
            <NavLink to="/" className={css.navigationLink}>
              <CgHome size={24} />
              <span>Home</span>
            </NavLink>
          </nav>
          {user?.displayName ? <UserNav /> : <AuthNav />}
        </div>
      </div>
    </header>
  );
};
