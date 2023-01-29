import styled from 'styled-components';
import { OverlayScrollbarsComponent } from 'overlayscrollbars-react';

export const List = styled(OverlayScrollbarsComponent)`
  position: absolute;
  top: 60px;

  right: 5px;
  max-height: 465px;
  width: 220px;
  overflow-y: auto;
  padding: ${p => p.theme.space[3]}px;
  box-shadow: ${p => p.theme.shadows.textShadow};
  @media (min-width: 668px) {
    width: 300px;
    right: -55px;
  }

  @media (min-width: 768px) {
    width: 310px;
    right: 5px;
  }
  @media (min-width: 1200px) {
    width: 400px;
    right: 25px;
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
