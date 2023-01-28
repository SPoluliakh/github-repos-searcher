import styled from 'styled-components';

export const List = styled.ul`
  position: absolute;
  top: 55px;
  right: 25px;
  max-height: 465px;
  width: 400px;
  padding: ${p => p.theme.space[3]}px;
  overflow-y: auto;
  box-shadow: ${p => p.theme.shadows.textShadow};
`;
