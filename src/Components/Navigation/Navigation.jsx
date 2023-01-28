import { AuthNav } from 'Components/AuthNav/AuthNav';
import { UserNav } from 'Components/UserNav/UserNav';
import { UserMenu } from 'Components/UserMenu/UserMenu';
import { useAuth } from 'Components/huks/useAuth';
import * as SC from './Navigation.styled';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();
  return (
    <>
      <SC.Header>
        <SC.MainNav>
          <UserNav />
          {!isLoggedIn ? <AuthNav /> : <UserMenu />}
        </SC.MainNav>
      </SC.Header>
    </>
  );
};
