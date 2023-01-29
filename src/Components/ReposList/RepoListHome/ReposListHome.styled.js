import styled from 'styled-components';
import { OverlayScrollbarsComponent } from 'overlayscrollbars-react';

export const List = styled(OverlayScrollbarsComponent)`
  position: absolute;
  top: 55px;
  right: 25px;
  max-height: 465px;
  width: 400px;
  overflow-y: auto;
  padding: ${p => p.theme.space[3]}px;
  box-shadow: ${p => p.theme.shadows.textShadow};
  &
    .os-theme-dark.os-scrollbar-vertical
    > .os-scrollbar-track
    > .os-scrollbar-handle {
    max-width: 10px;
    max-height: 20px;
    background: black;
  }
`;
