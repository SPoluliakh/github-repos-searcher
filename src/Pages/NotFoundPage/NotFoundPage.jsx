import { NoInfo } from 'Components/NoInfo/NoInfo';
import { CustomLink } from 'Components/CustomLink/CustomLink';
import * as SC from './NotFoundPage.styled';

export const NotFoundPage = () => {
  return (
    <SC.Wrap>
      <NoInfo />
      <p>Opsss this page does not exist...</p>
      <CustomLink to="/"> Go home page </CustomLink>
    </SC.Wrap>
  );
};
