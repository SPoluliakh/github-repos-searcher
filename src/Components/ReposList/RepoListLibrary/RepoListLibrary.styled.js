import styled from 'styled-components';

export const List = styled.ul`
  padding-bottom: ${p => p.theme.space[2]}px;
  padding-top: ${p => p.theme.space[2]}px;
  @media (min-width: 768px) {
    margin-left: ${p => p.theme.space[5]}px;
  }
  @media (min-width: 1200px) {
    margin-left: ${p => p.theme.space[0]}px;
  }
`;
