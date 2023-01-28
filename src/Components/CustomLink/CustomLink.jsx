import * as SC from './CustomLink.styled';

export const CustomLink = ({ children, to }) => {
  return (
    <>
      <SC.Link to={to}> {children} </SC.Link>
    </>
  );
};
