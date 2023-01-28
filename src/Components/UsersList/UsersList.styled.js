import styled from 'styled-components';

export const UserList = styled.ul`
  list-style: none;
  position: absolute;
  top: 55px;
  left: ${p => (p['data-check'] ? 425 : 0)}px;
  max-height: 465px;
  width: 400px;
  text-align: center;
  box-shadow: ${p => p.theme.shadows.textShadow};
  padding-left: ${p => p.theme.space[0]}px;
  padding: ${p => p.theme.space[3]}px;
  overflow-y: auto;
  transition: 750ms linear;
`;

export const Item = styled.li`
  box-shadow: ${p => p.theme.shadows.textShadow};
  padding: ${p => p.theme.space[3]}px;
  color: ${p => p.theme.colors.text};
  transition: 250ms linear;
  :not(:last-child) {
    margin-bottom: 12px;
  }
  :hover {
    cursor: pointer;

    box-shadow: ${p => p.theme.shadows.boxShadow};
  }
`;
