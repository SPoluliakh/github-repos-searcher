import { useAuth } from 'Components/huks/useAuth';
import { useDispatch } from 'react-redux';
import { logOut } from 'Redux/auth/authOperations';
import * as SC from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  const handleLogOut = () => {
    dispatch(logOut());
  };

  return (
    <SC.UserMenuWrap>
      <SC.WelcomText>Welcom {user.name}</SC.WelcomText>
      <SC.OutBtn type="button" onClick={handleLogOut}>
        Logout
      </SC.OutBtn>
    </SC.UserMenuWrap>
  );
};
