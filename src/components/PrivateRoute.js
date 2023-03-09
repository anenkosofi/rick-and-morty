import { Navigate } from 'react-router-dom';

import { UserAuth } from 'components/Context/AuthContext';

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const { user } = UserAuth();
  const shouldRedirect = !user;
  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};
