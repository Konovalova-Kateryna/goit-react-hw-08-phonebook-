import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux/es/exports';
import authSelectors from 'redux/auth/auth-selectors';

export const RestrictedRoute = ({ component: Component, redirectTo }) => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};
