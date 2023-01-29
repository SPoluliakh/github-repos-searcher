import PropTypes from 'prop-types';
import * as SC from './CustomLink.styled';

export const CustomLink = ({ children, to }) => {
  return (
    <>
      <SC.Link to={to}> {children} </SC.Link>
    </>
  );
};

CustomLink.propTypes = {
  to: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  children: PropTypes.node,
};
