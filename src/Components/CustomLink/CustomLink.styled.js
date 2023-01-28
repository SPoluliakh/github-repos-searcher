import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  color: ${p => p.theme.colors.linkText};
  font-family: ${p => p.theme.fontFamily.link};
  position: relative;
  text-decoration: none;
  text-shadow: ${p => p.theme.shadows.textShadow};
  transition: 300ms linear;
  font-size: ${p => p.theme.fontSizes.m}px;
  font-weight: ${p => p.theme.fontWeights.normal};

  @media (min-width: 768px) {
    font-size: ${p => p.theme.fontSizes.m}px;
  }

  &.active {
    color: ${p => p.theme.colors.text};
  }
  :hover:not(.active),
  :focus:not(.active) {
    color: ${p => p.theme.colors.text};
  }

  &::after {
    content: ' ';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 100%;
    height: 1px;
    background-color: ${p => p.theme.colors.deleteButton};
    scale: 0;
    transition: 500ms linear;
  }

  :hover::after,
  :focus::after {
    scale: 1;
  }

  &.active::after {
    background-color: ${p => p.theme.colors.text};
    scale: 1;
  }
`;
