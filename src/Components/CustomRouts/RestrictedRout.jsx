import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useAuth } from '../huks/useAuth';

export const RestrictedRout = ({ component: Component, redirectTo = '/' }) => {
  const { isLoggedIn } = useAuth();
  return isLoggedIn ? <Navigate to={redirectTo} replace /> : Component;
};

RestrictedRout.propTypes = {
  Component: PropTypes.object,
  redirectTo: PropTypes.string.isRequired,
};
