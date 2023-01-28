import { CustomLink } from '../CustomLink/CustomLink';
import { useAuth } from 'Components/huks/useAuth';
import { FaGithub } from 'react-icons/fa';
import * as SC from './UserNav.styled';

export const UserNav = () => {
  const { isLoggedIn } = useAuth();
  return (
    <SC.NavigationWrap>
      <SC.IconWrap>
        <FaGithub size="34" fill="white" />
      </SC.IconWrap>
      <CustomLink to="home">Home</CustomLink>
      {isLoggedIn && <CustomLink to="library">Library</CustomLink>}
    </SC.NavigationWrap>
  );
};
