import styled from 'styled-components';

export const Header = styled.header`
  margin-right: ${p => p.theme.space[3]}px;

  @media (min-width: 768px) {
    margin-right: ${p => p.theme.space[5]}px;
  }
`;

export const MainNav = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
