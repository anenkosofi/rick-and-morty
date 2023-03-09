import { lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import { AuthContextProvider } from './Context/AuthContext';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';
import { Layout } from './Layout';

const Home = lazy(() => import('../pages/Home'));
const CharacterDetails = lazy(() => import('../pages/CharacterDetails'));
const SignIn = lazy(() => import('../pages/SignIn'));
const Profile = lazy(() => import('../pages/Profile'));

export const App = () => {
  return (
    <div>
      <AuthContextProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="character/:id" element={<CharacterDetails />} />
            <Route
              path="signin"
              element={
                <RestrictedRoute redirectTo="/profile" component={<SignIn />} />
              }
            />
            <Route
              path="profile"
              element={
                <PrivateRoute redirectTo="/signin" component={<Profile />} />
              }
            />
            <Route path="*" element={<Navigate to="/" />} />
          </Route>
        </Routes>
      </AuthContextProvider>
    </div>
  );
};
