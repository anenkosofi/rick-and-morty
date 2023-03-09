import { Navigate } from 'react-router-dom';
import { UserAuth } from 'components/Context/AuthContext';

export const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
  const { user } = UserAuth();
  return user ? <Navigate to={redirectTo} /> : Component;
};
