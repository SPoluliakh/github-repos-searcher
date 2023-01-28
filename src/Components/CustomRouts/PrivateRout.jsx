import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useAuth } from '../huks/useAuth';

export const PrivateRout = ({ component: Component, redirectTo = '/' }) => {
  const { isLoggedIn, isRefreshing, token } = useAuth();
  const shouldRedirect = !isLoggedIn && !isRefreshing && !token;
  return shouldRedirect ? <Navigate to={redirectTo} replace /> : Component;
};

PrivateRout.propTypes = {
  Component: PropTypes.object,
  redirectTo: PropTypes.string.isRequired,
};
