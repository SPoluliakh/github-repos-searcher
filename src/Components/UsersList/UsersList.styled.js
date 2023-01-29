import styled from 'styled-components';
import { OverlayScrollbarsComponent } from 'overlayscrollbars-react';

export const UserList = styled(OverlayScrollbarsComponent)`
  list-style: none;
  position: absolute;
  top: ${p => (p['data-check'] ? 580 : 60)}px;
  left: 10px;
  max-height: 465px;
  width: 200px;
  box-shadow: ${p => p.theme.shadows.textShadow};
  padding-left: ${p => p.theme.space[0]}px;
  padding: ${p => p.theme.space[3]}px;
  overflow-y: auto;
  transition: 750ms linear;
  @media (min-width: 668px) {
    left: 35px;
  }
  @media (min-width: 768px) {
    width: 200px;
    left: ${p => (p['data-check'] ? 345 : 90)}px;
    top: 60px;
  }
  @media (min-width: 1200px) {
    width: 400px;
    left: ${p => (p['data-check'] ? 425 : 0)}px;
    top: 60px;
  }

  &
    .os-theme-dark.os-scrollbar-vertical
    > .os-scrollbar-track
    > .os-scrollbar-handle {
    max-width: 10px;
    max-height: 20px;
    background: black;
  }
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
