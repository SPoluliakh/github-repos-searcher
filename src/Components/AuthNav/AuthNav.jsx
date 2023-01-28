import { CustomLink } from 'Components/CustomLink/CustomLink';
import * as SC from './AuthNav.styled';

const pages = [
  { id: '1', name: 'Sign up', href: 'signup' },
  { id: '2', name: 'Sign in', href: 'signin' },
];

export const AuthNav = () => {
  return (
    <SC.AuthWrap>
      {pages.map(({ id, name, href }) => (
        <CustomLink key={id} to={href}>
          {name}
        </CustomLink>
      ))}
    </SC.AuthWrap>
  );
};
